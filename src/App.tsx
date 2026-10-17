import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import type { NavTab } from "./components/Header/Header";
import About from "./sections/About/About";
import Resume from "./sections/Resume/Resume";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const validTabs: NavTab[] = ["about", "resume", "projects", "services", "contact"];

function getTabFromLocation(): NavTab {
  // Check clean pathname first (e.g., /about, /resume)
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (validTabs.includes(path as NavTab)) {
    return path as NavTab;
  }
  // Check hash for backward compatibility (e.g., #about)
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (validTabs.includes(hash as NavTab)) {
    return hash as NavTab;
  }
  return "home";
}

const pageOrder: NavTab[] = ["home", "about", "resume", "projects", "services", "contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>(getTabFromLocation);

  // Clean up legacy hash in URL if opened from an old bookmark or external link
  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (validTabs.includes(hash as NavTab)) {
      window.history.replaceState(null, "", `/${hash}`);
    } else if (hash === "home") {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  // Sync state when browser Back / Forward buttons are clicked
  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Ensure scroll position is reset to top on tab switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    const newPath = tab === "home" ? "/" : `/${tab}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }
    window.scrollTo(0, 0);
  };

  // Mobile Touch Swipe Navigation (Left Swipe -> Next Page, Right Swipe -> Previous Page)
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const deltaTime = Date.now() - touchStartTime;

      // Intentional horizontal swipe detection
      if (deltaTime < 550 && Math.abs(deltaX) >= 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        const target = e.target as HTMLElement | null;
        if (target?.closest("input, textarea, select, pre, code")) {
          return;
        }

        const currentIndex = pageOrder.indexOf(activeTab);
        if (currentIndex === -1) return;

        if (deltaX < 0) {
          // Swipe LEFT -> Next page
          if (currentIndex < pageOrder.length - 1) {
            handleSelectTab(pageOrder[currentIndex + 1]);
          }
        } else {
          // Swipe RIGHT -> Previous page
          if (currentIndex > 0) {
            handleSelectTab(pageOrder[currentIndex - 1]);
          }
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeTab]);

  return (
    <div className="appContainer">
      {/* Master Header (Adapts from Centered Hero to Sticky Top Navbar) */}
      <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Background Silhouette Watermark on Sub-pages */}
      {activeTab !== "home" && (
        <div className="bgWatermark" aria-hidden="true">
          <img
            src="/assets/images/hero-illustration.png"
            alt=""
            className="watermarkImg"
          />
        </div>
      )}

      {/* Single Section View (Shown only when navigating away from Home) */}
      {activeTab !== "home" && (
        <main className="mainContent">
          {activeTab === "about" && <About />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "services" && <Services onNavigate={handleSelectTab} />}
          {activeTab === "contact" && <Contact />}
        </main>
      )}
    </div>
  );
}
