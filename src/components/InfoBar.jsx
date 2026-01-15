import React from 'react';
import { infoBar } from '../data';
import { Link } from 'react-router-dom';

const InfoBar = () => {
    return (
        <section className="info-bar" style={{ padding: '0', marginTop: '-50px', position: 'relative', zIndex: '10' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)' }}>

                    {/* Opening Hours */}
                    <div className="info-col">
                        <h3 style={{ fontSize: '20px', marginBottom: '30px' }}>{infoBar.openingHours.title}</h3>
                        <ul style={{ padding: 0 }}>
                            {infoBar.openingHours.schedule.map((item, index) => (
                                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px' }}>
                                    <span>{item.day}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Doctors Timetable */}
                    <div className="info-col">
                        <h3 style={{ fontSize: '20px', marginBottom: '30px' }}>{infoBar.timetable.title}</h3>
                        <p style={{ marginBottom: '30px', opacity: '0.8', fontSize: '14px', lineHeight: '1.6' }}>{infoBar.timetable.text}</p>
                        <Link to="/timetable" className="btn timetable-btn">{infoBar.timetable.buttonText}</Link>
                    </div>

                    {/* Appointment Form */}
                    <div className="info-col appointment-col">
                        <h3 style={{ fontSize: '20px', marginBottom: '30px' }}>진료 예약하기</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <a href={infoBar.booking} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', padding: '12px', fontSize: '15px', fontWeight: 'bold', backgroundColor: '#f1f1f1', color: '#333', border: 'none', borderRadius: '8px', textAlign: 'center', display: 'block' }}>네이버 예약하기</a>
                            <a href="tel:0507-1362-7787" className="btn" style={{ width: '100%', padding: '12px', fontSize: '15px', fontWeight: 'bold', backgroundColor: '#f1f1f1', color: '#333', border: 'none', borderRadius: '8px', textAlign: 'center', display: 'block' }}>전화예약</a>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InfoBar;
