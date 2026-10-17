import styles from "./Resume.module.css";
import { resumeData } from "../../data/experience";
import { profile } from "../../data/profile";

export default function Resume() {
  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.resumeContainer}>
        {/* Section Header with Download Button */}
        <div className={styles.headerRow}>
          <div>
            <div className={styles.sectionCategory}>Resume</div>
            <h2 className={styles.sectionTitle}>Check My Resume</h2>
          </div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Ujjwal_Raj_Resume.pdf"
            className={styles.downloadBtn}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* 2-Column Symmetrical Layout */}
        <div className={styles.resumeGrid}>
          {/* ==============================================================
              LEFT COLUMN: Summary, Education, Volunteering, Certifications
             ============================================================== */}
          <div className={styles.col}>
            {/* 1. Summary */}
            <h3 className={styles.groupHeading}>Summary</h3>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.cardContent}>
                <div className={styles.itemHeader}>
                  <h4 className={styles.itemTitle}>{resumeData.summary.name}</h4>
                  <span className={styles.periodBadge}>{resumeData.summary.title}</span>
                </div>
                <p className={styles.itemBio}>{resumeData.summary.bio}</p>
                <div className={styles.metaRow}>
                  <div className={styles.locationPill}>
                    <span className={styles.locPin}>📍</span>
                    <span>{resumeData.summary.location}</span>
                  </div>
                  <div className={styles.contactChips}>
                    <a href={`tel:${resumeData.summary.phone}`} className={styles.contactChip}>
                      📞 {resumeData.summary.phone}
                    </a>
                    <a href={`mailto:${resumeData.summary.email}`} className={styles.contactChip}>
                      ✉️ {resumeData.summary.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Education */}
            <h3 className={styles.groupHeading}>Education</h3>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.cardContent}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{edu.title}</h4>
                    <span className={styles.periodBadge}>{edu.period}</span>
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyBadge}>
                      <span className={styles.companyIcon}>🏛️</span>
                      <span className={styles.orgName}>{edu.organization}</span>
                    </span>
                    {edu.location && (
                      <span className={styles.locationPill}>
                        <span className={styles.locPin}>📍</span>
                        <span>{edu.location}</span>
                      </span>
                    )}
                  </div>
                  <p className={styles.itemBio}>{edu.description}</p>
                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className={styles.bulletList}>
                      {edu.bullets.map((b, bIdx) => (
                        <li key={bIdx}>
                          <span className={styles.bulletIcon}>›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* 3. Volunteering & Leadership */}
            <h3 className={styles.groupHeading}>Volunteering & Leadership</h3>
            {resumeData.volunteering.map((vol, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.cardContent}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{vol.title}</h4>
                    <span className={styles.periodBadge}>{vol.period}</span>
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyBadge}>
                      <span className={styles.companyIcon}>🤝</span>
                      <span className={styles.orgName}>{vol.organization}</span>
                    </span>
                    {vol.location && (
                      <span className={styles.locationPill}>
                        <span className={styles.locPin}>📍</span>
                        <span>{vol.location}</span>
                      </span>
                    )}
                    {vol.badge && <span className={styles.accentBadge}>{vol.badge}</span>}
                  </div>
                  <p className={styles.itemBio}>{vol.description}</p>
                </div>
              </div>
            ))}

            {/* 4. Licenses & Certifications */}
            <h3 className={styles.groupHeading}>Licenses & Certifications</h3>
            <div className={styles.certGrid}>
              {resumeData.certifications.map((cert, cIdx) => (
                <div key={cIdx} className={styles.certCard}>
                  <div className={styles.certIconBadge}>✔</div>
                  <div className={styles.certInfo}>
                    <div className={styles.certHeaderRow}>
                      <h4 className={styles.certName}>{cert.name}</h4>
                      {cert.period && <span className={styles.certPeriod}>{cert.period}</span>}
                    </div>
                    <div className={styles.certIssuerRow}>
                      <span className={styles.certIssuer}>{cert.issuer}</span>
                      {cert.credentialId && (
                        <span className={styles.credentialPill}>ID: {cert.credentialId}</span>
                      )}
                    </div>
                    {cert.skills && (
                      <div className={styles.skillsTagRow}>
                        <span className={styles.skillsTagLabel}>Skills:</span> {cert.skills}
                      </div>
                    )}
                    {cert.description && <p className={styles.certDesc}>{cert.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: Professional Experience (TOP), Achievements & Honors
             ============================================================== */}
          <div className={styles.col}>
            {/* 1. Professional Experience (TOP of Right Column) */}
            <h3 className={styles.groupHeading}>Professional Experience</h3>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.cardContent}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <span className={styles.periodBadge}>{exp.period}</span>
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyBadge}>
                      <span className={styles.companyIcon}>{exp.companyLogo || "🏢"}</span>
                      <span className={styles.orgName}>{exp.organization}</span>
                    </span>
                    {exp.location && (
                      <span className={styles.locationPill}>
                        <span className={styles.locPin}>📍</span>
                        <span>{exp.location}</span>
                      </span>
                    )}
                  </div>
                  <ul className={styles.bulletList}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span className={styles.bulletIcon}>›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* 2. Achievements & Honors */}
            <h3 className={styles.groupHeading}>Achievements & Honors</h3>
            {resumeData.achievements.map((ach, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.cardContent}>
                  <div className={styles.itemHeader}>
                    <h4 className={styles.itemTitle}>{ach.title}</h4>
                    <span className={styles.periodBadge}>{ach.period}</span>
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyBadge}>
                      <span className={styles.companyIcon}>🏆</span>
                      <span className={styles.orgName}>{ach.organization}</span>
                    </span>
                    {ach.badge && <span className={styles.accentBadge}>{ach.badge}</span>}
                  </div>
                  <p className={styles.itemBio}>{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
