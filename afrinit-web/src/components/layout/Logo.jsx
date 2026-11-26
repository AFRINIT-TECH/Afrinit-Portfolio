import logoImg from "@/assets/logo.jpg";

export const Logo = ({ className = "", showWordmark = true, variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <div
      className={`group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d001a] rounded-xl select-none ${className}`}
      aria-label="Afrinit"
    >
      {/* Logo Mark Container with refined border & shadow */}
      <div
        className={`relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300 group-hover:scale-105 ${
          isWhite
            ? "border-white/20 bg-black shadow-md shadow-black/40 group-hover:border-[#6d001a]"
            : "border-black/15 bg-white shadow-sm group-hover:border-[#6d001a]/60 group-hover:shadow-md"
        }`}
      >
        <img
          src={logoImg}
          alt="Afrinit Logo Mark"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Brand Wordmark & Subtitle */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <span
            className={`font-display text-2xl font-extrabold tracking-tight leading-none transition-colors ${
              isWhite
                ? "text-white group-hover:text-white/85"
                : "text-black group-hover:text-[#6d001a]"
            }`}
          >
            afrinit<span className={isWhite ? "text-[#b3002b]" : "text-[#6d001a]"}>.</span>
          </span>
          <span
            className={`text-[9.5px] font-bold uppercase tracking-[0.22em] mt-1 transition-colors ${
              isWhite ? "text-white/60" : "text-[#6d001a]"
            }`}
          >
            Software Studio
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
