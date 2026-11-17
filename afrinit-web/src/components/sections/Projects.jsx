import { useState, useMemo, useEffect } from "react";
import { siteConfig } from "@/content/site";

export const Projects = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const perPage = siteConfig.projects.perPage;

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ["All"];
    siteConfig.projects.items.forEach((item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return siteConfig.projects.items;
    }
    return siteConfig.projects.items.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredItems.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + perPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="viewport-animation mb-12">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Portfolio & Case Studies
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.projects.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.projects.description}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="viewport-animation delay-100 mb-12 flex flex-wrap items-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#231c17] text-white shadow-md scale-105"
                  : "border border-[#3d2d22]/15 bg-white/70 text-[#5f5249] hover:bg-[#d7c4ae]/30 hover:text-[#231c17]"
              }`}
            >
              {category}
              {category === "All"
                ? ` (${siteConfig.projects.items.length})`
                : ` (${
                    siteConfig.projects.items.filter(
                      (item) => item.category === category
                    ).length
                  })`}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((project, index) => (
            <div
              key={startIndex + index}
              onClick={() => setActiveModalProject(project)}
              className={`viewport-animation delay-${((index % 3) + 1) * 100} card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/80 overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer`}
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-[#d7c4ae]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.metric && (
                    <div className="absolute bottom-3 left-3 rounded-md bg-[#231c17]/90 px-3 py-1 text-xs font-semibold text-[#dcbf77] backdrop-blur-sm shadow-md">
                      {project.metric}
                    </div>
                  )}
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#231c17] backdrop-blur-sm shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {project.status}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9c6849]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5249] line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <div className="flex flex-wrap gap-2 border-t border-[#3d2d22]/10 pt-4">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="rounded-full bg-[#d7c4ae]/30 px-2.5 py-0.5 text-[11px] font-medium text-[#5f5249]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#9c6849] group-hover:text-[#231c17] transition-colors">
                  <span>View case study</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no projects in category */}
        {filteredItems.length === 0 && (
          <div className="viewport-animation py-20 text-center">
            <p className="text-lg text-[#5f5249]">No projects found in this category.</p>
            <button
              onClick={() => handleCategoryChange("All")}
              className="mt-4 text-sm font-semibold text-[#9c6849] hover:underline cursor-pointer"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="viewport-animation mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/70 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition cursor-pointer ${
                  currentPage === page
                    ? "bg-[#9c6849] text-white shadow-md scale-105"
                    : "border border-[#3d2d22]/15 bg-white/70 text-[#231c17] hover:bg-[#d7c4ae]/30"
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/70 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next page"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA section */}
        <div className="viewport-animation mt-24 rounded-3xl bg-[#231c17] p-10 text-center text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#dcbf77]/10 blur-3xl" />
          <h3 className="font-display text-2xl font-bold sm:text-4xl text-white relative z-10">
            Have a project in mind for your market?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#d7c4ae] relative z-10">
            We partner with enterprises, growing startups, and developmental organizations to ship software that solves complex regional challenges.
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer relative z-10"
          >
            Discuss your project with us
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231c17]/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-[#3d2d22]/20 bg-[#f5efe4] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] text-[#231c17]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-[#3d2d22]/15 text-[#231c17] hover:bg-[#231c17] hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="inline-block rounded-full bg-[#9c6849]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9c6849]">
              {activeModalProject.category}
            </span>

            <h3 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#231c17]">
              {activeModalProject.title}
            </h3>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#d7c4ae]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="h-full w-full object-cover"
              />
              {activeModalProject.metric && (
                <div className="absolute bottom-4 left-4 rounded-lg bg-[#231c17]/90 px-4 py-2 text-sm font-bold text-[#dcbf77] backdrop-blur-sm shadow-md">
                  {activeModalProject.metric}
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="font-display text-lg font-bold text-[#231c17]">
                Case Overview & Architectural Execution
              </h4>
              <p className="text-sm leading-relaxed text-[#5f5249]">
                {activeModalProject.description}
              </p>
              <p className="text-sm leading-relaxed text-[#5f5249]">
                Engineered with high fault-tolerance, responsive real-time sync, and compliance with data protection laws. Tailored specifically for variable connectivity environments.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3d2d22]/15">
              <p className="text-xs font-bold uppercase tracking-wider text-[#79513a] mb-3">
                Technologies & Architecture
              </p>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#231c17] px-3.5 py-1 text-xs font-semibold text-[#d7c4ae]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#3d2d22]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {activeModalProject.status || "Live in Production"}
              </div>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onNavigate && onNavigate("contact");
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#9c6849] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#825238] cursor-pointer"
              >
                Discuss a similar project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
