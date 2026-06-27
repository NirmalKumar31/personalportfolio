import Link from "next/link";
import { getPosts } from "@/utils/utils";
import { about } from "@/resources";
import styles from "./projects.module.css";

const SKILL_EMOJIS: Record<string, string> = {
  SQL: "🗄️", Python: "🐍", Pandas: "🐼", NumPy: "🔢", SciPy: "🧪",
  Tableau: "📊", "Power BI": "📈", Excel: "📗", DAX: "🔢", Matplotlib: "📉", Seaborn: "🌊",
  dbt: "🔧", Airflow: "💨", Snowflake: "❄️", Databricks: "⚡", PySpark: "🔥",
  Hadoop: "🐘", Kafka: "📨", "ETL/ELT": "🔄", "Data Modeling": "🗂️", Git: "🌿",
  AWS: "☁️", S3: "🪣", Redshift: "🔴", Glue: "🔗", Lambda: "🪄",
  Azure: "🔷", Docker: "🐳", "CI/CD": "⚙️", PostgreSQL: "🐘", MySQL: "🐬", DynamoDB: "🗄️",
  "Scikit-learn": "🤖", TensorFlow: "🧠", PyTorch: "🔥", XGBoost: "🌲",
  LangChain: "🔍", RAG: "🔍", "Time Series": "⏱️", Keras: "❤️",
  Spark: "🔥", Jupyter: "📔", R: "📊", MongoDB: "🍃", Kubernetes: "☸️",
};

const PROJECT_ICONS: Record<string, string> = {
  "mbta-ontime-performance-prediction": "🚇",
  "clinical-trial-data-management-system": "🏥",
  "apple-data-analysis-with-sql": "🍎",
  "los-angeles-crime-analysis-and-predictive-modeling": "🔍",
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
          Projects I&apos;ve actually built. Tools I actually use.
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
          {projects.map((project) => {
            const hasImage = project.metadata.images && project.metadata.images.length > 0;
            const icon = PROJECT_ICONS[project.slug];
            return (
              <Link key={project.slug} href={`/work/${project.slug}`} className={styles.projectCard} prefetch>
                <div className={styles.cardImage}>
                  {hasImage ? (
                    <img src={project.metadata.images[0]} alt={project.metadata.title} />
                  ) : icon ? (
                    <span className={styles.cardIcon}>{icon}</span>
                  ) : null}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h2 className={styles.cardTitle}>{project.metadata.title}</h2>
                    <span className={styles.cardArrow} aria-hidden="true">↗</span>
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
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
