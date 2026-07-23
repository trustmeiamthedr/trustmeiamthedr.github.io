import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data';

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogPosts.find(b => b.id === id);

    useEffect(() => {
        if (blog) {
            document.title = `${blog.title} | 경희무교로한의원`;
        }
    }, [blog]);

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mgrdoc.com/blog/${blog.id}`
        },
        "headline": blog.title,
        "image": [
            `https://mgrdoc.com${blog.image}`
        ],
        "datePublished": blog.date,
        "author": {
            "@type": "Organization",
            "name": "경희무교로한의원"
        },
        "publisher": {
            "@type": "Organization",
            "name": "경희무교로한의원",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mgrdoc.com/assets/logo_final.png"
            }
        },
        "description": blog.preview
    };

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            
            {/* Header / Hero for Post */}
            <header style={{ backgroundColor: '#f8f9fa', padding: '60px 0', borderBottom: '1px solid #eee', marginBottom: '60px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Link to="/blog" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '500' }}>
                            &larr; 블로그 목록으로 돌아가기
                        </Link>
                    </div>
                    <h1 style={{ fontSize: '32px', color: '#222', lineHeight: '1.4', marginBottom: '20px' }}>
                        {blog.title}
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#777', fontSize: '15px' }}>
                        <time dateTime={blog.date}>{blog.date}</time>
                        <span style={{ margin: '0 10px' }}>|</span>
                        <span>경희무교로한의원</span>
                    </div>
                </div>
            </header>

            {/* Post Content */}
            <article className="container" style={{ maxWidth: '800px' }}>
                <div className="blog-content" style={{ fontSize: '17px', lineHeight: '1.8', color: '#444' }}>
                    {blog.blocks.map((block, idx) => {
                        if (block.type === 'text') {
                            // Split by newline and map to <br />
                            return (
                                <p key={idx} style={{ marginBottom: '25px', wordBreak: 'keep-all' }}>
                                    {block.content.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i !== block.content.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            );
                        } else if (block.type === 'image') {
                            return (
                                <figure key={idx} style={{ margin: '40px 0', textAlign: 'center' }}>
                                    <img 
                                        src={block.content} 
                                        alt={`Blog image ${idx}`} 
                                        style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                                        loading="lazy"
                                    />
                                </figure>
                            );
                        } else if (block.type === 'video') {
                            return (
                                <figure key={idx} style={{ margin: '40px 0', textAlign: 'center' }}>
                                    <video 
                                        controls 
                                        preload="metadata"
                                        poster={block.poster || blog.image}
                                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    >
                                        <source src={block.content} type="video/mp4" />
                                        브라우저가 비디오 태그를 지원하지 않습니다.
                                    </video>
                                </figure>
                            );
                        } else if (block.type === 'youtube') {
                            return (
                                <figure key={idx} style={{ margin: '40px 0', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${block.content}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        />
                                    </div>
                                </figure>
                            );
                        }
                        return null;
                    })}
                </div>
            </article>

            {/* CTA */}
            <div className="container" style={{ maxWidth: '800px', marginTop: '80px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px', borderRadius: '12px', textAlign: 'center', color: '#ffffff' }}>
                    <h3 style={{ fontSize: '26px', marginBottom: '15px', color: '#ffffff', fontWeight: 'bold' }}>통증으로 고민하고 계신가요?</h3>
                    <p style={{ fontSize: '16px', color: '#ffffff', opacity: 0.95, marginBottom: '30px' }}>
                        근본적인 원인을 찾아 정확하게 치료합니다. 지금 바로 상담을 예약하세요.
                    </p>
                    <a href="https://booking.naver.com/booking/13/bizes/384022" target="_blank" rel="noopener noreferrer" 
                       style={{ display: 'inline-block', padding: '15px 40px', backgroundColor: '#fff', color: 'var(--primary-color)', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', transition: 'transform 0.2s' }}
                       onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                       onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        네이버 예약하기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
