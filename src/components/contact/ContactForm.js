import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeadphones, FaEnvelopeOpen, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
    return (
        <>
            <div className="contact-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="box-shadow-3 pt-60 pb-60 pl-80 pr-80">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-form pr-70">
                                    <div className="section-title mb-40">
                                        <span>Professional Property Solutions</span>
                                        <h2>Get In Touch With Our Experts</h2>
                                    </div>
                                    <form id="contactForm">
                                        <input type="text" placeholder="Your Name" required />
                                        <input type="email" placeholder="Your Email" required />
                                        <input type="text" placeholder="Service Needed" />
                                        <textarea placeholder="Describe your property needs" required></textarea>
                                        <button type="submit" className="l-btn">
                                            Send Request <FaArrowRight />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-box bg-1 pt-60 pb-35 pl-35 pr-35 mr-40">
                                    <span>Property Preservation Experts!</span>
                                    <h3>Comprehensive Property <br /> Solutions For Every Need</h3>
                                    <p>At LIAMSPHERE ProPreserveNG, we deliver professional property preservation, maintenance, and interior decoration services with unmatched attention to detail and quality craftsmanship.</p>
                                    <ul className="mt-40">
                                        <li>
                                            <FaHeadphones />
                                            <span>24/7 Emergency Line: <Link to="tel:+2348022767228">(+234) 80-2276-7228</Link></span>
                                        </li>
                                        <li>
                                            <FaEnvelopeOpen />
                                            <span>Our Email: <Link to="mailto:contact@liamsphere.com">contact@liamsphere.com</Link></span>
                                        </li>
                                        <li>
                                            <FaMapMarkerAlt />
                                            <span>Head Office: Pleasant View Estate, Lagos, Nigeria</span>
                                        </li>
                                        <li>
                                            <FaClock />
                                            <span>Service Hours: Mon-Sun: 9:00 am - 6:00 pm (Emergency services available 24/7)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-btn-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <a 
                                href="https://www.facebook.com/share/1AwpdstAph/?mibextid=wwXIfr" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="l-btn"
                            >
                                <FaFacebook /> Facebook
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <a 
                                href="https://x.com/propreserveng?s=11" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="l-btn"
                            >
                                <FaTwitter /> Twitter
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <a 
                                href="https://www.instagram.com/liamsphere_propreserveng?igsh=MTdnZW5jYWdkZXBpbA%3D%3D&utm_source=qr" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="l-btn"
                            >
                                <FaInstagram /> Instagram
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <a 
                                href="https://linkedin.com/company/liamsphere" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="l-btn"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
