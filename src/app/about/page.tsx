"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease } },
};

const RECOMMENDATIONS = [
  {
    name: "Recommender Name",
    role: "Title, Company",
    text: "PLACEHOLDER — share your LinkedIn recommendation text and I'll fill this in.",
  },
  {
    name: "Recommender Name",
    role: "Title, Company",
    text: "PLACEHOLDER — share your LinkedIn recommendation text and I'll fill this in.",
  },
];

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
          <span className={styles.line}>I engineer pipelines.</span>
          <span className={styles.line}>I analyze the patterns.</span>
          <span className={styles.line}>
            <span className={styles.lineHighlight}>I build models. I ship them.</span>
          </span>
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

      {/* Content sections */}
      <motion.div variants={item} className={styles.sections}>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>01 / WHO</p>
          <p className={styles.body}>
            My name is <mark className={styles.hlTeal}>Nirmalkumar Thirupallikrishnan Kesavan</mark>.
            I&apos;m a data professional who spends most of his time building pipelines, running
            analyses, and occasionally training models. <mark className={styles.hlYellow}>I work across the full data stack</mark> — from raw
            ingestion to the dashboard someone actually opens on a Monday morning.
          </p>
          <p className={styles.body}>
            Over the last few years I&apos;ve worked across some pretty different spaces:
            predictive maintenance on factory machines, B2B client analytics, and data pipelines
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
            side projects, attending meetups, and generally keeping more tabs open than I should.
          </p>
          <p className={styles.body}>
            If something I&apos;ve built looks interesting to you, I&apos;d love to talk. Reach out
            through the contact page or my socials.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>03 / RECOMMENDATIONS</p>
          <div className={styles.recoCards}>
            {RECOMMENDATIONS.map((r, i) => (
              <div key={i} className={styles.recoCard}>
                <p className={styles.recoQuote}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.recoAuthor}>
                  <span className={styles.recoName}>{r.name}</span>
                  <span className={styles.recoRole}>{r.role}</span>
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
            View all on LinkedIn ↗
          </a>
        </div>

      </motion.div>
    </motion.div>
  );
}
