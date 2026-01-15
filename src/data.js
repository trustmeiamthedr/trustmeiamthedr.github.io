
export const menuItems = [
    { name: '홈', link: '/' },
    { name: '병원소개', link: '/doctor' },
    { name: '진료과목', link: '/departments' },
    { name: '진료시간표', link: '/timetable' },
    { name: '찾아오시는 길', link: '/contact' },
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
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2953&auto=format&fit=crop", // Hospital hallway/modern
        subtitle: "미국 초음파 의사협회 근골격계 인증의(RMSK) 자격 취득",
        title: "보이는 진단, 근거 있는 치료",
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
    },
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop", // Medical staff/team
        subtitle: "객관적인 진단을 근거로 치료하는 신뢰할 수 있는 전문가",
        title: "끊임없는 연구, 당신의 아픔을 이해하는 깊이가 됩니다.",
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
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
            { day: "토요일", time: "10.00 - 12.00 (격주진료/예약필요)" },
            { day: "일요일/공휴일", time: "휴무" }
        ]
    },
    timetable: {
        title: "Doctors’ Timetable",
        text: "다음 내용은 진료 예약을 계획하는 데 도움이 되는 안내용입니다.",
        buttonText: "시간표 보기"
    },
    booking: "https://booking.naver.com/booking/13/bizes/384022"
};



import doctorIcon from './assets/icons/doctor_stethoscope.png';
import naturalIcon from './assets/icons/dna_medicine_bottle.png';
import certificationIcon from './assets/icons/certification_badge.png';
import coloredCertificate from './assets/icons/colored_certificate.png';
import rmskIcon from './assets/icons/rmsk_badge.png';
import heartIcon from './assets/icons/heart_care.png';
import heroSlide1 from './assets/images/hero_slide_1_v2.jpg';
import pdrnHero from './assets/images/pdrn_hero.png';
import hydroHero from './assets/images/hydro_carpal.png';
import gongjindanHero from './assets/images/gongjindan_premium.jpg';




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
    { value: 10000, label: "Happy patients" },
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
    { name: "SpineDisk", label: "척추/디스크", icon: spineIcon, type: 'image', link: "/departments/spine-disk", description: "목/허리 디스크, 협착증, 만성 요통 등 척추 질환을 초음파 유도하 약침요법으로 근본 치료합니다." },
    { name: "JointPain", label: "관절/관절염", icon: jointIcon, type: 'image', link: "/departments/joint-pain", description: "무릎, 고관절, 손가락 등 관절 염증과 통증을 잡고 주변 인대를 강화하여 기능을 회복시킵니다." },
    { name: "Shoulder", label: "어깨/회전근개", icon: shoulderIcon, type: 'image', link: "/departments/shoulder", description: "오십견, 회전근개 파열, 석회성 건염 등 어깨 통증의 원인을 정확히 진단하여 해결합니다." },
    { name: "MyofascialPain", label: "근막통증", icon: myofascialIcon, type: 'image', link: "/departments/myofascial-pain", description: "만성적인 근육 뭉침과 통증 유발점을 찾아 해결하고 전신의 균형을 바로잡습니다." },
    { name: "Diet", label: "비만/다이어트", icon: obesityIcon, type: 'image', link: "/departments/diet", description: "개개인의 체질에 맞춘 한약 처방과 다이어트 프로그램을 통해 건강하고 요요 없는 체중 감량을 도와드립니다." },
    { name: "TrafficAccident", label: "교통사고치료", icon: trafficIcon, type: 'image', link: "/departments/traffic-accident", description: "교통사고 후유증 방지를 위해 어혈을 제거하고 사고로 인한 근육과 인대의 손상을 빠르게 회복시킵니다." },
    { name: "Respiratory", label: "호흡기/면역", icon: respiratoryIcon, type: 'image', link: "/departments/respiratory", description: "비염, 천식, 만성 기침 등 호흡기 질환과 떨어진 면역력을 강화하여 건강한 호흡을 되찾아드립니다." },
    { name: "ImmuneBoosting", label: "면역부스팅", icon: immuneIcon, type: 'image', link: "/departments/immune-boosting", description: "기력 회복과 면역 강화를 위한 공진단, 경옥고 및 개인별 맞춤 보약으로 에너지를 충전합니다." },
    { name: "Injections", label: "약침요법/초음파유도", icon: injectionIcon, type: 'image', link: "/departments/injections", description: "초음파를 통한 정밀한 진단을 바탕으로 환부의 정확한 위치에 약침을 주입하여 치료 효과를 극대화합니다." },
];

export const latestNews = [
    { title: "DNA 에너지로 조직을 재생하는 PDRN 약침", date: "Jan 15, 2026", image: pdrnHero, text: "연어에서 추출한 천연 DNA 성분으로 염증 감소와 조직 재생을 동시에 해결하는 근본적인 치료입니다. 내성이 없고 안전한 PDRN 요법을 만나보세요.", link: "/departments/injections/pdrn" },

    { title: "초음파 유도하 하이드로다이섹션(Hydrodissection)", date: "Jan 15, 2026", image: hydroHero, text: "고해상도 초음파를 통해 실시간으로 유착된 조직 사이의 신경 압박을 해소하는 최신 시술법입니다. 손목터널증후군 등 신경 포착 질환에 탁월한 효과를 보입니다.", link: "/departments/injections/hydrodissection" },

    { title: "면역력 강화 클리닉: 공진단 & 경옥고", date: "Jan 15, 2026", image: gongjindanHero, text: "황제의 보약 공진단과 무병장수의 명약 경옥고로 우리 가족의 면역력을 지키세요. 엄선된 정품 약재와 정성스러운 처방으로 기력 회복을 도와드립니다.", link: "/departments/immune-boosting" }

];

export const doctor = {
    name: "Dr. Kim Won",
    subtitle: "대표 원장",
    specialty: "전문의 한의학박사 RMSK(미국의사협회 근골격초음파 인증의)",
    phone: "070-7759-7779",
    email: "trustmeiamthedr@gmail.com",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    quote: "“바른 진단이 바른 치료를 만듭니다.",
    booking: "https://booking.naver.com/booking/13/bizes/384022",
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
export const title = "MUKYOKMC";
