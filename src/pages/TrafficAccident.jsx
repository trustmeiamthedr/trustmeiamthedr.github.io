import React from 'react';
import { contact } from '../data';
import trafficAccidentImage from '../assets/images/traffic_accident_consultation.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

const TrafficAccident = () => {
    return (
        <div className="traffic-accident-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>교통사고 클리닉</h1>
                    <p>복잡한 사고 처리, 몸만 오세요.<br className="mobile-only" /> 어혈 제거부터 교정까지 자동차 보험으로 든든하게 치료합니다.</p>
                </div>
            </div>

            <Breadcrumbs deptName="교통사고 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Intro Section: Split Layout (Text Left, Image Right) */}
                <div className="intro-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>

                    {/* Left Column: Text Content */}
                    <div className="text-content">
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>사고 후유증, 참지 말고 자동차 보험으로 부담 없이 치료하세요.<br /> 영상 의학적 진단과 한의학적 케어로 사고 이전의 몸 상태로 되돌립니다.</h2>
                        </div>

                        {/* Section 1: Why Treat Now */}
                        <div className="info-section">
                            <div style={{ marginBottom: '20px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>교통사고 후유증, 왜 ‘지금’ 치료해야 할까요?</h3>
                            </div>
                            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
                                <strong>“엑스레이엔 이상이 없다는데, 왜 계속 아플까요?”</strong><br /><br />
                                교통사고는 예기치 못한 순간에 강한 충격이 전신에 가해지기 때문에, 뼈에는 이상이 없더라도 근육, 인대, 신경 등 미세한 조직이 손상되는 <strong>‘편타성 손상(Whiplash Injury)’</strong>이 발생하기 쉽습니다.
                            </p>
                            <div className="symptoms-box" style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <strong style={{ display: 'block', marginBottom: '10px', color: '#333' }}>이런 증상이 있다면 즉시 내원하세요:</strong>
                                <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px', lineHeight: '1.6' }}>
                                    <li><strong>근골격계 통증:</strong> 목과 허리가 뻐근하고 고개를 돌리기 힘들다.</li>
                                    <li><strong>신경계 증상:</strong> 손발이 저리거나 찌릿한 느낌이 든다.</li>
                                    <li><strong>내과/정신적 증상:</strong> 머리가 아프고 어지러우며, 속이 메스껍거나 가슴이 두근거려 잠을 못 잔다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="image-content" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <img src={trafficAccidentImage} alt="Traffic Accident Treatment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 2: Insurance Guide */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>자동차 보험 적용 안내</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"복잡한 절차는 저희가 도와드립니다. 치료에만 집중하세요."</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>한의원에서는 단순 물리치료뿐만 아니라, 고가의 한약 처방과 추나 요법까지 자동차 보험으로 본인 부담금 없이 받으실 수 있습니다.</p>

                        <div className="insurance-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div className="item" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>어혈(瘀血) 제거 한약</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>사고 충격으로 발생한 죽은 피(어혈)를 배출하고 긴장을 완화하는 맞춤 탕약</p>
                            </div>
                            <div className="item" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>추나(Chuna) 요법</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>틀어진 척추와 골반 뼈를 한의사가 직접 밀고 당겨 교정하는 수기 치료</p>
                            </div>
                            <div className="item" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>약침 및 봉침</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>염증 부위에 직접 주입하여 빠르게 통증을 가라앉히는 약침 요법</p>
                            </div>
                            <div className="item" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>일반 침 & 전침</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>경직된 근육을 풀어주고 기혈 순환을 돕는 치료</p>
                            </div>
                            <div className="item" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>부항 & 물리치료</h4>
                                <p style={{ fontSize: '14px', color: '#666' }}>독소를 배출하고 근육 이완을 돕는 요법</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Special Treatment System */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>우리 병원만의 특별한 교통사고 치료 시스템</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"보이지 않는 통증까지 잡아내는 정밀한 시선"</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>남들은 "시간이 지나면 낫는다"고 하지만, 저희는 <strong>영상 진단 장비(초음파)</strong>를 통해 통증의 원인을 끝까지 추적합니다.</p>

                        <div className="steps-container">
                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 1. 초음파 정밀 진단 & 이학적 검사</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    단순히 문진만 하지 않습니다. 충격으로 손상되었을지 모르는 인대와 근육의 파열 여부를 고해상도 초음파로 직접 확인하여, 엑스레이 사각지대의 손상까지 찾아냅니다.
                                </p>
                            </div>

                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 2. 어혈 제거와 염증 차단 (Acute Care)</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>어혈 한약:</strong> 사고 초기 3주가 골든타임입니다. 체질에 맞춘 한약으로 몸속 노폐물과 어혈을 빠르게 배출시킵니다.</li>
                                    <li><strong>초음파 가이드 약침:</strong> 통증이 심한 부위에는 초음파를 보며 정확한 위치에 약침을 주입해 염증을 잡습니다.</li>
                                </ul>
                            </div>

                            <div className="step-item">
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 3. 구조적 교정과 기능 회복 (Rehabilitation)</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>추나 요법:</strong> 사고 충격으로 미세하게 틀어진 척추 라인을 바로잡아 후유증이 남지 않도록 교정합니다.</li>
                                    <li><strong>근막 이완:</strong> 긴장된 근육과 신경 주변을 풀어주어 움직임을 부드럽게 만듭니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Preparation */}
                    <div className="preparation-box" style={{ background: '#333', color: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>내원 시 준비물</h3>
                        <p style={{ fontSize: '18px', marginBottom: '20px' }}>"사고 접수 번호만 알려주세요."</p>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc', marginBottom: '0' }}>
                            내원 시 <strong>[사고 접수 번호]</strong>와 <strong>[보험사 담당자 연락처]</strong>만 알려주시면,<br className="desktop-only" /> 지불 보증 확인부터 진료비 청구까지 모든 행정 절차를 병원에서 대신 처리해 드립니다.
                        </p>
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

export default TrafficAccident;
