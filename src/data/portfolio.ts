/**
 * 포트폴리오(프로젝트 사례) 공통 데이터 — 목록, 필터, 카드, /portfolio/[slug] 상세, 홈 미리보기에서 재사용한다.
 * thumbnail은 public 기준 경로 placeholder이다.
 */

export type PortfolioServiceType = "landing" | "homepage" | "custom";

/** 전환 중심 vs 정보 전달 중심 — 필터 1축 */
export type PortfolioProjectType = "conversion" | "info";

/**
 * 산업/업종 필터 — 고정 카테고리만 사용한다.
 * - saas: SaaS·IT·스타트업
 * - commerce: 커머스·리테일·F&B
 * - corporate: 기업·제조·B2B
 * - agency: 에이전시·크리에이티브
 * - public-sector: 공공·교육·비영리
 */
export type PortfolioIndustry =
  | "saas"
  | "commerce"
  | "corporate"
  | "agency"
  | "public-sector";

export type PortfolioItem = {
  id: string;
  /** /portfolio/[slug] */
  slug: string;
  name: string;
  shortDescription: string;
  /** 랜딩 / 홈 / 맞춤 — 필터 1축 */
  serviceType: PortfolioServiceType;
  /** 전환형 / 정보형 — 필터 1축 */
  projectType: PortfolioProjectType;
  /** 업종 — 필터 1축 */
  industry: PortfolioIndustry;
  thumbnail: string;
  highlights: readonly string[];
};

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: "pf-analytics-saas-landing",
    slug: "analytics-saas-launch-landing",
    name: "분석 SaaS 신규 런칭 랜딩",
    shortDescription:
      "무료 체험·데모 요청 전환에 맞춘 B2B 분석 도구 런칭 캠페인 랜딩 프로젝트입니다.",
    serviceType: "landing",
    projectType: "conversion",
    industry: "saas",
    thumbnail: "/images/portfolio/analytics-saas-launch-landing.webp",
    highlights: ["전환 퍼널 재정의", "요금·기능 비교표", "데모 CTA 최적화"],
  },
  {
    id: "pf-fashion-sale-landing",
    slug: "fashion-seasonal-sale-landing",
    name: "패션 시즌 세일 랜딩",
    shortDescription:
      "기간 한정 프로모션과 카탈로그 연동을 강조한 커머스 랜딩 페이지입니다.",
    serviceType: "landing",
    projectType: "conversion",
    industry: "commerce",
    thumbnail: "/images/portfolio/fashion-seasonal-sale-landing.webp",
    highlights: ["프로모션 타이머", "베스트셀러 모듈", "결제 전환 UX"],
  },
  {
    id: "pf-seminar-info-landing",
    slug: "b2b-seminar-info-landing",
    name: "B2B 세미나 안내 랜딩",
    shortDescription:
      "일정·연사·장소 정보 중심의 세미나 참가 신청 안내 페이지입니다.",
    serviceType: "landing",
    projectType: "info",
    industry: "corporate",
    thumbnail: "/images/portfolio/b2b-seminar-info-landing.webp",
    highlights: ["프로그램 타임라인", "연사 프로필", "참가 문의"],
  },
  {
    id: "pf-manufacturer-home",
    slug: "manufacturer-corporate-home",
    name: "제조사 코퍼리트 홈",
    shortDescription:
      "사업 영역·인증·문의로 이어지는 제조 B2B 기업 메인 웹사이트입니다.",
    serviceType: "homepage",
    projectType: "conversion",
    industry: "corporate",
    thumbnail: "/images/portfolio/manufacturer-corporate-home.webp",
    highlights: ["사업부별 진입", "인증·파트너 로고", "견적 문의 CTA"],
  },
  {
    id: "pf-studio-home",
    slug: "creative-studio-portfolio-home",
    name: "크리에이티브 스튜디오 홈",
    shortDescription:
      "대표 작업과 팀 소개를 전면에 둔 에이전시 포트폴리오형 홈페이지입니다.",
    serviceType: "homepage",
    projectType: "info",
    industry: "agency",
    thumbnail: "/images/portfolio/creative-studio-portfolio-home.webp",
    highlights: ["작업 그리드", "프로세스 설명", "협업 문의"],
  },
  {
    id: "pf-city-program-site",
    slug: "city-youth-program-site",
    name: "지자체 청년 프로그램 사이트",
    shortDescription:
      "신청 안내·일정·FAQ를 한데 모은 공공 청년 지원 프로그램 정보 사이트입니다.",
    serviceType: "homepage",
    projectType: "info",
    industry: "public-sector",
    thumbnail: "/images/portfolio/city-youth-program-site.webp",
    highlights: ["신청 자격·기간", "일정표", "문의 채널"],
  },
  {
    id: "pf-b2b-order-custom",
    slug: "b2b-order-portal-custom",
    name: "B2B 주문 포털 맞춤 제작",
    shortDescription:
      "기존 ERP와 연동하는 주문·견적 요청 흐름을 갖춘 맞춤 웹 애플리케이션입니다.",
    serviceType: "custom",
    projectType: "conversion",
    industry: "corporate",
    thumbnail: "/images/portfolio/b2b-order-portal-custom.webp",
    highlights: ["역할별 대시보드", "견적 요청 폼", "연동 API"],
  },
  {
    id: "pf-membership-custom",
    slug: "fitness-membership-custom",
    name: "피트니스 멤버십 운영 사이트",
    shortDescription:
      "회원권 안내·예약·결제까지 이어지는 매장 운영형 맞춤 사이트입니다.",
    serviceType: "custom",
    projectType: "info",
    industry: "commerce",
    thumbnail: "/images/portfolio/fitness-membership-custom.webp",
    highlights: ["회원권 비교", "시간표·예약", "지점 안내"],
  },
] as const;

export function getPortfolioHref(slug: string): `/portfolio/${string}` {
  return `/portfolio/${slug}`;
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}
