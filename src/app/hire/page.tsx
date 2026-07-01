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
    desc: "I build pipelines that handle real production loads. At Ideatec, I used Azure Synapse and PySpark to backfill 900M+ rows from on-prem into Azure Data Lake and set up daily ingestion — cutting data latency from days to under 3 hours. At Diggibyte, I built an Azure Data Factory pipeline to pull and flatten nested JSON from a REST API, and configured Delta Lake in Databricks so time-range queries only scan what they actually need, bringing scan volume down from 500 GB to 350 GB. On the orchestration and transformation side, I'm comfortable with dbt for modeling and Airflow for scheduling. I've also worked with Snowflake for cloud data warehousing across academic and personal projects.",
    tags: ["Azure Synapse", "PySpark", "ADF", "Databricks", "Delta Lake", "dbt", "Airflow", "Snowflake"],
  },
  {
    title: "Analytics & BI",
    desc: "SQL is the tool I default to, and I've used it across datasets in the hundreds of thousands to hundreds of millions of rows. At Fidelity, I built a two-stage data quality framework that automatically caught metric anomalies before they hit dashboards, cutting reporting errors by 60% across 10+ Tableau reports. I also analyzed 270K+ social interactions to surface the content timing and format patterns that were tied to a 13% engagement increase, and synthesized Marketing Mix Model outputs into targeting recommendations for leadership. I build dashboards in both Tableau and Power BI — most recently a Power BI operations dashboard at Ideatec. Outside work, my MBTA on-time performance project used Python and SQL to model transit delays across 2+ years of ridership records.",
    tags: ["SQL", "Python", "Tableau", "Power BI", "Pandas", "Snowflake"],
  },
  {
    title: "Machine Learning & AI",
    desc: "I've worked on ML problems across a few different domains. At Qwings, I trained a CNN on 5,800 labeled chest X-rays to detect pneumonia at 92% accuracy, then added Grad-CAM visualizations so the model's output was actually interpretable — not just a confidence score. I also built a real-time sign language recognition system that reads live webcam input and classifies 15 gestures at 95% accuracy. At Ideatec, I used clustering on industrial sensor data to identify that elevated vibration was the dominant signal behind 72% of equipment breakdowns. My grad school work includes an LA crime pattern analysis with geospatial modeling and a transit delay prediction model built on MBTA historical data.",
    tags: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "CNN", "PySpark"],
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
        multiple companies, working on production data pipelines, marketing analytics at scale, and
        building systems that real teams actually depended on. I am ready to learn more and contribute to the team
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
              I&apos;m on <strong>OPT with a STEM extension</strong> — up to 3 years of work authorization,
              no H-1B sponsorship needed to get started. And no <strong>$100K employer fee</strong> either,
              since I&apos;m transitioning directly from F1 to H-1B.
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
