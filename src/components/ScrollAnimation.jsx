import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, className = '', animationClass = 'fade-in-up', style = {} }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${className} ${isVisible ? animationClass : ''} `}
            style={{ ...style, opacity: isVisible ? 1 : 0 }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
