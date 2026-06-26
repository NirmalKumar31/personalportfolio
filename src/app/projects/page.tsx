import Link from "next/link";
import { getPosts } from "@/utils/utils";
import { about } from "@/resources";
import styles from "./projects.module.css";

const SKILL_EMOJIS: Record<string, string> = {
  Python: "🐍", R: "📊", Pandas: "🐼", NumPy: "🔢", SciPy: "🔬",
  Plotly: "📈", Tableau: "📊", SQL: "🗄️", Jupyter: "📔",
  AWS: "☁️", S3: "🪣", Redshift: "🔴", Snowflake: "❄️",
  Databricks: "⚡", dbt: "🔧", Airflow: "🌊", Spark: "🔥",
  Hadoop: "🐘", Kafka: "📨", Kubernetes: "☸️", Docker: "🐳", Git: "🌿",
  TensorFlow: "🧠", Keras: "❤️", PyTorch: "🔥", "Scikit-learn": "🤖",
  PostgreSQL: "🐘", MySQL: "🐬", MongoDB: "🍃",
};

export default function Projects() {
  const projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className={styles.page}>

      {/* Skills — categorized with emojis */}
      {about.technical.display && (
        <section className={styles.section}>
          {about.technical.skills.map((group, i) => (
            <div key={i} className={styles.skillGroup}>
              <p className={styles.skillGroupLabel}>{group.title}</p>
              <div className={styles.tagRow}>
                {(group.tags ?? []).map((tag) => (
                  <span key={tag.name} className={styles.skillTag}>
                    <span>{SKILL_EMOJIS[tag.name] ?? "🔹"}</span>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Projects — horizontal two-column list */}
      <section className={styles.section}>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.projectRow}>
              <div className={styles.projectLeft}>
                <h2 className={styles.projectTitle}>{project.metadata.title}</h2>
                {project.metadata.tags && project.metadata.tags.length > 0 && (
                  <div className={styles.tagRow}>
                    {project.metadata.tags.map((tag) => (
                      <span key={tag} className={styles.projectTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.projectRight}>
                <p className={styles.projectDesc}>{project.metadata.summary}</p>
                <div className={styles.projectLinks}>
                  <Link href={`/work/${project.slug}`} className={styles.linkDetail}>
                    View details →
                  </Link>
                  {project.metadata.link && (
                    <a
                      href={project.metadata.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkExternal}
                    >
                      View project ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
