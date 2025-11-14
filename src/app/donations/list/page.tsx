'use client';

import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';

interface Donation {
  id: number;
  amount: number;
  payment_method: string;
  donor_name: string;
  donor_email: string;
  donor_phone: string;
  pan_card: string | null;
  upi_id: string | null;
  cheque_number: string | null;
  bank_name: string | null;
  transaction_id: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function DonationsList() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/donations');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch donations');
      }

      setDonations(result.donations || []);
      setTotal(result.total || 0);
      
      // Calculate total amount
      const sum = (result.donations || []).reduce((acc: number, donation: Donation) => {
        return acc + (donation.amount || 0);
      }, 0);
      setTotalAmount(sum);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching donations:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getPaymentMethodLabel = (method: string) => {
    const labels: { [key: string]: string } = {
      'upi': 'UPI',
      'cheque': 'चेक/DD',
      'netbanking': 'नेट बँकिंग'
    };
    return labels[method] || method;
  };

  const getStatusBadge = (status: string) => {
    const statusColors: { [key: string]: string } = {
      'pending': '#ffc107',
      'completed': '#28a745',
      'failed': '#dc3545'
    };
    const color = statusColors[status] || '#6c757d';
    
    return (
      <span style={{
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '600',
        backgroundColor: `${color}20`,
        color: color,
        border: `1px solid ${color}40`
      }}>
        {status === 'pending' ? 'प्रलंबित' : status === 'completed' ? 'पूर्ण' : 'अयशस्वी'}
      </span>
    );
  };

  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title marathi-heading">दात्यांची माहिती</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">मुख्यपृष्ठ</a>
              <span>/</span>
              <a href="/donations">सहयोग</a>
              <span>/</span>
              <span>दात्यांची माहिती</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Donations List Section */}
      <section className="ul-section-spacing" style={{ backgroundColor: '#F5F5F5', padding: '40px 0', minHeight: '60vh' }}>
        <div className="ul-container">
          {/* Summary Cards */}
          <div className="row mb-4" style={{ marginBottom: '30px' }}>
            <div className="col-md-4 mb-3">
              <div style={{
                backgroundColor: '#FFF',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--ul-primary)', marginBottom: '8px' }}>
                  {total}
                </h3>
                <p className="marathi-heading" style={{ fontSize: '16px', color: '#666', margin: 0 }}>
                  एकूण दान
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{
                backgroundColor: '#FFF',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--ul-secondary)', marginBottom: '8px' }}>
                  {formatAmount(totalAmount)}
                </h3>
                <p className="marathi-heading" style={{ fontSize: '16px', color: '#666', margin: 0 }}>
                  एकूण रक्कम
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={{
                backgroundColor: '#FFF',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#28a745', marginBottom: '8px' }}>
                  {donations.filter(d => d.status === 'completed').length}
                </h3>
                <p className="marathi-heading" style={{ fontSize: '16px', color: '#666', margin: 0 }}>
                  पूर्ण झालेले
                </p>
              </div>
            </div>
          </div>

          {/* Donations Table */}
          <div style={{
            backgroundColor: '#FFF',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflowX: 'auto'
          }}>
            <h2 className="marathi-heading" style={{
              fontSize: 'clamp(24px, 2vw, 28px)',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '24px'
            }}>
              सर्व दात्यांची यादी
            </h2>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p className="marathi-heading" style={{ fontSize: '16px', color: '#666' }}>
                  लोड होत आहे...
                </p>
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '16px', color: '#dc3545' }}>
                  {error}
                </p>
                <button
                  onClick={fetchDonations}
                  className="ul-btn"
                  style={{ marginTop: '16px' }}
                >
                  पुन्हा प्रयत्न करा
                </button>
              </div>
            ) : donations.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p className="marathi-heading" style={{ fontSize: '16px', color: '#666' }}>
                  अद्याप कोणतीही दान माहिती उपलब्ध नाही.
                </p>
                <a href="/donations" className="ul-btn" style={{ marginTop: '16px', display: 'inline-block' }}>
                  सहयोग करा
                </a>
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div style={{ overflowX: 'auto', display: 'none' }} className="d-md-block">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #E5E5E5' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>ID</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>नाव</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>ईमेल</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>मोबाइल</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold', color: '#000' }}>रक्कम</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>पेमेंट</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>स्थिती</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', color: '#000' }}>तारीख</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((donation) => (
                        <tr key={donation.id} style={{ borderBottom: '1px solid #F0F0F0' }}>
                          <td style={{ padding: '12px', color: '#666' }}>#{donation.id}</td>
                          <td style={{ padding: '12px', fontWeight: '600', color: '#000' }}>{donation.donor_name}</td>
                          <td style={{ padding: '12px', color: '#666' }}>{donation.donor_email}</td>
                          <td style={{ padding: '12px', color: '#666' }}>{donation.donor_phone}</td>
                          <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: 'var(--ul-primary)' }}>
                            {formatAmount(donation.amount)}
                          </td>
                          <td style={{ padding: '12px', color: '#666' }}>
                            {getPaymentMethodLabel(donation.payment_method)}
                          </td>
                          <td style={{ padding: '12px' }}>
                            {getStatusBadge(donation.status)}
                          </td>
                          <td style={{ padding: '12px', color: '#666', fontSize: '14px' }}>
                            {formatDate(donation.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="d-md-none">
                  {donations.map((donation) => (
                    <div
                      key={donation.id}
                      style={{
                        border: '1px solid #E5E5E5',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px',
                        backgroundColor: '#FAFAFA'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                        <div>
                          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', marginBottom: '4px' }}>
                            {donation.donor_name}
                          </h3>
                          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>ID: #{donation.id}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--ul-primary)', marginBottom: '4px' }}>
                            {formatAmount(donation.amount)}
                          </p>
                          {getStatusBadge(donation.status)}
                        </div>
                      </div>
                      
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E5E5E5' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '4px' }}>ईमेल:</span>
                          <span style={{ fontSize: '14px', color: '#333' }}>{donation.donor_email}</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '4px' }}>मोबाइल:</span>
                          <span style={{ fontSize: '14px', color: '#333' }}>{donation.donor_phone}</span>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '4px' }}>पेमेंट पद्धत:</span>
                          <span style={{ fontSize: '14px', color: '#333' }}>{getPaymentMethodLabel(donation.payment_method)}</span>
                        </div>
                        {donation.pan_card && (
                          <div style={{ marginBottom: '8px' }}>
                            <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '4px' }}>PAN:</span>
                            <span style={{ fontSize: '14px', color: '#333' }}>{donation.pan_card}</span>
                          </div>
                        )}
                        <div>
                          <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '4px' }}>तारीख:</span>
                          <span style={{ fontSize: '14px', color: '#333' }}>{formatDate(donation.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            
          </div>
        </div>
      </section>
    </Layout>
  );
}

