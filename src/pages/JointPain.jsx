import React from 'react';
import { contact } from '../data';
import jointPainImage from '../assets/images/joint_pain_treatment.png';
import Breadcrumbs from '../components/Breadcrumbs';

const JointPain = () => {
    // AEO/GEO FAQPage Schema Markup
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "무릎 관절염이나 손가락 관절 통증에도 약침 치료가 효과적인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "네, 매우 효과적입니다. 관절염은 관절 연골의 마모와 주변 인대 및 힘줄의 염증성 반응으로 유발됩니다. 본원에서는 염증을 즉각 가라앉히는 천연 봉독 및 약침 약재와 관절 주변 조직의 자생력을 촉진하는 PDRN(연어 DNA) 약침을 병행하여 염증 유발 물질을 제거하고 약해진 주변 인대와 근육을 단단하게 보강합니다."
                }
            },
            {
                "@type": "Question",
                "name": "초음파 유도하 시술은 기존의 일반 침/주사 치료보다 왜 안전한가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "무릎, 손가락, 고관절 등은 미세한 힘줄과 복잡한 신경이 촘촘히 얽혀있습니다. 육안에만 의존해 투여할 경우 타겟팅이 흔들리거나 미세 혈관을 건드릴 수 있지만, 본원에서는 실시간 초음파 유도를 통해 바늘의 진행 방향과 정확한 병변 위치를 mm 단위로 관찰하며 시술합니다. 덕분에 불필요한 정상 조직 손상을 최소화하여 극도로 안전하며, 적은 풍부한 천연 약액만으로도 확실한 통증 해소 효과를 만듭니다."
                }
            }
        ]
    };

    return (
        <div className="joint-pain-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>관절/통증 클리닉</h1>
                    <p>걷고, 잡고, 움직이는 모든 순간을 편안하게.<br className="mobile-only" /> 정밀한 진단으로 관절의 수명을 지킵니다.</p>
                </div>
            </div>

            <Breadcrumbs deptName="관절/통증 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Main Copy */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>무릎부터 손끝까지, 관절 통증의 원인은 다릅니다.<br /> 초음파로 속을 들여다보고, 비수술 요법으로 튼튼하게 채웁니다.</h2>
                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 1: Major Diseases by Area */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>부위별 주요 질환 안내</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"어디가 불편하신가요? 통증 부위별 원인을 꼼꼼히 살핍니다."</p>
                        <p style={{ marginBottom: '30px', color: '#666' }}>환자분들이 자주 호소하는 통증 부위를 중심으로 주요 질환을 알기 쉽게 설명해 드립니다.</p>

                        <div className="disease-groups" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {/* Group 1 */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. 상지 관절 (팔꿈치 / 손목 / 손가락)</h4>

                                <div style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                    <img src={jointPainImage} alt="Examination of Upper Limb" style={{ width: '100%', display: 'block' }} />
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>팔꿈치 (테니스/골프엘보)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>팔을 비틀거나 물건을 들어 올릴 때 팔꿈치 내·외측에 찌릿한 통증이 발생합니다. 힘줄의 미세 파열과 염증이 원인인 경우가 많습니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>손목 (손목터널증후군 / 건초염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>손목을 굽히거나 젖힐 때 시큰거리거나, 손가락 끝이 저린 증상입니다. 신경 압박이나 인대 염증을 의심해야 합니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>손가락 (방아쇠수지 / 관절염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>손가락을 구부릴 때 '딸깍' 소리가 나거나, 아침에 손이 뻣뻣하고 붓는 증상이 나타납니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 2 */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>2. 하지 관절 (고관절 / 무릎)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>무릎 (퇴행성 관절염 / 연골·인대 손상)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>계단을 오르내릴 때 시큰거리거나 무릎이 붓고 물이 차는 증상입니다. 연골 마모나 주변 인대의 약화가 주된 원인입니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>고관절 (대전자 점액낭염 / 고관절염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>엉덩이 옆쪽이나 사타구니 깊은 곳에 통증이 느껴지며, 양반다리를 하거나 걸을 때 불편함이 심해집니다.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Group 3 */}
                            <div className="disease-group" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>3. 족부 관절 (발목 / 발꿈치 / 발가락)</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>발목 (발목 염좌 / 불안정증)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>발목을 접질린 후 통증이 지속되거나, 평지에서도 자주 발목을 삐끗하는 상태입니다. 인대 손상을 방치하면 만성 불안정증으로 이어질 수 있습니다.</span>
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>아킬레스건 / 발꿈치 (아킬레스건염 / 족저근막염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>아침에 첫발을 디딜 때 발바닥이 찢어지는 듯 아프거나, 발뒤꿈치 위쪽 아킬레스건 부위가 붓고 아픈 증상입니다.</span>
                                    </li>
                                    <li>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '5px' }}>발가락 (지간신경종 / 통풍성 관절염)</strong>
                                        <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>발가락 사이가 저리고 화끈거리거나(신경종), 엄지발가락 관절이 붉게 붓고 극심한 통증(통풍)이 나타납니다.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Treatment Process */}
                    <div className="info-section" style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>치료 프로세스 및 강점</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"보이지 않는 통증, 초음파로 찾고 재생을 돕습니다."</p>
                        <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
                            저희 병원은 일시적인 통증 억제가 아니라, 통증을 유발하는 구조적인 원인을 찾아 스스로 회복할 수 있는 힘을 길러줍니다.
                        </p>

                        <div className="steps-container">
                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 1. 초음파 정밀 진단 (Point-of-Care Ultrasound)</h4>
                                <p style={{ color: '#555', lineHeight: '1.6' }}>엑스레이(X-ray)로는 보기 힘든 인대, 힘줄, 신경, 근육의 상태를 고해상도 초음파로 실시간 확인합니다. 움직일 때만 나타나는 통증까지 잡아내어 진단의 정확도를 높입니다.</p>
                            </div>

                            <div className="step-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 2. 맞춤형 비수술 약침 치료</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>초음파 가이드 약침요법:</strong> 정제된 천연 성분의 약침을 통증 부위에 정확히 주입하여 염증을 가라앉히고 근육의 긴장을 풉니다.</li>
                                    <li style={{ marginBottom: '10px' }}><strong>PDRN (DNA) 약침:</strong> 인체 조직과 유사한 재생 성분을 손상된 인대와 힘줄에 주입하여 조직 강화를 돕습니다.</li>
                                    <li><strong>하이드로다이섹션 (신경박리술):</strong> 손목터널증후군이나 지간신경종처럼 신경이 눌려 발생하는 통증의 경우, 초음파를 보며 신경 주변의 유착을 부드럽게 박리해 압박을 해소합니다.</li>
                                </ul>
                            </div>

                            <div className="step-item">
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>STEP 3. 한의학적 순환 치료</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
                                    <li><strong>침 / 전침 / 뜸 요법:</strong> 관절 주변의 혈액 순환을 개선하고 경직된 근육을 이완시켜 통증 재발을 방지하는 신체 환경을 만듭니다.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Why Choose Us */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>우리 병원을 선택해야 하는 이유</h3>
                        </div>

                        <div className="reasons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>현대 과학적 진단 + 한의학적 치료의 시너지</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>정확하게 보고, 몸에 부담이 적은 방식으로 치료합니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>정밀한 타겟팅</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>초음파 가이드를 통해 신경과 혈관 손상을 최소화하고, 병변 부위에만 정확히 약물을 주입합니다.</p>
                            </div>
                            <div className="reason-item" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
                                <h4 style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>약물 의존성과 부작용 최소화</h4>
                                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>일시적인 통증 차단보다는 인대 강화와 조직 재생을 통해 관절의 기능을 오래 유지하는 것을 목표로 합니다.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="clinical-faq-section" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #eee' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>FAQ</span>
                        <h3 style={{ fontSize: '26px', color: '#333', fontWeight: 'bold', margin: 0 }}>관절/통증 클리닉 자주 묻는 질문</h3>
                    </div>

                    <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '30px' }}>
                        <div className="faq-item" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', borderLeft: '4px solid var(--secondary-color)', border: '1px solid #f1f1f1', borderLeftWidth: '4px' }}>
                            <h4 style={{ fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: 'bold', display: 'flex', gap: '8px' }}>
                                <span style={{ color: 'var(--secondary-color)' }}>Q.</span>
                                무릎 관절염이나 손가락 관절 통증에도 약침 치료가 효과적인가요?
                            </h4>
                            <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#666', margin: 0 }}>
                                네, 매우 효과적입니다. 관절염은 관절 연골의 마모와 주변 인대 및 힘줄의 염증성 반응으로 유발됩니다. 본원에서는 염증을 즉각 가라앉히는 <strong>천연 봉독 및 약침 약재</strong>와 관절 주변 조직의 자생력을 촉진하는 <strong>PDRN(연어 DNA) 약침</strong>을 병행하여 염증 유발 물질을 제거하고 약해진 주변 인대와 근육을 단단하게 보강합니다.
                            </p>
                        </div>

                        <div className="faq-item" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', borderLeft: '4px solid var(--secondary-color)', border: '1px solid #f1f1f1', borderLeftWidth: '4px' }}>
                            <h4 style={{ fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: 'bold', display: 'flex', gap: '8px' }}>
                                <span style={{ color: 'var(--secondary-color)' }}>Q.</span>
                                초음파 유도하 시술은 기존의 일반 침/주사 치료보다 왜 안전한가요?
                            </h4>
                            <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#666', margin: 0 }}>
                                무릎, 손가락, 고관절 등은 미세한 힘줄과 복잡한 신경이 촘촘히 얽혀있습니다. 육안에만 의존해 투여할 경우 타겟팅이 흔들리거나 미세 혈관을 건드릴 수 있지만, 본원에서는 <strong>실시간 초음파 유도</strong>를 통해 바늘의 진행 방향과 정확한 병변 위치를 mm 단위로 관찰하며 시술합니다. 덕분에 불필요한 정상 조직 손상을 최소화하여 극도로 안전하며, 적은 풍부한 천연 약액만으로도 확실한 통증 해소 효과를 만듭니다.
                            </p>
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

export default JointPain;
