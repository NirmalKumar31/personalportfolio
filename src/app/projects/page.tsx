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

      {/* Page header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Projects & Skills</h1>
        <p className={styles.pageSubtitle}>
          Things I have built, technologies I work with, and problems I found interesting enough to solve.
        </p>
      </div>

      {/* Skills */}
      {about.technical.display && (
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Technologies</p>
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

      {/* Projects — card grid */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Projects</p>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.projectCard}>
              <div className={styles.cardImage}>
                {project.metadata.images && project.metadata.images.length > 0 ? (
                  <img src={project.metadata.images[0]} alt={project.metadata.title} />
                ) : null}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h2 className={styles.cardTitle}>{project.metadata.title}</h2>
                  <Link href={`/work/${project.slug}`} className={styles.cardArrow}>↗</Link>
                </div>
                <p className={styles.cardDesc}>{project.metadata.summary}</p>
                {project.metadata.tags && project.metadata.tags.length > 0 && (
                  <div className={styles.cardTags}>
                    {project.metadata.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
