"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const SKILLS = [
  {
    title: "Data Engineering",
    desc: "I have built production ETL pipelines on Azure Data Factory, worked with Databricks and Delta Lake, designed Snowflake tasks for automated reporting, and built SQL-based data quality frameworks. I treat pipelines as software — testable, maintainable, and built to run.",
    tags: ["Azure Data Factory", "Databricks", "Snowflake", "Delta Lake", "Spark", "SQL", "Python"],
  },
  {
    title: "Analytics & BI",
    desc: "I have built Tableau dashboards, run A/B tests at scale (140K impressions), done MMM attribution analysis across $35B in assets, and written automated reporting pipelines that replaced entirely manual work. I build things analysts actually want to use.",
    tags: ["SQL", "Python", "Tableau", "Power BI", "Snowflake", "Pandas", "A/B Testing"],
  },
  {
    title: "Machine Learning",
    desc: "I have built CNN-based medical imaging classifiers, LSTM-Autoencoder anomaly detection on industrial sensors, and real-time computer vision systems. I know the difference between a model that performs in a notebook and one that actually ships.",
    tags: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "CNNs", "LSTM", "OpenCV"],
  },
];

const TLDR = [
  <>
    <strong>End-to-end data experience.</strong> From raw ingestion to the dashboard someone actually opens on a Monday — I have done all of it across internships.
  </>,
  <>
    <strong>Real production work.</strong> Pipelines at Fidelity, anomaly detection on factory sensors, ML models deployed as interactive demos. Not just notebooks.
  </>,
  <>
    <strong>Comfortable across the stack.</strong> SQL, Python, Spark, Snowflake, Azure, Tableau, Power BI, scikit-learn, PyTorch. I pick up new tools fast.
  </>,
  <>
    I care about what the data actually means — not just moving it, but helping teams make better decisions with it.
  </>,
];

const PROJECTS = [
  <>Built an <strong>LSTM-Autoencoder anomaly detection system</strong> on industrial sensor telemetry — 89% precision catching failures 6 hours ahead, projected 31% reduction in unplanned downtime.</>,
  <>Built a <strong>CNN pneumonia detector</strong> on 5,800 chest X-rays at 92% accuracy, with Grad-CAM overlays highlighting regions driving each prediction.</>,
  <>Built a <strong>real-time sign language recognition system</strong> (15 gestures, 95% accuracy) from a live webcam feed, deployed as an interactive educational demo.</>,
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
          <em>Actively looking for data engineering, analytics, or data science roles. Here&apos;s what I bring.</em>
        </p>
        <div className={styles.pills}>
          <span className={styles.pill}>Actively looking</span>
          <span className={styles.pill}>Available immediately</span>
        </div>
      </motion.div>

      <motion.hr variants={fade} transition={{ duration: 0.3 }} className={styles.divider} />

      {/* Intro */}
      <motion.p variants={fade} transition={{ duration: 0.5 }} className={styles.intro}>
        Thank you for your interest! I am actively looking for a{" "}
        <strong>data engineering, analytics engineering, or data science role</strong> and available to
        start <strong>immediately</strong>. I have real production experience across pipelines, marketing
        analytics, and ML — things that actually ran in production, not just class projects.
      </motion.p>

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
              No sponsorship needed to start. Eligible for H-1B sponsorship thereafter. There is no
              need for the employer to pay the $100,000 fee since I am transitioning from F1 to H1B.
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

      {/* TL;DR */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>TL;DR</h2>
        <ul className={styles.bullets}>
          {TLDR.map((item, i) => (
            <li key={i} className={styles.bullet}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* What can you do */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>What can you do?</h2>
        <p className={styles.sectionNote}>
          <em>These areas are not siloed — most of my best work sits at the intersection of several.</em>
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

      {/* Projects */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ul className={styles.bullets}>
          {PROJECTS.map((p, i) => (
            <li key={i} className={styles.bullet}>{p}</li>
          ))}
        </ul>
      </motion.div>

      {/* Closing */}
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.closing}>
        <hr className={styles.divider} />
        <p className={styles.closingText}>
          <em>I am actively looking for full-time roles. Do not hesitate to reach out — I would love to learn more about what your team is building.</em>
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
