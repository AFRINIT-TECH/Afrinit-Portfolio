import { useState, useEffect } from "react";
import { Header, Footer } from "@/components/layout";
import { AdminSessionConsent } from "@/components/layout/AdminSessionConsent";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { siteConfig } from "@/content/site";
import { AdminPage } from "@/components/pages/AdminPage";
import {
  Hero,
  About,
  Solutions,
  Impact,
  Team,
  Contact,
  Projects,
  Faq,
  Partners,
} from "@/components/sections";

const PAGE_COMPONENTS = {
  home: Hero,
  about: About,
  solutions: Solutions,
  impact: Impact,
  team: Team,
  contact: Contact,
  projects: Projects,
  faq: Faq,
  partners: Partners,
  admin: AdminPage,
  // Backwards compatibility alias
  people: Team,
};

const getInitialPage = () => {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (!path) return "home";
  if (path === "people") return "team";
  if (PAGE_COMPONENTS[path]) return path;
  return "home";
};

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [navParams, setNavParams] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle browser back/forward and initial URL sync
  useEffect(() => {
    const initial = getInitialPage();
    history.replaceState(
      { page: initial },
      "",
      "/" + (initial === "home" ? "" : initial)
    );

    const handlePopState = (event) => {
      const targetPage = event.state?.page || getInitialPage();
      setCurrentPage(targetPage === "people" ? "team" : targetPage);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Initialize viewport scroll animations
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-viewport");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );

      const elements = document.querySelectorAll(".viewport-animation");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timeout);
  }, [currentPage]);

  const navigateTo = (page, params = null) => {
    // Normalise any legacy "people" call to "team"
    const targetPage = page === "people" ? "team" : page;
    setNavParams(params);
    if (targetPage === currentPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(targetPage);
      history.pushState(
        { page: targetPage },
        "",
        "/" + (targetPage === "home" ? "" : targetPage)
      );
      window.scrollTo(0, 0);
      setIsAnimating(false);
    }, 200);
  };

  const PageComponent = PAGE_COMPONENTS[currentPage] || Hero;
  const isAdminPage = currentPage === "admin";
  const headerSpacerHeight = siteConfig.maintenanceBanner?.enabled
    ? "h-[116px] sm:h-[120px]"
    : "h-[79px]";

  return (
    <div className="min-h-screen bg-white font-body text-black antialiased flex flex-col selection:bg-[#6d001a] selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <div
        aria-hidden="true"
        className={`shrink-0 ${headerSpacerHeight}`}
        style={{ height: "var(--header-height)" }}
      />
      <div className="flex-1">
        <main className="overflow-hidden bg-white text-black">
          <div
            className={`page-view transition-opacity duration-200 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <PageComponent onNavigate={navigateTo} navParams={navParams} />
          </div>
        </main>
      </div>
      <Footer onNavigate={navigateTo} currentPage={currentPage} />
      {isAdminPage ? <AdminSessionConsent /> : <CookieConsent />}
    </div>
  );
}

export default App;
