"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const TLDR = [
  <>
    <strong>I ramp up fast on new tools.</strong> Every role threw something unfamiliar at me — dbt at Fidelity, Databricks at Ideatec, Azure Data Factory at Diggibyte. Each time I got productive quickly, without needing everything handed to me.
  </>,
  <>
    <strong>The work I have done actually ran in production.</strong> Pipelines at Fidelity touched $35B in assets. The Databricks jobs processed real records. The dashboards were opened by real analysts. Not just homework.
  </>,
  <>
    <strong>I care about what the data means, not just moving it.</strong> I have run A/B tests, built attribution models, and written SQL that influenced how teams thought about spend and performance. The analysis part matters to me as much as the engineering.
  </>,
];

const SKILLS = [
  {
    title: "Data Engineering",
    desc: "I have built production ETL pipelines on Azure Data Factory, set up incremental data loads with high-water mark patterns on Databricks, and designed Snowflake-based reporting workflows at Fidelity. One project I built had a full Medallion architecture with 64 automated data quality tests — I treat pipelines the way good engineers treat code: testable, maintainable, and built to handle failure without silently breaking.",
    tags: ["Snowflake", "dbt", "Airflow", "Databricks", "PySpark", "Azure ADF", "SQL"],
  },
  {
    title: "Analytics & BI",
    desc: "At Fidelity I worked on marketing analytics across $35B in AUM — ran A/B tests at 140K impression scale and did MMM attribution analysis that actually shaped how the team thought about campaign spend. I write SQL and build dashboards that people trust enough to open on a Monday morning without second-guessing the numbers.",
    tags: ["SQL", "Python", "Tableau", "Power BI", "Pandas", "A/B Testing"],
  },
  {
    title: "Machine Learning & AI",
    desc: "I have built CNN classifiers on medical imaging data, LSTM anomaly detectors on industrial sensor telemetry, and distributed ML pipelines on Databricks with MLlib. I have also worked with LLMs and RAG — built a retrieval system using LangChain and FAISS. I know the gap between a model that performs in a notebook and one that can actually be put in front of someone.",
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
        Thank you for stopping by! I am actively looking for a{" "}
        <strong>data engineering, analytics engineering, or data science role</strong> and available to
        start <strong>immediately</strong>. I have spent the last 1.5 years building real data systems
        across multiple companies — production pipelines, marketing analytics at scale, and ML that actually
        shipped — and I am ready to contribute from day one.
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
