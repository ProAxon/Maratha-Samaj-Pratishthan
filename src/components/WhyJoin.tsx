'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WhyJoin() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: 'समान ध्येय असलेल्या समाजबांधवांशी जुळणी',
      content: 'मराठा समाज प्रतिष्ठानमध्ये सामील होऊन तुम्ही समान विचारसरणी असलेल्या लोकांशी जुळू शकता. येथे तुम्हाला मार्गदर्शन, प्रेरणा आणि मजबूत नेटवर्क मिळेल.'
    },
    {
      title: 'नेतृत्व आणि समाजासाठी काम करण्याची संधी',
      content: 'समाज घडतो तेव्हा नेतृत्व पुढे येतं. आमच्या संस्थेत सामील होऊन तुम्ही नेतृत्वाची कौशल्ये विकसित करू शकता आणि समाजासाठी काम करण्याची संधी मिळवू शकता.'
    },
    {
      title: 'विशेष कार्यक्रमांमध्ये अग्रक्रम',
      content: 'सदस्य म्हणून तुम्हाला विशेष कार्यक्रम, शिबिरे, सेमिनार आणि इतर महत्त्वाच्या कार्यक्रमांमध्ये अग्रक्रम मिळेल. यामुळे तुमचा वैयक्तिक आणि व्यावसायिक विकास होईल.'
    }
  ];

  return (
    <section className="ul-why-join ul-section-spacing">
      <div className="ul-why-join-wrapper ul-section-spacing">
        <div className="ul-container">
          <div className="row row-cols-md-2 row-cols-1 gy-4 align-items-center">
            <div className="col">
              <div className="ul-why-join-img">
                <Image 
                  src="/assets/img/why-join.jpg" 
                  alt="Image"
                  width={500}
                  height={400}
                  className="img-responsive"
                />
              </div>
            </div>

            {/* txt */}
            <div className="col">
              <div className="ul-why-join-txt">
                <span className="ul-section-sub-title marathi-subtitle">सामील व्हा</span>
                <h2 className="ul-section-title marathi-heading">का जोडले जावे?</h2>
                <p className="ul-section-descr marathi-text">
                  आजच मराठा समाज प्रतिष्ठानचा भाग बना! आपण एक झालो, तर समाज एक पाऊल पुढे जाईल. सदस्यत्वाचे महत्त्व जाणून घ्या.
                </p>

                <div className="ul-accordion">
                  {accordionItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`ul-single-accordion-item ${activeAccordion === index ? 'open' : ''}`}
                    >
                      <div 
                        className="ul-single-accordion-item__header"
                        onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                      >
                        <div className="left">
                          <h3 className="ul-single-accordion-item__title marathi-heading">{item.title}</h3>
                        </div>
                        <span className="icon"><i className="flaticon-next"></i></span>
                      </div>

                      <div className="ul-single-accordion-item__body">
                        <p className="marathi-text">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
