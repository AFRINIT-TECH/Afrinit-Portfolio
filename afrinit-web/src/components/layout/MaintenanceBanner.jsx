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
      className="relative w-full overflow-hidden bg-[#231c17] text-white py-2 sm:py-2.5 border-b border-[#dcbf77]/30 select-none z-50"
    >
      <div className="flex w-full overflow-hidden">
        <div className="infinite-wrapper flex items-center gap-8 whitespace-nowrap text-xs font-medium tracking-wide">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center rounded-full bg-[#dcbf77]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#dcbf77] border border-[#dcbf77]/30">
                {badge}
              </span>
              <span className="text-[#f5efe4] font-medium text-xs sm:text-[13px]">
                {text}
              </span>
              <span className="text-[#dcbf77]/50 text-xs ml-3">—</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MaintenanceBanner;
