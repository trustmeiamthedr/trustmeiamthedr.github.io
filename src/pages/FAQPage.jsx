import React, { useState, useEffect } from 'react';
import { contact } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

const faqData = [
    {
        id: "faq-1",
        category: 'booking',
        question: "경희무교로한의원 진료 예약은 어떻게 하나요? 당일 접수도 가능한가요?",
        answer: "저희 한의원은 환자분들의 대기 시간을 최소화하고 원활한 진료를 제공하기 위해 <strong>예약 우선제</strong>로 운영됩니다. 24시간 간편한 <strong>네이버 예약</strong> 또는 진료 시간 중 <strong>전화 예약(070-7759-7779)</strong>을 통해 미리 원하는 시간대를 지정하고 방문하시는 것을 적극 권장합니다. 예약 없이 당일 방문(접수)하시는 것도 가능하며 예약 환자분들이 우선 진료받으므로 당일 대기 시간이 발생할 수도 있는 점 양해 부탁드립니다."
    },
    {
        id: "faq-2",
        category: 'location',
        question: "한의원의 정확한 위치와 주차 지원 여부가 궁금합니다.",
        answer: "경희무교로한의원은 <strong>서울 중구 무교로 16 대한체육회 빌딩 7층</strong>에 위치해 있습니다. 시청역(1, 2호선) 5번 출구에서 도보 약 3분, 을지로입구역(2호선) 1번/1-1번 출구에서 도보 약 5분 거리로 대중교통 접근성이 뛰어납니다. 랜드마크로는 <strong>서울파이낸스센터(SFC) 바로 옆 건물</strong>이며 청계천 남측 초입 및 서울시청 광장과 매우 가깝습니다. 건물 내 자체 주차장이 매우 협소하여 일반 환자분들의 주차 지원이 어려운 점 양해 부탁드립니다."
    },
    {
        id: "faq-3",
        category: 'treatment',
        question: "스테로이드를 쓰지 않는 한방 비수술 치료(초음파 유도하 약침)는 어떤 원리인가요?",
        answer: "통증을 일시적으로 차단하거나 뼈와 힘줄을 약화시키는 부작용이 있는 스테로이드 대신, 인체 무해한 <strong>천연 약재 추출 성분(약침)</strong>과 조직 재생을 유도하는 <strong>PDRN(연어 DNA 추출물)</strong>, <strong>산화 질소 성분 함유 약침(엔오약침)</strong> 등을 주성분으로 사용합니다. 여기에 실시간 <strong>고해상도 초음파 진단</strong>을 결합하여, 염증이 발생한 인대, 힘줄, 또는 신경 주변의 정확한 위치에만 약물을 안전하게 주사합니다. 이는 일시적 마비가 아닌, 신경의 유착을 해소(Hydrodissection)하고 세포의 자생 능력을 극대화하여 통증의 근본 원인을 해결하는 재생 의학적 치료법입니다."
    },
    {
        id: "faq-4",
        category: 'insurance',
        question: "한의원 진료비도 실손의료보험(실비) 청구가 가능한가요?",
        answer: "네, 가능합니다. 건강보험공단이 적용되는 <strong>급여 진료 항목</strong>(기본 침치료, 부항, 물리치료 그리고 한방 추나요법 등)은 가입하신 실손의료보험의 보장 범위 내에서 청구 및 환급이 가능합니다. 다만, 대표원장 특화 약침이나 다이어트 한약(엔오슬림) 등 <strong>비급여 진료 항목</strong>은 가입하신 실손보험의 계약 시기(1세대~4세대 등) 및 약관 종류에 따라 한방 비급여 보장 여부가 상이하므로, 내원하시기 전 가입하신 보험사 고객센터를 통해 정확한 보장 한도를 확인하시는 것이 가장 안전합니다."
    },
    {
        id: "faq-5",
        category: 'booking',
        question: "첫 내원 시 준비해야 할 서류나 주의사항이 있나요?",
        answer: "의료법 개정에 따라 병의원 첫 내원 시 본인 확인 절차가 의무화되었으므로 <strong>신분증(주민등록증, 운전면허증, 모바일 건강보험증 등)</strong>을 반드시 지참해 주셔야 합니다. 또한, 기존 타 병원에서 촬영하신 엑스레이, MRI, CT 자료나 진단서가 있으시다면 지참해 주실 경우 더욱 객관적이고 정확한 진단에 큰 도움이 됩니다. 첫 진료는 예진 설문 작성 및 초음파 정밀 검사, 대표원장 진맥 등이 복합적으로 진행되므로 약 40분~1시간 정도의 여유를 두고 내원해 주시기 바랍니다."
    },
    {
        id: "faq-6",
        category: 'treatment',
        question: "약침 치료 후 목욕이나 샤워는 언제부터 할 수 있나요?",
        answer: "약침 요법은 미세한 바늘을 통해 약액을 주입하는 시술입니다. 주사 바늘 자국이 아물고 감염을 방지하기 위해 <strong>시술 후 최소 3~4시간 동안은 물이 닿지 않도록</strong> 주의해 주셔야 합니다. 가벼운 샤워는 시술 4시간 이후 혹은 당일 저녁부터 가능하나, 대중목욕탕, 온천, 수영장, 사우나 등 균 감염 우려가 있거나 고온 다습한 곳은 시술 당일에는 피하시고 다음 날부터 이용하시는 것을 권장합니다."
    }
];

const categories = [
    { id: 'all', label: '전체 질문' },
    { id: 'booking', label: '예약 및 접수' },
    { id: 'location', label: '위치 및 주차' },
    { id: 'treatment', label: '비수술 및 치료법' },
    { id: 'insurance', label: '비용 및 보험' }
];

function FAQPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [openFaqId, setOpenFaqId] = useState(null);

    useEffect(() => {
        document.title = "자주 묻는 질문(FAQ) | 경희무교로한의원";
        window.scrollTo(0, 0);
    }, []);

    const filteredFaq = selectedCategory === 'all'
        ? faqData
        : faqData.filter(faq => faq.category === selectedCategory);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    // AEO/GEO FAQPage Schema Markup
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<\/?[^>]+(>|$)/g, "") // strip HTML tags for clean schema text
            }
        }))
    };

    return (
        <div className="faq-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="page-hero">
                <div className="container">
                    <h1>자주 묻는 질문</h1>
                    <p>환자분들이 진료와 한의원 이용에 대해 가장 많이 하시는 질문들을 모았습니다.</p>
                </div>
            </div>

            <Breadcrumbs title="자주 묻는 질문" />

            <div className="container" style={{ padding: '60px 20px 100px', maxWidth: '900px', margin: '0 auto' }}>

                {/* Category Selector Tabs */}
                <div className="faq-category-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => { setSelectedCategory(cat.id); setOpenFaqId(null); }}
                            style={{
                                padding: '10px 20px',
                                border: '1px solid',
                                borderColor: selectedCategory === cat.id ? 'var(--secondary-color)' : '#e2e8f0',
                                borderRadius: '30px',
                                backgroundColor: selectedCategory === cat.id ? 'var(--secondary-color)' : '#ffffff',
                                color: selectedCategory === cat.id ? '#ffffff' : '#4a5568',
                                fontSize: '15px',
                                fontWeight: selectedCategory === cat.id ? '600' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                outline: 'none'
                            }}
                            className={selectedCategory === cat.id ? 'active' : ''}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Accordion List */}
                <div className="faq-accordion-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {filteredFaq.length > 0 ? (
                        filteredFaq.map(faq => {
                            const isOpen = openFaqId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className="faq-accordion-item"
                                    style={{
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {/* Question Header */}
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '20px 25px',
                                            backgroundColor: isOpen ? '#fffcfc' : '#ffffff',
                                            border: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            outline: 'none'
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '17px',
                                            fontWeight: '600',
                                            color: isOpen ? 'var(--secondary-color)' : '#2d3748',
                                            display: 'flex',
                                            gap: '12px',
                                            alignItems: 'flex-start',
                                            lineHeight: '1.5'
                                        }}>
                                            <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>Q.</span>
                                            {faq.question}
                                        </span>
                                        <i
                                            className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}
                                            style={{
                                                color: isOpen ? 'var(--secondary-color)' : '#a0aec0',
                                                fontSize: '15px',
                                                marginLeft: '15px'
                                            }}
                                        ></i>
                                    </button>

                                    {/* Answer Content */}
                                    <div
                                        style={{
                                            maxHeight: isOpen ? '500px' : '0',
                                            opacity: isOpen ? '1' : '0',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            borderTop: isOpen ? '1px solid #edf2f7' : '0 solid transparent',
                                            backgroundColor: '#fafafa'
                                        }}
                                    >
                                        <div
                                            style={{ padding: '25px', fontSize: '15px', lineHeight: '1.8', color: '#4a5568' }}
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px 0', color: '#718096' }}>
                            해당 카테고리의 질문이 없습니다.
                        </div>
                    )}
                </div>

                {/* Additional Guidance Footer */}
                <div style={{
                    marginTop: '60px',
                    textAlign: 'center',
                    padding: '30px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px dashed #cbd5e1'
                }}>
                    <h4 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px', fontWeight: '600' }}>원하시는 답변을 찾지 못하셨나요?</h4>
                    <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px' }}>
                        진료 예약 및 자세한 문의는 고객센터로 전화 주시면 상세하고 친절하게 직접 안내해 드립니다.
                    </p>
                    <a
                        href={`tel:${contact.phone}`}
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'var(--secondary-color)',
                            color: '#ffffff',
                            padding: '12px 30px',
                            borderRadius: '30px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            boxShadow: '0 4px 10px rgba(255, 94, 98, 0.2)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        고객센터 전화 걸기
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FAQPage;
