import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt} from 'react-icons/fa';

const ContactWidget = () => {
    return (
        <>
            <div className="widget contact-widget mb-60">
                <span>Property Preservation Experts!</span>
                <h3 className="widget-title">Comprehensive Property Solutions For Every Need</h3>
                <p>Where Professional Property Care Meets Unmatched Excellence</p>
                
                <Link to="/contact" className="l-contact-btn">
                    <span><FaPhoneAlt /></span> Call
                </Link>
                <h3 className="phone-number">
                    <Link to="tel:+313555999">(+234) 80-2276-7228 & (+234) 70-4647-4965</Link>
                </h3>
            </div>
        </>
    )
}

export default ContactWidget;