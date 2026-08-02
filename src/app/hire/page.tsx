"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./hire.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.48, ease } },
};

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
    desc: "I've applied ML across different problem types. At Ideatec, I used clustering to perform root-cause analysis on sensor data, pinpointing a dominant failure pattern linked to 72% of equipment breakdowns. My grad school work includes an LA crime pattern analysis, a transit delay prediction model on 2+ years of MBTA data, and an end-to-end computational biology pipeline comparing a CNN against three RNA foundation models (RNA-FM with LoRA, RNABERT, SpliceBERT) across 16 RNA-binding proteins on an HPC cluster — SpliceBERT reached AUROC 0.893 and transferred to ClinVar variant-effect scoring with AUROC 0.837 on noncoding variants without any disease-label training. I'm comfortable with the full workflow from feature engineering and model selection to evaluation and HPC job orchestration.",
    tags: ["scikit-learn", "PyTorch", "XGBoost", "CNN", "LoRA", "HuggingFace", "PySpark", "Slurm"],
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

      {/* Recommendations */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Recommendations</h2>
        <div className={styles.recoCards}>
          {[
            {
              name: "Shyam Daraboina",
              role: "Director, Social Data Platforms Analytics",
              company: "Fidelity Investments",
              date: "December 2025",
              initial: "S",
              bg: "#fef3c7",
              color: "#92400e",
              text: "Nirmal helped us with some of the social analytics work here at Fidelity. Right from the get go, he was very professional and thoughtful about the work he touched and I was pleasantly surprised to know that this was his first corporate job in the US. He is very inquisitive about the data and analysis we do here and picked up social media analytics & data nuances in no time, which is not easy due to its complex and unstructured nature. He was able to bring new technical dimensions to the regular analyses, demonstrating his out-of-box thinking. Nirmal has strong technical skills especially in data wrangling, manipulation and modeling — an asset to any team solving complex analytics questions for marketing stakeholders. His story telling ability is the icing on the cake which should take him to good heights in his analytics career. I would strongly recommend Nirmal for any analytics team that wants a technically savvy, intellectually curious and a quick learner that can effectively present analytics solutions to solve a complex business question.",
            },
            {
              name: "Jennifer LaPlaca Sherman",
              role: "Director, Marketing Measurement & Analytics",
              company: "Fidelity Investments",
              date: "November 2025",
              initial: "J",
              bg: "#ccfbf1",
              color: "#0f5a4e",
              text: "Nirmal was an excellent addition to our Analytics team during his time as a Co-op. He is a very quick learner and provided detailed and digestible marketing insights for our team and business stakeholders. He is always eager to learn more and not afraid to step outside of his comfort zone. Thank you for all your support over the last 6 months, Nirmal!",
            },
          ].map((r, i) => (
            <div key={i} className={styles.recoCard}>
              <p className={styles.recoText}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.recoFooter}>
                <div className={styles.recoInitial} style={{ background: r.bg, color: r.color }}>{r.initial}</div>
                <div className={styles.recoAuthor}>
                  <span className={styles.recoName}>{r.name}</span>
                  <span className={styles.recoRole}>{r.role} · {r.company}</span>
                </div>
                <span className={styles.recoDate}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/nirmalkumartk/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.recoLinkedIn}
        >
          View on LinkedIn ↗
        </a>
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
