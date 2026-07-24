export type FeaturedProject = {
  title: string;
  subtitle: string;
  period: string;
  contribution?: string;
  responsive?: boolean;
  role: string;
  serviceType: string;
  tech: string[];
  tasks: string[];
  challenge: string;
  solution: string;
  challengeLabel?: string;
  solutionLabel?: string;
  achievement?: string;
  tags: string[];
  link?: string;
  thumbnailDesktop?: string;
  thumbnailMobile?: string;
  thumbnailComposite?: string;
  thumbnailSecondary?: string;
  thumbnailSecondaryBlur?: boolean;
  thumbnailGallery?: string[];
  responsiveMorph?: boolean;
  dualDeviceScroll?: boolean;
  isPrivate?: boolean;
  accent: string;
};

export type SelectedProject = {
  title: string;
  field: string;
  period: string;
  contribution?: string;
  role: string;
  isPrivate?: boolean;
};

export type SkillGroup = {
  category: string;
  items: Array<{
    name: string;
    description: string;
  }>;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "김주연",
  role: "Web Publisher",
  tagline:
    "웹 표준과 접근성을 기반으로 복잡한 서비스를 일관된 UI로 구현합니다.",
  intro:
    "웹디자인부터 프론트엔드 화면 개발까지 경험하며 디자인과 개발 사이를 연결해 왔습니다. 복잡한 요구사항을 공통 UI 기준으로 정리하고, 정확한 구현과 유지보수까지 고려한 화면을 만듭니다.",
  location: "Seoul, Korea",
  email: "juyeoncode@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "/김주연_웹퍼블리셔_경력기술서.pdf",
};

export const keywords = [
  "Public Service",
  "KRDS",
  "GIS / Map UI",
  "Accessibility",
  "Responsive",
  "Component UI",
];

export const stats = [
  { label: "경력", value: "8+", suffix: "Years" },
  { label: "공공·공간정보", value: "10+", suffix: "Projects" },
  { label: "단독 퍼블리싱", value: "100%", suffix: "Key Works" },
];

export const skills: SkillGroup[] = [
  {
    category: "UI Implementation",
    items: [
      { name: "HTML5", description: "시맨틱 마크업과 웹 표준·접근성을 고려한 화면 구조 설계" },
      { name: "CSS3 · SCSS", description: "반응형 레이아웃과 공통 컴포넌트·디자인 토큰 설계" },
      { name: "React", description: "컴포넌트 기반 UI 구현 및 기존 프로젝트 화면 수정·유지보수" },
      { name: "PHP · 그누보드", description: "그누보드 스킨·템플릿 기반 화면 구현 및 게시판 기능 연동" },
      { name: "JSP 환경 협업", description: "JSP 개발 환경에서 퍼블리싱 적용 및 UI·스타일 충돌 대응" },
    ],
  },
  {
    category: "Interaction & UI",
    items: [
      { name: "JavaScript · jQuery", description: "탭·모달·메뉴·폼 인터랙션 구현 및 기존 스크립트 분석·수정" },
      { name: "GSAP · Swiper", description: "반응형 모션과 슬라이드 인터랙션 구현 및 커스터마이징" },
      { name: "Toast UI Grid", description: "레거시 테이블의 Grid 마이그레이션 및 컬럼·헤더·셀 UI 조정" },
    ],
  },
  {
    category: "Standard & Collaboration",
    items: [
      { name: "KRDS", description: "KRDS 토큰 커스텀 및 레거시 UI 적용 기준 수립" },
      { name: "Git", description: "브랜치 기반 형상관리와 개발팀 협업 및 충돌 대응" },
      { name: "Figma", description: "시안·컴포넌트·Variables 분석 및 개발자 모드 기반 협업" },
      { name: "웹 접근성 · QA", description: "웹 표준·접근성 점검 및 현장 감리 지적사항 대응" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "이프커뮤니티",
    role: "Web Publisher",
    period: "2023.06 — 현재",
    summary:
      "공공기관·공공서비스 웹 구축 프로젝트의 UI 퍼블리싱을 담당합니다.",
    highlights: [
      "HTML · SCSS · JavaScript 기반 반응형 웹 퍼블리싱",
      "KRDS 기반 UI 및 버튼·탭·폼·패널 등 공통 컴포넌트 구현",
      "웹표준·웹접근성 시맨틱 마크업 및 키보드 접근성 대응",
      "Git 협업, 퍼블리싱 일정 관리, QA·감리·발주처 검수 대응",
      "지도·공간정보·관리자 시스템 등 복합 UI 화면 구축",
    ],
  },
  {
    company: "밀리언웨어",
    role: "Frontend Developer",
    period: "2022.08 — 2023.05",
    summary:
      "하이닉스 HCP 운영팀에서 React 기반 웹 애플리케이션 개발을 수행했습니다.",
    highlights: [
      "HCP 운영 페이지 UI 개발 및 유지보수",
      "운영 시스템 오류 분석·해결",
      "Redux · Axios를 활용한 API 상호작용 구현",
      "Agile 협업 및 Git 버전 관리",
    ],
  },
  {
    company: "허브패밀리",
    role: "Web Designer / Publisher",
    period: "2020.02 — 2022.08",
    summary:
      "그누보드 기반 퍼블리싱과 브랜드·커머스 콘텐츠 제작을 병행했습니다.",
    highlights: [
      "그누보드 테마·스킨 퍼블리싱 및 수정",
      "자사 홈페이지 디자인 기획·제작, SEO 구조 관리",
      "제품 상세·배너 기획 (자사몰, 롯데마트, 올리브영, 무인양품, 와디즈)",
      "제품 촬영 및 SNS 채널 운영·캠페인 기획",
    ],
  },
  {
    company: "태양 NCK",
    role: "Web Designer / Publisher",
    period: "2019.01 — 2020.02",
    summary: "자사몰 및 기업 웹페이지의 디자인·퍼블리싱을 담당했습니다.",
    highlights: [
      "자사몰·기업 웹페이지 디자인 및 퍼블리싱",
      "반응형 웹 제작 및 유지보수",
      "웹사이트 성능 개선·최적화",
    ],
  },
  {
    company: "브라더피(온라인쇼핑몰)",
    role: "웹디자이너",
    period: "2017.12 — 2018.12",
    summary: "온라인 쇼핑몰의 상품 콘텐츠 디자인과 웹사이트 운영을 담당했습니다.",
    highlights: [
      "상품 상세페이지 디자인",
      "온라인 쇼핑몰 웹사이트 운영",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "ESS 에너지 관리 시스템",
    subtitle: "Energy Management · SVG UI · Lead Publishing",
    period: "2026.01-2026.05",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "전력 계통도형 대시보드 UI 퍼블리싱",
    serviceType: "기업·기관 내부 운영 시스템",
    tech: ["HTML5", "SCSS", "JavaScript", "CSS Animation", "Inline SVG", "Git"],
    tasks: [
      "100vh 기반 관제 대시보드 레이아웃 최적화",
      "그래프 애니메이션 전용 상태 클래스 설계",
      "외부 SVG를 인라인 SVG로 전환해 상태별 색상 공통 관리",
    ],
    challenge: "한 화면에 많은 정보와 애니메이션을 배치하고, 다크 테마에서 SVG 아이콘의 hover·상태별 색상을 효율적으로 관리해야 했습니다.",
    solution: "영역별 높이와 정보 배치를 최적화하고, 애니메이션 상태를 클래스 단위로 분리했습니다. 외부 SVG 파일은 인라인 <svg> 구조로 전환해 fill·stroke를 CSS에서 제어할 수 있도록 개선했습니다.",
    tags: ["ESS", "Dashboard", "SVG", "Lead"],
    isPrivate: true,
    thumbnailDesktop: "/images/projects/ess-site-dashboard.png",
    thumbnailSecondary: "/images/projects/ess-global-dashboard.png",
    accent: "#0e7c70",
  },
  {
    title: "인천광역시 디지털트윈 및 지도 서비스 통합 구축",
    subtitle: "Digital Twin · GIS Platform · Publishing Lead",
    period: "2025.07–2026.01",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "16개 시스템의 공통 UI 구조 설계 및 통합 퍼블리싱",
    serviceType: "대민 포털·GIS·업무 포털 통합",
    tech: ["HTML5", "SCSS", "JavaScript", "jQuery", "Git"],
    tasks: [
      "16개 시스템의 HTML·CSS·JavaScript 구조 및 UI 편차 분석",
      "대민 포털·대민 GIS·업무 포털·업무 GIS의 4개 유형으로 재구조화",
      "버튼·폼·탭·팝업·테이블 등 공통 컴포넌트 기준 수립",
      "CSS 변수와 SCSS 파셜 기반 공통 스타일 구조 설계",
      "4개 개발팀의 연동 화면 검수 및 UI 충돌 조율",
    ],
    challenge: "시스템마다 마크업 깊이와 클래스명, 개발 환경이 달라 공통 스타일 적용 시 충돌과 반복 수정이 발생했습니다.",
    solution: "기존 DOM을 유지하면서 유형별 최상위 스코프를 적용하고 스타일 구조와 우선순위를 통합해 시스템 독립성과 재사용성을 함께 확보했습니다.",
    achievement: "반복 수정 대상을 기존 16곳에서 4~5곳으로 축소하고, 4개 개발팀이 공통으로 활용할 수 있는 퍼블리싱 구조를 구축했습니다.",
    tags: ["Digital Twin", "GIS", "Lead", "Responsive"],
    link: "https://imap.incheon.go.kr/sgp/por/index.do",
    thumbnailGallery: [
      "/images/projects/imap-01.png",
      "/images/projects/imap-02.png",
      "/images/projects/imap-03.png",
      "/images/projects/imap-04.png",
      "/images/projects/imap-05.png",
      "/images/projects/imap-06.png",
      "/images/projects/imap-07.png",
    ],
    accent: "#0e7c70",
  },
  {
    title: "바른땅",
    subtitle: "Public Portal · Full Solo Publishing",
    period: "2025.05 — 2025.07",
    contribution: "단독 퍼블리싱 · 기여도 100%",
    responsive: true,
    role: "공공 포털 전 화면 반응형 퍼블리싱 및 KRDS 기반 UI 커스텀 적용",
    serviceType: "대국민 공개 포털",
    tech: ["HTML", "SCSS", "JavaScript"],
    tasks: [
      "메인·서브·게시판 등 전 화면 단독 퍼블리싱",
      "PC·태블릿·모바일 대응 반응형 UI 구현",
      "KRDS 컴포넌트를 프로젝트 성격과 디자인에 맞게 커스텀",
      "공통 레이아웃·버튼·폼·탭·게시판 UI 기준 정리",
      "개발 연동 후 화면 검수 및 스타일 보정",
    ],
    challengeLabel: "핵심 과제",
    solutionLabel: "수행",
    challenge: "KRDS 기본 구조를 그대로 적용하기보다 프로젝트 디자인과 콘텐츠 구성에 맞게 조정하면서도 공공서비스 UI 기준을 유지해야 했습니다.",
    solution: "KRDS의 기본 컴포넌트 구조와 접근성 기준을 유지한 채 색상, 간격, 레이아웃, 반응형 기준을 커스텀하고 전 화면을 단독으로 구축했습니다.",
    tags: ["Public Portal", "Solo", "Responsive", "Land Info"],
    link: "https://www.newjijuk.go.kr/main.do",
    thumbnailDesktop: "/images/projects/bar-pc.png",
    thumbnailMobile: "/images/projects/bar-mo.png",
    dualDeviceScroll: true,
    accent: "#1d4ed8",
  },
  {
    title: "KMI 한국의학연구소",
    subtitle: "Healthcare · React Publishing · Motion",
    period: "2024.12 — 2025.05",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "React 기반 퍼블리싱 및 인터랙션 커스터마이징",
    serviceType: "대국민 공개 포털",
    tech: ["React", "SCSS", "GSAP", "Swiper"],
    tasks: [
      "React 환경에서의 화면 퍼블리싱",
      "GSAP · Swiper 등 인터랙션 라이브러리 커스터마이징",
      "헬스케어 서비스 특성에 맞는 반응형 UI 구현",
    ],
    challenge: "다양한 콘텐츠와 모션이 있는 화면에서 반응형 안정성과 인터랙션 품질을 함께 확보해야 했습니다.",
    solution: "React 컴포넌트 구조에 맞춰 화면을 분리하고 GSAP·Swiper 동작을 기기별로 조정해 일관된 경험을 구현했습니다.",
    tags: ["React", "GSAP", "Swiper", "Healthcare"],
    link: "https://www.kmi.or.kr/?main=Y",
    thumbnailDesktop: "/images/projects/kmi-pc.png",
    thumbnailMobile: "/images/projects/kmi-mo.png",
    dualDeviceScroll: true,
    accent: "#0f766e",
  },
  {
    title: "일사편리 부동산 통합 열람 시스템",
    subtitle: "Public System · KRDS · Legacy UI Migration",
    period: "2024.04–2024.12",
    contribution: "KRDS 적용 및 퍼블리싱 리드",
    responsive: true,
    role: "약 1,000개 화면의 KRDS 적용, 레거시 UI 개편 및 접근성 감리 대응",
    serviceType: "기업·기관 내부 운영 시스템",
    tech: ["HTML", "SCSS", "JavaScript", "PHP", "KRDS"],
    tasks: [
      "KRDS 토큰 구조 분석 및 프로젝트 적용 기준 수립",
      "버튼·입력폼·탭·테이블·팝업 등 공통 UI 기준 정리",
      "레거시 JSP 구조와 신규 디자인 시스템 간 적용 방식 조율",
      "약 1,000개 화면의 Toast UI Grid 마이그레이션",
      "키보드 접근·초점 이동·폼 레이블 등 접근성 지적사항 개선",
    ],
    challenge: "기존 JSP 기능을 유지하면서 구조가 다른 KRDS 디자인 시스템을 대규모 레거시 화면에 적용해야 했습니다.",
    solution: "기능 영향도를 기준으로 마크업 변경 범위를 구분하고, 기존 구조 유지가 필요한 영역과 신규 컴포넌트 적용 영역을 나눠 안정적으로 디자인 시스템을 이식했습니다.",
    achievement: "약 1,000개 화면의 UI 개편과 Grid 적용을 완료하고 접근성 감리 최종 검수를 통과했습니다.",
    tags: ["KRDS", "A11y", "Audit", "Real Estate"],
    isPrivate: true,
    thumbnailDesktop: "/images/projects/krds.png",
    thumbnailSecondary: "/images/projects/krds02.png",
    thumbnailSecondaryBlur: true,
    accent: "#b45309",
  },
];

export const selectedProjects: SelectedProject[] = [
  {
    title: "세종 공간정보 플랫폼",
    field: "공간정보",
    period: "2024.01 — 2024.02",
    contribution: "100%",
    role: "공간정보 기반 공공 서비스 퍼블리싱",
  },
  {
    title: "댐·하천 디지털 플랫폼",
    field: "수자원 · 데이터",
    period: "2023.11 — 2023.12",
    contribution: "100%",
    role: "댐·하천 정보 관리 플랫폼 UI 퍼블리싱",
    isPrivate: true,
  },
  {
    title: "용마로지스 시스템",
    field: "물류 운영",
    period: "2024.02 — 2024.05",
    contribution: "50%",
    role: "Bootstrap 커스터마이징 · CRUD",
    isPrivate: true,
  },
  {
    title: "스마트 수방 시스템",
    field: "재난 · 내부 시스템",
    period: "2023.08 — 2023.11",
    contribution: "50%",
    role: "공공기관 내부 관리자 시스템 퍼블리싱",
    isPrivate: true,
  },
  {
    title: "충청북도 도민 생활지도 리뉴얼",
    field: "공공 GIS · 생활지도",
    period: "2023.06",
    contribution: "100%",
    role: "지도 기반 공공 서비스 UI 리뉴얼",
  },
];

export const privacyNote =
  "내부 운영 시스템은 보안상 상세 화면과 기능 설명을 일부 비공개 처리했습니다.";

export const strengths = [
  "공공서비스 · KRDS",
  "GIS · 관제 시스템",
  "웹 접근성 · 감리 대응",
  "공통 UI 설계",
  "퍼블리싱 리드",
  "반응형 · 크로스 브라우징",
];
