'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Events() {
  const events = [
    {
      id: 1,
      image: '/assets/img/event-img.jpg',
      date: '15',
      month: 'जानेवारी',
      title: 'दीपस्तंभ पुरस्कार सोहळा - प्रेरणादायी व्यक्तिमत्त्वांचा सन्मान',
      description: 'मराठा समाजातील प्रेरणादायी व्यक्तिमत्त्वांचा सन्मान करणारा वार्षिक कार्यक्रम',
      venue: 'मुंबई, महाराष्ट्र'
    },

  ];

  return (
    <section className="ul-events ul-section-spacing pt-0">
      <div className="ul-container">
        {/* heading */}
        <div className="ul-section-heading align-items-center wow animate__fadeInUp">
          <div className="left">
            <span className="ul-section-sub-title marathi-subtitle">आगामी कार्यक्रम</span>
            <h2 className="ul-section-title text-white marathi-heading">मराठा समाज प्रतिष्ठानचे कार्यक्रम</h2>
          </div>
          <Link href="/events" className="ul-btn">
            <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> अधिक जाणून घ्या
          </Link>
        </div>

        {/* events */}
        <div className="ul-events-wrapper">
          <div className="row ul-bs-row row-cols-lg-2 row-cols-1">
            {events.map((event) => (
              <div key={event.id} className="col wow animate__fadeInUp">
                <div className="ul-event">
                  <div className="ul-event-img">
                    <Image 
                      src={event.image} 
                      alt="Event Image"
                      width={400}
                      height={300}
                      className="img-responsive"
                    />
                    <span className="date">{event.date} <span>{event.month}</span></span>
                  </div>
                  <div className="ul-event-txt">
                    <h3 className="ul-event-title marathi-heading">
                      <Link href="/event-details">{event.title}</Link>
                    </h3>
                    <p className="ul-event-descr marathi-text">{event.description}</p>
                    <div className="ul-event-info">
                      <span className="ul-event-info-title marathi-text">स्थळ</span>
                      <p className="ul-event-info-descr marathi-text">{event.venue}</p>
                    </div>
                    <Link href="/event-details" className="ul-btn">
                      <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> तपशील जाणून घ्या
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* vectors */}
      <div className="ul-events-vectors">
        <Image 
          src="/assets/img/events-vector-1.png" 
          alt="Events Image" 
          className="vector-1 img-responsive"
          width={200}
          height={100}
        />
        <Image 
          src="/assets/img/events-vector-2.svg" 
          alt="Events Image" 
          className="vector-2 img-responsive"
          width={200}
          height={100}
        />
      </div>
    </section>
  );
}
