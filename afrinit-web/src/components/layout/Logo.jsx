import logoImg from "@/assets/logo.jpg";

export const Logo = ({ className = "", showWordmark = true, variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <div
      className={`group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d001a] rounded-xl select-none ${className}`}
      aria-label="Azzmar"
    >
      <div
        className={`relative flex ${
          showWordmark ? "h-11 w-32 sm:w-36" : "h-11 w-11"
        } shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white transition-all duration-300 group-hover:scale-105 ${
          isWhite
            ? "shadow-md shadow-black/40"
            : "shadow-sm group-hover:shadow-md"
        }`}
      >
        <img
          src={logoImg}
          alt="Azzmar"
          className={`h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${
            isWhite ? "" : "mix-blend-multiply"
          }`}
        />
      </div>
    </div>
  );
};

export default Logo;
