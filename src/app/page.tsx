import Link from "next/link";
import { Container } from "@/components/common/Container";
import { getButtonClassName } from "@/components/common/Button";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/common/Section";
import { siteMeta } from "@/data/site";

function SectionPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="mt-8 min-h-[7rem] rounded-lg border border-dashed border-neutral-200 bg-neutral-50/80 px-4 py-6 text-center text-sm text-neutral-400"
      aria-hidden
    >
      {label} — 추후 구현
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Section
        id="hero"
        aria-labelledby="hero-heading"
        className="border-b border-neutral-100 bg-white pt-8 sm:pt-10"
      >
        <Container>
          <div className="grid gap-10 pb-2 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-medium text-neutral-500">
                실무형 웹 제작 · {siteMeta.name}
              </p>
              <h1
                id="hero-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.45rem] lg:leading-[1.15]"
              >
                비싸고 오래 걸리는 홈페이지 제작, 이제 빠르게 시작하세요
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
                합리적인 가격으로 바로 운영 가능한 홈페이지를 만들어드립니다
              </p>
              <div className="mt-8">
                <Link
                  href={siteMeta.ctaHref}
                  className={getButtonClassName({ size: "lg" })}
                >
                  {siteMeta.ctaLabel}
                </Link>
              </div>
              <ul
                className="mt-8 flex flex-wrap gap-2 sm:gap-3"
                aria-label="핵심 가치"
              >
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  합리적인 가격
                </li>
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  빠른 제작
                </li>
                <li className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700">
                  바로 운영 가능한 결과물
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
                    홈페이지 제작은 비싸고 오래 걸리는 경우가 많습니다.
                  </dd>
                </div>
                <div className="border-b border-neutral-200/80 pb-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    해결
                  </dt>
                  <dd className="mt-1.5 text-neutral-700">
                    합리적인 가격과 빠른 제작 프로세스로 맞춤 견적을 드립니다.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    결과
                  </dt>
                  <dd className="mt-1.5 text-neutral-700">
                    바로 운영에 투입할 수 있는 홈페이지를 전달합니다.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="type-select" aria-labelledby="type-select-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="type-select-heading">유형 선택</SectionTitle>
            <SectionDescription>
              랜딩·홈 등 제작 유형 안내 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="유형 선택 영역" />
        </Container>
      </Section>

      <Section id="services-summary" aria-labelledby="services-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="services-heading">서비스 요약</SectionTitle>
            <SectionDescription>
              제공 서비스 카드 요약 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="서비스 요약" />
        </Container>
      </Section>

      <Section id="templates-preview" aria-labelledby="templates-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="templates-heading">템플릿 미리보기</SectionTitle>
            <SectionDescription>
              템플릿 목록 일부 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="템플릿 미리보기" />
        </Container>
      </Section>

      <Section id="portfolio-preview" aria-labelledby="portfolio-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="portfolio-heading">포트폴리오 미리보기</SectionTitle>
            <SectionDescription>
              사례 일부 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="포트폴리오 미리보기" />
        </Container>
      </Section>

      <Section id="testimonials" aria-labelledby="testimonials-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="testimonials-heading">후기</SectionTitle>
            <SectionDescription>
              고객 후기 · 로고 등 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="후기" />
        </Container>
      </Section>

      <Section id="cta" aria-labelledby="cta-heading">
        <Container>
          <SectionHeader>
            <SectionTitle id="cta-heading">문의 CTA</SectionTitle>
            <SectionDescription>
              상담·문의 유도 — placeholder
            </SectionDescription>
          </SectionHeader>
          <SectionPlaceholder label="CTA" />
        </Container>
      </Section>
    </>
  );
}
