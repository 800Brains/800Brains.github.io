import React from 'react';
import {Link} from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

// Placeholder images for property preservation services
const PropertyPreservationImg = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const InteriorDecorationImg = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const PropertyMaintenanceImg = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const ProjectData = [
    {
        id: uuidv4(),
        img: PropertyPreservationImg,
        heading: 'Property Preservation',
        description: 'Professional property preservation services ensuring your investment maintains its value through expert care and preventive maintenance.',
        btnLink: '/project-details',
    },
    {
        id: uuidv4(),
        img: InteriorDecorationImg,
        heading: 'Interior Decoration',
        description: 'Transform your spaces with our professional interior decoration services, creating beautiful and functional environments tailored to your style.',
        btnLink: '/project-details',
    },
    {
        id: uuidv4(),
        img: PropertyMaintenanceImg,
        heading: 'Property Maintenance',
        description: 'Comprehensive property maintenance services keeping your residential and commercial properties in pristine condition year-round.',
        btnLink: '/project-details',
    },
];

const ProjectItem = ({ img, heading, description, btnLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-project">
                    <div className="single-project-img bg-property bg-hover-style-1" style={{ backgroundImage: `url(${img})` }}>
                        <div className="single-project-img-icon">
                            <Link to={btnLink}><FaAngleDoubleRight /></Link>
                        </div>
                    </div>
                    <div className="single-project-content">
                        <h3>{heading}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Project = () => {
    return (
        <>
            <div className="project-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Our Projects</span>
                                <h2>We have successfully completed over 534+ <br /> property preservation & decoration projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-60">
                        {ProjectData.map((data) => (
                            <ProjectItem
                                key={data.id}
                                img={data.img}
                                heading={data.heading}
                                description={data.description}
                                btnLink={data.btnLink}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="project-btn text-center">
                                <Link to="/projects" className="l-btn">View All Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;