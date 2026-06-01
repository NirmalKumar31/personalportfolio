"use client";

import { useState } from "react";
import { Column, Row, Text } from "@once-ui-system/core";
import styles from "./TabbedWork.module.scss";

interface WorkExperience {
  company: string;
  role: string;
  timeframe: string;
  achievements: React.ReactNode[];
}

export function TabbedWork({ experiences }: { experiences: WorkExperience[] }) {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  const prev = () => setActive((a) => (a - 1 + experiences.length) % experiences.length);
  const next = () => setActive((a) => (a + 1) % experiences.length);

  const shortName = (name: string) =>
    name.replace(" Pvt Ltd", "").replace(" Technologies", "").replace(" Softwares", "");

  return (
    <div className={styles.container}>

      {/* Tab bar + arrows */}
      <div className={styles.tabHeader}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          ‹
        </button>
        <div className={styles.tabBar}>
          {experiences.map((e, i) => (
            <button
              key={i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {shortName(e.company)}
            </button>
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      {/* Content */}
      <div className={styles.content} key={active}>
        <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
          <Text variant="heading-strong-l">{exp.role}</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {exp.timeframe}
          </Text>
        </Row>
        <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
          {exp.company}
        </Text>
        <Column as="ul" gap="4" className={styles.list}>
          {exp.achievements.map((achievement, i) => (
            <Text as="li" variant="body-default-s" key={i} style={{ lineHeight: "1.4" }}>
              {achievement}
            </Text>
          ))}
        </Column>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {experiences.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to ${experiences[i].company}`}
          />
        ))}
      </div>

    </div>
  );
}
