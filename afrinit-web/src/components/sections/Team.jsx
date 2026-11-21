import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FounderCarousel } from "@/components/ui/FounderCarousel";

// Helper to generate a slug from a name
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Team = ({ onNavigate }) => {
  const { title, description, members, values } = siteConfig.team;

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Header */}
      <section className="relative min-h-[40vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Our Team • Co-Founders
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17] max-w-4xl">
            {title}
          </h1>
          <p className="viewport-animation delay-200 mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {description}
          </p>
        </div>
      </section>

      {/* 2. Co-Founders One Card Carousel */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="w-full">
          <FounderCarousel members={members} onNavigate={onNavigate} isPreview={false} />
        </div>
      </section>

      {/* 3. Values Section: "How we work together" */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-[#3d2d22]/10 bg-white/40 mt-16">
        <div className="w-full">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
              <span className="h-px w-9 bg-[#9c6849]" />
              Our Principles
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-[#231c17]">
              How we work together
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
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

      {/* 4. Closing CTA Section */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 bg-[#231c17] text-white overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcbf77]/10 blur-3xl" />
        <div className="viewport-animation w-full text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dcbf77]">
            Work with us
          </p>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Let's build your next software product together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#d7c4ae]">
            Work directly with our co-founders to architect, design, and ship reliable software tailored to your goals.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] transition hover:bg-white cursor-pointer shadow-lg"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
