/**
 * 컨텐츠(블로그형 정보 글) 공통 데이터 — 목록, /contents/[slug] 상세, 관련 글, 홈 미리보기에서 재사용한다.
 * content는 마크다운이 아닌 일반 문자열(문단은 줄바꿈으로 구분)이다.
 */

/**
 * 카테고리 — 필터·네비용 고정 값만 사용한다.
 * - guide: 제작 프로세스·체크리스트 등 가이드
 * - operations: 운영·유지보수·배포
 * - web-strategy: 기획·전환·정보 구조
 * - agency-news: 지미웹 소식·공지
 */
export type ContentCategory =
  | "guide"
  | "operations"
  | "web-strategy"
  | "agency-news";

export type ContentPost = {
  id: string;
  /** /contents/[slug] */
  slug: string;
  title: string;
  /** 목록·카드·메타용 짧은 요약 */
  excerpt: string;
  category: ContentCategory;
  thumbnail: string;
  /** ISO 8601 날짜 문자열 */
  publishedAt: string;
  author: string;
  tags: readonly string[];
  /** 본문 — 문단은 빈 줄(연속 줄바꿈)로 구분 */
  content: string;
};

export const contents: readonly ContentPost[] = [
  {
    id: "cnt-landing-checklist",
    slug: "landing-page-launch-checklist",
    title: "랜딩페이지 런칭 전 체크리스트",
    excerpt:
      "전환 목표가 있는 랜딩을 배포하기 전에 흔히 놓치는 검수 항목을 정리했습니다.",
    category: "guide",
    thumbnail: "/images/contents/landing-page-launch-checklist.webp",
    publishedAt: "2025-11-04T09:00:00.000Z",
    author: "지미웹",
    tags: ["랜딩페이지", "체크리스트", "런칭"],
    content: [
      "랜딩페이지는 한 화면 안에서 사용자의 다음 행동을 하나로 모아야 합니다. 그래서 런칭 직전에는 ‘보이는 디자인’보다 ‘목표 행동이 막히는 지점’을 먼저 점검하는 편이 안전합니다.",
      "첫째, 첫 화면에서 제품·혜택·근거가 한눈에 들어오는지 확인합니다. 둘째, CTA는 한 화면에 하나의 주 목표로 고정하고, 보조 행동은 시각적 우선순위를 낮춥니다.",
      "셋째, 모바일에서 폼 필드 수·터치 영역·로딩 속도를 다시 봅니다. 넷째, 측정을 위해 전환 이벤트와 UTM 규칙을 문서로 남겨 두면 이후 개선이 빨라집니다.",
    ].join("\n\n"),
  },
  {
    id: "cnt-homepage-ia",
    slug: "homepage-information-architecture-basics",
    title: "홈페이지 정보 구조(IA) 잡는 기본",
    excerpt:
      "메뉴가 늘어날수록 빠지기 쉬운 정보 구조 기준을 짧게 정리했습니다.",
    category: "web-strategy",
    thumbnail: "/images/contents/homepage-information-architecture-basics.webp",
    publishedAt: "2025-11-12T09:00:00.000Z",
    author: "지미웹",
    tags: ["홈페이지", "IA", "기획"],
    content: [
      "홈페이지의 정보 구조는 ‘누가 어떤 질문을 해결하러 왔는가’에서 출발합니다. 방문자 유형이 여럿이라면, 공통 질문을 상단에 두고 세부 질문은 하위 페이지로 흐르게 만드는 것이 일반적입니다.",
      "메뉴 라벨은 내부 용어가 아니라 방문자 언어로 쓰는 것이 좋습니다. 같은 내용이라도 ‘사업 소개’와 ‘회사 소개’ 중 어떤 표현이 질문과 맞는지 선택해야 합니다.",
      "섹션 순서는 ‘신뢰 형성 → 근거 → 행동’ 흐름이 자주 쓰입니다. 다만 B2B는 문의 전환 전에 레퍼런스와 프로세스를 앞당기는 경우가 많습니다.",
    ].join("\n\n"),
  },
  {
    id: "cnt-deploy-routine",
    slug: "website-deploy-update-routine",
    title: "웹사이트 배포·업데이트 루틴을 만드는 법",
    excerpt:
      "작은 수정이 쌓일수록 사고가 나기 쉽습니다. 반복 가능한 배포 루틴을 짧게 소개합니다.",
    category: "operations",
    thumbnail: "/images/contents/website-deploy-update-routine.webp",
    publishedAt: "2025-12-01T09:00:00.000Z",
    author: "지미웹",
    tags: ["배포", "운영", "유지보수"],
    content: [
      "업데이트가 잦은 사이트일수록 ‘언제 무엇을 바꿨는지’가 기록으로 남아야 합니다. 최소한 변경 요약, 담당자, 배포 시각을 남기면 롤백과 원인 분석이 쉬워집니다.",
      "배포 전에는 스테이징에서 링크·폼·결제 테스트를 동일하게 한 번 더 돌리는 것이 안전합니다. 특히 모바일 브라우저는 데스크톱과 렌더 차이가 자주 납니다.",
      "장애 대응 연락망과 호스팅·도메인 만료 알림은 사전에 정리해 두는 것이 좋습니다. 작은 팀이라도 ‘누가 마지막으로 확인하는지’만 명확해도 사고가 줄어듭니다.",
    ].join("\n\n"),
  },
  {
    id: "cnt-form-conversion",
    slug: "form-fields-and-conversion",
    title: "문의 폼 필드 수와 전환의 관계",
    excerpt:
      "필드를 줄이면 전환이 오를까? 상황별로 나뉘는 기준을 정리했습니다.",
    category: "web-strategy",
    thumbnail: "/images/contents/form-fields-and-conversion.webp",
    publishedAt: "2025-12-18T09:00:00.000Z",
    author: "지미웹",
    tags: ["문의폼", "전환", "UX"],
    content: [
      "문의 폼은 ‘수집하고 싶은 정보’와 ‘사용자가 당장 기꺼이 주는 정보’ 사이의 타협입니다. B2C 리드는 필드가 길수록 이탈이 늘기 쉽고, B2B는 오히려 필수 항목이 명확해야 상담 품질이 나옵니다.",
      "단계형 폼은 첫 화면을 가볍게 만들고 뒤로 갈수록 구체화하는 방식입니다. 다만 단계가 많으면 중간 이탈 지점을 반드시 측정해야 합니다.",
      "필드 라벨은 질문형으로 바꾸면 이해도가 올라가는 경우가 많습니다. ‘회사명’보다 ‘어느 회사에서 연락드리면 될까요?’처럼 맥락을 주면 입력 오류도 줄어듭니다.",
    ].join("\n\n"),
  },
  {
    id: "cnt-2026-service",
    slug: "jimmyweb-2026-service-lineup",
    title: "지미웹 2026 서비스 라인업 안내",
    excerpt:
      "랜딩·홈페이지·맞춤 제작·운영 대행 범위를 한눈에 정리한 공지입니다.",
    category: "agency-news",
    thumbnail: "/images/contents/jimmyweb-2026-service-lineup.webp",
    publishedAt: "2026-01-08T09:00:00.000Z",
    author: "지미웹",
    tags: ["공지", "서비스", "지미웹"],
    content: [
      "2026년에는 랜딩·홈페이지 제작뿐 아니라 맞춤 기능과 운영 대행까지 한 흐름으로 상담할 수 있도록 범위를 정리했습니다. 프로젝트 성격에 따라 최소 산출물과 일정을 먼저 합의하는 방식을 유지합니다.",
      "캠페인성 랜딩은 전환 목표와 측정 지표를 함께 정한 뒤 디자인에 들어갑니다. 기업 홈은 정보 구조와 콘텐츠 우선순위를 먼저 잡고 섹션을 배치합니다.",
      "맞춤 제작은 연동·권한·데이터 흐름이 포함될수록 초기 정의가 중요합니다. 운영 대행은 업데이트 주기와 장애 대응 범위를 계약 단계에서 명확히 나눕니다.",
    ].join("\n\n"),
  },
  {
    id: "cnt-performance-budget",
    slug: "web-performance-budget-intro",
    title: "웹 퍼포먼스 예산(Performance budget)이란",
    excerpt:
      "속도는 기능과 마찬가지로 요구사항입니다. 퍼포먼스 예산 개념을 쉽게 소개합니다.",
    category: "guide",
    thumbnail: "/images/contents/web-performance-budget-intro.webp",
    publishedAt: "2026-02-03T09:00:00.000Z",
    author: "지미웹",
    tags: ["성능", "LCP", "웹표준"],
    content: [
      "퍼포먼스 예산은 ‘이 정도면 충분히 빠르다’를 수치로 합의해 두는 일입니다. 예를 들어 LCP 목표 시간, JS 번들 상한, 이미지 최대 용량처럼 측정 가능한 지표로 잡습니다.",
      "예산은 페이지 유형마다 달라질 수 있습니다. 랜딩은 첫 화면 이미지와 폰트 로딩이 핵심이고, 콘텐츠형 페이지는 긴 본문과 목차 상호작용이 추가됩니다.",
      "예산을 지키려면 디자인 단계에서 이미지 스펙과 폰트 수를 제한하고, 개발 단계에서 불필요한 스크립트를 줄이는 것이 중요합니다. 배포 후에는 실제 사용자 환경에서 지표를 다시 보는 것이 마무리입니다.",
    ].join("\n\n"),
  },
] as const;

export function getContentHref(slug: string): `/contents/${string}` {
  return `/contents/${slug}`;
}

export function getContentBySlug(slug: string): ContentPost | undefined {
  return contents.find((c) => c.slug === slug);
}

/** 같은 카테고리 우선, 그다음 최근 글 순으로 관련 글 후보를 고른다. */
export function getRelatedContents(
  slug: string,
  limit = 3,
): readonly ContentPost[] {
  const current = getContentBySlug(slug);
  if (!current) return [];

  const others = contents.filter((c) => c.slug !== slug);
  const sameCategory = others.filter((c) => c.category === current.category);
  const rest = others.filter((c) => c.category !== current.category);

  const merged = [...sameCategory, ...rest].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return merged.slice(0, limit);
}
