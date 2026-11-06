import React from "react";
import Link from "next/link";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "solid-dark";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-colors duration-150 select-none cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    md: "min-h-[44px] px-6 py-2.5 text-[15px] sm:text-[16px]",
    lg: "min-h-[48px] px-8 py-3 text-[16px] sm:text-[17px]",
  }[size];

  const variantStyles = {
    primary:
      "bg-orange-500 text-brown-950 hover:bg-[#F28434] active:bg-[#D96815] shadow-xs",
    outline:
      "border-[1.5px] border-brown-600 bg-transparent text-sand-100 hover:border-sand-300 hover:text-white active:bg-brown-900/60",
    "solid-dark":
      "bg-brown-950 text-sand-100 hover:bg-brown-900 active:bg-brown-800",
  }[variant];

  const combinedClasses = clsx(baseStyles, sizeStyles, variantStyles, className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
