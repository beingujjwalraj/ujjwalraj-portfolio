import { useState } from "react";
import styles from "./Services.module.css";
import {
  availabilityBanner,
  myOfferings,
  projectStages,
  trustPillars,
} from "../../data/services";
import type { OfferingItem, ProjectStage, TrustPillar } from "../../data/services";
import type { NavTab } from "../../components/Header/Header";

interface ServicesProps {
  onNavigate?: (tab: NavTab) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  // Accordion state management: default first item open in each section
  const [openOfferingId, setOpenOfferingId] = useState<string | null>("ecommerce-marketplaces");
  const [openStageId, setOpenStageId] = useState<string | null>("stage-1");
  const [openTrustId, setOpenTrustId] = useState<string | null>("direct-access");

  const handleNav = (tab: NavTab) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      const newPath = tab === "home" ? "/" : `/${tab}`;
      window.history.pushState(null, "", newPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const toggleOffering = (id: string) => {
    setOpenOfferingId((prev) => (prev === id ? null : id));
  };

  const toggleStage = (id: string) => {
    setOpenStageId((prev) => (prev === id ? null : id));
  };

  const toggleTrust = (id: string) => {
    setOpenTrustId((prev) => (prev === id ? null : id));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case "smartphone":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        );
      case "cloud":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        );
      case "bot":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        );
      case "credit-card":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case "trending-up":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        );
      case "users":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "cpu":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
        );
      case "activity":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        );
      case "sparkles":
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* Section Title Header */}
        <div className={styles.headerArea}>
          <div className={styles.sectionCategory}>Services & Collaboration</div>
          <h2 className={styles.sectionTitle}>What I Build</h2>
        </div>

        {/* High-Impact Capabilities & Engagement Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.bannerTopRow}>
            <div className={styles.scopeBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span>{availabilityBanner.badgeTitle}</span>
            </div>

            <div className={styles.engagementModesGroup}>
              <span className={styles.modesLabel}>Engagement Modes:</span>
              <div className={styles.modesList}>
                {availabilityBanner.engagementModes.map((mode, idx) => (
                  <span key={idx} className={styles.modeCard}>
                    <span className={styles.modeAccentDot}></span>
                    <span className={styles.modeName}>{mode.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h3 className={styles.bannerHeadline}>{availabilityBanner.headline}</h3>
          <p className={styles.bannerSubheadline}>{availabilityBanner.subheadline}</p>

          <div className={styles.focusTagsRow}>
            {availabilityBanner.focusTags.map((tag, idx) => (
              <span key={idx} className={styles.focusTag}>
                <span className={styles.tagCheck}>✓</span>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.bannerButtonRow}>
            <button
              type="button"
              className={styles.discussBtn}
              onClick={() => handleNav("contact")}
            >
              <span>Let's Discuss Your Project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className={styles.exploreProjectsBtn}
              onClick={() => handleNav("projects")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>Explore My Past Projects</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: MY OFFERINGS (Horizontal Clickable Accordion) */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeadingWrapper}>
            <div className={styles.subCategory}>Comprehensive Capabilities</div>
            <h3 className={styles.subTitle}>My Offerings & Project Types</h3>
            <p className={styles.subDescription}>
              Click on any project category below to see exactly what I build, how I deliver it, and the
              core technology stack used. Open to all sectors with deep specialization in quantitative finance,
              backend architectures, and applied AI.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            {myOfferings.map((offering: OfferingItem) => {
              const isOpen = openOfferingId === offering.id;
              return (
                <div
                  key={offering.id}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleOffering(offering.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconWrapper}>{renderIcon(offering.icon)}</div>
                      <div className={styles.headerTextGroup}>
                        <div className={styles.titleRow}>
                          <span className={styles.offeringTitle}>{offering.title}</span>
                          <span className={styles.categoryBadge}>{offering.category}</span>
                        </div>
                        <p className={styles.offeringSummary}>{offering.summary}</p>
                      </div>
                    </div>
                    <div className={styles.toggleIndicator}>
                      <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <div className={styles.bodyGrid}>
                        {/* What I Build */}
                        <div className={styles.deliverablesColumn}>
                          <h4 className={styles.bodySectionTitle}>What I Build For You</h4>
                          <ul className={styles.deliverablesList}>
                            {offering.whatIBuild.map((item, idx) => (
                              <li key={idx} className={styles.deliverableItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* How I Deliver It */}
                        <div className={styles.deliveryColumn}>
                          <h4 className={styles.bodySectionTitle}>How I Deliver It</h4>
                          <p className={styles.deliveryText}>{offering.howIDeliver}</p>

                          <div className={styles.stackArea}>
                            <div className={styles.stackLabel}>Typical Tools & Stack:</div>
                            <div className={styles.stackTags}>
                              {offering.toolsAndStack.map((tech, idx) => (
                                <span key={idx} className={styles.stackTag}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className={styles.offeringCtaRow}>
                            <button
                              type="button"
                              className={styles.inquireBtn}
                              onClick={() => handleNav("contact")}
                            >
                              <span>Discuss This Project With Me</span>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: STAGES OF MY PROJECT MAKING (Interactive Step-by-Step Dropdown) */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeadingWrapper}>
            <div className={styles.subCategory}>Execution Methodology</div>
            <h3 className={styles.subTitle}>Stages of My Project Making</h3>
            <p className={styles.subDescription}>
              How we take your idea from a first conversation to a live, hosted web product.
              A structured, transparent workflow where you remain in complete control at every step.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            {projectStages.map((stage: ProjectStage) => {
              const isOpen = openStageId === stage.id;
              return (
                <div
                  key={stage.id}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleStage(stage.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.stageNumberBadge}>{stage.stageNumber}</div>
                      <div className={styles.headerTextGroup}>
                        <div className={styles.titleRow}>
                          <span className={styles.offeringTitle}>{stage.title}</span>
                          <span className={styles.stageSubtitleBadge}>{stage.subtitle}</span>
                        </div>
                        <p className={styles.offeringSummary}>{stage.summary}</p>
                      </div>
                    </div>
                    <div className={styles.toggleIndicator}>
                      <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <div className={styles.stageBodyContent}>
                        <h4 className={styles.bodySectionTitle}>Detailed Steps & Deliverables in this Stage</h4>
                        <ul className={styles.deliverablesList}>
                          {stage.details.map((detail, idx) => (
                            <li key={idx} className={styles.deliverableItem}>
                              <span className={styles.stageBulletDot}>●</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: WHY COLLABORATE WITH ME & TRUST MY ENGINEERING (Interactive Dropdown) */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeadingWrapper}>
            <div className={styles.subCategory}>Engineering Standards & Ethics</div>
            <h3 className={styles.subTitle}>Why You Should Collaborate With Me & Trust My Engineering</h3>
            <p className={styles.subDescription}>
              Whether partnering for freelance client delivery or evaluating my background for senior roles,
              here is what you can always expect when working together.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            {trustPillars.map((pillar: TrustPillar) => {
              const isOpen = openTrustId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleTrust(pillar.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.pillarNumberBadge}>{pillar.number}</div>
                      <div className={styles.headerTextGroup}>
                        <div className={styles.titleRow}>
                          <span className={styles.offeringTitle}>{pillar.title}</span>
                          <span className={styles.pillarTagBadge}>{pillar.tag}</span>
                        </div>
                        <p className={styles.offeringSummary}>{pillar.summary}</p>
                      </div>
                    </div>
                    <div className={styles.toggleIndicator}>
                      <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      <p className={styles.pillarDescriptionText}>{pillar.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CALL-TO-ACTION BOX */}
        <div className={styles.bottomCtaBox}>
          <div className={styles.bottomCtaContent}>
            <h3 className={styles.bottomCtaTitle}>Have a Project Idea or Need an Experienced Engineer?</h3>
            <p className={styles.bottomCtaSubtitle}>
              Whether you need a full-scale web application, an e-commerce platform, a custom SaaS, a fintech tool,
              or simply want to turn a whiteboard concept into a working MVP, let's connect. I am always open to
              collaborate, learn, and build software that genuinely solves real-world problems.
            </p>
          </div>
          <div className={styles.bottomCtaActions}>
            <button
              type="button"
              className={styles.discussBtn}
              onClick={() => handleNav("contact")}
            >
              <span>Let's Talk About Your Project</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className={styles.exploreProjectsBtn}
              onClick={() => handleNav("projects")}
            >
              <span>View My Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
