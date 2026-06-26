"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const offerings = [
  {
    title: "Data Engineering",
    desc: "End-to-end pipelines on AWS, Snowflake, Databricks — batch and streaming. dbt models, Airflow orchestration, Delta Lake, and data quality frameworks built to hold up in production.",
  },
  {
    title: "Analytics & BI",
    desc: "SQL-heavy analysis, Tableau dashboards, A/B testing, MMM attribution, and the kind of reporting infra that lets teams stop pulling things manually.",
  },
  {
    title: "Machine Learning",
    desc: "Predictive models, time-series anomaly detection, computer vision — from exploratory work in Python all the way to something deployable.",
  },
];

export default function Hire() {
  return (
    <div className={styles.page}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.statusRow}>
          <span className={styles.dot} />
          <span className={styles.statusText}>actively looking — available now</span>
        </div>
        <h1 className={styles.heading}>Let's work together.</h1>
        <p className={styles.subheading}>
          I'm a Data Engineer and Analyst finishing my master's at Northeastern,
          open to full-time roles in data engineering, analytics engineering,
          or data science. I work across the stack — pipelines, models, and dashboards.
        </p>
      </motion.div>

      <motion.div
        className={styles.offerings}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>What I bring</h2>
        <div className={styles.cards}>
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              className={styles.card}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
            >
              <h3 className={styles.cardTitle}>{o.title}</h3>
              <p className={styles.cardDesc}>{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>The basics</h2>
        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>Boston, MA — open to anywhere</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Work authorization</span>
            <span className={styles.detailValue}>OPT (valid through 2027) · STEM extension eligible</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Availability</span>
            <span className={styles.detailValue}>Immediately available</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Preferred roles</span>
            <span className={styles.detailValue}>Data Engineer · Analytics Engineer · Data Analyst</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        <Link href="/contact" className={styles.btnPrimary}>Get in touch →</Link>
        <a
          href="https://www.linkedin.com/in/nirmalkumartk/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          LinkedIn
        </a>
      </motion.div>
    </div>
  );
}
