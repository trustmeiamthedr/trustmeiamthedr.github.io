import { Link } from 'react-router-dom';
import { contact, departments } from '../data';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f2f6f9', padding: '80px 0 0', color: '#555', fontSize: '14px' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>

                    {/* Column 1: Contact Us */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px', position: 'relative' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', margin: 0, color: '#333' }}>Contact Us</h3>
                            <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '50px', height: '2px', backgroundColor: 'var(--secondary-color)' }}></div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                            <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginRight: '15px', fontSize: '16px' }}></i>
                            <span style={{ fontWeight: '600' }}>{contact.phone}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--secondary-color)', marginRight: '15px', fontSize: '16px' }}></i>
                            <span style={{ fontWeight: '600' }}>{contact.email}</span>
                        </div>
                    </div>

                    {/* Column 2: Clinic Address */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px', position: 'relative' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', margin: 0, color: '#333' }}>Clinic Address</h3>
                            <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '50px', height: '2px', backgroundColor: 'var(--secondary-color)' }}></div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'start', marginBottom: '15px' }}>
                            <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', marginRight: '15px', fontSize: '20px', marginTop: '-3px' }}></i>
                            <span style={{ lineHeight: '1.6' }}>{contact.address}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="fa-solid fa-id-card" style={{ color: 'var(--secondary-color)', marginRight: '15px', fontSize: '16px' }}></i>
                            <span style={{ fontWeight: '500' }}>사업자등록번호 211-90-72503</span>
                        </div>
                    </div>

                    {/* Column 3: Our Departments */}
                    <div style={{ flex: '2', minWidth: '300px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px', position: 'relative' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', margin: 0, color: '#333' }}>Our Departments</h3>
                            <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '50px', height: '2px', backgroundColor: 'var(--secondary-color)' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 30px' }}>
                            {departments.map((dept, index) => (
                                <Link key={index} to={dept.link || '#'} style={{ display: 'flex', alignItems: 'center', color: '#888', fontWeight: '500', transition: 'color 0.3s' }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--secondary-color)'}
                                    onMouseLeave={(e) => e.target.style.color = '#888'}
                                >
                                    <i className="fa-solid fa-angle-right" style={{ color: 'var(--secondary-color)', marginRight: '10px', fontWeight: 'bold' }}></i>
                                    {dept.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            {/* Copyright Bar */}
            < div style={{ borderTop: '1px solid #e1e4e6', marginTop: '60px', paddingTop: '30px', backgroundColor: '#e9eef2', padding: '30px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: '#888', fontSize: '14px' }}>
                        ©2014-2026 KH Mukyoro Medical Clinic <a href="#" style={{ color: '#888', textDecoration: 'underline' }}>Privacy Policy</a>
                    </div>
                    {/* <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
                        <a href="#" style={{ color: '#333' }}><i className="fa fa-facebook"></i></a>
                        <a href="#" style={{ color: '#333' }}><i className="fa fa-twitter"></i></a>
                        <a href="#" style={{ color: '#333' }}><i className="fa fa-google-plus"></i></a>
                        <a href="#" style={{ color: '#333' }}><i className="fa fa-pinterest-p"></i></a>
                    </div> */}
                </div>
            </div >
        </footer >
    );
};

export default Footer;
