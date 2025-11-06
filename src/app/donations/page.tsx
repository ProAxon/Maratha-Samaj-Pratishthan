import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Donations() {
  const Donations = [
    {
      id: 1,
      image: '/assets/img/Donation-1.jpg',
      tag: 'Education',
      progress: 75,
      raised: '$15,000',
      goal: '$20,000',
      title: 'Support Education for Underprivileged Children',
      description: 'Help us provide educational resources and support to children who need it most.'
    },
    {
      id: 2,
      image: '/assets/img/Donation-2.jpg',
      tag: 'Healthcare',
      progress: 60,
      raised: '$12,000',
      goal: '$20,000',
      title: 'Medical Care for Rural Communities',
      description: 'Support our healthcare initiatives to provide medical assistance to rural areas.'
    },
    {
      id: 3,
      image: '/assets/img/Donation-3.jpg',
      tag: 'Food',
      progress: 90,
      raised: '$18,000',
      goal: '$20,000',
      title: 'Food Security Donation',
      description: 'Help us fight hunger by supporting our food distribution Donations.'
    },
    {
      id: 4,
      image: '/assets/img/Donation-4.jpg',
      tag: 'Community',
      progress: 45,
      raised: '$9,000',
      goal: '$20,000',
      title: 'Community Development Project',
      description: 'Support our efforts to improve infrastructure and living conditions.'
    }
  ];

  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title">Donations</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">Home</a>
              <span>/</span>
              <span>Donations</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Donations Content */}
      <section className="ul-Donations-page ul-section-spacing">
        <div className="ul-container">
          <div className="ul-section-heading text-center">
            <span className="ul-section-sub-title">Help & Donate</span>
            <h2 className="ul-section-title">Support Our Causes</h2>
            <p className="ul-section-descr">
              Your Donations help us make a real difference in people's lives. Choose a cause that matters to you.
            </p>
          </div>

          <div className="row">
            {Donations.map((Donation) => (
              <div key={Donation.id} className="col-lg-6 col-md-6 mb-4">
                <div className="ul-Donation-card">
                  <div className="ul-Donation-image">
                    <Image 
                      src={Donation.image} 
                      alt={Donation.title}
                      width={400}
                      height={300}
                    />
                    <span className="ul-Donation-tag">{Donation.tag}</span>
                  </div>
                  <div className="ul-Donation-content">
                    <div className="ul-Donation-progress">
                      <div className="ul-progress-bar">
                        <div 
                          className="ul-progress-fill" 
                          style={{ width: `${Donation.progress}%` }}
                        ></div>
                      </div>
                      <div className="ul-Donation-stats">
                        <span>Raised: {Donation.raised}</span>
                        <span>Goal: {Donation.goal}</span>
                      </div>
                    </div>
                    <h3 className="ul-Donation-title">{Donation.title}</h3>
                    <p className="ul-Donation-description">{Donation.description}</p>
                    <a href="/Donation-details" className="ul-btn">
                      Donate Now <i className="flaticon-up-right-arrow"></i>
                    </a>
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
