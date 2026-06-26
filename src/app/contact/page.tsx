"use client";
import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { person, social } from "@/resources";

export default function Contact() {
  return (
    <div className={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.heading}>Say hello.</h1>
        <p className={styles.subheading}>
          Whether it's a role, a project, or just a question — I'm usually pretty quick to respond.
        </p>
      </motion.div>

      <motion.div
        className={styles.links}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {social
          .filter((s) => s.link)
          .map((s, i) => (
            <motion.a
              key={s.name}
              href={s.link}
              className={styles.contactRow}
              target={s.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.35 }}
            >
              <span className={styles.contactLabel}>{s.name}</span>
              <span className={styles.contactArrow}>→</span>
            </motion.a>
          ))}
      </motion.div>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Based in Boston, MA · Open to remote and relocation
      </motion.p>
    </div>
  );
}
