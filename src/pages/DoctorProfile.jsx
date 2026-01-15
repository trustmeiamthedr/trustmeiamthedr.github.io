import React from 'react';
import { doctor } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

function DoctorProfile() {
    return (
        <div className="doctor-profile-page">
            <div className="page-hero">
                <div className="container">
                    <h1>{doctor.name}</h1>
                </div>
            </div>
            <Breadcrumbs title="About Us" />

            <div className="container profile-content">
                <div className="doctor-image-section">
                    <img src={doctor.image} alt={doctor.name} className="profile-main-image" />

                    <div className="doctor-description-block" style={{ marginTop: '40px' }}>
                        <div className="red-bar-title" style={{ width: '30px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '20px' }}></div>
                        <div className="description-content" style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }} dangerouslySetInnerHTML={{ __html: doctor.fullBio }}></div>
                    </div>
                </div>

                <div className="doctor-info-section">
                    <div className="info-header">
                        <h2>{doctor.name}</h2>
                        <span className="specialty-badge">{doctor.specialty}</span>
                        <div className="utility-bar">
                            <a href={`tel:${doctor.phone}`} className="contact-link"><i className="fa-solid fa-phone"></i> {doctor.phone}</a>
                            <a href={`mailto:${doctor.email}`} className="contact-link"><i className="fa-solid fa-envelope"></i> {doctor.email}</a>
                        </div>
                    </div>

                    <div className="quote-box">
                        <i className="fa-solid fa-quote-left quote-icon"></i>
                        <p className="quote-text">{doctor.quote}</p>
                    </div>

                    <div className="bio-text">
                        <p className="highlight-bio">{doctor.bio}</p>

                        <div className="profile-details-grid" style={{ marginTop: '40px', display: 'grid', gap: '30px' }}>
                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>학력</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.education && doctor.education.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>자격</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.qualifications && doctor.qualifications.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>경력</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.career && doctor.career.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>연구 논문</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.papers && doctor.papers.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '12px', paddingLeft: '15px', position: 'relative', lineHeight: '1.6', fontSize: '14px', color: '#555' }}>
                                            <span style={{ position: 'absolute', left: 0, top: '5px', color: 'var(--secondary-color)', fontSize: '12px' }}>■</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="certificates-grid">
                        {doctor.certificates.map((cert, index) => (
                            <div key={index} className="certificate-item">
                                <img src={cert} alt={`Certificate ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfile;
