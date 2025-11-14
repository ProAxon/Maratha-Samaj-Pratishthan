import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      amount,
      paymentMethod,
      donorName,
      donorEmail,
      donorPhone,
      panCard,
      upiId,
      chequeNumber,
      bankName,
      transactionId,
    } = body;

    // Validate required fields
    if (!amount || !paymentMethod || !donorName || !donorEmail || !donorPhone) {
      return NextResponse.json(
        { error: 'कृपया सर्व आवश्यक माहिती भरा' },
        { status: 400 }
      );
    }

    // Validate amount
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      return NextResponse.json(
        { error: 'वैध रक्कम प्रविष्ट करा' },
        { status: 400 }
      );
    }

    // Validate PAN for donations above 5000
    if (amountNum > 5000 && !panCard) {
      return NextResponse.json(
        { error: '₹५००० पेक्षा जास्त रकमेसाठी PAN कार्ड आवश्यक आहे' },
        { status: 400 }
      );
    }

    // Validate payment method specific fields
    if (paymentMethod === 'cheque' && (!chequeNumber || !bankName)) {
      return NextResponse.json(
        { error: 'कृपया चेक/DD क्रमांक आणि बँकेचे नाव भरा' },
        { status: 400 }
      );
    }

    // Insert donation record into Supabase
    const { data, error } = await supabaseAdmin
      .from('donations')
      .insert({
        amount: amountNum,
        payment_method: paymentMethod,
        donor_name: donorName,
        donor_email: donorEmail,
        donor_phone: donorPhone,
        pan_card: panCard || null,
        upi_id: upiId || null,
        cheque_number: chequeNumber || null,
        bank_name: bankName || null,
        transaction_id: transactionId || null,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'आपल्या सहयोगाबद्दल धन्यवाद! आपली माहिती यशस्वीरित्या साठवली गेली आहे.',
        donationId: data.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving donation:', error);
    return NextResponse.json(
      { error: 'सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve donations (optional, for admin use)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Fetch donations from Supabase
    const { data: donations, error: fetchError } = await supabaseAdmin
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (fetchError) {
      console.error('Supabase fetch error:', fetchError);
      return NextResponse.json(
        { error: 'सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा.' },
        { status: 500 }
      );
    }

    // Get total count
    const { count, error: countError } = await supabaseAdmin
      .from('donations')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Supabase count error:', countError);
      return NextResponse.json(
        { error: 'सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      donations: donations || [],
      total: count || 0,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    return NextResponse.json(
      { error: 'सर्व्हर त्रुटी. कृपया पुन्हा प्रयत्न करा.' },
      { status: 500 }
    );
  }
}

