import React from "react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export const Process: React.FC = () => {
  return (
    <Section id="process" variant="dark-raised">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Eyebrow variant="dark" className="mb-3">
            {siteConfig.process.eyebrow}
          </Eyebrow>
          <Heading level={2} variant="section" className="text-sand-100">
            {siteConfig.process.heading}
          </Heading>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.process.steps.map((step) => {
            const isGreen = step.accent === "green";
            return (
              <div
                key={step.step}
                className={`pt-6 border-t-[3px] flex flex-col justify-start ${
                  isGreen ? "border-green-500" : "border-orange-500"
                }`}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className={`font-heading text-[28px] sm:text-[32px] font-extrabold leading-none ${
                      isGreen ? "text-green-400" : "text-orange-500"
                    }`}
                  >
                    {step.step}
                  </span>
                </div>
                <Heading
                  level={3}
                  variant="card"
                  className="text-sand-100 mb-2"
                >
                  {step.title}
                </Heading>
                <p className="text-[16px] leading-[1.6] text-sand-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
