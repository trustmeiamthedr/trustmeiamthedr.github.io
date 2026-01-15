import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ deptName, title, subDeptName, deptLink }) => {
    return (
        <div className="breadcrumbs-container">
            <div className="container">
                <div className="breadcrumbs">
                    <Link to="/" className="breadcrumb-link">HOME</Link>
                    <span className="breadcrumb-separator">&gt;</span>
                    {deptName ? (
                        <>
                            <Link to="/departments" className="breadcrumb-link">진료과목</Link>
                            <span className="breadcrumb-separator">&gt;</span>
                            {subDeptName ? (
                                <>
                                    <Link to={deptLink || "/departments/injections"} className="breadcrumb-link">{deptName}</Link>
                                    <span className="breadcrumb-separator">&gt;</span>
                                    <span className="breadcrumb-active">{subDeptName}</span>
                                </>
                            ) : (
                                <span className="breadcrumb-active">{deptName}</span>
                            )}
                        </>
                    ) : (
                        <span className="breadcrumb-active">{title}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
