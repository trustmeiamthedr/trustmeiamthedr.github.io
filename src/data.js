
export const menuItems = [
    { name: '홈', link: '/' },
    { name: '의료진 소개', link: '/doctor' },
    { name: '진료과목', link: '/departments' },
    { name: '진료시간표', link: '/timetable' },
    { name: '자주 묻는 질문', link: '/faq' },
    { name: '블로그', link: '/blog' },
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
        subtitle: "일시적 진통 대신, 붓기를 빼고 영양을 공급해 세포 스스로 살아나게 합니다.",
        title: "통증 완화를 넘어, 근본적 회복 환경 구축",
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2953&auto=format&fit=crop", // Hospital hallway/modern
        subtitle: "뼈와 힘줄의 마찰과 압박을 정밀하게 교정하여 비수술적 회복을 도웁니다.",
        title: "수술 걱정 전, 아픈 '움직임 환경' 개선",
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
    },
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop", // Medical staff/team
        subtitle: "노화가 아닌 누적된 과부하를 해결하여 힘줄 본래의 탄력을 되찾아 드립니다.",
        title: "나이 탓이 아닌, 지친 관절의 '과부하 해소'",
        buttonText: "예약하기",
        link: "https://booking.naver.com/booking/13/bizes/384022"
    }
];

export const heroImages = heroSlides.map(slide => slide.image);

export const contact = {
    phone: "070-7759-7779",
    email: "mgrdoc.com@gmail.com",
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
import naturalIcon from './assets/icons/injection_vials.png';
import certificationIcon from './assets/icons/certification_badge.png';
import coloredCertificate from './assets/icons/colored_certificate.png';
import rmskIcon from './assets/icons/rmsk_badge.png';
import heroSlide1 from './assets/images/hero_slide_1_v2.jpg';
import pdrnHero from './assets/images/pdrn_hero.png';
import hydroHero from './assets/images/hydro_carpal.png';
import gongjindanHero from './assets/images/gongjindan_premium.jpg';





import doctorProfileGrey from './assets/images/doctor_profile_grey.png';

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
import injectionIcon from './assets/icons/injection_vials.png';

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

    { title: "2026 설날 맞이 특별 기획전 : 공진단 & 경옥고", date: "Jan 15, 2026", image: gongjindanHero, text: "황제의 보약 공진단과 무병장수의 명약 경옥고로 우리 가족의 면역력을 지키세요. 엄선된 정품 약재와 정성스러운 처방으로 기력 회복을 도와드립니다.", link: "/departments/immune-boosting" }

];

export const doctor = {
    name: "Dr. 성 기 원",
    subtitle: "대표 원장",
    specialty: "전문의 ・ 한의학박사 ・ RMSK(미국의사협회 근골격초음파 인증의)",
    phone: "070-7759-7779",
    email: "mgrdoc.com@gmail.com",
    image: doctorProfileGrey,
    quote: "“바른 진단이 바른 치료를 만듭니다.",
    booking: "https://booking.naver.com/booking/13/bizes/384022",
    bio: "안녕하세요, 대표원장 성기원입니다. 좋은 치료란 무엇일까요? 저는 ‘내 몸을 정확히 아는 것’에서 시작한다고 생각합니다. 저희는 한방 전문의의 임상 경험과 RMSK(초음파 인증의)의 정밀한 진단을 결합하여, 통증의 원인과 몸의 불균형을 면밀히 파악합니다. 아픈 곳만 잠시 덮어두는 것이 아니라, 몸이 스스로 회복할 수 있는 힘을 길러드리는 것에 집중합니다. \n과잉 진료 없이, 꼭 필요한 치료만을 권해드리겠습니다. 믿고 찾을 수 있는 여러분의 평생 건강 파트너가 되겠습니다.",
    fullBio:

        `성기원 원장은 경희대학교 한의과대학을 졸업하고 동 대학원에서 석·박사 학위를 취득한 한방 전문의입니다. 전통 한의학의 지혜에 머무르지 않고, 미국 초음파 의사협회(ARDMS)의 근골격계 초음파 인증의(RMSK) 자격을 취득하여 진단의 객관성과 정확도를 높였습니다.
    
    끊임없는 연구를 통해 뇌혈관 질환, 소화기 수술 후유증, 전립선 질환 등 난치성 질환에 대한 임상 논문을 다수 발표하며 근거 중심의 의술을 펼치고 있습니다.

    <div style="margin-top: 35px; margin-bottom: 35px;">
        <strong style="display: block; margin-bottom: 15px; color: #333; font-size: 16px;">[치료의 3가지 약속]</strong>
        <p style="margin-bottom: 25px; line-height: 1.8; color: #555;">
            저희 병원을 찾아오시는 많은 분들이 진단명을 듣고 '평생 안 나으면 어쩌지?', '결국 수술해야 하나?' 하는 막연한 두려움을 안고 오십니다. 저는 진료실에서 그 불안을 희망으로 바꿔드리는 진료를 하고자 합니다. 저희 병원 치료의 3가지 약속을 전합니다.
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 25px;">
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid var(--secondary-color); border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <strong style="display: block; color: var(--secondary-color); font-size: 15px; margin-bottom: 8px;">첫째, 통증만 지우는 치료가 아닌 '근본적인 회복'에 집중합니다.</strong>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">단순히 통증을 일시적으로 차단하는 치료는 오래가지 못합니다. 약해지고 부어오른 조직의 회복력을 깨우고 세포 환경을 개선하여, 몸 스스로가 다시 건강해지는 자생력을 길러드립니다.</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid var(--secondary-color); border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <strong style="display: block; color: var(--secondary-color); font-size: 15px; margin-bottom: 8px;">둘째, 칼을 대기 전에 몸의 '움직임 환경'을 먼저 치료합니다.</strong>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">파열이나 협착이라는 말에 먼저 겁먹으실 필요는 없습니다. 힘줄과 관절이 스트레스를 받게 만든 마찰과 압박 환경을 정밀하게 치료하여, 비수술적인 방법으로도 충분히 호전될 수 있는 길을 함께 찾아가겠습니다.</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid var(--secondary-color); border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <strong style="display: block; color: var(--secondary-color); font-size: 15px; margin-bottom: 8px;">셋째, 노화라는 절망 대신 '과부하를 줄이는 희망'을 드립니다.</strong>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">"나이 들어 그렇다"는 무책임한 말 대신, 그동안 삶의 무게를 견디며 지쳐버린 관절 and 힘줄을 세심하게 들여다보겠습니다. 회복 속도가 사용량을 따라잡을 수 있도록 과부하를 해소하고 본래의 탄력을 되찾아 드리겠습니다.</p>
            </div>
        </div>
        
        <p style="line-height: 1.8; color: #333; font-weight: 500; margin-bottom: 0;">
            아픈 부위만 보는 것이 아니라 환자분의 일상을 함께 고민하는 든든한 동반자가 되겠습니다. 감사합니다.
        </p>
    </div>

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
export const title = "경희무교로한의원";

export const blogPosts = [
    {
        "id": "blog-1",
        "title": "어깨 앞쪽 통증과 팔꿈치 이상, 이두근의 문제일 수 있습니다: 초음파를 이용한 정밀 치료의 중요성",
        "date": "2026. 01. 22",
        "image": "/assets/blog/blog-1-thumb.png",
        "preview": "어깨 전방 통증이나 팔꿈치 무거움, 단순 근육통이 아닐 수 있습니다. 상완이두근 장두 건염의 근본 원인과 초음파 유도하 하이드로다이섹션 치료법을 안내해 드립니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-1-thumb.png"
            },
            {
                "type": "text",
                "content": "📌 어깨 앞쪽 통증과 팔꿈치 이상, 혹시 이두근 문제일까요?\n\n어깨 앞쪽이 뻐근하거나, 팔을 위로 올릴 때 또는 뒷짐을 질 때 찌릿한 통증이 느껴진 적이 있으신가요?\n많은 환자분들께서 이러한 통증을 오십견이나 단순 어깨 관절염으로 생각하시지만, 실제 임상에서는 '상완이두근 장두(Biceps Long Head Tendon)' 질환이 원인인 경우가 매우 많습니다."
            },
            {
                "type": "text",
                "content": "💪 상완이두근 장두(Biceps Long Head)의 구조와 기능\n\n흔히 '알통'이라 부르는 상완이두근은 두 개의 갈래(장두와 단두)로 나뉩니다. 그중 '장두' 힘줄은 어깨 관절 내부 깊숙이 들어가 결절간 홈(Bicipital Groove)을 지나 어깨 뼈에 연결됩니다.\n\n이 힘줄은 어깨 관절이 위로 들리거나 탈구되지 않도록 안정성을 유지해 주는 핵심 역할을 합니다. 하지만 좁은 홈을 지나기 때문에 지속적인 마찰과 과부하에 매우 취약한 구조적 특징을 가지고 있습니다."
            },
            {
                "type": "text",
                "content": "⚡ 주요 증상 체크리스트\n\n1️⃣ 팔을 앞으로 들거나 위로 올릴 때 어깨 앞쪽이 찌릿하고 아픔\n2️⃣ 뒷짐을 지는 동작(옷을 입거나 뒷주머니에 손을 넣을 때) 시 극심한 통증\n3️⃣ 어깨를 움직일 때 '뚝' 하는 소리나 눌리는 듯한 느낌\n4️⃣ 통증이 팔꿈치 아래나 이두근 근육 부위까지 뻐근하게 이어진다\n\n이러한 증상이 있다면 이두근 힘줄의 염증 및 회전근개와의 유착을 의심해 봐야 합니다."
            },
            {
                "type": "text",
                "content": "🔬 초음파 유도하 하이드로다이섹션(Hydrodissection) 약침 치료\n\n경희무교로한의원에서는 RMSK(미국의사협회 근골격계 초음파 인증의) 자격을 보유한 전문의가 고해상도 초음파를 통해 힘줄의 상태, 염증 수치, 유착 부위를 실시간으로 관찰하며 진단합니다.\n\n✅ 정밀 초음파 관찰: 결절간 홈 내 힘줄의 부종 및 마찰 부위 정확 파악\n✅ 하이드로다이섹션(Hydrodissection) 약침: 미세 바늘을 통해 천연 한약 추출액을 주입하여 엉겨 붙은 힘줄과 근막 사이를 부드럽게 분리\n✅ 근본적 세포 재생: 염증을 감소시키고 혈류를 공급하여 조직 스스로 회복할 수 있는 자생 환경 구축\n\n일시적으로 통증만 차단하는 것이 아니라, 힘줄이 자유롭게 움직일 수 있는 '움직임 환경'을 개선하는 것이 핵심입니다."
            },
            {
                "type": "text",
                "content": "🌿 원장님의 치료 조언 및 예방 생활 수칙\n\n치료와 함께 일상생활에서의 자발적인 관리도 중요합니다.\n- 팔을 머리 위로 반복해서 올리는 무리한 동작 자제하기\n- 컴퓨터 작업 시 팔꿈치가 공중에 떠 있지 않도록 받침대 사용하기\n- 통증 초기에 따뜻한 찜질과 함께 무리한 스트레칭 피하기\n\n지속적인 어깨 앞쪽 통증으로 불편을 겪고 계신다면, 정확한 초음파 진단을 받아보시길 권장합니다."
            }
        ]
    },
    {
        "id": "blog-2",
        "title": "[목통증·등통증 원인] 날개뼈 안쪽 통증, 견갑배신경(DSN) 포착 때문일 수 있습니다!",
        "date": "2025. 11. 07",
        "image": "/assets/blog/blog-2-thumb.jpg",
        "preview": "날개뼈 안쪽이 찌르듯 아프고 손으로 아무리 눌러도 시원하지 않나요? 단순 근육통이 아닌 '견갑배신경 포착(DSN Entrapment)'의 원인과 정밀 한방 치료법을 소개합니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-2-thumb.jpg"
            },
            {
                "type": "text",
                "content": "💻 현대인의 고질병, 날개뼈 안쪽 통증!\n\n오랜 시간 컴퓨터 작업이나 스마트폰을 사용하다 보면 목이 뻣뻣하고 어깨가 무거워지며, 날개뼈(견갑골) 안쪽 깊은 곳이 찌르듯 아픈 통증을 느껴보신 적 있으신가요?\n\n많은 분들이 이를 단순한 근육 뭉침이나 담으로 생각하고 마사지나 찜질을 받으시지만, 손으로 아무리 깊게 눌러도 시원하지 않고 통증이 지속된다면 👉 '견갑배신경 포착(DSN Entrapment)'을 의심해 보아야 합니다."
            },
            {
                "type": "text",
                "content": "🩻 견갑배신경(DSN, Dorsal Scapular Nerve)이란?\n\n견갑배신경은 경추 5번(C5) 신경뿌리에서 나와 목 사각근을 통과한 뒤, 견갑거근(Levator Scapulae)과 능형근(Rhomboid) 사이를 지나 날개뼈 안쪽 경계를 따라 내려가는 신경입니다.\n\n이 신경은 어깨와 등의 안정적인 움직임을 담당하지만, 고개가 앞으로 빠지는 거북목 자세나 굽은 어깨로 인해 주위 근육이 지속적으로 긴장하면 신경이 죄어들면서 깊은 신경통을 유발하게 됩니다."
            },
            {
                "type": "text",
                "content": "⚡ 견갑배신경 포착의 대표 증상\n\n1️⃣ 날개뼈 안쪽 깊은 곳의 타는 듯하거나 찌르는 통증 (눌러도 원인이 잡히지 않음)\n2️⃣ 목을 돌리거나 숙일 때 등 뒤쪽으로 전기가 통하듯 찌릿함\n3️⃣ 오랜 시간 앉아있을 때 통증이 더욱 악화됨\n4️⃣ 어깨와 목 뒤쪽이 항상 굳어있고 무거운 느낌"
            },
            {
                "type": "text",
                "content": "🌿 초음파 가이드 하이드로다이섹션 약침술 & 전침 치료\n\n저희 경희무교로한의원에서는 초음파 장비를 이용해 실시간으로 견갑배신경의 주행 경로와 주변 유착 부위를 정확히 확인합니다.\n\n🔹 초음파 가이드 하이드로다이섹션: 정밀 초음파 관찰 하에 신경을 짓눌러 압박하는 유착된 근막 사이로 순수 약침액을 주입하여 신경 압박을 정밀하게 분리해 냅니다.\n🔹 전침치료 병행: 깊은 층에 위치한 견갑거근과 능형근에 미세 전극 자극을 전달하여 굳어진 근육 긴장을 빠르게 해소하고 혈액 순환을 촉진시킵니다.\n\n치료 후 신경 압박이 해소되면 묵직하고 찌르던 등 통증이 즉각적으로 가벼워지는 것을 경험하실 수 있습니다."
            },
            {
                "type": "text",
                "content": "⚙️ 재발 방지를 위한 생활 습관 TIP\n\n✅ 1시간마다 가슴 펼치기 스트레칭 시행\n✅ 모니터 높이를 눈높이에 맞추어 고개가 숙여지지 않도록 조정\n✅ 스마트폰 사용 시 고개를 숙이지 말고 눈높이로 들고 보기\n✅ 수면 시 목 곡선을 지지해 주는 적절한 높이의 경추베개 사용"
            }
        ]
    },
    {
        "id": "blog-3",
        "title": "손목터널증후군, PDRN 재생약침으로 효과적인 치료!",
        "date": "2025. 07. 15",
        "image": "/assets/blog/blog-3-thumb.png",
        "preview": "엄지, 검지, 중지가 저리고 밤마다 손목 통증으로 잠을 깬다면? 연어 DNA 추출 PDRN 재생약침과 초음파 하이드로다이섹션 비수술 치료법을 확인하세요.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-3-thumb.png"
            },
            {
                "type": "text",
                "content": "🖐️ 손목터널증후군(수근관증후군)이란?\n\n손목터널증후군은 손목 내부의 좁은 통로(수근관)를 지나가는 정중신경이 압박을 받아 손가락과 손바닥에 통증, 저림, 감각 이상을 일으키는 대표적인 수부 신경 질환입니다.\n\n컴퓨터, 스마트폰 사용이 많은 사무직 직장인은 물론 주부, 손을 자주 사용하는 분들에게 흔히 발생합니다."
            },
            {
                "type": "text",
                "content": "⚠️ 주요 원인 및 체크해 봐야 할 증상\n\n[주요 원인]\n- 반복적인 손목 굴곡 및 과도한 사용\n- 손목 관절의 염증 및 수근관 횡수근응간의 두꺼워짐\n- 임신, 당뇨, 갑상선 질환 등 부종을 유발하는 내과적 요인\n\n[주요 증상]\n1️⃣ 엄지, 검지, 중지 및 손바닥 부위의 저림과 화끈거림\n2️⃣ 야간 통증: 밤에 통증이 심해져 자다가 깨서 손을 털게 됨\n3️⃣ 악력 저하: 젓가락질이 어색해지거나 단추를 채우기 힘들고 물건을 자꾸 떨어뜨림"
            },
            {
                "type": "text",
                "content": "🐟 PDRN 재생약침의 4가지 핵심 효과\n\nPDRN(Polydeoxyribonucleotide)은 연어의 세포에서 추출한 고순도 DNA 조각으로, 인체 세포 재생 활성화 성분입니다.\n\n1. 강력한 항염증 작용: 압박을 받아 붉게 부어오른 정중신경 주변의 염증을 신속히 완화\n2. 신경 세포 재생 촉진: 손상된 신경 섬유의 자체 회복 및 신경 전도 속도 개선\n3. 미세혈관 신생 (Angiogenesis): 신경 주위에 미세 혈관 형성을 유도하여 억제된 혈류 및 영양 공급 원활화\n4. 조직 유연성 회복: 수근관 내부 인대와 건의 유착을 풀어주고 유연성 강화"
            },
            {
                "type": "text",
                "content": "🩺 경희무교로한의원의 3단계 정밀 비수술 치료\n\n1단계 [정밀 초음파 검사]\n- 최첨단 근골격계 초음파를 통해 정중신경의 두께, 단면적 및 수근관 내부 압박 정도를 객관적으로 측정합니다.\n\n2단계 [PDRN 재생약침 하이드로다이섹션]\n- 초음파 화면을 실시간으로 확인하면서 짓눌린 정중신경과 주변 횡수근응간 사이에 PDRN 약침액을 유입시켜 유착을 부드럽게 분리(Hydrodissection)해 냅니다.\n\n3단계 [전침 & 근막 이완 치료]\n- 손목 및 전완부(팔뚝) 근육의 긴장을 해소하여 손목으로 가는 압박 과부하를 최소화합니다."
            },
            {
                "type": "text",
                "content": "✨ 수술 걱정 없는 근본 치료\n\n손목터널증후군은 초기 정밀 진단과 적절한 치료가 이루어지면 수술 없이도 충분히 뛰어난 회복 효과를 얻을 수 있습니다.\n손저림과 통증을 방치하지 마시고, 초음파 정밀 하이드로다이섹션 치료로 안전하게 일상의 편안함을 회복하세요!"
            }
        ]
    },
    {
        "id": "blog-4",
        "title": "🏃‍♂️ 런너의 적, 아킬레스건 통증! '아킬레스건 병변' 완벽 가이드",
        "date": "2026. 02. 12",
        "image": "/assets/blog/blog-4-thumb.png",
        "preview": "달리기나 운동 후 발뒤꿈치가 찌릿하거나 부어오르나요? 아킬레스건 병변의 원인, 톰슨 자가검사, 편심성 재활운동 및 PDRN 하이드로다이섹션 치료법을 알아봅니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-4-thumb.png"
            },
            {
                "type": "text",
                "content": "🏃‍♂️ 런너를 위협하는 아킬레스건 통증!\n\n달리기나 러닝, 스포츠를 즐기는 분들이라면 한 번쯤 겪어보셨을 '아킬레스건 병변(Achilles Tendinopathy)'.\n발뒤꿈치 위쪽 2~6cm 부위가 찌릿하거나 붓는 통증이 발생한다면 단순 피로가 아닌 힘줄 조직의 퇴행성 변화 및 유착을疑심해야 합니다."
            },
            {
                "type": "text",
                "content": "📍 부위별 분류: 부착부 vs 비부착부\n\n- 부착부 병변: 뒤꿈치 뼈에 바로 붙어있는 부위(2cm 이내) 통증\n- 비부착부 병변: 뒤꿈치 뼈 2~6cm 위쪽 힘줄 부위 통증 (이 부위는 혈액 순환이 상대적으로 취약하여 손상이 5배 이상 자주 발생합니다!)"
            },
            {
                "type": "text",
                "content": "⚡ 주요 위험 요인과 자가 검사 (톰슨 테스트)\n\n[주요 원인]\n- 급격한 러닝량 증대 및 하체 훈련 오버로딩\n- 딱딱한 지면 러닝 및 낡은 운동화 착용\n- 평발 또는 요족 등 발 아치 불균형\n\n[톰슨 자가 테스트]\n엎드린 상태에서 종아리를 손으로 쥐어짰을 때, 발바닥이 밑으로 움직이지 않는다면 '아킬레스건 파열'을 의심하고 즉시 정밀 검사를 받아야 합니다."
            },
            {
                "type": "text",
                "content": "🌿 편심성 운동(알프레드슨 프로토콜) & PDRN 하이드로다이섹션\n\n✅ 편심성 재활(Eccentric Exercise): 계단 끝에 발앞쪽만 걸치고 뒤꿈치를 천천히 내리며 버티는 훈련으로 힘줄 강화\n✅ PDRN 약침 & 하이드로다이섹션: 정밀 초음파 관찰 하에 손상된 힘줄 주변 신생 혈관과 유착을 미세 분리하고 세포 재생 촉진\n\n스테로이드 주사는 힘줄 파열 위험을 높일 수 있으므로, 안전한 PDRN 재생약침과 체계적 재활운동이 권장됩니다."
            }
        ]
    },
    {
        "id": "blog-5",
        "title": "종아리에서 '퍽' 소리가? 테니스 레그(비복근 파열), 초음파 진단부터 PDRN 재생 치료까지",
        "date": "2026. 02. 11",
        "image": "/assets/blog/blog-5-thumb.png",
        "preview": "운동 중 종아리 뒤쪽에서 갑자기 '퍽' 하고 끊어지는 통증이 발생했다면? 테니스 레그(비복근 파열)의 초음파 정밀 진단과 PDRN 재생 치료를 소개합니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-5-thumb.png"
            },
            {
                "type": "text",
                "content": "🎾 테니스 레그(비복근 내측두 파열)란?\n\n테니스, 구기 종목, 갑작스러운 쾌속 러닝 중 종아리 안쪽 근육(비복근 내측두)이 강한 부하를 견디지 못하고 파열되는 손상입니다.\n누군가 뒤에서 공이나 돌로 찌른 듯한 느낌과 함께 '퍽' 소리가 나는 것이 대표적 특징입니다."
            },
            {
                "type": "text",
                "content": "🔬 초음파 정밀 진단의 필수성\n\n단순 근육 뭉침으로 방치하면 파열 부위에 혈종이 고이거나 무리하게 흉터 조직으로 붙어 만성 통증을 유발합니다.\n고해상도 근골격계 초음파를 통해 파열 깊이, 혈종 크기, 근건 이행부 손상 정도를 정확히 파악하는 것이 골든타임의 핵심입니다."
            },
            {
                "type": "text",
                "content": "💉 PDRN 재생약침 & 한방 통합 치료\n\n- PDRN 연어약침: 파열된 비복근 조직에 아데노신 A2A 수용체를 활성화하여 염증을 억제하고 파열된 섬유의 빠르게 부착 재생\n- 전침 & 부항 요법: 근육 주변 어혈을 제거하고 미세 혈류 공급을 유도하여 붓기와 멍 감소\n- 원심성 재활 (Heel Drop): 통증 완화 후 계단 뒤꿈치 내리기 훈련으로 탄력 강화"
            }
        ]
    },
    {
        "id": "blog-6",
        "title": "📝 [건강 가이드] 무릎 안쪽 통증의 정체, '거위발 건염'과 굿바이 하는 법!",
        "date": "2026. 02. 11",
        "image": "/assets/blog/blog-6-thumb.png",
        "preview": "계단을 오르내리거나 밤에 누울 때 무릎 안쪽 아래가 욱신거리나요? 거위발 건염의 원인과 햄스트링 셀프 스트레칭 2종, 한방 재생 치료법을 안내합니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-6-thumb.png"
            },
            {
                "type": "text",
                "content": "🪿 왜 이름이 '거위발' 건염일까요?\n\n무릎 안쪽 아래에는 봉공근, 박근, 반건양근이라는 3개의 근육 힘줄이 하나로 모여 뼈에 붙는데, 그 모양이 마치 거위의 발바닥을 닮아 '거위발(Pes Anserine)'이라 불립니다.\n이 힘줄과 점액낭에 마찰과 염증이 생기는 질환이 바로 거위발 건염입니다."
            },
            {
                "type": "text",
                "content": "⚠️ 이런 분들에게 자주 발생합니다!\n\n1️⃣ 무릎 관절염을 이미 앓고 계신 분\n2️⃣ 과체중으로 인해 무릎 내측에 체중 과부하가 걸리는 경우\n3️⃣ 허벅지 뒤쪽 햄스트링 근육이 뻣뻣하게 굳어있는 경우\n4️⃣ 계단을 오르내릴 때 무릎 안쪽 2~3cm 아래가 찌릿한 경우"
            },
            {
                "type": "text",
                "content": "🏋️‍♂️ 셀프 스트레칭 & 초음파 약침 치료\n\n- 서서 하는 햄스트링 스트레칭: 의자에 발을 올리고 상체를 곧게 유지하며 앞으로 숙이기\n- 누워서 하는 햄스트링 스트레칭: 누운 자세에서 허벅지 뒤를 잡고 무릎을 천장 향해 펴기\n- 초음파 약침 치료: 염증이 유발된 거위발 점액낭 부위에 초음파 관찰 하 항염증 약침 주입으로 빠른 회복 도모"
            }
        ]
    },
    {
        "id": "blog-7",
        "title": "[건강 가이드] 무릎 앞쪽이 욱신? '점퍼의 무릎' 슬개건병증 완벽 정리",
        "date": "2026. 02. 11",
        "image": "/assets/blog/blog-7-thumb.png",
        "preview": "점프나 스쿼트 후 무릎 뚜껑뼈 바로 아래가 아프신가요? 슬개건병증(점퍼의 무릎)의 원인과 대용량 약침(HVIGI) 하이드로다이섹션 치료법을 정밀 안내합니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-7-thumb.png"
            },
            {
                "type": "text",
                "content": "🏀 점퍼의 무릎(Jumper's Knee) 슬개건병증이란?\n\n무릎 뚜껑뼈(슬개골) 하극에서 정강이뼈로 이어지는 슬개건 힘줄에 반복적인 충격과 과부하가 누적되어 발생하는 퇴행성 건병증입니다.\n농구, 배구, 러닝, 스쿼트 등 무릎을 강하게 구부렸다 펴는 동작에서 주로 발생합니다."
            },
            {
                "type": "text",
                "content": "🔍 왜 쉬어도 낫지 않고 10년 넘게 만성화될까요?\n\n단순 미세 염증이 아니라, 힘줄 내부에 통증을 유발하는 '비정상 미세 신생 혈관과 신경'이 자라 들어오기 때문입니다.\nRoyal London Hospital Test: 무릎을 폈을 때 누르면 아프지만, 90도 구부린 상태에서 누르면 통증이 줄어든다면 슬개건병증 확률이 매우 높습니다."
            },
            {
                "type": "text",
                "content": "💉 대용량 약침요법(HVIGI) & HSR 재활\n\n- 대용량 약침 하이드로다이섹션: 슬개건과 호파 지방 패드(Hoffa's Fat Pad) 사이에 약침액을 주입해 통증을 유발하는 신생 신경과 유착을 물리적으로 박리\n- HSR(Heavy Slow Resistance) 훈련: 무거운 무게를 천천히 들어 올리는 운동으로 슬개건 콜라겐 재배열 촉진"
            }
        ]
    },
    {
        "id": "blog-8",
        "title": "[러닝 가이드] 달릴 때 옆쪽 고관절이 쑤시나요? '단순 염증'이 아닐 수 있습니다",
        "date": "2026. 02. 06",
        "image": "/assets/blog/blog-8-thumb.png",
        "preview": "달리기 후 고관절 옆쪽이 쑤시거나 뚝뚝 소리가 나나요? 단순 점액낭염이 아닌 대전자 통증 증후군(GTPS)과 발음성 고관절의 정밀 비수술 한방 치료법을 안내해 드립니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-8-img1.png"
            },
            {
                "type": "text",
                "content": "🏃‍♂️ 달릴 때 옆쪽 고관절이 쑤시나요?\n\n즐겁게 달리다 보면 어느 날 문득 고관절 옆쪽(대전자 부위)에 찌릿하거나 묵직한 통증이 느껴질 때가 있습니다. 많은 분이 이를 단순히 '점액낭염'이라고 생각하고 소염제만 드시곤 하는데요. 하지만 최근 의학계에서는 이 통증의 정체를 다르게 보고 있습니다.\n\n오늘은 러너들을 괴롭히는 대전자 통증 증후군(GTPS)과 염발음성 고관절에 대해 자세히 알아보고, 효과적인 최신 치료법들을 소개해 드립니다."
            },
            {
                "type": "text",
                "content": "1️⃣ \"점액낭염인 줄 알았는데?\" – 대전자 통증 증후군 (GTPS)\n\n과거에는 고관절 옆쪽이 아프면 무조건 '전자 점액낭염'이라 불렀지만, 실제로는 점액낭 자체보다 중둔근과 소둔근 힘줄의 문제인 경우가 훨씬 많습니다. 그래서 지금은 이를 통칭하여 대전자 통증 증후군(GTPS)이라고 부릅니다.\n\n[이럴 때 의심해 보세요!]\n- 달리기 후 혹은 오래 서 있을 때 고관절 옆쪽이 쑤신다.\n- 통증이 있는 쪽으로 옆으로 누워 자기가 힘들다.\n- 다리를 꼬고 앉으면 통증이 심해진다.\n- 심한 경우 다리를 절뚝거리게 된다."
            },
            {
                "type": "text",
                "content": "2️⃣ \"소리가 나요!\" – 발음성 고관절 (Snapping Hip)\n\n고관절을 움직일 때마다 '뚝, 뚝' 소리가 나거나 뭔가 걸리는 느낌이 든다면 발음성 고관절일 가능성이 큽니다. 주로 장경인대(ITB)가 고관절 뼈 위를 지나가며 튕겨질 때 발생하며, 마라토너들에게 매우 흔한 증상입니다."
            },
            {
                "type": "text",
                "content": "3️⃣ 런너를 위한 맞춤형 치료 솔루션\n\n단순한 휴식만으로 통증이 잡히지 않는다면, 힘줄의 회복을 돕고 유착을 해소하는 적극적인 치료가 필요합니다.\n\n- 침 & 약침술: 과도하게 긴장된 중둔근과 장경인대 주변 근육을 이완시켜 통증을 빠르게 완화하고 강력한 항염증 효과 제공\n- 초음파 가이드 하이드로다이섹션(Hydrodissection): 초음파로 병변 부위를 실시간 관찰하며 천연 약물을 주입해 유착된 힘줄, 신경, 근막을 부드럽게 분리. 인대가 뼈에 걸려 마찰이 생기는 발음성 고관절 유착 해소에 매우 효과적\n- PDRN 주사 (조직재생주사): 연어 추출 DNA 성분을 이용해 손상된 힘줄과 인대의 세포 재생 촉진"
            },
            {
                "type": "text",
                "content": "4️⃣ 자가 진단 및 정밀 검사의 중요성\n\n- Ober's 테스트 & 트렌델렌버그(Trendelenburg) 테스트: 달리기 전후로 중둔근의 근력과 장경인대 긴장도를 체크해 보세요. 한쪽 다리로 섰을 때 골반이 반대쪽으로 떨어진다면 중둔근 보강 운동이 시급하다는 신호입니다."
            },
            {
                "type": "text",
                "content": "증상이 만성적이라면 초음파나 MRI를 통해 힘줄의 파열 정도나 유착 유무를 정확히 파악해야 합니다. 특히 초음파는 움직이면서 통증 부위를 확인할 수 있어 발음성 고관절 진단에 매우 유리합니다.\n\n🏃‍♂️ 에디터의 핵심 요약\n- 고관절 옆 통증은 단순 염증보다 힘줄의 병변(GTPS)인 경우가 많습니다.\n- 침술과 약침술은 근육 긴장 해소와 염증 완화에 탁월합니다.\n- 하이드로다이섹션은 유착된 조직을 물리적으로 떼어내어 부드러운 움직임을 만들어 줍니다.\n- PDRN 주사는 손상된 조직의 근본적인 재생을 돕습니다.\n\n통증을 참고 달리는 것은 부상을 키우는 지름길입니다. 정확한 진단과 함께 나에게 맞는 치료법으로 건강하게 운동장에 복귀하시길 바랍니다!"
            }
        ]
    },
    {
        "id": "blog-9",
        "title": "[러닝 가이드] 엉덩이 밑 통증, 단순 햄스트링일까 좌골신경통일까? (자가 진단법 포함)",
        "date": "2026. 02. 06",
        "image": "/assets/blog/blog-9-thumb.png",
        "preview": "달릴 때마다 다시 도지는 엉덩이 아래 통증! 햄스트링 힘줄(PHT) 손상일까요, 아니면 좌골 신경통일까요? Bent-knee 및 Slump 자가 검사법과 감별 가이드를 확인하세요.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-9-img1.png"
            },
            {
                "type": "text",
                "content": "🏃‍♂️ 엉덩이 아래쪽 통증, 정체가 무엇일까요?\n\n마라톤을 즐기는 러너들에게 ‘엉덩이 아래쪽 통증’은 기록 경신을 방해하는 아주 고약한 불청객입니다.\n푹 쉬면 나을 줄 알았는데 달릴 때마다 다시 도지는 통증, 도대체 햄스트링 힘줄(PHT) 문제일까요, 아니면 좌골 신경(Sciatic Nerve) 문제일까요?\n\n오늘은 마라토너가 꼭 알아야 할 두 질환의 감별 포인트와 전문가들이 실시하는 상세 검사법을 정리해 드립니다."
            },
            {
                "type": "text",
                "content": "1️⃣ 통증의 위치와 양상: 어디가 어떻게 아픈가요?\n\n- 햄스트링 손상 (PHT): 통증이 주로 엉덩이 하부(좌골 결절 부근)에 국소적으로 나타납니다. 묵직하게 당기거나 찢어지는 듯한 느낌이 듭니다.\n- 좌골 신경통: 통증이 무릎 아래, 종아리, 발가락까지 전기 오듯 뻗친다면 신경 문제를 강력히 의심해야 합니다. 햄스트링 부상 후 생긴 흉터 조직이 신경을 누르며 발생하기도 합니다."
            },
            {
                "type": "text",
                "content": "2️⃣ 상세 검사 ①: 햄스트링 건병증 확인을 위한 ‘Bent-knee stretch 테스트’\n\n이 검사는 햄스트링 힘줄이 골반 뼈에 붙는 부위를 최대한 압박하고 늘려 통증을 유발해 보는 방법입니다.\n\n[수행 방법]\n- 준비: 바닥에 똑바로 눕습니다.\n- 동작: 아픈 쪽 다리의 고관절(골반)과 무릎을 가슴 쪽으로 최대한 구부립니다.\n- 검사: 그 상태에서 무릎을 천천히 하늘을 향해 폅니다.\n- 변형(Modified): 만약 천천히 할 때 통증이 없다면, 무릎을 빠르게(Rapidly) 펴봅니다.\n\n[결과 해석]\n무릎을 펴는 순간 엉덩이 뼈(좌골 결절) 부위에서 평소 달릴 때 느끼던 통증이 재현된다면, 햄스트링 기시부 건병증(PHT)일 가능성이 매우 높습니다."
            },
            {
                "type": "image",
                "content": "/assets/blog/blog-9-img2.png"
            },
            {
                "type": "text",
                "content": "3️⃣ 상세 검사 ②: 신경 문제를 잡아내는 ‘Slump(슬럼프) 테스트’\n\n슬럼프 테스트는 척추와 다리를 잇는 신경을 길게 늘려, 신경이 압박받고 있는지 확인하는 가장 대표적인 검사입니다.\n\n[수행 방법]\n- 시작: 의자나 테이블 끝에 허리를 곧게 펴고 걸터앉습니다. (손은 뒤짐을 집니다.)\n- 슬럼프(Slump): 등을 구부정하게 숙이고 어깨를 밑으로 떨어뜨립니다.\n- 고개 숙이기: 턱을 가슴 쪽으로 바짝 당겨 목 뒤까지 신경을 늘립니다.\n- 다리 펴기: 이 자세를 유지하며 아픈 쪽 무릎을 천천히 일자로 폅니다.\n- 발목 당기기: 마지막으로 발가락을 내 얼굴 쪽으로 바짝 당깁니다(Dorsiflexion).\n\n[결과 해석]\n다리를 펴거나 발목을 당길 때 다리 뒤쪽으로 강한 통증이나 저림이 느껴진다면 양성입니다.\n핵심 포인트: 이때 숙였던 고개만 위로 들어보세요. 만약 고개를 들었을 때 다리의 통증이 줄어든다면, 이는 근육 문제가 아니라 좌골 신경통(신경 긴장)임을 의미합니다."
            },
            {
                "type": "text",
                "content": "4️⃣ 증상 유발 요인: 언제 더 아픈가요?\n\n- 햄스트링: 언덕 달리기, 인터벌 훈련, 딱딱한 의자에 앉아 있을 때 심해집니다.\n- 좌골 신경통: 허리를 숙이는 동작이나 신경이 길게 늘어나는 자세에서 증상이 재현됩니다."
            },
            {
                "type": "text",
                "content": "🏃‍♂️ 런너를 위한 조언\n\n엉덩이 통증을 무작정 '근육 뭉침'으로 치부하고 스트레칭만 과하게 하면, 오히려 신경을 더 자극해 악화될 수 있습니다. 위 테스트를 통해 나의 통증이 근육 문제인지 신경 문제인지 먼저 파악하고 전문가를 찾으세요!"
            }
        ]
    },
    {
        "id": "blog-10",
        "title": "🩺 초음파 가이드 PDRN 약침 안내 - 정확하고 안전한 재생 치료",
        "date": "2025. 11. 25",
        "image": "/assets/blog/blog-10-thumb.jpg",
        "preview": "퇴행성 관절염, 디스크, 테니스엘보, 족저근막염 치료를 위한 초음파 가이드 PDRN 재생약침의 안전성과 과학적 회복 메커니즘을 상세히 안내해 드립니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-10-thumb.jpg"
            },
            {
                "type": "text",
                "content": "✨ PDRN 재생약침이란?\n\nPDRN(Polydeoxyribonucleotide)은 연어 DNA에서 추출한 생체 적합성 성분으로, 손상된 관절, 인대, 힘줄 세포의 증식과 신생 혈관 형성을 유도하여 통증을 근본적으로 치료합니다."
            },
            {
                "type": "text",
                "content": "🎯 주요 적용 질환\n\n- 관절 질환: 무릎·어깨 퇴행성 관절염, 연골 손상, 회전근개 파열\n- 척추 질환: 목·허리 디스크, 척추관 협착증, 만성 요통\n- 힘줄·인대: 테니스엘보, 족저근막염, 아킬레스건염\n- 근막 통증: 만성 근막통증증후군 및 어깨 뭉침"
            },
            {
                "type": "text",
                "content": "🛡️ 초음파 가이드의 안전성\n\nRMSK 자격 전문의가 고해상도 초음파 영상을 통해 신경 및 혈관을 실시간 확인하며 시술하므로 매우 안전하며 부작용 위험이 최소화됩니다."
            }
        ]
    },
    {
        "id": "blog-11",
        "title": "비복근 통증과 경련, 이제 초음파 유도 치료로 해결하세요!",
        "date": "2025. 11. 07",
        "image": "/assets/blog/blog-11-thumb.jpg",
        "preview": "비복근(종아리 근육) 통증과 밤마다 찾아오는 극심한 경련! 보존적 치료를 넘어 초음파 유도 진단, PDRN 재생약침, 하이드로다이섹션, 전침 치료의 통합 프로토콜을 확인하세요.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-11-thumb.jpg"
            },
            {
                "type": "text",
                "content": "🦵 비복근 통증과 경련, 이제 초음파 유도 치료로 해결하세요!\n\n비복근(종아리 근육) 통증과 경련으로 고생하고 계신가요?\n운동 후 찾아오는 극심한 통증, 밤에 갑자기 다리를 쥐어짜는 듯한 경련... 이러한 증상들은 운동선수는 물론 일반인들에게도 매우 흔하게 나타나는 문제입니다. 과도한 사용, 잘못된 자세, 근막의 문제 등 다양한 원인이 있을 수 있습니다.\n\n일반적인 보존적 치료로는 일시적인 완화만 가능한 경우가 많습니다. 하지만 근본적인 조직 문제를 해결하려면 좀 더 정확하고 효과적인 접근이 필요합니다. 저희 클리닉에서는 초음파 유도 진단과 PDRN 주사, 하이드로다이섹션, 전침 치료를 결합한 통합 프로토콜로 환자분들께 탁월한 치료 결과를 제공하고 있습니다."
            },
            {
                "type": "text",
                "content": "🔬 정밀한 초음파 진단으로 시작합니다\n\n모든 치료는 정확한 진단에서 시작됩니다. 고해상도 근골격계 초음파를 통해 실시간으로 근육 내부를 관찰하면서, 근섬유 손상, 근막이 두꺼워진 부위, 통증을 유발하는 압통점, 조직이 제대로 움직이지 못하는 부위를 정확히 찾아냅니다.\n\n특히 근육을 수축시키면서 동적으로 검사하면, 일반 영상검사에서는 보이지 않던 기능적 문제점까지 확인할 수 있습니다. 또한 비복근-가자미근 접합부의 문제, 근육 사이 액체 저류 등 통증을 계속 만들어내는 숨은 원인들도 함께 파악할 수 있습니다."
            },
            {
                "type": "text",
                "content": "✨ 재생 치료의 핵심, PDRN 주사와 하이드로다이섹션\n\nPDRN(폴리데옥시리보뉴클레오타이드)은 조직 재생을 돕는 생물학적 치료제입니다. 아데노신 A2A 수용체를 활성화시켜 새로운 혈관 생성을 촉진하고, 염증을 조절하며, 세포 증식을 도와줍니다. 더 나아가 DNA 합성을 촉진해 손상된 조직이 분자 수준에서 빠르게 회복되도록 돕습니다.\n\n여기에 하이드로다이섹션 기법을 함께 적용합니다. 초음파로 정확한 위치를 확인하면서 생리식염수를 주입해 서로 달라붙은 근막층을 기계적으로 분리시킵니다. 이렇게 공간을 만들어주면 조직이 부드럽게 움직일 수 있게 되고, PDRN도 더 효과적으로 퍼져나갈 수 있습니다.\n\n하이드로다이섹션으로 만성 근육 통증의 생체역학적 문제를 해결하고, PDRN으로 재생을 촉진하는 이중 접근법이 시너지 효과를 만들어냅니다."
            },
            {
                "type": "text",
                "content": "⚡ 전침으로 효과를 극대화합니다\n\n전침 치료는 PDRN의 재생 효과를 더욱 강화시켜줍니다. 신경을 조절하고 국소 혈류를 증가시켜, 비복근과 다리 후면 근육들과 관련된 경혈점을 자극합니다. 그 결과 근육이 이완되고, 우리 몸의 자연적인 통증 조절 물질이 분비되며, 치유에 필요한 혈액 순환이 개선됩니다."
            },
            {
                "type": "text",
                "content": "📊 환자분들이 경험하는 실제 효과\n\n임상에서 확인된 결과들을 말씀드리면, 환자분들은 보통 2-3회 치료 후 50-70%의 통증 감소를 경험하십니다. 근육이 점점 유연해지고, 경련이 나타나는 빈도가 줄어들며, 운동할 때 더 편안해집니다.\n\n특히 좋은 점은 PDRN의 재생 효과가 주사를 맞은 후에도 몇 주간 계속된다는 것입니다. 3개월 후 추적 관찰에서도 치료 효과가 잘 유지되는 것을 확인할 수 있습니다."
            },
            {
                "type": "text",
                "content": "🌿 이 치료의 핵심 장점\n\n- 통증 완화: 신경 압박과 유착으로 인한 통증을 효과적으로 해소합니다.\n- 기능 회복: 근육의 활주 운동을 개선하고 긴장을 줄여 정상적인 기능을 되찾을 수 있습니다.\n- 최소 침습적: 외래에서 간단하게 시행할 수 있는 최소 침습 시술입니다.\n- 일상 복귀가 빠름: 대부분의 환자분들이 시술 직후 바로 일상생활로 돌아가실 수 있습니다.\n\n난치성 비복근 통증과 관련 질환으로 고생하고 계신다면, 초음파 유도 통합 치료를 고려해보시기 바랍니다. 정확한 진단과 효과적인 치료로 건강한 일상을 되찾으실 수 있도록 도와드리겠습니다!"
            }
        ]
    },
    {
        "id": "blog-12",
        "title": "# 흉요근막 통증으로 인한 만성 요통, PDRN 재생약침으로 해결하세요! - 경희무교로한의원",
        "date": "2025. 01. 09",
        "image": "/assets/blog/blog-12-thumb.jpg",
        "preview": "허리를 굽히거나 오래 앉아있을 때 묵직하게 통증이 유발되나요? 흉요근막 통증과 요방형근·장요근 유착을 해소하는 PDRN 재생약침 하이드로다이섹션 치료법을 안내해 드립니다.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-12-thumb.jpg"
            },
            {
                "type": "text",
                "content": "🩺 흉요근막(Thoracolumbar Fascia) 통증이란?\n\n흉요근막은 허리와 등 부위를 감싸는 중요한 결합조직으로, 척추의 안정성과 체간의 움직임에 핵심적인 역할을 합니다.\n이 부위의 통증은 주로 요방형근과 장요근의 긴장과 유착으로 인해 발생하며, 다음과 같은 증상을 동반합니다:\n\n- 허리를 구부리거나 펼 때 통증\n- 장시간 앉아있을 때 통증 악화\n- 허리와 골반의 뻣뻣함\n- 허리 움직임의 제한\n- 만성적인 요통\n\n특히 현대인들의 잘못된 자세와 운동 부족은 이러한 통증을 더욱 악화시키는 주요 원인이 됩니다."
            },
            {
                "type": "youtube",
                "content": "YWZs1ze7xL8"
            },
            {
                "type": "text",
                "content": "✨ PDRN 재생약침의 치료 효과\n\nPDRN(Polydeoxyribonucleotide)은 연어 DNA에서 추출한 성분으로, 다음과 같은 뛰어난 효과를 보입니다:\n\n1. 강력한 항염증 작용\n- 만성화된 근막 염증을 효과적으로 감소\n- 즉각적인 통증 완화 및 근육 긴장 해소\n\n2. 조직 재생 촉진\n- 손상된 근막 조직의 재생 촉진\n- 콜라겐 생성 증가 및 근막의 탄력성 회복\n\n3. 혈류 개선 효과\n- 미세혈관 생성 촉진 및 산소·영양 공급 증가로 근육 재생 환경 조성"
            },
            {
                "type": "text",
                "content": "🔬 체계적인 치료 과정\n\n1. 정밀 초음파 검사\n- 최신 초음파 장비로 요방형근과 장요근의 상태 확인\n- 근막 유착 및 손상 정도 파악 후 맞춤형 치료 계획 수립\n\n2. PDRN 재생약침 하이드로다이섹션 치료\n- 초음파 유도하에 정확한 위치에 PDRN 주입\n- 하이드로다이섹션으로 유착된 근막 분리 및 재생 환경 조성\n\n3. 전침요법\n- 근육의 긴장 완화, 혈액순환 촉진 및 치료 효과의 지속성 강화"
            },
            {
                "type": "video",
                "content": "/assets/blog/blog-12-video.mp4",
                "poster": "/assets/blog/blog-12-thumb.jpg"
            },
            {
                "type": "text",
                "content": "🌿 뛰어난 치료 효과\n\nPDRN 재생약침 치료는 다음과 같은 장점이 있습니다:\n- 통증의 즉각적인 감소\n- 근막의 유연성 회복\n- 허리 기능의 정상화 및 재발 방지\n- 일상생활로의 빠른 복귀\n\n많은 환자분들이 이미 저희 한의원의 PDRN 재생약침 치료를 통해 만성 요통에서 벗어나셨습니다. 흉요근막 통증으로 일상생활에 어려움을 겪고 계신 분들의 건강한 삶을 위해 저희 한의원이 함께하겠습니다."
            }
        ]
    },
    {
        "id": "blog-13",
        "title": "아킬레스건염, PDRN 재생약침으로 안전하고 효과적인 치료! - 경희무교로한의원",
        "date": "2025. 01. 09",
        "image": "/assets/blog/blog-13-thumb.jpg",
        "preview": "아침 첫 걸음시 심한 발뒤꿈치 통증이 느껴지나요? 과도한 운동이나 충격으로 인한 아킬레스건염, PDRN 재생약침과 하이드로다이섹션 치료로 극복하세요.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-13-thumb.jpg"
            },
            {
                "type": "video",
                "content": "/assets/blog/blog-13-video.mp4",
                "poster": "/assets/blog/blog-13-thumb.jpg"
            },
            {
                "type": "text",
                "content": "🦶 아킬레스건염이란?\n\n아킬레스건은 종아리 근육과 발뒤꿈치를 연결하는 인체에서 가장 강하고 두꺼운 힘줄입니다. 하지만 과도한 운동이나 잘못된 자세, 반복적인 충격으로 인해 염증이 발생할 수 있는데, 이를 아킬레스건염이라고 합니다.\n\n주요 증상으로는:\n- 발뒤꿈치와 아킬레스건 부위의 통증\n- 아침 첫 걸음시 심한 통증\n- 계단 오르내리기의 어려움\n- 장시간 운동 후 통증 악화\n등이 있습니다."
            },
            {
                "type": "text",
                "content": "✨ PDRN 재생약침의 혁신적인 효과\n\nPDRN(Polydeoxyribonucleotide)은 연어 DNA에서 추출한 성분으로, 아킬레스건염 치료에 탁월한 효과를 보입니다:\n\n1. 강력한 항염증 작용\n- 만성화된 염증을 효과적으로 감소\n- 즉각적인 통증 완화 효과\n\n2. 세포 재생 촉진\n- 손상된 아킬레스건 조직의 재생 촉진\n- 콜라겐 생성 증가로 건 조직 강화\n\n3. 혈관 신생 작용\n- 손상 부위의 혈액순환 개선\n- 영양 공급 증가로 치유 촉진"
            },
            {
                "type": "text",
                "content": "🔬 체계적인 치료 과정\n\n저희 한의원의 아킬레스건염 치료는 다음과 같이 진행됩니다:\n\n1. 정밀 초음파 검사\n- 최신 초음파 장비로 아킬레스건의 손상 정도 파악\n- 염증과 부종의 정확한 위치 확인 및 맞춤형 치료 계획 수립\n\n2. PDRN 재생약침 하이드로다이섹션 치료\n- 초음파 유도하에 정확한 위치에 PDRN 주입\n- 하이드로다이섹션으로 유착 조직 분리 및 건 주변 조직의 재생 환경 조성\n\n3. 전침요법\n- 주변 근육의 긴장 완화, 혈액순환 촉진 및 치료 효과 극대화"
            },
            {
                "type": "text",
                "content": "🌿 뛰어난 치료 효과\n\nPDRN 재생약침 치료는 다음과 같은 뛰어난 효과를 보입니다:\n- 통증의 빠른 감소\n- 아킬레스건의 기능 회복\n- 재발 방지 및 일상생활로의 빠른 복귀\n\n많은 환자분들이 이미 저희 한의원의 PDRN 재생약침 치료를 통해 아킬레스건염을 성공적으로 극복하셨습니다. 만성 아킬레스건염으로 고통받고 계신 분들의 건강한 삶을 위해 저희 한의원이 함께하겠습니다."
            }
        ]
    },
    {
        "id": "blog-14",
        "title": "손목 건초염, PDRN 재생약침으로 안전하고 효과적인 치료!",
        "date": "2025. 01. 09",
        "image": "/assets/blog/blog-14-thumb.jpg",
        "preview": "만성적인 손목 통증으로 일상생활에 불편을 겪고 계신가요? 컴퓨터 작업이나 스마트폰 사용으로 인한 손목 건초염, 초음파 유도하 PDRN 재생약침 하이드로다이섹션 치료로 극복하세요.",
        "blocks": [
            {
                "type": "image",
                "content": "/assets/blog/blog-14-thumb.jpg"
            },
            {
                "type": "video",
                "content": "/assets/blog/blog-14-video.mp4",
                "poster": "/assets/blog/blog-14-thumb.jpg"
            },
            {
                "type": "text",
                "content": "👋 만성적인 손목 통증으로 일상생활에 불편을 겪고 계신가요?\n\n반복적인 손목 사용으로 인한 건초염은 현대인들이 흔히 겪는 질환 중 하나입니다.\n특히 컴퓨터 작업이 많은 직장인, 스마트폰 사용이 잦은 현대인들에게 자주 발생하는 이 질환을 위해, 저희 한의원에서는 최신 의료기술을 접목한 PDRN 재생약침 하이드로다이섹션 치료를 제공하고 있습니다."
            },
            {
                "type": "text",
                "content": "✨ PDRN 재생약침의 놀라운 효과\n\nPDRN(Polydeoxyribonucleotide)은 연어 DNA에서 추출한 성분으로, 세포 재생과 조직 복구에 탁월한 효과를 보이는 것으로 알려져 있습니다. 이 성분의 주요 효과는 다음과 같습니다:\n\n1️⃣ 강력한 항염증 효과: 만성 염증을 효과적으로 감소시켜 건초염으로 인한 통증과 부종을 즉각적으로 줄여줍니다.\n2️⃣ 세포 재생 촉진: 손상된 건초 조직의 재생을 도와 약화된 조직의 회복을 촉진하고 재발 방지에 큰 도움이 됩니다.\n3️⃣ 혈관 생성 촉진: 손상 부위로의 미세 혈액순환을 개선하여 치료 효과를 높이고 회복 기간을 단축시킵니다."
            },
            {
                "type": "text",
                "content": "🔬 체계적인 3단계 치료 과정\n\n1. 정밀 초음파 검사를 통한 정확한 진단\n- 최신 초음파 장비를 통해 건초염의 정확한 위치와 염증 정도를 파악하고 환자 개개인의 상태에 맞는 맞춤형 치료 계획 수립\n\n2. PDRN 재생약침 하이드로다이섹션 치료\n- 초음파 유도 하에 정확한 위치에 PDRN 재생약침을 주입하고, 하이드로다이섹션 기법을 통해 유착된 조직을 부드럽게 분리하여 주변 조직의 재생 촉진\n\n3. 전침요법을 통한 마무리 치료\n- 주변 근육의 긴장 완화, 혈액순환 촉진 및 치료 효과의 극대화"
            },
            {
                "type": "text",
                "content": "🌿 뛰어난 치료 효과 및 비수술 회복\n\n저희 한의원의 PDRN 재생약침 치료는 다음과 같은 우수한 장점이 있습니다:\n- 빠른 통증 감소 효과\n- 손목 기능의 확실한 회복\n- 재발 방지 효과\n- 일상생활로의 신속한 복귀\n\n많은 환자분들이 이미 저희 한의원의 PDRN 재생약침 치료를 통해 만족스러운 결과를 경험하셨습니다. 만성 손목 통증으로 고민하시는 분들의 건강한 삶을 위해 저희 한의원이 함께하겠습니다. 전문적인 상담과 치료를 원하시는 분들은 언제든 방문해 주시기 바랍니다."
            }
        ]
    }
];
