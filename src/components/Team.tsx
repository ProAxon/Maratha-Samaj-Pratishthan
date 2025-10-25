'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      image: '/assets/img/member-1.jpg',
      name: 'डॉ. राजेश पाटील',
      designation: 'अध्यक्ष'
    },
    {
      id: 2,
      image: '/assets/img/member-1.jpg',
      name: 'श्रीमती सुनीता देशमुख',
      designation: 'उपाध्यक्ष'
    },
    {
      id: 3,
      image: '/assets/img/member-1.jpg',
      name: 'श्री विजय जाधव',
      designation: 'सचिव'
    },
    {
      id: 4,
      image: '/assets/img/member-1.jpg',
      name: 'डॉ. प्रिया शर्मा',
      designation: 'कोषाध्यक्ष'
    }
  ];

  return (
    <section className="ul-team ul-section-spacing pt-0">
      <div className="ul-container">
        {/* Heading */}
        <div className="ul-section-heading justify-content-between">
          <div className="left">
            <span className="ul-section-sub-title marathi-subtitle">आमचा संघ</span>
            <h2 className="ul-section-title marathi-heading">समाजसेवेसाठी समर्पित नेतृत्व</h2>
          </div>
          <div>
            <Link href="/team" className="ul-btn">
              <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> सामील व्हा
            </Link>
          </div>
        </div>

        <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 row-cols-xxs-1 ul-team-row justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col">
              <div className="ul-team-member">
                <div className="ul-team-member-img img-container">
                  <Image 
                    src={member.image} 
                    alt="Team Member Image"
                    width={300}
                    height={300}
                    className="img-responsive"
                  />
                  <div className="ul-team-member-socials">
                    <a href="#"><i className="flaticon-facebook"></i></a>
                    <a href="#"><i className="flaticon-twitter"></i></a>
                    <a href="#"><i className="flaticon-linkedin-big-logo"></i></a>
                    <a href="#"><i className="flaticon-instagram"></i></a>
                  </div>
                </div>
                <div className="ul-team-member-info">
                  <h3 className="ul-team-member-name marathi-heading">
                    <Link href="/team-details">{member.name}</Link>
                  </h3>
                  <p className="ul-team-member-designation marathi-text">{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
