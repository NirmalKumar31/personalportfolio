"use client";
import { useEffect, useState } from "react";
import styles from "./TypewriterHeadline.module.css";

interface TypewriterHeadlineProps {
  text: string;
  speed?: number;
}

export function TypewriterHeadline({ text, speed = 55 }: TypewriterHeadlineProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={done ? styles.gradient : styles.plain}>
      {displayed}
      {!done && <span className={styles.cursor}>|</span>}
    </span>
  );
}
