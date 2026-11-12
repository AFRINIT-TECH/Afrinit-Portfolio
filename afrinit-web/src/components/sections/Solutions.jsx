import { useState } from "react";
import { siteConfig } from "@/content/site";

const iconMap = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  transform: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  design: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-1.657 1.657a2 2 0 01-2.828 0l-2.829-2.828a2 2 0 010-2.828z",
  ai: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  growth: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export const Solutions = ({ onNavigate }) => {
  const [openPanel, setOpenPanel] = useState(null);

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Solutions
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.solutions.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.solutions.description}
          </p>
        </div>

        {/* Expandable solution panels */}
        <div className="space-y-4">
          {siteConfig.solutions.services.map((service, index) => (
            <div
              key={index}
              className="solution-panel rounded-2xl border border-[#3d2d22]/15 bg-white/60 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenPanel(openPanel === index ? null : index)}
                className="w-full flex items-center gap-5 p-8 text-left"
                aria-expanded={openPanel === index}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#9c6849]/10 text-[#9c6849]">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={iconMap[service.icon] || iconMap.code}
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-[#5f5249]">{service.description}</p>
                </div>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-[#5f5249] transition-transform duration-300 ${
                    openPanel === index ? "rotate-180" : ""
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
                  openPanel === index ? "is-open grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-8 pb-8 pl-[108px] text-sm leading-6 text-[#5f5249]">
                    {service.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#5f5249]">
            Interested in learning how we can help your organization?
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#825238]"
          >
            Start a conversation
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
