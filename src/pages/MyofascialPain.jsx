import React from 'react';
import { contact } from '../data';
import myofascialPainImage from '../assets/images/myofascial_pain_treatment.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

const MyofascialPain = () => {
    return (
        <div className="myofascial-pain-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>근막통증증후군 클리닉</h1>
                    <p>뭉친 근육 속 숨은 '통증 유발점'과 '눌린 신경'을 찾아,<br className="mobile-only" /> 지긋지긋한 통증의 고리를 끊습니다.</p>
                </div>
            </div>

            <Breadcrumbs deptName="근막통증증후군 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Intro Section: Split Layout (Desktop: Text Left, Image Right) */}
                <div className="intro-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>

                    {/* Left Column: Text Content */}
                    <div className="text-content">
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>쉬어도 풀리지 않는 만성적인 뻐근함,<br /> 단순한 근육 뭉침이 아니라 ‘신경’이 눌리고 있는 신호일 수 있습니다.</h2>
                        </div>

                        {/* Moved Section 1 here */}
                        <div className="info-section">
                            <div style={{ marginBottom: '20px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>근막통증증후군이란?</h3>
                            </div>
                            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', margin: 0 }}>
                                근육을 감싸고 있는 얇은 막인 '근막'에 <strong>통증 유발점(Trigger Point)</strong>이 생겨, 해당 근육뿐만 아니라 연결된 다른 부위까지 통증이 퍼지는 질환입니다.<br /><br />
                                특히 딱딱하게 굳은 근육과 근막이 주변을 지나가는 신경을 압박하면, 저림이나 화끈거림 같은 신경 증상이 동반됩니다.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="image-content" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <img src={myofascialPainImage} alt="Myofascial Pain Treatment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 1 moved up */}

                    {/* Section 2: Major Muscles & Nerve Symptoms */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>부위별 주요 근육과 신경 포착 증상</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"아픈 곳은 여기인데, 원인은 다른 곳에 있을 수 있습니다."</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>저희 병원은 통증 부위별로 관련된 근육과 신경을 해부학적으로 분석하여 정밀하게 치료합니다.</p>

                        <div className="disease-groups" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {/* Group 1: Neck/Shoulder/Back */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. 목·어깨·등 (상체 후면)</h4>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>승모근 & 척추부신경 (Spinal Accessory Nerve)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>승모근이 과도하게 긴장하면 척추부신경을 압박하여, 어깨가 돌처럼 딱딱해지고 고개를 돌리기 힘든 통증이 발생합니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>견갑거근/능형근 & 견갑배신경 (Dorsal Scapular Nerve)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>날개뼈 안쪽이 타는 듯이 아프고 결리는 증상입니다. 목에서 내려오는 견갑배신경이 근육 사이에서 눌리면 날개뼈 주변의 심한 통증과 함께 팔 저림이 나타날 수 있습니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 2: Flank/Axilla */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>2. 옆구리·겨드랑이 (상체 측면)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>광배근 & 전거근</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>겨드랑이 밑부터 옆구리까지 당기고 결리는 통증입니다. 심호흡을 할 때 갈비뼈 주변이 뜨끔거리거나, 팔을 뻗을 때 동작이 제한될 수 있습니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 3: Waist/Pelvis */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>3. 허리·골반 (하체 후면)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>요방형근 & 기립근</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>허리 깊숙한 곳의 통증으로, 아침에 일어나거나 허리를 돌릴 때 '악' 소리가 날 정도로 극심한 통증을 유발합니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>흉요근막</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>허리 전체를 감싸는 큰 막인 흉요근막이 유착되면, 허리를 숙이거나 젖히는 모든 동작이 뻣뻣해지고 만성 요통의 원인이 됩니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>둔근(엉덩이 근육)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>좌골신경이 지나가는 길목인 둔근이 뭉치면, 허리 디스크가 아님에도 다리 뒤쪽이 저리고 당기는 '가짜 디스크(좌골신경통)' 증상이 나타납니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 4: Arms/Legs */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>4. 팔·다리 (사지)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>전완근 (팔뚝)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>손목과 손가락을 많이 사용하는 분들에게 발생하며, 팔꿈치 통증(엘보)과 손의 악력 저하를 유발합니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>햄스트링 (허벅지 뒤쪽)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>오래 앉아있는 경우 단축되기 쉬우며, 허벅지 뒤쪽의 당김과 무릎 뒤쪽 통증의 원인이 됩니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>비복근/가자미근 (종아리)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>"자다가 다리에 쥐가 자주 나요." 종아리 근육의 긴장은 혈액순환을 방해하고, 족저근막염이나 아킬레스건염으로 이어질 수 있습니다.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Treatment Soluction */}
                    <div className="info-section" style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>근막과 신경을 동시에 치료하는 통합 솔루션</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"풀리지 않던 매듭, 초음파로 보고 정교하게 풉니다."</p>

                        <div className="steps-container" style={{ marginTop: '30px' }}>
                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 1. 초음파 가이드 하이드로다이섹션 (근막 박리술)</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    초음파를 통해 떡 져있는(유착된) 근막과 신경 사이의 공간을 확인합니다. 소량의 약물을 수압을 이용해 주입하여, 들러붙은 근막을 떼어내고 눌려있던 신경을 해방시킵니다. (적용: 견갑배신경 포착, 흉요근막 유착 등)
                                </p>
                            </div>

                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 2. 통증 유발점 약침 요법</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    손으로 만져지는 딱딱한 매듭(TrP)에 직접 천연 성분의 약침이나 약침제를 주입하여, 과흥분된 근육 섬유를 즉각적으로 이완시키고 혈류를 개선합니다.
                                </p>
                            </div>

                            <div className="step-item">
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 3. 심부 근육 침 & 전침 치료</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>
                                    손이 닿지 않는 깊은 속근육(요방형근, 견갑거근 등)까지 침과 전기 자극을 전달하여 근본적인 긴장을 해소하고 재발을 방지합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Advantages */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>치료의 장점</h3>
                        </div>

                        <div className="reasons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>정밀 타겟팅</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>"대충 아픈 부위"가 아니라, 통증을 유발하는 정확한 근육 층(Layer)과 신경 포인트를 찾아 치료합니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>즉각적 가동성 확보</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>유착된 근막을 박리하면 치료 직후 몸이 가벼워지고 움직임이 부드러워지는 것을 느낄 수 있습니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>만성 통증 차단</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>단순 근육통이 신경병증성 통증으로 악화되는 고리를 조기에 차단합니다.</p>
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

export default MyofascialPain;
