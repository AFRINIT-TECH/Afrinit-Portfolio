import React from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export const CapabilityStrip: React.FC = () => {
  return (
    <aside
      aria-label="Core Capabilities"
      className="border-y border-brown-800 bg-brown-900 py-6 text-sand-300"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-3 gap-x-6 sm:gap-x-8 text-center sm:text-left">
          {siteConfig.capabilities.map((capability, index) => (
            <div
              key={capability}
              className="flex items-center gap-3 text-[15px] sm:text-[16px] font-medium tracking-tight text-sand-100"
            >
              <span
                className="w-2 h-2 rounded-full bg-orange-500 shrink-0"
                aria-hidden="true"
              />
              <span>{capability}</span>
              {index < siteConfig.capabilities.length - 1 && (
                <span
                  className="hidden lg:inline-block ml-6 text-brown-600 select-none"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </aside>
  );
};
