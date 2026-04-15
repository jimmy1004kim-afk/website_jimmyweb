import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/common/Section";

export const metadata: Metadata = {
  title: "회사소개",
};

/** 이후 단계에서 실제 콘텐츠로 교체할 영역 표시 */
function AboutBlockPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="mt-8 min-h-[7rem] rounded-lg border border-dashed border-neutral-200 bg-neutral-50/80 px-4 py-6 text-center text-sm text-neutral-400"
      aria-hidden
    >
      {label}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">회사소개</h1>

      <Section id="about-intro" aria-labelledby="about-intro-heading">
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="about-intro-heading">소개</SectionTitle>
            <SectionDescription>
              Placeholder — 이후 단계에서 회사 소개 카피·이미지를 배치합니다.
            </SectionDescription>
          </SectionHeader>
          <AboutBlockPlaceholder label="소개 섹션 콘텐츠 영역" />
        </Container>
      </Section>

      <Section
        id="about-values"
        aria-labelledby="about-values-heading"
        className="bg-neutral-50/50"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="about-values-heading">핵심 가치</SectionTitle>
            <SectionDescription>
              Placeholder — 이후 단계에서 가치 제안·키워드를 배치합니다.
            </SectionDescription>
          </SectionHeader>
          <AboutBlockPlaceholder label="핵심 가치 섹션 콘텐츠 영역" />
        </Container>
      </Section>

      <Section id="about-trust" aria-labelledby="about-trust-heading">
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="about-trust-heading">신뢰 요소</SectionTitle>
            <SectionDescription>
              Placeholder — 이후 단계에서 실적·프로세스·파트너 등을 배치합니다.
            </SectionDescription>
          </SectionHeader>
          <AboutBlockPlaceholder label="신뢰 요소 섹션 콘텐츠 영역" />
        </Container>
      </Section>

      <Section
        id="about-cta"
        aria-labelledby="about-cta-heading"
        className="border-t border-neutral-200 bg-neutral-50/50"
      >
        <Container>
          <SectionHeader className="max-w-2xl">
            <SectionTitle id="about-cta-heading">문의하기</SectionTitle>
            <SectionDescription>
              Placeholder — 이후 단계에서 CTA 버튼·문의 유도 카피를 배치합니다.
            </SectionDescription>
          </SectionHeader>
          <AboutBlockPlaceholder label="CTA 섹션 콘텐츠 영역" />
        </Container>
      </Section>
    </>
  );
}
