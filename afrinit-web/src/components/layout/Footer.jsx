import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";

export const Footer = ({ onNavigate, currentPage }) => {
  return (
    <footer className="w-full bg-[#231c17] text-white border-t border-[#3d2d22]">
      {/* Top Pre-Footer Callout in Footer (shown on all pages except contact itself) */}
      {currentPage !== "contact" && (
        <div className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-14">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Want to share your project goals with us?
              </h3>
              <p className="mt-2 text-sm text-[#d7c4ae]">
                Let's explore how our team can help you build dependable software.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] transition hover:bg-white cursor-pointer self-start md:self-auto"
            >
              Get in touch
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="w-full px-5 py-16 sm:px-8 lg:px-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col justify-between">
            <div>
              <button
                className="flex items-center text-white cursor-pointer group"
                onClick={() => onNavigate && onNavigate("home")}
                aria-label="Afrinit Home"
              >
                <Logo variant="white" />
              </button>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#dcbf77]">
                {siteConfig.footer.tagline}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#d7c4ae]/70">
                A software team founded by five co-founders based in Nairobi and Kisumu, Kenya, building custom web applications and business systems.
              </p>
            </div>

            {/* Email block - hidden when empty */}
            {siteConfig.footer.email ? (
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-[#d7c4ae]/60 mb-1">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${siteConfig.footer.email}`}
                  className="text-sm font-bold text-[#dcbf77] hover:underline"
                >
                  {siteConfig.footer.email}
                </a>
              </div>
            ) : null}
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#dcbf77]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#d7c4ae]/80">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate && onNavigate(link.page)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Practice Areas */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#dcbf77]">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#d7c4ae]/80">
              {siteConfig.footer.servicesList.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate && onNavigate("solutions", { serviceIndex: idx })}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Hubs & Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#dcbf77]">
              Locations
            </h4>
            <div className="mt-4 space-y-3 text-xs text-[#d7c4ae]/80">
              <div>
                <p className="font-semibold text-white">Nairobi, Kenya</p>
                <p className="text-[11px] text-[#d7c4ae]/60">Nairobi team hub</p>
              </div>
              <div>
                <p className="font-semibold text-white">Kisumu, Kenya</p>
                <p className="text-[11px] text-[#d7c4ae]/60">Kisumu team hub</p>
              </div>
              <div>
                <p className="font-semibold text-white">Remote</p>
                <p className="text-[11px] text-[#d7c4ae]/60">Worldwide collaboration</p>
              </div>
            </div>

            {/* Social Links (GitHub only until real accounts exist) */}
            {siteConfig.footer.socialLinks && siteConfig.footer.socialLinks.length > 0 && (
              <div className="mt-6 pt-4 border-t border-white/10">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#dcbf77] mb-2.5">
                  Follow Us
                </h5>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.footer.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-[#d7c4ae] transition hover:bg-white hover:text-[#231c17]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#1b1511] px-5 py-6 sm:px-8 lg:px-14">
        <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate && onNavigate("partners")}
              className="hover:text-white transition cursor-pointer"
            >
              Partnerships
            </button>
            <button
              onClick={() => onNavigate && onNavigate("archives")}
              className="hover:text-white transition cursor-pointer"
            >
              Archives
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 text-[#dcbf77] hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
