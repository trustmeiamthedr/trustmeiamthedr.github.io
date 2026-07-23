import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogList = () => {
    useEffect(() => {
        document.title = "블로그 | 경희무교로한의원";
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "경희무교로한의원 블로그",
        "url": "https://mgrdoc.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "경희무교로한의원"
        }
    };

    return (
        <div style={{ padding: '80px 0', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '36px', color: '#333' }}>건강 블로그</h1>
                    <p style={{ maxWidth: '700px', margin: '20px auto 0', color: '#777', fontSize: '18px' }}>
                        건강한 일상을 위한 다양한 정보와 치료 사례를 공유합니다.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
                    {blogPosts.map((blog) => (
                        <article key={blog.id} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
                            <Link to={`/blog/${blog.id}`} style={{ display: 'block', overflow: 'hidden', height: '240px' }}>
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <div style={{ padding: '30px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                <time style={{ fontSize: '13px', color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '15px', display: 'block' }}>
                                    {blog.date}
                                </time>
                                <h2 style={{ fontSize: '22px', marginBottom: '20px', lineHeight: '1.4' }}>
                                    <Link to={`/blog/${blog.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                                        {blog.title}
                                    </Link>
                                </h2>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px', flex: '1' }}>
                                    {blog.preview}
                                </p>
                                <div style={{ marginTop: 'auto' }}>
                                    <Link to={`/blog/${blog.id}`} style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: '500', transition: 'background-color 0.3s' }}
                                          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-color)'}
                                          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                                    >
                                        자세히 보기
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
