export default function Stats() {
  const stats = [
    {
      icon: 'flaticon-costumer',
      number: '500+',
      text: 'सक्रिय सदस्य'
    },
    {
      icon: 'flaticon-team',
      number: '50+',
      text: 'स्वयंसेवक'
    },
    {
      icon: 'flaticon-package',
      number: '100+',
      text: 'शिष्यवृत्ती'
    },
    {
      icon: 'flaticon-relationship',
      number: '25+',
      text: 'उपक्रम'
    }
  ];

  return (
    <div className="ul-stats ul-section-spacing">
      <div className="ul-container">
        <div className="ul-stats-wrapper wow animate__fadeInUp">
          <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 row-cols-xxs-1 ul-bs-row justify-content-center">
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
