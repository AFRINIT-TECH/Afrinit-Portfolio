import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-lg ${
        className || ""
      }`}
      aria-label={`${siteConfig.navigation.brand} homepage`}
    >
      {/* 28px orange rounded square logo mark */}
      <span
        className="w-7 h-7 rounded-[7px] bg-orange-500 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <span className="w-3.5 h-3.5 bg-brown-950 rounded-[3px] rotate-45 transform transition-transform group-hover:rotate-90 duration-300" />
      </span>
      <span className="font-heading font-bold text-[22px] tracking-tight text-sand-100">
        {siteConfig.navigation.brand}
      </span>
    </Link>
  );
};
