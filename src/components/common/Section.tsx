import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

/**
 * 시맨틱 섹션 래퍼 + 섹션 간 세로 여백만 담당한다.
 * 가로 폭·패딩 제한은 `Container`와 조합해 사용한다.
 */
export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={["py-14 sm:py-16 lg:py-20", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

/** 섹션 상단 블록: 제목·설명을 묶어 간격을 맞춘다. */
export function SectionHeader({ children, className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={["flex flex-col gap-3", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

type SectionTitleProps = ComponentPropsWithoutRef<"h2"> & {
  children: ReactNode;
};

/** 섹션 제목 타이포그래피 기본값 */
export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={[
        "text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </h2>
  );
}

type SectionDescriptionProps = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
};

/** 섹션 부가 설명 타이포그래피 기본값 */
export function SectionDescription({
  children,
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={[
        "max-w-prose text-base leading-relaxed text-neutral-600",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
