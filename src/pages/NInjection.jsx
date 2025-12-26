import React, { useEffect, useState } from 'react';
import heroImg from '../assets/images/n_injection_hero.png';
import mechanismImg from '../assets/images/vasodilation_mechanism.png';

const NInjection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Color Palette
    const colors = {
        deepRed: '#7b1fa2', // Deep Burgundy/purple/red
        vitalGreen: '#4caf50', // Vital Green
        white: '#ffffff',
        bgLight: '#f3e5f5', // Light background
        text: '#37474F',
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
        },
        heroContent: {
            maxWidth: '800px',
            padding: '20px',
        },
        heroTitle: {
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '15px',
            color: '#fff',
            textShadow: '0 4px 15px rgba(0,0,0,0.6)',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            marginBottom: '30px',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            fontWeight: '500',
        },
        ctaBtn: {
            backgroundColor: colors.vitalGreen,
            color: '#fff',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
            transition: 'transform 0.2s',
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
            borderTop: `4px solid ${colors.deepRed}`,
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
        mechanismSection: {
            backgroundColor: '#fff',
            textAlign: 'center',
        },
        mechanismContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
        },
        mechanismImg: {
            maxWidth: '100%',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '50px',
        },
        productCard: {
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            border: '1px solid #eee',
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
            backgroundColor: '#fff',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            color: colors.deepRed,
        },
        faqAnswer: {
            padding: '20px',
            backgroundColor: '#f9f9f9',
            lineHeight: '1.6',
            color: '#555',
            borderTop: '1px solid #eee',
        }
    };

    const FAQs = [
        { q: "화학 주사와 다른가요?", a: "네, 다릅니다. N약침(엔오약침)은 순수 천연물에서 추출한 성분을 사용하므로 화학 약물에 비해 부작용이 적고 안전합니다." },
        { q: "얼마나 자주 맞아야 하나요?", a: "보통 1~2일 간격으로 시술하는 것을 권장합니다. 증상 호전도에 따라 의료진과 상의하여 조절합니다." },
        { q: "통증은 어느 정도인가요?", a: "혈액 순환이 개선되면서 일시적으로 따끔한 느낌(" + "'뻐근함'" + ")이 있을 수 있으나, 이는 치료 과정의 자연스러운 반응입니다." },
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
                    <h1 style={styles.heroTitle}>막힌 흐름을 뚫어주는<br />천연 산화질소의 힘</h1>
                    <p style={styles.heroSubtitle}>혈관부터 림프까지, N약침(엔오약침)</p>
                    <button style={styles.ctaBtn} onClick={() => document.getElementById('footer-cta').scrollIntoView({ behavior: 'smooth' })}>상담 예약하기</button>
                </div>
            </div>

            {/* 2. Key Selling Points */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.grid3}>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.vitalGreen }}>
                                <i className="fa fa-leaf"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>천연물 성분의 안전함</h3>
                            <p style={{ color: '#666' }}>천연 한약재 추출 성분으로 부작용 없이 안전하고 효과가 강력합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.deepRed }}>
                                <i className="fa fa-heartbeat"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>탁월한 혈액순환 개선</h3>
                            <p style={{ color: '#666' }}>혈관 내피세포에 직접 작용하여 혈관을 확장하고 흐름을 개선합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.vitalGreen }}>
                                <i className="fa fa-shield-alt"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>림프 순환 및 면역 강화</h3>
                            <p style={{ color: '#666' }}>림프 배출을 도와 부종을 없애고 면역력을 근본적으로 높입니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mechanism Section */}
            <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>산화질소(NO)의 작용 원리</h2>
                    <div style={styles.mechanismContent}>
                        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', textAlign: 'center' }}>
                            산화질소(Nitric Oxide)는 혈관을 이완시키고 혈류량을 증가시키는 중요한 신호 전달 물질입니다.<br />
                            좁아진 혈관을 넓혀 산소와 영양분이 전신으로 원활하게 공급되도록 돕습니다.
                        </p>
                        <img src={mechanismImg} alt="Vasodilation Mechanism" style={styles.mechanismImg} />
                    </div>
                </div>
            </section>

            {/* 4. Product Types */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>N약침 종류</h2>
                    <div style={styles.productGrid}>
                        <div style={styles.productCard}>
                            <h3 style={{ color: '#555', fontSize: '1.8rem', marginBottom: '15px' }}>Type A: N / N3%</h3>
                            <p style={{ color: '#777', marginBottom: '20px' }}>일반적인 순환 관리 및 경미한 통증</p>
                            <span style={{ backgroundColor: '#eee', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>Basic Care</span>
                        </div>
                        <div style={{ ...styles.productCard, border: `2px solid ${colors.deepRed}`, transform: 'scale(1.05)' }}>
                            <div style={{ backgroundColor: colors.deepRed, color: '#fff', display: 'inline-block', padding: '5px 15px', borderRadius: '20px', marginBottom: '15px', fontSize: '0.9rem' }}>High Potency</div>
                            <h3 style={{ color: colors.deepRed, fontSize: '2rem', marginBottom: '15px', fontWeight: 'bold' }}>Type B: N600</h3>
                            <p style={{ color: '#555', marginBottom: '20px' }}>만성 통증 및 강력한 순환 개선이 필요할 때</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Recommended For */}
            <section style={{ ...styles.section, backgroundColor: '#fff3e0' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>이런 분께 추천합니다</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px' }}>
                            <h3 style={{ color: colors.deepRed, marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>근골격계 질환</h3>
                            <ul style={styles.checklist}>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>디스크 / 협착증</li>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>관절염 / 오십견</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px' }}>
                            <h3 style={{ color: colors.deepRed, marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>순환 및 내과 질환</h3>
                            <ul style={styles.checklist}>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>수족냉증 / 쥐내림</li>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>소화불량 / 만성피로</li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px' }}>
                            <h3 style={{ color: colors.deepRed, marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>신경계 질환</h3>
                            <ul style={styles.checklist}>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>두통 / 편두통</li>
                                <li style={styles.checklistItem}><i className="fa fa-check" style={{ color: colors.vitalGreen, marginRight: '10px' }}></i>불면증 / 어지러움</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section style={{ ...styles.section, backgroundColor: '#fff' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>자주 묻는 질문</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {FAQs.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                    <span style={{ flex: 1 }}>Q. {faq.q}</span>
                                    <i className={`fa fa-chevron-${openFaq === index ? 'up' : 'down'}`} style={{ color: colors.deepRed }}></i>
                                </button>
                                {openFaq === index && (
                                    <div style={styles.faqAnswer}>
                                        <strong style={{ color: colors.deepRed }}>A.</strong> {faq.a}
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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>내 몸의 막힌 곳을 시원하게 뚫어주세요.</h2>
                    <button style={styles.ctaBtn}>지금 바로 문의하기</button>
                </div>
            </section>
        </div>
    );
};

export default NInjection;
