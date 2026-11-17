import { siteConfig } from "@/content/site";

export const About = ({ onNavigate }) => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="viewport-animation mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            About us
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.about.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.about.description}
          </p>
        </div>

        {/* Points grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.about.points.map((point, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-white/70 p-8 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#9c6849]/10 text-[#9c6849]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#231c17]">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Engineering Methodology / Process */}
        <div className="mt-28">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              How we work
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              A disciplined, predictable delivery process
            </h3>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              From first architectural discovery through production launch and internal staff handover, our agile methodology eliminates ambiguity and drives rapid velocity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.about.process.map((step, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd relative rounded-2xl border border-[#3d2d22]/15 bg-white/60 p-7 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-[#dcbf77]">
                      {step.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#9c6849]" />
                  </div>
                  <h4 className="font-display mt-5 text-lg font-semibold text-[#231c17]">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Commitments / Pillars */}
        <div className="mt-28">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our commitments
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              Architectural standards we stand by
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.about.pillars.map((pillar, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-[#231c17] p-7 text-white shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#dcbf77] text-sm font-bold">
                    0{index + 1}
                  </div>
                  <h4 className="font-display mt-4 text-base font-semibold text-[#dcbf77]">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#d7c4ae]/80">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision Statement */}
        <div className="viewport-animation mt-24 rounded-3xl bg-[#231c17] p-10 text-white sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#9c6849]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#dcbf77]" />
                Our mission
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                Closing the digital infrastructure gap
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]">
                We exist to bridge the gap between Africa's vast digital potential and the tools needed to realize it. Every line of code we write, every team we mentor, and every institutional partnership we forge serves this continent-wide purpose.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#dcbf77]" />
                Our vision
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                One million opportunities by 2030
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]">
                By 2030, our goal is to catalyze one million digital economic opportunities across Africa—powering sustainable job creation, open developer tooling, and reliable digital public goods that touch everyday lives.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="viewport-animation mt-24 text-center">
          <p className="text-lg text-[#5f5249]">
            Have an initiative that needs world-class engineering execution?
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all hover:bg-[#825238] hover:shadow-xl cursor-pointer"
          >
            Start a project with us
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
