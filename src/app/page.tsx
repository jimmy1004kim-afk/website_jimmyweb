import { Container } from "@/components/common/Container";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/common/Section";

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
      <Section id="hero" aria-labelledby="hero-heading">
        <Container>
          <div className="rounded-lg border border-dashed border-neutral-200 bg-neutral-50/80 px-4 py-16 text-center sm:py-20">
            <h1
              id="hero-heading"
              className="text-lg font-semibold text-neutral-700 sm:text-xl"
            >
              히어로
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              메인 메시지 · 시각 요소 — placeholder
            </p>
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
