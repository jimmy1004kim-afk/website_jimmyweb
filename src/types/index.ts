/**
 * 프로젝트 전역 공통 타입 — `src/data/*` 엔티티·필터 값과 맞춘다.
 * 데이터 모듈은 점진적으로 여기서 `import type` 하도록 맞출 수 있다.
 */

// -----------------------------------------------------------------------------
// Site — 메뉴 · 메타
// -----------------------------------------------------------------------------

/** GNB/푸터 등 메인 내비 한 줄 (서비스만 `children` 가능) */
export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: readonly NavItem[];
};

/** 사이트명·기본 설명·CTA 메타 */
export type SiteMeta = {
  name: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
};

// -----------------------------------------------------------------------------
// 공통 유니온 — 필터·슬러그 (string 대신 허용 값만)
// -----------------------------------------------------------------------------

/** `/services/<slug>` — 서비스 제품 라인 슬러그 */
export type ServiceSlug = "landing" | "homepage" | "custom" | "operation";

/** 템플릿: 랜딩 vs 홈 (필터 `serviceType`) */
export type TemplateServiceType = "landing" | "homepage";

/** 템플릿: 전환형 vs 정보형 (필드 `templateType`) */
export type TemplateType = "conversion" | "info";

/** 포트폴리오: 랜딩 / 홈 / 맞춤 (필터 `serviceType`) */
export type PortfolioServiceType = "landing" | "homepage" | "custom";

/** 포트폴리오: 전환형 vs 정보형 (필드 `projectType`) */
export type PortfolioProjectType = "conversion" | "info";

/** 포트폴리오: 업종 필터 */
export type PortfolioIndustry =
  | "saas"
  | "commerce"
  | "corporate"
  | "agency"
  | "public-sector";

/** 컨텐츠: 카테고리 */
export type ContentCategory =
  | "guide"
  | "operations"
  | "web-strategy"
  | "agency-news";

// -----------------------------------------------------------------------------
// 엔티티 — 데이터 레코드 형태
// -----------------------------------------------------------------------------

/** `src/data/services` — 서비스 카드·상세 */
export type Service = {
  id: string;
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  ctaLabel: string;
  highlights: readonly string[];
};

/** `src/data/templates` — 템플릿 카드·상세 */
export type Template = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  serviceType: TemplateServiceType;
  templateType: TemplateType;
  thumbnail: string;
  ctaLabel: string;
  highlights: readonly string[];
};

/** `src/data/portfolio` — 포트폴리오 카드·상세 */
export type PortfolioItem = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  serviceType: PortfolioServiceType;
  projectType: PortfolioProjectType;
  industry: PortfolioIndustry;
  thumbnail: string;
  highlights: readonly string[];
};

/** `src/data/contents` — 블로그형 글 */
export type ContentPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ContentCategory;
  thumbnail: string;
  /** ISO 8601 */
  publishedAt: string;
  author: string;
  tags: readonly string[];
  content: string;
};
