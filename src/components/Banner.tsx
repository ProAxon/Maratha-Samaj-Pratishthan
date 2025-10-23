'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="ul-banner">
      <div className="ul-banner-container">
        <div className="row gy-4 row-cols-lg-2 row-cols-1 align-items-center flex-column-reverse flex-lg-row">
          {/* banner text */}
          <div className="col">
            <div className="ul-banner-txt">
              <div className="wow animate__fadeInUp">
                <span className="ul-banner-sub-title ul-section-sub-title marathi-subtitle">मराठा समाज प्रतिष्ठान</span>
                <h1 className="ul-banner-title marathi-heading">एकतेतून सशक्त भविष्य</h1>
                <p className="ul-banner-descr marathi-text">
                  सर्व मराठा बांधवांसाठी एकत्रित व्यासपीठ – शिक्षण, उद्योजकता आणि समाजसशक्तीकरणाच्या दिशेने एक मजबूत पाऊल. प्रत्येक मराठा सबळ झाला तरच संपूर्ण समाज समर्थ होईल.
                </p>
                <div className="ul-banner-btns">
                  <Link href="/contact" className="ul-btn">
                    <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> सदस्य व्हा
                  </Link>
                  <Link href="/services" className="ul-btn ul-btn--2">
                    <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> उपक्रम जाणून घ्या
                  </Link>

                  <div className="ul-banner-stat">
                    <div className="imgs">
                      <Image src="/assets/img/user-1.png" alt="Person" width={40} height={40} />
                      <Image src="/assets/img/user-3.png" alt="Person" width={40} height={40} />
                      <Image src="/assets/img/user-2.png" alt="Person" width={40} height={40} />
                      <span className="number">500+</span>
                    </div>
                    <span className="txt marathi-text">सक्रिय सदस्य</span>
                  </div>
                </div>
              </div>

              <Image 
                src="/assets/img/vector-img.png" 
                alt="Vector" 
                className="ul-banner-txt-vector img-responsive"
                width={400}
                height={100}
              />
            </div>
          </div>

          {/* img */}
          <div className="col align-self-start">
            <div className="ul-banner-img">
              <div className="img-wrapper img-container">
                <Image 
                  src="/assets/img/shivaji.jpg" 
                  alt="Banner Image"
                  width={800}
                  height={800}
                  className="img-responsive"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
