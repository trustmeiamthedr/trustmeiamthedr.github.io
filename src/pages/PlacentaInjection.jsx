import React, { useEffect, useState } from 'react';
import heroImg from '../assets/images/placenta_vial_hero.png';
import Breadcrumbs from '../components/Breadcrumbs';

const PlacentaInjection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Color Palette
    const colors = {
        green: '#7CB342', // Soft Green
        blue: '#0288D1', // Calming Blue
        orange: '#FF7043', // Warm Orange
        deepRed: '#8B0000', // Deep Maroon/Red
        bgMethods: '#F1F8E9', // Light Green Background
        text: '#37474F',
        white: '#ffffff',
    };

    const styles = {
        section: {
            padding: '80px 0',
            fontFamily: '"Noto Sans KR", sans-serif',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        hero: {
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '700px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            color: '#333',
            position: 'relative',
            backgroundColor: '#f5f5f5',
        },
        heroContent: {
            maxWidth: '800px',
            padding: '20px',
            marginLeft: '5%',
        },
        heroTitle: {
            fontSize: '5rem',
            fontWeight: '900',
            marginBottom: '30px',
            color: colors.deepRed,
            lineHeight: '1.2',
            letterSpacing: '-2px',
        },
        heroHashtags: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            marginBottom: '40px',
            color: '#555',
            fontWeight: '500',
        },
        ctaBtn: {
            backgroundColor: colors.deepRed,
            color: '#fff',
            padding: '18px 45px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
        },
        grid3: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px',
        },
        card: {
            textAlign: 'center',
            padding: '40px 20px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            backgroundColor: '#fff',
            transition: 'transform 0.3s',
        },
        iconCircle: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '32px',
            color: '#fff',
        },
        socialProof: {
            backgroundColor: colors.deepRed,
            backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0),
                linear-gradient(rgba(139, 26, 26, 0.8), rgba(139, 26, 26, 0.8))
            `,
            backgroundSize: '20px 20px, cover',
            color: '#fff',
            textAlign: 'center',
            padding: '60px 0',
        },
        statNumber: {
            fontSize: '5rem',
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '10px',
        },
        benefitsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
        },
        benefitItem: {
            backgroundColor: colors.bgMethods,
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
        },
        benefitTitle: {
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: '10px',
            color: colors.text,
        },
        checklist: {
            listStyle: 'none',
            padding: 0,
        },
        checklistItem: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.2rem',
            marginBottom: '15px',
            color: colors.text,
        },
        faqItem: {
            marginBottom: '15px',
            border: '1px solid #eee',
            borderRadius: '5px',
            overflow: 'hidden',
        },
        faqQuestion: {
            width: '100%',
            textAlign: 'left',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
        },
        faqAnswer: {
            padding: '20px',
            backgroundColor: '#fff',
            lineHeight: '1.6',
            color: '#555',
            borderTop: '1px solid #eee',
        }
    };

    const FAQs = [
        { q: "부작용은 없나요?", a: "식약처 허가 제품으로 안전하며 천연 성분이라 부작용이 적습니다." },
        { q: "효과는 언제부터 나타나나요?", a: "개인차는 있으나 보통 2~3회 시술 후 체감하며, 77.4%가 만족합니다." },
        { q: "남성도 맞아도 되나요?", a: "네, 남성 간 기능 개선과 피로 회복에 탁월합니다." },
        { q: "주기는 어떻게 되나요?", a: "초기에는 주 1~2회, 이후 유지 요법을 권장합니다." },
        { q: "헌혈은 가능한가요?", a: "인태반 유래 의약품 투여 시 헌혈이 제한될 수 있습니다." },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* 1. Hero Section */}
            <div style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>피로부터<br />통증까지</h1>
                    <div style={styles.heroHashtags}>
                        <span style={{ color: '#000' }}>#안티에이징</span>
                        <span style={{ color: '#000' }}>#피로회복</span>
                        <span style={{ color: colors.deepRed }}>#태반약침</span>
                    </div>
                    <p style={styles.heroSubtitle}>지금 원장님과 상담하세요.</p>
                    <button style={styles.ctaBtn} onClick={() => document.getElementById('footer-cta').scrollIntoView({ behavior: 'smooth' })}>상담 예약하기</button>
                </div>
            </div>

            <Breadcrumbs deptName="약침치료클리닉" subDeptName="태반약침" />

            {/* 2. Key Selling Points */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.grid3}>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.green }}>
                                <i className="fa-solid fa-leaf"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>천연물 성분</h3>
                            <p style={{ color: '#666' }}>인공 합성 약물이 아닌, 태반에서 추출한 천연 성분으로 안전합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.blue }}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>빠른 효과</h3>
                            <p style={{ color: '#666' }}>고농도 영양소를 직접 공급하여 컨디션 회복이 빠릅니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.orange }}>
                                <i className="fa-solid fa-battery-full"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>강력한 효능</h3>
                            <p style={{ color: '#666' }}>간 기능 개선과 남성과 여성의 갱년기 증상 완화에 탁월합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Social Proof */}
            <section style={styles.socialProof}>
                <div style={styles.container}>
                    <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>이미 많은 환자분들이 효과를 경험하셨습니다.</p>
                    <div style={styles.statNumber}>77.4%</div>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>환자 만족도</p>
                    <p style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.7 }}>증상 완화와 컨디션 회복에 만족 (출처: 임상 데이터 기반)</p>
                </div>
            </section>

            {/* 4. Key Benefits */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>태반약침의 주요 효능</h2>
                    <div style={styles.benefitsGrid}>
                        {['만성 피로 회복 & 간 기능 개선', '갱년기 장애 치료 (안면홍조, 불면증 완화)', '항노화 & 피부 미용 (탄력, 미백)', '통증 완화 및 면역력 증진'].map((item, i) => (
                            <div key={i} style={styles.benefitItem}>
                                <i className="fa-solid fa-circle-check" style={{ color: colors.green, fontSize: '2rem', marginBottom: '15px' }}></i>
                                <h3 style={styles.benefitTitle}>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Recommended For */}
            <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>이런 분께 추천합니다</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '50px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                        <ul style={styles.checklist}>
                            {[
                                "만성적인 피로와 무기력감에 시달리시는 분",
                                "갱년기 증상으로 일상생활이 힘드신 여성분",
                                "잦은 음주와 스트레스로 간 건강이 걱정되시는 분",
                                "피부 노화를 방지하고 탄력을 원하시는 분",
                                "수술/병후 빠른 기력 회복이 필요하신 분"
                            ].map((item, i) => (
                                <li key={i} style={styles.checklistItem}>
                                    <i className="fa-solid fa-check" style={{ color: colors.orange, marginRight: '15px' }}></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>자주 묻는 질문</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {FAQs.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                    <span style={{ flex: 1 }}>Q. {faq.q}</span>
                                    <i className={`fa-solid fa-chevron-${openFaq === index ? 'up' : 'down'}`} style={{ color: colors.blue }}></i>
                                </button>
                                {openFaq === index && (
                                    <div style={styles.faqAnswer}>
                                        <strong style={{ color: colors.blue }}>A.</strong> {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Footer & Final CTA */}
            <section id="footer-cta" style={{ ...styles.section, backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '100px 0' }}>
                <div style={styles.container}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>지친 당신의 몸에 생기를 불어넣으세요.</h2>
                    <button style={styles.ctaBtn}>지금 바로 문의하기</button>
                </div>
            </section>
        </div>
    );
};

export default PlacentaInjection;
