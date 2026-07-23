import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogSection = () => {
    // Only take the first 3 posts
    const latestBlogs = blogPosts.slice(0, 3);

    return (
        <section className="blog-section" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', color: '#333' }}>Blog</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#777' }}>
                        경희무교로한의원의 유익한 건강 정보와 최신 치료 소식을 블로그에서 만나보세요.
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {latestBlogs.map((blog, index) => (
                        <article key={blog.id} className="news-item" style={{ flex: '1', minWidth: '300px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <Link to={`/blog/${blog.id}`} className="news-item-img" style={{ display: 'block', overflow: 'hidden', height: '220px' }}>
                                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <div className="news-item-content" style={{ padding: '25px' }}>
                                <div style={{ fontSize: '12px', color: '#ff5e62', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 'bold' }}>{blog.date}</div>
                                <h3 style={{ fontSize: '20px', marginBottom: '15px', lineHeight: '1.4' }}>
                                    <Link to={`/blog/${blog.id}`} style={{ color: '#333', textDecoration: 'none' }}>{blog.title}</Link>
                                </h3>
                                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {blog.preview}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
