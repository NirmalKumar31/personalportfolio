"use client";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const PILLS = [
  { icon: "📍", label: "Boston, MA" },
  { icon: "🎓", label: "MS Data Analytics · Northeastern" },
  { icon: "💼", label: "Open to full-time" },
];

export default function About() {
  return (
    <motion.div
      className={styles.page}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Headline — centered */}
      <motion.div variants={item} className={styles.headlineBlock}>
        <h1 className={styles.headline}>
          <span className={styles.line}>Engineer the pipeline.</span>
          <span className={styles.line}>Analyze the patterns.</span>
          <span className={`${styles.line} ${styles.lineHighlight}`}>Build the model. Ship it.</span>
        </h1>
      </motion.div>

      {/* Pills — centered */}
      <motion.div variants={item} className={styles.pills}>
        {PILLS.map(p => (
          <span key={p.label} className={styles.pill}>
            {p.icon} {p.label}
          </span>
        ))}
      </motion.div>

      {/* Content sections — left aligned */}
      <motion.div variants={item} className={styles.sections}>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>01 / WHO</p>
          <p className={styles.body}>
            My name is <mark className={styles.hlTeal}>Nirmal Kumar</mark>. I&apos;m a data professional
            who spends most of his time building pipelines, running analyses, and occasionally
            training models. I work across the full data stack — from raw ingestion to the
            dashboard someone actually opens on a Monday morning. I care about{" "}
            <mark className={styles.hlSky}>making data useful</mark>, not just technically correct.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;I don&apos;t just move data from A to B. I care about what happens when it gets there.&rdquo;
          </blockquote>
          <p className={styles.body}>
            Over the last year and a half I&apos;ve worked across some pretty different spaces:
            predictive maintenance on factory machines, medical imaging models, and data pipelines
            and marketing analytics at a financial firm. Not the most linear path — but the
            domains kept changing, which kept it interesting. My experience sits somewhere between{" "}
            <mark className={styles.hlYellow}>data engineering, analytics, and ML</mark>. I&apos;ve
            moved between all three depending on what the problem needed.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>02 / RIGHT NOW</p>
          <p className={styles.body}>
            Last semester of my MS at Northeastern (GPA: 3.8).{" "}
            <mark className={styles.hlYellow}>Actively looking for full-time roles</mark> in data
            engineering, analytics engineering, or data science. In between, I&apos;m working on
            side projects, attending meetups, and trying not to start five new things at once.
          </p>
          <p className={styles.body}>
            If something I&apos;ve built looks interesting to you, I&apos;d love to talk. Reach out
            through the contact page or my socials.
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}
