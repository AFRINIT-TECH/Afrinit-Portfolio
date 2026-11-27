import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { MaintenanceBanner } from "./MaintenanceBanner";
import { SpiderButton } from "@/components/ui/SpiderButton";

export const Header = ({ currentPage, onNavigate }) => {
  const headerRef = useRef(null);

  // Sync actual header height to document root for seamless padding across viewports
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const closeDropdown = () => {};

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md transition-all"
    >
      <MaintenanceBanner />
      <div className="flex h-[78px] w-full items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Brand Logo */}
        <button
          className="flex items-center cursor-pointer transition-opacity hover:opacity-80 focus:outline-none"
          aria-label="Azzmar home"
          onClick={() => {
            closeDropdown();
            onNavigate("home");
          }}
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-black"
        >
          {/* About us */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("about");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "about"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            About
          </button>

          {/* What We Do */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("solutions");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "solutions"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            What We Do
          </button>

          {/* Work (Projects) */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("projects");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "projects"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            Work
          </button>

          {/* Partners */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("partners");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "partners"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            Partners
          </button>

          {/* Impact */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("impact");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "impact"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            Impact
          </button>

          {/* Our Team */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("team");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "team"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            Our Team
          </button>

          {/* FAQ */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("faq");
            }}
            className={`cursor-pointer transition-colors hover:text-[#6d001a] ${
              currentPage === "faq"
                ? "text-[#6d001a] font-bold"
                : "text-[#454545]"
            }`}
          >
            FAQ
          </button>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <SpiderButton
            onClick={() => {
              closeDropdown();
              onNavigate("quote");
            }}
            className={`m-0 hidden items-center rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:flex cursor-pointer ${
              currentPage === "quote"
                ? "border-[#6d001a] bg-[#6d001a] text-white"
                : "border-black/20 bg-white text-black hover:border-[#6d001a] hover:text-[#6d001a]"
            }`}
          >
            Request Quote
          </button>
          <button
            onClick={() => {
              closeDropdown();
              onNavigate(siteConfig.navigation.cta.page || "partners");
            }}
            className="m-0 hidden px-5 py-2.5 text-sm font-semibold shadow-sm sm:inline-flex"
          >
            {siteConfig.navigation.cta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </SpiderButton>
          <MobileMenu currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
};

export default Header;