import React from 'react';
import { infoBar } from '../data';

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
                        <a href="#" className="btn timetable-btn">{infoBar.timetable.buttonText}</a>
                    </div>

                    {/* Appointment Form */}
                    <div className="info-col">
                        <h3 style={{ fontSize: '20px', marginBottom: '30px' }}>진료 예약하기</h3>
                        <form>
                            <div style={{ marginBottom: '15px' }}>
                                <select style={{ width: '100%', padding: '12px', border: '1px solid #e1e1e1', borderRadius: '4px', backgroundColor: '#fff', color: '#777' }}>
                                    <option>Select a Department</option>
                                    <option>Neurology</option>
                                    <option>Dental</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <input type="text" placeholder="Phone" style={{ flex: 1, padding: '12px', border: '1px solid #e1e1e1', borderRadius: '4px' }} />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <input type="email" placeholder="E-mail" style={{ flex: 1, padding: '12px', border: '1px solid #e1e1e1', borderRadius: '4px' }} />
                                <button type="submit" className="btn timetable-btn" style={{ flex: 1, padding: '12px', fontSize: '12px' }}> MAKE AN APPOINTMENT</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InfoBar;
