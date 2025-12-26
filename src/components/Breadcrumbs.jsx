import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ deptName }) => {
    return (
        <div className="breadcrumbs-container">
            <div className="container">
                <div className="breadcrumbs">
                    <Link to="/" className="breadcrumb-link">HOME</Link>
                    <span className="breadcrumb-separator">&gt;</span>
                    <span className="breadcrumb-link disabled">진료과목</span>
                    <span className="breadcrumb-separator">&gt;</span>
                    <span className="breadcrumb-active">{deptName}</span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
