import React from 'react';
import './NonCoveredNotice.css';
import Breadcrumbs from '../components/Breadcrumbs';

const NonCoveredNotice = () => {
    // Non-covered services data from the user-provided image
    const notices = [
        { id: 1, name: '진단서', price: '20,000', remark: '' },
        { id: 2, name: '진료확인서', price: '3,000', remark: '' },
        { id: 3, name: '진료기록사본', price: '1,000/장', remark: '6매 이상시 100/장' },
        { id: 4, name: '증명서 사본', price: '1,000', remark: '' },
        { id: 5, name: '약침1- 봉침/일반약침', price: '12,000', remark: '' },
        { id: 6, name: '약침2- PDRN,태반,NO', price: '35,000', remark: '' }
    ];

    return (
        <div className="non-covered-page">
            {/* Hero Section */}
            <div className="page-hero">
                <div className="container">
                    <h1>비급여 고시</h1>
                    <p>의료법 제45조에 근거한 비급여 진료비용 항목을 안내해 드립니다.</p>
                </div>
            </div>

            <Breadcrumbs title="비급여 고시" />

            <div className="non-covered-container">
                <div className="notice-section-header">
                    <h2 className="notice-title">비급여 진료비용 고시</h2>
                    <p className="notice-subtitle">투명하고 정직한 진료를 위해 진료비를 고시합니다.</p>
                </div>

                <div className="table-responsive">
                    <table className="notice-table">
                        <thead>
                            <tr>
                                <th>항목</th>
                                <th>가격 (원)</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((item) => (
                                <tr key={item.id}>
                                    <td className="item-name">{item.name}</td>
                                    <td className="item-price">{item.price}</td>
                                    <td className="item-remark">{item.remark}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="notice-info-box">
                    <p>※ <strong>의료법 제45조(비급여 진료비용 등의 고시)</strong>에 의거하여 고시된 비용입니다.</p>
                    <p>※ 기재된 항목 및 금액은 환자의 상태, 시술 범위, 약제 용량 등에 따라 실제 진료 시 변동될 수 있습니다.</p>
                    <p>※ 기타 자세한 문의사항은 안내데스크(070-7759-7779)로 문의해 주시기 바랍니다.</p>
                </div>
            </div>
        </div>
    );
};

export default NonCoveredNotice;
