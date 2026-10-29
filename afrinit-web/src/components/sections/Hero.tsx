import React from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brown-950 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 text-sand-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <Eyebrow variant="dark">{siteConfig.hero.eyebrow}</Eyebrow>

            <Heading
              level={1}
              variant="hero"
              className="text-sand-100"
            >
              {siteConfig.hero.title}
            </Heading>

            <p className="max-w-xl text-[17px] md:text-[19px] leading-[1.6] text-sand-300">
              {siteConfig.hero.paragraph}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href={siteConfig.hero.primaryCta.href} variant="primary" size="lg">
                {siteConfig.hero.primaryCta.label}
              </Button>
              <Button href={siteConfig.hero.secondaryCta.href} variant="outline" size="lg">
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right Column: Decorative 4x3 Geometric Grid */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-6 bg-brown-900/60 border border-brown-800 rounded-3xl max-w-sm sm:max-w-md w-full shadow-2xl">
              {/* Row 1 */}
              <div className="aspect-square rounded-2xl bg-brown-800/80 border border-brown-600/30" />
              <div className="aspect-square rounded-2xl bg-orange-500 shadow-md" />
              <div className="aspect-square rounded-2xl bg-brown-800" />
              <div className="aspect-square rounded-2xl bg-brown-600" />

              {/* Row 2 */}
              <div className="aspect-square rounded-2xl bg-brown-500" />
              <div className="aspect-square rounded-2xl bg-brown-900 border border-brown-800" />
              {/* One green circle */}
              <div className="aspect-square rounded-full bg-green-500 shadow-sm" />
              <div className="aspect-square rounded-2xl bg-orange-500/90" />

              {/* Row 3 */}
              <div className="aspect-square rounded-2xl bg-brown-800 border border-brown-600/40" />
              <div className="aspect-square rounded-2xl bg-brown-600" />
              <div className="aspect-square rounded-2xl bg-brown-500" />
              <div className="aspect-square rounded-2xl bg-brown-900 border border-brown-800" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
