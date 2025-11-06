'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Donations() {
  const Donations = [
    { id: 1, image: '/assets/img/program-1.png' },
    { id: 2, image: '/assets/img/program-2.png' },
    { id: 3, image: '/assets/img/program-3.png' },
    { id: 4, image: '/assets/img/program-4.png' }
  ];

  return (
    <section id="programs" className="ul-Donations ul-section-spacing overflow-hidden">
      {/* heading */}
      <div className="ul-container">
        <div className="ul-section-heading ul-Donations-heading justify-content-between text-center">
          <div className="left">
            <span className="ul-section-sub-title marathi-subtitle">
              <span className="txt">आमचे उपक्रम</span>
            </span>
            <h2 className="ul-section-title marathi-heading">सामाजिक विकासाच्या दिशेने</h2>
          </div>
        </div>
      </div>

      {/* grid of program images */}
      <div className="ul-container wow animate__fadeInUp">
        <div className="row ul-bs-row row-cols-md-2 row-cols-1 gy-4">
          {Donations.map((Donation) => (
            <div key={Donation.id} className="col">
              <div className="ul-Donation">
                <div className="ul-Donation-img img-container">
                  <Image 
                    src={Donation.image}
                    alt="Program Image"
                    width={800}
                    height={500}
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
