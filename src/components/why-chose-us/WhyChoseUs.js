import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WhyChooseUsBg from '../../assets/images/why-choose-us/bg-2.jpg';

const WhyChooseUsData = [
  {
    id: uuidv4(),
    heading: 'Free Estimates',
    description: 'Get comprehensive property assessment and detailed quotes at no cost to help you make informed decisions about your property needs.',
  },
  {
    id: uuidv4(),
    heading: 'Modern Equipment',
    description: 'We utilize state-of-the-art tools and technology for efficient property preservation, maintenance, and interior decoration projects.',
  },
  {
    id: uuidv4(),
    heading: 'Quality Work',
    description: 'Our skilled professionals deliver exceptional craftsmanship in property preservation, maintenance, and interior design with attention to detail.',
  },
  {
    id: uuidv4(),
    heading: 'Property Preservation',
    description: 'Expert protection and maintenance services to preserve your property value and ensure long-term structural integrity and beauty.',
  },
];

const WhyChooseUsItem = ({ heading, description, img }) => {
  const cardStyle = {
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    overflow: 'hidden',
    border: '1px solid #e0e0e0'
  };

  const contentStyle = {
    padding: '30px 25px',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '20px',
    lineHeight: '1.3'
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '0'
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    background: '#f8f9fa',
    borderTop: '1px solid #e0e0e0'
  };

  const hoverEffect = {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    }
  };

  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
      <div style={cardStyle} {...hoverEffect}>
        <div style={contentStyle}>
          <h3 style={headingStyle}>{heading}</h3>
          <p style={descriptionStyle}>{description}</p>
        </div>
        {img && (
          <div style={iconStyle}>
            <img src={img} alt={heading} style={{ maxHeight: '40px', maxWidth: '40px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionStyle = {
    minHeight: '592px',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${WhyChooseUsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '110px',
    paddingBottom: '110px',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  };

  const titleSectionStyle = {
    textAlign: 'center',
    marginBottom: '70px'
  };

  const spanStyle = {
    color: '#d4af37',
    fontSize: '1.1rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '15px',
    display: 'block'
  };

  const mainHeadingStyle = {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-15px',
    marginRight: '-15px',
    justifyContent: 'center'
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <div style={titleSectionStyle}>
          <span style={spanStyle}>Why Choose LIAMSPHERE ProPreserveNG?</span>
          <h2 style={mainHeadingStyle}>Where Professional Property Care Meets Excellence</h2>
        </div>
        <div style={rowStyle}>
          {WhyChooseUsData.map((data) => (
            <WhyChooseUsItem
              key={data.id}
              heading={data.heading}
              description={data.description}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;