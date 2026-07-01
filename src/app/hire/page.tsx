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
    <strong>Quick to pick up new tools.</strong> Every role I&apos;ve been in came with something I hadn&apos;t used before — a new cloud, an unfamiliar stack, a different domain. The ramp-up has been short every time and I&apos;ve never needed long before I was actually contributing.
  </>,
  <>
    <strong>Analytical by instinct.</strong> Once the data is in shape, the interesting work starts — figuring out what it&apos;s actually saying. I look for the pattern behind the metric, the signal behind the noise, and what a number means for a decision someone actually has to make.
  </>,
  <>
    <strong>Cross-domain by experience.</strong> My background spans data engineering, analytics, and ML. I&apos;ve moved between all three depending on what the problem needed — and that range makes it easier to build things that hold up end to end.
  </>,
  <>
    <strong>The work ran in production.</strong> Real ETL pipelines, automated reporting that replaced manual processes, dashboards that operations teams actually depended on. Not just coursework or demo datasets.
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
    desc: "SQL is the tool I reach for most, and I use it for everything from data quality checks to exploratory analysis. At Fidelity I worked with social media data, marketing mix model outputs, and multi-touch attribution across a large client asset base — the kind of work where the numbers mean something to the business, not just the dashboard. I build in Tableau and Power BI, and I'm comfortable owning the full chain from the query to the view someone else uses to make a call. Outside work, my MBTA on-time performance project used Python and SQL to dig into how transit delays actually pattern across routes and time.",
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
              Authorized to work on <strong>OPT + STEM extension</strong> (up to 3 years) immediately.{" "}
              <strong>No sponsorship needed to start.</strong> Eligible for H-1B sponsorship thereafter.{" "}
              There is <strong>no need for the employer to pay the $100,000 fee</strong> to sponsor my H-1B
              since I am transitioning from F1 to H-1B.
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
