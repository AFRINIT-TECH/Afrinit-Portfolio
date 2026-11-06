import React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "dark" | "white";
  className?: string;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "dark",
  className,
  as: Component = "div",
  ...props
}) => {
  const variantStyles = {
    dark: "bg-brown-900 border border-brown-800 text-sand-100",
    white: "bg-white border border-neutral-200 text-ink-900",
  }[variant];

  return (
    <Component
      className={clsx(
        "rounded-[16px] p-6 sm:p-8 transition-colors duration-150",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
