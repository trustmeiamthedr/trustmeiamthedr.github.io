import React, { useState, useEffect } from 'react';
import { heroSlides, heroImages } from '../data'; // Import heroSlides

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]); // Reset timer when currentSlide changes

    // Get content for the current slide
    const slideContent = heroSlides[currentSlide];

    return (
        <section style={{
            position: 'relative',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Slides */}
            {heroSlides.map((slide, index) => (
                <div key={index} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url("${slide.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    zIndex: 0
                }}></div>
            ))}

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                zIndex: 1
            }}></div>

            {/* Content - key prop forces re-render to trigger animation */}
            <div className="container" key={currentSlide} style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div>
                    <div className="fade-in-up" style={{
                        width: '40px',
                        height: '2px',
                        backgroundColor: '#ff5e62',
                        margin: '0 auto 20px auto'
                    }}></div>
                    <h3 className="fade-in-up" style={{
                        color: '#000000',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '400',
                        fontSize: '18px',
                        marginBottom: '10px'
                    }}>
                        {slideContent.subtitle}
                    </h3>
                    <h1 className="fade-in-up delay-200" style={{
                        fontSize: '60px',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        color: '#333',
                        marginBottom: '30px'
                    }}>
                        {slideContent.title}
                    </h1>
                    <div className="fade-in-up delay-400">
                        <a href="#" className="btn">
                            {slideContent.buttonText}
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side Indicators */}
            <div className="hero-indicators">
                {heroImages.map((_, index) => (
                    <div
                        key={index}
                        className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        {`0${index + 1}`}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
