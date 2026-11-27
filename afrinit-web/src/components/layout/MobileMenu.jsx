import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";
import { SpiderButton } from "@/components/ui/SpiderButton";

export const MobileMenu = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null); // 'solutions' | null
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenAccordion(null);
    triggerRef.current?.focus();
  };

  // Keyboard navigation: Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Click outside detection: Closes dropdown when clicking/tapping anywhere outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const toggleAccordion = (name) => {
    setOpenAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Toggle Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`grid h-11 w-11 place-items-center rounded-full border transition-all cursor-pointer ${
          isOpen
            ? "border-[#6d001a] bg-[#6d001a] text-white shadow-md scale-102"
            : "border-black/15 text-black bg-white hover:bg-white hover:border-[#6d001a]"
        }`}
      >
        <span className="relative h-4 w-5">
          {isOpen ? (
            <>
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 bg-current transition-transform duration-300" />
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-current transition-transform duration-300" />
            </>
          ) : (
            <>
              <span className="absolute left-0 top-0.5 h-0.5 w-5 bg-current transition-all duration-300" />
              <span className="absolute left-0 top-2 h-0.5 w-3.5 bg-current transition-all duration-300" />
              <span className="absolute left-0 top-3.5 h-0.5 w-5 bg-current transition-all duration-300" />
            </>
          )}
        </span>
      </button>

      {/* Dropdown Menu Container & Backdrop */}
      {isOpen && (
        <>
          {/* Subtle dismissible backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Elevated Floating Dropdown Card */}
          <div
            ref={menuRef}
            role="menu"
            aria-label="Mobile navigation dropdown"
            className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(380px,calc(100vw-32px))] max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-black/12 bg-white p-4 shadow-2xl backdrop-blur-xl animate-dropdown overscroll-contain text-black"
          >
            <nav className="flex flex-col space-y-1">
              {/* About */}
              <button
                onClick={() => {
                  onNavigate("about");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "about"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                About
              </button>

              {/* What we do (Collapsible Accordion) */}
              <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleAccordion("solutions")}
                  className="flex items-center justify-between w-full min-h-[42px] px-3.5 py-2 text-sm font-semibold text-black text-left cursor-pointer"
                >
                  <span>What We Do</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openAccordion === "solutions" ? "rotate-180 text-[#6d001a]" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openAccordion === "solutions" && (
                  <div className="px-3.5 pb-3 pt-1 space-y-1.5 border-t border-black/10 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d001a] pt-1">
                      Services
                    </p>
                    {siteConfig.solutions.services.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate("solutions", { serviceIndex: idx });
                          closeMenu();
                        }}
                        className="block w-full text-left py-1 text-xs text-[#454545] hover:text-[#6d001a] transition-colors"
                      >
                        • {s.title}
                      </button>
                    ))}
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d001a] pt-2">
                      Focus Areas
                    </p>
                    {siteConfig.solutions.sectors.map((sec, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate("solutions", { scrollTo: "sectors" });
                          closeMenu();
                        }}
                        className="block w-full text-left py-1 text-xs text-[#454545] hover:text-[#6d001a] transition-colors"
                      >
                        • {sec.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Work */}
              <button
                onClick={() => {
                  onNavigate("projects");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "projects"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                Work
              </button>

              {/* Partners */}
              <button
                onClick={() => {
                  onNavigate("partners");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "partners"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                Partners
              </button>

              {/* Impact */}
              <button
                onClick={() => {
                  onNavigate("impact");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "impact"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                Impact
              </button>

              {/* Our Team */}
              <button
                onClick={() => {
                  onNavigate("team");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "team"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                Our Team
              </button>

              {/* FAQ */}
              <button
                onClick={() => {
                  onNavigate("faq");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "faq"
                    ? "text-[#6d001a] bg-[#6d001a]/8 font-bold"
                    : "text-black hover:bg-black/[0.04]"
                }`}
              >
                FAQ
              </button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3.5 border-t border-black/10 space-y-2.5">
              <SpiderButton
                onClick={() => {
                  onNavigate(siteConfig.navigation.cta.page || "partners");
                  closeMenu();
                }}
                className="min-h-[46px] w-full px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider shadow-md"
                contentClassName="gap-1"
              >
                Partner with us <span aria-hidden="true">→</span>
              </SpiderButton>

              <div className="text-center text-[11px] text-[#525252]">
                {siteConfig.contact.email ? (
                  <p className="font-semibold text-black">{siteConfig.contact.email}</p>
                ) : null}
                <p className="mt-0.5">Nairobi • Kisumu • Remote</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
