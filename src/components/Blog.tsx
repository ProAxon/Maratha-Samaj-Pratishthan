'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: '/assets/img/donation-1.jpg',
      date: '15',
      month: 'डिसेंबर',
      author: 'संपादक',
      category: 'शिक्षण',
      title: 'शिक्षण हे सर्वोत्तम भेट - मराठा युवकांसाठी संधी',
      link: '/blog-details'
    },

  ];

  return (
    <section className="ul-blogs ul-section-spacing">
      <div className="ul-blogs-container wow animate__fadeInUp">
        <div className="row gy-3">
          {/* section heading */}
          <div className="col-sm-5">
            <div className="ul-section-heading">
              <div className="left">
                <span className="ul-section-sub-title marathi-subtitle"> नवीनतम ब्लॉग </span>
                <h2 className="ul-section-title marathi-heading">आमच्या नवीनतम बातम्या वाचा</h2>
                <p className="ul-section-descr marathi-text">
                  मराठा समाजाच्या विकासासाठी शिक्षण, उद्योजकता आणि सांस्कृतिक कार्यक्रमांबद्दल नवीनतम माहिती.
                </p>
                <div className="ul-blogs-slider-nav ul-slider-nav">
                  <button className="prev"><i className="flaticon-back"></i></button>
                  <button className="next"><i className="flaticon-next"></i></button>
                </div>
              </div>
            </div>
          </div>

          {/* blog slider */}
          <div className="col-sm-7">
            <div className="ul-blogs-slider swiper">
              <div className="swiper-wrapper">
                {blogs.map((blog) => (
                  <div key={blog.id} className="swiper-slide">
                    <div className="ul-blog">
                      <div className="ul-blog-img">
                        <Image 
                          src={blog.image} 
                          alt="Blog Image"
                          width={400}
                          height={300}
                          className="img-responsive"
                        />
                        <div className="date">
                          <span className="number">{blog.date}</span>
                          <span className="txt">{blog.month}</span>
                        </div>
                      </div>
                      <div className="ul-blog-txt">
                        <div className="ul-blog-infos">
                          {/* single info */}
                          <div className="ul-blog-info">
                            <span className="icon"><i className="flaticon-account"></i></span>
                            <span className="text font-normal text-[14px] text-etGray marathi-text">लेखक: {blog.author}</span>
                          </div>
                          {/* single info */}
                          <div className="ul-blog-info">
                            <span className="icon"><i className="flaticon-price-tag"></i></span>
                            <span className="text font-normal text-[14px] text-etGray marathi-text">{blog.category}</span>
                          </div>
                        </div>
                        <Link href={blog.link} className="ul-blog-title marathi-heading">{blog.title}</Link>
                        <Link href={blog.link} className="ul-blog-btn">
                          अधिक वाचा <span className="icon"><i className="flaticon-next"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
