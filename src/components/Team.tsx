'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      image: '/assets/img/member-1.png',
      name: 'श्री मानसिंह पवार',
      designation: 'अध्यक्ष',
    },
    {
      id: 2,
      image: '/assets/img/member-2.png',
      name: 'श्री प्रमोद खैरनार',
      designation: 'उपाध्यक्ष',
    },
    {
      id: 3,
      image: '/assets/img/member-3.png',
      name: 'विंग कमांडर टी. आर. जाधव, माजी सैनिक',
      designation: 'सचिव',
    },
    {
      id: 4,
      image: '/assets/img/member-4.png',
      name: 'श्री सुनील किर्दक',
      designation: 'सचिव',
    },
    {
      id: 5,
      image: '/assets/img/member-5.png',
      name: 'श्रीमती अनुराधा चव्हाण',
      designation: 'सचिव',
    },
    {
      id: 6,
      image: '/assets/img/member-6.png',
      name: 'श्री सतीश तुपे',
      designation: 'सचिव',
    },
    {
      id:7,
      image:'/assets/img/member-7.png',
      name: 'डॉ. आर. एस. खिस्ते',
      designation: 'सचिव',
    },
    {
      id:8,
      image:'/assets/img/member-8.png',
      name: 'श्री बी. एस. खोसे',
      designation: 'सचिव',
    },
    {
      id:9,
      image:'/assets/img/member-9.png',
      name: 'श्री रोहित सूर्यवंशी',
      designation: 'सचिव',
    },
    {
      id:10,
      image:'/assets/img/member-10.png',
      name: 'श्री राजेश मोरे',
      designation: 'सचिव',
    },
    {
      id:11,
      image:'/assets/img/member-11.png',
      name: 'श्री प्रदीप पाटील',
      designation: 'सचिव',
    },
    {
      id:12,
      image:'/assets/img/member-12.png',
      name: 'श्री सुभाष शेलके',
      designation: 'सचिव',
    },
    {
      id:13,
      image:'/assets/img/member-13.png',
      name: 'श्री गिरीश एल. उबळे',
      designation: 'सचिव',
    },
  ];

  return (
    <section id="team" className="ul-team ul-section-spacing pt-0">
      <div className="ul-container">
        {/* Heading */}
        <div className="ul-section-heading justify-content-between">
          <div className="left">
            <span className="ul-section-sub-title marathi-subtitle">आमचा संघ</span>
            <h2 className="ul-section-title marathi-heading">समाजसेवेसाठी समर्पित नेतृत्व</h2>
          </div>
          <div>
            <a href="#contact" className="ul-btn">
              <i className="flaticon-fast-forward-double-right-arrows-symbol" ></i> सामील व्हा
            </a>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          className="ul-team-slider"
          slidesPerView={3}
          spaceBetween={30}
          loop
          navigation
          speed={900}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 26 },
            1400: { slidesPerView: 4, spaceBetween: 32 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="ul-team-member">
                <div className="ul-team-member-img img-container">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="img-responsive"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
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
                    {member.name}
                  </h3>
                  <p className="ul-team-member-designation marathi-text">{member.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
