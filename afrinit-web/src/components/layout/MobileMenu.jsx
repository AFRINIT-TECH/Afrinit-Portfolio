import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";

export const MobileMenu = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null); // 'solutions' | 'capabilities' | null
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleAccordion = (name) => {
    setOpenAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="grid h-11 w-11 place-items-center rounded-full border border-[#3d2d22]/20 cursor-pointer"
      >
        <span className="relative h-4 w-5">
          {isOpen ? (
            <>
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-current transition" />
              <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-current transition" />
            </>
          ) : (
            <>
              <span className="absolute left-0 top-1 h-px w-5 bg-current transition" />
              <span className="absolute bottom-1 left-0 h-px w-5 bg-current transition" />
            </>
          )}
        </span>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 top-[78px] z-40 bg-[#f5efe4] flex flex-col p-6 overflow-y-auto"
        >
          <nav className="flex flex-col space-y-2">
            {/* About us */}
            <button
              onClick={() => {
                onNavigate("about");
                closeMenu();
              }}
              className={`flex items-center min-h-[50px] px-4 py-3 text-lg font-semibold rounded-xl transition-all text-left cursor-pointer ${
                currentPage === "about"
                  ? "text-[#9c6849] bg-[#d7c4ae]/30"
                  : "text-[#231c17] hover:bg-[#d7c4ae]/20"
              }`}
            >
              About us
            </button>

            {/* What we do (Collapsible) */}
            <div className="rounded-xl border border-[#3d2d22]/10 bg-white/40 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("solutions")}
                className="flex items-center justify-between w-full min-h-[50px] px-4 py-3 text-lg font-semibold text-[#231c17] text-left cursor-pointer"
              >
                What we do
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
                <div className="px-4 pb-4 pt-1 space-y-2 border-t border-[#3d2d22]/10 bg-white/60">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#79513a] pt-2">
                    Solutions
                  </p>
                  {siteConfig.solutions.services.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate("solutions", { serviceIndex: idx });
                        closeMenu();
                      }}
                      className="block w-full text-left py-1.5 text-sm text-[#5f5249] hover:text-[#9c6849]"
                    >
                      • {s.title}
                    </button>
                  ))}
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#79513a] pt-3">
                    Sectors
                  </p>
                  {siteConfig.solutions.sectors.map((sec, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onNavigate("solutions", { scrollTo: "sectors" });
                        closeMenu();
                      }}
                      className="block w-full text-left py-1.5 text-sm text-[#5f5249] hover:text-[#9c6849]"
                    >
                      • {sec.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Capabilities (Collapsible) */}
            <div className="rounded-xl border border-[#3d2d22]/10 bg-white/40 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("capabilities")}
                className="flex items-center justify-between w-full min-h-[50px] px-4 py-3 text-lg font-semibold text-[#231c17] text-left cursor-pointer"
              >
                Capabilities
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openAccordion === "capabilities" ? "rotate-180 text-[#9c6849]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openAccordion === "capabilities" && (
                <div className="px-4 pb-4 pt-1 space-y-3 border-t border-[#3d2d22]/10 bg-white/60">
                  {siteConfig.capabilities.groups.map((group, idx) => (
                    <div key={idx} className="pt-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#79513a]">
                        {group.name}
                      </p>
                      <div className="mt-1 space-y-1">
                        {group.items.slice(0, 3).map((item, iIdx) => (
                          <button
                            key={iIdx}
                            onClick={() => {
                              onNavigate("about");
                              closeMenu();
                            }}
                            className="block w-full text-left py-1 text-xs text-[#5f5249] hover:text-[#9c6849]"
                          >
                            – {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cases */}
            <button
              onClick={() => {
                onNavigate("projects");
                closeMenu();
              }}
              className={`flex items-center min-h-[50px] px-4 py-3 text-lg font-semibold rounded-xl transition-all text-left cursor-pointer ${
                currentPage === "projects"
                  ? "text-[#9c6849] bg-[#d7c4ae]/30"
                  : "text-[#231c17] hover:bg-[#d7c4ae]/20"
              }`}
            >
              Cases
            </button>

            {/* Impact */}
            <button
              onClick={() => {
                onNavigate("impact");
                closeMenu();
              }}
              className={`flex items-center min-h-[50px] px-4 py-3 text-lg font-semibold rounded-xl transition-all text-left cursor-pointer ${
                currentPage === "impact"
                  ? "text-[#9c6849] bg-[#d7c4ae]/30"
                  : "text-[#231c17] hover:bg-[#d7c4ae]/20"
              }`}
            >
              Impact
            </button>

            {/* People */}
            <button
              onClick={() => {
                onNavigate("people");
                closeMenu();
              }}
              className={`flex items-center min-h-[50px] px-4 py-3 text-lg font-semibold rounded-xl transition-all text-left cursor-pointer ${
                currentPage === "people"
                  ? "text-[#9c6849] bg-[#d7c4ae]/30"
                  : "text-[#231c17] hover:bg-[#d7c4ae]/20"
              }`}
            >
              People
            </button>

            {/* FAQ */}
            <button
              onClick={() => {
                onNavigate("faq");
                closeMenu();
              }}
              className={`flex items-center min-h-[50px] px-4 py-3 text-lg font-semibold rounded-xl transition-all text-left cursor-pointer ${
                currentPage === "faq"
                  ? "text-[#9c6849] bg-[#d7c4ae]/30"
                  : "text-[#231c17] hover:bg-[#d7c4ae]/20"
              }`}
            >
              FAQ
            </button>
          </nav>

          <div className="mt-8 pt-6 border-t border-[#3d2d22]/10">
            <button
              onClick={() => {
                onNavigate("contact");
                closeMenu();
              }}
              className="flex items-center justify-center min-h-[52px] w-full rounded-full bg-[#231c17] text-white font-semibold text-sm transition-all hover:bg-[#9c6849] text-center px-5 py-3 cursor-pointer shadow-md"
            >
              Partner with us →
            </button>

            <div className="mt-6 text-center text-xs text-[#5f5249]">
              <p className="font-semibold text-[#231c17]">{siteConfig.contact.email}</p>
              <p className="mt-1">Nairobi • Lagos • Accra</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
