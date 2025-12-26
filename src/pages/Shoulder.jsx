import React from 'react';
import { contact } from '../data';
import shoulderImage from '../assets/images/shoulder_treatment.png';
import Breadcrumbs from '../components/Breadcrumbs';

const Shoulder = () => {
    return (
        <div className="shoulder-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>어깨 관절 클리닉</h1>
                    <p>올라가지 않는 팔, 잠 못 드는 어깨 통증.<br className="mobile-only" /> 복잡한 어깨 구조를 시원하게 풀어드립니다.</p>
                </div>
            </div>

            <Breadcrumbs deptName="어깨 관절 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Main Copy */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>옷 입기도, 머리 감기도 힘드신가요?<br /> 복잡한 어깨 통증, 신경 길을 열고 인대를 강화하여 가동 범위를 되찾아 드립니다.</h2>
                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 1: Diagnosis */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>어깨 질환, 정확한 진단이 치료의 시작입니다</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"단순 오십견인 줄 알았는데..." 비슷해 보여도 원인은 다릅니다.</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>어깨 통증은 크게 관절/인대 문제와 신경 눌림 문제로 나뉩니다. 저희는 정밀한 진단을 통해 통증의 진짜 원인을 찾아냅니다.</p>

                        <div className="disease-groups" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {/* Group 1: Joint & Ligament */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. 관절 및 인대 질환 (구조적 문제)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>오십견 (유착성 관절낭염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>관절을 감싸는 주머니(관절낭)가 염증으로 인해 딱딱하게 굳어, 팔을 스스로 올리기도 남이 올려주기도 힘든 상태입니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>회전근개 파열</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>어깨를 움직이는 4개의 힘줄(회전근개)이 찢어지거나 손상되어, 특정 각도에서 힘이 빠지거나 통증이 발생합니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>어깨 충돌 증후군</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>어깨 뼈(견봉)와 힘줄이 부딪혀 염증이 생기는 질환으로, 팔을 들어 올릴 때 걸리는 듯한 통증이 특징입니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>석회성 건염 / 점액낭염</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>힘줄에 돌(석회)이 생기거나, 관절 마찰을 줄여주는 물주머니(점액낭)에 염증이 생겨 극심한 통증을 유발합니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>견쇄관절 질환</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>쇄골과 어깨뼈가 만나는 관절에 염증이나 손상이 생겨, 어깨 위쪽을 누르면 아프고 팔을 교차할 때 통증이 심해집니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 2: Nerve Entrapment */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>2. 신경 포착 및 공간 증후군 (신경 눌림 문제)</h4>
                                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', fontStyle: 'italic' }}>엑스레이로는 보이지 않는 신경의 눌림을 초음파로 찾아냅니다.</p>

                                <div style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                    <img src={shoulderImage} alt="Nerve Entrapment Visualization" style={{ width: '100%', display: 'block' }} />
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>상견갑 신경 포착 (Suprascapular Nerve Entrapment)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>어깨 뒤쪽 날개뼈 부근의 묵직한 통증과 함께, 어깨 근육이 위축되어 힘이 빠지는 증상이 나타납니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>액와 신경 포착 (Axillary Nerve Entrapment)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>어깨 삼각근 부위의 감각이 둔해지거나 저린 느낌이 들고, 팔을 옆으로 들어 올리는 힘이 약해집니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>사각 공간 증후군 (Quadrilateral Space Syndrome)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>겨드랑이 뒤쪽의 네모난 공간(사각 공간)을 지나는 신경과 혈관이 눌려, 어깨 뒤쪽의 모호한 통증과 팔 저림을 유발합니다.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Treatment System */}
                    <div className="info-section" style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>어깨 특화 비수술 치료 시스템</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"눌린 신경은 풀어주고, 굳은 관절은 유연하게"</p>
                        <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
                            복잡하게 얽힌 어깨의 신경과 미세 혈관, 인대를 고해상도 초음파로 실시간 확인하며 치료합니다.
                        </p>

                        <div className="steps-container">
                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 1. 초음파 가이드 하이드로다이섹션 (신경 박리술)</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    어깨 통증의 숨은 원인인 <strong>신경 포착(눌림)</strong>을 치료하는 핵심 기술입니다. 초음파를 통해 눌려있는 상견갑 신경이나 액와 신경을 실시간으로 확인하며, 신경 주변에 약물을 주입해 유착된 공간을 씻어내듯 박리(분리)합니다. 이를 통해 눌린 신경을 해방시키고 혈류를 개선하여 통증을 완화합니다.
                                </p>
                            </div>

                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 2. 조직 재생 및 강화 요법</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>천연 성분 약침:</strong> 정제된 한약 성분을 염증 부위에 직접 주입하여 화학적 부담 없이 통증을 가라앉힙니다.</li>
                                    <li><strong>PDRN (DNA 약침):</strong> 손상된 회전근개 힘줄이나 인대에 조직 재생 성분을 주입하여 튼튼하게 아물도록 돕습니다.</li>
                                </ul>
                            </div>

                            <div className="step-item">
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 3. 가동 범위 회복 치료 (Motion Recovery)</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>침 및 전침 요법:</strong> 굳어버린(오십견) 관절 주변의 근육을 미세한 전류 자극으로 이완시킵니다.</li>
                                    <li><strong>관절 가동 추나:</strong> 의료진이 직접 관절의 움직임을 유도하여 굳어진 어깨의 가동 범위를 단계적으로 넓혀줍니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Why Choose Us */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>왜 우리 병원인가요?</h3>
                        </div>

                        <div className="reasons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>신경까지 보는 디테일</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>뼈만 보는 것이 아니라, 통증을 유발하는 미세한 신경의 눌림(사각공간증후군 등)까지 찾아내 치료합니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>안전한 시술</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>스테로이드 사용을 최소화하고, 우리 몸의 재생 반응을 돕는 안전한 약물을 사용하여 반복 시술에도 신체 부담이 적습니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>기능 회복 중심</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>단순히 통증만 없애는 것이 아니라, 팔을 다시 자유롭게 움직일 수 있도록 '운동 기능 회복'을 최종 목표로 합니다.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <a href={`tel:${contact.phone}`} className="btn-primary" style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--secondary-color)',
                        color: '#fff',
                        padding: '15px 40px',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        상담 및 예약하기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Shoulder;
