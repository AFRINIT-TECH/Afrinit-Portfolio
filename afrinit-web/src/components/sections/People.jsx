import { siteConfig } from "@/content/site";

export const People = ({ onNavigate }) => {
  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. People & Culture Hero (nerds.company /jobs style) */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            People & Culture • Our Builders
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-[#231c17] max-w-5xl">
            Passionate craftspeople with an obsession for detail.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.people.description} We are a collective of software engineers, distributed systems architects, and product designers who love hard problems, clean codebases, and zero bureaucracy.
          </p>
        </div>
      </section>

      {/* 2. Values & Culture (nerds.company culture pillars) */}
      <section className="relative w-full px-5 py-12 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              How we work & live
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#231c17]">
              Our cultural operating system
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.people.values.map((value, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 2) + 1) * 100} card-nerd flex gap-6 rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 sm:p-10 shadow-sm`}
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dcbf77]/30 text-[#9c6849] font-display text-xl font-black">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#231c17]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Roster (nerds.company "Meet the Nerds") */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Meet the Nerds
              <span className="h-px w-9 bg-[#9c6849]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Engineers, designers & architects
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#5f5249]">
              United by a conviction to build world-class digital platforms with high standards and no strings attached.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.team.map((member, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 4) + 1) * 100} card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/90 overflow-hidden shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#d7c4ae]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale-[10%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-[#231c17]/90 px-3.5 py-1 text-xs font-semibold text-[#dcbf77] backdrop-blur-sm shadow-md">
                      {member.role}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[#231c17]">
                      {member.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Careers & Open Applications */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl rounded-3xl bg-[#231c17] p-10 text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcbf77]/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-[#dcbf77]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dcbf77]">
              Careers • Join The Team
            </span>
            <h2 className="font-display mt-6 text-3xl sm:text-5xl font-extrabold text-white">
              Passionate engineer? Wanna join?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#d7c4ae]">
              We are constantly scouting exceptional talent: senior Go and React engineers, Kubernetes wizards, UX researchers, and product strategists across Africa.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate("contact")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] transition hover:bg-white cursor-pointer shadow-lg"
              >
                Send an open application
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </button>
              <a
                href={`mailto:${siteConfig.footer.email}?subject=Career%20Inquiry%20at%20Afrinit`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#231c17]"
              >
                Send CV directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Workplace Principles */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Engineering Craftsmanship
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#231c17]">
              How we foster world-class craft
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.cultureBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] p-8 text-white shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#dcbf77] text-sm font-black">
                    ★
                  </div>
                  <h3 className="font-display mt-5 text-base font-bold text-[#dcbf77]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#d7c4ae]/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer CTA */}
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
