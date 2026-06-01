import {
  Avatar, Column, Heading,
  Icon, IconButton, Row, Tag, Text,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { TabbedWork } from "@/components/TabbedWork";
import styles from "./SplitAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

export function SplitAbout() {
  return (
    <div className={styles.layout}>

      {/* ══════════════ LEFT: always visible ══════════════ */}
      <aside className={styles.leftPanel}>

        {/* Profile pic + name + role + socials */}
        <Row gap="l" vertical="start">
          <Avatar
            src={person.avatar}
            size="xl"
            style={{ width: "120px", height: "120px", flexShrink: 0 }}
            className={profileStyles.profileAvatar}
          />
          <Column gap="8">
            <Heading variant="display-strong-xs">{person.name}</Heading>
            <Text variant="heading-default-l" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Row gap="8">
              {social.filter((i) => i.essential && i.link).map((item) =>
                item.link && (
                  <IconButton key={item.name} size="m" href={item.link} icon={item.icon} variant="secondary" tooltip={item.name} />
                )
              )}
            </Row>
          </Column>
        </Row>

        {/* Intro */}
        <Column textVariant="body-default-s" gap="xs" style={{ lineHeight: "1.4" }}>
          {about.intro.description}
        </Column>

      </aside>

      {/* ══════════════ RIGHT: scrollable ══════════════ */}
      <main className={styles.rightPanel}>

        {/* Work Experience */}
        <div className={styles.section}>
          <Heading variant="display-strong-s">{about.work.title}</Heading>
          <TabbedWork experiences={about.work.experiences} />
        </div>

        <div className={styles.divider} />

        {/* Education */}
        <div className={styles.section}>
          <Heading variant="display-strong-s">{about.studies.title}</Heading>
          {about.studies.institutions.map((inst, i) => (
            <div key={i} className={styles.educationCard}>
              <Text variant="heading-strong-l">{inst.name}</Text>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                {inst.description}
              </Text>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        {/* Skills */}
        <div className={styles.section}>
          <Heading variant="display-strong-s">{about.technical.title}</Heading>
          {about.technical.skills.map((skill, i) => (
            <Column key={i} gap="8">
              <Text variant="heading-strong-m">{skill.title}</Text>
              {skill.tags && (
                <Row wrap gap="8">
                  {skill.tags.map((tag, j) => (
                    <Tag key={j} size="l" prefixIcon={tag.icon}>{tag.name}</Tag>
                  ))}
                </Row>
              )}
            </Column>
          ))}
        </div>

      </main>
    </div>
  );
}
