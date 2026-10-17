import styles from "./About.module.css";
import { skillCategories, type SkillItem } from "../../data/skills";

// High-fidelity custom SVG icons for items not in standard devicons
function renderCustomIcon(type: string) {
  switch (type) {
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" fill="rgba(255,255,255,0.15)" stroke="#ffffff" />
          <line x1="13" y1="13" x2="19" y2="19" stroke="#18d26e" strokeWidth="2" />
        </svg>
      );
    case "langchain":
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="16" r="6" stroke="#18d26e" />
          <circle cx="22" cy="16" r="6" stroke="#ffffff" />
          <path d="M14 16h4" stroke="#18d26e" strokeWidth="2.5" />
          <path d="M16 10v12" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );
    case "ai-agent":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#18d26e" />
          <circle cx="12" cy="12" r="3.5" fill="rgba(24,210,110,0.25)" stroke="#ffffff" />
        </svg>
      );
    case "rest-api":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="6" rx="2" stroke="#18d26e" />
          <rect x="2" y="14" width="20" height="6" rx="2" stroke="#ffffff" />
          <path d="M6 7h.01M6 17h.01M10 7h8M10 17h8" stroke="#18d26e" />
        </svg>
      );
    default:
      return null;
  }
}

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionCategory}>About</div>
          <h2 className={styles.sectionTitle}>Learn More About Me</h2>
        </div>

        {/* Bio Grid */}
        <div className={styles.bioRow}>
          {/* Left Column: Portrait Photo with solid black background */}
          <div className={styles.photoCol}>
            <div className={styles.imageFrame}>
              <img
                src="/assets/images/about-portrait.png"
                alt="Ujjwal Raj - Quantitative Developer"
                className={styles.profilePhoto}
              />
            </div>
          </div>

          {/* Right Column: Bio & Core Info */}
          <div className={styles.contentCol}>
            <h3 className={styles.roleTitle}>Quantitative Developer</h3>
            <p className={styles.subtitle}>Some basic informations about me, are pointed below</p>

            {/* Symmetrical 5-and-5 Quick Facts Grid */}
            <div className={styles.infoGrid}>
              {/* Left 5 Items */}
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Birthday:</span>
                  <span className={styles.value}>3 Oct 2004</span>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Website:</span>
                  <a
                    href="https://beingujjwalraj.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    https://beingujjwalraj.netlify.app/
                  </a>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>College:</span>
                  <span className={styles.value}>IIITDM Kancheepuram</span>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Phone:</span>
                  <a href="tel:+919508686360" className={styles.link}>
                    +91 9508686360
                  </a>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>City:</span>
                  <span className={styles.value}>Pune, Maharashtra, India</span>
                </li>
              </ul>

              {/* Right 5 Items */}
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Age:</span>
                  <span className={styles.value}>22</span>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Degree:</span>
                  <span className={styles.value}>Bachelor of Technology</span>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Experience:</span>
                  <span className={styles.value}>2+ Years</span>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Email:</span>
                  <a href="mailto:ujjwalrajbgis@gmail.com" className={styles.link}>
                    ujjwalrajbgis@gmail.com
                  </a>
                </li>
                <li>
                  <span className={styles.chevron}>›</span>
                  <span className={styles.label}>Freelance:</span>
                  <span className={styles.availableText}>Available</span>
                </li>
              </ul>
            </div>

            {/* Narrative Bio */}
            <p className={styles.narrative}>
              Passionate <strong>Quantitative Developer and Software Engineer</strong> with expertise in Python,
              backend development, quantitative finance, and AI/ML. I specialize in building scalable applications,
              algorithmic trading systems, and data-driven solutions that solve complex real-world problems. Driven by
              curiosity and continuous learning, I enjoy exploring emerging technologies and transforming innovative
              ideas into reliable, high-performance software.{" "}
              <strong>Open to freelance opportunities and exciting collaborations</strong> that challenge me to build
              impactful solutions.
            </p>
          </div>
        </div>

        {/* Categorized Skills Section */}
        <div className={styles.skillsSection}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={styles.categoryBlock}>
              <h4 className={styles.categoryTitle}>{cat.title}</h4>

              {cat.type === "grid" ? (
                <div className={styles.cardsGrid}>
                  {cat.items.map((skill: SkillItem, sIdx: number) => (
                    <a
                      key={sIdx}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.skillCard}
                      title={`Open official documentation for ${skill.name}`}
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`${styles.skillIcon} ${skill.invertOnDark ? styles.invertDark : ""}`}
                          loading="lazy"
                        />
                      ) : skill.customSvg ? (
                        <div className={styles.customSvgIcon}>{renderCustomIcon(skill.customSvg)}</div>
                      ) : null}
                      <span className={styles.skillTooltip}>{skill.name}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className={styles.pillsGrid}>
                  {cat.items.map((skill: SkillItem, sIdx: number) => (
                    <div key={sIdx} className={styles.pillCard}>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
