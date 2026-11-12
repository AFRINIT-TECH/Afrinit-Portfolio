import { siteConfig } from "@/content/site";

export const People = ({ onNavigate }) => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Our culture
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.people.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.people.description}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {siteConfig.people.values.map((value, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-[#3d2d22]/15 bg-white/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#dcbf77]/30 text-[#9c6849] font-display text-lg font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5249]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team section */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold text-center mb-12">
            Meet our team
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.people.team.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#3d2d22]/15 bg-white/60 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-[#d7c4ae]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-semibold">{member.name}</h4>
                  <p className="mt-1 text-sm text-[#9c6849] font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-[#5f5249]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-[#5f5249]">
            Want to join our team? We're always looking for talented people.
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#9c6849] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#825238]"
          >
            Get in touch
            <span className="transition group-hover:translate-x-1">
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
