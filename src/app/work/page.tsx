import Link from "next/link";
import { getPosts } from "@/utils/utils";
import { about } from "@/resources";
import styles from "./work.module.css";

export default function Work() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className={styles.page}>

      {/* Work Experience */}
      {about.work.display && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{about.work.title}</h2>
          <div className={styles.timeline}>
            {about.work.experiences.map((exp, i) => (
              <div key={`${exp.company}-${i}`} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineLine} />
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.expHeader}>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.role}>{exp.role}</p>
                    </div>
                    <span className={styles.timeframe}>{exp.timeframe}</span>
                  </div>
                  <ul className={styles.bullets}>
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className={styles.bullet}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {about.studies.display && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{about.studies.title}</h2>
          <div className={styles.eduList}>
            {about.studies.institutions.map((inst, i) => (
              <div key={i} className={styles.eduItem}>
                <h3 className={styles.institution}>{inst.name}</h3>
                <div className={styles.eduDesc}>{inst.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {about.technical.display && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{about.technical.title}</h2>
          <div className={styles.skillGroups}>
            {about.technical.skills.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>{group.title}</h3>
                <div className={styles.tagRow}>
                  {(group.tags ?? []).map((tag) => (
                    <span key={tag.name} className={styles.tag}>{tag.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={styles.card}
            >
              {project.metadata.images?.[0] && (
                <div className={styles.cardImage}>
                  <img
                    src={project.metadata.images[0]}
                    alt={project.metadata.title}
                    className={styles.img}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                {project.metadata.projectType && (
                  <span className={styles.projectType}>
                    {project.metadata.projectType}
                  </span>
                )}
                <h2 className={styles.cardTitle}>{project.metadata.title}</h2>
                <p className={styles.cardDesc}>{project.metadata.summary}</p>
                {project.metadata.tags && project.metadata.tags.length > 0 && (
                  <div className={styles.tagRow}>
                    {project.metadata.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
