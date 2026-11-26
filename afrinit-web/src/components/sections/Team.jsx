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
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            Our Team • Co-Founders
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-black max-w-4xl">
            {title}
          </h1>
          <p className="viewport-animation delay-200 mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#454545]">
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
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 border-t border-black/10 bg-white mt-16">
        <div className="w-full">
          <div className="viewport-animation mb-12">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
              <span className="h-px w-9 bg-[#6d001a]" />
              Our Principles
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-black">
              How we work together
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className={`viewport-animation delay-${((index % 2) + 1) * 100} card-nerd flex gap-6 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm`}
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d001a]/10 text-[#6d001a] font-display text-xl font-black">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#454545]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
