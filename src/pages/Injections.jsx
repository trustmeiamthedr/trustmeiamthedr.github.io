import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainHeroImg from '../assets/images/injections_main_hero.png';
import Breadcrumbs from '../components/Breadcrumbs';
import ultrasoundIcon from '../assets/icons/ultrasound_probe.png';

const Injections = () => {
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mainHeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '120px 0',
        },
        heroTitle: {
            fontSize: '3.5rem',
            marginBottom: '20px',
            color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            marginBottom: '40px',
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginTop: '40px',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContent: {
            padding: '30px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            fontSize: '1.8rem',
            marginBottom: '10px',
            color: '#333',
        },
        cardDesc: {
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '20px',
            flex: 1,
        },
        btn: {
            display: 'inline-block',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '12px 25px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'flex-start',
            transition: 'background-color 0.3s',
        },
        icon: {
            fontSize: '40px',
            color: '#007bff',
            marginBottom: '15px',
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <header style={styles.hero}>
                <div style={styles.container}>
                    <h1 style={styles.heroTitle}>약침치료 클리닉</h1>
                    <p style={styles.heroSubtitle}>빠르고 안전한 치료, 활기찬 일상을 되찾아드립니다.</p>
                </div>
            </header>

            <Breadcrumbs deptName="약침치료클리닉" />

            {/* Injections List */}
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '15px' }}>주요 약침 치료 안내</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>
                            저희 병원에서는 환자분의 상태와 증상에 맞춘 다양한 약침 요법을 시행하고 있습니다.<br />
                            검증된 성분의 안전한 약침 치료로 빠른 회복을 돕습니다.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {/* Placenta Injection */}
                        <div style={styles.card}>
                            <div style={styles.cardContent}>
                                <i className="fa-solid fa-leaf" style={{ ...styles.icon, color: '#8B0000' }}></i>
                                <h3 style={styles.cardTitle}>태반약침 (Placenta Injection)</h3>
                                <p style={styles.cardDesc}>
                                    천연 태반 성분을 이용하여 간 기능 개선, 만성 피로 회복, 갱년기 증상 완화 및 항노화 효과를 제공합니다.
                                    지친 몸에 활력을 불어넣는 안전한 치료입니다.
                                </p>
                                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#555' }}>
                                    <li>만성 피로 및 간 기능 저하</li>
                                    <li>갱년기 장애 (안면홍조, 불면증)</li>
                                    <li>피부 미용 및 노화 방지</li>
                                </ul>
                                <Link to="/departments/injections/placenta" style={{ ...styles.btn, backgroundColor: '#8B0000' }}>자세히 보기</Link>
                            </div>
                        </div>

                        {/* PDRN Injection */}
                        <div style={styles.card}>
                            <div style={styles.cardContent}>
                                <i className="fa-solid fa-dna" style={{ ...styles.icon, color: '#2196f3' }}></i>
                                <h3 style={styles.cardTitle}>PDRN 약침 (DNA Injection)</h3>
                                <p style={styles.cardDesc}>
                                    인체 DNA와 유사한 성분을 손상된 조직에 주입하여 세포 재생을 촉진하고 염증을 줄여줍니다.
                                    통증의 일시적 완화가 아닌 근본적인 조직 치유를 돕습니다.
                                </p>
                                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#555' }}>
                                    <li>관절, 인대, 힘줄 손상 재생</li>
                                    <li>만성 통증 및 염증 치료</li>
                                    <li>수술 후 빠른 회복</li>
                                </ul>
                                <Link to="/departments/injections/pdrn" style={{ ...styles.btn, backgroundColor: '#2196f3' }}>자세히 보기</Link>
                            </div>
                        </div>

                        {/* N Injection */}
                        <div style={styles.card}>
                            <div style={styles.cardContent}>
                                <i className="fa-solid fa-heart-pulse" style={{ ...styles.icon, color: '#7b1fa2' }}></i>
                                <h3 style={styles.cardTitle}>N 약침 (산화질소Nitro Oxide)</h3>
                                <p style={styles.cardDesc}>
                                    천연 한약재 추출 성분으로 혈관을 확장하고 혈액 순환을 개선하여 신체의 흐름을 원활하게 합니다.
                                    막힌 기혈을 뚫어 통증을 완화하고 면역력을 높입니다.
                                </p>
                                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#555' }}>
                                    <li>혈액 순환 장애 및 수족냉증</li>
                                    <li>만성 근골격계 통증</li>
                                    <li>부종 완화 및 면역력 강화</li>
                                </ul>
                                <Link to="/departments/injections/n-injection" style={{ ...styles.btn, backgroundColor: '#7b1fa2' }}>자세히 보기</Link>
                            </div>
                        </div>

                        {/* Hydrodissection Injection */}
                        <div style={styles.card}>
                            <div style={styles.cardContent}>
                                <img src={ultrasoundIcon} alt="Ultrasound" style={{ ...styles.icon, width: '40px', height: '40px', objectFit: 'contain' }} />
                                <h3 style={styles.cardTitle}>초음파 유도하 하이드로다이섹션</h3>
                                <p style={styles.cardDesc}>
                                    초음파로 병변을 직접 보며 약침으로 신경 유착을 박리하는 비수술적 치료입니다.
                                    신경 포착으로 인한 저림과 통증을 즉각적으로 완화합니다.
                                </p>
                                <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: '#555' }}>
                                    <li>손목터널 / 흉곽출구 증후군</li>
                                    <li>좌골신경통 / 만성 근막통증</li>
                                    <li>정확한 타겟팅 & 빠른 회복</li>
                                </ul>
                                <Link to="/departments/injections/hydrodissection" style={{ ...styles.btn, backgroundColor: '#0d2d62' }}>자세히 보기</Link>
                            </div>
                        </div>

                        {/* Coming Soon / More */}
                        {/* Placeholder for future injections if needed, or just leave as 2 for now as requested */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Injections;
