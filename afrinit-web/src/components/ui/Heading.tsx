import React from "react";
import clsx from "clsx";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  variant?: "hero" | "section" | "card" | "subheading";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  variant,
  className,
  as,
  ...props
}) => {
  const Component = as || (`h${level}` as const);

  const resolvedVariant =
    variant || (level === 1 ? "hero" : level === 2 ? "section" : "card");

  const variantStyles = {
    hero: "text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.08] tracking-[-0.03em] font-heading",
    section: "text-[clamp(32px,4.4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] font-heading",
    card: "text-[22px] md:text-[24px] font-bold leading-[1.25] tracking-[-0.01em] font-heading",
    subheading: "text-[18px] md:text-[20px] font-semibold leading-[1.3] font-heading",
  }[resolvedVariant];

  return (
    <Component className={clsx(variantStyles, className)} {...props}>
      {children}
    </Component>
  );
};
