import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FounderCarousel } from "@/components/ui/FounderCarousel";

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Hero = ({ onNavigate }) => {
  const teamMembers = siteConfig.team?.members || [];
  const archiveEntries = siteConfig.archives?.items?.slice(0, 3) || [];
  const testimonials = siteConfig.impact?.testimonials || [];
  const partnerLogos = siteConfig.partnerLogos || [];

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Flagship Hero Section */}
      <section className="relative grid min-h-[calc(100vh-78px)] w-full items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:py-20">
        {/* Left Column */}
        <div className="relative z-10 max-w-3xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            {siteConfig.hero.eyebrow}
          </div>

          <h1 className="viewport-animation delay-100 font-display text-[clamp(2.1rem,6vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-black break-words">
            {siteConfig.hero.titleLine1}
            <span className="mt-2 block text-[#6d001a]">
              {siteConfig.hero.titleLine2}
            </span>
          </h1>

          <p className="viewport-animation delay-200 mt-6 sm:mt-8 max-w-2xl text-base leading-relaxed text-[#454545] sm:text-lg">
            {siteConfig.hero.paragraph}
          </p>

          {/* Key Facts Row */}
          <div className="viewport-animation delay-300 mt-8 grid grid-cols-3 gap-3 sm:gap-6 border-y border-black/15 py-5 sm:py-6">
            {siteConfig.hero.stats.map((stat, idx) => (
              <div key={idx} className="min-w-0">
                <p className="font-display text-xl sm:text-3xl font-extrabold text-black">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#6d001a] leading-snug break-words">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="viewport-animation delay-400 mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate && onNavigate("projects")}
              className="group inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#6d001a] px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-[#6d001a]/20 transition-all hover:bg-[#4d0012] hover:shadow-xl cursor-pointer"
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
              onClick={() => onNavigate && onNavigate(siteConfig.hero.secondaryCta.page || "partners")}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-black/20 bg-white px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-black transition hover:bg-[#f5f5f5] hover:text-[#6d001a] cursor-pointer"
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

        {/* Right Column: Hero Visual Image (4:5 aspect ratio) */}
        <div className="relative w-full flex justify-end">
          <div className="viewport-animation delay-200 relative w-full aspect-[4/5] max-w-[700px] xl:max-w-[780px] overflow-hidden rounded-3xl bg-black/[0.06] shadow-2xl border border-black/10">
            {siteConfig.hero.image.src ? (
              <img
                src={siteConfig.hero.image.src}
                alt={siteConfig.hero.image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />
            ) : (
              <ImagePlaceholder
                label="Team or Workspace Photo"
                hint="4:5, add at public/hero/team.jpg"
                aspect="aspect-[4/5]"
                className="h-full w-full rounded-none border-0"
              />
            )}
          </div>
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="relative w-full border-t border-black/10 bg-white px-5 py-24 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Core Competencies
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Software tailored to your operations
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              Every organization has unique workflows and constraints. We build dependable software that solves your specific operational challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {siteConfig.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${(idx + 1) * 100} card-nerd group relative rounded-2xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <span className="inline-block rounded-full bg-[#6d001a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#6d001a]">
                    {pillar.badge}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-black group-hover:text-[#6d001a] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold italic text-[#6d001a]">
                    {pillar.subheading}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#454545]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10">
                  <button
                    onClick={() => onNavigate && onNavigate(pillar.page, pillar.navParams)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6d001a] transition-colors group-hover:text-black cursor-pointer"
                  >
                    {pillar.cta || "Learn more"}
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

      {/* 3. Partner Logos Marquee (rendered only if real partner logos exist) */}
      {partnerLogos.length > 0 && (
        <section className="relative w-full border-y border-black/10 bg-white py-14 overflow-hidden">
          <div className="w-full px-5 sm:px-8 lg:px-14 mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6d001a]">
              Organizations we build solutions for
            </p>
          </div>
          <div className="infinite-slider">
            <div className="infinite-wrapper">
              {[...partnerLogos, ...partnerLogos].map((partner, pIdx) => (
                <div key={pIdx} className="infinite-item px-4">
                  <div className="flex items-center gap-3.5 rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                    <p className="font-display text-sm font-bold text-black whitespace-nowrap">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Co-Founders One Card Carousel */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                <span className="h-px w-9 bg-[#6d001a]" />
                Our Team
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-5xl">
                Five co-founders building together
              </h2>
              <p className="mt-3 max-w-xl text-base text-[#454545]">
                Based in Nairobi and Kisumu, Kenya, and open to remote work.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("team")}
              className="group inline-flex items-center gap-2.5 rounded-full border border-black/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white cursor-pointer"
            >
              Meet everyone
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="viewport-animation delay-100">
            <FounderCarousel members={teamMembers} onNavigate={onNavigate} isPreview={true} />
          </div>
        </div>
      </section>

      {/* 5. "From the Archives" Strip */}
      <section className="relative w-full border-t border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                <span className="h-px w-9 bg-[#6d001a]" />
                From the Archives
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Milestones &amp; running record
              </h2>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("archives")}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6d001a] hover:text-black transition-colors cursor-pointer"
            >
              View full archives
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archiveEntries.map((entry, idx) => {
              const cardRoute =
                idx === 0
                  ? { page: "projects", action: "View shipped products" }
                  : idx === 1
                  ? { page: "about", action: "About our dual hubs" }
                  : { page: "team", action: "Meet our co-founders" };

              return (
                <div
                  key={idx}
                  onClick={() => onNavigate && onNavigate(cardRoute.page)}
                  className="card-nerd group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="rounded-full bg-black px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        {entry.type}
                      </span>
                      {entry.date && (
                        <span className="text-xs text-[#6d001a] font-medium">{entry.date}</span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-black group-hover:text-[#6d001a] transition-colors">
                      {entry.title}
                    </h3>
                    {entry.description && (
                      <p className="mt-2 text-xs leading-relaxed text-[#454545] line-clamp-3">
                        {entry.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-semibold text-[#6d001a]">
                    <span>{cardRoute.action}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. "How We Work" Philosophical Statement Block */}
      <section className="relative w-full px-5 py-16 sm:px-8 lg:px-14 overflow-hidden">
        <div className="viewport-animation w-full rounded-3xl bg-black p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#6d001a]/15 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-[#6d001a]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white/90">
              {siteConfig.howWeWorkStatement.heading}
            </span>
            <blockquote className="font-display mt-6 text-2xl sm:text-3xl font-medium leading-snug text-white">
              "{siteConfig.howWeWorkStatement.quote}"
            </blockquote>

            <div className="mt-10">
              <button
                onClick={() => onNavigate && onNavigate("about")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#6d001a] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black cursor-pointer"
              >
                {siteConfig.howWeWorkStatement.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Carousel (Hidden until real testimonials exist) */}
      {testimonials.length > 0 && (
        <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
          <div className="w-full">
            {/* Real testimonials will render here */}
          </div>
        </section>
      )}

      {/* 8. Tools We Work With */}
      <section className="relative w-full border-t border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Engineering Tooling
              <span className="h-px w-9 bg-[#6d001a]" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Tools we work with
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-[#454545]">
              Modern, reliable languages and frameworks chosen for speed, dependability, and maintainability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.solutions.techStack.map((stack, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${(idx + 1) * 100} card-nerd rounded-2xl border border-black/10 bg-white p-6 shadow-sm`}
              >
                <h3 className="font-display text-base font-bold text-[#6d001a]">
                  {stack.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-black px-3 py-1 text-xs font-semibold text-white/80"
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
    </div>
  );
};

export default Hero;
