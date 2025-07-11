import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AboutExperienceImg1 from '../../assets/images/WhatsApp Image 2025-07-11 at 1.24.06 PM.jpeg';

const AboutExperienceData = [
    {
        id: uuidv4(),
        heading: 'Our Mission',
        description: 'To deliver exceptional property preservation, maintenance, and interior decoration services that enhance property value and aesthetic appeal through innovative solutions and professional expertise.',
        icon: '🏆'
    },
    {
        id: uuidv4(),
        heading: 'Our Vision',
        description: 'To become the leading provider of comprehensive property care services, setting industry standards for quality, reliability, and customer satisfaction in preservation and design.',
        icon: '👁️'
    },
    {
        id: uuidv4(),
        heading: 'Our Goal',
        description: 'To transform properties into well-maintained, visually appealing spaces through our integrated approach to landscape management, structural preservation, and interior decoration.',
        icon: '🎯'
    },
];

const AboutExperienceItem = ({ heading, description, icon }) => {
    return (
        <div className="single-experience mb-4">
            <div className="d-flex align-items-start">
                <span className="mr-3" style={{ fontSize: '24px' }}>{icon}</span>
                <div>
                    <h4 className="mb-3">{heading}</h4>
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        </div>
    )
}

const AboutExperience = () => {
    return (
        <section className="experience-area pt-110 pb-110" id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-70">
                            <span>Professional Excellence Since 2025</span>
                            <h2>Property Preservation & <br /> Interior Design Mastery</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        {AboutExperienceData.map((data) => (
                            <AboutExperienceItem
                                key={data.id}
                                heading={data.heading}
                                description={data.description}
                                icon={data.icon}
                            />
                        ))}
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="experience-img position-relative">
                            <img 
                                src={AboutExperienceImg1} 
                                alt="LIAMSPHERE ProPreserveNG professional team working on property preservation" 
                                className="img-fluid rounded-lg"
                            />
                            <div className="experience-small-block bg-primary text-white p-4">
                                <h5 className="mb-0">Trusted Since 2025 • 10+ Awards Won</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutExperience;