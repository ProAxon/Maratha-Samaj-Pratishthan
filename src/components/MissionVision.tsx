'use client';

import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="ul-mission-vision ul-section-spacing">
      <div className="ul-container">
        <div className="ul-section-heading text-center">
          <span className="ul-section-sub-title marathi-subtitle">आमची दिशा, आमचा संकल्प</span>
          <h2 className="ul-section-title marathi-heading">मिशन आणि व्हिजन</h2>
        </div>

        <div className="row row-cols-md-2 row-cols-1 gy-4">
          {/* Mission */}
          <div className="col">
            <div className="ul-mission-card">
              <div className="card-icon">
                <i className="flaticon-target"></i>
              </div>
              <h3 className="card-title marathi-heading">🌱 आमचे ध्येय (Mission)</h3>
              <ul className="mission-list marathi-text">
                <li>📌 मराठा युवक-युवतींना शिक्षण, कौशल्य व करिअर मार्गदर्शन उपलब्ध करून देणे</li>
                <li>📌 समाजात एकजूट, अभिमान आणि जबाबदारी निर्माण करणे</li>
                <li>📌 उद्योजकतेद्वारे आर्थिक सक्षमीकरणास चालना देणे</li>
                <li>📌 सेवाभावी उपक्रमांतून गरजूंपर्यंत मदतीचा हात पोहोचवणे</li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="col">
            <div className="ul-vision-card">
              <div className="card-icon">
                <i className="flaticon-eye"></i>
              </div>
              <h3 className="card-title marathi-heading">🌄 आमचे स्वप्न (Vision)</h3>
              <div className="vision-quote marathi-text">
                <blockquote>
                  "सुसंस्कृत, स्वावलंबी आणि जागतिक स्तरावर आपली ओळख निर्माण करणारा समर्थ मराठा समाज घडवणे."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
