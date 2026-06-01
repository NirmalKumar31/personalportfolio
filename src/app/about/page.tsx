import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Line,
  Row,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import TableOfContents from "@/components/about/TableOfContents";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <TableOfContents
        about={about}
        structure={[
          { title: about.intro.title,     display: about.intro.display,     items: [] },
          { title: about.work.title,      display: about.work.display,      items: about.work.experiences.map((e) => e.company) },
          { title: about.studies.title,   display: about.studies.display,   items: [] },
          { title: about.technical.title, display: about.technical.display, items: [] },
        ]}
      />

      {/* ── Header ── */}
      <Row fillWidth gap="l" vertical="center" marginBottom="xl" s={{ direction: "column" }}>
        {about.avatar.display && (
          <Avatar
            src={person.avatar}
            size="xl"
            style={{ width: "96px", height: "96px", flexShrink: 0 }}
            className={styles.profileAvatar}
          />
        )}
        <Column gap="8" flex={1}>
          <Heading variant="display-strong-m">{person.name}</Heading>
          <Text variant="heading-default-s" onBackground="neutral-weak">
            {person.role}
          </Text>
          <Row gap="16" vertical="center" marginTop="4" wrap>
            <Row gap="8" vertical="center">
              <Icon onBackground="neutral-weak" name="globe" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                Boston, MA
              </Text>
            </Row>
            {social.filter((item) => item.essential && item.link).map((item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  <Row s={{ hide: true }}>
                    <Button href={item.link} prefixIcon={item.icon} label={item.name} size="s" weight="default" variant="tertiary" />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <IconButton size="s" href={item.link} icon={item.icon} variant="tertiary" />
                  </Row>
                </React.Fragment>
              )
            )}
          </Row>
        </Column>
      </Row>

      <Line marginBottom="xl" />

      {/* ── Intro ── */}
      {about.intro.display && (
        <>
          <Column
            id={about.intro.title}
            textVariant="body-default-l"
            fillWidth
            gap="m"
            marginBottom="xl"
            style={{ textAlign: "justify" }}
          >
            {about.intro.description}
          </Column>
          <Line marginBottom="xl" />
        </>
      )}

      {/* ── Work Experience ── */}
      {about.work.display && (
        <>
          <Column fillWidth gap="40" marginBottom="xl">
            <Heading as="h2" id={about.work.title} variant="display-strong-s">
              {about.work.title}
            </Heading>
            {about.work.experiences.map((experience, index) => (
              <Column key={index} fillWidth gap="m">
                <Row fillWidth horizontal="between" vertical="end">
                  <Column gap="4">
                    <Text variant="heading-strong-l">{experience.role}</Text>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {experience.company}
                    </Text>
                  </Column>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Row>
                <Column as="ul" gap="12" className={styles.achievementsList}>
                  {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                    <Text as="li" variant="body-default-m" key={i}>
                      {achievement}
                    </Text>
                  ))}
                </Column>
              </Column>
            ))}
          </Column>
          <Line marginBottom="xl" />
        </>
      )}

      {/* ── Education ── */}
      {about.studies.display && (
        <>
          <Column fillWidth gap="l" marginBottom="xl">
            <Heading as="h2" id={about.studies.title} variant="display-strong-s">
              {about.studies.title}
            </Heading>
            {about.studies.institutions.map((institution, index) => (
              <Column key={index} fillWidth gap="4">
                <Text id={institution.name} variant="heading-strong-l">
                  {institution.name}
                </Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
          <Line marginBottom="xl" />
        </>
      )}

      {/* ── Technical Skills ── */}
      {about.technical.display && (
        <Column fillWidth gap="l" marginBottom="xl">
          <Heading as="h2" id={about.technical.title} variant="display-strong-s">
            {about.technical.title}
          </Heading>
          {about.technical.skills.map((skill, index) => (
            <Column key={index} fillWidth gap="12">
              <Text id={skill.title} variant="heading-strong-m">
                {skill.title}
              </Text>
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
    </Column>
  );
}
