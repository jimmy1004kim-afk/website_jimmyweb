import Link from "next/link";
import { Container } from "@/components/common/Container";
import { getButtonClassName } from "@/components/common/Button";
import { mainNavigation, siteMeta, type NavItem } from "@/data/site";

const navLinkClass =
  "inline-flex items-center rounded-md px-2 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900";

function MainNavItem({ item }: { item: NavItem }) {
  if (item.children?.length) {
    return (
      <li className="group relative">
        <Link href={item.href} className={navLinkClass}>
          {item.label}
        </Link>
        <div
          className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100"
          role="presentation"
        >
          <ul
            className="min-w-[13rem] rounded-md border border-neutral-200 bg-white py-2 shadow-md"
            role="list"
          >
            {item.children.map((sub) => (
              <li key={sub.id}>
                <Link
                  href={sub.href}
                  className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link href={item.href} className={navLinkClass}>
        {item.label}
      </Link>
    </li>
  );
}

/**
 * 공통 상단 헤더 — `mainNavigation` 기반 데스크톱 메뉴, 서비스만 드롭다운.
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
            <ul className="flex items-center gap-6 xl:gap-8">
              {mainNavigation.map((item) => (
                <MainNavItem key={item.id} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center justify-end">
            <Link
              href={siteMeta.ctaHref}
              className={getButtonClassName({ size: "sm" })}
            >
              {siteMeta.ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
