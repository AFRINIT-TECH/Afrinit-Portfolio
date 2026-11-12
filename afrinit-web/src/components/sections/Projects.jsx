import { useState } from "react";
import { siteConfig } from "@/content/site";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = siteConfig.projects.perPage;
  const totalPages = Math.ceil(siteConfig.projects.items.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedItems = siteConfig.projects.items.slice(startIndex, startIndex + perPage);

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Portfolio
          </div>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.projects.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-[#5f5249]">
            {siteConfig.projects.description}
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((project, index) => (
            <div
              key={startIndex + index}
              className="project-card group rounded-2xl border border-[#3d2d22]/15 bg-white/60 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-[#d7c4ae]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#9c6849]">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5249]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-[#d7c4ae]/30 px-3 py-1 text-xs font-medium text-[#5f5249]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/60 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed"
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
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                  currentPage === page
                    ? "bg-[#9c6849] text-white"
                    : "border border-[#3d2d22]/15 bg-white/60 text-[#231c17] hover:bg-[#d7c4ae]/30"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/60 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
};
