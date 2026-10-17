import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";

type CategoryFilter = "all" | "quant" | "aiml" | "systems";

const filterTabs: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "quant", label: "QUANT & FINTECH" },
  { key: "aiml", label: "MACHINE LEARNING & AI" },
  { key: "systems", label: "DISTRIBUTED & CLOUD" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        {/* Section Title Header */}
        <div className={styles.headerArea}>
          <div className={styles.sectionCategory}>Projects</div>
          <h2 className={styles.sectionTitle}>My Works</h2>
        </div>

        {/* Center-Aligned Category Filter Tabs */}
        <div className={styles.filterWrapper}>
          <div className={styles.filterList}>
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.filterActive : ""}`}
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid of Project Cards */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project: Project) => (
            <article key={project.id} className={styles.projectCard}>
              {/* Image Preview Thumbnail */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}></div>
                <span className={styles.floatingCategory}>{project.categoryLabel}</span>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      aria-label={`View ${project.title} source code on GitHub`}
                      title="View GitHub Repository"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className={styles.projectSubtitle}>{project.subtitle}</div>
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Tech Stack Pills */}
                <div className={styles.techStackRow}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Footer if available */}
                {project.githubUrl && (
                  <div className={styles.cardFooter}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubActionBtn}
                    >
                      <span>View Code on GitHub</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
