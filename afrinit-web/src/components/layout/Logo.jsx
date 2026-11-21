import logoImg from "@/assets/logo.jpg";

export const Logo = ({ className = "", showWordmark = true, variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <div
      className={`group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c6849] rounded-xl select-none ${className}`}
      aria-label="Afrinit"
    >
      {/* Logo Mark Container with refined border & shadow */}
      <div
        className={`relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300 group-hover:scale-105 ${
          isWhite
            ? "border-white/20 bg-[#2b221c] shadow-md shadow-black/20 group-hover:border-[#dcbf77]/60"
            : "border-[#3d2d22]/20 bg-[#ebdcc9] shadow-sm group-hover:border-[#9c6849]/50 group-hover:shadow-md"
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
                ? "text-white group-hover:text-[#dcbf77]"
                : "text-[#231c17] group-hover:text-[#9c6849]"
            }`}
          >
            afrinit<span className={isWhite ? "text-[#dcbf77]" : "text-[#9c6849]"}>.</span>
          </span>
          <span
            className={`text-[9.5px] font-bold uppercase tracking-[0.22em] mt-1 transition-colors ${
              isWhite ? "text-[#d7c4ae]/70" : "text-[#79513a]"
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
