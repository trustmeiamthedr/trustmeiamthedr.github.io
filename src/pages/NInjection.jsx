import React, { useEffect, useState } from 'react';
import heroImg from '../assets/images/n_injection_hero.png';
import mechanismImg from '../assets/images/vasodilation_mechanism.png';
import nitricOxideRolesImg from '../assets/images/nitric_oxide_roles.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

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
        introSection: {
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '900px',
            margin: '0 auto 60px',
        },
        introText: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
        },
        grid4: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
            height: '100%',
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
        categorySection: {
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
        },
        categoryTitle: {
            color: colors.deepRed,
            fontSize: '1.5rem',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid #eee',
        },
        tagList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
        },
        tag: {
            backgroundColor: '#f5f5f5',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '0.95rem',
            color: '#555',
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

            <Breadcrumbs deptName="약침치료클리닉" subDeptName="N약침" />

            {/* 2. Definition Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.introSection}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#333' }}>N약침이란?</h2>
                        <p style={{ ...styles.introText, fontWeight: 'bold', fontSize: '1.2rem', color: colors.deepRed, marginBottom: '20px' }}>
                            1998년 노벨생리의학상을 수상한 기적의 물질, '산화질소(Nitric Oxide)'
                        </p>
                        <p style={styles.introText}>
                            N약침은 혈관, 신경, 림프, 염증 조절에 필수적인 신호전달물질인 <strong>산화질소(NO)</strong>를 체내에서 생성하는 산화질소대사체를 함유한 약침입니다.<br />
                            진통소염, 혈액순환, 림프순환, 회복, 재생 등의 효과를 나타내며, 각종 난치성 통증 질환과 내과 질환 치료에 폭넓게 사용됩니다.
                        </p>
                    </div>

                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px', color: '#333' }}>4대 핵심 효능</h3>
                    <div style={styles.grid4}>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.deepRed }}>
                                <i className="fa-solid fa-droplet"></i>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>혈관 확장</h4>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>혈관 내피세포에 작용하여<br />혈류량을 증가시키고<br />혈액순환을 개선합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.vitalGreen }}>
                                <i className="fa-solid fa-shield-virus"></i>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>염증 제어</h4>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>강력한 항염증 효과로<br />만성적인 염증 부위를<br />근본적으로 치료합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.deepRed }}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>신경 전달</h4>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>신경세포 간 신호 전달을<br />원활하게 하여 신경통 및<br />감각 이상을 개선합니다.</p>
                        </div>
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, backgroundColor: colors.vitalGreen }}>
                                <i className="fa-solid fa-recycle"></i>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>림프 순환</h4>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>림프 배출을 도와<br />부종을 제거하고<br />면역력을 강화합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Indications (Major targets) */}
            <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#333' }}>주요 적용 질환</h2>
                    <div style={{ ...styles.grid2, marginBottom: '50px' }}>
                        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ color: colors.deepRed, fontSize: '1.8rem', marginBottom: '20px' }}>왜 다양한 질환에 쓰이나요?</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>
                                산화질소는 우리 몸의 <strong>모든 혈관과 신경계</strong>에 작용하는 기초 물질이기 때문입니다.<br />
                                단순히 통증만 줄이는 것이 아니라, 혈액과 림프의 순환을 뚫어줌으로써 우리 몸이 스스로 회복할 수 있는 환경을 만들어줍니다.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={nitricOxideRolesImg} alt="Nitric Oxide Roles" style={{ maxWidth: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {/* Musculoskeletal */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-bone" style={{ marginRight: '10px' }}></i>근골격계 질환</h3>
                            <div style={styles.tagList}>
                                {["퇴행성 슬관절염", "오십견", "족저근막염", "목/허리 디스크", "테니스 엘보", "좌골신경통"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Neuro & Psych */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-brain" style={{ marginRight: '10px' }}></i>뇌신경 및 정신과</h3>
                            <div style={styles.tagList}>
                                {["두통/어지럼증", "불면증", "치매/파킨슨 관리", "우울증/공황장애", "자율신경실조증"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Internal & Circulatory */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-heart-pulse" style={{ marginRight: '10px' }}></i>내과 및 순환기</h3>
                            <div style={styles.tagList}>
                                {["만성 위염", "과민성대장증후군", "수족냉증", "당뇨/고혈압 관리"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Gynecology */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-person-dress" style={{ marginRight: '10px' }}></i>부인과 질환</h3>
                            <div style={styles.tagList}>
                                {["생리통/배란통", "다낭성난소증후군", "생리불순", "무월경", "월경전증후군"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* ENT */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-ear-listen" style={{ marginRight: '10px' }}></i>이비인후과</h3>
                            <div style={styles.tagList}>
                                {["비염", "축농증", "이명", "난청"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Skin & Others */}
                        <div style={styles.categorySection}>
                            <h3 style={styles.categoryTitle}><i className="fa-solid fa-hand-dots" style={{ marginRight: '10px' }}></i>피부 및 기타</h3>
                            <div style={styles.tagList}>
                                {["탈모", "지방종", "여드름", "무좀", "건선/아토피", "습진", "대상포진"].map((tag, i) => (
                                    <span key={i} style={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>자주 묻는 질문</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {FAQs.map((faq, index) => (
                            <div key={index} style={styles.faqItem}>
                                <button style={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                    <span style={{ flex: 1 }}>Q. {faq.q}</span>
                                    <i className={`fa-solid fa-chevron-${openFaq === index ? 'up' : 'down'}`} style={{ color: colors.deepRed }}></i>
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

            {/* 5. Footer & Final CTA */}
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
