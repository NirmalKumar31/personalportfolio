import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import { TabbedWork } from "@/components";
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
    <Column maxWidth="m" paddingX="l">
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

      <Row fillWidth gap="xl" s={{ direction: "column" }}>

        {/* LEFT: sticky profile + intro */}
        <Column
          className={styles.stickyLeft}
          flex={5}
          gap="m"
          paddingRight="xl"
          s={{ paddingRight: "0" }}
        >
          <Avatar
            src={person.avatar}
            size="l"
            style={{ width: "130px", height: "130px" }}
            className={styles.profileAvatar}
          />

          <Column gap="4">
            <Heading variant="display-strong-xs">{person.name}</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {person.role}
            </Text>
          </Column>

          <Row gap="8" vertical="center">
            <Icon onBackground="neutral-weak" name="globe" size="s" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.location}
            </Text>
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

          {/* Intro summary */}
          {about.intro.display && (
            <Column textVariant="body-default-s" gap="m" style={{ textAlign: "justify" }}>
              {about.intro.description}
            </Column>
          )}
        </Column>

        {/* RIGHT: bento grid */}
        <Column flex={6} gap="xl" paddingLeft="l">

          {/* Work Experience - tabbed */}
          {about.work.display && (
            <Column gap="m">
              <Heading as="h2" id={about.work.title} variant="display-strong-s">
                {about.work.title}
              </Heading>
              <TabbedWork experiences={about.work.experiences} />
            </Column>
          )}

          {/* Education */}
          {about.studies.display && (
            <Column gap="m">
              <Heading as="h2" id={about.studies.title} variant="display-strong-s">
                {about.studies.title}
              </Heading>
              <div className={styles.bentoGrid}>
                {about.studies.institutions.map((institution, index) => (
                  <div key={index} className={styles.bentoCard}>
                    <Column gap="8">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </div>
                ))}
              </div>
            </Column>
          )}

          {/* Technical Skills */}
          {about.technical.display && (
            <Column gap="m">
              <Heading as="h2" id={about.technical.title} variant="display-strong-s">
                {about.technical.title}
              </Heading>
              <div className={styles.bentoGrid}>
                {about.technical.skills.map((skill, index) => (
                  <div key={index} className={styles.bentoCard}>
                    <Column gap="12">
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
                  </div>
                ))}
              </div>
            </Column>
          )}

        </Column>
      </Row>
    </Column>
  );
}
