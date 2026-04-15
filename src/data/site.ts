/**
 * 사이트 공통 정보 — 헤더, 푸터, 메타, CTA 등에서 단일 소스로 import 해 사용한다.
 * UI 연결은 이후 단계에서 진행한다.
 */

export type NavItem = {
  /** 라우트·앵커·추적용 안정적인 키 */
  id: string;
  /** 메뉴에 표시되는 이름 */
  label: string;
  /** App Router 경로 (필요 시 외부 URL로 확장 가능) */
  href: string;
  /**
   * 하위 메뉴. 현재 기준으로 **서비스** 항목에만 존재한다.
   * 템플릿·포트폴리오·컨텐츠에는 서브메뉴를 두지 않는다.
   */
  children?: readonly NavItem[];
};

export type SiteMeta = {
  name: string;
  /** 한 줄 설명 — 메타 설명, 히어로, 푸터 등에 재사용 */
  tagline: string;
  /** 기본 CTA 문구 */
  ctaLabel: string;
  /** CTA 이동 경로 (문의 페이지) */
  ctaHref: string;
};

export const siteMeta: SiteMeta = {
  name: "지미웹",
  tagline:
    "합리적인 가격으로 빠르게 홈페이지/랜딩페이지를 제작하는 실무형 웹 에이전시",
  ctaLabel: "문의하기",
  ctaHref: "/contact",
} as const;

/**
 * 메인 내비게이션 (순서 고정)
 * - 서비스만 `children`으로 서브메뉴를 가진다.
 */
export const mainNavigation: readonly NavItem[] = [
  { id: "home", label: "홈", href: "/" },
  { id: "about", label: "회사소개", href: "/about" },
  {
    id: "services",
    label: "서비스",
    href: "/services",
    children: [
      {
        id: "services-landing",
        label: "랜딩페이지 제작",
        href: "/services/landing",
      },
      {
        id: "services-homepage",
        label: "홈페이지 제작",
        href: "/services/homepage",
      },
      {
        id: "services-custom",
        label: "맞춤형 제작",
        href: "/services/custom",
      },
      {
        id: "services-operations",
        label: "운영 대행",
        href: "/services/operation",
      },
    ],
  },
  { id: "templates", label: "템플릿", href: "/templates" },
  { id: "portfolio", label: "포트폴리오", href: "/portfolio" },
  { id: "contents", label: "컨텐츠", href: "/contents" },
  { id: "contact", label: "문의", href: "/contact" },
] as const;
