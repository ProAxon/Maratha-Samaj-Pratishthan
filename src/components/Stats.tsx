export default function Stats() {
  const stats = [
    {
      icon: 'flaticon-costumer',
      number: '200+',
      text: 'सक्रिय सदस्य'
    },
    {
      icon: 'flaticon-team',
      number: '100+',
      text: 'स्वयंसेवक'
    },
    {
      icon: 'flaticon-package',
      number: '50+',
      text: 'शिष्यवृत्ती'
    },
    {
      icon: 'flaticon-relationship',
      number: '15+',
      text: 'उपक्रम'
    }
  ];

  return (
    <div className="ul-stats ul-section-spacing">
      <div className="ul-container">
        <div className="ul-stats-wrapper wow animate__fadeInUp">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 ul-bs-row justify-content-center">
            {stats.map((stat, index) => (
              <div key={index} className="col">
                <div className="ul-stats-item">
                  <i className={stat.icon}></i>
                  <span className="number">{stat.number}</span>
                  <span className="txt marathi-text">{stat.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
