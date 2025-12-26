import React from 'react';
import { Link } from 'react-router-dom';
import { doctor } from '../data';
import ScrollAnimation from './ScrollAnimation';

const Doctors = () => {
    return (
        <section className="doctors-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container">
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '30px', color: '#333', margin: 0 }}>Our Doctors</h2>
                    <Link to="/doctor-profile" className="btn-gray">VIEW DOCTOR PROFILE</Link>
                </div>

                {/* Doctor Card */}
                <ScrollAnimation animationClass="fade-in-up">
                    <div className="doctor-card">
                        <div className="doctor-img">
                            <img src={doctor.image} alt={doctor.name} />
                        </div>
                        <div className="doctor-info">
                            <div className="doctor-specialty">{doctor.specialty}</div>
                            <div className="doctor-name">{doctor.name}</div>
                            <div className="doctor-subtitle">{doctor.subtitle}</div>
                            <div className="doctor-exp">{doctor.experience}</div>

                            <div className="doctor-phone">
                                <i className="fa fa-phone"></i>
                                {doctor.phone}
                            </div>

                            <div className="quote-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="doctor-greeting">
                                {doctor.quote}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </section>
    );
};

export default Doctors;
