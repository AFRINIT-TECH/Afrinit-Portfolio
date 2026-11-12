import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";

export const MobileMenu = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="grid h-11 w-11 place-items-center rounded-full border border-[#3d2d22]/20"
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
          className="fixed inset-0 top-[78px] z-40 bg-[#f5efe4] flex flex-col p-6"
        >
          <nav className="flex flex-col space-y-2">
            {siteConfig.navigation.links.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  closeMenu();
                }}
                className={`flex items-center min-h-[52px] px-4 py-3 text-xl font-medium rounded-xl transition-all text-left ${
                  currentPage === link.page
                    ? "text-[#9c6849] bg-[#d7c4ae]/30"
                    : "text-[#231c17] hover:text-[#9c6849] hover:bg-[#d7c4ae]/20"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-10 pt-6 border-t border-[#3d2d22]/10">
            <button
              onClick={() => {
                onNavigate("contact");
                closeMenu();
              }}
              className="flex items-center justify-center min-h-[52px] w-full rounded-full bg-[#231c17] text-white font-semibold text-sm transition-all hover:bg-[#9c6849] text-center px-5 py-3"
            >
              Partner with us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
