"use client";

import React, { useEffect, useState } from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = structure.filter((s) => s.display).map((s) => s.title);
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-10% 0px -75% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [structure]);

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      left="0"
      style={{ top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap" }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
    >
      {structure
        .filter((section) => section.display)
        .map((section, index) => {
          const isActive = activeSection === section.title;
          return (
            <Flex
              key={index}
              cursor="interactive"
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, 80)}
              style={{
                transform: isActive ? "scale(1.15)" : "scale(1)",
                transformOrigin: "left center",
                transition: "transform 0.3s ease",
              }}
            >
              <Flex
                height="1"
                background={isActive ? "brand-strong" : "neutral-weak"}
                style={{
                  minWidth: isActive ? "28px" : "16px",
                  transition: "min-width 0.3s ease, background 0.3s ease",
                }}
              />
              <Text
                style={{
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 0.3s ease, font-weight 0.3s ease",
                }}
                onBackground={isActive ? "neutral-strong" : "neutral-weak"}
              >
                {section.title}
              </Text>
            </Flex>
          );
        })}
    </Column>
  );
};

export default TableOfContents;
