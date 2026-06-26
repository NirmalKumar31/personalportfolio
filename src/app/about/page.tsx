"use client";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { about, person } from "@/resources";

export default function About() {
  return (
    <div className={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.heading}>Hey, I'm {person.firstName}.</h1>
        <div className={styles.intro}>{about.intro.description}</div>
      </motion.div>
    </div>
  );
}
