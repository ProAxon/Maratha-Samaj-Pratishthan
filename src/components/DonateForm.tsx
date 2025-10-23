'use client';

import { useState } from 'react';

export default function DonateForm() {
  const [selectedAmount, setSelectedAmount] = useState('10');
  const [customAmount, setCustomAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation form submission
    console.log('Donation amount:', selectedAmount === 'custom' ? customAmount : selectedAmount);
  };

  return (
    <div className="ul-section-spacing">
      <div className="ul-container">
        <div className="ul-donate-form-section">
          <div className="row justify-content-between align-items-center">
            {/* donate form */}
            <div className="col-lg-6 position-relative">
              <div className="ul-donate-form-wrapper">
                <h3 className="ul-donate-form-title marathi-heading">सहयोग करा</h3>
                <form onSubmit={handleSubmit} className="ul-donate-form">
                  {['10', '20', '30', '40', '50'].map((amount) => (
                    <div key={amount}>
                      <input 
                        type="radio" 
                        name="donate-amount" 
                        id={`donate-amount-${amount}`}
                        value={amount}
                        checked={selectedAmount === amount}
                        onChange={(e) => setSelectedAmount(e.target.value)}
                        hidden 
                      />
                      <label 
                        htmlFor={`donate-amount-${amount}`} 
                        className="ul-donate-form-label"
                      >
                        ₹{amount}
                      </label>
                    </div>
                  ))}

                  <div className="custom-amount-wrapper">
                    <input 
                      type="radio" 
                      name="donate-amount" 
                      id="custom-amount"
                      value="custom"
                      checked={selectedAmount === 'custom'}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <label htmlFor="custom-amount" className="ul-donate-form-label">
                      <input 
                        type="number" 
                        name="custom-amount" 
                        id="donate-amount-custom" 
                        placeholder="स्वतःची रक्कम" 
                        className="ul-donate-form-custom-input"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('custom');
                        }}
                      />
                    </label>
                  </div>

                  <div>
                    <button type="submit" className="ul-btn">
                      <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> सहयोग करा
                    </button>
                  </div>
                </form>
              </div>
              <img 
                src="/assets/img/donate-form-vector.svg" 
                alt="vector" 
                className="ul-donate-form-vector"
              />
            </div>

            {/* donate form info */}
            <div className="col-xl-5 col-lg-6">
              <div className="ul-donate-form-section-txt">
                <span className="ul-section-sub-title text-white marathi-subtitle">सहयोग करा</span>
                <h2 className="ul-section-title text-white marathi-heading">समाजाच्या विकासासाठी सहयोग</h2>

                <div className="ul-donation-progress">
                  <div className="donation-progress-container ul-progress-container">
                    <div 
                      className="donation-progressbar ul-progressbar" 
                      data-ul-progress-value="64"
                    >
                      <div className="donation-progress-label ul-progress-label"></div>
                    </div>
                  </div>
                  <div className="ul-donation-progress-labels">
                    <span className="ul-donation-progress-label">Raised : $25,000</span>
                    <span className="ul-donation-progress-label">Goal : $30,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
