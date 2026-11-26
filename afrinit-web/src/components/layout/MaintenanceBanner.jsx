import { siteConfig } from "@/content/site";

export const MaintenanceBanner = () => {
  const { maintenanceBanner } = siteConfig;
  if (!maintenanceBanner?.enabled) return null;

  const message =
    maintenanceBanner.message ||
    "Platform is currently under maintenance — Please do not mind the placeholders while updates are underway";
  const badge = maintenanceBanner.badge || "Under Maintenance";

  const items = Array(8).fill(message);

  return (
    <aside
      role="region"
      aria-label="Maintenance Announcement"
      className="relative w-full overflow-hidden bg-black text-white py-2 sm:py-2.5 border-b border-[#6d001a]/50 select-none z-50"
    >
      <div className="flex w-full overflow-hidden">
        <div className="infinite-wrapper flex items-center gap-8 whitespace-nowrap text-xs font-medium tracking-wide">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center rounded-full bg-[#6d001a] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-white/15">
                {badge}
              </span>
              <span className="text-white/95 font-medium text-xs sm:text-[13px]">
                {text}
              </span>
              <span className="text-white/40 text-xs ml-3">—</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MaintenanceBanner;
