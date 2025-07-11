import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

// Using online image URLs for property services
const PropertyPreservationImg = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const MaintenanceServicesImg = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const InteriorDecorationImg = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const PropertyInspectionImg = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const RestorationServicesImg = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const CommercialMaintenanceImg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

const ProjectsData = [
    {
        id: uuidv4(),
        img: PropertyPreservationImg,
        heading: 'Property Preservation',
        description: 'Comprehensive property preservation services to maintain and protect your valuable real estate investments with professional care.',
        btnLink: '/project-details/property-preservation',
        category: 'Preservation'
    },
    
    {
        id: uuidv4(),
        img: MaintenanceServicesImg,
        heading: 'Maintenance Services',
        description: 'Expert maintenance solutions ensuring your property remains in optimal condition through regular upkeep and preventive care.',
        btnLink: '/project-details/maintenance-services',
        category: 'Maintenance'
    },
    
    {
        id: uuidv4(),
        img: InteriorDecorationImg,
        heading: 'Interior Decoration',
        description: 'Transform your spaces with our professional interior decoration services, creating beautiful and functional living environments.',
        btnLink: '/project-details/interior-decoration',
        category: 'Decoration'
    },
    
    {
        id: uuidv4(),
        img: PropertyInspectionImg,
        heading: 'Property Inspection',
        description: 'Thorough property inspections to identify potential issues and ensure compliance with safety and quality standards.',
        btnLink: '/project-details/property-inspection',
        category: 'Inspection'
    },
    
    {
        id: uuidv4(),
        img: RestorationServicesImg,
        heading: 'Restoration Services',
        description: 'Professional restoration services to bring damaged or aged properties back to their original condition and beyond.',
        btnLink: '/project-details/restoration-services',
        category: 'Restoration'
    },
    
    {
        id: uuidv4(),
        img: CommercialMaintenanceImg,
        heading: 'Commercial Maintenance',
        description: 'Specialized commercial property maintenance services designed to keep your business premises professional and operational.',
        btnLink: '/project-details/commercial-maintenance',
        category: 'Commercial'
    },
];

const ProjectsItem = ({ img, heading, description, btnLink, category }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="single-project mb-25">
                <div className="single-project-img bg-property bg-hover-style-1" style={{ backgroundImage: `url(${img})` }}>
                    <div className="single-project-img-icon">
                        <Link to={btnLink} aria-label={`View ${heading} project details`}>
                            <FaAngleDoubleRight />
                        </Link>
                    </div>
                    <div className="project-category">
                        <span className="category-badge">{category}</span>
                    </div>
                </div>
                <div className="single-project-content">
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <div className="project-btn">
                        <Link to={btnLink} className="read-more-btn">
                            Learn More <FaAngleDoubleRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="project-area pt-110 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-70">
                            <span className="sub-title">Our Projects</span>
                            <h2>
                                We have successfully completed 534+ <br /> 
                                professional preservation & maintenance projects
                            </h2>
                            <p className="section-description">
                                LIAMSPHERE ProPreserveNG delivers exceptional property preservation, 
                                maintenance, and interior decoration services across Nigeria.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-60">
                    {ProjectsData.map((data) => (
                        <ProjectsItem
                            key={data.id}
                            img={data.img}
                            heading={data.heading}
                            description={data.description}
                            btnLink={data.btnLink}
                            category={data.category}
                        />
                    ))}
                </div>
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div className="project-bottom-content">
                            <p className="company-tagline">
                                <strong>LIAMSPHERE ProPreserveNG</strong> - Your trusted partner for professional 
                                property preservation, maintenance, and interior decoration services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;