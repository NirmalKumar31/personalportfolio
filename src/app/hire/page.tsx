"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.48, ease } },
};

const TLDR = [
  <>
    <strong>I pick up new tools fast.</strong> Every role handed me something I hadn't used before and I just got in and figured it out. The ramp-up has been short across the board and I've never needed long to get useful.
  </>,
  <>
    <strong>The work actually ran in production.</strong> Real pipelines, reporting systems that replaced manual processes, cloud platforms that kept running without anyone watching. Not just coursework or demo datasets.
  </>,
  <>
    <strong>I care more about the output than the process.</strong> Getting something to run is table stakes. What I'm actually trying to do is build something that helps someone make a better call with the data.
  </>,
];

const SKILLS = [
  {
    title: "Data Engineering",
    desc: "I've worked across the full pipeline stack. Azure Synapse Spark ETL handling 900M+ row backfills, Azure Data Factory, Delta Lake in Databricks, and full AWS stacks (Kinesis, S3, Glue, Snowpipe into Snowflake). I use dbt for transformations and Airflow for orchestration. I treat pipelines like code: tested, maintainable, and built to fail gracefully.",
    tags: ["Snowflake", "dbt", "Airflow", "Azure Synapse", "PySpark", "Azure ADF", "AWS", "Databricks"],
  },
  {
    title: "Analytics & BI",
    desc: "SQL is my most-used tool and I've run it across datasets exceeding 150M records. At Fidelity I built a data quality framework that cut reporting errors by 60%, synthesized Marketing Mix Model outputs across $35.6B in client assets into targeting recommendations, and analyzed 270K+ social interactions to drive a 13-point engagement lift. I build dashboards in both Tableau and Power BI.",
    tags: ["SQL", "Tableau", "Power BI", "Python", "Pandas", "Snowflake"],
  },
  {
    title: "Machine Learning & AI",
    desc: "I've built CNN classifiers on 5,800 chest X-rays (92% accuracy with Grad-CAM explainability), a real-time computer vision pipeline for sign language recognition at 95% accuracy, and applied clustering on industrial sensor data to identify the failure patterns behind 72% of equipment breakdowns. I know the gap between a model that performs in a notebook and one that holds up when real data comes in.",
    tags: ["scikit-learn", "TensorFlow", "XGBoost", "CNN", "PySpark", "MLlib"],
  },
];

export default function Hire() {
  return (
    <motion.div
      className={styles.page}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
    >
      {/* Header */}
      <motion.div variants={fade}  className={styles.header}>
        <h1 className={styles.heading}>Hire me!</h1>
        <p className={styles.subtitle}>
          <em>Interested in hiring me? Read here to see what I can do!</em>
        </p>
        <div className={styles.pills}>
          <span className={styles.pill}>Actively looking for full time roles</span>
          <span className={styles.pill}>Available immediately</span>
        </div>
      </motion.div>

      <motion.hr variants={fade}  className={styles.divider} />

      {/* Intro */}
      <motion.p variants={fade}  className={styles.intro}>
        Thanks for stopping by! I am actively looking for a{" "}
        <strong>data analyst, data engineer, analytics engineer, or data science role</strong> and available
        to start <strong>immediately</strong>. I've spent around 1.5 years building real data systems across
        multiple companies, working on production pipelines, marketing analytics at scale, and machine
        learning models that went into production. I am ready to learn more and contribute to the team
        and help you achieve your goals.
      </motion.p>

      {/* TL;DR */}
      <motion.div variants={fade}  className={styles.section}>
        <h2 className={styles.sectionTitle}>TL;DR</h2>
        <ul className={styles.bullets}>
          {TLDR.map((item, i) => (
            <li key={i} className={styles.bullet}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* What can I do */}
      <motion.div variants={fade}  className={styles.section}>
        <h2 className={styles.sectionTitle}>What can I do?</h2>
        <p className={styles.sectionNote}>
          <em>These areas are not siloed — most of my best work sits at the intersection of several. I am up to the challenge of combining them.</em>
        </p>
        <div className={styles.skillCards}>
          {SKILLS.map((s) => (
            <div key={s.title} className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>{s.title}</h3>
              <p className={styles.skillCardDesc}>{s.desc}</p>
              <div className={styles.tagRow}>
                {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Location & Work Eligibility */}
      <motion.div variants={fade}  className={styles.section}>
        <h2 className={styles.sectionTitle}>Location &amp; Work Eligibility</h2>
        <div className={styles.eligibilityGrid}>
          <div className={styles.eligibilityCard}>
            <div className={styles.eligibilityCardHeader}>
              <span className={styles.eligibilityIcon}>🇺🇸</span>
              <strong>United States</strong>
            </div>
            <p className={styles.eligibilityDesc}>
              Authorized to work on <strong>OPT + STEM extension</strong> (up to 3 years) immediately.{" "}
              <strong>No sponsorship needed to start.</strong> Eligible for H-1B sponsorship thereafter.{" "}
              <strong>No $100K employer fee</strong>, transitioning directly from F1 to H-1B.
            </p>
          </div>
          <div className={styles.eligibilityCard}>
            <div className={styles.eligibilityCardHeader}>
              <span className={styles.eligibilityIcon}>📍</span>
              <strong>Location Preference</strong>
            </div>
            <p className={styles.eligibilityDesc}>
              Based in Boston, MA. Open to roles anywhere in the U.S. Open to hybrid or in-office.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Closing */}
      <motion.div variants={fade}  className={styles.closing}>
        <hr className={styles.divider} />
        <p className={styles.closingText}>
          <em>Feel free to go through my Work and Projects sections to see what I&apos;ve actually worked on and built. If something resonates, please reach out.</em>
        </p>
        <div className={styles.cta}>
          <Link href="/contact" className={`${styles.btnPrimary} ctaWhite`}>Get in touch →</Link>
        </div>
      </motion.div>

    </motion.div>
  );
}
