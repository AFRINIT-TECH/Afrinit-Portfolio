import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { MaintenanceBanner } from "./MaintenanceBanner";
import { SpiderButton } from "@/components/ui/SpiderButton";

export const Header = ({ currentPage, onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | null
  const headerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const closeDropdown = () => setActiveDropdown(null);

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

          {/* What we do (Solutions Dropdown) */}
          <div
            className="relative py-3"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown((prev) => (prev === "solutions" ? null : "solutions"));
              }}
              className={`inline-flex items-center gap-1.5 cursor-pointer py-1 transition-colors hover:text-[#6d001a] ${
                currentPage === "solutions" || activeDropdown === "solutions"
                  ? "text-[#6d001a] font-bold"
                  : "text-[#454545]"
              }`}
              aria-expanded={activeDropdown === "solutions"}
            >
              What We Do
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180 text-[#6d001a]" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Megamenu: What We Do */}
            {activeDropdown === "solutions" && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-1 z-50">
                <div className="w-[560px] max-w-[calc(100vw-32px)] rounded-2xl border border-black/12 bg-white p-6 shadow-2xl backdrop-blur-xl">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Left: Software Services */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#6d001a] mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6d001a]" />
                        Services
                      </p>
                      <ul className="space-y-1">
                        {siteConfig.solutions.services.map((s, idx) => (
                          <li key={idx}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeDropdown();
                                onNavigate("solutions", { serviceIndex: idx });
                              }}
                              className="w-full text-left rounded-lg p-2 hover:bg-black/[0.04] transition-colors block cursor-pointer group"
                            >
                              <p className="text-xs font-bold text-black group-hover:text-[#6d001a] transition-colors">
                                {s.title}
                              </p>
                              <p className="text-[11px] text-[#525252] line-clamp-1 mt-0.5">
                                {s.description}
                              </p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Practice Focus / Sectors */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#6d001a] mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6d001a]" />
                        Focus Areas
                      </p>
                      <ul className="space-y-1">
                        {siteConfig.solutions.sectors.map((sec, idx) => (
                          <li key={idx}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                closeDropdown();
                                onNavigate("solutions", { scrollTo: "sectors" });
                              }}
                              className="w-full text-left rounded-lg p-2 hover:bg-black/[0.04] transition-colors block cursor-pointer group"
                            >
                              <p className="text-xs font-bold text-black group-hover:text-[#6d001a] transition-colors">
                                {sec.title}
                              </p>
                              <span className="inline-block mt-0.5 text-[10px] text-[#6d001a] font-semibold bg-[#6d001a]/10 px-2 py-0.5 rounded-full">
                                {sec.badge}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between text-xs">
                    <span className="text-[#525252]">Looking for all practice areas?</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeDropdown();
                        onNavigate("solutions");
                      }}
                      className="font-bold text-[#6d001a] hover:underline cursor-pointer flex items-center gap-1.5 group"
                    >
                      All solutions & sectors
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

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