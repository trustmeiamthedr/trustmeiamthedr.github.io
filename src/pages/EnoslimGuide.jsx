import React, { useEffect, useState } from 'react';
import './EnoslimGuide.css';
import womanDrinkingWater from '../assets/images/woman_drinking_water.jpg';
import doctorConsultation from '../assets/images/doctor_consultation.jpg';

const EnoslimGuide = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 8; // Total number of slides

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <div className="enoslim-guide-wrapper">

            {/* PC Navigation Controls */}
            <div className="slider-controls pc-only">
                <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div className="slider-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Slide 1: Title Slide */}
            <div className={`slide-container full-bg-image ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}>
                <div className="overlay"></div>
                <div className="content-overlay">
                    <h1>엔오슬림환<br />복용 가이드</h1>
                    <p className="subtitle">건강한 변화를 위한 올바른 시작,<br />안전하고 효과적인 다이어트를 약속합니다.</p>
                </div>
            </div>

            {/* Slide 2: Concept (Two Column Tiled) */}
            <div className={`slide-container ${activeSlide === 1 ? 'active' : ''}`}>
                <h2 className="slide-title">체질 개선의 핵심 원리</h2>
                <div className="content-area">
                    <div className="two-column tiled">
                        <div>
                            <h3><i className="fa-solid fa-arrows-rotate"></i> 백색지방 → 갈색지방</h3>
                            <p>엔오(산화질소)는 저장만 하려는 '백색지방'을 에너지를 태우는 '갈색지방'으로 전환되도록 돕습니다. 단순 감량이 아닌, 살이 잘 찌지 않는 체질로의 변화를 목표로 합니다.</p>
                        </div>
                        <div>
                            <h3><i className="fa-solid fa-fire"></i> 기초대사량 증진</h3>
                            <p>운동을 한 것처럼 신체 대사를 활발하게 만들어줍니다. 복용 시 몸이 따뜻해지거나 약간의 땀이 나는 것은 지방이 연소되고 있다는 긍정적인 신호입니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 3: Dosage (Tiled Icons) */}
            <div className={`slide-container ${activeSlide === 2 ? 'active' : ''}`}>
                <h2 className="slide-title">올바른 복용법</h2>
                <div className="content-area">
                    <div className="tiled-content">
                        <div className="tile">
                            <div className="icon"><i className="fa-regular fa-clock"></i></div>
                            <h3>식사 30분 전</h3>
                            <p>식욕 억제 효과를 극대화하기 위해<br />식사 30분 전 복용을 권장합니다.<br />속쓰림이 있다면 식후에 드세요.</p>
                        </div>
                        <div className="tile">
                            <div className="icon"><i className="fa-solid fa-pills"></i></div>
                            <h3>하루 3회</h3>
                            <p>아침 식사를 거르더라도<br />약은 하루 3번 규칙적으로<br />드시는 것이 대사 유지에 좋습니다.</p>
                        </div>
                        <div className="tile">
                            <div className="icon"><i className="fa-solid fa-moon"></i></div>
                            <h3>저녁 6시 이전</h3>
                            <p>수면 방해를 줄이기 위해<br />저녁 약은 가급적<br />오후 6시 이전에 복용하세요.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 4: Levels (Bullets) */}
            <div className={`slide-container ${activeSlide === 3 ? 'active' : ''}`}>
                <h2 className="slide-title">단계별 조절 가이드</h2>
                <div className="content-area">
                    <div className="two-column">
                        <div>
                            <p style={{ fontSize: '24px', marginBottom: '30px' }}>
                                "컨디션에 맞춰 단계를 조절하세요.<br />
                                <strong>하루 3번 복용</strong>이 가장 중요합니다."
                            </p>
                            <div className="bullet-list">
                                <ul>
                                    <li><i className="fa-solid fa-layer-group"></i> <strong>1~4단계 맞춤 처방:</strong> 처음에는 낮은 단계로 시작하여 적응하는 것이 좋습니다.</li>
                                    <li><i className="fa-solid fa-sliders"></i> <strong>자율 조절:</strong> 식욕이 강한 저녁엔 3단계, 가벼운 아침엔 2단계 등 상황에 맞춰 섞어 드셔도 됩니다.</li>
                                    <li><i className="fa-solid fa-triangle-exclamation"></i> <strong>반응 체크:</strong> 카페인 반응(손떨림 등)이 심하면 단계를 낮추거나 양을 줄이세요.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tiled-content" style={{ flexDirection: 'column', gap: '20px' }}>
                            <div className="tile" style={{ flexDirection: 'row', textAlign: 'left', alignItems: 'center', padding: '20px' }}>
                                <div className="icon" style={{ width: '60px', height: '60px', fontSize: '24px', marginBottom: '0', marginRight: '20px' }}>1</div>
                                <div><h3>적응기</h3><p style={{ fontSize: '16px' }}>처음 시작하거나 예민한 분</p></div>
                            </div>
                            <div className="tile" style={{ flexDirection: 'row', textAlign: 'left', alignItems: 'center', padding: '20px' }}>
                                <div className="icon" style={{ width: '60px', height: '60px', fontSize: '24px', marginBottom: '0', marginRight: '20px' }}>2-3</div>
                                <div><h3>가속기</h3><p style={{ fontSize: '16px' }}>본격적인 감량 및 대사 증진</p></div>
                            </div>
                            <div className="tile" style={{ flexDirection: 'row', textAlign: 'left', alignItems: 'center', padding: '20px' }}>
                                <div className="icon" style={{ width: '60px', height: '60px', fontSize: '24px', marginBottom: '0', marginRight: '20px' }}>4</div>
                                <div><h3>강화기</h3><p style={{ fontSize: '16px' }}>고도비만 또는 정체기 극복</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 5: Diet (Image Right) */}
            <div className={`slide-container ${activeSlide === 4 ? 'active' : ''}`}>
                <h2 className="slide-title">시너지를 내는 식단 원칙</h2>
                <div className="content-area">
                    <div className="two-column">
                        <div>
                            <div className="bullet-list">
                                <ul>
                                    <li><i className="fa-solid fa-carrot"></i> <strong>저탄수화물 고단백:</strong> 쌀, 밀가루를 줄이고 닭가슴살, 두부, 계란, 야채 위주로 섭취하세요.</li>
                                    <li><i className="fa-solid fa-stopwatch"></i> <strong>천천히 먹기:</strong> 뇌가 포만감을 느끼려면 20분이 필요합니다. 30번 이상 씹어 드세요.</li>
                                    <li><i className="fa-solid fa-ban"></i> <strong>저녁 소식:</strong> 살은 공복 수면 중에 빠집니다. 저녁은 최대한 가볍게 드세요.</li>
                                    <li><i className="fa-solid fa-glass-water"></i> <strong>충분한 수분:</strong> 지방 분해 과정에는 많은 물이 필요합니다. 물을 자주 마셔주세요.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" alt="건강한 다이어트 식단" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 6: Q&A 1 (Bleed Image) */}
            <div className={`slide-container bleed-image-layout ${activeSlide === 5 ? 'active' : ''}`}>
                <div className="content-container">
                    <h2 className="slide-title">Q. 입이 마르고<br />열이 나요</h2>
                    <div className="content-area">
                        <h3>자연스러운 대사 반응입니다.</h3>
                        <p>가만히 있어도 운동하는 것과 같은 대사 증진 효과가 나타나면서 입마름이나 열감이 느껴질 수 있습니다. 이는 지방이 타고 있다는 신호이기도 합니다.</p>
                        <br />
                        <p><strong><i className="fa-solid fa-glass-water"></i> Solution:</strong><br />충분한 수분 섭취가 가장 중요합니다. 하루 1.5~2리터의 물을 조금씩 자주 마셔주시면 증상 완화와 감량에 큰 도움이 됩니다.</p>
                    </div>
                </div>
                <div className="image-container">
                    <img className="bleed-image-side" src={womanDrinkingWater} alt="물을 마시는 여성" />
                </div>
            </div>

            {/* Slide 7: Q&A 2 (Tiled Text) */}
            <div className={`slide-container ${activeSlide === 6 ? 'active' : ''}`}>
                <h2 className="slide-title">초기 적응 Q&A</h2>
                <div className="content-area">
                    <div className="tiled-content">
                        <div className="tile">
                            <div className="icon"><i className="fa-solid fa-heart-pulse"></i></div>
                            <h3>두근거림 / 손떨림</h3>
                            <p>약의 단계가 본인 대사량보다<br />조금 강할 때 나타납니다.<br /><strong>복용량을 반으로 줄이거나<br />단계를 낮춰 교환하세요.</strong></p>
                        </div>
                        <div className="tile">
                            <div className="icon"><i className="fa-solid fa-bed"></i></div>
                            <h3>불면증</h3>
                            <p>대사가 활발해져 잠이 안 올 수 있습니다.<br /><strong>저녁 약을 오후 4-5시로 당기거나<br />저녁 복용량을 줄여보세요.</strong></p>
                        </div>
                        <div className="tile">
                            <div className="icon"><i className="fa-solid fa-face-dizzy"></i></div>
                            <h3>메스꺼움</h3>
                            <p>빈속에 드시면 울렁거릴 수 있습니다.<br /><strong>식사 직후에 바로 복용하세요.</strong><br />적응되면 괜찮아집니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 8: Safety & Contact (Rounded Image) */}
            <div className={`slide-container ${activeSlide === 7 ? 'active' : ''}`}>
                <h2 className="slide-title">안전하고 지속 가능한 다이어트</h2>
                <div className="content-area">
                    <div className="two-column rounded-image-layout">
                        <div className="image-wrapper">
                            <img src={doctorConsultation} alt="의료진 상담" />
                        </div>
                        <div>
                            <h3>끝까지 함께하겠습니다</h3>
                            <div className="bullet-list">
                                <ul>
                                    <li><i className="fa-solid fa-baby"></i> <strong>임신 시 중단:</strong> 임신이 확인되면 복용을 멈추세요. (초기 2주 내 복용은 태아에게 안전하니 안심하세요.)</li>
                                    <li><i className="fa-solid fa-infinity"></i> <strong>요요 방지:</strong> 감량 후에는 감량 kg수 만큼의 개월 수(10kg 감량=10개월) 동안 유지기 관리를 권장합니다.</li>
                                    <li><i className="fa-solid fa-phone"></i> <strong>불편함 문의:</strong> 피부 알러지 등 특이 반응이 있거나 약의 강도가 맞지 않으면 언제든 한의원으로 연락 주세요.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EnoslimGuide;
