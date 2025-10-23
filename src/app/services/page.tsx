import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      image: '/assets/img/service-1.jpg',
      title: 'Education Support',
      description: 'We provide educational resources and support to children in need, ensuring they have access to quality education.'
    },
    {
      id: 2,
      image: '/assets/img/service-2.jpg',
      title: 'Healthcare Services',
      description: 'Our healthcare programs provide medical assistance and health education to underserved communities.'
    },
    {
      id: 3,
      image: '/assets/img/service-3.jpg',
      title: 'Food Distribution',
      description: 'We organize food distribution programs to help families facing food insecurity.'
    },
    {
      id: 4,
      image: '/assets/img/service-4.jpg',
      title: 'Community Development',
      description: 'We work on various community development projects to improve living conditions and opportunities.'
    }
  ];

  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title">Our Services</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">Home</a>
              <span>/</span>
              <span>Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="ul-services-page ul-section-spacing">
        <div className="ul-container">
          <div className="ul-section-heading text-center">
            <span className="ul-section-sub-title">What We Do</span>
            <h2 className="ul-section-title">Our Services</h2>
            <p className="ul-section-descr">
              We provide comprehensive support and services to help improve lives and build stronger communities.
            </p>
          </div>

          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-6 col-md-6 mb-4">
                <div className="ul-service-card">
                  <div className="ul-service-image">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="ul-service-content">
                    <h3 className="ul-service-title">{service.title}</h3>
                    <p className="ul-service-description">{service.description}</p>
                    <a href="/service-details" className="ul-service-link">
                      Learn More <i className="flaticon-next"></i>
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
