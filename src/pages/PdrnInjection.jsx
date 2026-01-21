import React, { useEffect, useState } from 'react';
import heroImg from '../assets/images/pdrn_hero.png';
import pdrnInfoImg from '../assets/images/pdrn_info_graphic.png';
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
        introSection: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        introText: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
            maxWidth: '900px',
            margin: '0 auto',
        },
        infoGraphic: {
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            display: 'block',
            margin: '40px auto 0',
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
        targetSection: {
            backgroundColor: colors.bgLight,
            borderRadius: '20px',
            padding: '50px',
            marginTop: '40px',
        },
        targetItem: {
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
        },
        targetIcon: {
            fontSize: '2rem',
            color: colors.primaryBlue,
            minWidth: '50px',
            textAlign: 'center',
            marginTop: '5px',
        },
        checklist: {
            listStyle: 'none',
            padding: 0,
        },
        checklistItem: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.1rem',
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
        {
            q: "일반 진통주사(뼈주사/스테로이드)와 무엇이 다른가요?",
            a: "일명 ‘뼈주사’로 불리는 스테로이드는 통증을 빠르게 줄여주기도 하지만, 반복해서 맞을 경우 그 효과가 약해지며, 관절이나 힘줄이 약해질 우려가 높습니다. 반면, PDRN 약침은 손상된 조직이 스스로 회복하도록 돕는 성분이기 때문에 인체 부담이 적어 반복 시술이 가능하며 장기적인 관절·인대 강화에 중점을 둔 치료입니다."
        },
        {
            q: "몇 번이나 치료받아야 하나요?",
            a: "환자분의 증상과 질환의 만성도에 따라 다르지만, 만성 통증의 경우 보통 세포가 재생되고 조직이 안정화되는 기간을 고려하여 주 2회 정도 간격으로 3~4주 정도의 치료를 권장합니다. 의료진의 진단에 따라 치료 횟수와 간격은 조절될 수 있습니다."
        },
        {
            q: "시술 시 통증은 어느 정도인가요?",
            a: "일반적인 주사를 맞을 때 따끔한 정도와 비슷합니다. 다만, 약물이 병변 부위에 들어갈 때 일시적으로 뻐근한 느낌(압박감)이 들 수 있습니다. 이는 약물이 조직 사이로 퍼지면서 생기는 자연스러운 현상이며, 시술 후 잠시 안정을 취하면 대부분 가라앉습니다."
        },
        {
            q: "시술 후 바로 걸어 다녀도 되나요?",
            a: "네, 시술 직후 보행이나 운전 등 일상생활은 바로 가능합니다. 다만, 약물이 주입된 부위가 잘 아물 수 있도록 시술 당일에는 무리한 운동이나 무거운 물건을 드는 등 과도한 움직임은 피하고 충분히 휴식하는 것이 회복에 더 도움이 됩니다."
        }
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
                    <p style={styles.heroSubtitle}>초음파 유도하 정밀 PDRN 약침 치료</p>
                    <button style={styles.ctaBtn} onClick={() => document.getElementById('footer-cta').scrollIntoView({ behavior: 'smooth' })}>상담 예약하기</button>
                </div>
            </div>

            <Breadcrumbs deptName="약침치료클리닉" subDeptName="PDRN약침" />

            {/* 2. What is PDRN? */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.introSection}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: colors.text }}>PDRN 약침이란?</h2>
                        <p style={styles.introText}>
                            PDRN(Polydeoxyribonucleotide)은 인체 조직과 유사한 DNA 조각 성분을 사용하여, 약해지거나 손상된 세포와 조직의 자가 회복을 돕는 치료입니다.
                            단순히 통증만 줄이는 것이 아니라, <strong>염증 완화와 조직 강화</strong>에 도움을 줄 수 있습니다.<br /><br />
                            본원에서는 <strong>고해상도 초음파</strong>를 통해 병변 부위를 실시간으로 확인하며 약물을 주입하므로, 보다 정밀한 치료가 가능합니다.
                        </p>
                        <img src={pdrnInfoImg} alt="PDRN 약침 인포그래픽" style={styles.infoGraphic} />
                    </div>
                </div>
            </section>

            {/* 3. Features (치료의 특징) */}
            <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>치료의 특징</h2>
                    <div style={styles.grid3}>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.primaryBlue }}>
                                <i className="fa-solid fa-crosshairs"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>정밀성</h3>
                            <p style={{ color: '#666' }}>초음파 영상을 통해 혈관과 신경을 피해 필요한 위치에 정확히 주입합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.accentPink }}>
                                <i className="fa-solid fa-shield-virus"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>생체 적합성</h3>
                            <p style={{ color: '#666' }}>인체 유래 성분과 유사하여 거부 반응이나 부작용의 우려가 적습니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.primaryBlue }}>
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>간편함</h3>
                            <p style={{ color: '#666' }}>시술 시간이 짧고, 시술 후 즉시 일상생활 복귀가 가능합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Target & Principles (주요 치료 대상 및 원리) */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>주요 치료 대상 및 원리</h2>
                    <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
                        정확한 진단을 통해 각 질환에 맞는 최적의 치료를 시행합니다.
                    </p>
                    <div style={styles.targetSection}>
                        <div style={styles.targetItem}>
                            <div style={styles.targetIcon}>
                                <i className="fa-solid fa-bone"></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: colors.text }}>관절 질환 (무릎, 어깨, 고관절 등)</h3>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    퇴행성 변화나 염증으로 인해 손상된 관절 부위에 적용합니다. 관절 내 염증 환경을 개선하여 통증을 줄이고, 관절의 기능 회복을 돕습니다.
                                </p>
                            </div>
                        </div>
                        <div style={styles.targetItem}>
                            <div style={styles.targetIcon}>
                                <i className="fa-solid fa-x-ray"></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: colors.text }}>척추 질환 (디스크, 협착증, 만성 요통)</h3>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    신경 압박으로 인한 염증 부위나 약해진 척추 주변 인대에 시술합니다. 항염증 작용을 통해 신경 자극을 줄이고 허리와 목의 안정성을 높이는 데 기여합니다.
                                </p>
                            </div>
                        </div>
                        <div style={styles.targetItem}>
                            <div style={styles.targetIcon}>
                                <i className="fa-solid fa-person-running"></i>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: colors.text }}>힘줄·인대 손상 (엘보, 족저근막염 등)</h3>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    만성적인 염증으로 약해진 힘줄과 인대에 콜라겐 생성을 돕는 물질을 공급합니다. 이를 통해 조직의 결속력을 강화하고 튼튼하게 아물도록 유도합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Post-treatment Care (시술 후 주의사항) */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ backgroundColor: '#fff', border: `2px solid ${colors.primaryBlue}`, borderRadius: '20px', padding: '40px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center', color: colors.primaryBlue }}>
                            <i className="fa-solid fa-circle-exclamation" style={{ marginRight: '10px' }}></i>
                            시술 후 주의사항
                        </h2>
                        <ul style={{ ...styles.checklist, maxWidth: '800px', margin: '0 auto' }}>
                            <li style={styles.checklistItem}>
                                <i className="fa-solid fa-check" style={{ color: colors.accentPink, marginRight: '15px', fontSize: '1.2rem' }}></i>
                                안전한 회복을 위해 시술 당일은 무리한 사용을 피하고 안정을 취해주세요.
                            </li>
                            <li style={styles.checklistItem}>
                                <i className="fa-solid fa-check" style={{ color: colors.accentPink, marginRight: '15px', fontSize: '1.2rem' }}></i>
                                시술 후 2~3일간은 강한 마사지나 사우나는 삼가는 것이 좋습니다.
                            </li>
                            <li style={styles.checklistItem}>
                                <i className="fa-solid fa-check" style={{ color: colors.accentPink, marginRight: '15px', fontSize: '1.2rem' }}></i>
                                개인의 증상과 호전도에 따라 주 2~3회 간격으로 반복 치료가 필요할 수 있습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section style={{ ...styles.section, backgroundColor: '#fafafa' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>자주 묻는 질문</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {FAQs.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                    <span style={{ flex: 1, marginRight: '15px' }}>Q. {faq.q}</span>
                                    <i className={`fa-solid fa-chevron-${openFaq === index ? 'up' : 'down'}`} style={{ color: colors.primaryBlue }}></i>
                                </button>
                                {openFaq === index && (
                                    <div style={styles.faqAnswer}>
                                        <strong style={{ color: colors.primaryBlue, display: 'block', marginBottom: '10px' }}>A.</strong>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Footer & CTA */}
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
