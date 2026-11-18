import logoImg from "@/assets/logo.jpg";

export const Logo = ({ className }) => {
  return (
    <div
      className={`group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-lg ${
        className || ""
      }`}
      aria-label="Afrinit"
    >
      <img
        src={logoImg}
        alt="Afrinit"
        className="h-10 w-auto rounded-md transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default Logo;
