import { useState, useMemo, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Projects = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const perPage = siteConfig.projects.perPage || 6;
  const items = siteConfig.projects.items || [];

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
    items.forEach((item) => {
      if (item.category && !cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, [items]);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return items;
    }
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / perPage));
  const startIndex = (currentPage - 1) * perPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + perPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full px-5 py-20 sm:px-8 lg:px-14 lg:py-28 overflow-hidden">
      <div className="w-full">
        {/* Section header */}
        <div className="viewport-animation mb-12">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Portfolio & Selected Work
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[#231c17]">
            {siteConfig.projects.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5249]">
            {siteConfig.projects.description}
          </p>
        </div>

        {/* Fact Card: 20+ products shipped */}
        <div className="viewport-animation mb-12 rounded-3xl border border-[#3d2d22]/15 bg-white/90 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#dcbf77]/30 text-[#9c6849] font-display text-2xl font-black">
              20+
            </span>
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#231c17]">
                Products shipped by our team
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[#5f5249]">
                Collectively, our five co-founders have built and shipped more than 20 software products.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate && onNavigate("archives")}
            className="inline-flex items-center gap-2 rounded-full border border-[#3d2d22]/20 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#231c17] hover:bg-[#231c17] hover:text-white transition cursor-pointer self-start sm:self-auto"
          >
            View Archives →
          </button>
        </div>

        {/* If items exist, show category filter pills */}
        {items.length > 0 && categories.length > 1 && (
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
                  ? ` (${items.length})`
                  : ` (${items.filter((item) => item.category === category).length})`}
              </button>
            ))}
          </div>
        )}

        {/* Friendly Empty State if items array is empty */}
        {items.length === 0 ? (
          <div className="viewport-animation rounded-3xl border border-dashed border-[#3d2d22]/20 bg-white/60 p-12 sm:p-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9c6849]/10 text-[#9c6849] mb-4">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-[#231c17]">
              We are adding the products we have built. Check back soon.
            </h3>
            <p className="mt-2 text-sm text-[#5f5249] max-w-md mx-auto">
              Our case study write-ups are being finalized. In the meantime, learn more about our team or discuss your upcoming project.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate && onNavigate("team")}
                className="rounded-full bg-[#9c6849] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#825238] transition cursor-pointer"
              >
                Meet our team
              </button>
              <button
                onClick={() => onNavigate && onNavigate("contact")}
                className="rounded-full border border-[#3d2d22]/20 bg-white px-6 py-2.5 text-xs font-bold text-[#231c17] hover:bg-[#231c17] hover:text-white transition cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        ) : (
          /* Project cards grid if items exist */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedItems.map((project, index) => {
              const slug = toSlug(project.title);
              return (
                <div
                  key={startIndex + index}
                  onClick={() => setActiveModalProject(project)}
                  className={`viewport-animation delay-${((index % 3) + 1) * 100} card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/80 overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer`}
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-[#d7c4ae]/20">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <ImagePlaceholder
                          label={project.title}
                          hint={`16:9, add at public/projects/${slug}.jpg`}
                          aspect="aspect-video"
                          className="h-full w-full rounded-none border-0"
                        />
                      )}
                      {project.status && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#231c17] backdrop-blur-sm shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {project.status}
                        </div>
                      )}
                    </div>
                    <div className="p-7">
                      {project.category && (
                        <div className="mb-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#9c6849]">
                            {project.category}
                          </span>
                        </div>
                      )}
                      <h3 className="font-display text-xl font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="mt-3 text-sm leading-relaxed text-[#5f5249] line-clamp-3">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-2">
                    {project.tags && project.tags.length > 0 && (
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
                    )}
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#9c6849] group-hover:text-[#231c17] transition-colors">
                      <span>View details</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination if multiple pages */}
        {items.length > 0 && totalPages > 1 && (
          <div className="viewport-animation mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d2d22]/15 bg-white/70 text-[#231c17] transition hover:bg-[#d7c4ae]/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              ←
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
              →
            </button>
          </div>
        )}

        {/* CTA section */}
        <div className="viewport-animation mt-24 rounded-3xl bg-[#231c17] p-10 text-center text-white sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#dcbf77]/10 blur-3xl" />
          <h3 className="font-display text-2xl font-bold sm:text-4xl text-white relative z-10">
            Have a project in mind?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#d7c4ae] relative z-10">
            Work directly with our co-founders to build and ship software tailored to your operational needs.
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#dcbf77] px-8 py-4 text-sm font-bold text-[#231c17] shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer relative z-10"
          >
            Discuss your project with us
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Interactive Project Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231c17]/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-[#3d2d22]/20 bg-[#f5efe4] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] text-[#231c17]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-[#3d2d22]/15 text-[#231c17] hover:bg-[#231c17] hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {activeModalProject.category && (
              <span className="inline-block rounded-full bg-[#9c6849]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#9c6849]">
                {activeModalProject.category}
              </span>
            )}

            <h3 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-[#231c17]">
              {activeModalProject.title}
            </h3>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#d7c4ae]/20">
              {activeModalProject.image ? (
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImagePlaceholder
                  label={activeModalProject.title}
                  hint={`16:9, add at public/projects/${toSlug(activeModalProject.title)}.jpg`}
                  aspect="aspect-[16/9]"
                  className="h-full w-full rounded-none border-0"
                />
              )}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="font-display text-lg font-bold text-[#231c17]">
                Project Overview
              </h4>
              <p className="text-sm leading-relaxed text-[#5f5249]">
                {activeModalProject.description}
              </p>
            </div>

            {activeModalProject.tags && activeModalProject.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#3d2d22]/15">
                <p className="text-xs font-bold uppercase tracking-wider text-[#79513a] mb-3">
                  Technologies
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
            )}

            <div className="mt-10 pt-6 border-t border-[#3d2d22]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-semibold text-emerald-600">
                {activeModalProject.status || "Completed"}
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

export default Projects;
