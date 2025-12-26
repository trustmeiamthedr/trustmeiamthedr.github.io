import React, { useState, useEffect } from 'react';
import { departments } from '../data';
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';

const Departments = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isInteracting, setIsInteracting] = useState(false); // Pause auto-slide on interaction

    const realLength = departments.length;
    // Clone first 'max items' to the end for seamless forward loop
    // Clone last 'max items' to start for seamless backward loop (optional, but easier: simply go 0 -> N then jump)
    // Here we strictly follow: Render [Original, ...Clones]
    // Clones count should be at least itemsToShow. Let's start with full duplication for safety/simplicity
    // Actually, safest is: [...departments, ...departments] if N > itemsToShow
    // With N=8, itemsToShow=5.
    // If we are at index 7 (last item). Next -> 8 (which is clone of 0).
    // We use 3 sets: [Original, Clone1, Clone2]
    // This gives us a safe buffer of 2*N items.
    const extendedDepartments = [...departments, ...departments, ...departments];

    const nextSlide = () => {
        if (!transitionEnabled) return;
        setIsInteracting(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (!transitionEnabled) return;
        setIsInteracting(true);
        if (currentIndex === 0) {
            // Jump to second set (N) immediately without transition, then slide back
            setTransitionEnabled(false);
            setCurrentIndex(realLength);
            setTimeout(() => {
                setTransitionEnabled(true);
                setCurrentIndex(realLength - 1);
            }, 50);
        } else {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Update itemsToShow based on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(5);
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle seamless loop reset
    useEffect(() => {
        // If we've scrolled past the first set (realLength), we can safely jump back
        // The checking condition >= realLength is safer than === realLength
        if (currentIndex >= realLength) {
            // Wait for transition to finish, then snap back
            const timeout = setTimeout(() => {
                setTransitionEnabled(false);
                // Modulo ensures we map any overflow back to the first set correctly
                setCurrentIndex(currentIndex % realLength);

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setTransitionEnabled(true);
                    });
                });
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, realLength]);

    // Auto slide
    useEffect(() => {
        if (isInteracting) {
            const timeout = setTimeout(() => setIsInteracting(false), 5000); // Resume after 5s
            return () => clearTimeout(timeout);
        }

        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 3000); // 3 seconds for smoother feel
        return () => clearInterval(interval);
    }, [isInteracting]); // Removed realLength dep

    return (
        <section className="departments-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container">
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '30px', color: '#333', margin: 0 }}>Departments</h2>

                    <div className="header-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="control-btn" onClick={prevSlide}><i className="fa fa-angle-left"></i></div>
                        <div className="control-btn" onClick={nextSlide}><i className="fa fa-angle-right"></i></div>
                        <a href="#" className="btn-gray" style={{ marginLeft: '10px' }}>ALL DEPARTMENTS</a>
                    </div>
                </div>

                {/* Slider */}
                <ScrollAnimation animationClass="slide-in-right">
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{
                            display: 'flex',
                            transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
                        }}>
                            {extendedDepartments.map((dept, index) => {
                                const CardContent = (
                                    <div className="dept-card">
                                        <div className="dept-icon">
                                            {dept.type === 'image' ? (
                                                <img
                                                    src={dept.icon}
                                                    alt={dept.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        padding: dept.name === 'Injections' ? '25px' : '15px'
                                                    }}
                                                />
                                            ) : (
                                                <i className={`fa ${dept.icon}`}></i>
                                            )}
                                        </div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#333' }}>{dept.name}</h4>
                                    </div>
                                );

                                return (
                                    <div key={index} style={{
                                        flex: `0 0 ${100 / itemsToShow}%`,
                                        padding: '0 10px' // Gutter
                                    }}>
                                        {dept.link ? (
                                            <Link to={dept.link} style={{ textDecoration: 'none' }}>
                                                {CardContent}
                                            </Link>
                                        ) : (
                                            CardContent
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </section>
    );
};

export default Departments;
