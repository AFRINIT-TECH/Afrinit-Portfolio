import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const About = ({ onNavigate }) => {
  const teamMembers = siteConfig.team?.members || [];
  const { title, description, points, pillars, process, image, mission, vision } = siteConfig.about;

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. About Hero Section */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            About us • Our Team
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17] max-w-5xl">
            {title}: Five co-founders building dependable software.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {description}
          </p>
        </div>
      </section>

      {/* 2. Workspace / Team Image Slot (16:9 ratio, public/about/workspace.jpg) */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#3d2d22]/15 bg-[#231c17] shadow-xl">
            {image?.src ? (
              <img
                src={image.src}
                alt={image.alt || "Our workspace in Nairobi or Kisumu"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <ImagePlaceholder
                label="Our workspace in Nairobi or Kisumu"
                hint="16:9, add at public/about/workspace.jpg"
                aspect="aspect-[16/9]"
                className="h-full w-full rounded-none border-0"
              />
            )}
          </div>
        </div>
      </section>

      {/* 3. Three Core Strengths */}
      <section className="relative w-full px-5 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`viewport-animation delay-${(idx + 1) * 100} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/80 p-8 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dcbf77]/30 text-[#9c6849] font-display text-sm font-bold mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-[#231c17]">
                  {pt.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Methodology & Process Stages */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our Methodology • How We Work
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-[#231c17]">
              Iterative, transparent software development
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              We adapt to your requirements, communicating plainly and delivering working software in regular milestones.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
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

      {/* 5. Core Engineering Principles */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Standards & Principles
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#231c17] sm:text-5xl">
              Principles we live by
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#5f5249]">
              Good software is about long-term dependability, maintainability, and complete ownership for the client.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
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

      {/* 6. Compact Team Preview (5 Co-Founders, avatars square, "Meet everyone" -> Our Team) */}
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
                Five co-founders building custom web applications and business systems based in Nairobi and Kisumu, Kenya.
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate("team")}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#3d2d22]/20 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#231c17] transition hover:bg-[#231c17] hover:text-white cursor-pointer"
            >
              Meet everyone
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => {
              const slug = toSlug(member.name);
              return (
                <div
                  key={idx}
                  onClick={() => onNavigate && onNavigate("team")}
                  className="card-nerd group rounded-2xl border border-[#3d2d22]/15 bg-white/80 p-4 shadow-sm hover:shadow-md cursor-pointer flex flex-col items-center text-center"
                >
                  <div className="relative aspect-square w-full max-w-[140px] overflow-hidden rounded-xl bg-[#d7c4ae]/20 mb-4">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={member.name}
                        hint={`1:1, add at public/team/${slug}.jpg`}
                        aspect="aspect-square"
                        className="h-full w-full rounded-none border-0"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                    {member.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-[#9c6849]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#9c6849]">
                    {member.role || "Co-founder"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Mission & Vision */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-6xl rounded-3xl bg-[#231c17] p-10 text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#9c6849]/15 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                {mission.title}
              </div>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {mission.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]/90">
                {mission.description}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dcbf77]">
                <span className="h-2 w-2 rounded-full bg-[#dcbf77]" />
                {vision.title}
              </div>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {vision.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#d7c4ae]/90">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pre-Footer CTA */}
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

export default About;
