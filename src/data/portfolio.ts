export type FeaturedProject = {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tech: string[];
  tasks: string[];
  tags: string[];
  link?: string;
  ongoing?: boolean;
  emoji: string;
};

export type SelectedProject = {
  title: string;
  field: string;
  role: string;
  isPrivate?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "김주연",
  role: "Web Publisher",
  tagline:
    "공공·공간정보 서비스와 기업 운영 시스템을 중심으로, 지도 기반 UI와 복잡한 정보 구조를 웹 화면으로 구현해왔습니다.",
  intro:
    "반복되는 화면을 공통화하고, 유지보수가 쉬운 퍼블리싱 구조를 만드는 데 집중합니다. 공공기관 GIS·지도 서비스부터 복잡한 관리·업무 시스템까지, 시맨틱 마크업과 웹 접근성·크로스 브라우징을 지키며 다양한 해상도에 대응하는 반응형 화면을 구현합니다.",
  location: "Seoul, Korea",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeUrl: "#",
};

export const keywords = [
  "Public Service",
  "GIS / Map UI",
  "Dashboard",
  "Responsive Publishing",
  "Accessibility",
];

export const stats = [
  { label: "경력", value: "N+", suffix: "years" },
  { label: "공공·공간정보", value: "10+", suffix: "projects" },
  { label: "웹 접근성", value: "AA", suffix: "level" },
];

export const skills: SkillGroup[] = [
  {
    category: "Markup & Style",
    items: ["HTML5", "CSS3", "Sass/SCSS", "반응형 웹", "Flex/Grid", "BEM"],
  },
  {
    category: "Interaction & UI",
    items: [
      "JavaScript",
      "jQuery",
      "지도/GIS UI",
      "Dashboard UI",
      "웹 접근성",
      "크로스 브라우징",
    ],
  },
  {
    category: "Tools & Env",
    items: ["Gulp", "Git", "Figma", "Zeplin", "Pug/Handlebars", "화면 이관·리뉴얼"],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "인천 디지털트윈 서비스",
    subtitle: "Digital Twin · 3D Spatial Data · Web Publishing",
    period: "20XX.XX – 진행 중",
    role: "UI 퍼블리싱, 3D·공간 데이터 화면 구현, 공통 컴포넌트 정리",
    tech: ["HTML", "SCSS", "JavaScript", "Gulp"],
    tasks: [
      "디지털트윈·3D 공간 데이터 기반 화면 퍼블리싱",
      "지도 위 레이어·정보 패널 등 인터랙션 UI 구현",
      "공통 레이아웃 및 컴포넌트 구조화",
      "다양한 해상도 대응 및 접근성 고려",
    ],
    tags: ["Digital Twin", "3D", "GIS", "반응형"],
    ongoing: true,
    emoji: "🌐",
  },
  {
    title: "충청북도 도민 생활지도",
    subtitle: "Public GIS Platform · Web Publishing",
    period: "20XX.XX – 20XX.XX",
    role: "UI 퍼블리싱, 반응형 화면 구현, 공통 컴포넌트 정리",
    tech: ["HTML", "SCSS", "JavaScript", "Gulp"],
    tasks: [
      "지도 기반 생활정보 탐색 화면 퍼블리싱",
      "검색, 필터, 탭, 레이어 패널 등 인터랙션 UI 구현",
      "공통 레이아웃 및 컴포넌트 구조화",
      "다양한 해상도 대응 및 접근성 고려",
    ],
    tags: ["Public GIS", "Map UI", "반응형", "접근성"],
    link: "#",
    emoji: "🗺️",
  },
  {
    title: "세종 공간정보 플랫폼",
    subtitle: "Spatial Information Platform · Web Publishing",
    period: "20XX.XX – 20XX.XX",
    role: "GIS UI 퍼블리싱, 레이어·검색·정보 패널 화면 구현",
    tech: ["HTML", "SCSS", "JavaScript", "Gulp"],
    tasks: [
      "공간정보 통합 지도 서비스 화면 퍼블리싱",
      "레이어 관리, 검색, 정보 패널 등 GIS UI 구현",
      "공통 컴포넌트 구조화 및 화면 표준화",
      "크로스 브라우징 및 반응형 대응",
    ],
    tags: ["공간정보", "Map UI", "Layer", "Search"],
    link: "#",
    emoji: "🛰️",
  },
  {
    title: "댐·하천 디지털플랫폼",
    subtitle: "Water Resource Data Platform · Web Publishing",
    period: "20XX.XX – 20XX.XX",
    role: "대시보드형 화면 퍼블리싱, 데이터·지도 UI 구현",
    tech: ["HTML", "SCSS", "JavaScript", "Gulp"],
    tasks: [
      "수자원·하천 데이터 기반 대시보드 화면 퍼블리싱",
      "복잡한 데이터 시각화 영역과 지도 UI 구성",
      "차트·테이블·필터 등 정보 영역 레이아웃 구현",
      "다양한 해상도 대응 및 접근성 고려",
    ],
    tags: ["Dashboard", "Data UI", "Map UI", "반응형"],
    link: "#",
    emoji: "💧",
  },
  {
    title: "용마로지스 시스템",
    subtitle: "Logistics Operation System · Web Publishing",
    period: "20XX.XX – 20XX.XX",
    role: "업무 화면 퍼블리싱, 데이터 테이블·조회·관리 UI 구현",
    tech: ["HTML", "SCSS", "JavaScript", "Gulp"],
    tasks: [
      "물류 운영 업무 화면 퍼블리싱",
      "데이터 테이블, 조회·관리 기능 UI 구현",
      "반복 화면 공통화 및 컴포넌트 구조화",
      "업무 효율을 고려한 폼·필터 레이아웃 구성",
    ],
    tags: ["Operation", "Data Table", "Admin UI"],
    emoji: "🚚",
  },
];

export const selectedProjects: SelectedProject[] = [
  {
    title: "스마트 수방 시스템",
    field: "재난·수방",
    role: "웹 퍼블리싱 / 운영 화면 구현",
    isPrivate: true,
  },
  {
    title: "일사편리 부동산 통합 열람 시스템",
    field: "부동산 공공서비스",
    role: "서비스 화면 퍼블리싱",
  },
  {
    title: "KMI 한국의학연구소",
    field: "헬스케어",
    role: "웹사이트 퍼블리싱",
  },
  {
    title: "바른땅",
    field: "토지·공간정보",
    role: "서비스 UI 퍼블리싱",
  },
  {
    title: "ESS 시스템",
    field: "에너지 관리",
    role: "대시보드 및 관리 화면 퍼블리싱",
    isPrivate: true,
  },
];

export const privacyNote =
  "내부 운영 시스템으로, 보안상 상세 화면 및 기능은 일부 비공개 처리했습니다.";

export const experiences = [
  {
    company: "웹 에이전시",
    role: "Web Publisher",
    period: "20XX — 현재",
    description:
      "공공기관 GIS·공간정보 서비스와 기업 운영 시스템을 웹 표준·접근성 기준에 맞춰 퍼블리싱하고, Gulp 기반 퍼블리싱 환경을 구성했습니다.",
  },
  {
    company: "디자인 스튜디오",
    role: "Junior Publisher",
    period: "20XX — 20XX",
    description:
      "디자인 시안을 픽셀 단위로 구현하고, 공통 컴포넌트와 SCSS 구조를 정리해 퍼블리싱 효율을 높였습니다.",
  },
];

export const strengths = [
  "GIS·지도 기반 서비스 UI 경험",
  "공공기관 프로젝트 다수 수행",
  "복잡한 관리·업무 시스템 화면 구현",
  "여러 프로젝트 공통 구조화 및 통합 경험",
  "Gulp 기반 퍼블리싱 환경 구성",
  "기존 화면 이관 및 리뉴얼 대응",
];
