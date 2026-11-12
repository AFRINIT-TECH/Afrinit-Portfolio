import { siteConfig } from "@/content/site";

export const About = () => {
  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            About us
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.about.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.about.description}
          </p>
        </div>

        {/* Points grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.about.points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#3d2d22]/15 bg-white/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9c6849]/10 text-[#9c6849]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5249]">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-20 rounded-2xl bg-[#231c17] p-10 text-white sm:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-semibold">Our mission</h3>
              <p className="mt-4 text-sm leading-6 text-[#d7c4ae]">
                We exist to bridge the gap between Africa's digital potential and the tools needed to realize it. Every line of code we write, every team we build, and every partnership we forge serves this purpose.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Our vision</h3>
              <p className="mt-4 text-sm leading-6 text-[#d7c4ae]">
                By 2030, we aim to create one million digital opportunities across Africa — empowering the next generation of builders, innovators, and leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
