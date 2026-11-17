import { siteConfig } from "@/content/site";

export const People = ({ onNavigate }) => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="viewport-animation mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            People & Culture
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.people.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.people.description}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.people.values.map((value, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${((index % 2) + 1) * 100} card-nerd flex gap-5 rounded-2xl border border-[#3d2d22]/15 bg-white/70 p-8 shadow-sm`}
            >
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dcbf77]/30 text-[#9c6849] font-display text-lg font-bold">
                0{index + 1}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-[#231c17]">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5f5249]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team section */}
        <div className="mt-28">
          <div className="viewport-animation mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Engineering & Leadership
              <span className="h-px w-9 bg-[#9c6849]" />
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              Meet the builders behind Afrinit
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#5f5249]">
              Engineers, designers, and researchers united by a conviction to build world-class digital infrastructure in Africa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.team.map((member, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 4) + 1) * 100} card-nerd group rounded-2xl border border-[#3d2d22]/15 bg-white/70 overflow-hidden shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="aspect-square overflow-hidden bg-[#d7c4ae]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-semibold text-[#231c17]">{member.name}</h4>
                    <p className="mt-1 text-xs font-semibold text-[#9c6849] uppercase tracking-wider">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-[#5f5249]">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Life at Afrinit / Benefits */}
        <div className="mt-28">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our workplace
            </div>
            <h3 className="font-display text-3xl font-semibold text-[#231c17] sm:text-4xl">
              How we foster world-class craft
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.cultureBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-[#3d2d22]/15 bg-[#231c17] p-7 text-white shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#dcbf77] text-sm font-bold">
                    ★
                  </div>
                  <h4 className="font-display mt-4 text-base font-semibold text-[#dcbf77]">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#d7c4ae]/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="viewport-animation mt-24 text-center">
          <p className="text-lg text-[#5f5249]">
            Want to build the future of African software with us?
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#9c6849]/20 transition-all hover:bg-[#825238] hover:shadow-xl cursor-pointer"
          >
            Explore careers & fellowships
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
