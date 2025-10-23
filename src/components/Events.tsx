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
    {
      id: 2,
      image: '/assets/img/blog-b-1.jpg',
      date: '22',
      month: 'फेब्रुवारी',
      title: 'शिक्षण सहाय्यता शिबिर - युवकांसाठी करिअर मार्गदर्शन',
      description: 'युवक-युवतींना शिक्षण आणि करिअर मार्गदर्शन देणारे विशेष शिबिर',
      venue: 'पुणे, महाराष्ट्र'
    },
    {
      id: 3,
      image: '/assets/img/blog-2.jpg',
      date: '10',
      month: 'मार्च',
      title: 'उद्योजकता विकास कार्यशाळा - व्यवसाय सुरु करण्यासाठी',
      description: 'नवीन उद्योजकांना व्यवसाय सुरु करण्यासाठी आवश्यक मार्गदर्शन',
      venue: 'नागपूर, महाराष्ट्र'
    },
    {
      id: 4,
      image: '/assets/img/blog-b-3.jpg',
      date: '25',
      month: 'एप्रिल',
      title: 'सांस्कृतिक महोत्सव - मराठा परंपरा आणि संस्कृती',
      description: 'मराठा संस्कृती आणि परंपरा जपण्यासाठी सांस्कृतिक कार्यक्रम',
      venue: 'औरंगाबाद, महाराष्ट्र'
    }
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
