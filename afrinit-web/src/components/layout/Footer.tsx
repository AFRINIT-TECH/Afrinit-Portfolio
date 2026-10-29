import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brown-800 bg-brown-950 py-12 md:py-16 text-sand-300">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-brown-800">
          <div>
            <Logo />
            <p className="mt-3 text-[15px] text-sand-300 max-w-sm">
              {siteConfig.footer.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 md:gap-8"
          >
            {siteConfig.footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center min-h-[44px] text-[15px] font-medium text-sand-300 hover:text-sand-100 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-300/80">
          <p>{siteConfig.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
};
