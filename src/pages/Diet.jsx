import React from 'react';
import { contact } from '../data';
import dietImage from '../assets/images/diet_treatment.png';
import nitricOxideMechanism from '../assets/images/nitric_oxide_fat_mechanism.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

const Diet = () => {
    return (
        <div className="diet-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>비만/다이어트 클리닉</h1>
                    <p>굶어서 빼는 고통은 그만.<br className="mobile-only" /> 천연물 과학으로 내 몸의 지방 대사 스위치를 켭니다.</p>
                </div>
            </div>

            <Breadcrumbs deptName="비만/다이어트 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Intro Section: Split Layout (6:4) */}
                <div className="intro-section grid-6-4">

                    {/* Left Column: Text Content */}
                    <div className="text-content">
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>지방을 '저장'하는 몸에서 '태우는' 몸으로.<br /> 천연 한약재와 산화질소(NO)의 만남, &lt;엔오슬림환&gt;</h2>
                        </div>

                        {/* Section 1: New Paradigm */}
                        <div className="info-section">
                            <div style={{ marginBottom: '20px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>새로운 다이어트 패러다임, 엔오슬림환</h3>
                            </div>
                            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
                                <strong>"왜 적게 먹어도 살이 안 빠질까요?" 문제는 식사량이 아니라 '지방을 태우는 능력'입니다.</strong><br /><br />
                                엔오슬림환은 단순한 식욕 억제제가 아닙니다. 우리 몸의 신진대사를 깨우고 지방 세포의 성질을 변화시켜, 살이 잘 찌지 않는 체질로 개선하는 것을 목표로 하는 신개념 천연 다이어트 한약입니다.
                            </p>
                            <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '10px' }}><strong>기대 효과:</strong> 한 달 평균 3~7kg 감량 (개인차 있음)</li>
                                <li style={{ marginBottom: '10px' }}><strong>식욕 조절:</strong> 1회 복용 시 약 4~5시간의 포만감 및 식욕 억제 지속</li>
                                <li><strong>천연 성분:</strong> 화학 부형제를 최소화하고 순수 한약재의 함량을 높여, 효과는 강하게 부작용은 낮췄습니다.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="image-content" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <img src={dietImage} alt="Diet Treatment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 2: Core Principle */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>핵심 원리 - 백색지방을 갈색지방으로!</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '20px' }}>"지방에도 '나쁜 지방'과 '착한 지방'이 있다는 사실, 알고 계셨나요?"</p>

                        <div style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', maxWidth: '600px', margin: '0 auto 40px' }}>
                            <img src={nitricOxideMechanism} alt="White vs Brown Adipose Tissue Mechanism" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>백색지방 (White Fat)</h4>
                                <p style={{ fontSize: '15px', color: '#666' }}>우리가 흔히 아는 뱃살, 허벅지살처럼 에너지를 저장하여 비만을 유발하는 지방입니다.</p>
                            </div>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '10px' }}>갈색지방 (Brown Fat)</h4>
                                <p style={{ fontSize: '15px', color: '#666' }}>에너지를 열로 태워 없애는 '지방 태우는 지방'입니다.</p>
                            </div>
                        </div>

                        <div style={{ background: '#e3f2fd', padding: '30px', borderRadius: '12px' }}>
                            <h4 style={{ color: '#1565c0', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>엔오슬림환의 산화질소(NO) 효과</h4>
                            <p style={{ color: '#333', lineHeight: '1.8' }}>
                                엔오슬림환의 핵심인 <strong>산화질소(NO)</strong>는 세포 내 미토콘드리아를 활성화하여, 덩어리진 <strong>백색지방을 에너지를 태우는 갈색지방으로 변화(Browning)</strong>시킵니다. <br />
                                (놀라운 사실: 갈색지방 1g은 근육 1g보다 에너지 소모 잠재력이 훨씬 뛰어납니다.)
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Ingredients */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>13가지 천연 약재의 황금 배합</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"비움과 채움의 밸런스를 맞췄습니다."</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>다이어트로 인한 영양 결핍과 부작용을 막기 위해, 식욕 억제뿐만 아니라 대사 증진, 노폐물 배출, 기력 보강을 위한 약재를 과학적으로 배합했습니다.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>식욕 조절 & 대사 촉진</h4>
                                <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>마황, 황백</strong>
                                <span style={{ fontSize: '14px', color: '#666' }}>기초대사량을 높여 운동한 듯한 효과</span>
                            </div>
                            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>지방 분해 & 혈류 개선</h4>
                                <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>산사, 인진호, 단삼</strong>
                                <span style={{ fontSize: '14px', color: '#666' }}>혈액 속 지방질 개선</span>
                            </div>
                            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>포만감 & 배변 활동</h4>
                                <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>의이인, 마자인, 차전자피</strong>
                                <span style={{ fontSize: '14px', color: '#666' }}>위장 팽창으로 포만감 유도 및 숙변 제거</span>
                            </div>
                            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>기력 보강 & 요요 방지</h4>
                                <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>황기, 지황, 산약</strong>
                                <span style={{ fontSize: '14px', color: '#666' }}>지방이 빠진 자리에 건강한 에너지를 채움</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Guide & Cost */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>맞춤 처방 및 복용 가이드</h3>
                        </div>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            <strong>내 몸에 딱 맞는 강도로, 안전하게 시작하세요.</strong><br />
                            사람마다 체질과 약물 민감도가 다릅니다. 엔오슬림환은 꼼꼼한 진료를 통해 1단계부터 4단계까지 강도를 조절하여 처방합니다.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '20px' }}>기본 복용법</h4>
                                <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '20px' }}>
                                    <li><strong>횟수:</strong> 하루 3회 (아침, 점심, 저녁)</li>
                                    <li><strong>시간:</strong> 식사 30분 전 <br /><span style={{ fontSize: '14px', color: '#888' }}>(포만감을 미리 형성하여 식사량을 자연스럽게 줄여줍니다)</span></li>
                                </ul>
                                <a href="/enoslim-guide" style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    padding: '12px',
                                    backgroundColor: '#e0f2f1',
                                    color: '#00695c',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    marginTop: '15px'
                                }}>
                                    <i className="fa-solid fa-book-medical" style={{ marginRight: '8px' }}></i>
                                    상세 복용 가이드 보기
                                </a>
                            </div>

                            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '20px' }}>비용 안내</h4>
                                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>합리적인 비용으로 건강한 다이어트를 시작하세요.</p>
                                <ul style={{ fontSize: '16px', color: '#333', paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>1개월 집중 코스:</strong> 15만 원</li>
                                    <li><strong>3개월 완성 코스:</strong> 45만 원 <br /><span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '14px' }}>(+10일분 추가 증정 혜택 ✨)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Yoyo Prevention */}
                    <div className="info-section" style={{ background: '#f0f4c3', padding: '40px', borderRadius: '12px', color: '#33691e' }}>
                        <div style={{ marginBottom: '20px', borderBottom: '2px solid #827717', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0 }}>요요 방지 프로그램</h3>
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>"빼는 것보다 중요한 것은 '지키는 것'입니다."</p>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>급격하게 뺀 살은 우리 몸의 항상성 때문에 다시 돌아오려 합니다. 엔오슬림환은 감량 후 유지기까지 책임집니다.</p>

                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                            <li style={{ marginBottom: '10px' }}><strong>유지 기간 법칙:</strong> 감량 체중 1kg당 1개월의 유지 기간이 필요합니다. <br />(예: 10kg 감량 성공 시 → 10개월 동안 유지 관리 권장)</li>
                            <li><strong>유지기 복용법:</strong> 하루 3회에서 저녁 1회로 줄여 복용하며, 줄어든 위장 크기와 체중을 몸이 기억하도록 돕습니다.</li>
                        </ul>
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

export default Diet;
