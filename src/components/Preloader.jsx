import React from 'react';
import preloaderLogo from '../assets/images/preloader_logo.jpg';

const Preloader = ({ fadeOut }) => {
    return (
        <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <img
                    src={preloaderLogo}
                    alt="Mukyoro Medical Clinic"
                    className="preloader-logo"
                />
                <div className="preloader-spinner"></div>
            </div>
        </div>
    );
};

export default Preloader;
