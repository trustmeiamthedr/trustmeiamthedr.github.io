import React, { useEffect, useState } from 'react';
import { features, counters, aboutClinic } from '../data';
import ScrollAnimation from './ScrollAnimation';

const Features = () => {
    // Basic counter animation logic
    const [counts, setCounts] = useState(counters.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts =>
                prevCounts.map((count, i) => {
                    const target = counters[i].value;
                    if (count < target) {
                        const increment = Math.ceil(target / 100);
                        return Math.min(count + increment, target);
                    }
                    return target;
                })
            );
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="features-section" style={{ paddingBottom: '0' }}>
            <div className="container">

                <div className="feature-split">
                    {/* Left Column: Image with Clipped Corner */}
                    <ScrollAnimation className="feature-img-container">
                        <img src={aboutClinic.image} alt={aboutClinic.title} className="feature-img" />
                    </ScrollAnimation>

                    {/* Right Column: Content & Features */}
                    <div className="feature-content">
                        <ScrollAnimation>
                            <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>{aboutClinic.title}</h2>
                            <p style={{ color: '#777', marginBottom: '40px', lineHeight: '1.6', fontSize: '15px' }}>
                                {aboutClinic.text}
                            </p>
                        </ScrollAnimation>

                        <div className="feature-grid">
                            {features.map((feature, index) => (
                                <ScrollAnimation
                                    key={index}
                                    className={`feature-item delay-${Math.min((index + 1) * 100, 500)}`}
                                >
                                    <div className="feature-icon">
                                        {feature.type === 'image' ? (
                                            <img src={feature.icon} alt={feature.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                        ) : (
                                            <i className={`fa ${feature.icon}`}></i>
                                        )}
                                    </div>
                                    <div className="feature-text">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.text}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Counters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', borderTop: '1px solid #e1e1e1', padding: '60px 0' }}>
                    {counters.map((counter, index) => (
                        <div key={index} style={{ flex: '1', textAlign: 'center', minWidth: '150px' }}>
                            <div style={{ fontSize: '48px', color: '#ff5e62', fontWeight: 'bold' }}>
                                {counts[index]}
                            </div>
                            <div style={{ fontSize: '16px', color: '#777', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {counter.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
