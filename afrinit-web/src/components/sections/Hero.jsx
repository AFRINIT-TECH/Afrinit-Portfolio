import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";

export const Hero = ({ onNavigate }) => {
  // Top 4 featured projects for the success stories section
  const featuredProjects = siteConfig.projects.items.slice(0, 4);

  // Testimonial interactive swiper state (inspired by nerds.company swiper)
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = siteConfig.impact.testimonials;

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Infinite ticker duplicate list for seamless animation
  const tickerLogos = [...siteConfig.partnerLogos, ...siteConfig.partnerLogos];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Flagship Hero Section */}
      <section className="relative grid min-h-[calc(100vh-78px)] w-full items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-14 lg:py-20">
        {/* Left Column */}
        <div className="relative z-10">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            {siteConfig.hero.eyebrow}
          </div>

          <h1 className="viewport-animation delay-100 font-display max-w-[820px] text-[clamp(2.75rem,6.5vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-[#231c17]">
            {siteConfig.hero.titleLine1}
            <span className="mt-2 block text-[#9c6849]">
              {siteConfig.hero.titleLine2}
            </span>
          </h1>

          <p className="viewport-animation delay-200 mt-8 max-w-xl text-base leading-relaxed text-[#5f5249] sm:text-lg">
            {siteConfig.hero.paragraph}
          </p>

          <div className="viewport-animation delay-300 mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate && onNavigate("projects")}
              className="group inline-flex items-center gap-4 rounded-full bg-[#9c6849] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all hover:bg-[#825238] hover:shadow-xl cursor-pointer"
            >
              {siteConfig.hero.primaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group inline-flex items-center gap-3 rounded-full border border-[#3d2d22]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-[#231c17] transition hover:bg-white hover:text-[#9c6849] cursor-pointer"
            >
              {siteConfig.hero.secondaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual Image with Badges */}
        <div className="relative mx-auto w-full max-w-[580px] lg:mr-0">
          <div className="absolute -left-6 top-[8%] hidden h-28 w-28 rounded-full border border-[#9c6849]/30 sm:block lg:-left-10" />

          <div className="viewport-animation delay-200 relative ml-auto aspect-[4/5] w-[90%] overflow-hidden rounded-2xl bg-[#d7c4ae] shadow-2xl">
            <img
              src={siteConfig.hero.image.src}
              alt={siteConfig.hero.image.alt}
              className="h-full w-full object-cover grayscale-[10%] transition-transform duration-700 ease-out hover:scale-105"
              loading="eager"
            />
            {/* Bottom Dark Overlay Tag */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#231c17] via-[#231c17]/85 to-transparent p-6 text-white sm:p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d7c4ae]">
                  {siteConfig.hero.stats.label}
                </p>
                <p className="font-display mt-1 text-3xl font-bold text-white">
                  {siteConfig.hero.stats.value}
                </p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </div>
          </div>

          {/* Yellow/Gold Goal Tag */}
          <div className="viewport-animation delay-400 absolute -bottom-6 left-0 rounded-xl bg-[#dcbf77] p-5 shadow-xl sm:w-52 sm:p-6 text-[#231c17] animate-float">
            <p className="font-display text-4xl font-extrabold tracking-tight">
              {siteConfig.hero.goal.year}
            </p>
            <p className="mt-1 text-xs font-semibold leading-relaxed">
              {siteConfig.hero.goal.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars (Custom Software Solutions) */}
      <section className="relative w-full border-t border-[#3d2d22]/10 bg-white/40 px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Core Competencies
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
              Tailor-made software solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Every organization has unique operational hurdles. We build custom software that solves your exact operational challenges without bloated overhead.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {siteConfig.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${(idx + 1) * 100} card-nerd group relative rounded-2xl border border-[#3d2d22]/15 bg-white/80 p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="inline-block rounded-full bg-[#9c6849]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9c6849]">
                    {pillar.badge}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold italic text-[#79513a]">
                    {pillar.subheading}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5f5249]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#3d2d22]/10">
                  <button
                    onClick={() => onNavigate && onNavigate(pillar.page)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9c6849] transition-colors group-hover:text-[#231c17] cursor-pointer"
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Infinite Logo Marquee Ticker (Brands We Engineer For) */}
      <section className="relative w-full border-y border-[#3d2d22]/10 bg-[#f5efe4] py-14 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79513a]">
            Brands & institutions we engineer solutions for
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

      {/* 4. Featured Success Stories */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                <span className="h-px w-9 bg-[#9c6849]" />
                Selected Case Studies
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
                Our success stories
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#5f5249]">
                Our engineers love technical depth, but what matters is the outcome. Nothing shows that better than a selection of our work across the continent.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("projects")}
              className="group inline-flex items-center gap-3 rounded-full border border-[#3d2d22]/20 bg-white/80 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#231c17] transition hover:bg-[#231c17] hover:text-white cursor-pointer"
            >
              Check all our work
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
          </div>

          {/* Staggered 2-column Grid of Featured Case Studies (nerds.company masonry layout) */}
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${((idx % 2) + 1) * 150} card-nerd group relative overflow-hidden rounded-3xl border border-[#3d2d22]/15 bg-white/90 shadow-sm flex flex-col justify-between ${
                  idx % 2 === 1 ? "md:mt-12" : ""
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#d7c4ae]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {project.metric && (
                      <div className="absolute bottom-4 left-4 rounded-lg bg-[#231c17]/90 px-3.5 py-1.5 text-xs font-bold text-[#dcbf77] backdrop-blur-sm shadow-md">
                        {project.metric}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#231c17] backdrop-blur-sm shadow-xs">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9c6849]">
                      Case Highlight
                    </span>
                    <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <div className="flex flex-wrap gap-2 border-t border-[#3d2d22]/10 pt-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full bg-[#d7c4ae]/30 px-3 py-1 text-[11px] font-semibold text-[#5f5249]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "How We Work" Philosophical Statement Block */}
      <section className="relative w-full px-5 py-12 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl rounded-3xl bg-[#231c17] p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-[#9c6849]/15 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-[#dcbf77]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dcbf77]">
              {siteConfig.howWeWorkStatement.heading}
            </span>
            <blockquote className="font-display mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-white">
              "{siteConfig.howWeWorkStatement.quote}"
            </blockquote>

            <div className="mt-10">
              <button
                onClick={() => onNavigate && onNavigate("about")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-semibold text-[#231c17] transition-all hover:bg-white cursor-pointer"
              >
                {siteConfig.howWeWorkStatement.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner Reviews (Interactive Swiper Slider) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                <span className="h-px w-9 bg-[#9c6849]" />
                Client Stories & Reviews
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
                What others experience
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#5f5249]">
                Great that we are enthusiastic, but what do our clients say? Hear directly from partners who build and scale software with us.
              </p>
            </div>

            {/* Swiper Arrow Navigation Controls */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white/80 text-[#231c17] transition-all hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white/80 text-[#231c17] transition-all hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Active Featured Testimonial Card */}
          <div className="viewport-animation rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 sm:p-12 shadow-md relative overflow-hidden transition-all duration-500">
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

      {/* 7. Tools We Love Working With */}
      <section className="relative w-full border-t border-[#3d2d22]/10 bg-white/40 px-5 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Engineering Tooling
              <span className="h-px w-9 bg-[#9c6849]" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-4xl">
              Tools we love working with
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-[#5f5249]">
              Modern, high-performance languages and frameworks chosen for speed, reliability, and security.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.solutions.techStack.map((stack, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${(idx + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/80 p-6 shadow-sm`}
              >
                <h3 className="font-display text-base font-bold text-[#9c6849]">
                  {stack.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-[#231c17] px-3 py-1 text-xs font-semibold text-[#d7c4ae] transition-transform duration-200 hover:scale-105"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Signature Pre-Footer CTA Banner ("Curious how we can help you? Hell yeah!") */}
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
