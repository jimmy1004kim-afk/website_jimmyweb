/**
 * 템플릿 공통 데이터 — 목록, 필터, 카드, /templates/[slug] 상세, 홈 미리보기에서 재사용한다.
 * thumbnail은 public 기준 경로 placeholder이다.
 */

export type TemplateServiceType = "landing" | "homepage";

export type TemplateKind = "conversion" | "info";

export type Template = {
  id: string;
  /** /templates/[slug] */
  slug: string;
  name: string;
  shortDescription: string;
  /** 랜딩 vs 홈 — 필터 1축 */
  serviceType: TemplateServiceType;
  /** 전환형 vs 정보형 — 필터 1축 */
  templateType: TemplateKind;
  /** public 루트 기준 이미지 경로(파일은 추후 추가 가능) */
  thumbnail: string;
  ctaLabel: string;
  highlights: readonly string[];
};

export const templates: readonly Template[] = [
  {
    id: "tpl-launch-saas",
    slug: "saas-launch-landing",
    name: "SaaS 런칭 랜딩",
    shortDescription:
      "출시 알림·데모 신청·가격 비교까지 한 화면에서 전환을 설계한 SaaS 런칭용 랜딩 템플릿입니다.",
    serviceType: "landing",
    templateType: "conversion",
    thumbnail: "/images/templates/saas-launch-landing.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["히어로 + 기능 요약 + 요금", "데모/문의 CTA 반복 배치", "사회적 증거 블록"],
  },
  {
    id: "tpl-lead-magnet",
    slug: "lead-magnet-landing",
    name: "리드 마그넷 랜딩",
    shortDescription:
      "가이드·체크리스트 다운로드를 전환 목표로 한 짧은 랜딩 구조입니다.",
    serviceType: "landing",
    templateType: "conversion",
    thumbnail: "/images/templates/lead-magnet-landing.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["폼 상단 배치", "혜택 3요약", "다운로드 확인용 감사 섹션"],
  },
  {
    id: "tpl-event-info",
    slug: "event-notice-landing",
    name: "행사 안내 랜딩",
    shortDescription:
      "일정·장소·연사 소개 중심으로 정보 전달에 최적화된 행사·세미나용 페이지입니다.",
    serviceType: "landing",
    templateType: "info",
    thumbnail: "/images/templates/event-notice-landing.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["타임테이블 블록", "연사/프로그램", "문의·참가 안내"],
  },
  {
    id: "tpl-product-intro",
    slug: "product-intro-landing",
    name: "제품 소개 랜딩",
    shortDescription:
      "단일 제품·서비스의 스펙과 활용 사례를 차분히 풀어 설명하는 정보형 랜딩입니다.",
    serviceType: "landing",
    templateType: "info",
    thumbnail: "/images/templates/product-intro-landing.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["스펙 표", "사용 시나리오", "FAQ"],
  },
  {
    id: "tpl-corp-recruit",
    slug: "corporate-recruit-home",
    name: "기업 리크루트 홈",
    shortDescription:
      "채용 브랜딩과 지원 전환을 동시에 잡은 기업 홈 내 리크루트 허브형 구성입니다.",
    serviceType: "homepage",
    templateType: "conversion",
    thumbnail: "/images/templates/corporate-recruit-home.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["채용 포지션 카드", "지원 플로우 안내", "문화/복지 요약"],
  },
  {
    id: "tpl-agency-portfolio",
    slug: "agency-portfolio-home",
    name: "에이전시 포트폴리오 홈",
    shortDescription:
      "대표 작업·클라이언트·문의로 이어지는 에이전시/스튜디오용 메인 페이지입니다.",
    serviceType: "homepage",
    templateType: "conversion",
    thumbnail: "/images/templates/agency-portfolio-home.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["선택 작업 그리드", "프로세스 요약", "견적/문의 CTA"],
  },
  {
    id: "tpl-corp-pr",
    slug: "corporate-pr-home",
    name: "기업 PR 홈",
    shortDescription:
      "뉴스·IR·미디어 키트 중심의 정보 전달형 기업 소개 홈입니다.",
    serviceType: "homepage",
    templateType: "info",
    thumbnail: "/images/templates/corporate-pr-home.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["뉴스/공지 모듈", "연혁·비전", "담당자 연락"],
  },
  {
    id: "tpl-local-store",
    slug: "local-business-home",
    name: "로컬 비즈니스 홈",
    shortDescription:
      "매장·영업 시간·오시는 길을 강조한 지역 소상공인·매장용 홈페이지 템플릿입니다.",
    serviceType: "homepage",
    templateType: "info",
    thumbnail: "/images/templates/local-business-home.webp",
    ctaLabel: "템플릿 보기",
    highlights: ["지도·영업시간", "메뉴/서비스 요약", "예약·전화 안내"],
  },
] as const;

export function getTemplateHref(slug: string): `/templates/${string}` {
  return `/templates/${slug}`;
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
