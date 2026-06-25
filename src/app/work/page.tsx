import Link from "next/link";
import { getPosts } from "@/utils/utils";
import styles from "./work.module.css";

export default function Work() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Data engineering and ML work — pipelines, models, and dashboards.
        </p>
      </div>

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
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
