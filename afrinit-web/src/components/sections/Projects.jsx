import { useState, useMemo } from "react";
import { siteConfig } from "@/content/site";

export const Projects = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = siteConfig.projects.perPage;

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
              className={`viewport-animation delay-${((index % 3) + 1) * 100} card-nerd group rounded-2xl border border-[#3d2d22]/15 bg-white/70 overflow-hidden shadow-sm flex flex-col justify-between`}
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
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9c6849]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5f5249]">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 border-t border-[#3d2d22]/10 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-md bg-[#d7c4ae]/25 px-2.5 py-1 text-[11px] font-medium text-[#5f5249]"
                    >
                      {tag}
                    </span>
                  ))}
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
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/70 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page numbers */}
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

            {/* Next button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/70 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next page"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
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
