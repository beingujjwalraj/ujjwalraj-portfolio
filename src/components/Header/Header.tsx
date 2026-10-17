import { useState } from "react";
import type { MouseEvent } from "react";
import styles from "./Header.module.css";
import { profile } from "../../data/profile";

export type NavTab = "home" | "about" | "resume" | "services" | "projects" | "contact";

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

const navItems: { id: NavTab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Header({ activeTab, onSelectTab }: HeaderProps) {
  const isTop = activeTab !== "home";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab, e: MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onSelectTab(tab);
  };

  return (
    <header className={`${styles.header} ${isTop ? styles.headerTop : styles.headerHero}`}>
      {/* Full-Height Left Illustration (Only on Home Hero) */}
      {!isTop && (
        <div className={styles.heroLeftImageContainer}>
          <img
            src="/assets/images/hero-illustration.png"
            alt="Ujjwal Raj"
            className={styles.heroLeftImage}
          />
        </div>
      )}

      <div className={`container ${styles.headerContainer}`}>
        {isTop ? (
          /* SUB-PAGE SLIM TOP NAVBAR: Big Brand Name on Left, Nav Links on Right */
          <>
            <h1 className={styles.topNameHeading}>
              <a href="#home" onClick={(e) => handleNavClick("home", e)}>
                {profile.name}
              </a>
            </h1>

            <nav className={`${styles.topNavbar} ${mobileMenuOpen ? styles.navbarMobile : ""}`}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${styles.navLink} ${activeTab === item.id ? styles.active : ""}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        ) : (
          /* HOME HERO MODE: Right-aligned Content Block with Socials */
          <div className={styles.introBlock}>
            <h1 className={styles.nameHeading}>
              <a href="#home" onClick={(e) => handleNavClick("home", e)}>
                {profile.name}
              </a>
            </h1>

            <h2 className={styles.roleHeading}>
              I'm a <span className={styles.accentSpan}>Quantitative Developer</span> from India
            </h2>

            <nav className={`${styles.navbar} ${mobileMenuOpen ? styles.navbarMobile : ""}`}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${styles.navLink} ${activeTab === item.id ? styles.active : ""}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.socialLinks}>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={profile.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={profile.social.email} aria-label="Email" title="Email">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.toggleActive : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
