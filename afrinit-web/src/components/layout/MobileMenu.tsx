"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Keyboard navigation: Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      } else if (e.key === "Tab" && menuRef.current) {
        // Focus trap inside the open menu
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus first link in menu
      const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-lg text-sand-100 hover:text-white hover:bg-brown-900 focus-visible:outline-2 focus-visible:outline-orange-500 transition-colors"
      >
        <span className="sr-only">
          {isOpen ? "Close main menu" : "Open main menu"}
        </span>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[73px] z-40 bg-brown-950/98 border-t border-brown-800 flex flex-col p-6 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-4">
            {siteConfig.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center min-h-[44px] px-3 py-2 text-lg font-medium text-sand-100 hover:text-orange-500 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-brown-800">
            <Link
              href={siteConfig.navigation.cta.href}
              onClick={closeMenu}
              className="flex items-center justify-center min-h-[48px] w-full bg-orange-500 text-brown-950 font-bold rounded-xl hover:bg-[#F28434] transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 text-center"
            >
              {siteConfig.navigation.cta.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
