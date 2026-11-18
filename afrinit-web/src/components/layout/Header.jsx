import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

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

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[#3d2d22]/15 bg-[#f5efe4]/95 backdrop-blur-md transition-all"
    >
      <div className="flex h-[78px] w-full items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Brand Logo */}
        <button
          className="flex items-center cursor-pointer transition-opacity hover:opacity-85"
          aria-label="Afrinit home"
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
          className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#231c17]"
        >
          {/* About us */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("about");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "about"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
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
              className={`inline-flex items-center gap-1.5 cursor-pointer py-1 transition-colors hover:text-[#9c6849] ${
                currentPage === "solutions" || activeDropdown === "solutions"
                  ? "text-[#9c6849] font-bold"
                  : "text-[#5f5249]"
              }`}
              aria-expanded={activeDropdown === "solutions"}
            >
              What We Do
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180 text-[#9c6849]" : ""
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
                <div className="w-[560px] rounded-2xl border border-[#3d2d22]/15 bg-[#f5efe4] p-6 shadow-2xl backdrop-blur-xl">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Left: Software Services */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#79513a] mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9c6849]" />
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
                              className="w-full text-left rounded-lg p-2 hover:bg-[#d7c4ae]/30 transition-colors block cursor-pointer group"
                            >
                              <p className="text-xs font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                                {s.title}
                              </p>
                              <p className="text-[11px] text-[#5f5249] line-clamp-1 mt-0.5">
                                {s.description}
                              </p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Practice Focus / Sectors */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#79513a] mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9c6849]" />
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
                              className="w-full text-left rounded-lg p-2 hover:bg-[#d7c4ae]/30 transition-colors block cursor-pointer group"
                            >
                              <p className="text-xs font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                                {sec.title}
                              </p>
                              <span className="inline-block mt-0.5 text-[10px] text-[#79513a] font-semibold bg-[#9c6849]/10 px-2 py-0.5 rounded-full">
                                {sec.badge}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#3d2d22]/10 flex items-center justify-between text-xs">
                    <span className="text-[#5f5249]">Looking for all practice areas?</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        closeDropdown();
                        onNavigate("solutions");
                      }}
                      className="font-bold text-[#9c6849] hover:underline cursor-pointer flex items-center gap-1.5 group"
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
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "projects"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            Work
          </button>

          {/* Impact */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("impact");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "impact"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
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
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "team"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            Our Team
          </button>

          {/* Archives */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("archives");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "archives"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            Archives
          </button>

          {/* FAQ */}
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("faq");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "faq"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            FAQ
          </button>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              closeDropdown();
              onNavigate("contact");
            }}
            className="group m-0 hidden items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition sm:flex bg-[#231c17] hover:bg-[#9c6849] cursor-pointer shadow-sm hover:shadow-md"
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
          </button>
          <MobileMenu currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
};

export default Header;
