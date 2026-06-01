import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Row,
  Tag,
  Text,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "./TimelineAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

export function TimelineAbout() {
  return (
    <Column maxWidth="m" paddingY="24">

      {/* ── Profile ── */}
      <div className={styles.profileSection}>
        <Avatar
          src={person.avatar}
          size="xl"
          style={{ width: "110px", height: "110px", flexShrink: 0 }}
          className={profileStyles.profileAvatar}
        />
        <Column gap="4" flex={1}>
          <Heading variant="display-strong-s">{person.name}</Heading>
          <Text variant="heading-default-s" onBackground="neutral-weak">
            {person.role}
          </Text>
          <Row gap="16" vertical="center" marginTop="8" wrap>
            <Row gap="8" vertical="center">
              <Icon onBackground="neutral-weak" name="globe" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                Boston, MA
              </Text>
            </Row>
            {social.filter((i) => i.essential && i.link).map((item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  <Row s={{ hide: true }}>
                    <Button href={item.link} prefixIcon={item.icon} label={item.name} size="s" weight="default" variant="secondary" />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <IconButton size="l" href={item.link} icon={item.icon} variant="secondary" />
                  </Row>
                </React.Fragment>
              )
            )}
          </Row>
        </Column>
      </div>

      {/* ── Intro ── */}
      <div className={styles.row} style={{ marginBottom: "8px" }}>
        <div className={styles.dateCell} />
        <div className={styles.lineCell}>
          <div className={styles.line} style={{ minHeight: "0", flex: "none", height: "0" }} />
        </div>
        <Column
          className={styles.contentCell}
          textVariant="body-default-l"
          gap="m"
          style={{ textAlign: "justify", paddingBottom: "48px" }}
        >
          {about.intro.description}
        </Column>
      </div>

      {/* ── Work Experience ── */}
      <div className={styles.sectionRow}>
        <div className={styles.dateCell} />
        <div className={styles.sectionLineCell}>
          <div className={styles.sectionDot} />
          <div className={styles.line} />
        </div>
        <div style={{ paddingLeft: "24px", paddingBottom: "20px" }}>
          <Heading as="h2" variant="display-strong-s">{about.work.title}</Heading>
        </div>
      </div>

      {about.work.experiences.map((experience, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.dateCell}>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {experience.timeframe.split(" – ")[0]}
            </Text>
          </div>
          <div className={styles.lineCell}>
            <div className={styles.dot} />
            <div className={styles.line} />
          </div>
          <div className={styles.contentCell}>
            <Column gap="4" marginBottom="m">
              <Text variant="heading-strong-l">{experience.role}</Text>
              <Text variant="body-default-s" onBackground="brand-weak">
                {experience.company}
              </Text>
            </Column>
            <Column as="ul" gap="8" className={profileStyles.achievementsList}>
              {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                <Text as="li" variant="body-default-s" key={i}>
                  {achievement}
                </Text>
              ))}
            </Column>
          </div>
        </div>
      ))}

      {/* ── Education ── */}
      <div className={styles.sectionRow}>
        <div className={styles.dateCell} />
        <div className={styles.sectionLineCell}>
          <div className={styles.sectionDot} />
          <div className={styles.line} />
        </div>
        <div style={{ paddingLeft: "24px", paddingBottom: "20px" }}>
          <Heading as="h2" variant="display-strong-s">{about.studies.title}</Heading>
        </div>
      </div>

      {about.studies.institutions.map((institution, index) => (
        <div
          className={styles.row}
          key={index}
          style={{ marginBottom: index === about.studies.institutions.length - 1 ? "48px" : "0" }}
        >
          <div className={styles.dateCell}>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {index === 0 ? "2026" : "2024"}
            </Text>
          </div>
          <div className={styles.lineCell}>
            <div className={styles.dot} />
            {index < about.studies.institutions.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.contentCell}>
            <Text variant="heading-strong-l">{institution.name}</Text>
            <Text variant="heading-default-xs" onBackground="neutral-weak">
              {institution.description}
            </Text>
          </div>
        </div>
      ))}

      {/* ── Skills ── */}
      <div className={styles.skillsSection}>
        <Heading as="h2" variant="display-strong-s">{about.technical.title}</Heading>
        {about.technical.skills.map((skill, index) => (
          <Column key={index} gap="8">
            <Text variant="heading-strong-m">{skill.title}</Text>
            {skill.tags && skill.tags.length > 0 && (
              <Row wrap gap="8">
                {skill.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} size="l" prefixIcon={tag.icon}>
                    {tag.name}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        ))}
      </div>

    </Column>
  );
}
