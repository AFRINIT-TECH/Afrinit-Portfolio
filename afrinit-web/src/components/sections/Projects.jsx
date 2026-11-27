import { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Projects = ({ onNavigate }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const allProjects = siteConfig.projects.items || [];
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);
  const hasMore = allProjects.length > 3;

  // Lock background scroll when modal is active, unlock when closed
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

  return (
    <section className="page-view relative min-h-[calc(100vh-78px)] w-full bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Intro Section matching the About section format */}
        <div className="viewport-animation mb-12 sm:mb-16">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            <span className="h-px w-9 bg-[#6d001a]" />
            Portfolio &amp; Solutions
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-black max-w-5xl">
            What we build: Tailored software solutions for modern organizations.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-[#454545]">
            Azzmar provides robust digital solutions across diverse industries—including high-converting consultancy platforms, custom e-commerce architectures, cloud POS engines, enterprise ERPs, and automated AI workflows. Explore our selected deployments below.
          </p>
        </div>

        {/* Minimalist Heading like the reference screenshot */}
        <div className="viewport-animation mb-12 sm:mb-16">
          <h2 className="font-display inline-block pb-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl text-black border-b-2 border-black">
            {siteConfig.projects.title || "Projects"}
          </h2>
        </div>

        {/* 3 cards max on a row */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const slug = toSlug(project.title);
            return (
              <div
                key={project.title + index}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View details for ${project.title}`}
                onClick={() => setActiveModalProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a] focus-visible:ring-offset-4 rounded-2xl"
              >
                {/* Image container: square/clean container with subtle border & background */}
                <div
                  className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md flex items-center justify-center p-6"
                  style={project.imageBg ? { background: project.imageBg } : undefined}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={project.title}
                      hint="Placeholder Image"
                      aspect="aspect-square"
                      className="h-full w-full rounded-2xl border-0 bg-black/[0.05]"
                    />
                  )}
                </div>

                {/* Minimal title and brief one-line description below image */}
                <div className="pt-4">
                  <h3 className="font-display text-lg font-bold text-black transition-colors group-hover:text-[#6d001a]">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="mt-1 line-clamp-1 text-sm text-[#454545]">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* See more / See less toggle with arrow */}
        {hasMore && (
          <div className="viewport-animation mt-14 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2.5 rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a] focus-visible:ring-offset-2"
            >
              <span>{showAll ? "See fewer projects" : "See more projects"}</span>
              <span
                className={`text-base transition-transform duration-200 ${
                  showAll ? "-rotate-90" : "rotate-90 group-hover:translate-x-0.5"
                }`}
              >
                →
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modal: perfectly scrollable without visible scrollbar, backdrop doesn't scroll */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="no-scrollbar relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-black/12 bg-white p-6 sm:p-8 shadow-2xl text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a]"
              aria-label="Close modal"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Photo above */}
            <div
              className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-white flex items-center justify-center p-6"
              style={activeModalProject.imageBg ? { background: activeModalProject.imageBg } : undefined}
            >
              {activeModalProject.image ? (
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="h-full w-full object-contain"
                />
              ) : (
                <ImagePlaceholder
                  label={activeModalProject.title}
                  hint="Placeholder Image"
                  aspect="aspect-video"
                  className="h-full w-full rounded-2xl border-0 bg-black/[0.05]"
                />
              )}
            </div>

            {/* Title and details below photo */}
            <div className="mt-6">
              {activeModalProject.category && (
                <span className="inline-block rounded-full bg-[#6d001a]/10 px-3 py-1 text-xs font-semibold text-[#6d001a]">
                  {activeModalProject.category}
                </span>
              )}
              <h3 id="modal-project-title" className="font-display mt-2 text-2xl font-extrabold sm:text-3xl text-black">
                {activeModalProject.title}
              </h3>

              <div className="mt-4 border-t border-black/10 pt-4">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#6d001a]">
                  About the project
                </h4>
                <p className="mt-2 text-base leading-relaxed text-[#454545]">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Direct project link or CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-black/10 pt-5">
                {activeModalProject.link && (
                  <a
                    href={activeModalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:bg-black hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a]"
                  >
                    Visit Website ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalProject(null);
                    if (onNavigate) onNavigate("contact");
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#6d001a] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#4d0012] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a] focus-visible:ring-offset-2"
                >
                  Discuss a project →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
