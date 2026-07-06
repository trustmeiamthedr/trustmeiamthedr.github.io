import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // MedicalBusiness Schema.org structured data for local business SEO/AEO/GEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "경희무교로한의원",
        "alternateName": "Kyunghee Mukyoro Korean Medicine Clinic",
        "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2953&auto=format&fit=crop",
        "telephone": contact.phone,
        "email": contact.email,
        "url": "https://mgrdoc.com/contact",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "무교로 16 대한체육회 7F",
            "addressLocality": "서울 중구 무교동",
            "addressRegion": "서울특별시",
            "postalCode": "04522",
            "addressCountry": "KR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.567165",
            "longitude": "126.977067"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:30",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "12:00"
            }
        ],
        "description": "서울 시청역 5번 출구 도보 3분, 을지로입구역 1번 출구 도보 5분 거리, 서울파이낸스센터(SFC) 옆 대한체육회 빌딩 7층에 위치한 한의원입니다. 근골격계 초음파 유도하 약침 치료, 하이드로다이섹션 및 다이어트 엔오슬림 한약 처방을 전문으로 합니다."
    };

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
            {/* JSON-LD Structured Data for Local Search & AI Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <header style={styles.hero}>
                <div className="container">
                    <h1 style={styles.heroTitle}>찾아오시는 길</h1>
                    <p style={styles.heroSubtitle}>
                        경희무교로한의원은 서울의 중심인 시청역(서울시청 광장)과 을지로입구역 인근,
                        무교동 음식문화거리 내 서울파이낸스센터(SFC) 근처에 위치하고 있습니다.
                    </p>
                </div>
            </header>

            <Breadcrumbs title="찾아오시는 길" />

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

                    <div className="contact-grid-container">
                        {/* Column 1: Clinic Info */}
                        <div>
                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-location-dot"></i> 위치 (Location)
                                </h2>
                                <p style={styles.infoContent}>
                                    {contact.address} <br />
                                    <strong>대한체육회 빌딩 7층</strong> (서울파이낸스센터 SFC 옆, 청계천 남측 무교동 초입)
                                </p>
                            </div>

                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-phone"></i> 연락처 (Contact)
                                </h2>
                                <p style={styles.infoContent}>
                                    대표전화: <strong>{contact.phone}</strong> <br />
                                    이메일: {contact.email}
                                </p>
                            </div>

                            <div style={styles.infoBox}>
                                <h2 style={styles.infoTitle}>
                                    <i className="fa-solid fa-clock"></i> 진료시간 (Hours)
                                </h2>
                                <p style={styles.infoContent}>
                                    평일: 9:30 AM - 7:00 PM <br />
                                    토요일: 10:00 AM - 12:00 PM (격주 진료 / 예약 우선제) <br />
                                    일요일/공휴일: 휴무
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Directions */}
                        <div>
                            <h2 style={styles.infoTitle}>
                                <i className="fa-solid fa-compass"></i> 찾아오시는 길 상세 (Directions)
                            </h2>

                            <div style={styles.directionItem}>
                                <h3 style={styles.directionTitle}>
                                    <i className="fa-solid fa-train-subway" style={{ color: '#0052A4' }}></i> 지하철 이용 시
                                </h3>
                                <div style={styles.infoContent}>
                                    <p style={{ marginBottom: '12px' }}>
                                        <span style={{ ...styles.tag, ...styles.tagLine1 }}>1호선</span>
                                        <span style={{ ...styles.tag, ...styles.tagLine2 }}>2호선</span>
                                        <strong>시청역 5번 출구</strong>에서 서울시청 광장을 등지고 무교동 음식문화거리(서울파이낸스센터 SFC 뒤편) 방향으로 도보 약 3분 (약 200m 직진 후 대한체육회 빌딩 7층)
                                    </p>
                                    <p>
                                        <span style={{ ...styles.tag, ...styles.tagLine2 }}>2호선</span>
                                        <strong>을지로입구역 1번 또는 1-1번 출구</strong>에서 시청 방향으로 직진 후, 서울파이낸스센터(SFC) 빌딩 모퉁이에서 무교동 골목으로 좌회전하여 약 150m 도보 이동 (도보 약 5분)
                                    </p>
                                </div>
                            </div>

                            <div style={styles.directionItem}>
                                <h3 style={styles.directionTitle}>
                                    <i className="fa-solid fa-bus" style={{ color: '#ff5e62' }}></i> 버스 이용 시
                                </h3>
                                <div style={styles.infoContent}>
                                    <p><strong>서울시청, 국가인권위원회, 무교동, 시청광장</strong> 정류장에서 하차하여 도보 2~3분 내 빌딩 도착</p>
                                    <p style={{ fontSize: '14px', color: '#888', marginTop: '8px' }}>
                                        간선버스: 101, 150, 402, 500, 501, 506, 708 등 <br />
                                        지선버스: 1711, 7016, 7022, 7019 등
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
