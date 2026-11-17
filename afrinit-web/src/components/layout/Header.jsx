import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = ({ currentPage, onNavigate }) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#3d2d22]/15 bg-[#f5efe4]/95 backdrop-blur-md">
      <div className="flex h-[78px] w-full items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Brand Logo */}
        <button
          className="flex items-center cursor-pointer transition-opacity hover:opacity-85"
          aria-label="Afrinit home"
          onClick={() => {
            setSolutionsDropdownOpen(false);
            onNavigate("home");
          }}
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#231c17]"
        >
          {/* About */}
          <button
            onClick={() => {
              setSolutionsDropdownOpen(false);
              onNavigate("about");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "about"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            About us
          </button>

          {/* Solutions with Dropdown */}
          <div
            className="relative py-2"
            ref={dropdownRef}
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSolutionsDropdownOpen((prev) => !prev);
              }}
              className={`inline-flex items-center gap-1.5 cursor-pointer py-1 transition-colors hover:text-[#9c6849] ${
                currentPage === "solutions"
                  ? "text-[#9c6849] font-bold"
                  : "text-[#5f5249]"
              }`}
              aria-expanded={solutionsDropdownOpen}
            >
              What we do
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  solutionsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu (Nerds-style) with seamless top padding to prevent mouse leave gap */}
            {solutionsDropdownOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
                <div className="w-[520px] rounded-2xl border border-[#3d2d22]/15 bg-[#f5efe4] p-6 shadow-2xl backdrop-blur-xl">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#79513a] mb-3">
                        Software Services
                      </p>
                      <ul className="space-y-1.5">
                        {siteConfig.solutions.services.slice(0, 4).map((s, idx) => (
                          <li key={idx}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSolutionsDropdownOpen(false);
                                onNavigate("solutions", { serviceIndex: idx });
                              }}
                              className="w-full text-left rounded-lg p-2 hover:bg-[#d7c4ae]/30 hover:text-[#9c6849] transition-colors block cursor-pointer"
                            >
                              <p className="text-xs font-bold text-[#231c17]">{s.title}</p>
                              <p className="text-[11px] text-[#5f5249] line-clamp-1 mt-0.5">{s.description}</p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#79513a] mb-3">
                        Sectors & Rails
                      </p>
                      <ul className="space-y-1.5">
                        {siteConfig.solutions.sectors.slice(0, 4).map((sec, idx) => (
                          <li key={idx}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSolutionsDropdownOpen(false);
                                onNavigate("solutions", { scrollTo: "sectors" });
                              }}
                              className="w-full text-left rounded-lg p-2 hover:bg-[#d7c4ae]/30 hover:text-[#9c6849] transition-colors block cursor-pointer"
                            >
                              <p className="text-xs font-bold text-[#231c17]">{sec.title}</p>
                              <span className="text-[10px] text-[#79513a] font-semibold">{sec.badge}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#3d2d22]/10 flex items-center justify-between text-xs">
                    <span className="text-[#5f5249]">Looking for our full capabilities?</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSolutionsDropdownOpen(false);
                        onNavigate("solutions");
                      }}
                      className="font-bold text-[#9c6849] hover:underline cursor-pointer"
                    >
                      All solutions & capabilities →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work / Cases */}
          <button
            onClick={() => {
              setSolutionsDropdownOpen(false);
              onNavigate("projects");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "projects"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            Cases
          </button>

          {/* Impact */}
          <button
            onClick={() => {
              setSolutionsDropdownOpen(false);
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

          {/* People & Culture */}
          <button
            onClick={() => {
              setSolutionsDropdownOpen(false);
              onNavigate("people");
            }}
            className={`cursor-pointer transition-colors hover:text-[#9c6849] ${
              currentPage === "people"
                ? "text-[#9c6849] font-bold"
                : "text-[#5f5249]"
            }`}
          >
            People
          </button>

          {/* FAQ */}
          <button
            onClick={() => {
              setSolutionsDropdownOpen(false);
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
              setSolutionsDropdownOpen(false);
              onNavigate("contact");
            }}
            className="group m-0 hidden items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition sm:flex bg-[#231c17] hover:bg-[#9c6849] cursor-pointer"
          >
            {siteConfig.navigation.cta.label}
            <span className="transition-transform group-hover:translate-x-1">
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
