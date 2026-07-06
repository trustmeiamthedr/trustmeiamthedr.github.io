import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import Features from '../components/Features';
import Departments from '../components/Departments';
import Doctors from '../components/Doctors';
import News from '../components/News';
import { contact } from '../data';

function Home() {
    useEffect(() => {
        document.title = "경희무교로한의원 - 바른 진단, 바른 치료";
    }, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "경희무교로한의원",
        "alternateName": "Kyunghee Mukyoro Korean Medicine Clinic",
        "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2953&auto=format&fit=crop",
        "telephone": contact.phone,
        "email": contact.email,
        "url": "https://mgrdoc.com/",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "무교로 16 대한체육회 7F",
            "addressLocality": "서울 중구 무교동",
            "addressRegion": "서울특별시",
            "postalCode": "04522",
            "addressCountry": "KR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "37.567165",
            "longitude": "126.977067"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:30",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "12:00"
            }
        ],
        "medicalSpecialty": [
            "한방 내과",
            "근골격계 비수술 치료",
            "초음파 유도하 약침 치료",
            "신경 박리술 (Hydrodissection)",
            "다이어트 클리닉 (에노슬림)"
        ],
        "description": "서울 중구 시청역 5번 출구 무교동 음식문화거리 대한체육회 빌딩 7층에 위치한 경희무교로한의원입니다. 근골격초음파(RMSK) 인증의인 대표원장의 정밀한 실시간 초음파 가이드 약침요법, 하이드로다이섹션 및 척추/디스크/어깨/관절 비수술 재생 치료를 전문으로 합니다."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Hero />
            <InfoBar />
            <Departments />
            <Features />
            <Doctors />
            <News />
        </>
    );
}

export default Home;
