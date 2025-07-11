import React from 'react';
import {Link} from 'react-router-dom';
import FooterBG from '../../assets/images/footer.png';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top bg-property theme-bg-2 pt-110 pb-80" style={{ backgroundImage: `url(${FooterBG})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                                    </div>
                                    <div className="footer-info">
                                        <Link to="/"><FaPhoneAlt /> (+234) 80-2276-7228 & (+234) 70-4647-49657</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/services">Our Services</Link></li>
                                            <li><Link to="/projects">Our Project</Link></li>
                                            <li><Link to="/about">About Company</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/services">Property Preservation</Link></li>
                                            <li><Link to="/services">Maintenance Services</Link></li>
                                            <li><Link to="/services">Deep Cleaning</Link></li>
                                            <li><Link to="/services">Security Systems</Link></li>
                                            <li><Link to="/services">Property Inspection</Link></li>
                                            <li><Link to="/services">Rubbish Removal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-4">
                                    <div className="footer-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>Established since 2025.

</p>
                                    </div>
                                    <div className="footer-social mt-35">
    <h5>Follow Us:</h5>
    <ul>
        <li>
            <a 
                href="https://www.facebook.com/share/1AwpdstAph/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
            >
                <FaFacebookF />
            </a>
        </li>
        <li>
            <a 
                href="https://x.com/propreserveng?s=11" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
            >
                <FaTwitter />
            </a>
        </li>
        <li>
            <a 
                href="https://www.instagram.com/liamsphere_propreserveng?igsh=MTdnZW5jYWdkZXBpbA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
        </li>
        <li>
            <a 
                href="https://pin.it/70dbedhiS" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
            >
                <FaPinterestP />
            </a>
        </li>
    </ul>
</div>
                                    <div className="footer-newsletter mt-40">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FaAngleDoubleRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-1 pt-40 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="copyright">
                                    <p>© 2025 SOMTO All right reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-xl-end text-lg-end text-md-end text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">About LIAMSPHERE</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;