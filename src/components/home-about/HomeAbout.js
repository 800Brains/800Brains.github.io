import React from 'react';
import HomeAboutImg from '../../assets/images/WhatsApp Image 2025-07-11 at 1.27.47 PM.jpeg';

const HomeAbout = () => {
  return (
    <>
      <div className="about-area gray-bg-2 pt-200 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-img-style-1">
                <img 
                  src={HomeAboutImg} 
                  alt="LIAMSPHERE ProPreserveNG - Professional Property Preservation Services" 
                />
                <div className="about-award">
                  <h3>Established Since 2025! Over 500 Satisfied Clients</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-text-wrapper pt-30">
                <div className="section-title mb-40">
                  <span>We are Committed to Excellence in Property Care</span>
                  <h2 className="mb-30">
                    Years of Experience in Professional Property Preservation, 
                    Maintenance & Interior Decoration
                  </h2>
                  <p>
                    At LIAMSPHERE ProPreserveNG, we specialize in comprehensive property 
                    preservation services that protect and enhance your investment. Our 
                    expert team delivers exceptional maintenance solutions and stunning 
                    interior decoration services tailored to your needs.
                    <br /><br />
                    From routine maintenance to complete property transformations, we 
                    combine professional expertise with attention to detail, ensuring 
                    your property remains in pristine condition while reflecting your 
                    personal style and vision.
                  </p>
                </div>
                <a href="/contact" className="l-btn" aria-label="Schedule consultation with LIAMSPHERE ProPreserveNG">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;