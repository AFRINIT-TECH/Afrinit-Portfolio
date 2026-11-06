import React from "react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "web-platforms":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="M2 10h20" />
          <path d="M6 7h.01" />
          <path d="M10 7h.01" />
          <path d="M14 7h.01" />
        </svg>
      );
    case "mobile-apps":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "custom-business-systems":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="14" cy="14" r="1" />
          <rect x="7" y="5" width="4" height="4" rx="1" />
        </svg>
      );
    case "apis-integrations":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m8 9 3 3-3 3" />
          <path d="M13 15h3" />
          <rect width="20" height="14" x="2" y="5" rx="2" />
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "cloud-support-maintenance":
    default:
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="m9 13 2 2 4-4" />
        </svg>
      );
  }
}

export const Services: React.FC = () => {
  return (
    <Section id="services" variant="white">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Eyebrow variant="light" className="mb-3">
            {siteConfig.services.eyebrow}
          </Eyebrow>
          <Heading level={2} variant="section" className="text-ink-900 mb-4">
            {siteConfig.services.heading}
          </Heading>
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-ink-700">
            {siteConfig.services.intro}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.items.map((service) => {
            const isGreen = service.iconBg === "green-100";
            return (
              <Card
                key={service.id}
                variant="white"
                className="flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-6 ${
                      isGreen
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    <ServiceIcon id={service.id} />
                  </div>
                  <Heading
                    level={3}
                    variant="card"
                    className="text-ink-900 mb-3"
                  >
                    {service.title}
                  </Heading>
                  <p className="text-[16px] leading-[1.6] text-ink-700">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
