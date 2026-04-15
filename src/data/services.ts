/**
 * 서비스 공통 데이터 — 홈 요약, /services 목록, 각 /services/[slug] 상세에서 재사용한다.
 * slug는 App Router 경로 `src/app/services/<slug>` 와 일치한다.
 */

export type ServiceSlug = "landing" | "homepage" | "custom" | "operation";

export type Service = {
  id: string;
  slug: ServiceSlug;
  name: string;
  /** 카드·목록·메타에 쓰는 짧은 요약 */
  shortDescription: string;
  /** 섹션/카드 CTA 문구 */
  ctaLabel: string;
  /** 강조 포인트 (불릿) */
  highlights: readonly string[];
};

export const services: readonly Service[] = [
  {
    id: "svc-landing",
    slug: "landing",
    name: "랜딩페이지 제작",
    shortDescription:
      "캠페인·출시·이벤트에 맞춘 단일 목적 페이지를 빠르게 기획·디자인·구축합니다.",
    ctaLabel: "랜딩 서비스 보기",
    highlights: [
      "전환 목표에 맞춘 구조·카피 방향",
      "반응형·로딩 퍼포먼스 기본 점검",
      "배포 후 간단한 수정·측정 포인트 안내",
    ],
  },
  {
    id: "svc-homepage",
    slug: "homepage",
    name: "홈페이지 제작",
    shortDescription:
      "회사·브랜드 소개에 맞는 정보 구조와 섹션 구성으로 신뢰감 있는 홈페이지를 만듭니다.",
    ctaLabel: "홈페이지 서비스 보기",
    highlights: [
      "메뉴·섹션 구조를 비즈니스에 맞게 정리",
      "반응형 레이아웃과 접근성 기본 준수",
      "운영·수정이 쉬운 구성",
    ],
  },
  {
    id: "svc-custom",
    slug: "custom",
    name: "맞춤형 제작",
    shortDescription:
      "요구사항에 맞는 기능·연동·레이아웃을 설계해 프로젝트 범위에 맞춰 제작합니다.",
    ctaLabel: "맞춤 제작 문의",
    highlights: [
      "범위·일정·산출물 기준으로 명확히 합의",
      "기능·연동 필요 시 단계적 구현",
      "확장 가능한 코드 구조 지향",
    ],
  },
  {
    id: "svc-operation",
    slug: "operation",
    name: "운영 대행",
    shortDescription:
      "콘텐츠 반영·모니터링·소규모 개선 등 사이트가 끊기지 않도록 운영을 지원합니다.",
    ctaLabel: "운영 대행 알아보기",
    highlights: [
      "업데이트·배포·백업 등 루틴 점검",
      "이슈 대응·소규모 개선 요청 처리",
      "필요 시 개선 제안",
    ],
  },
] as const;

/** `/services/<slug>` 경로 (leading slash 포함) */
export function getServiceHref(slug: ServiceSlug): `/services/${ServiceSlug}` {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
