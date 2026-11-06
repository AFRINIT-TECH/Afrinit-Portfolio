import React from "react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/contact/ContactForm";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" variant="orange">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries Copy & Placeholders */}
          <div className="lg:col-span-5 space-y-6 text-brown-950">
            <span className="text-xs sm:text-[14px] font-bold uppercase tracking-wider text-brown-950/80">
              Get in touch
            </span>

            <Heading
              level={2}
              variant="section"
              className="text-brown-950"
            >
              {siteConfig.contact.heading}
            </Heading>

            <p className="text-[17px] md:text-[19px] leading-[1.6] text-brown-950/90 font-medium">
              {siteConfig.contact.paragraph}
            </p>

            <div className="pt-6 border-t border-brown-950/20 space-y-4 text-[16px]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-brown-950 w-20">Email:</span>
                <span className="font-mono text-brown-950 font-medium">
                  {siteConfig.contact.info.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-brown-950 w-20">Phone:</span>
                <span className="font-mono text-brown-950 font-medium">
                  {siteConfig.contact.info.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-brown-950 w-20">Location:</span>
                <span className="font-mono text-brown-950 font-medium">
                  {siteConfig.contact.info.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};
