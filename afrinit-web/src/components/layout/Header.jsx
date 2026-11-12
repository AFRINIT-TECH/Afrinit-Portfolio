import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="relative z-50 border-b border-[#3d2d22]/15">
      <div className="flex h-[78px] w-full items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Brand Logo */}
        <button
          className="flex items-center"
          aria-label="Afrinit home"
          onClick={() => onNavigate("home")}
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="my-0 mr-0 ml-[400px] hidden flex-row items-center gap-9 p-0 text-sm font-medium lg:flex"
        >
          {siteConfig.navigation.links.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`transition-colors hover:text-[#9c6849] ${
                currentPage === link.page ? "text-[#9c6849]" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("contact")}
            className="m-0 hidden items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white transition sm:flex bg-[#231c17] hover:bg-[#9c6849]"
          >
            Partner with us
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </button>
          <MobileMenu currentPage={currentPage} onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  );
};
