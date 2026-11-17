import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";

const iconMap = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  transform: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  design: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-1.657 1.657a2 2 0 01-2.828 0l-2.829-2.828a2 2 0 010-2.828z",
  ai: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
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
      q: "What is the advantage of tailor-made software over off-the-shelf software?",
      a: "Off-the-shelf software forces your operations into a rigid, generic template and charges escalating per-seat monthly licenses. Tailor-made software matches your exact workflows, integrates directly with your existing infrastructure, and gives you 100% intellectual property (IP) ownership with zero ongoing license costs.",
    },
    {
      q: "How fast can an initial version or MVP launch?",
      a: "Thanks to our modular agile architecture and sprint methodologies, we typically deliver a tested, production-ready Minimum Viable Product (MVP) within 6 to 10 weeks. From there, we continuously release new capabilities in bi-weekly sprints.",
    },
    {
      q: "Do you provide continuous evolution and SLA support after launch?",
      a: "Yes, continuous scaling and proactive maintenance are core to our work. We provide dedicated engineering pods with guaranteed response times, 24/7 automated telemetry, and 99.98% uptime SLAs.",
    },
    {
      q: "Can you integrate with regional payment rails, telco APIs, and banking switches?",
      a: "Absolutely. We specialize in deep integrations with African payment rails including M-Pesa Daraja, Paystack, Flutterwave, Africa's Talking, Interswitch, and national banking clearinghouses.",
    },
  ];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Header Section */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Software Solutions • Practice Areas
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-[#231c17] max-w-5xl">
            Tailor-made software solutions engineered to scale without limits.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.solutions.description} Whether building high-volume fintech rails, decentralizing public records, or modernizing legacy infrastructure, we deliver end-to-end reliability.
          </p>
        </div>
      </section>

      {/* 2. Signature Comparison: Off-The-Shelf vs Custom Software */}
      <section className="relative w-full px-5 py-12 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 sm:p-14 shadow-lg">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[#9c6849]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#9c6849]">
              The Strategic Choice
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold text-[#231c17] sm:text-4xl">
              Off-The-Shelf Software vs. Tailor-Made Software
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm text-[#5f5249]">
              Why high-growth organizations choose custom tailor-made software over generic off-the-shelf subscriptions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Off-the-shelf box */}
            <div className="rounded-2xl border border-[#3d2d22]/15 bg-[#f5efe4]/60 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#3d2d22]/10">
                  <h3 className="font-display text-xl font-bold text-[#5f5249]">
                    Off-The-Shelf SaaS
                  </h3>
                  <span className="text-xs font-bold text-red-500 uppercase">Generic</span>
                </div>
                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#5f5249]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Recurring per-seat subscription fees that balloon with scale
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Rigid workflows that force your teams into generic boxes
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Limited or brittle integrations with regional payment gateways
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    Data hosted on overseas multi-tenant clouds outside your control
                  </li>
                </ul>
              </div>
            </div>

            {/* Afrinit Tailor-made box */}
            <div className="rounded-2xl border-2 border-[#9c6849] bg-[#231c17] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#dcbf77]/10 blur-xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display text-xl font-bold text-[#dcbf77]">
                    Afrinit Tailor-Made Software
                  </h3>
                  <span className="text-xs font-bold text-emerald-400 uppercase">100% Tailored</span>
                </div>
                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#d7c4ae]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    100% full intellectual property ownership with zero license lock-in
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Engineered to match your exact business logic and compliance needs
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Deep native integrations with M-Pesa, Paystack, banks & ERPs
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    Sovereign data hosting on dedicated, highly available cloud infra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expandable Solutions & Practice Panels */}
      <section className="relative w-full px-5 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Our software practice areas
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Explore our core technical specializations. Click each panel to inspect architectural scope and deliverables.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.solutions.services.map((service, index) => (
              <div
                key={index}
                id={`service-panel-${index}`}
                className={`viewport-animation delay-${((index % 4) + 1) * 75} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/80 shadow-sm overflow-hidden scroll-mt-28`}
              >
                <button
                  onClick={() => setOpenPanel(openPanel === index ? null : index)}
                  className="w-full flex items-center gap-5 p-8 text-left cursor-pointer"
                  aria-expanded={openPanel === index}
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#9c6849]/15 text-[#9c6849]">
                    <svg
                      className="h-7 w-7"
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
                    <h3 className="font-display text-xl font-bold text-[#231c17]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#5f5249]">{service.description}</p>
                  </div>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-[#9c6849] transition-transform duration-300 ${
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
                    <div className="px-8 pb-8 pl-[90px] text-sm leading-relaxed text-[#5f5249] border-t border-[#3d2d22]/10 pt-4">
                      {service.details}
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
        <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
          <div className="mx-auto max-w-6xl">
            <div className="viewport-animation mb-14">
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                <span className="h-px w-9 bg-[#9c6849]" />
                Disciplines & Services
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
                {siteConfig.capabilities.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
                {siteConfig.capabilities.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {siteConfig.capabilities.groups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className={`viewport-animation delay-${(gIdx + 1) * 150} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#3d2d22]/10 mb-6">
                      <h3 className="font-display text-2xl font-bold text-[#231c17]">
                        {group.name}
                      </h3>
                      <span className="text-xs font-bold uppercase text-[#9c6849]">
                        {group.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#5f5249] mb-6">
                      {group.description}
                    </p>
                    <ul className="space-y-4">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="group/item">
                          <p className="font-display text-sm font-bold text-[#231c17] group-hover/item:text-[#9c6849] transition-colors">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#5f5249]/80 mt-0.5">
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

      {/* 5. Sectors & Branches */}
      <section id="industry-sectors" className="relative w-full px-5 py-24 sm:px-8 lg:px-14 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Industry focus • Practice Verticals
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Sectors where our software moves the needle
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              We specialize in foundational economic engines across Africa, where high-reliability software directly expands economic opportunity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.solutions.sectors.map((sector, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 3) + 1) * 100} card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/70 p-8 shadow-sm flex flex-col justify-between hover:bg-white`}
              >
                <div>
                  <span className="inline-block rounded-full bg-[#dcbf77]/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#79513a]">
                    {sector.badge}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-[#231c17]">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Tooling */}
      <section id="tech-stack-section" className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Technical competencies
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Tools we love working with
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Modern languages, resilient cloud databases, and high-performance protocols chosen for speed and durability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.solutions.techStack.map((stack, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 3) + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] p-8 text-white shadow-sm`}
              >
                <h3 className="font-display text-lg font-bold text-[#dcbf77]">
                  {stack.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-[#d7c4ae] transition-transform duration-200 hover:scale-105"
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


      {/* Consultation CTA */}
      <section className="relative w-full px-5 py-20 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-4xl text-center">
          <p className="text-lg text-[#5f5249]">
            Have technical requirements or need an architectural evaluation?
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all hover:bg-[#825238] hover:shadow-xl cursor-pointer"
          >
            Start a technical consultation
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
      </section>
    </div>
  );
};
