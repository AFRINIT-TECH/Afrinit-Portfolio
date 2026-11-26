import { siteConfig } from "@/content/site";
import { Logo } from "./Logo";

export const Footer = ({ onNavigate, currentPage }) => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      {/* Top Pre-Footer Callout in Footer (shown on all pages except contact itself) */}
      {currentPage !== "contact" && (
        <div className="border-b border-white/10 px-5 py-12 sm:px-8 lg:px-14 bg-gradient-to-r from-black via-black to-[#6d001a]/20">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Want to share your project goals with us?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Let's explore how our team can help you build dependable software.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-[#6d001a] hover:text-white cursor-pointer self-start md:self-auto"
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
                aria-label="Azzmar Home"
              >
                <Logo variant="white" />
              </button>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/90 border-l-2 border-[#6d001a] pl-2.5">
                {siteConfig.footer.tagline}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/65">
                A software team founded by five co-founders based in Nairobi and Kisumu, Kenya, building custom web applications and business systems.
              </p>
            </div>

            {/* Email block - hidden when empty */}
            {siteConfig.footer.email ? (
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-white/50 mb-1">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${siteConfig.footer.email}`}
                  className="text-sm font-bold text-white hover:text-white/80 underline decoration-[#6d001a] underline-offset-4"
                >
                  {siteConfig.footer.email}
                </a>
              </div>
            ) : null}
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d001a]" />
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-white/70">
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
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d001a]" />
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-white/70">
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
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d001a]" />
              Locations
            </h4>
            <div className="mt-4 space-y-3 text-xs text-white/70">
              <div>
                <p className="font-semibold text-white">Nairobi, Kenya</p>
                <p className="text-[11px] text-white/50">Nairobi team hub</p>
              </div>
              <div>
                <p className="font-semibold text-white">Kisumu, Kenya</p>
                <p className="text-[11px] text-white/50">Kisumu team hub</p>
              </div>
              <div>
                <p className="font-semibold text-white">Remote</p>
                <p className="text-[11px] text-white/50">Worldwide collaboration</p>
              </div>
            </div>

            {/* Social Links (GitHub only until real accounts exist) */}
            {siteConfig.footer.socialLinks && siteConfig.footer.socialLinks.length > 0 && (
              <div className="mt-6 pt-4 border-t border-white/10">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-white/90 mb-2.5">
                  Follow Us
                </h5>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.footer.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 transition hover:bg-[#6d001a] hover:border-[#6d001a] hover:text-white"
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
      <div className="border-t border-white/10 bg-[#050505] px-5 py-6 sm:px-8 lg:px-14">
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
              className="flex items-center gap-1.5 rounded-full bg-[#6d001a] px-3.5 py-1 text-white font-semibold hover:bg-[#4d0012] transition cursor-pointer"
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
