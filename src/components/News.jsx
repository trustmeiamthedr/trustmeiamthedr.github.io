import React from 'react';
import { Link } from 'react-router-dom';

import { latestNews } from '../data';

const News = () => {
    return (
        <section className="news-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', color: '#333' }}>Latest News</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#777' }}>
                        통증 치료의 새로운 기준, 경희무교로한의원의 최신 소식과 건강 정보를 전해드립니다.
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {latestNews.map((news, index) => (
                        <div key={index} className="news-item" style={{ flex: '1', minWidth: '300px' }}>
                            <Link to={news.link || '#'} className="news-item-img" style={{ display: 'block', overflow: 'hidden' }}>
                                <img src={news.image} alt={news.title} style={{ width: '100%', display: 'block', transition: 'transform 0.3s' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <div className="news-item-content">
                                <div style={{ fontSize: '12px', color: '#ff5e62', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 'bold' }}>{news.date}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>
                                    <Link to={news.link || '#'} style={{ color: '#333' }}>{news.title}</Link>
                                </h3>
                                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {news.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
