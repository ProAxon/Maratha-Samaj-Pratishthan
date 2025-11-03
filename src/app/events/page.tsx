import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  const events = [
    {
      id: 'deepstambh-2025',
      image: '/assets/img/event-img.jpg',
      date: '15',
      month: 'नोव्हेंबर',
      title: '🪔 दीपस्तंभ २०२५ — पुरस्कार वितरण व दिवाळी स्नेहमिलन',
      venue: 'विवेकानंद महाविद्यालय सभागृह, छत्रपती संभाजीनगर',
      link: '/events/deepstambh-2025'
    }
  ];

  return (
    <Layout>
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title marathi-heading">कार्यक्रम</h1>
            <nav className="ul-breadcrumb-nav marathi-text">
              <a href="/">मुख्यपृष्ठ</a>
              <span>/</span>
              <span>कार्यक्रम</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="ul-section-spacing">
        <div className="ul-container">
          <div className="row ul-bs-row row-cols-lg-2 row-cols-1">
            {events.map(event => (
              <div key={event.id} className="col">
                <div className="ul-event">
                  <div className="ul-event-img">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      width={600}
                      height={400}
                      className="img-responsive"
                    />
                    <span className="date">{event.date} <span>{event.month}</span></span>
                  </div>
                  <div className="ul-event-txt">
                    <h3 className="ul-event-title marathi-heading">
                      <Link href={event.link}>{event.title}</Link>
                    </h3>
                    <div className="ul-event-info">
                      <span className="ul-event-info-title marathi-text">स्थळ</span>
                      <p className="ul-event-info-descr marathi-text">{event.venue}</p>
                    </div>
                    <Link href={event.link} className="ul-btn">
                      <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> तपशील जाणून घ्या
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
