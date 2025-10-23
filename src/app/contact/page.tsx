'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title">Contact Us</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="ul-contact-page ul-section-spacing">
        <div className="ul-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ul-contact-form-wrapper">
                <h2 className="ul-section-title">Get In Touch</h2>
                <p className="ul-section-descr">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="ul-contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ul-form-group">
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ul-form-group">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ul-form-group">
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Your Phone" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ul-form-group">
                        <input 
                          type="text" 
                          name="subject" 
                          placeholder="Subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="ul-form-group">
                    <textarea 
                      name="message" 
                      placeholder="Your Message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="ul-btn">
                    <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="ul-contact-info">
                <div className="ul-contact-info-item">
                  <div className="ul-contact-info-icon">
                    <i className="flaticon-pin"></i>
                  </div>
                  <div className="ul-contact-info-content">
                    <h4>Address</h4>
                    <p>4648 Rocky Road<br />Philadelphia PA, 1920</p>
                  </div>
                </div>
                
                <div className="ul-contact-info-item">
                  <div className="ul-contact-info-icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="ul-contact-info-content">
                    <h4>Email</h4>
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                  </div>
                </div>
                
                <div className="ul-contact-info-item">
                  <div className="ul-contact-info-icon">
                    <i className="flaticon-telephone-call"></i>
                  </div>
                  <div className="ul-contact-info-content">
                    <h4>Phone</h4>
                    <p><a href="tel:+88012365499">+88 0123 654 99</a></p>
                  </div>
                </div>
              </div>
              
              <div className="ul-contact-image">
                <Image 
                  src="/assets/img/contact-img.jpg" 
                  alt="Contact Us"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
