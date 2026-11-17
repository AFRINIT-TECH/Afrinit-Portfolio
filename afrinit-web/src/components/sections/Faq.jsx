import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Faq = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="viewport-animation mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Knowledge Base
            <span className="h-px w-9 bg-[#9c6849]" />
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.faq.title}
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.faq.description}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {siteConfig.faq.questions.map((item, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${((index % 4) + 1) * 75} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/70 shadow-sm overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg font-semibold text-[#231c17] pr-4">
                  {item.question}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#9c6849]/10 text-[#9c6849]">
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`faq-answer grid ${
                  openIndex === index ? "is-open" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-7 text-sm leading-relaxed text-[#5f5249] border-t border-[#3d2d22]/5 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="viewport-animation mt-24 text-center rounded-3xl bg-[#231c17] p-10 text-white sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#dcbf77]/10 blur-2xl" />
          <h3 className="font-display text-2xl font-bold text-white relative z-10 sm:text-3xl">
            Still have questions about partnering with Afrinit?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#d7c4ae] relative z-10">
            Our technical directors and solutions architects are happy to schedule an introductory video call or consultation.
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer relative z-10"
          >
            Schedule a conversation
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
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
