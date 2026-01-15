import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data';
import Hero from '../components/Hero';
import ScrollAnimation from '../components/ScrollAnimation';

const DepartmentsPage = () => {
    const styles = {
        header: {
            padding: '120px 0 80px',
            backgroundColor: '#f8f9fa',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 15h2v10h-2V15zm-4 4h10v2h-10v-2z' fill='%23ff5e62' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
            textAlign: 'center',
            borderBottom: '1px solid #eee',
        },
        title: {
            fontSize: '42px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#0d2d62',
            marginBottom: '20px',
        },
        subtitle: {
            fontSize: '18px',
            color: '#777',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            padding: '0',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '40px 20px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            border: '1px solid #f0f0f0',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
        },
        iconWrapper: {
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
        },
        deptName: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '15px',
        },
        deptDesc: {
            fontSize: '14px',
            color: '#777',
            lineHeight: '1.6',
            marginBottom: '20px',
        }
    };

    return (
        <div className="departments-page">
            <header style={styles.header}>
                <div className="container">
                    <h1 style={styles.title}>진료 과목</h1>
                    <p style={styles.subtitle}>
                        경희무교로한의원의 전문적이고 세심한 진료 과목들을 소개합니다.
                    </p>
                </div>
            </header>

            {/* Breadcrumb Bar */}
            <Breadcrumbs title="Departments" />

            <section style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="dept-grid" style={styles.grid}>
                        {departments.map((dept, index) => (
                            <Link key={index} to={dept.link} className="dept-card-link" style={{ textDecoration: 'none' }}>
                                <div className="dept-card" style={styles.card}>
                                    <div style={styles.iconWrapper}>
                                        <img src={dept.icon} alt={dept.label} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                                    </div>
                                    <h3 style={styles.deptName}>{dept.label}</h3>
                                    <p style={styles.deptDesc}>{dept.description}</p>
                                    <span style={{ color: '#ff5e62', fontWeight: '600', fontSize: '14px', marginTop: 'auto' }}>자세히 보기 &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .dept-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    .dept-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 480px) {
                    .dept-grid { grid-template-columns: 1fr !important; }
                }
                .dept-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                    border-color: #ff5e62 !important;
                }
            `}</style>
        </div>
    );
};

export default DepartmentsPage;
