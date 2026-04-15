import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button, getButtonClassName } from "@/components/common/Button";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/common/Section";
import { services } from "@/data/services";
import {
  templates,
  type Template,
  type TemplateKind,
  type TemplateServiceType,
} from "@/data/templates";
import {
  portfolioItems,
  type PortfolioIndustry,
  type PortfolioItem,
  type PortfolioProjectType,
  type PortfolioServiceType,
} from "@/data/portfolio";
import { siteMeta } from "@/data/site";

/** 업종이 겹치지 않게 앞에서부터 고르고, 부족하면 순서대로 채워 최대 4건 */
function getPortfolioPreviewItems(
  list: readonly PortfolioItem[],
  max = 4,
): PortfolioItem[] {
  const seenIndustry = new Set<PortfolioIndustry>();
  const out: PortfolioItem[] = [];
  for (const item of list) {
    if (out.length >= max) break;
    if (seenIndustry.has(item.industry)) continue;
    seenIndustry.add(item.industry);
    out.push(item);
  }
  for (const item of list) {
    if (out.length >= max) break;
    if (out.some((p) => p.id === item.id)) continue;
    out.push(item);
  }
  return out.slice(0, max);
}

const portfolioPreviewItems = getPortfolioPreviewItems(portfolioItems);

const portfolioServiceTypeLabel: Record<PortfolioServiceType, string> = {
  landing: "랜딩",
  homepage: "홈페이지",
  custom: "맞춤 제작",
};

const portfolioProjectTypeLabel: Record<PortfolioProjectType, string> = {
  conversion: "전환형",
  info: "정보형",
};

const portfolioIndustryLabel: Record<PortfolioIndustry, string> = {
  saas: "SaaS·IT",
  commerce: "커머스",
  corporate: "기업·B2B",
  agency: "에이전시",
  "public-sector": "공공·교육",
};

/** 랜딩·홈 각각에서 전환형·정보형을 하나씩 골라 미리보기 4장 구성 */
function getTemplatePreviewItems(list: readonly Template[]): Template[] {
  const out: Template[] = [];
  for (const serviceType of ["landing", "homepage"] as const) {
    const subset = list.filter((t) => t.serviceType === serviceType);
    const conversion = subset.find((t) => t.templateType === "conversion");
    const info = subset.find((t) => t.templateType === "info");
    if (conversion) out.push(conversion);
    if (info) out.push(info);
  }
  return out;
}

const templatePreviewItems = getTemplatePreviewItems(templates);

const templateServiceTypeLabel: Record<TemplateServiceType, string> = {
  landing: "랜딩",
  homepage: "홈페이지",
};

const templateKindLabel: Record<TemplateKind, string> = {
  conversion: "전환형",
  info: "정보형",
};

const homeTestimonials = [
  {
    id: "ht-1",
    quote:
      "런칭 일정에 맞춰 빠르게 반영해 주셨고, 전환 목표도 함께 잡아 주셨습니다.",
    name: "김○○ 님",
    meta: "B2B SaaS · 랜딩 제작",
  },
  {
    id: "ht-2",
    quote:
      "메뉴와 매장 안내가 한눈에 들어오게 정리돼 문의·예약 문의가 늘었습니다.",
    name: "이○○ 님",
    meta: "로컬 카페 · 홈페이지",
  },
  {
    id: "ht-3",
    quote:
      "정보 구조부터 잡아 주셔서 담당자가 바뀌어도 수정·운영이 수월합니다.",
    name: "(주)○○테크",
    meta: "제조·B2B · 기업 사이트 개편",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Section
        id="hero"
        aria-labelledby="hero-heading"
        className="border-b border-neutral-100 bg-white pt-8 sm:pt-10"
      >
        <Container>
          <div className="grid gap-10 pb-1 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-medium text-neutral-500">
                {siteMeta.name} · 실무형 웹 제작
              </p>
              <h1
                id="hero-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.45rem] lg:leading-[1.15]"
              >
                비싸고 오래 걸리는 홈페이지 제작, 이제 빠르게 시작하세요
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
                운영에 바로 쓸 수 있는 사이트를, 부담 없는 범위로 제안합니다.
              </p>
              <div className="mt-8">
                <Link
                  href={siteMeta.ctaHref}
                  className={getButtonClassName({ size: "lg" })}
                >
                  무료 상담 받기
                </Link>
              </div>
              <ul
                className="mt-8 flex flex-wrap gap-2 sm:gap-3"
                aria-label="핵심 가치"
              >
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  맞춤 범위 제안
                </li>
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  짧은 제작 일정
                </li>
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  오픈 후 바로 운영
                </li>
              </ul>
            </div>
            <aside
              className="rounded-xl border border-neutral-200 bg-neutral-50/90 p-6 shadow-sm lg:p-8"
              aria-label="제작 포지션 요약"
            >
              <p className="text-sm font-semibold text-neutral-900">
                비용과 일정 부담을 줄입니다
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="border-b border-neutral-200/80 pb-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    문제
                  </dt>
                  <dd className="mt-1.5 text-neutral-700">
                    홈페이지 제작은 비용과 기간이 부담스러운 경우가 많습니다.
                  </dd>
                </div>
                <div className="border-b border-neutral-200/80 pb-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    해결
                  </dt>
                  <dd className="mt-1.5 text-neutral-700">
                    범위와 일정을 먼저 맞춘 뒤, 짧은 제작 흐름으로 진행합니다.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    결과
                  </dt>
                  <dd className="mt-1.5 text-neutral-700">
                    전달 직후부터 운영·수정에 투입할 수 있는 결과물입니다.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section
        id="type-select"
        aria-labelledby="type-select-heading"
        className="bg-neutral-50/50"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="type-select-heading">
              목적에 맞는 유형을 선택하세요
            </SectionTitle>
            <SectionDescription>
              전환과 정보 전달 중 무엇을 우선할지 정하면, 이후 기획·견적 논의가
              빨라집니다.
            </SectionDescription>
          </SectionHeader>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
            <article
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-400 hover:shadow-md lg:p-8"
              data-template-kind="conversion"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                전환형
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                목표 행동이 분명한 페이지
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                문의·가입·구매 등 <strong>한 가지 전환</strong>에 맞춰 구조와
                카피를 설계합니다.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                캠페인 랜딩, 제품 런칭, 리드 수집처럼 &ldquo;지금 행동&rdquo;을
                유도할 때 적합합니다.
              </p>
              <p className="mt-auto pt-5 text-xs text-neutral-500">
                캠페인·런칭 등 행동 유도에 초점
              </p>
            </article>

            <article
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-400 hover:shadow-md lg:p-8"
              data-template-kind="info"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                정보형
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                신뢰와 탐색을 돕는 페이지
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                회사·서비스·콘텐츠를 <strong>구조적으로 소개</strong>하고
                탐색하기 쉽게 만듭니다.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                브랜드 신뢰, 검색 유입, 담당자 연결이 목적일 때 적합합니다.
              </p>
              <p className="mt-auto pt-5 text-xs text-neutral-500">
                기업·브랜드 홈, 소개 중심 사이트에 초점
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section
        id="services-summary"
        aria-labelledby="services-heading"
        className="bg-white"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="services-heading">서비스 요약</SectionTitle>
            <SectionDescription>
              랜딩부터 운영까지, 필요한 범위만 골라 제안합니다.
            </SectionDescription>
          </SectionHeader>

          <ul className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li key={service.id}>
                <article className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {service.shortDescription}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4 text-sm text-neutral-700">
                    {service.highlights.slice(0, 3).map((line, index) => (
                      <li
                        key={`${service.id}-highlight-${index}`}
                        className="flex gap-2"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center sm:mt-14">
            <Link
              href="/services"
              className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              서비스 전체 보기
            </Link>
          </p>
        </Container>
      </Section>

      <Section
        id="templates-preview"
        aria-labelledby="templates-heading"
        className="bg-white"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="templates-heading">템플릿 미리보기</SectionTitle>
            <SectionDescription>
              조합별 레이아웃을 미리 보고, 상세는 템플릿 페이지에서 이어가면
              됩니다.
            </SectionDescription>
          </SectionHeader>

          <ul className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {templatePreviewItems.map((template) => (
              <li key={template.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm ring-1 ring-neutral-900/5">
                  <div
                    className="flex aspect-[16/10] items-center justify-center bg-neutral-100 text-xs text-neutral-400"
                    aria-hidden
                  >
                    썸네일
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs font-medium text-neutral-700">
                        {templateServiceTypeLabel[template.serviceType]}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-xs font-medium text-neutral-600">
                        {templateKindLabel[template.templateType]}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold tracking-tight text-neutral-900">
                      {template.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {template.shortDescription}
                    </p>
                    <ul className="mt-3 space-y-1.5 border-t border-neutral-100 pt-3 text-sm text-neutral-700">
                      {template.highlights.slice(0, 2).map((line, index) => (
                        <li
                          key={`${template.id}-h-${index}`}
                          className="flex gap-2"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                            aria-hidden
                          />
                          <span className="line-clamp-2">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center sm:mt-14">
            <Link
              href="/templates"
              className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              템플릿 전체 보기
            </Link>
          </p>
        </Container>
      </Section>

      <Section
        id="portfolio-preview"
        aria-labelledby="portfolio-heading"
        className="bg-neutral-50/50"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="portfolio-heading">포트폴리오 미리보기</SectionTitle>
            <SectionDescription>
              실제 제작·운영 사례 일부입니다. 업종과 제작 유형은 카드에서 함께
              확인할 수 있습니다.
            </SectionDescription>
          </SectionHeader>

          <ul className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioPreviewItems.map((project) => (
              <li key={project.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm ring-1 ring-neutral-900/5">
                  <div
                    className="flex aspect-[16/10] flex-col justify-end bg-neutral-800 px-4 py-3"
                    aria-hidden
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Case study
                    </span>
                    <span className="mt-1 truncate text-xs font-medium text-neutral-100">
                      {portfolioIndustryLabel[project.industry]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs font-medium text-neutral-800">
                        {portfolioServiceTypeLabel[project.serviceType]}
                      </span>
                      <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 text-xs text-neutral-600">
                        {portfolioProjectTypeLabel[project.projectType]}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold tracking-tight text-neutral-900">
                      {project.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                      {project.shortDescription}
                    </p>
                    <ul className="mt-3 space-y-1.5 border-t border-neutral-100 pt-3 text-sm text-neutral-700">
                      {project.highlights.slice(0, 2).map((line, index) => (
                        <li
                          key={`${project.id}-h-${index}`}
                          className="flex gap-2"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-500"
                            aria-hidden
                          />
                          <span className="line-clamp-2">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center sm:mt-14">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              포트폴리오 전체 보기
            </Link>
          </p>
        </Container>
      </Section>

      <Section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="bg-white"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="testimonials-heading">고객 후기</SectionTitle>
            <SectionDescription>
              협업 과정과 결과에 대한 짧은 소감입니다. 사례 카드와 함께 참고해
              주세요.
            </SectionDescription>
          </SectionHeader>

          <ul className="mt-10 grid list-none gap-6 sm:mt-12 lg:grid-cols-3">
            {homeTestimonials.map((item) => (
              <li key={item.id}>
                <figure className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <blockquote className="flex-1">
                    <p className="text-sm leading-relaxed text-neutral-700">
                      <span className="text-neutral-400" aria-hidden>
                        &ldquo;
                      </span>
                      {item.quote}
                      <span className="text-neutral-400" aria-hidden>
                        &rdquo;
                      </span>
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-neutral-100 pt-4">
                    <p className="text-sm font-semibold text-neutral-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">{item.meta}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section
        id="cta"
        aria-labelledby="cta-heading"
        className="border-t border-neutral-800 bg-neutral-900"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeader className="items-center gap-4 text-center">
              <SectionTitle
                id="cta-heading"
                className="text-balance text-white sm:text-3xl"
              >
                상담으로 일정과 범위를 정리해 보세요
              </SectionTitle>
              <SectionDescription className="mx-auto max-w-lg text-neutral-300">
                무료입니다. 영업일 기준으로 빠르게 회신드리며, 짧게 나눠 보셔도
                됩니다.
              </SectionDescription>
            </SectionHeader>

            <div className="mt-10 flex justify-center sm:mt-12">
              <Button type="button" size="lg" variant="secondary">
                {siteMeta.ctaLabel}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
