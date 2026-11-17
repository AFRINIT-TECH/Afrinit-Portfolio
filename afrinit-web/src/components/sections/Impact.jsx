import { siteConfig } from "@/content/site";

export const Impact = ({ onNavigate }) => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="viewport-animation mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Continental Impact
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.impact.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.impact.description}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.impact.stats.map((stat, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${(index + 1) * 100} card-nerd group relative overflow-hidden rounded-2xl border border-[#3d2d22]/15 bg-gradient-to-br from-[#231c17] to-[#2d241e] p-8 text-white shadow-lg`}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#9c6849]/20 transition-transform duration-500 ease-out group-hover:scale-150" />
              <p className="relative font-display text-5xl font-extrabold tracking-tight text-[#dcbf77]">
                {stat.value}
              </p>
              <p className="relative mt-3 text-sm font-medium text-[#d7c4ae]/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Continental Milestones Timeline */}
        <div className="mt-28">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Strategic roadmap
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              Key milestones driving progress
            </h3>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Tracing our journey from local proof-of-concepts to continent-scale software infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.impact.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/70 p-7 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#9c6849]">
                    {milestone.year}
                  </span>
                  <h4 className="font-display mt-3 text-lg font-semibold text-[#231c17]">
                    {milestone.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-28">
          <div className="viewport-animation mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Partner voices
              <span className="h-px w-9 bg-[#9c6849]" />
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              What partners across Africa say
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {siteConfig.impact.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 2) + 1) * 150} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/70 p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <svg
                    className="h-8 w-8 text-[#9c6849]/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-[#5f5249]">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#3d2d22]/10 flex items-center justify-between">
                  <div>
                    <p className="font-display text-base font-semibold text-[#231c17]">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-[#5f5249]">{testimonial.role}</p>
                  </div>
                  {testimonial.location && (
                    <span className="rounded-full bg-[#d7c4ae]/30 px-3 py-1 text-[11px] font-medium text-[#79513a]">
                      {testimonial.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="viewport-animation mt-24 text-center">
          <p className="text-lg text-[#5f5249]">
            Ready to partner on high-impact technology?
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all hover:bg-[#825238] hover:shadow-xl cursor-pointer"
          >
            Partner with us
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
