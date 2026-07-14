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
  items: string[];
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
    "공공·공간정보 서비스의 복잡한 정보 구조를, 표준과 접근성을 지키는 화면으로 구현합니다.",
  intro:
    "공공기관 웹 구축 프로젝트에서 UI 퍼블리싱과 공통 컴포넌트 설계를 담당해 왔습니다. GIS·관리자 화면처럼 복잡한 UI를 웹 표준과 접근성에 맞춰 안정적인 구조로 구현합니다.",
  location: "Seoul, Korea",
  email: "jy8968@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "#",
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
  { label: "경력", value: "6+", suffix: "Years" },
  { label: "공공·공간정보", value: "10+", suffix: "Projects" },
  { label: "단독 퍼블리싱", value: "100%", suffix: "Key Works" },
];

export const skills: SkillGroup[] = [
  {
    category: "Markup & Style",
    items: ["HTML5", "SCSS", "KRDS", "반응형", "Flex/Grid", "시맨틱 마크업"],
  },
  {
    category: "Interaction",
    items: ["JavaScript", "jQuery", "React", "GSAP", "Swiper", "API 연동"],
  },
  {
    category: "Quality & Collab",
    items: ["웹접근성", "웹표준", "Git", "QA·감리", "Bootstrap", "퍼블 일정관리"],
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
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "ESS 에너지 관리 시스템",
    subtitle: "Energy Management · SVG UI · Lead Publishing",
    period: "2026.03",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "전력 계통도형 대시보드 UI 퍼블리싱, SVG 화면 구현",
    serviceType: "기업·기관 내부 운영 시스템",
    tech: ["HTML", "SCSS", "JavaScript", "SVG", "Git"],
    tasks: [
      "전력 계통도 기반 대시보드 화면 퍼블리싱",
      "설비와 전력 흐름 표현을 위한 SVG UI 구현",
      "화면별 공통 요소 정리 및 재사용 가능한 스타일 구조 구성",
    ],
    tags: ["ESS", "Dashboard", "SVG", "Lead"],
    isPrivate: true,
    thumbnailDesktop: "/images/projects/ess-site-dashboard.png",
    thumbnailSecondary: "/images/projects/ess-global-dashboard.png",
    accent: "#0e7c70",
  },
  {
    title: "인천광역시 통합 웹서비스 구축",
    subtitle: "16개 분야별 서비스를 공통 퍼블리싱 체계로 통합한 프로젝트",
    period: "2025.08 — 2025.12",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "UI 공통화 설계, 퍼블리싱 일정 관리, Git 협업 총괄",
    serviceType: "기업·기관 내부 운영 시스템",
    tech: ["HTML", "SCSS", "JavaScript", "Git"],
    tasks: [
      "디지털 트윈 기반 복합 UI 화면 퍼블리싱 리드",
      "UI 공통화 설계와 공통 컴포넌트 구조화",
      "퍼블리싱 일정 관리 및 Git 기반 협업 총괄",
    ],
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
    contribution: "100%",
    responsive: true,
    role: "공공 포털 전 화면 단독 퍼블리싱",
    serviceType: "대국민 공개 포털",
    tech: ["HTML", "SCSS", "JavaScript"],
    tasks: [
      "공공 포털 전 화면 단독 퍼블리싱",
      "정보 구조에 맞춘 페이지·컴포넌트 단위 마크업",
      "반응형 레이아웃 및 서비스 UI 완성도 확보",
    ],
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
    tags: ["React", "GSAP", "Swiper", "Healthcare"],
    link: "https://www.kmi.or.kr/?main=Y",
    thumbnailDesktop: "/images/projects/kmi-pc.png",
    thumbnailMobile: "/images/projects/kmi-mo.png",
    dualDeviceScroll: true,
    accent: "#0f766e",
  },
  {
    title: "일사편리 부동산 통합 열람 시스템",
    subtitle: "KRDS · Accessibility Audit · PHP Publishing",
    period: "2024.05 — 2024.12",
    contribution: "퍼블리싱 리드",
    responsive: true,
    role: "KRDS 적용, 테마 컬러, 접근성·표준 웹 감리 대응",
    serviceType: "기업·기관 내부 운영 시스템",
    tech: ["HTML", "SCSS", "JavaScript", "PHP", "KRDS"],
    tasks: [
      "KRDS 기반 UI 적용 및 테마 컬러 시스템 반영",
      "접근성·표준 웹 감리 대응 마크업",
      "PHP 기반 서비스 화면 퍼블리싱",
    ],
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
    role: "Bootstrap 커스터마이징 · CRUD · API 연동",
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
  "KRDS·웹 접근성·감리 대응",
  "GIS·디지털 트윈·관리자 UI 구축",
  "공통 컴포넌트 설계 및 퍼블리싱 리드",
  "Git 협업·QA·운영 유지보수",
];
