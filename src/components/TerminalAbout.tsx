import { Avatar, Column, Row, Text } from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import styles from "./TerminalAbout.module.scss";
import profileStyles from "./about/about.module.scss";
import React from "react";

const Prompt = ({ cmd }: { cmd: string }) => (
  <div className={styles.prompt}>
    <span className={styles.promptUser}>nirmal@portfolio</span>
    <span className={styles.promptSymbol}>~$</span>
    <span className={styles.command}>{cmd}</span>
  </div>
);

export function TerminalAbout() {
  return (
    <>
      {/* ── Fixed profile badge ── */}
      <div className={styles.badge}>
        <Avatar
          src={person.avatar}
          size="s"
          className={profileStyles.profileAvatar}
        />
        <Column gap="2">
          <Text variant="label-default-m" onBackground="neutral-strong">
            {person.name}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {person.role}
          </Text>
        </Column>
      </div>

      {/* ── Terminal window ── */}
      <div className={styles.terminal}>

        {/* Title bar */}
        <div className={styles.titleBar}>
          <div className={`${styles.dot} ${styles.dotRed}`} />
          <div className={`${styles.dot} ${styles.dotYellow}`} />
          <div className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.titleText}>about — zsh</span>
        </div>

        <div className={styles.body}>

          {/* whoami */}
          <div className={styles.block}>
            <Prompt cmd="whoami" />
            <div className={styles.output}>
              <div>
                <span className={styles.key}>name</span>
                <span className={styles.value}>{person.name}</span>
              </div>
              <div>
                <span className={styles.key}>role</span>
                <span className={styles.value}>{person.role}</span>
              </div>
              <div>
                <span className={styles.key}>location</span>
                <span className={styles.value}>Boston, MA</span>
              </div>
              <div>
                <span className={styles.key}>education</span>
                <span className={styles.value}>MS Data Analytics Engineering, Northeastern University (Expected Aug 2026)</span>
              </div>
              <Row gap="8" wrap marginTop="4">
                {social.filter((i) => i.essential && i.link).map((item) =>
                  item.link && (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.tag}
                      style={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </Row>
            </div>
          </div>

          {/* intro */}
          <div className={styles.block}>
            <Prompt cmd="cat intro.txt" />
            <div className={styles.output}>
              <span className={styles.comment}># About me</span>
              <Column textVariant="body-default-s" gap="m" style={{ color: "#f8f8f2", lineHeight: "1.7" }}>
                {about.intro.description}
              </Column>
            </div>
          </div>

          {/* experience */}
          <div className={styles.block}>
            <Prompt cmd="ls -l experience/" />
            <div className={styles.output}>
              <span className={styles.comment}># Work history</span>
              {about.work.experiences.map((exp, i) => (
                <div key={i} className={styles.jobBlock}>
                  <div className={styles.jobHeader}>
                    <span className={styles.value} style={{ fontWeight: 600 }}>{exp.role}</span>
                    <span className={styles.dimValue}>@ {exp.company}</span>
                    <span className={styles.dimValue}>[{exp.timeframe}]</span>
                  </div>
                  {exp.achievements.map((a: React.ReactNode, j: number) => (
                    <div key={j} className={styles.bullet}>{a}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* education */}
          <div className={styles.block}>
            <Prompt cmd="cat education.txt" />
            <div className={styles.output}>
              {about.studies.institutions.map((inst, i) => (
                <div key={i} className={styles.jobBlock}>
                  <span className={styles.value} style={{ fontWeight: 600 }}>{inst.name}</span>
                  <span className={styles.dimValue}>{inst.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* skills */}
          <div className={styles.block}>
            <Prompt cmd="ls skills/" />
            <div className={styles.output}>
              {about.technical.skills.map((skill, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  <span className={styles.comment}># {skill.title}</span>
                  <div className={styles.tagRow}>
                    {skill.tags?.map((tag, j) => (
                      <span key={j} className={styles.tag}>{tag.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* cursor blink */}
          <div className={styles.block}>
            <Prompt cmd="" />
          </div>

        </div>
      </div>
    </>
  );
}
