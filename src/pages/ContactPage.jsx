import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        page: {
            backgroundColor: '#fff',
            color: '#333',
        },
        hero: {
            padding: '120px 0 80px',
            backgroundColor: '#f8f9fa',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 15h2v10h-2V15zm-4 4h10v2h-10v-2z' fill='%23ff5e62' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
            textAlign: 'center',
            borderBottom: '1px solid #eee',
        },
        heroTitle: {
            fontSize: '42px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#0d2d62',
            marginBottom: '20px',
        },
        heroSubtitle: {
            fontSize: '18px',
            color: '#777',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
        },
        section: {
            padding: '100px 0',
        },
        container: {
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 20px',
        },
        mapWrapper: {
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            marginBottom: '80px',
            backgroundColor: '#f0f0f0',
        },
        mapIframe: {
            width: '100%',
            height: '500px',
            border: 0,
            display: 'block',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
        },
        infoBox: {
            marginBottom: '40px',
        },
        infoTitle: {
            fontSize: '22px',
            fontWeight: '600',
            color: '#0d2d62',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '2px solid #ff5e62',
            paddingBottom: '10px',
            width: 'fit-content',
        },
        infoContent: {
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#555',
        },
        directionItem: {
            marginBottom: '30px',
        },
        directionTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        tag: {
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#fff',
            marginRight: '8px',
        },
        tagLine1: { backgroundColor: '#0052A4' },
        tagLine2: { backgroundColor: '#009D3E' },
    };

    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <header style={styles.hero}>
                <div className="container">
                    <h1 style={styles.heroTitle}>How to Get Here</h1>
                    <p style={styles.heroSubtitle}>
                        경희무교로한의원은 서울의 중심, 시청역과 을지로입구역 인근에 위치하고 있습니다.
                        가장 편안한 발걸음으로 찾아오실 수 있도록 상세한 위치를 안내해 드립니다.
                    </p>
                </div>
            </header>

            <Breadcrumbs title="Contact" />

            {/* Map Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4862996769475!2d126.97706732008723!3d37.56716500663715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2edb8d653c7%3A0xdf878642e2bc4641!2z6rK97Z2sIOustOq1kOuhnO2VnOydmOybkA!5e0!3m2!1sko!2skr!4v1767929711041!5m2!1sko!2skr"
                            style={styles.mapIframe}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hospital Location"
                        ></iframe>
                    </div>

                    <div style={styles.grid}>
                        {/* Column 1: Clinic Info */}
                        <div>
                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-location-dot"></i> Location
                                </h2>
                                <p style={styles.infoContent}>
                                    {contact.address} <br />
                                    대한체육회 빌딩 7층
                                </p>
                            </div>

                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-phone"></i> Contact
                                </h2>
                                <p style={styles.infoContent}>
                                    전화: {contact.phone} <br />
                                    이메일: {contact.email}
                                </p>
                            </div>

                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-clock"></i> Hours
                                </h2>
                                <p style={styles.infoContent}>
                                    평일: 9:30 AM - 7:00 PM <br />
                                    토요일: 10:00 AM - 12:00 PM (격주 진료) <br />
                                    일요일/공휴일: 휴무
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Directions */}
                        <div>
                            <h2 style={styles.infoTitle}>
                                <i className="fa-solid fa-compass"></i> Directions
                            </h2>

                            <div style={styles.directionItem}>
                                <h3 style={styles.directionTitle}>
                                    <i className="fa-solid fa-train-subway" style={{ color: '#0052A4' }}></i> 지하철 이용 시
                                </h3>
                                <div style={styles.infoContent}>
                                    <p style={{ marginBottom: '10px' }}>
                                        <span style={{ ...styles.tag, ...styles.tagLine1 }}>1호선</span>
                                        <span style={{ ...styles.tag, ...styles.tagLine2 }}>2호선</span>
                                        <strong>시청역</strong> 5번 출구에서 도보 약 3분
                                    </p>
                                    <p>
                                        <span style={{ ...styles.tag, ...styles.tagLine2 }}>2호선</span>
                                        <strong>을지로입구역</strong> 1번 출구 혹은 1-1번 출구에서 도보 약 5분
                                    </p>
                                </div>
                            </div>

                            <div style={styles.directionItem}>
                                <h3 style={styles.directionTitle}>
                                    <i className="fa-solid fa-bus" style={{ color: '#ff5e62' }}></i> 버스 이용 시
                                </h3>
                                <div style={styles.infoContent}>
                                    <p>서울시청, 국가인권위, 무교동 정류장 하차</p>
                                    <p style={{ fontSize: '14px', color: '#888', marginTop: '5px' }}>
                                        간선: 101, 150, 402, 500, 501, 506 등 <br />
                                        지선: 1711, 7016, 7022 등
                                    </p>
                                </div>
                            </div>

                            <div style={styles.directionItem}>
                                <h3 style={styles.directionTitle}>
                                    <i className="fa-solid fa-car" style={{ color: '#333' }}></i> 자가용 및 주차
                                </h3>
                                <div style={styles.infoContent}>
                                    <p>네비게이션: '대한체육회' 또는 '무교로 16' 검색</p>
                                    <p style={{ marginTop: '10px' }}>
                                        <strong>[주차 안내]</strong> <br />
                                        건물 내 주차가 어려운 점 양해 부탁드립니다. 인근 건물의 주차장 이용을 권장해 드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
