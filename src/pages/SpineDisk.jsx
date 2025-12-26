import React from 'react';
import { contact } from '../data';
import spineDiskImage from '../assets/images/spine_disk_treatment.png';
import Breadcrumbs from '../components/Breadcrumbs';

const SpineDisk = () => {
    return (
        <div className="spine-disk-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>척추/디스크 클리닉</h1>
                    <p>정밀한 현대 과학적 진단과 신체 부담을 줄인 치료(한의학+재생의학)의 조화</p>
                </div>
            </div>

            <Breadcrumbs deptName="척추/디스크 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Main Copy */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>보이지 않는 통증의 원인까지 정밀하게,<br /> 현대 과학·한의학의 접근으로 척추의 균형을 되찾습니다.</h2>
                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Section 1: Diagnosis Areas */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>진료 분야</h3>
                        </div>
                        <p style={{ marginBottom: '20px', color: '#666' }}>일상의 움직임을 방해하는 척추 질환, 초기부터 세심하게 관리합니다.</p>

                        <ul className="custom-list" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#333', display: 'block', fontSize: '18px' }}>목/허리 디스크 (추간판탈출증)</strong>
                                <span style={{ color: '#666' }}>척추 뼈 사이의 디스크가 밀려나와 신경을 압박하는 상태</span>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#333', display: 'block', fontSize: '18px' }}>척추관협착증</strong>
                                <span style={{ color: '#666' }}>신경이 지나가는 통로가 좁아져 통증과 저림이 발생하는 증상</span>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#333', display: 'block', fontSize: '18px' }}>급성 요추염좌</strong>
                                <span style={{ color: '#666' }}>허리 근육이나 인대가 손상되어 발생하는 갑작스러운 통증</span>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#333', display: 'block', fontSize: '18px' }}>거북목/일자목</strong>
                                <span style={{ color: '#666' }}>잘못된 자세로 인한 경추 변형 및 만성 통증</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 2: Philosophy and Methods */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>치료 철학 및 방법</h3>
                        </div>
                        <p style={{ marginBottom: '20px', color: '#666', lineHeight: '1.6' }}>
                            초음파로 확인하고, 천연 성분으로 다스립니다. 저희 병원은 영상 의학적 진단과 한의학적 치료의 장점을 결합하여, 수술 없이 통증을 완화하고 기능을 회복하는 데 집중합니다.
                        </p>

                        <div className="steps-container">
                            <div className="step-item" style={{ marginBottom: '25px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>STEP 1. 정밀 진단 (Dual Diagnostic View)</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '5px' }}><strong>고해상도 초음파 진단:</strong> 엑스레이로는 확인하기 힘든 인대, 근육, 신경의 상태를 실시간으로 확인하여 통증의 정확한 원인 부위를 찾아냅니다.</li>
                                </ul>
                            </div>

                            <div className="step-item" style={{ marginBottom: '25px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>STEP 2. 초음파 가이드 약침 요법</h4>
                                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', fontStyle: 'italic' }}>눈으로 직접 보며 시술하기에 더욱 정교합니다.</p>

                                <div style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                    <img src={spineDiskImage} alt="Ultrasound Guided Injection" style={{ width: '100%', display: 'block' }} />
                                </div>

                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '8px' }}><strong>초음파 가이드 천연 성분 약침:</strong> 정제된 순수 한약 성분을 통증 부위에 직접 주입하여 염증 반응을 줄이는 데 도움을 줍니다.</li>
                                    <li style={{ marginBottom: '8px' }}><strong>PDRN 약침 요법:</strong> 조직 재생에 도움을 주는 성분을 활용하여 손상된 인대와 힘줄의 회복을 돕습니다.</li>
                                    <li><strong>하이드로다이섹션 (신경박리술):</strong> 초음파를 보며 유착된 신경과 주변 조직 사이에 약물을 주입해 공간을 확보하고, 눌린 신경을 풀어주는 시술입니다.</li>
                                </ul>
                            </div>

                            <div className="step-item">
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>STEP 3. 통합 기능 회복</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li><strong>침 및 전침 요법:</strong> 경직된 근육을 이완하고 기혈 순환을 도와 통증 완화 및 가동 범위 회복을 돕습니다.</li>
                                </ul>
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

export default SpineDisk;
