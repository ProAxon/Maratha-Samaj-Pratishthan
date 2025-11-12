import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="ul-section-spacing" style={{paddingTop: '6.31vw', paddingBottom: '0px'}}>
      <div className="ul-container">
        <div className="row gy-4 align-items-center justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="img-container" style={{borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
              <Image 
                src="/assets/img/founder.png" 
                alt="आदरणीय लोकनेते बाळासाहेब पवार" 
                width={400}
                height={520}
                className="img-responsive"
                priority
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-8">
            <div className="marathi-text" style={{textAlign: 'center'}}>
              <h2 className="marathi-heading" style={{color: 'var(--ul-primary)', marginBottom: '10px'}}>आदरणीय लोकनेते बाळासाहेब पवार</h2>
              <p style={{fontSize: '1.1rem', fontWeight: 600}}>संस्थापक अध्यक्ष</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
