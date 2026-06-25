"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";
import { person, home, social } from "@/resources";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <motion.div
          className={styles.polaroidWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.polaroid}>
            <img
              src={person.avatar}
              alt={person.firstName}
              className={styles.avatar}
            />
            <p className={styles.caption}>boston, ma — open to anywhere</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.socialRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {social
            .filter((s) => s.essential && s.link)
            .map((s) => (
              <a
                key={s.name}
                href={s.link}
                className={styles.socialChip}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name}
              </a>
            ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <h1 className={styles.heading}>{home.headline}</h1>
        <div className={styles.subline}>{home.subline}</div>
        <div className={styles.actions}>
          <Link href="/about" className={styles.btnPrimary}>
            About me →
          </Link>
          <Link href="/work" className={styles.btnSecondary}>
            View projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
