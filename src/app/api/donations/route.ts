import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

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

    // Get database instance
    const db = getDatabase();

    // Insert donation record
    const stmt = db.prepare(`
      INSERT INTO donations (
        amount,
        payment_method,
        donor_name,
        donor_email,
        donor_phone,
        pan_card,
        upi_id,
        cheque_number,
        bank_name,
        transaction_id,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      amountNum,
      paymentMethod,
      donorName,
      donorEmail,
      donorPhone,
      panCard || null,
      upiId || null,
      chequeNumber || null,
      bankName || null,
      transactionId || null,
      'pending'
    );

    return NextResponse.json(
      {
        success: true,
        message: 'आपल्या सहयोगाबद्दल धन्यवाद! आपली माहिती यशस्वीरित्या साठवली गेली आहे.',
        donationId: result.lastInsertRowid,
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

    const db = getDatabase();
    const stmt = db.prepare(`
      SELECT * FROM donations 
      ORDER BY created_at DESC 
      LIMIT ? OFFSET ?
    `);

    const donations = stmt.all(limit, offset);

    // Get total count
    const countStmt = db.prepare('SELECT COUNT(*) as total FROM donations');
    const total = countStmt.get() as { total: number };

    return NextResponse.json({
      success: true,
      donations,
      total: total.total,
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

