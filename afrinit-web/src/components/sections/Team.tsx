import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export const Team: React.FC = () => {
  return (
    <Section id="team" variant="dark">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <Eyebrow variant="dark" className="mb-3">
            {siteConfig.team.eyebrow}
          </Eyebrow>
          <Heading level={2} variant="section" className="text-sand-100">
            {siteConfig.team.heading}
          </Heading>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.team.members.map((member, index) => {
            const isGreen = member.color === "green";
            return (
              <div
                key={`${member.name}-${index}`}
                className="bg-brown-900 border border-brown-800 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-4 hover:border-brown-600 transition-colors"
              >
                {/* Avatar: photo if present, otherwise square brown-800 avatar with large initial */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brown-800 border border-brown-600/40 overflow-hidden flex items-center justify-center shrink-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className={`font-heading text-2xl sm:text-3xl font-extrabold ${
                        isGreen ? "text-green-400" : "text-orange-500"
                      }`}
                      aria-hidden="true"
                    >
                      {member.initial}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <Heading
                    level={3}
                    variant="card"
                    className="text-sand-100 text-[18px] sm:text-[20px]"
                  >
                    {member.name}
                  </Heading>
                  <p className="text-[14px] sm:text-[15px] text-sand-300 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
