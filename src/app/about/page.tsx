import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/common/Section";
import { siteMeta } from "@/data/site";

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

      <Section
        id="about-intro"
        aria-labelledby="about-intro-heading"
        className="border-b border-neutral-100 bg-white"
      >
        <Container>
          <div className="max-w-2xl">
            <SectionHeader>
              <SectionTitle id="about-intro-heading">소개</SectionTitle>
              <SectionDescription>
                {siteMeta.name}은 합리적인 가격과 짧은 제작 기간으로 홈페이지·
                랜딩을 다루는 실무형 웹 에이전시입니다.
              </SectionDescription>
            </SectionHeader>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
              <p>
                홈페이지 제작은 비싸고 오래 걸린다는 인식이 흔합니다.{" "}
                {siteMeta.name}은 그 부담을 줄이는 일을 먼저 두고, 필요한 범위와
                일정을 함께 맞추는 방식으로 일합니다.
              </p>
              <p>
                소상공인·스타트업을 포함해, 웹을 처음 준비하거나 교체하는 팀도
                부담 없이 시작할 수 있도록 견적과 산출물을 명확히 맞추는 데
                집중합니다.
              </p>
            </div>

            <ul
              className="mt-10 space-y-3 border-l-2 border-neutral-200 py-0.5 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]"
              aria-label={`${siteMeta.name}이 중요하게 여기는 방향`}
            >
              <li>
                <span className="font-medium text-neutral-800">
                  합리적인 가격과 범위
                </span>
                — 불필요한 항목을 줄이고, 맞춤 범위로 견적을 제안합니다.
              </li>
              <li>
                <span className="font-medium text-neutral-800">
                  빠른 제작과 일정
                </span>
                — 짧은 제작 흐름을 전제로, 약속한 일정에 맞추는 것을
                중요하게 봅니다.
              </li>
              <li>
                <span className="font-medium text-neutral-800">
                  운영 가능한 결과
                </span>
                — 전달 후에도 바로 수정·운영에 쓸 수 있는 형태로 마무리하는
                것을 목표로 합니다.
              </li>
            </ul>
          </div>
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
