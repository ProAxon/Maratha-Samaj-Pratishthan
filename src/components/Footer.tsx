'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="ul-footer">
      <div className="ul-footer-top">
        <div className="ul-footer-container">
          <div className="ul-footer-top-contact-infos">
            {/* single info */}
            <div className="ul-footer-top-contact-info">
              {/* icon */}
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-pin"></i>
                </div>
              </div>
              {/* txt */}
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label marathi-text">पत्ता</span>
                <h5 className="ul-footer-top-contact-info-address marathi-text">मुंबई, महाराष्ट्र, भारत</h5>
              </div>
            </div>

            {/* single info */}
            <div className="ul-footer-top-contact-info">
              {/* icon */}
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-email"></i>
                </div>
              </div>
              {/* txt */}
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label marathi-text">ईमेल</span>
                <h5 className="ul-footer-top-contact-info-address">
                  <a href="mailto:info@marathasamajpratishthan.org" className="marathi-text">info@marathasamajpratishthan.org</a>
                </h5>
              </div>
            </div>

            {/* single info */}
            <div className="ul-footer-top-contact-info">
              {/* icon */}
              <div className="ul-footer-top-contact-info-icon">
                <div className="ul-footer-top-contact-info-icon-inner">
                  <i className="flaticon-telephone-call-1"></i>
                </div>
              </div>
              {/* txt */}
              <div className="ul-footer-top-contact-info-txt">
                <span className="ul-footer-top-contact-info-label marathi-text">संपर्क</span>
                <h5 className="ul-footer-top-contact-info-address">
                  <a href="tel:+919876543210" className="marathi-text">+91 98765 43210</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ul-footer-middle">
        <div className="ul-footer-container">
          <div className="ul-footer-middle-wrapper wow animate__fadeInUp">
            <div className="ul-footer-about">
              <Link href="/">
                <Image 
                  src="/assets/img/logo-white.svg" 
                  alt="logo" 
                  className="logo img-responsive"
                  width={120}
                  height={40}
                />
              </Link>
              <p className="ul-footer-about-txt marathi-text">
                मराठा समाज प्रतिष्ठान ही सर्व मराठा बांधवांची एकत्रित समुदाय संस्था आहे, जी समाजाच्या सर्वांगीण उन्नती आणि सशक्तीकरणासाठी कार्य करते.
              </p>
              <div className="ul-footer-socials">
                <a href="#"><i className="flaticon-facebook"></i></a>
                <a href="#"><i className="flaticon-twitter"></i></a>
                <a href="#"><i className="flaticon-linkedin-big-logo"></i></a>
                <a href="#"><i className="flaticon-youtube"></i></a>
              </div>
            </div>

            <div className="ul-footer-widget">
              <h3 className="ul-footer-widget-title">Quick Links</h3>
              <div className="ul-footer-widget-links">
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/blog">Our Blogs</Link>
                <Link href="/faq">FAQ'S</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>

           
            <div className="ul-footer-widget ul-nwsltr-widget">
              <h3 className="ul-footer-widget-title">Contact Us</h3>
              <div className="ul-footer-widget-links ul-footer-contact-links">
                <a href="mailto:info@example.com">
                  <i className="flaticon-mail"></i> info@example.com
                </a>
                <a href="tel:123-456-7890">
                  <i className="flaticon-telephone-call"></i> 123-456-7890
                </a>
              </div>
              <form action="#" className="ul-nwsltr-form">
                <div className="top">
                  <input 
                    type="email" 
                    name="email" 
                    id="nwsltr-email" 
                    placeholder="Your Email Address" 
                    className="ul-nwsltr-input"
                  />
                  <button type="submit">
                    <i className="flaticon-next"></i>
                  </button>
                </div>
                <div className="agreement">
                  <label htmlFor="nwsltr-agreement" className="ul-checkbox-wrapper">
                    <input type="checkbox" name="agreement" id="nwsltr-agreement" hidden />
                    <span className="ul-checkbox">
                      <i className="flaticon-tick"></i>
                    </span>
                    <span className="ul-checkbox-txt">
                      I agree with the <a href="#">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="ul-footer-bottom">
        <div className="ul-footer-container">
          <div className="ul-footer-bottom-wrapper">
            <p className="copyright-txt marathi-text">
              &copy; <span id="footer-copyright-year">{new Date().getFullYear()}</span> मराठा समाज प्रतिष्ठान | सर्व हक्क राखीव
            </p>
            <div className="ul-footer-bottom-nav">
              <a href="#" className="marathi-text">अटी व शर्ती</a> <a href="#" className="marathi-text">गोपनीयता धोरण</a>
            </div>
          </div>
        </div>
      </div>

      {/* vector */}
      <div className="ul-footer-vectors">
        <Image 
          src="/assets/img/footer-vector-img.png" 
          alt="Footer Image" 
          className="ul-footer-vector-1 img-responsive"
          width={200}
          height={100}
        />
      </div>
    </footer>
  );
}
