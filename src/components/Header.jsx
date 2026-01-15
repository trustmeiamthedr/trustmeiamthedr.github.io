import React, { useState } from 'react';
import { menuItems, contact, title, departments } from '../data';
import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo_final.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar" style={{ backgroundColor: '#f8f9fa', padding: '10px 0', fontSize: '12px', borderBottom: '1px solid #e1e1e1' }}>
                <div className="container flex justify-between align-center">
                    <div className="flex align-center">
                        <span style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa-solid fa-location-dot" style={{ marginRight: '5px', color: 'var(--secondary-color)' }}></i>
                            {contact.address}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <i className="fa-solid fa-clock" style={{ marginRight: '5px', color: 'var(--secondary-color)' }}></i>
                            {contact.openingHours}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div style={{ backgroundColor: '#fff', padding: '0', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="container header-main flex justify-between align-center">

                    {/* Hamburger Button (Left on Mobile) */}
                    <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </div>

                    {/* Logo Section */}
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logoImg} alt="MUKYO Logo" style={{ height: '100px', objectFit: 'contain', marginRight: '10px' }} />
                            <span style={{ fontSize: '24px' }}>
                                <span style={{ color: '#6a0dad', fontWeight: 300 }}>{title.slice(0, 2)}</span>
                                <span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>{title.slice(2, -3)}</span>
                                <span style={{ color: '#000', fontWeight: 300 }}>{title.slice(-3)}</span>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Search Icon (Right) */}
                    <div className="mobile-search-icon" style={{ fontSize: '20px', color: '#333' }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        {menuItems.map((item, index) => {
                            if (item.name === '진료과목') {
                                return (
                                    <div key={index} className="dropdown-container">
                                        <Link to={item.link} className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
                                            {item.name} <i className="fa-solid fa-angle-down" style={{ marginLeft: '5px', fontSize: '12px' }}></i>
                                        </Link>
                                        <div className="dropdown-menu">
                                            {departments.map((dept, i) => (
                                                <Link key={i} to={dept.link || '#'} className="dropdown-item">
                                                    {dept.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link key={index} to={item.link} className={`nav-link ${index === 0 ? 'active' : ''}`}>
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Phone Number */}
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                            <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', marginRight: '5px', fontSize: '18px' }}></i>
                            <span style={{ fontWeight: 'bold', color: '#333' }}>{contact.phone}</span>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="mobile-menu">
                        {menuItems.map((item, index) => {
                            if (item.name === '진료과목') {
                                return (
                                    <div key={index}>
                                        <div
                                            className="nav-link"
                                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                                            onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                                        >
                                            {item.name} <i className={`fa-solid ${mobileSubMenuOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                                        </div>
                                        {mobileSubMenuOpen && (
                                            <div className="mobile-submenu" style={{ backgroundColor: '#f9f9f9', paddingLeft: '20px' }}>
                                                {departments.map((dept, i) => (
                                                    <Link
                                                        key={i}
                                                        to={dept.link || '#'}
                                                        className="mobile-submenu-item"
                                                        style={{ display: 'block', padding: '10px 0', fontSize: '14px', borderBottom: '1px solid #eee' }}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setMobileSubMenuOpen(false);
                                                        }}
                                                    >
                                                        {dept.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <Link key={index} to={item.link} className={`nav-link ${index === 0 ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
