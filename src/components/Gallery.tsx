'use client';

import Image from 'next/image';

export default function Gallery() {
  const galleryItems = [
    '/assets/img/gallery-item-1.png',
    '/assets/img/gallery-item-2.png',
    '/assets/img/gallery-item-3.png',
    '/assets/img/gallery-item-4.png',
    '/assets/img/gallery-item-5.png',
    '/assets/img/gallery-item-6.png',
    '/assets/img/gallery-item-1.png',
    '/assets/img/gallery-item-2.png'
  ];

  return (
    <div className="ul-gallery overflow-hidden ul-section-spacing mx-auto pt-0">
      <div className="ul-gallery-slider swiper">
        <div className="swiper-wrapper">
          {galleryItems.map((item, index) => (
            <div key={index} className="ul-gallery-item swiper-slide">
              <div className="img-container">
                <Image 
                  src={item} 
                  alt="Gallery Image"
                  width={300}
                  height={300}
                  className="img-responsive"
                />
              </div>
              <div className="ul-gallery-item-btn-wrapper">
                <a href={item} data-fslightbox="gallery">
                  <i className="flaticon-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
