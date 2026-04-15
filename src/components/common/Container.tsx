import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * 콘텐츠 최대 폭·가운데 정렬·반응형 좌우 여백만 담당하는 공통 래퍼.
 * 배경·섹션 타이틀 등은 상위에서 처리한다.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
