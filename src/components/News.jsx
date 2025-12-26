import React from 'react';
import { latestNews } from '../data';

const News = () => {
    return (
        <section className="news-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', color: '#333' }}>Latest News</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#777' }}>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {latestNews.map((news, index) => (
                        <div key={index} className="news-item" style={{ flex: '1', minWidth: '300px' }}>
                            <div className="news-item-img">
                                <img src={news.image} alt={news.title} />
                            </div>
                            <div className="news-item-content">
                                <div style={{ fontSize: '12px', color: '#ff5e62', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 'bold' }}>{news.date}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>
                                    <a href="#" style={{ color: '#333' }}>{news.title}</a>
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
