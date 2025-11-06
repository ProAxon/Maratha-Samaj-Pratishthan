'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="ul-footer">
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
                <h5 className="ul-footer-top-contact-info-address marathi-text">छत्रपती संभाजीनगर, महाराष्ट्र</h5>
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
                  src="/assets/img/logo.png" 
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
                <a href="https://www.facebook.com/share/1DJsnQ5ujR/?mibextid=wwXIfr" target="_blank"><i className="flaticon-facebook"></i></a>
                <a href="https://www.instagram.com/marathasamajpratishthan/" target="_blank"><i className="flaticon-instagram"></i></a>
              </div>
            </div>

            <div className="ul-footer-widget">
              <h3 className="ul-footer-widget-title marathi-heading">द्रुत दुवे</h3>
              <div className="ul-footer-widget-links">
                <a href="#about" className="marathi-text">आमच्याबद्दल</a>
                <a href="#programs" className="marathi-text">उपक्रम</a>
                <a href="#events" className="marathi-text">कार्यक्रम</a>
                <a href="#team" className="marathi-text">संघ</a>
                <a href="#contact" className="marathi-text">संपर्क</a>
              </div>
            </div>

           
            <div className="ul-footer-widget ul-nwsltr-widget">
              <h3 className="ul-footer-widget-title marathi-heading">संपर्क</h3>
              <div className="ul-footer-widget-links ul-footer-contact-links">
                <a href="mailto:info@example.com">
                  <i className="flaticon-mail"></i> info@marathasamajpratishthan.org
                </a>
                <a href="tel:123-456-7890">
                  <i className="flaticon-telephone-call"></i> +91 98765 43210
                </a>
              </div>
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
