"use client";

import { useEffect, useRef, useState } from "react";
import {
  Avatar, Button, Column, Heading, Icon,
  IconButton, Row, Tag, Text,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { TabbedWork } from "@/components/TabbedWork";
import styles from "./FullPanelAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

type SectionKey = "About" | "Work" | "Education" | "Skills";
const SECTIONS: SectionKey[] = ["About", "Work", "Education", "Skills"];

export function FullPanelAbout() {
  const [active, setActive] = useState<SectionKey>("About");

  const refs: Record<SectionKey, React.RefObject<HTMLDivElement | null>> = {
    About:     useRef<HTMLDivElement>(null),
    Work:      useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Skills:    useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    (Object.entries(refs) as [SectionKey, React.RefObject<HTMLDivElement | null>][]).forEach(([name, ref]) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(name); },
        { threshold: 0.35 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (key: SectionKey) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.layout}>

      {/* ── Sidebar: always visible ── */}
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <Avatar
            src={person.avatar}
            size="l"
            style={{ width: "96px", height: "96px" }}
            className={profileStyles.profileAvatar}
          />
          <Column gap="4">
            <Heading variant="heading-strong-xl">{person.name}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.role}
            </Text>
          </Column>
          <Row gap="8" vertical="center">
            <Icon onBackground="neutral-weak" name="globe" />
            <Text variant="body-default-s" onBackground="neutral-weak">Boston, MA</Text>
          </Row>
          <Row gap="8" wrap>
            {social.filter((i) => i.essential && i.link).map((item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  <Row s={{ hide: true }}>
                    <Button href={item.link} prefixIcon={item.icon} label={item.name} size="s" weight="default" variant="secondary" />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <IconButton size="s" href={item.link} icon={item.icon} variant="secondary" />
                  </Row>
                </React.Fragment>
              )
            )}
          </Row>
        </div>

        {/* Nav dots */}
        <nav className={styles.nav}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              className={`${styles.navItem} ${active === s ? styles.navActive : ""}`}
              onClick={() => scrollTo(s)}
            >
              <span className={styles.navDot} />
              {s}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Right: scrollable full-height panels ── */}
      <div className={styles.content}>

        {/* About */}
        <div ref={refs.About} className={styles.section}>
          <Column gap="xl" maxWidth="s">
            <Heading variant="display-strong-s">Introduction</Heading>
            <Column textVariant="body-default-l" gap="m" style={{ textAlign: "justify" }}>
              {about.intro.description}
            </Column>
          </Column>
        </div>

        {/* Work */}
        <div ref={refs.Work} className={styles.section}>
          <Column gap="l" fillWidth>
            <Heading variant="display-strong-s">{about.work.title}</Heading>
            <TabbedWork experiences={about.work.experiences} />
          </Column>
        </div>

        {/* Education */}
        <div ref={refs.Education} className={styles.section}>
          <Column gap="xl" maxWidth="s">
            <Heading variant="display-strong-s">{about.studies.title}</Heading>
            {about.studies.institutions.map((inst, i) => (
              <Column key={i} gap="8">
                <Text variant="heading-strong-l">{inst.name}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {inst.description}
                </Text>
              </Column>
            ))}
          </Column>
        </div>

        {/* Skills */}
        <div ref={refs.Skills} className={styles.section}>
          <Column gap="xl" fillWidth>
            <Heading variant="display-strong-s">{about.technical.title}</Heading>
            {about.technical.skills.map((skill, i) => (
              <Column key={i} gap="12">
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
          </Column>
        </div>

      </div>
    </div>
  );
}
