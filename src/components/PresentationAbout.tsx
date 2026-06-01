"use client";

import { useEffect, useRef, useState } from "react";
import {
  Avatar, Button, Column, Heading,
  Icon, IconButton, Row, Tag, Text,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { TabbedWork } from "@/components/TabbedWork";
import styles from "./PresentationAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

type Section = "About" | "Work" | "Education" | "Skills";
const SECTIONS: Section[] = ["About", "Work", "Education", "Skills"];

export function PresentationAbout() {
  const [active, setActive] = useState<Section>("About");

  const refs: Record<Section, React.RefObject<HTMLDivElement | null>> = {
    About:     useRef<HTMLDivElement>(null),
    Work:      useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Skills:    useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    (Object.entries(refs) as [Section, React.RefObject<HTMLDivElement | null>][]).forEach(([name, ref]) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(name); },
        { threshold: 0.3 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (key: Section) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Fixed: profile always visible ── */}
      <div className={styles.persistentProfile}>
        <Avatar
          src={person.avatar}
          size="s"
          className={profileStyles.profileAvatar}
        />
        <div className={styles.persistentName}>
          <Text variant="label-default-m" onBackground="neutral-strong">
            {person.name}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {person.role}
          </Text>
        </div>
      </div>

      {/* ── Fixed: dot nav ── */}
      <div className={styles.dotNav}>
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={`${styles.dot} ${active === s ? styles.dotActive : ""}`}
            onClick={() => scrollTo(s)}
            aria-label={s}
            title={s}
          />
        ))}
      </div>

      {/* ── Sections ── */}
      <div className={styles.sections}>

        {/* Panel 1: About */}
        <div ref={refs.About} className={styles.section}>
          <div className={styles.hero}>
            <div className={styles.heroPhoto}>
              <Avatar
                src={person.avatar}
                size="xl"
                style={{ width: "180px", height: "180px" }}
                className={profileStyles.profileAvatar}
              />
            </div>
            <Column gap="l" flex={1}>
              <Column gap="4">
                <Heading variant="display-strong-l">{person.name}</Heading>
                <Text variant="heading-default-m" onBackground="neutral-weak">
                  {person.role}
                </Text>
              </Column>
              <Row gap="8" vertical="center">
                <Icon onBackground="neutral-weak" name="globe" />
                <Text variant="body-default-s" onBackground="neutral-weak">Boston, MA</Text>
              </Row>
              <Row gap="8" wrap data-border="rounded">
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
              <Column textVariant="body-default-l" gap="m" style={{ textAlign: "justify" }}>
                {about.intro.description}
              </Column>
            </Column>
          </div>
        </div>

        {/* Panel 2: Work */}
        <div ref={refs.Work} className={styles.section}>
          <Column gap="l" fillWidth>
            <Heading variant="display-strong-s">{about.work.title}</Heading>
            <TabbedWork experiences={about.work.experiences} />
          </Column>
        </div>

        {/* Panel 3: Education */}
        <div ref={refs.Education} className={styles.section}>
          <Column gap="xl">
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

        {/* Panel 4: Skills */}
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
    </>
  );
}
