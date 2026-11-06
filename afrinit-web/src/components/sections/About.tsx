import React from "react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

export const About: React.FC = () => {
  return (
    <Section id="about" variant="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-5 space-y-6">
            <Eyebrow variant="light">{siteConfig.about.eyebrow}</Eyebrow>
            <Heading level={2} variant="section" className="text-ink-900">
              {siteConfig.about.heading}
            </Heading>
            <div className="space-y-4 text-[17px] leading-[1.6] text-ink-700">
              <p>{siteConfig.about.paragraph1}</p>
              <p className="italic text-ink-700/80">
                {siteConfig.about.paragraph2}
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Value Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {siteConfig.about.values.map((val) => (
                <Card
                  key={val.title}
                  variant="white"
                  className="flex flex-col justify-start"
                >
                  <Heading
                    level={3}
                    variant="card"
                    className="text-ink-900 mb-2.5"
                  >
                    {val.title}
                  </Heading>
                  <p className="text-[15px] sm:text-[16px] leading-[1.6] text-ink-700">
                    {val.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
