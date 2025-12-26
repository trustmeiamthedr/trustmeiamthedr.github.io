import React, { useEffect } from 'react';
import { ChevronRight, Activity, ShieldCheck, Zap, Crosshair } from 'lucide-react';
import './HydrodissectionPage.css';
import hydroHeroImg from '../assets/images/hydro_carpal.png';
import hydroTreatmentImg from '../assets/images/hydro_treatment.jpg';
import carpalTunnelImg from '../assets/images/carpal_tunnel_illust.png';
import rmskBadgeImg from '../assets/images/rmsk_certification.png';

const HydrodissectionPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hydro-page">
            {/* 1. Hero Section */}
            <header className="hydro-hero" style={{ backgroundImage: `linear-gradient(rgba(13, 45, 98, 0.8), rgba(13, 45, 98, 0.6)), url(${hydroHeroImg})` }}>
                <div className="container">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">초음파 유도하 하이드로다이섹션<br />(Hydrodissection)</h1>
                        <p className="hero-subtitle">보이지 않는 통증의 원인, 초음파로 확인하고 약침으로 유착을 박리합니다.</p>
                    </div>
                </div>
            </header>

            {/* 2. What is Hydrodissection? */}
            <section className="section hydro-what">
                <div className="container">
                    <div className="flex align-center gap-50 responsive-col">
                        <div className="col-text">
                            <h2 className="section-title">하이드로다이섹션이란?</h2>
                            <p className="section-desc">
                                고해상도 초음파(Ultrasound)를 통해 실시간으로 신경, 혈관, 근육의 상태를 확인하며,
                                유착된 조직 사이에 치료 약물을 주입하여 물리적으로 공간을 확보하고 신경 압박을 해소하는 최신 시술법입니다.
                            </p>
                            <div className="feature-badges">
                                <span className="badge"><Crosshair size={16} /> 정확한 타겟팅</span>
                                <span className="badge"><ShieldCheck size={16} /> 비수술적 치료</span>
                                <span className="badge"><Zap size={16} /> 즉각적인 신경 감압</span>
                            </div>
                        </div>
                        <div className="col-media">
                            <div className="video-placeholder">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/ZF9sicujNNw?si=EK0wfMZAJOodbK-g"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white border-y border-gray-100 relative overflow-hidden rmsk-section">
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto" style={{ display: 'flex', gap: '40px' }}>
                        {/* Left: Content Area */}
                        <div className="rmsk-content" style={{ md: { flex: '2' }, flex: '1' }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                                <span className="text-amber-500">국제적으로 인증받은</span> 초음파 전문가,<br />
                                RMSK 자격 보유
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 font-light">
                                "초음파 시술, 기계보다 중요한 것은 <strong className="text-slate-900 font-medium">'보는 의사의 눈'</strong>과 <strong className="text-slate-900 font-medium">'실력'</strong>입니다."
                            </p>

                            <div className="grid md:grid-cols-1 gap-12">
                                <div className="flex items-start" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 rounded-full flex items-center justify-center">
                                            <span className="text-amber-500 font-bold text-xs">01</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-800 mb-0">RMSK(Registered in Musculoskeletal sonography)란?</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            미국 진단초음파 의사협회(APCA)가 인증하는 국제 근골격계 초음파 자격으로,
                                            엄격한 시험과 임상 경험을 통과해야만 취득할 수 있는 고난도 자격증입니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 rounded-full flex items-center justify-center">
                                            <span className="text-amber-500 font-bold text-xs">02</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-800 mb-0">하이드로다이섹션 특화 자격</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            단순한 진단을 넘어, 초음파를 보며 실시간으로 치료하는 '초음파 유도하 중재시술(Ultrasound Guided Intervention)'에
                                            대한 해부학적 지식과 숙련도를 국제 표준 수준으로 검증받았습니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-amber-50 rounded-full flex items-center justify-center">
                                            <span className="text-amber-500 font-bold text-xs">03</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-800 mb-0">검증된 안전성과 정확도</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            신경, 혈관, 근육을 mm 단위로 구별해내는 RMSK 인증 의료진이 직접 시술하므로,
                                            고난도 하이드로다이섹션 치료도 안심하고 받을 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Badge Area */}
                        <div className="md:block" style={{ flex: '1', maxWidth: '33.33%' }}>
                            <img
                                src={rmskBadgeImg}
                                alt="RMSK Certification Badge"
                                style={{ width: '100%', height: 'auto', padding: '20px', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* 3. Why Choose Us? (Emphasized) */}
            <section className="section hydro-why">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title text-white">왜 우리 병원의 하이드로다이섹션인가요?</h2>
                        <p className="text-white opacity-8">첨단 장비의 정밀함과 천연 성분의 안전함이 만났습니다.</p>
                    </div>
                    <div className="grid-2 gap-30">
                        <div className="highlight-card precision">
                            <div className="card-icon">
                                <Activity size={40} />
                            </div>
                            <h3>첨단 초음파 유도 (Precision)</h3>
                            <p>
                                해부학적 구조를 실시간으로 확인하며 바늘을 진입시키므로,
                                혈관이나 신경 손상 없이 안전하고 정확하게 병변 부위만 치료합니다.
                            </p>
                        </div>
                        <div className="highlight-card natural">
                            <div className="card-icon">
                                <ShieldCheck size={40} />
                            </div>
                            <h3>천연물 성분 약침 사용 (Natural & Safe)</h3>
                            <p>
                                단순 생리식염수나 스테로이드를 사용하는 것이 아닙니다.<br />
                                <strong>어혈약침, 해독약침 등 검증된 천연물 성분의 약침액</strong>을 사용하여
                                부작용은 최소화하고, 조직의 재생과 염증 제거 효과를 극대화합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Target Diseases */}
            <section className="section hydro-targets">
                <div className="container">
                    <h2 className="section-title text-center mb-50">치료 대상 질환</h2>

                    <div className="target-group mb-50">
                        <div className="flex align-center gap-30 responsive-col-reverse">
                            <div style={{ flex: 2 }}>
                                <h3 className="group-title"><span className="indicator">A</span> 말초신경 포착 질환 (저림, 통증)</h3>
                                <div className="grid-card-list">
                                    <div className="target-card">손목터널증후군 (Carpal Tunnel Syndrome)</div>
                                    <div className="target-card">흉곽출구증후군 (Thoracic Outlet Syndrome)</div>
                                    <div className="target-card">좌골신경포착 (Sciatic Nerve Entrapment)</div>
                                    <div className="target-card">요골/척골신경포착 (Radial/Ulnar Nerve Entrapment)</div>
                                    <div className="target-card">사각공간증후군 (Quadrangular Space Syndrome)</div>
                                    <div className="target-card">대퇴외측피신경포착 (LFCN)</div>
                                    <div className="target-card">비복신경/족저신경포착 (Sural/Plantar Nerve Entrapment)</div>
                                </div>
                            </div>
                            <div className="illust-container" style={{ flex: 1, textAlign: 'center' }}>
                                <img src={carpalTunnelImg} alt="Carpal Tunnel Syndrome Illustration" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                                <p className="caption mt-10" style={{ fontSize: '0.9rem', color: '#666' }}>손목터널증후군의 신경 압박 메커니즘</p>
                            </div>
                        </div>
                    </div>

                    <div className="target-group">
                        <h3 className="group-title"><span className="indicator">B</span> 근막 유착 및 만성 통증</h3>
                        <div className="grid-card-list">
                            <div className="target-card">승모근, 흉근 (거북목, 라운드숄더 통증)</div>
                            <div className="target-card">전완근, 햄스트링, 비복근 (스포츠 손상)</div>
                            <div className="target-card">둔근 (만성 요통 및 고관절 통증)</div>
                        </div>
                        <div className="mt-30 text-center">
                            <img src={hydroTreatmentImg} alt="Hydrodissection Treatment" className="treatment-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ / Benefits */}
            <section className="section hydro-benefits bg-gray">
                <div className="container">
                    <h2 className="section-title text-center mb-40">시술 장점</h2>
                    <div className="benefits-list">
                        <div className="benefit-item">
                            <div className="check-icon">✔</div>
                            <div className="benefit-text">시술 시간이 10분 내외로 짧습니다.</div>
                        </div>
                        <div className="benefit-item">
                            <div className="check-icon">✔</div>
                            <div className="benefit-text">시술 후 즉시 일상생활이 가능합니다.</div>
                        </div>
                        <div className="benefit-item">
                            <div className="check-icon">✔</div>
                            <div className="benefit-text">반복 시술에도 내성이나 부작용 걱정이 적습니다.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="section hydro-cta text-center">
                <div className="container">
                    <h2>지긋지긋한 통증, 이제 원인을 찾아 해결하세요.</h2>
                    <p className="mb-30">정밀한 초음파 진단과 안전한 약침 치료가 함께합니다.</p>
                    <a href="/appointment" className="btn btn-large">진료 예약 바로가기 <ChevronRight size={20} style={{ verticalAlign: 'middle' }} /></a>
                </div>
            </section>
        </div>
    );
};

export default HydrodissectionPage;
