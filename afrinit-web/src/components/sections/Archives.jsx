import { useState, useMemo } from "react";
import { siteConfig } from "@/content/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const toSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const TYPE_CONFIG = {
  All: { label: "All", filter: null, emptyMessage: "We are adding archive entries. Check back soon." },
  Events: { label: "Events", filter: "event", emptyMessage: "We are adding the events we have attended. Check back soon." },
  Products: { label: "Products", filter: "product", emptyMessage: "We are adding the products we have built. Check back soon." },
  Milestones: { label: "Milestones", filter: "milestone", emptyMessage: "We are adding our milestones. Check back soon." },
};

export const Archives = ({ onNavigate }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const items = siteConfig.archives?.items || [];
  const statHeadline = siteConfig.archives?.stat || "20+ products shipped by our team";

  // Tab counts
  const counts = useMemo(() => {
    return {
      All: items.length,
      Events: items.filter((i) => i.type === "event").length,
      Products: items.filter((i) => i.type === "product").length,
      Milestones: items.filter((i) => i.type === "milestone").length,
    };
  }, [items]);

  // Filtered entries
  const filteredItems = useMemo(() => {
    const config = TYPE_CONFIG[selectedTab];
    if (!config || !config.filter) return items;
    return items.filter((i) => i.type === config.filter);
  }, [items, selectedTab]);

  // Group by year, newest first. Entries with no date must NOT show an "Undated" heading.
  const groupedEntries = useMemo(() => {
    const datedGroups = {};
    const undatedList = [];

    filteredItems.forEach((item) => {
      if (item.date && item.date.trim()) {
        const year = item.date.trim().slice(0, 4);
        if (!datedGroups[year]) datedGroups[year] = [];
        datedGroups[year].push(item);
      } else {
        undatedList.push(item);
      }
    });

    // Sort years descending
    const sortedYears = Object.keys(datedGroups).sort((a, b) => b.localeCompare(a));

    return {
      undated: undatedList,
      years: sortedYears.map((year) => ({
        year,
        items: datedGroups[year],
      })),
    };
  }, [filteredItems]);

  const renderCard = (entry, idx) => {
    const slug = toSlug(entry.title);
    return (
      <div
        key={entry.title + idx}
        className="card-nerd group rounded-3xl border border-[#3d2d22]/15 bg-white/90 overflow-hidden shadow-sm flex flex-col justify-between"
      >
        <div>
          {/* Cover Image: 16:9 ratio */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#d7c4ae]/20">
            {entry.image ? (
              <img
                src={entry.image}
                alt={entry.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <ImagePlaceholder
                label={entry.title}
                hint={`16:9, add at public/archives/${slug}.jpg`}
                aspect="aspect-[16/9]"
                className="h-full w-full rounded-none border-0 border-b border-[#3d2d22]/10"
              />
            )}
            <div className="absolute top-3 right-3 rounded-full bg-[#231c17]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#dcbf77] backdrop-blur-sm">
              {entry.type}
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#79513a]">
              {entry.date ? <span>{entry.date}</span> : <span />}
              {entry.location && <span>{entry.location}</span>}
            </div>

            <h3 className="font-display mt-2 text-2xl font-bold text-[#231c17] group-hover:text-[#9c6849] transition-colors">
              {entry.title}
            </h3>

            {entry.description && (
              <p className="mt-3 text-sm leading-relaxed text-[#5f5249]">
                {entry.description}
              </p>
            )}
          </div>
        </div>

        {/* Tags & Links */}
        <div className="px-7 pb-7 pt-2">
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-[#3d2d22]/10 pt-4">
              {entry.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full bg-[#d7c4ae]/30 px-3 py-0.5 text-[11px] font-medium text-[#5f5249]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {entry.link && (
            <div className="mt-4 pt-2">
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9c6849] hover:underline"
              >
                {entry.linkLabel || "Learn more"} →
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="page-view w-full overflow-hidden">
      {/* 1. Header & Highlight Stat */}
      <section className="relative min-h-[40vh] w-full px-5 pt-16 pb-12 sm:px-8 lg:px-14 lg:pt-24 lg:pb-16">
        <div className="w-full">
          <div className="viewport-animation mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#79513a]">
            <span className="h-px w-9 bg-[#9c6849]" />
            Running Record • Archives
          </div>
          <h1 className="viewport-animation delay-100 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-[#231c17] max-w-4xl">
            {siteConfig.archives.title}
          </h1>
          <p className="viewport-animation delay-200 mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#5f5249]">
            {siteConfig.archives.description}
          </p>

          {/* True Stat Callout Banner */}
          <div className="viewport-animation delay-300 mt-10 inline-flex items-center gap-4 rounded-2xl border border-[#3d2d22]/15 bg-white/80 p-5 sm:p-6 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dcbf77]/30 text-[#9c6849] font-display text-xl font-black">
              ★
            </span>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#231c17]">
                {statHeadline}
              </p>
              <p className="text-xs text-[#5f5249] mt-0.5">
                Milestone record of production software built by our co-founders and team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Tabs (All, Events, Products, Milestones with counts) */}
      <section className="relative w-full px-5 pb-8 sm:px-8 lg:px-14">
        <div className="w-full">
          <div className="viewport-animation flex flex-wrap items-center gap-3 border-b border-[#3d2d22]/15 pb-6">
            {Object.keys(TYPE_CONFIG).map((tabKey) => {
              const tab = TYPE_CONFIG[tabKey];
              const count = counts[tabKey] || 0;
              const isActive = selectedTab === tabKey;

              return (
                <button
                  key={tabKey}
                  onClick={() => setSelectedTab(tabKey)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#231c17] text-white shadow-md scale-105"
                      : "border border-[#3d2d22]/15 bg-white/70 text-[#5f5249] hover:bg-[#d7c4ae]/30 hover:text-[#231c17]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive ? "bg-white/20 text-[#dcbf77]" : "bg-[#d7c4ae]/40 text-[#5f5249]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Archives Entries Grouped by Year (Newest First) */}
      <section className="relative w-full px-5 py-8 sm:px-8 lg:px-14 min-h-[40vh]">
        <div className="w-full">
          {/* Empty state if no items for this tab */}
          {filteredItems.length === 0 ? (
            <div className="viewport-animation rounded-3xl border border-dashed border-[#3d2d22]/20 bg-white/50 p-16 text-center">
              <p className="font-display text-lg font-bold text-[#231c17]">
                {TYPE_CONFIG[selectedTab]?.emptyMessage || "No archive entries found."}
              </p>
              <button
                onClick={() => setSelectedTab("All")}
                className="mt-4 text-xs font-bold text-[#9c6849] hover:underline cursor-pointer"
              >
                View all archives →
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Undated entries (MUST NOT show an "Undated" heading) */}
              {groupedEntries.undated.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedEntries.undated.map((entry, idx) => renderCard(entry, idx))}
                </div>
              )}

              {/* Dated entries grouped by year */}
              {groupedEntries.years.map(({ year, items: yearItems }) => (
                <div key={year} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#9c6849]">
                      {year}
                    </span>
                    <span className="h-px flex-1 bg-[#3d2d22]/15" />
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {yearItems.map((entry, idx) => renderCard(entry, idx))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Pre-Footer Banner */}
      <section className="relative w-full px-5 py-24 sm:px-8 lg:px-14 bg-[#231c17] text-white overflow-hidden mt-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcbf77]/10 blur-3xl" />
        <div className="viewport-animation mx-auto max-w-4xl text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#dcbf77]">
            Work with us
          </p>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Have a project to add to our journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#d7c4ae]">
            We build and ship software alongside our partners. Reach out to discuss what we can build together.
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

export default Archives;
