'use client';

import Image from 'next/image';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      description: 'मराठा समाज प्रतिष्ठानमुळे माझ्या मुलाला शिष्यवृत्ती मिळाली. आता तो उच्च शिक्षण घेत आहे. संस्थेच्या मदतीमुळे आमचे स्वप्न साकार झाले.',
      reviewerImage: '/assets/img/member-1.jpg',
      reviewerName: 'श्रीमती कविता पाटील',
      reviewerRole: 'सदस्य'
    },
    {
      id: 2,
      rating: 5,
      description: 'उद्योजकता विकास कार्यशाळेत सहभागी होऊन मी माझा स्वतःचा व्यवसाय सुरु केला. आता माझे कुटुंब सुखी आहे.',
      reviewerImage: '/assets/img/member-2.jpg',
      reviewerName: 'श्री रामेश्वर जाधव',
      reviewerRole: 'उद्योजक'
    },
    {
      id: 3,
      rating: 5,
      description: 'संस्थेच्या सांस्कृतिक कार्यक्रमांमुळे माझ्या मुलांना मराठी संस्कृतीची ओळख झाली. आम्ही खूप आनंदी आहोत.',
      reviewerImage: '/assets/img/member-3.jpg',
      reviewerName: 'डॉ. सुनीता देशमुख',
      reviewerRole: 'सदस्य'
    },
    {
      id: 4,
      rating: 5,
      description: 'मराठा समाज प्रतिष्ठान ही खरोखरच समाजसेवेसाठी समर्पित संस्था आहे. येथे सर्वांना सोबत घेऊन काम केले जाते.',
      reviewerImage: '/assets/img/member-4.jpg',
      reviewerName: 'श्री विजय शर्मा',
      reviewerRole: 'स्वयंसेवक'
    }
  ];

  return (
    <section className="ul-testimonial ul-section-spacing">
      <div className="ul-testimonial-container">
        <div className="ul-section-heading text-center">
          <div>
            <span className="ul-section-sub-title marathi-subtitle">प्रतिक्रिया</span>
            <h2 className="ul-section-title marathi-heading">सदस्यांचे अनुभव</h2>
          </div>
        </div>

        <div className="ul-testimonial-slider swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="ul-review">
                  <div className="ul-review-rating">
                    {[...Array(5)].map((_, index) => (
                      <i 
                        key={index} 
                        className={index < testimonial.rating ? 'flaticon-star' : 'flaticon-star-1'}
                      ></i>
                    ))}
                  </div>
                  <p className="ul-review-descr marathi-text">{testimonial.description}</p>
                  <div className="ul-review-bottom">
                    <div className="ul-review-reviewer">
                      <div className="reviewer-image">
                        <Image 
                          src={testimonial.reviewerImage} 
                          alt="reviewer image"
                          width={60}
                          height={60}
                          className="img-responsive"
                        />
                      </div>
                      <div>
                        <h3 className="reviewer-name marathi-heading">{testimonial.reviewerName}</h3>
                        <span className="reviewer-role marathi-text">{testimonial.reviewerRole}</span>
                      </div>
                    </div>

                    {/* icon */}
                    <div className="ul-review-icon"><i className="flaticon-left"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ul-testimonial-slider-pagination"></div>
        </div>
      </div>
    </section>
  );
}
