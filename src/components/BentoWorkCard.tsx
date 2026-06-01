"use client";

import { useState } from "react";
import { Column, Row, Text } from "@once-ui-system/core";
import styles from "./BentoWorkCard.module.scss";

interface WorkExperience {
  company: string;
  role: string;
  timeframe: string;
  achievements: React.ReactNode[];
}

export function BentoWorkCard({ experience }: { experience: WorkExperience }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.card} ${expanded ? styles.cardOpen : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <Row fillWidth horizontal="between" vertical="start" gap="m">
        <Column gap="4" flex={1}>
          <Text variant="heading-strong-m">{experience.role}</Text>
          <Text variant="body-default-s" onBackground="brand-weak">
            {experience.company}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {experience.timeframe}
          </Text>
        </Column>
        <span className={`${styles.toggle} ${expanded ? styles.toggleOpen : ""}`}>
          +
        </span>
      </Row>

      <div className={`${styles.content} ${expanded ? styles.contentOpen : ""}`}>
        <Column as="ul" gap="12" className={styles.list}>
          {experience.achievements.map((achievement, i) => (
            <Text as="li" variant="body-default-s" key={i}>
              {achievement}
            </Text>
          ))}
        </Column>
      </div>
    </div>
  );
}
