import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Impact = ({ onNavigate }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const stats = siteConfig.impact?.stats || [
    { value: "20+", label: "Products shipped by our team" },
    { value: "5", label: "Co-founders" },
    { value: "2", label: "Kenyan cities, plus remote" },
  ];

  // Milestones drawn directly from archives data
  const milestones = (siteConfig.archives?.items || []).filter(
    (item) => item.type === "milestone"
  );

  // Testimonials (hidden until real entries exist)
  const testimonials = siteConfig.impact?.testimonials || [];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Impact Hero */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Impact & Milestones
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17] max-w-5xl">
            Software built for tangible, everyday results.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.impact.description}
          </p>
        </div>
      </section>

      {/* 2. Stats Grid (True figures only) */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd group relative overflow-hidden rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] p-8 text-white shadow-xl flex flex-col justify-between`}
              >
                <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#dcbf77]/10 transition-transform duration-500 ease-out group-hover:scale-150" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d7c4ae]/60">
                    Fact 0{index + 1}
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

      {/* 3. Milestone Timeline Drawn from Archives Data */}
      {milestones.length > 0 && (
        <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40 mt-16">
          <div className="w-full">
            <div className="viewport-animation mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                  <span className="h-px w-9 bg-[#9c6849]" />
                  Milestones
                </div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
                  Key team milestones
                </h2>
                <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
                  Milestones drawn directly from our running records in the archives.
                </p>
              </div>
              <button
                onClick={() => onNavigate && onNavigate("archives")}
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9c6849] hover:text-[#231c17] transition-colors cursor-pointer self-start sm:self-auto"
              >
                View full archives
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#3d2d22]/10">
                      <span className="font-display text-2xl font-black text-[#9c6849]">
                        {milestone.date ? milestone.date.slice(0, 4) : "Milestone"}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                    </div>
                    <h3 className="font-display mt-5 text-xl font-bold text-[#231c17]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                      {milestone.description}
                    </p>
                  </div>
                  {milestone.tags && milestone.tags.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-[#3d2d22]/10 flex flex-wrap gap-2">
                      {milestone.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-full bg-[#d7c4ae]/30 px-2.5 py-0.5 text-[11px] font-medium text-[#5f5249]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
          <div className="w-full">
            <div className="viewport-animation mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                  <span className="h-px w-9 bg-[#9c6849]" />
                  Client Feedback • Testimonials
                </div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
                  What partners say about working with us
                </h2>
                <p className="mt-4 max-w-xl text-base text-[#5f5249]">
                  Direct feedback from the teams and organizations deploying our custom software systems.
                </p>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white text-[#231c17] transition hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        (prev + 1) % testimonials.length
                      )
                    }
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3d2d22]/20 bg-white text-[#231c17] transition hover:bg-[#231c17] hover:text-white cursor-pointer shadow-xs active:scale-95"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            <div className="viewport-animation rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 sm:p-12 shadow-sm relative overflow-hidden transition-all duration-300">
              <svg
                className="h-10 w-10 text-[#9c6849]/25 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="font-display text-xl sm:text-2xl font-medium leading-relaxed text-[#231c17]">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#3d2d22]/10 pt-6">
                <div>
                  <p className="font-display text-base font-bold text-[#231c17]">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-xs text-[#5f5249]">
                    {testimonials[activeTestimonial].role},{" "}
                    <span className="font-semibold text-[#79513a]">
                      {testimonials[activeTestimonial].organization}
                    </span>
                  </p>
                </div>
                {testimonials[activeTestimonial].metric && (
                  <div className="rounded-full bg-[#dcbf77]/30 px-3.5 py-1 text-xs font-bold text-[#9c6849]">
                    {testimonials[activeTestimonial].metric}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Impact;
