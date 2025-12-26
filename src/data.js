
export const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '#' },
    { name: '진료과목', link: '#' },
    { name: 'Timetable', link: '#' },
    { name: 'Pages', link: '#' },
    { name: 'Contacts', link: '#' },
];

export const heroSlider = { // Keep as fallback/alias if needed by other components, or just for the initial slide
    title: "바른 진단, 바른 치료!",
    subtitle: "아픔의 원인을 봅니다. 과학적 진단으로 만나는 바른 한방 치료.",
    buttonText: "예약하기"
};

export const heroSlides = [
    {
        image: heroSlide1, // Updated image
        subtitle: "아픔의 원인을 봅니다. 과학적 진단으로 만나는 바른 한방 치료.",
        title: "바른 진단, 바른 치료!",
        buttonText: "예약하기"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2953&auto=format&fit=crop", // Hospital hallway/modern
        subtitle: "미국 초음파 의사협회 근골격계 인증의(RMSK) 자격 취득",
        title: "보이는 진단, 근거 있는 치료",
        buttonText: "자세히 보기"
    },
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop", // Medical staff/team
        subtitle: "객관적인 진단을 근거로 치료하는 신뢰할 수 있는 전문가",
        title: "끊임없는 연구, 당신의 아픔을 이해하는 깊이가 됩니다.",
        buttonText: "자세히 보기"
    }
];

export const heroImages = heroSlides.map(slide => slide.image);

export const contact = {
    phone: "070-7759-7779",
    email: "trustmeiamthedr@gmail.com",
    address: "서울 중구 무교로 16 대한체육회 7F, 04522",
    openingHours: "월-금: 9:30AM - 7:00PM, 토: 10:00AM - 12:00PM(격주진료), 일: 휴무"
};

export const infoBar = {
    openingHours: {
        title: "Opening Hours",
        schedule: [
            { day: "월요일 - 금요일", time: "9.30 - 19.00" },
            { day: "토요일", time: "10.00 - 12.00 (격주진료)" },
            { day: "일요일/공휴일", time: "휴무" }
        ]
    },
    timetable: {
        title: "Doctors’ Timetable",
        text: "다음 내용은 진료 예약을 계획하는 데 도움이 되는 안내용입니다.",
        buttonText: "시간표 보기"
    }
};



import doctorIcon from './assets/icons/doctor_stethoscope.png';
import naturalIcon from './assets/icons/dna_medicine_bottle.png';
import certificationIcon from './assets/icons/certification_badge.png';
import coloredCertificate from './assets/icons/colored_certificate.png';
import rmskIcon from './assets/icons/rmsk_badge.png';
import heartIcon from './assets/icons/heart_care.png';
import heroSlide1 from './assets/images/hero_slide_1_v2.jpg';

export const features = [
    { icon: doctorIcon, type: 'image', title: "풍부한 임상 경험", text: "풍부한 임상 경험을 바탕으로 꼭 필요한 진료만을 제안합니다." },
    { icon: naturalIcon, type: 'image', title: "안전한 순수 친환경 치료", text: "인체에 해를 주지 않는 순수 천연 성분의 약물로 치료합니다." },
    { icon: certificationIcon, type: 'image', title: "보건복지부 인증 전문의", text: "보건복지부 인증 전문의로 끊임없이 연구 개발을 위해 노력합니다." },
    { icon: rmskIcon, type: 'image', title: "미국의사협회 인증 RMSK", text: "근골격 초음파 인증의로서 최고의 첨단 의료 서비스를 제공합니다." }
];

export const aboutClinic = {
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop", // Scientist with microscope
    title: "About Clinic",
    text: "병원은 단순히 아픈 곳을 치료하는 곳을 넘어, 마음의 안정을 얻고 건강한 삶을 계획하는 공간이어야 합니다. 경희무교로한의원은 객관적인 검사 데이터와 풍부한 임상 경험을 바탕으로 꼭 필요한 진료만을 제안합니다. 작은 증상 하나도 놓치지 않고 꼼꼼히 살피며, 환자분이 이해하실 때까지 친절하게 설명해 드리는 것이 저희의 약속입니다."
};

export const counters = [
    { value: 26, label: "Years of experience" },
    { value: 1, label: "Doctors in team" },
    { value: 9000, label: "Happy patients" },
    { value: 9, label: "Medical Departments" },
];

import spineIcon from './assets/icons/spine_disk_v2.png';
import jointIcon from './assets/icons/joint_pain_v2.png';
import shoulderIcon from './assets/icons/shoulder_v2.png';
import myofascialIcon from './assets/icons/myofascial_v2.png';
import obesityIcon from './assets/icons/obesity_v2.png';
import trafficIcon from './assets/icons/traffic_accident_v2.png';
import respiratoryIcon from './assets/icons/respiratory_v2.png';
import immuneIcon from './assets/icons/immune_v2.png';
import injectionIcon from './assets/icons/dna_medicine_bottle.png';

export const departments = [
    { name: "SpineDisk", label: "척추/디스크", icon: spineIcon, type: 'image', link: "/departments/spine-disk" },
    { name: "JointPain", label: "관절/관절염", icon: jointIcon, type: 'image', link: "/departments/joint-pain" },
    { name: "Shoulder", label: "어깨", icon: shoulderIcon, type: 'image', link: "/departments/shoulder" },
    { name: "MyofascialPain", label: "근막통증", icon: myofascialIcon, type: 'image', link: "/departments/myofascial-pain" },
    { name: "Diet", label: "비만/다이어트", icon: obesityIcon, type: 'image', link: "/departments/diet" },
    { name: "TrafficAccident", label: "교통사고치료", icon: trafficIcon, type: 'image', link: "/departments/traffic-accident" },
    { name: "Respiratory", label: "호흡기", icon: respiratoryIcon, type: 'image', link: "/departments/respiratory" },
    { name: "ImmuneBoosting", label: "면역부스팅", icon: immuneIcon, type: 'image', link: "/departments/immune-boosting" },
    { name: "Injections", label: "약침요법", icon: injectionIcon, type: 'image', link: "/departments/injections" },
];

export const latestNews = [
    { title: "Researchers found a new way to treat back pain", date: "June 21, 2022", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." },
    { title: "A new study reveals the benefits of daily walking", date: "June 25, 2022", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop", text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way." },
    { title: "How to maintain a healthy diet during pregnancy", date: "July 02, 2022", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop", text: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek." }
];

export const doctor = {
    name: "Dr. Kim Won",
    subtitle: "대표 원장",
    specialty: "전문의 한의학박사 RMSK(미국의사협회 근골격초음파 인증의)",
    phone: "070-7759-7779",
    email: "trustmeiamthedr@gmail.com",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    quote: "“바른 진단이 바른 치료를 만듭니다.",
    bio: "안녕하세요, 대표원장 성기원입니다. 좋은 치료란 무엇일까요? 저는 ‘내 몸을 정확히 아는 것’에서 시작한다고 생각합니다. 저희는 한방 전문의의 임상 경험과 RMSK(초음파 인증의)의 정밀한 진단을 결합하여, 통증의 원인과 몸의 불균형을 면밀히 파악합니다. 아픈 곳만 잠시 덮어두는 것이 아니라, 몸이 스스로 회복할 수 있는 힘을 길러드리는 것에 집중합니다. \n과잉 진료 없이, 꼭 필요한 치료만을 권해드리겠습니다. 믿고 찾을 수 있는 여러분의 평생 건강 파트너가 되겠습니다.",
    fullBio:

        `성기원 원장은 경희대학교 한의과대학을 졸업하고 동 대학원에서 석·박사 학위를 취득한 한방 전문의입니다. 전통 한의학의 지혜에 머무르지 않고, 미국 초음파 의사협회(ARDMS)의 근골격계 초음파 인증의(RMSK) 자격을 취득하여 진단의 객관성과 정확도를 높였습니다.
    
    끊임없는 연구를 통해 뇌혈관 질환, 소화기 수술 후유증, 전립선 질환 등 난치성 질환에 대한 임상 논문을 다수 발표하며 근거 중심의 의술을 펼치고 있습니다.

    <div style="margin-top: 20px;">
        <strong style="display: block; margin-bottom: 10px; color: #333;">[연구 및 학술 활동]</strong>
        <p style="margin-bottom: 8px;">환자의 치료 효과를 높이기 위해 꾸준히 연구합니다.</p>
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
            <li style="margin-bottom: 8px;">전립선 질환 연구: 전립선 비대 모델에서의 약재 작용 기전 규명 (박사 학위 논문)</li>
            <li style="margin-bottom: 8px;">소화기/수술 후유증: 위장 절제술 후유증 및 소화기 질환 임상 증례 연구</li>
            <li style="margin-bottom: 8px;">항노화/세포 재생: 천연 성분 약물이 노화 지연 및 세포 재생에 미치는 영향 (석사 학위 논문)</li>
            <li>뇌혈관/만성질환: 뇌경색 환자의 두통 및 당뇨 합병증(피부 소양증) 임상 연구</li>
        </ul>
    </div>
    `,
    education: [
        "경희대학교 한의과대학 졸업",
        "경희대학교 한의과대학원 석사/박사학위"
    ],
    qualifications: [
        "한방 전문의",
        "RMSK(Registered in Musculoskeletal Sonography) – 미국 의사협회 근골격계 초음파 인증의 자격 취득"
    ],
    career: [
        "대한민국고객감동그랑프리 명의부문 대상선정(2009)",
        "네이버지식인 상담한의사 위촉(2009)",
        "대한민국 소비자 신뢰 명품브랜드 대상(2023)",
    ],
    papers: [
        "Microarray 기법을 이용한 전립선비대 동물모델에서 薑黃의 작용기전 연구・ The Effect of Oral Curcuma longa ingestion on the gene expression in a Rat Model of Benign Prostatic Hyperplasia using microarray analysis. <박사학위>",
        "香砂平胃散으로 호전된 위암으로 인한 위장절제술 후유증 환자의 임상증례 보고・ 六味地黃湯 및 補中益氣湯이 Rat의 피부섬유아세포, 사구체메산지움세포 및 혈관내피세포의 노화 지연에 미치는 영향 <석사학위>",
        "급성기 뇌경색 환자의 두통에 대한 破塞滑血湯의 임상적 효능・ 당뇨를 동반한 중풍환자의 피부 소양증에 대한 防風通聖散 투여 2례 등"
    ],
    certificates: [
        coloredCertificate,
        coloredCertificate,
        coloredCertificate
    ]
};
export const title = "MUKYO KMC";
