import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";

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
            ? "border-[#9c6849] bg-[#9c6849] text-white shadow-md scale-102"
            : "border-[#3d2d22]/20 text-[#231c17] bg-white/60 hover:bg-white hover:border-[#9c6849]"
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
            className="fixed inset-0 z-40 bg-[#231c17]/25 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Elevated Floating Dropdown Card */}
          <div
            ref={menuRef}
            role="menu"
            aria-label="Mobile navigation dropdown"
            className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(380px,calc(100vw-32px))] max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-[#3d2d22]/15 bg-[#f5efe4]/98 p-4 shadow-2xl backdrop-blur-xl animate-dropdown overscroll-contain text-[#231c17]"
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
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
                }`}
              >
                About
              </button>

              {/* What we do (Collapsible Accordion) */}
              <div className="rounded-xl border border-[#3d2d22]/10 bg-white/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleAccordion("solutions")}
                  className="flex items-center justify-between w-full min-h-[42px] px-3.5 py-2 text-sm font-semibold text-[#231c17] text-left cursor-pointer"
                >
                  <span>What We Do</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openAccordion === "solutions" ? "rotate-180 text-[#9c6849]" : ""
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
                  <div className="px-3.5 pb-3 pt-1 space-y-1.5 border-t border-[#3d2d22]/10 bg-white/70">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#79513a] pt-1">
                      Services
                    </p>
                    {siteConfig.solutions.services.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate("solutions", { serviceIndex: idx });
                          closeMenu();
                        }}
                        className="block w-full text-left py-1 text-xs text-[#5f5249] hover:text-[#9c6849] transition-colors"
                      >
                        • {s.title}
                      </button>
                    ))}
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#79513a] pt-2">
                      Focus Areas
                    </p>
                    {siteConfig.solutions.sectors.map((sec, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate("solutions", { scrollTo: "sectors" });
                          closeMenu();
                        }}
                        className="block w-full text-left py-1 text-xs text-[#5f5249] hover:text-[#9c6849] transition-colors"
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
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
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
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
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
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
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
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
                }`}
              >
                Our Team
              </button>

              {/* Archives */}
              <button
                onClick={() => {
                  onNavigate("archives");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "archives"
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
                }`}
              >
                Archives
              </button>

              {/* FAQ */}
              <button
                onClick={() => {
                  onNavigate("faq");
                  closeMenu();
                }}
                className={`flex items-center min-h-[42px] px-3.5 py-2 text-sm font-semibold rounded-xl transition-all text-left cursor-pointer ${
                  currentPage === "faq"
                    ? "text-[#9c6849] bg-[#d7c4ae]/30 font-bold"
                    : "text-[#231c17] hover:bg-[#d7c4ae]/20"
                }`}
              >
                FAQ
              </button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3.5 border-t border-[#3d2d22]/10 space-y-2.5">
              <button
                onClick={() => {
                  onNavigate(siteConfig.navigation.cta.page || "partners");
                  closeMenu();
                }}
                className="flex items-center justify-center min-h-[46px] w-full rounded-full bg-[#231c17] text-white font-semibold text-xs uppercase tracking-wider transition-all hover:bg-[#9c6849] text-center px-4 py-2.5 cursor-pointer shadow-md"
              >
                Partner with us →
              </button>

              <div className="text-center text-[11px] text-[#5f5249]">
                {siteConfig.contact.email ? (
                  <p className="font-semibold text-[#231c17]">{siteConfig.contact.email}</p>
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
