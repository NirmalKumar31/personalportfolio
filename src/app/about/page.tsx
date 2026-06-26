"use client";
import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import styles from "./about.module.css";
import { about } from "@/resources";

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

export default function About() {
  return (
    <div className={styles.page}>
      {/* Intro */}
      {about.intro.display && (
        <motion.section
          className={styles.section}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h2 className={styles.sectionTitle}>{about.intro.title}</h2>
          <div className={styles.introText}>{about.intro.description}</div>
        </motion.section>
      )}

      {/* Experience */}
      {about.work.display && (
        <motion.section
          className={styles.section}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <h2 className={styles.sectionTitle}>{about.work.title}</h2>
          <div className={styles.timeline}>
            {about.work.experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.45 }}
              >
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
                      <li key={j} className={styles.bullet}>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Education */}
      {about.studies.display && (
        <motion.section
          className={styles.section}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <h2 className={styles.sectionTitle}>{about.studies.title}</h2>
          <div className={styles.eduList}>
            {about.studies.institutions.map((inst, i) => (
              <div key={i} className={styles.eduItem}>
                <h3 className={styles.institution}>{inst.name}</h3>
                <div className={styles.eduDesc}>{inst.description}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Skills */}
      {about.technical.display && (
        <motion.section
          className={styles.section}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <h2 className={styles.sectionTitle}>{about.technical.title}</h2>
          <div className={styles.skillGroups}>
            {about.technical.skills.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>{group.title}</h3>
                <div className={styles.tags}>
                  {(group.tags ?? []).map((tag) => (
                    <span key={tag.name} className={styles.tag}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
