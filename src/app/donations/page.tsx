'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

type PaymentMethod = 'upi' | 'cheque' | 'netbanking';

export default function Donations() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [chequeNumber, setChequeNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [panCard, setPanCard] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // UPI account for donations (QR code available)
  const UPI_ID = 'wctrjadhav@okaxis';
  const WHATSAPP_NUMBER = '9822068794'; // Wing Commander T.R. Jadhav
  const CONTACT_MOBILE = '9822057894';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const amountNum = parseFloat(amount);
    const requiresDocuments = amountNum > 5000;

    // Validate amount
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      alert('कृपया वैध रक्कम प्रविष्ट करा');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (!donorName || !donorEmail || !donorPhone) {
      alert('कृपया सर्व आवश्यक माहिती भरा');
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number (must be exactly 10 digits)
    const phoneDigits = donorPhone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      alert('मोबाइल नंबर नक्की 10 अंक असावा');
      setIsSubmitting(false);
      return;
    }

    // Validate PAN and Aadhar for donations above 5000
    if (requiresDocuments && !panCard) {
      alert('₹५००० पेक्षा जास्त रकमेसाठी PAN कार्ड आवश्यक आहे');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && panCard && panCard.length !== 10) {
      alert('PAN कार्ड क्रमांक नक्की 10 अक्षर असावा');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && !aadharNumber) {
      alert('₹५००० पेक्षा जास्त रकमेसाठी आधार क्रमांक आवश्यक आहे');
      setIsSubmitting(false);
      return;
    }
    if (requiresDocuments && aadharNumber && aadharNumber.length !== 12) {
      alert('आधार क्रमांक नक्की 12 अंक असावा');
      setIsSubmitting(false);
      return;
    }

    // Validate payment method specific fields
    if (paymentMethod === 'cheque' && (!chequeNumber || !bankName)) {
      alert('कृपया चेक/DD क्रमांक आणि बँकेचे नाव भरा');
      setIsSubmitting(false);
      return;
    }

    const donationData = {
      amount,
      paymentMethod,
      donorName,
      donorEmail,
      donorPhone: phoneDigits, // Use cleaned phone number (only digits)
      ...(requiresDocuments && { panCard }),
      ...(requiresDocuments && aadharNumber && { aadharNumber }),
      ...(paymentMethod === 'upi' && { upiId: UPI_ID }),
      ...(paymentMethod === 'cheque' && { chequeNumber, bankName }),
      ...(paymentMethod === 'netbanking' && transactionId && { transactionId }),
    };

    try {
      // Submit to API
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || 'त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
        setIsSubmitting(false);
        return;
      }

      // Success - show success message
      setSubmitMessage({ type: 'success', text: result.message || 'आपली माहिती यशस्वीरित्या साठवली गेली आहे!' });

      // Handle payment method specific actions
      if (paymentMethod === 'upi') {
        // For web, we'll show UPI details and instructions
        const upiUrl = `upi://pay?pa=${UPI_ID}&am=${amount}&cu=INR&tn=Donation%20to%20Maratha%20Samaj%20Pratishthan`;

        // Try to open UPI app (works on mobile browsers)
        if (typeof window !== 'undefined') {
          // Delay to show success message first
          setTimeout(() => {
            window.location.href = upiUrl;
            // Fallback: Show instructions if UPI app doesn't open
            setTimeout(() => {
              alert(`UPI ID: ${UPI_ID}\nरक्कम: ₹${amount}\n\nकृपया आपल्या UPI ऍपमध्ये ही माहिती वापरून पेमेंट करा.`);
            }, 2000);
          }, 1000);
        }
      } else if (paymentMethod === 'cheque') {
        alert('आपल्या सहयोगाबद्दल धन्यवाद! कृपया चेक/DD पुढील पत्त्यावर पाठवा:\nमराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर, महाराष्ट्र');
      } else if (paymentMethod === 'netbanking') {
        alert('आपल्या सहयोगाबद्दल धन्यवाद! कृपया हस्तांतरण पूर्ण करा आणि आम्हाला व्यवहार ID पाठवा.');
      }

      // Reset form after successful submission
      setTimeout(() => {
        setDonorName('');
        setDonorEmail('');
        setDonorPhone('');
        setPanCard('');
        setAadharNumber('');
        setChequeNumber('');
        setBankName('');
        setAmount('');
        setTransactionId('');
        setSubmitMessage(null);
      }, 5000);

    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('नेटवर्क त्रुटी. कृपया पुन्हा प्रयत्न करा.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const amountNum = parseFloat(amount || '0');
  const requiresPan = amountNum > 5000;

  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title marathi-heading">सहयोग करा</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">मुख्यपृष्ठ</a>
              <span>/</span>
              <span>सहयोग</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="ul-section-spacing" style={{ backgroundColor: '#F5F5F5', padding: '40px 0' }}>
        <div className="ul-container">
          <div className="row justify-content-center">
            {/* Donation Form */}
            <div className="col-lg-8 col-md-10 col-12 mb-4">
              <div style={{
                backgroundColor: '#FFF',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h2 className="marathi-heading" style={{
                  fontSize: 'clamp(24px, 2vw, 32px)',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '24px',
                  padding: '10px 0'
                }}>
                  सहयोग करा
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Amount Input */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                      देणगी रक्कम (₹) *
                    </label>
                    <input
                      type="number"
                      placeholder="उदा: 1000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      min="1"
                      step="1"
                      style={{
                        width: '100%',
                        border: '2px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '14px',
                        fontSize: '16px',
                        backgroundColor: '#FFF'
                      }}
                    />
                    <p style={{
                      fontSize: '12px',
                      color: '#999',
                      marginTop: '6px',
                      fontStyle: 'italic'
                    }}>
                      कृपया आपली इच्छित देणगी रक्कम प्रविष्ट करा
            </p>
          </div>

                  {/* Donor Information */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 className="marathi-heading" style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#000',
                      marginBottom: '16px'
                    }}>
                      दात्याची माहिती
                    </h3>
                    <input
                      type="text"
                      placeholder="नाव *"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        border: '2px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '14px',
                        fontSize: '16px',
                        marginBottom: '12px',
                        backgroundColor: '#FFF'
                      }}
                    />
                    <input
                      type="email"
                      placeholder="ईमेल *"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        border: '2px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '14px',
                        fontSize: '16px',
                        marginBottom: '12px',
                        backgroundColor: '#FFF'
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="मोबाइल नंबर (10 अंक) *"
                      value={donorPhone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Only numbers
                        if (value.length <= 10) {
                          setDonorPhone(value);
                        }
                      }}
                      maxLength={10}
                      required
                      style={{
                        width: '100%',
                        border: '2px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '14px',
                        fontSize: '16px',
                        backgroundColor: '#FFF'
                      }}
                    />
                  </div>

                  {/* PAN Card and Aadhar - Required for donations above ₹5000 */}
                  {requiresPan && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 className="marathi-heading" style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '16px'
                      }}>
                        PAN कार्ड आणि आधार माहिती
                      </h3>
                      <input
                        type="text"
                        placeholder="PAN कार्ड क्रमांक (10 अक्षर) *"
                        value={panCard}
                        onChange={(e) => setPanCard(e.target.value.toUpperCase())}
                        maxLength={10}
                        required
                        style={{
                          width: '100%',
                          border: '2px solid #E5E5E5',
                          borderRadius: '8px',
                          padding: '14px',
                          fontSize: '16px',
                          marginBottom: '12px',
                          backgroundColor: '#FFF',
                          textTransform: 'uppercase'
                        }}
                      />
                      <input
                        type="text"
                        placeholder="आधार क्रमांक (12 अंक) *"
                        value={aadharNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ''); // Only numbers
                          if (value.length <= 12) {
                            setAadharNumber(value);
                          }
                        }}
                        maxLength={12}
                        required
                        style={{
                          width: '100%',
                          border: '2px solid #E5E5E5',
                          borderRadius: '8px',
                          padding: '14px',
                          fontSize: '16px',
                          marginBottom: '12px',
                          backgroundColor: '#FFF'
                        }}
                      />
                      <p style={{
                        fontSize: '14px',
                        color: '#666',
                        fontStyle: 'italic',
                        marginTop: '8px'
                      }}>
                        ₹५००० पेक्षा जास्त रकमेसाठी PAN कार्ड (10 अक्षर) आणि आधार क्रमांक (12 अंक) आयकर नियमांनुसार अनिवार्य आहे.
                      </p>
                    </div>
                  )}

                  {/* Payment Method Selection */}
                  <div style={{ marginBottom: '24px' }}>
                    <h3 className="marathi-heading" style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#000',
                      marginBottom: '16px'
                    }}>
                      पेमेंट पद्धत निवडा
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        style={{
                          flex: '1',
                          minWidth: '30%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: `2px solid ${paymentMethod === 'upi' ? 'var(--ul-primary)' : '#E5E5E5'}`,
                          backgroundColor: paymentMethod === 'upi' ? 'var(--ul-c4)' : '#FFF',
                          color: paymentMethod === 'upi' ? 'var(--ul-primary)' : '#333',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        UPI
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cheque')}
                        style={{
                          flex: '1',
                          minWidth: '30%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: `2px solid ${paymentMethod === 'cheque' ? 'var(--ul-primary)' : '#E5E5E5'}`,
                          backgroundColor: paymentMethod === 'cheque' ? 'var(--ul-c4)' : '#FFF',
                          color: paymentMethod === 'cheque' ? 'var(--ul-primary)' : '#333',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        चेक/DD
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('netbanking')}
                        style={{
                          flex: '1',
                          minWidth: '30%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: `2px solid ${paymentMethod === 'netbanking' ? 'var(--ul-primary)' : '#E5E5E5'}`,
                          backgroundColor: paymentMethod === 'netbanking' ? 'var(--ul-c4)' : '#FFF',
                          color: paymentMethod === 'netbanking' ? 'var(--ul-primary)' : '#333',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        नेट बँकिंग
                      </button>
                    </div>
                  </div>

                  {/* Payment Method Specific Fields */}
                  {paymentMethod === 'upi' && (
                    <div style={{
                      marginBottom: '24px',
                      backgroundColor: '#F9F9F9',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '2px solid var(--ul-c4)'
                    }}>
                      <h3 className="marathi-heading" style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '12px'
                      }}>
                        UPI पेमेंट
                      </h3>
                      <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>पेमेंट करा:</p>
                      <p style={{
                        fontSize: '20px',
                        color: 'var(--ul-primary)',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        marginBottom: '8px'
                      }}>
                        {UPI_ID}
                      </p>
                      <p style={{
                        fontSize: '16px',
                        color: '#333',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        रक्कम: ₹{amount || '0'}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#666',
                        fontStyle: 'italic',
                        marginBottom: '12px'
                      }}>
                        "सहयोग करा" बटणावर क्लिक करून आपल्या UPI ऍपमध्ये पेमेंट पूर्ण करा किंवा QR कोड स्कॅन करा.
                      </p>
                      <div style={{
                        backgroundColor: '#E8F5E9',
                        padding: '12px',
                        borderRadius: '6px',
                        border: '1px solid #4CAF50',
                        marginTop: '12px'
                      }}>
                        <p style={{ fontSize: '13px', color: '#2E7D32', margin: 0, fontWeight: '600' }}>
                          देणगी पाठवल्यानंतर, देणगी रकमेचा स्क्रीनशॉट आपल्या नावासहित WhatsApp वर पाठवा:
                        </p>
                        <p style={{ fontSize: '14px', color: 'var(--ul-primary)', margin: '4px 0 0 0', fontWeight: 'bold' }}>
                          {WHATSAPP_NUMBER} (विंग कमांडर टी. आर. जाधव)
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cheque' && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 className="marathi-heading" style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '16px'
                      }}>
                        चेक/DD माहिती
                      </h3>

                      {/* Bank Account Details */}
                      <div style={{
                        backgroundColor: '#F9F9F9',
                        padding: '16px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        border: '2px solid var(--ul-c4)'
                      }}>
                        <h4 className="marathi-heading" style={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#000',
                          marginBottom: '12px'
                        }}>
                          बँक खाते माहिती
                        </h4>
                        <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E5E5' }}>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>खातेधारक नाव:</span>
                            <span style={{ fontSize: '14px', color: '#000', fontWeight: '600' }}>मराठा समाज प्रतिष्ठान</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E5E5' }}>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>खाते क्रमांक:</span>
                            <span style={{ fontSize: '14px', color: '#000', fontWeight: '600', fontFamily: 'monospace' }}>80087057609</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E5E5' }}>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>IFSC कोड:</span>
                            <span style={{ fontSize: '14px', color: 'var(--ul-primary)', fontWeight: 'bold', fontFamily: 'monospace' }}>MAHG0005129</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #E5E5E5' }}>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>बँकेचे नाव:</span>
                            <span style={{ fontSize: '14px', color: '#000', fontWeight: '600' }}>महाराष्ट्र ग्रामीण बँक</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                            <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>शाखा:</span>
                            <span style={{ fontSize: '14px', color: '#000', fontWeight: '600' }}>समर्थ नगर, छत्रपती संभाजीनगर</span>
                          </div>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                          देणगी रक्कम (₹) *
                        </label>
                        <input
                          type="number"
                          placeholder="उदा: 1000"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                          min="1"
                          step="1"
                          style={{
                            width: '100%',
                            border: '2px solid #E5E5E5',
                            borderRadius: '8px',
                            padding: '14px',
                            fontSize: '16px',
                            marginBottom: '12px',
                            backgroundColor: '#FFF'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                          चेक/DD क्रमांक *
                        </label>
                        <input
                          type="text"
                          placeholder="उदा: 123456"
                          value={chequeNumber}
                          onChange={(e) => setChequeNumber(e.target.value)}
                          required
                          style={{
                            width: '100%',
                            border: '2px solid #E5E5E5',
                            borderRadius: '8px',
                            padding: '14px',
                            fontSize: '16px',
                            backgroundColor: '#FFF'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                          बँकेचे नाव *
                        </label>
                        <input
                          type="text"
                          placeholder="उदा: State Bank of India"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          required
                          style={{
                            width: '100%',
                            border: '2px solid #E5E5E5',
                            borderRadius: '8px',
                            padding: '14px',
                            fontSize: '16px',
                            backgroundColor: '#FFF'
                          }}
                        />
                      </div>

                      {/* Instructions */}
                      <div style={{
                        backgroundColor: '#FFF9E6',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #FFE082',
                        marginTop: '16px'
                      }}>
                        <h4 className="marathi-heading" style={{
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: '#E65100',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          महत्वाची सूचना:
                        </h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
                          <li style={{ marginBottom: '8px' }}>
                            कृपया चेक/DD "मराठा समाज प्रतिष्ठान" या नावाने लिहा
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            चेक/DD मध्ये रक्कम: <strong style={{ color: 'var(--ul-primary)' }}>₹{amount || '0'}</strong>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            चेक/DD पाठवण्याचा पत्ता:
                            <br />
                            <strong style={{ color: '#000', display: 'block', marginTop: '4px' }}>
                              मराठा समाज प्रतिष्ठान<br />
                              समर्थ नगर, छत्रपती संभाजीनगर,<br />
                              महाराष्ट्र
                            </strong>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            देणगी पाठवल्यानंतर, देणगी रकमेचा स्क्रीनशॉट आपल्या नावासहित WhatsApp वर पाठवा:
                            <br />
                            <strong style={{ color: 'var(--ul-primary)', display: 'block', marginTop: '4px', fontSize: '16px' }}>
                              {WHATSAPP_NUMBER} (विंग कमांडर टी. आर. जाधव)
                            </strong>
                          </li>
                          <li style={{ marginBottom: '0' }}>
                            संपर्क मोबाइल: <strong>{CONTACT_MOBILE}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 className="marathi-heading" style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: '16px'
                      }}>
                        नेट बँकिंग माहिती
                      </h3>

                      {/* Amount Input */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                          देणगी रक्कम (₹) *
                        </label>
                        <input
                          type="number"
                          placeholder="उदा: 1000"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                          min="1"
                          step="1"
                          style={{
                            width: '100%',
                            border: '2px solid #E5E5E5',
                            borderRadius: '8px',
                            padding: '14px',
                            fontSize: '16px',
                            backgroundColor: '#FFF'
                          }}
                        />
                      </div>

                      {/* Bank Account Details */}
                      <div style={{
                        backgroundColor: '#F9F9F9',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        border: '2px solid var(--ul-c4)'
                      }}>
                        <h4 className="marathi-heading" style={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#000',
                          marginBottom: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          बँक खाते माहिती
                        </h4>
                        <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                          <div style={{
                            backgroundColor: '#FFF',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #E5E5E5'
                          }}>
                            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>खातेधारक नाव</div>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>मराठा समाज प्रतिष्ठान</div>
                          </div>
                          <div style={{
                            backgroundColor: '#FFF',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #E5E5E5'
                          }}>
                            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>खाते क्रमांक</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--ul-primary)', fontFamily: 'monospace', letterSpacing: '1px' }}>
                              80087057609
                            </div>
                          </div>
                          <div style={{
                            backgroundColor: '#FFF',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #E5E5E5'
                          }}>
                            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>IFSC कोड</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--ul-primary)', fontFamily: 'monospace', letterSpacing: '1px' }}>
                              MAHG0005129
                            </div>
                          </div>
                          <div style={{
                            backgroundColor: '#FFF',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #E5E5E5'
                          }}>
                            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>बँकेचे नाव</div>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>महाराष्ट्र ग्रामीण बँक</div>
                          </div>
                          <div style={{
                            backgroundColor: '#FFF',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #E5E5E5'
                          }}>
                            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>शाखा</div>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>समर्थ नगर, छत्रपती संभाजीनगर, महाराष्ट्र</div>
                          </div>
                          <div style={{
                            backgroundColor: '#E8F5E9',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #4CAF50'
                          }}>
                            <div style={{ fontSize: '12px', color: '#2E7D32', marginBottom: '4px', fontWeight: '600' }}>हस्तांतरण रक्कम</div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1B5E20' }}>
                              ₹{amount || '0'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step-by-step Instructions */}
                      <div style={{
                        backgroundColor: '#E3F2FD',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #90CAF9',
                        marginBottom: '16px'
                      }}>
                        <h4 className="marathi-heading" style={{
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: '#1565C0',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          हस्तांतरण करण्याची पायऱ्या:
                        </h4>
                        <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#424242', lineHeight: '1.8' }}>
                          <li style={{ marginBottom: '8px' }}>
                            आपल्या बँकेच्या नेट बँकिंग पोर्टलवर लॉग इन करा
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            "Fund Transfer" किंवा "NEFT/RTGS" पर्याय निवडा
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            वरील बँक खाते माहिती प्रविष्ट करा (खाते क्रमांक, IFSC कोड)
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            रक्कम: <strong style={{ color: 'var(--ul-primary)' }}>₹{amount || '0'}</strong> प्रविष्ट करा
                          </li>
                          <li style={{ marginBottom: '0' }}>
                            व्यवहार पूर्ण झाल्यानंतर व्यवहार ID/Reference Number नोंदवून ठेवा
                          </li>
                        </ol>
                      </div>

                      {/* Important Notes */}
                      <div style={{
                        backgroundColor: '#FFF9E6',
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid #FFE082'
                      }}>
                        <h4 className="marathi-heading" style={{
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: '#E65100',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          महत्वाची सूचना:
                        </h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#666', lineHeight: '1.8' }}>
                          <li style={{ marginBottom: '8px' }}>
                            कृपया IFSC कोड आणि खाते क्रमांक अचूक प्रविष्ट करा
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            व्यवहार पूर्ण झाल्यानंतर व्यवहार ID/Reference Number आणि स्क्रीनशॉट आपल्या नावासहित WhatsApp वर पाठवा:
                            <br />
                            <strong style={{ color: 'var(--ul-primary)', display: 'block', marginTop: '4px', fontSize: '16px' }}>
                              {WHATSAPP_NUMBER} (विंग कमांडर टी. आर. जाधव)
                            </strong>
                          </li>
                          <li style={{ marginBottom: '8px' }}>
                            NEFT व्यवहार सामान्यतः 2-4 तासांत पूर्ण होतात
                          </li>
                          <li style={{ marginBottom: '0' }}>
                            RTGS व्यवहार ₹2 लाख पेक्षा जास्त रकमेसाठी वापरा (सामान्यतः त्वरित)
                          </li>
                        </ul>
                      </div>

                      {/* Transaction ID Field (Optional) */}
                      <div style={{ marginTop: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                          व्यवहार ID/Reference Number (पूर्ण झाल्यानंतर)
                        </label>
                        <input
                          type="text"
                          placeholder="उदा: NEFT123456789"
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          style={{
                            width: '100%',
                            border: '2px solid #E5E5E5',
                            borderRadius: '8px',
                            padding: '14px',
                            fontSize: '16px',
                            backgroundColor: '#FFF'
                          }}
                        />
                        <p style={{
                          fontSize: '12px',
                          color: '#999',
                          marginTop: '6px',
                          fontStyle: 'italic'
                        }}>
                          * हे क्षेत्र वैकल्पिक आहे. व्यवहार पूर्ण झाल्यानंतर भरा.
                        </p>
                  </div>
                </div>
                  )}

                  {/* Submit Message */}
                  {submitMessage && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '16px',
                      marginTop: '16px',
                      backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                      color: submitMessage.type === 'success' ? '#155724' : '#721c24',
                      border: `1px solid ${submitMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                      fontSize: '14px'
                    }}>
                      {submitMessage.text}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="ul-btn"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      marginTop: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      opacity: isSubmitting ? 0.6 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <i className="flaticon-fast-forward-double-right-arrows-symbol"></i>
                    {isSubmitting ? 'साठवत आहे...' : 'सहयोग करा'}
                  </button>
                </form>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </Layout>
  );
}
