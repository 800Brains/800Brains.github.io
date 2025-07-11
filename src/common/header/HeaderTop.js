import React from 'react';
import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderTop = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return (
        <div className="header-top pt-15 pb-15 bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="header-info">
                            <ul>
                                <li>
                                    <FaPhoneAlt /> Call on :
                                    <a href="/"> (+234) 80-2276-7228 & (+234) 70-4647-4965</a>
                                </li>
                                <li>
                                    <FaClock /> Open Hours : Mon-Fri 09:00 - 18:00
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="header-social text-center text-xl-end text-lg-end">
                            <a href="https://www.facebook.com/share/1AwpdstAph/?mibextid=wwXIfr">Facebook</a>
                            <a href="https://x.com/propreserveng?s=11">Twitter</a>
                            <a href="https://www.instagram.com/liamsphere_propreserveng?igsh=MTdnZW5jYWdkZXBpbA%3D%3D&utm_source=qr">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;