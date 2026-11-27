import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FounderCarousel } from "@/components/ui/FounderCarousel";

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
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            About us • Our Team
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-black max-w-5xl">
            {title}: Five co-founders building dependable software.
          </h1>
          <p className="viewport-animation delay-200 mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#454545]">
            {description}
          </p>
        </div>
      </section>

      {/* 2. Workspace / Team Image Slot (16:9 ratio, public/about/workspace.jpg) */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="viewport-animation w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black/10 bg-black shadow-xl">
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
        <div className="w-full grid gap-8 md:grid-cols-3">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`viewport-animation delay-${(idx + 1) * 100} card-nerd rounded-3xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6d001a]/10 text-[#6d001a] font-display text-sm font-bold mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-black">
                  {pt.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#454545]">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Methodology & Process Stages */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-black/10 bg-white">
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Our Methodology • How We Work
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-black">
              Iterative, transparent software development
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              We adapt to your requirements, communicating plainly and delivering working software in regular milestones.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-3xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-black/10">
                    <span className="font-display text-3xl font-black text-[#6d001a]">
                      {step.step}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#6d001a]" />
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#454545]">
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
        <div className="w-full">
          <div className="viewport-animation mb-14">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Standards &amp; Principles
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Principles we live by
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#454545]">
              Good software is about long-term dependability, maintainability, and complete ownership for the client.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${(index + 1) * 100} card-nerd rounded-2xl border border-black/10 bg-black p-7 text-white shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white text-sm font-bold">
                    0{index + 1}
                  </div>
                  <h3 className="font-display mt-5 text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Co-Founders One Card Carousel */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-black/10 bg-white">
        <div className="w-full">
          <div className="viewport-animation mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
                <span className="h-px w-9 bg-[#6d001a]" />
                Meet the Team
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-black sm:text-5xl">
                The people behind the code
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#454545]">
                Five co-founders building custom web applications and business systems based in Nairobi and Kisumu, Kenya.
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

      {/* 7. Mission & Vision */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="viewport-animation w-full rounded-3xl bg-black p-10 text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#6d001a]/15 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                {mission.title}
              </div>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {mission.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {mission.description}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                {vision.title}
              </div>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {vision.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
