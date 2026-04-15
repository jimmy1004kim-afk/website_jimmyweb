import { Container } from "@/components/common/Container";
import { siteMeta } from "@/data/site";

/**
 * 공통 하단 푸터 뼈대.
 * 내비게이션·연락처 세부값은 이후 `mainNavigation` 및 연락처 데이터와 연결한다.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="min-w-0">
            <p className="text-base font-semibold tracking-tight text-neutral-900">
              {siteMeta.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
              {siteMeta.tagline}
            </p>
          </div>

          <nav aria-label="푸터 바로가기">
            <p className="text-sm font-medium text-neutral-900">바로가기</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>홈</li>
              <li>회사소개</li>
              <li>서비스</li>
              <li>문의</li>
            </ul>
            <p className="mt-3 text-xs text-neutral-400">
              링크 연결은 추후 진행합니다.
            </p>
          </nav>

          <div>
            <p className="text-sm font-medium text-neutral-900">연락처</p>
            <div className="mt-4 space-y-2 text-sm text-neutral-600">
              <p>이메일: 준비 중</p>
              <p>전화: 준비 중</p>
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              상세 연락처는 추후 반영합니다.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6">
          <p className="text-center text-xs text-neutral-500">
            © {year} {siteMeta.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
