"use client";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { about } from "@/resources";

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
      <motion.div variants={item} className={styles.headlineBlock}>
        <h1 className={styles.headline}>
          <span className={styles.line}>I move data.</span>
          <span className={styles.line}>I ask hard questions.</span>
          <span className={`${styles.line} ${styles.lineHighlight}`}>Usually in that order.</span>
        </h1>
      </motion.div>

      <motion.div variants={item} className={styles.pills}>
        {PILLS.map(p => (
          <span key={p.label} className={styles.pill}>
            {p.icon} {p.label}
          </span>
        ))}
      </motion.div>

      <motion.div variants={item} className={styles.intro}>
        {about.intro.description}
      </motion.div>
    </motion.div>
  );
}
