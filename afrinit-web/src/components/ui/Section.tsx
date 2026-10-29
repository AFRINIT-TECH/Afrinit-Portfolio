import React from "react";
import clsx from "clsx";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "dark-raised" | "white" | "orange";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  variant = "dark",
  ...props
}) => {
  const variantStyles = {
    dark: "bg-brown-950 text-sand-100",
    "dark-raised": "bg-brown-900 text-sand-100",
    white: "bg-white text-ink-900",
    orange: "bg-orange-500 text-brown-950",
  }[variant];

  return (
    <section
      id={id}
      className={clsx(
        "relative py-16 md:py-20 lg:py-[104px] scroll-mt-20",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
