import React, { useEffect, useState } from 'react';
import heroImg from '../assets/images/pdrn_hero.png';
import Breadcrumbs from '../components/Breadcrumbs';

const PdrnInjection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Color Palette
    const colors = {
        primaryBlue: '#1565C0', // Trustworthy Blue
        accentPink: '#FF8A80', // Salmon/Pink
        bgLight: '#F3F8FD', // Very Light Blue/White
        text: '#263238',
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg})`,
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
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '15px',
            color: '#fff',
            textShadow: '0 4px 15px rgba(0,0,0,0.8)',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            marginBottom: '30px',
            fontWeight: '500',
        },
        ctaBtn: {
            backgroundColor: colors.primaryBlue,
            color: '#fff',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(21, 101, 192, 0.4)',
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
            borderTop: `4px solid ${colors.accentPink}`,
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
            backgroundColor: colors.bgLight,
            marginTop: '40px',
            borderRadius: '20px',
            padding: '50px',
        },
        stepItem: {
            textAlign: 'center',
            position: 'relative',
        },
        stepNumber: {
            fontSize: '4rem',
            color: 'rgba(21, 101, 192, 0.1)',
            fontWeight: '900',
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
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
            color: colors.primaryBlue,
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
        { q: "스테로이드와 다른가요?", a: "네, 다릅니다. 스테로이드는 강력한 항염 효과가 있지만 장기 사용 시 부작용 우려가 있는 반면, PDRN은 조직을 재생하고 인대를 강화하는 근본적인 치료로, 반복 시술에도 안전합니다." },
        { q: "부작용은 없나요?", a: "천연 물질(연어 DNA 정제)을 사용하므로 체내 거부 반응이나 부작용이 거의 없어 안전합니다." },
        { q: "치료 주기가 어떻게 되나요?", a: "보통 1주일 간격으로 3~5회 시술을 권장합니다. 증상에 따라 의료진과 상담 후 조절 가능합니다." },
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
                    <h1 style={styles.heroTitle}>통증의 일시적 완화가 아닌,<br />근본적인 조직의 치유</h1>
                    <p style={styles.heroSubtitle}>인체와 가장 유사한 DNA 에너지, PDRN 약침</p>
                    <button style={styles.ctaBtn} onClick={() => document.getElementById('footer-cta').scrollIntoView({ behavior: 'smooth' })}>상담 예약하기</button>
                </div>
            </div>

            <Breadcrumbs deptName="약침치료클리닉" subDeptName="PDRN약침" />

            {/* 2. Key Selling Points */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.grid3}>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.accentPink }}>
                                <i className="fa-solid fa-dna"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>천연물 성분</h3>
                            <p style={{ color: '#666' }}>연어에서 추출한 천연 DNA 성분으로 인체 유사도가 95%에 달합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.primaryBlue }}>
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>안전하고 무해함</h3>
                            <p style={{ color: '#666' }}>내성이 없고 체내 부작용이 거의 없는 안전한 성분입니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.accentPink }}>
                                <i className="fa-solid fa-circle-plus"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>항염증 및 조직재생</h3>
                            <p style={{ color: '#666' }}>염증을 줄이고 손상된 인대와 조직을 튼튼하게 재생합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mechanism Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>왜 효과가 좋을까요? (Mechanism)</h2>
                    <div style={styles.mechanismSection}>
                        <div style={{ ...styles.grid3, marginTop: 0 }}>
                            <div style={styles.stepItem}>
                                <div style={styles.stepNumber}>01</div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', position: 'relative', zIndex: 1, color: colors.primaryBlue }}>Anti-inflammatory<br />(염증 감소)</h3>
                                <p style={{ position: 'relative', zIndex: 1, color: '#666' }}>통증 유발 물질을 억제하여<br />빠르게 통증을 가라앉힙니다.</p>
                            </div>
                            <div style={styles.stepItem}>
                                <div style={styles.stepNumber}>02</div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', position: 'relative', zIndex: 1, color: colors.primaryBlue }}>Tissue Regeneration<br />(조직 재생)</h3>
                                <p style={{ position: 'relative', zIndex: 1, color: '#666' }}>손상된 세포와 혈관의 신생을<br />촉진하여 상처를 치유합니다.</p>
                            </div>
                            <div style={styles.stepItem}>
                                <div style={styles.stepNumber}>03</div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', position: 'relative', zIndex: 1, color: colors.primaryBlue }}>Strengthening<br />(조직 강화)</h3>
                                <p style={{ position: 'relative', zIndex: 1, color: '#666' }}>약해진 인대와 힘줄을<br />튼튼하게 만들어 재발을 방지합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Recommended For */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div className="pdrn-recommend-grid">
                        <div className="pdrn-recommend-col">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>이런 분께 추천합니다</h2>
                            <ul style={styles.checklist}>
                                {[
                                    "만성적인 어깨, 무릎 관절 통증 (Chronic joint pain)",
                                    "테니스 엘보, 족저근막염 등 인대/힘줄 손상",
                                    "수술 후 빠른 회복이 필요하신 분",
                                    "스테로이드 없는 안전한 치료를 원하시는 분"
                                ].map((item, i) => (
                                    <li key={i} style={styles.checklistItem}>
                                        <i className="fa-solid fa-square-check" style={{ color: colors.primaryBlue, marginRight: '15px', fontSize: '1.5rem' }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pdrn-recommend-col" style={{ backgroundColor: colors.bgLight, padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
                            <i className="fa-solid fa-user-doctor" style={{ fontSize: '5rem', color: colors.accentPink, marginBottom: '20px' }}></i>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>전문의 상담 필수</h3>
                            <p style={{ color: '#666' }}>
                                PDRN 약침는 정확한 진단 후 손상 부위에 정확하게 주입해야 최고의 효과를 낼 수 있습니다.
                                풍부한 경험을 가진 의료진과 상담하세요.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section style={{ ...styles.section, backgroundColor: '#fafafa' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>자주 묻는 질문</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {FAQs.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                    <span style={{ flex: 1 }}>Q. {faq.q}</span>
                                    <i className={`fa-solid fa-chevron-${openFaq === index ? 'up' : 'down'}`} style={{ color: colors.primaryBlue }}></i>
                                </button>
                                {openFaq === index && (
                                    <div style={styles.faqAnswer}>
                                        <strong style={{ color: colors.primaryBlue }}>A.</strong> {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Footer & CTA */}
            <section id="footer-cta" style={{ ...styles.section, backgroundColor: '#263238', color: '#fff', textAlign: 'center', padding: '100px 0' }}>
                <div style={styles.container}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>아픈 부위, 참지 말고 근본부터 튼튼하게 채우세요.</h2>
                    <button style={styles.ctaBtn}>지금 바로 문의하기</button>
                </div>
            </section>
        </div>
    );
};

export default PdrnInjection;
