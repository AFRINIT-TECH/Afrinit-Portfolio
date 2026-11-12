import { siteConfig } from "@/content/site";

export const Hero = ({ onNavigate }) => {
  return (
    <section className="page-view relative grid min-h-[calc(100vh-78px)] w-full items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-20">
      {/* Left Column */}
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
          <span className="h-px w-9 bg-[#9c6849]" />
          {siteConfig.hero.eyebrow}
        </div>

        <h1 className="font-display max-w-[780px] text-[clamp(3.5rem,7vw,7.7rem)] font-medium leading-[0.87] tracking-[-0.065em]">
          {siteConfig.hero.titleLine1}
          <span className="mt-2 block text-[#9c6849]">
            {siteConfig.hero.titleLine2}
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-base leading-7 text-[#5f5249] sm:text-lg">
          {siteConfig.hero.paragraph}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate && onNavigate("solutions")}
            className="group flex items-center gap-5 rounded-full bg-[#9c6849] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#825238]"
          >
            {siteConfig.hero.primaryCta.label}
            <span className="transition group-hover:translate-x-1">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-5-5 5 5-5 5"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => onNavigate && onNavigate("impact")}
            className="flex items-center gap-3 px-3 py-4 text-sm font-semibold transition hover:text-[#9c6849]"
          >
            {siteConfig.hero.secondaryCta.label}
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative mx-auto w-full max-w-[610px] lg:mr-0">
        <div className="absolute -left-4 top-[9%] hidden h-24 w-24 rounded-full border border-[#9c6849]/50 sm:block lg:-left-12" />

        <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[2px] bg-[#d7c4ae]">
          <img
            src={siteConfig.hero.image.src}
            alt={siteConfig.hero.image.alt}
            className="h-full w-full object-cover grayscale-[15%] transition duration-700 hover:scale-[1.025]"
            loading="eager"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[#231c17] p-5 text-white sm:p-7">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d7c4ae]">
                {siteConfig.hero.stats.label}
              </p>
              <p className="font-display mt-1 text-3xl">
                {siteConfig.hero.stats.value}
              </p>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17 17 7M7 7h10v10"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="absolute -bottom-7 left-0 w-40 bg-[#dcbf77] p-5 sm:w-48 sm:p-6">
          <p className="font-display text-4xl font-semibold tracking-tight">
            {siteConfig.hero.goal.year}
          </p>
          <p className="mt-2 text-xs font-semibold leading-5">
            {siteConfig.hero.goal.description}
          </p>
        </div>
      </div>
    </section>
  );
};
