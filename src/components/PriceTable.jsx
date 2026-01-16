import React, { useState } from 'react';
import { Check, Gift, Phone } from 'lucide-react';
import './PriceTable.css';

const PriceTable = () => {
    const [viewMode, setViewMode] = useState('single'); // 'single' or 'set'

    const products = [
        {
            id: 1,
            name: "원방공진단 수(壽)",
            desc: "최고의 품격을 담은 프리미엄 공진단",
            type: "hwan",
            single: {
                original: 680000,
                sale: 544000,
                count: 10,
                unitPrice: 54400,
                label: "단품 20%"
            },
            set: {
                original: 2720000,
                sale: 2040000,
                count: 40,
                unitPrice: 51000,
                label: "3+1 세트"
            },
            featured: true
        },
        {
            id: 2,
            name: "사향공진단 수(壽)",
            desc: "사향의 깊은 효능을 담은 공진단",
            type: "hwan",
            single: {
                original: 450000,
                sale: 360000,
                count: 10,
                unitPrice: 36000,
                label: "단품 20%"
            },
            set: {
                original: 1800000,
                sale: 1350000,
                count: 40,
                unitPrice: 33750,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 3,
            name: "라이트 사향공진단 수(壽)",
            desc: "부드럽게 즐기는 사향 공진단",
            type: "hwan",
            single: {
                original: 320000,
                sale: 256000,
                count: 10,
                unitPrice: 25600,
                label: "단품 20%"
            },
            set: {
                original: 1280000,
                sale: 960000,
                count: 40,
                unitPrice: 24000,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 4,
            name: "침향공진단 수(壽)",
            desc: "침향의 기운을 담은 실속형 공진단",
            type: "hwan",
            single: {
                original: 220000,
                sale: 176000,
                count: 10,
                unitPrice: 17600,
                label: "단품 20%"
            },
            set: {
                original: 880000,
                sale: 660000,
                count: 40,
                unitPrice: 16500,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 5,
            name: "녹용공진단 수(壽)",
            desc: "녹용의 활력을 더한 건강 공진단",
            type: "hwan",
            single: {
                original: 200000,
                sale: 160000,
                count: 10,
                unitPrice: 16000,
                label: "단품 20%"
            },
            set: {
                original: 800000,
                sale: 600000,
                count: 40,
                unitPrice: 15000,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 6,
            name: "총명공진단 수(壽)",
            desc: "수험생과 직장인을 위한 두뇌 활력",
            type: "po",
            single: {
                original: 220000,
                sale: 176000,
                count: 30,
                unitPrice: 5867,
                label: "단품 20%"
            },
            set: {
                original: 880000,
                sale: 660000,
                count: 120,
                unitPrice: 5500,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 7,
            name: "녹용경옥고 수(壽)",
            desc: "녹용과 경옥고의 조화로운 만남",
            type: "po",
            single: {
                original: 195000,
                sale: 156000,
                count: 30,
                unitPrice: 5200,
                label: "단품 20%"
            },
            set: {
                original: 780000,
                sale: 585000,
                count: 120,
                unitPrice: 4875,
                label: "3+1 세트"
            },
            featured: false
        },
        {
            id: 8,
            name: "경옥고 수(壽)",
            desc: "정성을 다해 달인 전통 경옥고",
            type: "po",
            single: {
                original: 175000,
                sale: 140000,
                count: 30,
                unitPrice: 4667,
                label: "단품 20%"
            },
            set: {
                original: 700000,
                sale: 525000,
                count: 120,
                unitPrice: 4375,
                label: "3+1 세트"
            },
            featured: false
        }
    ];

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="price-table-wrapper">
            <div className="price-table-container">
                {/* Header Section */}
                <div className="pt-header">
                    <span className="pt-badge">
                        2026 설날 맞이 특별 기획전
                    </span>
                    <h1 className="pt-title">
                        건강을 선물하는 가장 품격 있는 선택
                    </h1>
                    <p className="pt-subtitle">
                        행사 기간: 2026.01.01(목) - 02.28(토)
                    </p>

                    {/* Toggle Button */}
                    <div className="pt-toggle-container">
                        <div className="pt-toggle-wrapper">
                            <button
                                onClick={() => setViewMode('single')}
                                className={`pt-toggle-btn ${viewMode === 'single' ? 'active-single' : 'inactive'}`}
                            >
                                단품 구매 (20% 할인)
                            </button>
                            <button
                                onClick={() => setViewMode('set')}
                                className={`pt-toggle-btn ${viewMode === 'set' ? 'active-set' : 'inactive'}`}
                            >
                                3+1 세트 (특별 혜택)
                            </button>
                        </div>
                    </div>

                    {viewMode === 'set' && (
                        <div className="pt-set-info">
                            <Gift size={16} style={{ display: 'inline-block', marginRight: '8px', marginBottom: '2px' }} />
                            세트 구매 시 1박스 추가 증정 혜택이 적용된 가격입니다 (4박스 기준)
                        </div>
                    )}
                </div>

                {/* Product Grid */}
                <div className="pt-grid">
                    {products.map((product) => {
                        const currentData = viewMode === 'single' ? product.single : product.set;
                        const unit = product.type === 'hwan' ? '환' : '포';

                        return (
                            <div
                                key={product.id}
                                className={`pt-card ${product.featured ? 'featured' : ''}`}
                            >
                                {/* Badge */}
                                {product.featured && (
                                    <div className="pt-best-badge">
                                        BEST
                                    </div>
                                )}

                                {/* Sale Badge */}
                                <div className="pt-sale-badge">
                                    <span className={`pt-sale-tag ${viewMode === 'single' ? 'single' : 'set'}`}>
                                        {currentData.label}
                                    </span>
                                </div>

                                <div className="pt-card-content">
                                    {/* Title Area */}
                                    <div className="pt-card-header">
                                        <h3 className="pt-card-title">
                                            {product.name}
                                        </h3>
                                        <p className="pt-card-desc">{product.desc}</p>
                                    </div>

                                    {/* Price Area */}
                                    <div className="pt-price-area">
                                        <div className="pt-price-row">
                                            <span className="pt-original-price">
                                                {formatPrice(currentData.original)}원
                                            </span>
                                            <span className="pt-sale-price">
                                                {formatPrice(currentData.sale)}
                                                <span className="pt-unit">원</span>
                                            </span>
                                        </div>

                                        <div className="pt-unit-info">
                                            <span className="pt-unit-count">총 {currentData.count}{unit}</span>
                                            <span>1{unit}당 {formatPrice(currentData.unitPrice)}원</span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="pt-features">
                                            <li>
                                                <Check className="pt-check-icon" />
                                                <span>고급 보자기 포장 서비스</span>
                                            </li>
                                            <li>
                                                <Check className="pt-check-icon" />
                                                <span>쇼핑백 무료 동봉</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Info */}
                <div className="pt-footer">
                    <div className="pt-contact-box">
                        <div className="pt-contact-row">
                            <div className="pt-phone-icon-bg">
                                <Phone size={20} />
                            </div>
                            <div className="pt-contact-details">
                                <div className="pt-contact-label">제품 및 대량 구매 문의</div>
                                <div className="pt-contact-number">070-7759-7779</div>
                            </div>
                        </div>
                        <div className="pt-divider"></div>
                        <div className="pt-disclaimer">
                            <p>
                                * 본 제품은 전문 한의약품 또는 건강기능식품입니다.<br />
                                * 3+1 행사는 동일 제품 구매 시 적용됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTable;
