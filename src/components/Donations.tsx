'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Donations() {
  const programs = [
    {
      id: 1,
      image: '/assets/img/donation-1.jpg',
      tag: 'शिक्षण',
      progress: 75,
      raised: '₹2,50,000',
      goal: '₹3,00,000',
      title: 'शिक्षण सहाय्यता व मार्गदर्शन शिबिरे',
      description: 'मराठा युवक-युवतींना शिक्षण, कौशल्य व करिअर मार्गदर्शन उपलब्ध करून देणे'
    },

  ];

  return (
    <section className="ul-donations ul-section-spacing overflow-hidden">
      {/* heading */}
      <div className="ul-container">
        <div className="ul-section-heading ul-donations-heading justify-content-between text-center">
          <div className="left">
            <span className="ul-section-sub-title marathi-subtitle">
              <span className="txt">आमचे उपक्रम</span>
            </span>
            <h2 className="ul-section-title marathi-heading">सामाजिक विकासाच्या दिशेने</h2>
          </div>

          <div className="flex-shrink-0">
            <div className="ul-banner-stat">
              <div className="imgs">
                <Image src="/assets/img/user-1.png" alt="Person" width={40} height={40} />
                <Image src="/assets/img/user-3.png" alt="Person" width={40} height={40} />
                <Image src="/assets/img/user-2.png" alt="Person" width={40} height={40} />
                <span className="number">500+</span>
              </div>
              <span className="txt text-white marathi-text">सक्रिय सदस्य</span>
            </div>
          </div>
          <div className="ul-slider-nav ul-donations-slider-nav">
            <button className="prev"><i className="flaticon-back"></i></button>
            <button className="next"><i className="flaticon-next"></i></button>
          </div>
        </div>
      </div>

      {/* DONATIONS slider */}
      <div className="ul-container wow animate__fadeInUp">
        <div className="ul-donations-slider swiper overflow-visible">
          <div className="swiper-wrapper">
            {programs.map((program) => (
              <div key={program.id} className="swiper-slide">
                <div className="ul-donation">
                  <div className="ul-donation-img img-container">
                    <Image 
                      src={program.image} 
                      alt="Program Image"
                      width={400}
                      height={300}
                      className="img-responsive"
                    />
                    <span className="tag marathi-text">{program.tag}</span>
                  </div>
                  <div className="ul-donation-txt">
                    <div className="ul-donation-progress">
                      <div className="donation-progress-container ul-progress-container">
                        <div 
                          className="donation-progressbar ul-progressbar" 
                          data-ul-progress-value={program.progress}
                        >
                          <div className="donation-progress-label ul-progress-label"></div>
                        </div>
                      </div>
                      <div className="ul-donation-progress-labels">
                        <span className="ul-donation-progress-label marathi-text">गोळा केले: {program.raised}</span>
                        <span className="ul-donation-progress-label marathi-text">लक्ष्य: {program.goal}</span>
                      </div>
                    </div>
                    <Link href="/donations" className="ul-donation-title marathi-heading">
                      {program.title}
                    </Link>
                    <p className="ul-donation-descr marathi-text">{program.description}</p>
                    <Link href="/contact" className="ul-donation-btn">
                      सहभागी व्हा <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ul-dontations-slider-pagination d-none"></div>
        </div>
      </div>
    </section>
  );
}
