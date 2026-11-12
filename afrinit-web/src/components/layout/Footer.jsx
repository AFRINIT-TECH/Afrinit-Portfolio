import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#231c17] text-white">
      <div className="flex w-full flex-col gap-7 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
        {/* Logo */}
        <button
          className="flex items-center text-white"
          onClick={() => onNavigate && onNavigate("home")}
        >
          <Logo variant="white" />
        </button>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/65">
          <a
            href={`mailto:${siteConfig.footer.email}`}
            className="hover:text-white"
          >
            {siteConfig.footer.email}
          </a>
          {siteConfig.footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/50">{siteConfig.footer.copyright}</p>
      </div>
    </footer>
  );
};
