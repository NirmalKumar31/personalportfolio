"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const TLDR = [
  <>
    <strong>End-to-end data experience.</strong> From raw ingestion to the dashboard someone actually opens on a Monday — pipelines, analytics, and ML, all of it.
  </>,
  <>
    <strong>Real production work.</strong> ETL pipelines at Fidelity, anomaly detection on factory sensors, distributed Spark jobs on Databricks. Not just notebooks.
  </>,
  <>
    <strong>Picks up tools fast.</strong> SQL, Python, Spark, Snowflake, dbt, Tableau, scikit-learn, PyTorch — and whatever else the job needs.
  </>,
];

const SKILLS = [
  {
    title: "Data Engineering",
    desc: "Built production ETL pipelines on Azure Data Factory, worked with Databricks and Delta Lake, designed Snowflake tasks for automated reporting, and built SQL-based data quality frameworks with 64+ automated tests.",
    tags: ["Snowflake", "dbt", "Airflow", "Databricks", "PySpark", "Azure ADF", "SQL"],
  },
  {
    title: "Analytics & BI",
    desc: "Built Tableau dashboards, ran A/B tests at 140K impressions, done MMM attribution analysis across $35B in assets, and written automated reporting pipelines that replaced entirely manual work.",
    tags: ["SQL", "Python", "Tableau", "Power BI", "Pandas", "A/B Testing"],
  },
  {
    title: "Machine Learning & AI",
    desc: "Built CNN-based medical imaging classifiers, LSTM anomaly detection on industrial sensors, and distributed ML pipelines on Databricks with MLlib. Know the difference between a model that works in a notebook and one that actually ships.",
    tags: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LangChain", "RAG"],
  },
];

export default function Hire() {
  return (
    <motion.div
      className={styles.page}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* Header */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.header}>
        <h1 className={styles.heading}>Hire me!</h1>
        <p className={styles.subtitle}>
          <em>Looking for data engineering, analytics, or ML roles. Here&apos;s what I bring.</em>
        </p>
        <div className={styles.pills}>
          <span className={styles.pill}>Actively looking</span>
          <span className={styles.pill}>Available immediately</span>
        </div>
      </motion.div>

      <motion.hr variants={fade} transition={{ duration: 0.3 }} className={styles.divider} />

      {/* Intro */}
      <motion.p variants={fade} transition={{ duration: 0.5 }} className={styles.intro}>
        I am actively looking for a <strong>data engineering, analytics engineering, or data science role</strong> and available to start <strong>immediately</strong>. I have real production experience across pipelines, analytics, and ML — things that actually ran, not just class projects.
      </motion.p>

      {/* TL;DR */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>TL;DR</h2>
        <ul className={styles.bullets}>
          {TLDR.map((item, i) => (
            <li key={i} className={styles.bullet}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* What can I do */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>What can I do?</h2>
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
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>Location &amp; Work Eligibility</h2>
        <div className={styles.eligibilityGrid}>
          <div className={styles.eligibilityCard}>
            <div className={styles.eligibilityCardHeader}>
              <span className={styles.eligibilityIcon}>🇺🇸</span>
              <strong>United States</strong>
            </div>
            <p className={styles.eligibilityDesc}>
              Authorized to work on <strong>OPT + STEM extension</strong> (up to 3 years) immediately.
              No sponsorship needed to start. Eligible for H-1B sponsorship thereafter. No $100K employer
              fee — transitioning directly from F1 to H-1B.
            </p>
          </div>
          <div className={styles.eligibilityCard}>
            <div className={styles.eligibilityCardHeader}>
              <span className={styles.eligibilityIcon}>📍</span>
              <strong>Location Preference</strong>
            </div>
            <p className={styles.eligibilityDesc}>
              Based in Boston, MA. Open to roles anywhere in the U.S. with reasonable relocation time.
              Open to hybrid or in-office.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Closing */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.closing}>
        <hr className={styles.divider} />
        <p className={styles.closingText}>
          <em>Feel free to go through my Work and Projects sections to see what I&apos;ve actually worked on and built. If something resonates, please reach out.</em>
        </p>
        <div className={styles.cta}>
          <Link href="/contact" className={styles.btnPrimary}>Get in touch →</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Download resume
          </a>
        </div>
      </motion.div>

    </motion.div>
  );
}
