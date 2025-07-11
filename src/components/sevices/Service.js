import React from 'react';
import { FaHome, FaTools, FaPaintRoller, FaShieldAlt, FaClipboardCheck, FaBuilding } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Comprehensive Property Solutions</h1>
        <p className="subtitle">Professional services for residential & commercial assets</p>
      </div>

      <div className="services-grid">
        {/* Property Preservation */}
        <div className="service-card">
          <div className="service-icon">
            <FaHome size={40} />
          </div>
          <h2>Property Preservation</h2>
          <p>Complete property protection including boarding, winterization, and hazard mitigation to maintain asset value</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        {/* Preventive Maintenance */}
        <div className="service-card">
          <div className="service-icon">
            <FaTools size={40} />
          </div>
          <h2>Preventive Maintenance</h2>
          <p>Proactive maintenance programs to avoid costly repairs and extend property lifespan</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        {/* Interior Design */}
        <div className="service-card">
          <div className="service-icon">
            <FaPaintRoller size={40} />
          </div>
          <h2>Interior Design & Decoration</h2>
          <p>Professional space planning and aesthetic enhancements for residential & commercial properties</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        {/* Additional Services */}
        <div className="service-card">
          <div className="service-icon">
            <FaShieldAlt size={40} />
          </div>
          <h2>Security Systems</h2>
          <p>24/7 property monitoring and security installations for comprehensive protection</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaClipboardCheck size={40} />
          </div>
          <h2>Property Inspections</h2>
          <p>Detailed condition assessments with digital reporting and maintenance recommendations</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBuilding size={40} />
          </div>
          <h2>Commercial Services</h2>
          <p>Specialized solutions for office buildings, retail spaces, and industrial properties</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS Styles
const styles = `
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

.services-header {
  text-align: center;
  margin-bottom: 50px;
}

.services-header h1 {
  font-size: 2.5rem;
  color: #523906;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.service-icon {
  color: #523906;
  margin-bottom: 20px;
}

.service-card h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
}

.learn-more-btn {
  background: transparent;
  border: none;
  color: #523906;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.learn-more-btn:hover {
  color: #f4c430;
}

.arrow {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.learn-more-btn:hover .arrow {
  transform: translateX(5px);
}
`;

// Add styles to document
document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default ServicesSection;