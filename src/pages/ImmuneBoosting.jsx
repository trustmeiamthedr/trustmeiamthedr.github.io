import React, { useEffect } from 'react';
import gongjindanImg from '../assets/images/gongjindan_premium.jpg';
import kyungokgoImg from '../assets/images/kyungokgo_premium.jpg';

const ImmuneBoosting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const styles = {
        section: {
            padding: '80px 0',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        hero: {
            backgroundColor: '#8B1A1A', // Deep Red
            backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0),
                linear-gradient(rgba(139, 26, 26, 0.8), rgba(139, 26, 26, 0.8))
            `,
            backgroundSize: '20px 20px, cover',
            color: '#fff',
            textAlign: 'center',
            padding: '120px 0',
        },
        heroTitle: {
            fontSize: '3.5rem',
            fontFamily: '"Noto Sans KR", sans-serif',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            fontFamily: '"Noto Sans KR", sans-serif',
            fontWeight: '500',
            marginBottom: '40px',
        },
        ctaButton: {
            backgroundColor: '#d4af37', // Gold
            color: '#fff',
            padding: '15px 40px',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 'bold',
        },
        socialProof: {
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
        },
        proofGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px',
        },
        proofItem: {
            padding: '30px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        },
        proofIcon: {
            fontSize: '40px',
            color: '#1a472a', // Deep Green
            marginBottom: '20px',
        },
        productSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
        },
        productImage: {
            flex: '1 1 400px',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
        },
        productContent: {
            flex: '1 1 400px',
        },
        productTitle: {
            fontSize: '2.5rem',
            fontFamily: '"Playfair Display", serif',
            marginBottom: '20px',
            borderBottom: '3px solid',
            display: 'inline-block',
            paddingBottom: '10px',
        },
        gongjindanTitle: {
            color: '#d4af37', // Gold
            borderColor: '#d4af37',
        },
        kyungokgoTitle: {
            color: '#c27a28', // Earthy Orange
            borderColor: '#c27a28',
        },
        tagList: {
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap',
        },
        tag: {
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            backgroundColor: '#f0f0f0',
        },
        comparison: {
            backgroundColor: '#8B1A1A', // Deep Red
            color: '#fff',
            textAlign: 'center',
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '25px',
            padding: '40px',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        cardHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            borderBottom: '1px solid #eee',
            paddingBottom: '15px',
        },
        cardTitle: {
            fontSize: '1.8rem',
            margin: 0,
            fontFamily: '"Playfair Display", serif',
        },
        cardList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        cardListItem: {
            color: '#444',
            fontSize: '1.1rem',
            lineHeight: '1.4',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
        },
        footerCta: {
            backgroundColor: '#f4f4f4',
            textAlign: 'center',
            padding: '60px 0',
        },
    };

    return (
        <div className="immune-page">
            {/* Hero Section */}
            <header style={styles.hero}>
                <div style={styles.container}>
                    <h1 style={styles.heroTitle}>면역력 강화 클리닉: 우리 가족 건강을 위한 최고의 선택</h1>
                    <p style={styles.heroSubtitle}>수많은 환자분들이 입증한 놀라운 효과, 공진단 & 경옥고</p>                </div>
            </header>

            {/* Social Proof */}
            <section style={{ ...styles.section, ...styles.socialProof }}>
                <div style={styles.container}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#333' }}>왜 많은 분들이 우리 병원을 찾으실까요?</h2>
                    <p style={{ color: '#666' }}>임상으로 입증된 효과와 정성스러운 처방</p>
                    <div style={styles.proofGrid}>
                        <div style={styles.proofItem}>
                            <i className="fa fa-stethoscope" style={styles.proofIcon}></i>
                            <h3>임상으로 입증된 효과</h3>
                            <p>수많은 처방 사례와 호전 반응이 증명합니다.</p>
                        </div>
                        <div style={styles.proofItem}>
                            <i className="fa fa-users" style={styles.proofIcon}></i>
                            <h3>높은 재처방률</h3>
                            <p>효과를 보신 분들이 가족과 지인에게 다시 권합니다.</p>
                        </div>
                        <div style={styles.proofItem}>
                            <i className="fa fa-leaf" style={styles.proofIcon}></i>
                            <h3>엄선된 정품 약재</h3>
                            <p>식약처 인증을 받은 최상급 정품 약재만을 사용합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product 1: Gongjindan */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.productSection}>
                        <div style={styles.productImage}>
                            <img
                                src={gongjindanImg}
                                alt="Gongjindan"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={styles.productContent}>
                            <h2 style={{ ...styles.productTitle, ...styles.gongjindanTitle }}>공진단 (황제의 보약)</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                신속한 원기 회복과 뇌 건강을 위한 최고의 보약입니다.
                                황제에게 진상되었던 명약으로, 지친 몸을 빠르게 깨웁니다.
                            </p>
                            <div style={styles.tagList}>
                                <span style={{ ...styles.tag, color: '#d4af37' }}>#급속회복</span>
                                <span style={{ ...styles.tag, color: '#d4af37' }}>#뇌건강</span>
                                <span style={{ ...styles.tag, color: '#d4af37' }}>#수험생추천</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#d4af37', marginRight: '10px' }}></i>중풍/치매가 걱정되는 노년층</li>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#d4af37', marginRight: '10px' }}></i>만성 피로에 시달리는 직장인</li>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#d4af37', marginRight: '10px' }}></i>집중력이 필요한 수험생</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product 2: Kyungokgo */}
            <section style={{ ...styles.section, backgroundColor: '#fff8f0' }}>
                <div style={styles.container}>
                    <div style={{ ...styles.productSection, flexDirection: 'row-reverse' }}>
                        <div style={styles.productImage}>
                            <img
                                src={kyungokgoImg}
                                alt="Kyungokgo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={styles.productContent}>
                            <h2 style={{ ...styles.productTitle, ...styles.kyungokgoTitle }}>경옥고 (무병장수의 명약)</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                꾸준한 면역력 강화와 호흡기 보호를 위한 명약입니다.
                                정성과 시간을 들여 만들어, 몸을 은근하고 깊게 채워줍니다.
                            </p>
                            <div style={styles.tagList}>
                                <span style={{ ...styles.tag, color: '#c27a28' }}>#면역증진</span>
                                <span style={{ ...styles.tag, color: '#c27a28' }}>#호흡기보호</span>
                                <span style={{ ...styles.tag, color: '#c27a28' }}>#온가족보약</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#c27a28', marginRight: '10px' }}></i>기력이 쇠한 어르신</li>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#c27a28', marginRight: '10px' }}></i>갱년기 여성</li>
                                <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: '#c27a28', marginRight: '10px' }}></i>허약한 어린이 및 마른 기침 환자</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section style={{ ...styles.section, ...styles.comparison }}>
                <div style={styles.container}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '10px' }}>어떤 보약이 나에게 맞을까요?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>증상과 체질에 따른 맞춤형 처방을 경험해보세요.</p>

                    <div style={styles.cardGrid}>
                        {/* Gongjindan Card */}
                        <div style={styles.card}>
                            <div style={styles.cardHeader}>
                                <i className="fa fa-crown" style={{ color: '#d4af37', fontSize: '1.5rem' }}></i>
                                <h3 style={{ ...styles.cardTitle, color: '#d4af37' }}>공진단</h3>
                            </div>
                            <ul style={styles.cardList}>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-bolt" style={{ color: '#d4af37', marginTop: '5px' }}></i>
                                    <span><strong>#급속회복 #강력함</strong><br />신속한 원기 회복이 필요할 때</span>
                                </li>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-user-graduate" style={{ color: '#d4af37', marginTop: '5px' }}></i>
                                    <span>수험생, CEO, 만성피로 직장인</span>
                                </li>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-brain" style={{ color: '#d4af37', marginTop: '5px' }}></i>
                                    <span>뇌 건강 증진 및 간 기능 보호</span>
                                </li>
                            </ul>
                        </div>

                        {/* Kyungokgo Card */}
                        <div style={styles.card}>
                            <div style={styles.cardHeader}>
                                <i className="fa fa-leaf" style={{ color: '#c27a28', fontSize: '1.5rem' }}></i>
                                <h3 style={{ ...styles.cardTitle, color: '#c27a28' }}>경옥고</h3>
                            </div>
                            <ul style={styles.cardList}>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-sync" style={{ color: '#c27a28', marginTop: '5px' }}></i>
                                    <span><strong>#은근한보충 #꾸준함</strong><br />장기적인 면역 관리가 필요할 때</span>
                                </li>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-users" style={{ color: '#c27a28', marginTop: '5px' }}></i>
                                    <span>남녀노소, 어르신, 갱년기 여성</span>
                                </li>
                                <li style={styles.cardListItem}>
                                    <i className="fa fa-lungs" style={{ color: '#c27a28', marginTop: '5px' }}></i>
                                    <span>호흡기 계통 보호 및 노화 방지</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section id="contact" style={styles.footerCta}>
                <div style={styles.container}>
                    <h2 style={{ marginBottom: '20px' }}>환자 한 분 한 분의 체질에 맞춰 정성껏 처방합니다.</h2>
                    <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>지금 바로 상담 받아보세요.</p>

                </div>
            </section>
        </div>
    );
};

export default ImmuneBoosting;
