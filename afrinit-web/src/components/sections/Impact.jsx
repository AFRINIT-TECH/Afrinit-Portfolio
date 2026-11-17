import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Impact = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = siteConfig.impact.testimonials;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const tickerLogos = [...siteConfig.partnerLogos, ...siteConfig.partnerLogos];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Impact Hero */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Continental Impact • Proven Outcomes
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-[#231c17] max-w-5xl">
            Measurable software impact that transforms African industries.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.impact.description} We don't measure success by lines of code, but by the tangible efficiency, transaction velocity, and real economic opportunities unlocked across communities.
          </p>
        </div>
      </section>

      {/* 2. Stats Grid */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.impact.stats.map((stat, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd group relative overflow-hidden rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] p-8 text-white shadow-xl flex flex-col justify-between`}
              >
                <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#dcbf77]/10 transition-transform duration-500 ease-out group-hover:scale-150" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d7c4ae]/60">
                    Metric 0{index + 1}
                  </span>
                  <p className="font-display mt-4 text-5xl sm:text-6xl font-black tracking-tight text-[#dcbf77]">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-sm font-semibold leading-snug text-[#d7c4ae]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Infinite Partner Ticker */}
      <section className="relative w-full border-y border-[#3d2d22]/10 bg-white/40 py-14 my-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79513a]">
            Organizations & Governments Trusting Our Infrastructure
          </p>
        </div>
        <div className="infinite-slider">
          <div className="infinite-wrapper">
            {tickerLogos.map((partner, pIdx) => (
              <div key={pIdx} className="infinite-item px-4">
                <div className="flex items-center gap-3.5 rounded-2xl border border-[#3d2d22]/12 bg-white/90 px-6 py-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                  <span className="h-2 w-2 rounded-full bg-[#9c6849]" />
                  <div>
                    <p className="font-display text-sm font-bold text-[#231c17] whitespace-nowrap">
                      {partner.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[#79513a] font-semibold">
                      {partner.sector}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Milestones Timeline */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Strategic Roadmap • Milestones
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Key milestones driving progress
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Tracing our journey from local proof-of-concepts to continent-scale software infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.impact.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#3d2d22]/10">
                    <span className="font-display text-3xl font-black text-[#9c6849]">
                      {milestone.year}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-[#231c17]">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Testimonials Carousel (nerds.company swiper) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                <span className="h-px w-9 bg-[#9c6849]" />
                Client Voices • Testimonials
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
                What partners across Africa say
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#5f5249]">
                Hear directly from the organizations, banks, and healthcare ministries deploying our software platforms.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white text-[#231c17] transition-all hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white text-[#231c17] transition-all hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="viewport-animation rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 sm:p-12 shadow-md relative overflow-hidden transition-all duration-500">
            <svg
              className="h-12 w-12 text-[#9c6849]/25 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-[#231c17]">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#3d2d22]/10 pt-6">
              <div>
                <p className="font-display text-lg font-bold text-[#231c17]">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-xs text-[#5f5249]">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {testimonials[activeTestimonial].location && (
                  <span className="rounded-full bg-[#d7c4ae]/40 px-3.5 py-1 text-xs font-semibold text-[#79513a]">
                    {testimonials[activeTestimonial].location}
                  </span>
                )}
                <span className="text-xs font-bold text-[#9c6849]">
                  0{activeTestimonial + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Signature Pre-Footer CTA */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 bg-[#231c17] text-white overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcbf77]/10 blur-3xl" />
        <div className="viewport-animation mx-auto max-w-6xl text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dcbf77]">
            {siteConfig.preFooterCta.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            {siteConfig.preFooterCta.heading}
          </h2>
          <div className="mt-10">
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group inline-flex items-center gap-4 rounded-full bg-[#dcbf77] px-10 py-5 text-base font-bold text-[#231c17] shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer"
            >
              {siteConfig.preFooterCta.buttonText}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
