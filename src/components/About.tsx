'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="ul-about ul-section-spacing wow animate__fadeInUp">
      <div className="ul-container">
        <div className="row row-cols-md-2 row-cols-1 align-items-center gy-4 ul-about-row">
          <div className="col">
            <div className="ul-about-imgs">
              <div className="img-wrapper img-container">
                <Image 
                  src="/assets/img/about-img.png" 
                  alt="Image"
                  width={500}
                  height={500}
                  className="img-responsive"
                />
              </div>
              <div className="ul-about-imgs-vectors">
                <Image 
                  src="/assets/img/about-img-vector-1.svg" 
                  alt="Image" 
                  className="vector-1 img-responsive"
                  width={100}
                  height={100}
                />
                <Image 
                  src="/assets/img/about-img-vector-2.svg" 
                  alt="Image" 
                  className="vector-2 img-responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* txt */}
          <div className="col">
            <div className="ul-about-txt">
              <span className="ul-section-sub-title ul-section-sub-title--2 marathi-subtitle">आम्ही कोण?</span>
              <h2 className="ul-section-title marathi-heading">मराठा समाज प्रतिष्ठान</h2>
              <p className="ul-section-descr marathi-text">
                मराठा समाज प्रतिष्ठान ही सर्व मराठा बांधवांची एकत्रित समुदाय संस्था आहे, जी समाजाच्या सर्वांगीण उन्नती आणि सशक्तीकरणासाठी कार्य करते. शिक्षण, उद्योजकता, रोजगार, समाजजागरूकता आणि सांस्कृतिक गौरव यांद्वारे मराठा समाजाला सक्षम व स्वावलंबी बनवणे हा आमचा मूळ उद्देश आहे.
              </p>

              <div className="ul-about-block">
                <div className="block-left">
                  <div className="block-heading">
                    <div className="icon"><i className="flaticon-love"></i></div>
                    <h3 className="block-title marathi-heading">आमची मूल्ये</h3>
                  </div>
                  <ul className="block-list marathi-text">
                    <li>एकता - सर्वांना सोबत घेऊन चालणं</li>
                    <li>अभिमान - मराठा असण्याचा गौरव जपणं</li>
                    <li>सशक्तीकरण - ज्ञान आणि संधींच्या आधारे विकास</li>
                  </ul>
                </div>
                <div className="block-right">
                  <Image 
                    src="/assets/img/about-block-img.jpg" 
                    alt="Image"
                    width={200}
                    height={150}
                    className="img-responsive"
                  />
                </div>
              </div>

              <div className="ul-about-bottom">
                <Link href="/about" className="ul-btn">
                  <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> अधिक जाणून घ्या
                </Link>

                <div className="ul-about-call">
                  <div className="icon"><i className="flaticon-telephone-call"></i></div>
                  <div className="txt">
                    <span className="call-title marathi-text">संपर्क साधा</span>
                    <a href="tel:+919876543210" className="marathi-text">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vector */}
      <div className="ul-about-vectors">
        <Image 
          src="/assets/img/about-vector-1.png" 
          alt="vector" 
          className="vector-1 img-responsive"
          width={200}
          height={100}
        />
      </div>
    </section>
  );
}
