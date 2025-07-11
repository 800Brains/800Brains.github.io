import React from 'react';
import ServiceDetailsImg1 from '../../assets/images/service/1.jpg';
import { FaHome, FaTools, FaPaintRoller, FaClipboardCheck } from 'react-icons/fa';

const ServiceDetailsContent = () => {
    return (
        <div className="service-details-content">
            <h2>Professional Property Preservation, Maintenance & Interior Decoration Services</h2>
            <p>
                At LIAMSPHERE ProPreserveNG, we specialize in comprehensive property care solutions that maintain and enhance the value of your real estate assets. Our expert team delivers exceptional preservation, maintenance, and interior decoration services tailored to both residential and commercial properties.
                <br /><br />
                With years of industry experience, we've perfected our methods to ensure your property remains in pristine condition year-round. Whether you need routine maintenance, emergency preservation, or complete interior transformation, our certified professionals handle every detail with precision and care.
            </p>
            
            <img src={ServiceDetailsImg1} className="mt-35 mb-35" alt="LIAMSPHERE ProPreserveNG team working on property preservation" />
            
            <h2>Why Choose LIAMSPHERE ProPreserveNG?</h2>
            <p>
                Since our founding in 2025, we've become the trusted partner for property professionals across Nigeria because of our:
                <ul className="service-benefits mt-20 mb-20">
                    <li><FaClipboardCheck /> Industry-leading quality standards</li>
                    <li><FaTools /> 24/7 emergency response team</li>
                    <li><FaPaintRoller /> Certified interior design specialists</li>
                    <li><FaHome /> Comprehensive property preservation solutions</li>
                </ul>
                Our commitment to excellence has earned us recognition from major real estate firms, financial institutions, and property management companies who rely on our services to protect their investments.
            </p>
            
            <h2>Our Proven Working Process</h2>
            <div className="process-steps mt-30 mb-45">
                <div className="process-step">
                    <div className="step-number">1</div>
                    <h3>Consultation & Assessment</h3>
                    <p>We begin with a thorough property evaluation to understand your specific needs and requirements.</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="process-step">
                    <div className="step-number">2</div>
                    <h3>Customized Plan</h3>
                    <p>Our experts develop a tailored solution addressing all preservation, maintenance, or decoration needs.</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="process-step">
                    <div className="step-number">3</div>
                    <h3>Professional Execution</h3>
                    <p>Our certified technicians implement the plan with precision and attention to detail.</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="process-step">
                    <div className="step-number">4</div>
                    <h3>Quality Assurance</h3>
                    <p>We conduct final inspections to ensure all work meets our rigorous quality standards.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailsContent;