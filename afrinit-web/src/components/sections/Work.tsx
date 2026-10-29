import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { GeometricVisual } from "@/components/work/GeometricVisual";

export const Work: React.FC = () => {
  return (
    <Section id="work" variant="dark">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <Eyebrow variant="dark" className="mb-3">
              {siteConfig.work.eyebrow}
            </Eyebrow>
            <Heading level={2} variant="section" className="text-sand-100">
              {siteConfig.work.heading}
            </Heading>
          </div>
          <div className="shrink-0">
            <Button href={siteConfig.work.cta.href} variant="outline" size="md">
              {siteConfig.work.cta.label}
            </Button>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.work.items.map((project) => (
            <article
              key={project.slug}
              className="bg-brown-900 border border-brown-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brown-600 transition-colors"
            >
              <div>
                <GeometricVisual theme={project.visualTheme} />

                <div className="p-6 sm:p-8 flex flex-col gap-3">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-green-400">
                    {project.category}
                  </span>
                  <Heading
                    level={3}
                    variant="card"
                    className="text-sand-100 group-hover:text-white transition-colors"
                  >
                    {project.title}
                  </Heading>
                  <p className="text-[16px] leading-[1.6] text-sand-300">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-orange-500 hover:text-[#F28434] focus-visible:outline-2 focus-visible:outline-orange-500 rounded transition-colors group/link"
                >
                  <span>Read the case study</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
