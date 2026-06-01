"use client";

import {
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  tags?: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  content,
  description,
  tags = [],
  link,
}) => {
  return (
    <div className={styles.card}>
      <Flex
        s={{ direction: "column" }}
        fillWidth
        vertical="center"
        style={{ gap: "4px" }}
      >
        {title && (
          <Column flex={5} gap="8">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
            {tags.length > 0 && (
              <Row wrap gap="8">
                {tags.map((tag) => (
                  <Tag key={tag} size="s" label={tag} />
                ))}
              </Row>
            )}
          </Column>
        )}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="8">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">View details</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </div>
  );
};
