import Link from "next/link";
import { getPosts } from "@/utils/utils";
import { about } from "@/resources";
import styles from "./projects.module.css";

export default function Projects() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className={styles.page}>

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

    </div>
  );
}
