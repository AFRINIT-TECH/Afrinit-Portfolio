import { useState } from "react";
import { siteConfig } from "@/content/site";

export const About = ({ onNavigate }) => {
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. About Hero Section (nerds.company style) */}
      <section className="relative min-h-[50vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            About us • Our Mission
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-[#231c17] max-w-5xl">
            Your collective of passionate software enthusiasts building the digital frameworks of tomorrow.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.about.description} We combine deep computer science craft with an obsession for detail, designing and scaling software that solves foundational problems without corporate bloat.
          </p>
        </div>
      </section>

      {/* 2. Interactive Showreel & Agency Media Showcase (nerds.company showreel) */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600"
              alt="Afrinit Engineering Showreel"
              className={`h-full w-full object-cover transition-all duration-700 ${
                isPlayingReel ? "scale-105 opacity-90" : "opacity-75 group-hover:scale-105"
              }`}
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-[#231c17]/90 via-transparent to-[#231c17]/30">
              <button
                type="button"
                onClick={() => setIsPlayingReel((prev) => !prev)}
                className="group/btn flex h-20 w-20 items-center justify-center rounded-full bg-[#dcbf77] text-[#231c17] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white cursor-pointer"
                aria-label={isPlayingReel ? "Pause showreel" : "Play showreel"}
              >
                {isPlayingReel ? (
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <h2 className="font-display mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white">
                {isPlayingReel ? "Now Playing: Afrinit 2026 Showreel" : "Our showreel offers an impression of our engineering work"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#d7c4ae] max-w-md">
                A brief glimpse into the people, codebases, and digital platforms powering Africa's fastest-growing sectors.
              </p>
            </div>

            {/* Corner Badges */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 rounded-full bg-[#231c17]/80 px-4 py-1.5 text-xs font-semibold text-[#dcbf77] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Reel 2026
            </div>
            <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 rounded-full bg-[#231c17]/80 px-4 py-1.5 text-xs font-semibold text-[#d7c4ae] backdrop-blur-md">
              Enschede • Nairobi • Lagos
            </div>
          </div>
        </div>
      </section>

      {/* 3. Methodology & Multidisciplinary Teams */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 mt-16 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our Methodology • How We Work
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Engineering high-impact software with multidisciplinary teams
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              There is no one-size-fits-all approach. We adapt to your requirements, pairing your domain specialists with a dedicated squad of researchers, designers, and software engineers.
            </p>
          </div>

          {/* 4 Delivery Framework Stages */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.about.process.map((step, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#3d2d22]/10">
                    <span className="font-display text-3xl font-black text-[#dcbf77]">
                      {step.step}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9c6849]" />
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold text-[#231c17]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Engineering Principles (nerds.company standards) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Standards & Principles
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
              Architectural standards we live by
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Engineering excellence isn't just about code syntax; it's about building long-term reliability and complete ownership for the client.
            </p>
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
                  <h3 className="font-display mt-5 text-base font-bold text-[#dcbf77]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#d7c4ae]/80">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team & Cultural Leadership Preview (Meet the Nerds) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
                <span className="h-px w-9 bg-[#9c6849]" />
                Meet the Team
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
                The people behind the code
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#5f5249]">
                Passionate software engineers, architects, and product designers united by a love for elegant, pragmatic digital products.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("people")}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#3d2d22]/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#231c17] transition hover:bg-[#231c17] hover:text-white cursor-pointer"
            >
              Meet everyone
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.team.slice(0, 4).map((member, idx) => (
              <div
                key={idx}
                className={`viewport-animation delay-${(idx + 1) * 100} card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/90 overflow-hidden shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d7c4ae]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[#231c17]/85 px-3 py-1 text-[11px] font-semibold text-[#dcbf77] backdrop-blur-sm">
                      {member.role}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[#231c17]">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5f5249]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mission & 2030 Continental Vision */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl rounded-3xl bg-[#231c17] p-10 text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#9c6849]/15 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                Our Mission
              </div>
              <h3 className="font-display mt-4 text-3xl font-extrabold text-white">
                Closing the digital infrastructure gap
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]/90">
                We exist to bridge the gap between Africa's vast digital potential and the tools needed to realize it. Every line of code we write, every team we mentor, and every institutional partnership we forge serves this continent-wide purpose.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                Our Vision
              </div>
              <h3 className="font-display mt-4 text-3xl font-extrabold text-white">
                One million opportunities by 2030
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]/90">
                By 2030, our goal is to catalyze one million digital economic opportunities across Africa—powering sustainable job creation, open developer tooling, and reliable digital public goods that touch everyday lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Signature Pre-Footer CTA Banner (Hell yeah! Let's talk) */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 bg-[#231c17] text-white overflow-hidden border-t border-white/10">
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
