import logoImg from "@/assets/logo.jpg";

export const Logo = ({ className = "", showWordmark = true, variant = "default" }) => {
  const isWhite = variant === "white";

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label="Azzmar"
    >
      <div
        className={`relative flex ${
          showWordmark ? "h-11 w-32 sm:w-36" : "h-11 w-11"
        } shrink-0 items-center justify-center overflow-hidden ${
          isWhite
            ? "rounded-xl bg-white shadow-md shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <img
          src={logoImg}
          alt="Azzmar"
          className={`h-full w-full object-cover object-center ${
            isWhite ? "" : "mix-blend-multiply"
          }`}
        />
      </div>
    </div>
  );
};

export default Logo;
