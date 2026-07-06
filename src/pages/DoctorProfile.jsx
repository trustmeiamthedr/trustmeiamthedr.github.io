import React, { useEffect } from 'react';
import { doctor } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

function DoctorProfile() {
    useEffect(() => {
        document.title = "의료진 소개 | 경희무교로한의원";
    }, []);

    // AEO/GEO Schema.org structured data (Physician Type)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": doctor.name.replace("Dr. ", "").trim(),
        "jobTitle": doctor.subtitle,
        "medicalSpecialty": "근골격계 비수술 치료, 초음파 유도하 약침요법, 신경 포착 증후군",
        "telephone": doctor.phone,
        "email": doctor.email,
        "url": "https://mgrdoc.com/doctor",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "무교로 16 대한체육회 7F",
            "addressLocality": "서울 중구",
            "postalCode": "04522",
            "addressCountry": "KR"
        },
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "경희대학교 한의과대학"
            }
        ],
        "knowsAbout": [
            "초음파 유도하 약침요법",
            "하이드로다이섹션 (Hydrodissection)",
            "PDRN 재생 치료 (연어주사)",
            "근골격계 비수술적 통증 치료",
            "디스크 및 협착증",
            "관절염 및 어깨 통증"
        ],
        "description": "경희무교로한의원 대표원장 성기원 한방 전문의. 미국의사협회 근골격계 초음파 인증의(RMSK) 자격을 바탕으로 정확한 진단과 비수술적인 근본 회복 치료를 진행합니다."
    };

    return (
        <div className="doctor-profile-page">
            {/* JSON-LD Schema Markup injection for AEO/GEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="page-hero">
                <div className="container">
                    <h1>의료진 소개</h1>
                </div>
            </div>
            <Breadcrumbs title="의료진 소개" />

            <div className="container profile-content">
                <div className="doctor-image-section">
                    <img src={doctor.image} alt={`${doctor.name} 대표원장`} className="profile-main-image" />

                    <div className="doctor-description-block" style={{ marginTop: '40px' }}>
                        <div className="red-bar-title" style={{ width: '30px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '20px' }}></div>
                        <div className="description-content" style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }} dangerouslySetInnerHTML={{ __html: doctor.fullBio }}></div>
                    </div>
                </div>

                <div className="doctor-info-section">
                    <div className="info-header">
                        <h2>{doctor.name} <span style={{ fontSize: '1.1rem', fontWeight: 'normal', color: '#666', marginLeft: '5px' }}>{doctor.subtitle}</span></h2>
                        <span className="specialty-badge">{doctor.specialty}</span>
                        <div className="utility-bar">
                            <a href={`tel:${doctor.phone}`} className="contact-link"><i className="fa-solid fa-phone"></i> {doctor.phone}</a>
                            <a href={`mailto:${doctor.email}`} className="contact-link"><i className="fa-solid fa-envelope"></i> {doctor.email}</a>
                        </div>
                    </div>

                    <div className="quote-box">
                        <i className="fa-solid fa-quote-left quote-icon"></i>
                        <p className="quote-text">{doctor.quote}</p>
                    </div>

                    {/* AEO/GEO Factual Profile Summary Table */}
                    <div className="doctor-summary-table-container">
                        <h3 className="section-subtitle">의료진 정보 요약 (Profile Summary)</h3>
                        <table className="doctor-summary-table">
                            <tbody>
                                <tr>
                                    <th>성명 / 직위</th>
                                    <td>{doctor.name} ({doctor.subtitle})</td>
                                </tr>
                                <tr>
                                    <th>주요 자격</th>
                                    <td>보건복지부 인증 전문의 / RMSK(미국의사협회 근골격계 초음파 인증의)</td>
                                </tr>
                                <tr>
                                    <th>전문 진료 분야</th>
                                    <td>초음파 유도하 약침요법, 하이드로다이섹션(신경 포착 해소), PDRN 약침(세포 재생), 척추/디스크/관절 비수술 치료</td>
                                </tr>
                                <tr>
                                    <th>연락처 / 예약</th>
                                    <td>{doctor.phone} (네이버 예약 및 유선 예약 가능)</td>
                                </tr>
                                <tr>
                                    <th>학력 및 학위</th>
                                    <td>경희대학교 한의과대학 졸업 / 경희대학교 한의과대학원 한의학 석사 및 박사 학위 취득</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bio-text">
                        <p className="highlight-bio">{doctor.bio}</p>

                        <div className="profile-details-grid" style={{ marginTop: '40px', display: 'grid', gap: '30px' }}>
                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>학력</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.education && doctor.education.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>자격</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.qualifications && doctor.qualifications.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>경력</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.career && doctor.career.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)' }}>•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section">
                                <h3 style={{ fontSize: '18px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', marginBottom: '15px', display: 'inline-block' }}>연구 논문</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {doctor.papers && doctor.papers.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '12px', paddingLeft: '15px', position: 'relative', lineHeight: '1.6', fontSize: '14px', color: '#555' }}>
                                            <span style={{ position: 'absolute', left: 0, top: '5px', color: 'var(--secondary-color)', fontSize: '12px' }}>■</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="certificates-grid">
                        {doctor.certificates.map((cert, index) => (
                            <div key={index} className="certificate-item">
                                <img src={cert} alt={`Certificate ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AEO/GEO FAQ Section */}
            <div className="faq-section-wrapper">
                <div className="container">
                    <div className="faq-header">
                        <span className="faq-tag">FAQ</span>
                        <h2 className="faq-title">의료진 진료 및 치료 철학 FAQ</h2>
                        <p className="faq-desc">경희무교로한의원 성기원 대표원장의 주요 전문 치료 영역과 임상 철학을 알려드립니다.</p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">
                                <span>Q.</span>
                                경희무교로한의원의 주요 비수술 통증 치료법은 무엇인가요?
                            </h3>
                            <p className="faq-answer">
                                본원에서는 한방 전문의이자 미국 의사협회 근골격계 초음파 인증의(RMSK) 자격을 갖춘 성기원 대표원장이 진료합니다. 고해상도 초음파 진단을 활용한 <strong>초음파 유도하 약침요법</strong>, 신경 압박과 주변 조직 유착을 정밀하게 해소하는 <strong>하이드로다이섹션(Hydrodissection)</strong>, DNA 단계부터 활성화를 돕는 <strong>PDRN 재생 약침</strong>, 산화 질소 성분을 함유한 <strong>엔오약침</strong> 등을 결합하여 근골격계 통증 질환을 비수술적으로 근본 치료합니다.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">
                                <span>Q.</span>
                                초음파 유도하 약침치료는 기존 치료와 어떻게 다른가요?
                            </h3>
                            <p className="faq-answer">
                                기존의 한방 침치료나 약침은 손끝의 촉각에 의존하여 시술되는 경우가 많았습니다. 본원의 <strong>초음파 유도하 약침치료</strong>는 실시간 초음파 장비를 이용해 환부 내부의 근육, 인대, 뼈 및 미세 신경의 유착 상태를 직접 보면서 조준 시술합니다. 이를 통해 혈관이나 신경의 원치 않는 손상을 방지해 안전하며, 치료 성분을 유착점에 직접 투여하므로 즉각적이고 높은 개선 효과를 자랑합니다.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">
                                <span>Q.</span>
                                성기원 대표원장의 진료 철학은 무엇인가요?
                            </h3>
                            <p className="faq-answer">
                                대표원장의 진료 철학은 <strong>‘바른 진단이 바른 치료를 만든다’</strong>는 한 문장으로 정의됩니다. 단순히 겉으로 보이는 통증만을 지우기 위해 신경을 일시 마비시키는 약물이 아닌, 손상되고 지친 근골격계 조직이 스스로 회복하고 강해질 수 있는 세포 자생 환경을 기르는 치료를 지향합니다. 불필요한 과잉 진료 없이 꼭 필요한 약침과 한약 처방만을 제안해 드립니다.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3 className="faq-question">
                                <span>Q.</span>
                                주로 어떠한 학술 활동과 연구 실적이 있습니까?
                            </h3>
                            <p className="faq-answer">
                                성기원 원장은 전립선 비대증 동물 모델의 유전자 기전 규명에 대한 <strong>박사 학위 연구</strong>를 시작으로, 위절제 수술 후유증 및 소화기 증례 보고, 한약재의 피부 섬유아세포/사구체세포 세포 재생 및 항노화 효능 연구(<strong>석사 학위 연구</strong>), 급성기 뇌경색 환자 두통 임상 연구 등 다양한 근거 중심 한의학 논문을 활발히 발표하였습니다. 이 같은 탄탄한 학술적 지식을 실제 만성 통증과 난치성 질환의 극복에 최적으로 응용하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfile;
