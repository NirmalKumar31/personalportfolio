"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const TLDR = [
  <>
    <strong>I pick up new tools fast.</strong> Every role threw something unfamiliar at me and I got productive quickly. At Ideatec I taught myself LSTM autoencoders for predictive maintenance. At Diggibyte I got hands-on with Azure Data Factory and Delta Lake. At Fidelity I picked up Snowflake and statistical testing frameworks in a live marketing analytics environment.
  </>,
  <>
    <strong>The work I have done actually ran in production.</strong> At Fidelity I built automations that replaced manual weekly reporting and did analysis that touched $35.6B in client assets. On personal projects I have shipped a full cloud data platform on AWS — from Kinesis ingestion to Snowflake serving. Not just coursework.
  </>,
  <>
    <strong>I work closest to the business question, not just the pipeline.</strong> I have always cared about what the output is supposed to tell someone. At Fidelity that meant turning MMM outputs into concrete targeting recommendations. Building something that runs is the floor — building something that informs a decision is the goal.
  </>,
];

const SKILLS = [
  {
    title: "Data Engineering",
    desc: "I build data pipelines end to end. I have worked with dbt for transformation layers, Airflow for orchestration, Snowflake for warehousing, and both Azure Data Factory and AWS (Kinesis, S3, Glue, Snowpipe) for ingestion. On Databricks I have built incremental loads with Delta Lake and processed data with PySpark. I treat pipelines the way good engineers treat code: tested, maintainable, and built to fail gracefully.",
    tags: ["Snowflake", "dbt", "Airflow", "Databricks", "PySpark", "Azure ADF", "AWS"],
  },
  {
    title: "Analytics & BI",
    desc: "Analytics has been central to almost every role and project I have worked on. I am extremely proficient in SQL and have used it across datasets exceeding 150M records. At Fidelity I built a data quality framework that cut reporting errors by 60%, synthesized Marketing Mix Model outputs spanning $35.6B in client assets into actionable targeting recommendations, and analyzed 270K+ social interactions to drive a 13-point engagement lift. I have built dashboards in both Tableau and Power BI.",
    tags: ["SQL", "Tableau", "Power BI", "Python", "Pandas", "Snowflake"],
  },
  {
    title: "Machine Learning & AI",
    desc: "I have built CNN classifiers on medical imaging data (92% accuracy on 5,800 chest X-rays), LSTM autoencoder models for predictive maintenance (89% precision, flagging equipment failures 6 hours early), and distributed PySpark ML pipelines on Databricks with MLlib for transit performance prediction. I know the gap between a model that performs in a notebook and one that holds up in production.",
    tags: ["scikit-learn", "TensorFlow", "XGBoost", "LSTM", "CNN", "MLlib"],
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
          <em>Interested in hiring me? Read here to see what I can do!</em>
        </p>
        <div className={styles.pills}>
          <span className={styles.pill}>Actively looking</span>
          <span className={styles.pill}>Available immediately</span>
        </div>
      </motion.div>

      <motion.hr variants={fade} transition={{ duration: 0.3 }} className={styles.divider} />

      {/* Intro */}
      <motion.p variants={fade} transition={{ duration: 0.5 }} className={styles.intro}>
        Thank you for stopping by! I am actively looking for a{" "}
        <strong>data analyst, data engineer, analytics engineer, or data science role</strong> and available
        to start <strong>immediately</strong>. I've spent around 1.5 years building real data systems across
        multiple companies, working on production pipelines, marketing analytics at scale, and machine
        learning models that went into production. I am ready to learn more and contribute to the team
        and help you achieve your goals.
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
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.section}>
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
      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.closing}>
        <hr className={styles.divider} />
        <p className={styles.closingText}>
          <em>Feel free to go through my Work and Projects sections to see what I&apos;ve actually worked on and built. If something resonates, please reach out.</em>
        </p>
        <div className={styles.cta}>
          <Link href="/contact" className={styles.btnPrimary}>Get in touch →</Link>
        </div>
      </motion.div>

    </motion.div>
  );
}
