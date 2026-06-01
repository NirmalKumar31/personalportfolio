"use client";

import { useState } from "react";
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
import { TabbedWork } from "@/components/TabbedWork";
import styles from "./VerticalTabsAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

type Tab = "About" | "Work" | "Education" | "Skills";
const TABS: Tab[] = ["About", "Work", "Education", "Skills"];

export function VerticalTabsAbout() {
  const [active, setActive] = useState<Tab>("About");

  return (
    <div className={styles.layout}>

      {/* ── Left rail ── */}
      <nav className={styles.rail}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${active === tab ? styles.tabActive : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* ── Content ── */}
      <div className={styles.content} key={active}>

        {/* About */}
        {active === "About" && (
          <Column gap="xl">
            <Row gap="l" vertical="center" s={{ direction: "column" }}>
              <Avatar
                src={person.avatar}
                size="xl"
                style={{ width: "110px", height: "110px", flexShrink: 0 }}
                className={profileStyles.profileAvatar}
              />
              <Column gap="4">
                <Heading variant="display-strong-s">{person.name}</Heading>
                <Text variant="heading-default-s" onBackground="neutral-weak">
                  {person.role}
                </Text>
                <Row gap="8" vertical="center" marginTop="8" wrap>
                  <Icon onBackground="neutral-weak" name="globe" />
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Boston, MA
                  </Text>
                </Row>
              </Column>
            </Row>

            <Row gap="8" wrap data-border="rounded">
              {social.filter((item) => item.essential && item.link).map((item) =>
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

            <Column textVariant="body-default-l" gap="m" style={{ textAlign: "justify" }}>
              {about.intro.description}
            </Column>
          </Column>
        )}

        {/* Work */}
        {active === "Work" && (
          <Column gap="l">
            <Heading variant="display-strong-s">{about.work.title}</Heading>
            <TabbedWork experiences={about.work.experiences} />
          </Column>
        )}

        {/* Education */}
        {active === "Education" && (
          <Column gap="xl">
            <Heading variant="display-strong-s">{about.studies.title}</Heading>
            {about.studies.institutions.map((institution, index) => (
              <Column key={index} gap="8">
                <Text variant="heading-strong-l">{institution.name}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
        )}

        {/* Skills */}
        {active === "Skills" && (
          <Column gap="xl">
            <Heading variant="display-strong-s">{about.technical.title}</Heading>
            {about.technical.skills.map((skill, index) => (
              <Column key={index} gap="12">
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
          </Column>
        )}

      </div>
    </div>
  );
}
