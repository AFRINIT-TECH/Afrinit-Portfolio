import { useState, useEffect } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const FounderCarousel = ({ members = [], onNavigate, isPreview = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const total = members.length;
  if (!total) return null;

  const currentMember = members[activeIndex] || members[0];
  const slug = toSlug(currentMember.name);
  const hasLinks =
    currentMember.links &&
    (Boolean(currentMember.links.github) ||
      Boolean(currentMember.links.linkedin) ||
      Boolean(currentMember.links.email));

  // Change active founder with smooth cross-fade
  const changeSlide = (nextIndex) => {
    if (nextIndex === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 180);
  };

  const handlePrev = () => {
    const next = activeIndex === 0 ? total - 1 : activeIndex - 1;
    changeSlide(next);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % total;
    changeSlide(next);
  };

  // Auto-play timer (10 seconds per co-founder)
  useEffect(() => {
    if (isHovered || total <= 1) return;

    const interval = setInterval(() => {
      const next = (activeIndex + 1) % total;
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex(next);
        setIsFading(false);
      }, 180);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, total]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className="w-full focus:outline-none select-none max-w-5xl mx-auto"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Co-founders floating avatar bar showcase"
    >
      {/* 1. Top Controls Bar: Counter, Auto-slide Toggle, and Prev/Next */}
      <div className="mb-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d001a]">
            Our Builders
          </span>
          <span className="text-xs font-bold text-black/50">
            • 0{activeIndex + 1} of 0{total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous co-founder"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black hover:text-white cursor-pointer shadow-sm"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next co-founder"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black hover:text-white cursor-pointer shadow-sm"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Floating Avatar Bar: 5 circular interactive portraits */}
      <div className="mb-8 flex items-center justify-center gap-2 sm:gap-6 flex-wrap px-1 sm:px-2">
        {members.map((m, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => changeSlide(idx)}
              className={`group flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer transition-all duration-300 focus:outline-none ${
                isActive ? "scale-105" : "opacity-75 hover:opacity-100 hover:scale-102"
              }`}
            >
              {/* Circular Avatar */}
              <div
                className={`relative h-12 w-12 sm:h-20 sm:w-20 rounded-full overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "ring-3 sm:ring-4 ring-[#6d001a] ring-offset-2 ring-offset-white shadow-xl"
                    : "border-2 border-black/15 hover:border-[#6d001a]/60 shadow-sm"
                }`}
              >
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover object-[center_20%]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-black/[0.06] font-display text-sm sm:text-base font-bold text-[#6d001a]">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                )}
              </div>

              {/* Founder Name underneath avatar */}
              <div className="flex flex-col items-center">
                <span
                  className={`text-[11px] sm:text-sm font-semibold max-w-[64px] sm:max-w-[100px] truncate text-center transition-colors ${
                    isActive
                      ? "text-black font-bold"
                      : "text-[#525252] group-hover:text-black"
                  }`}
                >
                  {m.name.split(" ")[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Showcase Card Underneath: Full Profile Details */}
      <div
        className={`card-nerd relative w-full rounded-3xl border border-black/12 bg-white p-5 sm:p-10 shadow-xl transition-all duration-300 overflow-hidden ${
          isFading ? "opacity-30 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {/* 10-second timer countdown bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 overflow-hidden">
          <div
            key={activeIndex}
            className={`h-full bg-gradient-to-r from-black to-[#6d001a] timer-progress-10s ${
              isHovered ? "timer-paused" : ""
            }`}
          />
        </div>
        <div className="grid gap-8 md:grid-cols-12 items-start">
          {/* Left Column: Dedicated Uncropped Photo Frame (5 cols on md) */}
          <div className="md:col-span-5 w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/[0.04] border border-black/10 shadow-inner flex items-center justify-center">
              {currentMember.image ? (
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="h-full w-full object-cover object-[center_20%] select-none transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <ImagePlaceholder
                  label={`Photo of ${currentMember.name}`}
                  hint={`public/team/${slug}.jpg`}
                  className="h-full w-full rounded-none border-0"
                />
              )}

              {/* Corner badge */}
              <div className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-black backdrop-blur-sm shadow-sm z-10 border border-black/10">
                0{activeIndex + 1} / 0{total}
              </div>
            </div>
          </div>

          {/* Right Column: Founder Details in strict order (7 cols on md) */}
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              {!isPreview ? (
                <>
                  {/* 1. Name */}
                  {currentMember.name && (
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                      {currentMember.name}
                    </h3>
                  )}

                  {/* 2. Co-founder pill */}
                  {currentMember.role && (
                    <div className="mt-2.5">
                      <span className="inline-block rounded-full bg-[#6d001a]/10 px-3 py-0.5 text-xs font-bold text-[#6d001a]">
                        {currentMember.role}
                      </span>
                    </div>
                  )}

                  {/* 3. Title prominently under the name */}
                  {currentMember.title && (
                    <p className="mt-3 text-base sm:text-lg font-bold text-[#6d001a] leading-snug">
                      {currentMember.title}
                    </p>
                  )}

                  {/* 4. Company role line */}
                  {currentMember.companyRole && (
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-black/80 leading-snug">
                      {currentMember.companyRole}
                    </p>
                  )}

                  {/* 5. Skills as small chips */}
                  {currentMember.skills && currentMember.skills.length > 0 && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {currentMember.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-full bg-[#f5f5f5] px-3 py-0.5 text-xs font-semibold text-[#454545] border border-black/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 6. Bio */}
                  {currentMember.bio && (
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#454545]">
                      {currentMember.bio}
                    </p>
                  )}
                </>
              ) : (
                <>
                  {/* Preview Mode */}
                  {currentMember.role && (
                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-[#6d001a]/10 px-3 py-0.5 text-xs font-bold text-[#6d001a]">
                        {currentMember.role}
                      </span>
                    </div>
                  )}

                  {currentMember.name && (
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                      {currentMember.name}
                    </h3>
                  )}

                  {currentMember.title && (
                    <p className="mt-2 text-sm sm:text-base font-semibold text-[#6d001a]">
                      {currentMember.title}
                    </p>
                  )}

                  {currentMember.bio && (
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#454545]">
                      {currentMember.bio}
                    </p>
                  )}
                </>
              )}

              {/* Location badge */}
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#6d001a]">
                <span className="h-2 w-2 rounded-full bg-[#6d001a]" />
                <span>Nairobi &amp; Kisumu, Kenya • Remote worldwide</span>
              </div>
            </div>

            {/* Bottom Controls Row: Social Links + Connect CTA */}
            <div className="mt-8 pt-5 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                {hasLinks ? (
                  <>
                    {currentMember.links.github && (
                      <a
                        href={currentMember.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#f5f5f5] border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-black hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                    {currentMember.links.linkedin && (
                      <a
                        href={currentMember.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#f5f5f5] border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-black hover:text-white transition"
                      >
                        LinkedIn
                      </a>
                    )}
                    {currentMember.links.email && (
                      <a
                        href={`mailto:${currentMember.links.email}`}
                        className="rounded-full bg-[#f5f5f5] border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-black hover:text-white transition"
                      >
                        Email
                      </a>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("team")}
                    className="text-xs font-bold text-[#6d001a] hover:text-black transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    View {currentMember.name.split(" ")[0]}’s full profile
                    <span>→</span>
                  </button>
                )}
              </div>

              <span className="text-xs uppercase font-bold tracking-wider text-black/50">
                Afrinit Co-Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCarousel;
