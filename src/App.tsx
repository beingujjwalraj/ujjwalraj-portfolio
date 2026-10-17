import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import type { NavTab } from "./components/Header/Header";
import About from "./sections/About/About";
import Resume from "./sections/Resume/Resume";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

export default function App() {
  const getTabFromHash = (): NavTab => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (["about", "resume", "projects", "services", "contact"].includes(hash)) {
      return hash as NavTab;
    }
    return "home";
  };

  const [activeTab, setActiveTab] = useState<NavTab>(getTabFromHash);

  // Sync state when browser back/forward buttons or hash change
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Ensure scroll position is reset to top on tab switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = `#${tab}`;
    window.scrollTo(0, 0);
  };

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
