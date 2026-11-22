export const ImagePlaceholder = ({
  label = "Image placeholder",
  hint,
  aspect = "aspect-video",
  className = "",
}) => {
  // If the caller supplies h-full or an aspect class inside className, do not double-apply the default aspect
  const hasHeightOrAspect = className.includes("h-full") || className.includes("aspect-");
  const aspectClass = hasHeightOrAspect ? "" : aspect;

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-4 text-center rounded-2xl border-2 border-dashed border-[#9c6849]/40 bg-[#d7c4ae]/20 text-[#5f5249] transition-colors select-none ${aspectClass} w-full overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="h-7 w-7 text-[#9c6849]/70 mb-2 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <p className="font-display text-xs font-bold text-[#231c17] max-w-full px-2 line-clamp-2">
        {label}
      </p>
      {hint && (
        <p className="mt-1 text-[11px] leading-tight text-[#79513a] max-w-full px-2 font-mono">
          {hint}
        </p>
      )}
    </div>
  );
};

export default ImagePlaceholder;
