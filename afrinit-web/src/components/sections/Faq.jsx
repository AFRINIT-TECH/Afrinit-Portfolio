import { useState, useMemo } from "react";
import { siteConfig } from "@/content/site";

export const Faq = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "About Afrinit", "Services & IP", "Collaboration"];

  // Filter questions based on search and category
  const filteredQuestions = useMemo(() => {
    return siteConfig.faq.questions.filter((item, idx) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (selectedCategory === "All") return true;
      if (selectedCategory === "About Afrinit") return idx < 3;
      if (selectedCategory === "Services & IP") return idx === 1 || idx === 3;
      return idx >= 4;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. FAQ Hero */}
      <section className="relative min-h-[45vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="viewport-animation mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Knowledge Base • Common Inquiries
            <span className="h-px w-9 bg-[#9c6849]" />
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17]">
            {siteConfig.faq.title}
          </h1>
          <p className="viewport-animation delay-200 mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.faq.description}
          </p>

          {/* Search Bar */}
          <div className="viewport-animation delay-300 mt-10 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., code ownership, services, team)..."
              className="w-full rounded-full border border-[#3d2d22]/20 bg-white/90 px-6 py-4 pl-12 text-sm text-[#231c17] placeholder:text-[#5f5249]/50 shadow-sm transition-all focus:border-[#9c6849] focus:outline-none focus:ring-2 focus:ring-[#9c6849]/20"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9c6849]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#5f5249] hover:text-[#231c17]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="viewport-animation delay-400 mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#231c17] text-white shadow-xs scale-105"
                    : "border border-[#3d2d22]/15 bg-white/70 text-[#5f5249] hover:bg-[#d7c4ae]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FAQ Accordion Grid */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-4xl space-y-4">
          {filteredQuestions.map((item, index) => (
            <div
              key={index}
              className={`viewport-animation delay-${((index % 4) + 1) * 75} card-nerd rounded-3xl border border-[#3d2d22]/15 bg-white/80 shadow-sm overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 sm:p-8 text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg sm:text-xl font-bold text-[#231c17] pr-6">
                  {item.question}
                </span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#9c6849]/15 text-[#9c6849]">
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`faq-answer grid transition-all duration-300 ${
                  openIndex === index ? "is-open grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 sm:px-8 pb-8 text-sm leading-relaxed text-[#5f5249] border-t border-[#3d2d22]/10 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="py-16 text-center text-[#5f5249]">
              <p className="text-base font-semibold">No questions found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-3 text-xs font-bold text-[#9c6849] hover:underline cursor-pointer"
              >
                Reset search filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Direct Contact Card */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14">
        <div className="viewport-animation mx-auto max-w-4xl rounded-3xl bg-[#231c17] p-10 text-white sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#dcbf77]/10 blur-2xl" />
          <div className="relative z-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Have a specific question about your project?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-[#d7c4ae]">
              Reach out to our co-founders directly to discuss requirements, feasibility, or timelines.
            </p>
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer CTA */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 bg-[#231c17] text-white overflow-hidden border-t border-white/10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcbf77]/10 blur-3xl" />
        <div className="viewport-animation w-full text-center relative z-10">
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

export default Faq;
