import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
  secondary:
    "border border-neutral-300 bg-white text-neutral-900 shadow-sm hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "rounded-md px-3 py-1.5 text-sm font-medium",
  md: "rounded-md px-4 py-2 text-sm font-medium",
  lg: "rounded-md px-5 py-2.5 text-base font-medium",
};

const baseClass =
  "inline-flex items-center justify-center transition-colors disabled:pointer-events-none disabled:opacity-50";

/** `<Link>` 등에 부여해 Button과 동일한 시각 스타일을 맞출 때 사용한다. */
export function getButtonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return [baseClass, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
