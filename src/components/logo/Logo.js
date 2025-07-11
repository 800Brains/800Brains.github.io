import React from 'react';
import LogoImg from '../../assets/images/Liamsphere logo 2.jpeg'; // Adjust the path if needed

const Logo = () => {
    return (
        <div className="logo">
            <img 
                src={LogoImg} 
                alt="LIAMSPHERE VENTURES LTD logo" 
                className="max-h-16 w-auto object-contain" 
                style={{ maxWidth: '100px' }}
            />
        </div>
    );
};

export default Logo;