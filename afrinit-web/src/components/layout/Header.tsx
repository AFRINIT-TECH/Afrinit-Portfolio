import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brown-800/80 bg-brown-950/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {siteConfig.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center min-h-[44px] px-3.5 py-2 text-[15px] font-medium text-sand-300 hover:text-sand-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href={siteConfig.navigation.cta.href}
                variant="primary"
                size="md"
              >
                {siteConfig.navigation.cta.label}
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};
