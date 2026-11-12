import { useState, useEffect } from "react";
import { Header, Footer } from "@/components/layout";
import { Hero, About, Solutions, Impact, People, Contact, Projects, Faq } from "@/components/sections";

const PAGE_COMPONENTS = {
  home: Hero,
  about: About,
  solutions: Solutions,
  impact: Impact,
  people: People,
  contact: Contact,
  projects: Projects,
  faq: Faq,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle browser back/forward
  useEffect(() => {
    history.replaceState({ page: "home" }, "", "/");
  }, []);

  const navigateTo = (page) => {
    if (page === currentPage || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      history.pushState({ page }, "", "/" + (page === "home" ? "" : page));
      window.scrollTo(0, 0);
      setIsAnimating(false);
    }, 200);
  };

  const PageComponent = PAGE_COMPONENTS[currentPage] || Hero;

  return (
    <div className="min-h-screen bg-[#f5efe4] font-body text-[#231c17] antialiased flex flex-col selection:bg-[#9c6849] selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <div className="flex-1">
        <main className="overflow-hidden bg-[#f5efe4] text-[#231c17]">
          <div
            className={`page-view transition-opacity duration-200 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <PageComponent onNavigate={navigateTo} />
          </div>
        </main>
      </div>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
