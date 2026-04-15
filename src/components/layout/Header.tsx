import Link from "next/link";
import { Container } from "@/components/common/Container";
import { siteMeta } from "@/data/site";

/**
 * 공통 상단 헤더 뼈대.
 * 메뉴·CTA 내용은 이후 단계에서 `mainNavigation` / Button 등과 연결한다.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between gap-6 md:h-16">
          <div className="flex min-w-0 shrink-0 items-center">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-neutral-900 md:text-xl"
            >
              {siteMeta.name}
            </Link>
          </div>

          <nav
            className="hidden min-h-10 flex-1 items-center justify-center lg:flex"
            aria-label="주 메뉴"
          >
            {/* 메뉴 슬롯: 추후 mainNavigation 기반 렌더링 */}
            <ul className="flex items-center gap-8" />
          </nav>

          <div
            className="flex shrink-0 items-center justify-end"
            data-slot="header-cta"
          >
            {/* CTA 슬롯: 추후 siteMeta.ctaLabel + Button + Link */}
            <div
              className="h-9 min-w-[5.5rem] rounded-md border border-dashed border-neutral-300 bg-transparent"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
