import Layout from '@/components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      {/* Breadcrumb Section */}
      <section className="ul-breadcrumb">
        <div className="ul-container">
          <div className="ul-breadcrumb-wrapper">
            <h1 className="ul-breadcrumb-title">About Us</h1>
            <nav className="ul-breadcrumb-nav">
              <a href="/">Home</a>
              <span>/</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="ul-about-page ul-section-spacing">
        <div className="ul-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="ul-about-page-content">
                <span className="ul-section-sub-title">About Our Organization</span>
                <h2 className="ul-section-title">We Are Dedicated to Making a Difference</h2>
                <p className="ul-section-descr">
                  Maratha Samaj Pratishthan is a non-profit organization committed to creating positive change in our community. 
                  We believe in the power of collective action and the importance of helping those in need.
                </p>
                <p className="ul-section-descr">
                  Our mission is to provide support, resources, and opportunities to individuals and families who need it most. 
                  Through various programs and initiatives, we work tirelessly to improve lives and build stronger communities.
                </p>
                <div className="ul-about-page-stats">
                  <div className="row">
                    <div className="col-6">
                      <div className="ul-stat-item">
                        <h3>500+</h3>
                        <p>People Helped</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="ul-stat-item">
                        <h3>50+</h3>
                        <p>Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ul-about-page-image">
                <Image 
                  src="/assets/img/about-2-img.jpg" 
                  alt="About Us"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="ul-mission-vision ul-section-spacing">
        <div className="ul-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ul-mission-card">
                <div className="ul-mission-icon">
                  <Image 
                    src="/assets/img/mission.svg" 
                    alt="Mission"
                    width={80}
                    height={80}
                  />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower communities through education, healthcare, and social support programs that create lasting positive change.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ul-vision-card">
                <div className="ul-vision-icon">
                  <Image 
                    src="/assets/img/vision.svg" 
                    alt="Vision"
                    width={80}
                    height={80}
                  />
                </div>
                <h3>Our Vision</h3>
                <p>
                  A world where every individual has access to opportunities and resources needed to thrive and contribute to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
