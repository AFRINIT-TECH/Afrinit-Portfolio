import React from "react";
import clsx from "clsx";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  as?: React.ElementType;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  variant = "dark",
  className,
  as: Component = "p",
  ...props
}) => {
  return (
    <Component
      className={clsx(
        "text-[14px] font-bold uppercase tracking-wider",
        variant === "dark" ? "text-green-400" : "text-green-700",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
