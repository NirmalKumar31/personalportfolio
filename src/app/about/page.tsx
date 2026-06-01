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
          {
            title: about.intro.title,
            display: about.intro.display,
            items: [],
          },
          {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map((e) => e.company),
          },
          {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map((i) => i.name),
          },
          {
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map((s) => s.title),
          },
        ]}
      />

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {/* Left: sticky avatar */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" style={{ width: "160px", height: "160px" }} className={styles.profileAvatar} />
            <Row gap="8" vertical="center">
              <Icon onBackground="neutral-strong" name="globe" />
              {person.location}
            </Row>
          </Column>
        )}

        {/* Right: name, role, social, then all sections */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl" style={{ textAlign: "justify" }}>
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="m" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <div key={`${experience.company}-${experience.role}-${index}`} className={styles.experienceCard}>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.role}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.company}
                    </Text>
                    <Column as="ul" gap="16" className={styles.achievementsList}>
                      {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${i}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </div>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="m" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <div key={`${institution.name}-${index}`} className={styles.experienceCard}>
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
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="m">
                {about.technical.skills.map((skill, index) => (
                  <div key={`${skill.title}-${index}`} className={styles.experienceCard}>
                    <Column fillWidth gap="12">
                      <Text id={skill.title} variant="heading-strong-l">
                        {skill.title}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8">
                          {skill.tags.map((tag, tagIndex) => (
                            <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </div>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
