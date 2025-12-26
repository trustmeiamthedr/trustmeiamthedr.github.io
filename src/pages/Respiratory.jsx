import React from 'react';
import { contact } from '../data';
import respiratoryImage from '../assets/images/bopiego_no_poster.jpg';
import Breadcrumbs from '../components/Breadcrumbs';

const Respiratory = () => {
    return (
        <div className="respiratory-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>보폐고 엔오(NO) 클리닉</h1>
                    <p>답답한 코, 멈추지 않는 기침, 쉬어버린 목소리.<br className="mobile-only" /> 호흡기의 자생력을 깨우는 '엔오(NO)' 솔루션.</p>
                </div>
            </div>

            <Breadcrumbs deptName="보폐고 엔오(NO) 클리닉" />

            <div className="container" style={{ paddingBottom: '80px' }}>
                {/* Intro Section: Split Layout */}
                <div className="intro-section grid-6-4">

                    {/* Left Column: Text Content */}
                    <div className="text-content">
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '28px', color: 'var(--secondary-color)', marginBottom: '20px', fontWeight: '600' }}>숨 쉬는 것이 편안해야 하루가 건강합니다.<br /> 천연 항염 약재와 산화질소(NO)의 만남, &lt;보폐고 엔오&gt;</h2>
                        </div>

                        {/* Section 1: Definition */}
                        <div className="info-section">
                            <div style={{ marginBottom: '20px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>보폐고 엔오(NO)란?</h3>
                            </div>
                            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
                                <strong>"자연에서 찾은 해답에 과학을 더했습니다."</strong><br />
                                보폐고 엔오는 폐와 기관지의 염증을 배출하고 기능을 강화하는 13가지 프리미엄 한약재에, 혈류량 증가와 항염증 효과를 돕는 '산화질소(NO)' 생성 원리를 결합한 호흡기 특화 처방입니다.
                            </p>
                            <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '10px' }}><strong>천연 소염·배농:</strong> 길경, 금은화, 포공영 등이 가래와 농을 삭이고 염증을 가라앉힙니다.</li>
                                <li style={{ marginBottom: '10px' }}><strong>기침 진정:</strong> 오미자, 맥문동이 건조한 기관지를 촉촉하게 하여 기침을 진정시킵니다.</li>
                                <li style={{ marginBottom: '10px' }}><strong>속 편한 처방:</strong> 유근피, 산약 등을 배합하여 장기간 복용해도 소화기에 부담이 적습니다.</li>
                                <li><strong>엔오(NO)의 시너지:</strong> 폐 혈류량을 늘리고 산소 포화도를 높여 약효가 깊숙이 전달되도록 돕습니다.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="image-content" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <img src={respiratoryImage} alt="Respiratory Treatment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>

                    {/* Section 2: Indication 1 */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>적응증 ① 만성 코 질환 (비염/축농증)</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"항생제를 먹어도 그때뿐이라면?"</p>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            <strong>코가 목으로 넘어가는 불쾌감, 뿌리부터 다스립니다.</strong><br />
                            만성적인 비염과 축농증은 단순한 콧물 억제만으로는 해결되지 않습니다. 보폐고 엔오는 부비동 깊숙한 곳의 농을 배출하고 점막의 붓기를 가라앉힙니다.
                        </p>

                        <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px' }}><strong>주요 대상:</strong> 만성 비염, 축농증(부비동염), 후비루(코 가래가 목 뒤로 넘어감)</li>
                                <li style={{ marginBottom: '15px' }}><strong>치료 포인트:</strong> 최소 1개월 이상의 꾸준한 복용을 통해 점막의 면역력을 재건합니다.</li>
                                <li>
                                    <strong>맞춤 처방:</strong>
                                    <ul style={{ marginTop: '10px', paddingLeft: '20px', color: '#555' }}>
                                        <li style={{ marginBottom: '5px' }}>누런 콧물/축농증: 보폐고 + 형개연교탕 (염증 배출 강화)</li>
                                        <li>알레르기 비염: 보폐고 + 소청룡탕 (코막힘 및 재채기 완화)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3: Indication 2 */}
                    <div className="info-section" style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>적응증 ② 만성 기침 및 가래</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"잔기침이 떨어지지 않고 가래가 끓나요?"</p>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            <strong>폐 깊은 곳의 염증을 씻어내고, 기관지를 촉촉하게 합니다.</strong><br />
                            감기나 코로나 후유증으로 몇 주째 지속되는 '지겨운 기침'에 탁월합니다. 천연 항생제 성분이 폐와 기관지의 염증을 직접적으로 개선합니다.
                        </p>

                        <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', border: '1px solid #eee' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px' }}><strong>주요 대상:</strong> 코로나 후유증 기침, 마른 기침, 흡연성 가래, 누런 가래</li>
                                <li style={{ marginBottom: '15px' }}><strong>치료 경과:</strong> 치료 과정에서 끈적한 노란 가래가 묽어지고 맑아지는 것은, 폐 속의 염증이 씻겨 내려가는 긍정적인 신호입니다.</li>
                                <li>
                                    <strong>맞춤 처방:</strong>
                                    <ul style={{ marginTop: '10px', paddingLeft: '20px', color: '#555' }}>
                                        <li style={{ marginBottom: '5px' }}>마른 기침: 보폐고 + 맥문동탕/삼소음 (진액 보충)</li>
                                        <li>가래 기침: 보폐고 + 소청룡탕 (거담 작용 강화)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 4: Indication 3 */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>적응증 ③ 목 관리 (성대/인후)</h3>
                        </div>
                        <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', marginBottom: '10px' }}>"말을 많이 하는 당신을 위한 '성대 아이스팩'"</p>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            <strong>붓고 열난 성대를 식혀주어 맑은 목소리를 지킵니다.</strong><br />
                            목을 혹사시킨 후 성대 근육에 발생한 열을 빠르게 식혀주고, 흡연으로 인한 목의 이물감을 제거합니다.
                        </p>

                        <div className="disease-groups" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '15px' }}>주요 대상</h4>
                                <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>목소리 사용자:</strong> 가수, 교사, 강사, 상담원 등 (성대 보호 및 결절 예방)</li>
                                    <li style={{ marginBottom: '10px' }}><strong>흡연자:</strong> 목의 답답함과 가래 해소</li>
                                    <li><strong>인후통:</strong> 침 삼키기 힘든 급성 목감기</li>
                                </ul>
                            </div>
                            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
                                <h4 style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '15px' }}>활용법</h4>
                                <ul style={{ fontSize: '15px', color: '#555', paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '10px' }}><strong>치료용:</strong> 목이 쉬거나 아플 때 하루 3~5회 집중 복용</li>
                                    <li><strong>관리용:</strong> 평소 목 건강을 위해 하루 1회 복용</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Home Remedy Guide - Table */}
                    <div className="info-section">
                        <div style={{ marginBottom: '30px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#333' }}>가정상비약 활용 가이드</h3>
                        </div>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            <strong>우리 가족 호흡기 주치의, 상비약으로 준비하세요.</strong><br />
                            보폐고 엔오는 단독으로도 훌륭하지만, 증상에 맞는 건강보험 적용 한약과 함께 복용하면 초기 감기를 효과적으로 잡을 수 있습니다.
                        </p>

                        <div className="table-responsive" style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
                                <thead>
                                    <tr style={{ background: 'var(--secondary-color)', color: '#fff' }}>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>증상</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>추천 조합 (보폐고 + @)</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #eee', background: '#fff' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>초기 으슬으슬 몸살</td>
                                        <td style={{ padding: '15px', color: '#555' }}>+ 구미강활탕</td>
                                        <td style={{ padding: '15px', color: '#666' }}>오한이 있을 때</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>목이 붓고 고열</td>
                                        <td style={{ padding: '15px', color: '#555' }}>+ 연교패독산</td>
                                        <td style={{ padding: '15px', color: '#666' }}>열독을 풀어줄 때</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #eee', background: '#fff' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>콧물, 코막힘, 재채기</td>
                                        <td style={{ padding: '15px', color: '#555' }}>+ 소청룡탕</td>
                                        <td style={{ padding: '15px', color: '#666' }}>코감기 및 비염</td>
                                    </tr>
                                    <tr style={{ background: '#f9f9f9' }}>
                                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>기침, 가래</td>
                                        <td style={{ padding: '15px', color: '#555' }}>+ 소청룡탕 / 삼소음</td>
                                        <td style={{ padding: '15px', color: '#666' }}>모든 기침 증상</td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Respiratory;
