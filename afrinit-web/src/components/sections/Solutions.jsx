import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";

const iconMap = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  transform: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  design: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-1.657 1.657a2 2 0 01-2.828 0l-2.829-2.828a2 2 0 010-2.828z",
  growth: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export const Solutions = ({ onNavigate, navParams }) => {
  const [openPanel, setOpenPanel] = useState(
    navParams?.serviceIndex !== undefined ? navParams.serviceIndex : 0
  );
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (navParams?.serviceIndex !== undefined) {
      setOpenPanel(navParams.serviceIndex);
      const el = document.getElementById(`service-panel-${navParams.serviceIndex}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (navParams?.scrollTo === "sectors") {
      const el = document.getElementById("industry-sectors");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (navParams?.scrollTo === "techStack") {
      const el = document.getElementById("tech-stack-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [navParams]);

  const solutionFaqs = [
    {
      q: "What is the advantage of custom software over off-the-shelf tools?",
      a: "Off-the-shelf tools often force your team into rigid templates with recurring per-seat fees. Custom software is engineered around your exact workflows, integrates with your databases, and gives you 100% intellectual property ownership with zero license lock-in.",
    },
    {
      q: "How does the development process work?",
      a: "We work directly with you in iterative development cycles. We start with scoping and interactive wireframes, build out functionality in milestones with regular demos, test thoroughly, and deploy to your preferred cloud environment.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes. Software needs regular maintenance and care. We provide ongoing support for system updates, performance optimizations, bug fixes, and feature expansions.",
    },
    {
      q: "Do we own the code you build?",
      a: "Yes, 100%. You retain full, unencumbered ownership of all source code, architecture designs, configurations, and data models.",
    },
  ];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Header Section */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            What We Do • Software Services
          </div>
          <h1 className="viewport-animation delay-100 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-black max-w-5xl break-words">
            Software solutions built for clarity, speed, and reliability.
          </h1>
          <p className="viewport-animation delay-200 mt-6 sm:mt-8 max-w-3xl text-base sm:text-xl leading-relaxed text-[#454545]">
            {siteConfig.solutions.description}
          </p>
        </div>
      </section>

      {/* 2. Custom Software vs Off-The-Shelf */}
      <section className="relative w-full px-5 py-8 sm:py-12 sm:px-8 lg:px-14">
        <div className="viewport-animation w-full rounded-3xl border border-black/10 bg-white p-6 sm:p-12 shadow-lg">
          <div className="mb-8 sm:mb-10 text-center">
            <span className="inline-block rounded-full bg-[#6d001a]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#6d001a]">
              The Strategic Choice
            </span>
            <h2 className="font-display mt-4 text-2xl sm:text-4xl font-extrabold text-black break-words">
              Off-The-Shelf Tools vs. Custom Software
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-[#454545]">
              Why teams choose custom software built specifically around their operations.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {/* Off-the-shelf */}
            <div className="rounded-2xl border border-black/10 bg-[#f5f5f5] p-5 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <h3 className="font-display text-xl font-bold text-[#454545]">
                    Off-The-Shelf Subscriptions
                  </h3>
                  <span className="text-xs font-bold text-red-500 uppercase">Generic</span>
                </div>
                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#454545]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Recurring per-seat monthly license fees that grow over time
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Rigid interfaces that force your workflows into someone else's mold
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Limited control over data storage and custom integrations
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Zero code ownership or ability to customize core logic
                  </li>
                </ul>
              </div>
            </div>

            {/* Azzmar Custom Software */}
            <div className="rounded-2xl border-2 border-[#6d001a] bg-black p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#6d001a]/15 blur-xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display text-xl font-bold text-white">
                    Azzmar Custom Software
                  </h3>
                  <span className="text-xs font-bold text-emerald-400 uppercase">100% Tailored</span>
                </div>
                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    100% intellectual property ownership with zero ongoing license fees
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Engineered to match your exact operational logic and user needs
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Flexible integrations with your databases, tools, and third-party APIs
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Direct co-founder collaboration throughout design and delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Practice Panels */}
      <section className="relative w-full px-5 py-20 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-black">
              Our service areas
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              Explore our core technical specializations. Click each panel to inspect scope and deliverables.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.solutions.services.map((service, index) => (
              <div
                key={index}
                id={`service-panel-${index}`}
                className={`viewport-animation delay-${((index % 4) + 1) * 75} card-nerd rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden scroll-mt-28`}
              >
                <button
                  onClick={() => setOpenPanel(openPanel === index ? null : index)}
                  className="w-full flex items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-8 text-left cursor-pointer"
                  aria-expanded={openPanel === index}
                >
                  <div className="flex h-11 w-11 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#6d001a]/10 text-[#6d001a]">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={iconMap[service.icon] || iconMap.code}
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#454545]">{service.description}</p>
                  </div>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-[#6d001a] transition-transform duration-300 mt-1 sm:mt-0 ${
                      openPanel === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
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
                    <div className="px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pl-[90px] text-sm leading-relaxed text-[#454545] border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="max-w-2xl">{service.details}</p>
                      {index === 0 && (
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("projects")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#4d0012] transition cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          View web projects →
                        </button>
                      )}
                      {index === 1 && (
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("impact")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#4d0012] transition cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          View operational impact →
                        </button>
                      )}
                      {index === 2 && (
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("partners")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#4d0012] transition cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          Explore tech partnerships →
                        </button>
                      )}
                      {index === 3 && (
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("projects")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#4d0012] transition cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          View designed platforms →
                        </button>
                      )}
                      {index === 4 && (
                        <button
                          type="button"
                          onClick={() => onNavigate && onNavigate("team")}
                          className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#4d0012] transition cursor-pointer shrink-0 self-start sm:self-auto"
                        >
                          Meet our engineers →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Disciplines: Research, Design, Development */}
      {siteConfig.capabilities && (
        <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-black/10 bg-white">
          <div className="w-full">
            <div className="viewport-animation mb-14">
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                <span className="h-px w-9 bg-[#6d001a]" />
                Disciplines &amp; Services
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-black">
                {siteConfig.capabilities.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[#454545]">
                {siteConfig.capabilities.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {siteConfig.capabilities.groups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className={`viewport-animation delay-${(gIdx + 1) * 150} card-nerd rounded-3xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-6">
                      <h3 className="font-display text-2xl font-bold text-black">
                        {group.name}
                      </h3>
                      <span className="text-xs font-bold uppercase text-[#6d001a]">
                        {group.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#454545] mb-6">
                      {group.description}
                    </p>
                    <ul className="space-y-4">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx}>
                          <p className="font-display text-sm font-bold text-black">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#454545]/80 mt-0.5">
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Practice Focus Areas */}
      <section id="industry-sectors" className="relative w-full px-5 py-24 sm:px-8 lg:px-14 scroll-mt-28">
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Focus Areas
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-black">
              Sectors where custom software helps
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              We build tools for businesses and organizations looking to simplify operations and serve customers better.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.solutions.sectors.map((sector, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 4) + 1) * 100} card-nerd group rounded-3xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between hover:bg-[#f5f5f5]`}
              >
                <div>
                  <span className="inline-block rounded-full bg-[#6d001a]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#6d001a]">
                    {sector.badge}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-black">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#454545]">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Tooling */}
      <section id="tech-stack-section" className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-black/10 bg-white scroll-mt-28">
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Technical competencies
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-black">
              Tools we work with
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              Modern, proven languages, relational databases, and maintainable web stacks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.solutions.techStack.map((stack, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 4) + 1) * 100} card-nerd rounded-3xl border border-black/10 bg-black p-8 text-white shadow-sm`}
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {stack.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Solutions In-Page FAQ */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="viewport-animation mb-12 text-center">
            <span className="inline-block rounded-full bg-[#6d001a]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#6d001a]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-black">
              Questions about custom software delivery
            </h2>
          </div>

          <div className="space-y-4">
            {solutionFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="viewport-animation card-nerd rounded-2xl border border-black/10 bg-white p-6 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-display font-bold text-base sm:text-lg text-black cursor-pointer"
                >
                  {faq.q}
                  <span className={`text-[#6d001a] transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="mt-4 pt-4 border-t border-black/10 text-sm leading-relaxed text-[#454545]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
