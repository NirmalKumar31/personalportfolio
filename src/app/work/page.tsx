import { about } from "@/resources";
import styles from "./work.module.css";

export default function Work() {
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

    </div>
  );
}
