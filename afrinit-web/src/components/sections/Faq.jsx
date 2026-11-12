import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Faq = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            FAQ
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.faq.title}
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.faq.description}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {siteConfig.faq.questions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#3d2d22]/15 bg-white/60 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg font-semibold pr-4">{item.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-[#5f5249] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`faq-answer grid transition-all duration-300 ${
                  openIndex === index ? "is-open grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-8 pb-8 text-sm leading-6 text-[#5f5249]">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-[#5f5249]">
            Still have questions? We'd love to hear from you.
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#825238]"
          >
            Contact us
            <span className="transition group-hover:translate-x-1">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
