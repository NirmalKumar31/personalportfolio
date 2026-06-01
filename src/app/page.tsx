import {
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  IconButton,
  Schema,
  Meta,
  Heading,
} from "@once-ui-system/core";
import { home, about, work, person, social, baseURL } from "@/resources";
import { TypewriterHeadline, CountUp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const stats = [
  { value: 60,    suffix: "%",  label: "Quality incidents reduced" },
  { value: 95,    suffix: "%",  label: "Report prep time saved"     },
  { value: 150,   suffix: "M+", label: "Records processed"          },
  { value: 93,    suffix: "%",  label: "ML model accuracy"          },
];

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="l">
        <Column maxWidth="s" gap="m">
          {home.featured.display && (
            <RevealFx fillWidth paddingTop="16" paddingBottom="32">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          {/* Typewriter + gradient headline */}
          <RevealFx translateY="4" fillWidth paddingBottom="4">
            <Heading wrap="balance" variant="display-strong-l">
              <TypewriterHeadline text="Data Engineer and Data Analyst" />
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth paddingBottom="24">
            <Text
              onBackground="neutral-strong"
              variant="heading-default-xl"
              style={{ lineHeight: "1.4", fontWeight: 400 }}
            >
              {home.subline}
            </Text>
          </RevealFx>

          {/* CountUp stats strip */}
          <RevealFx delay={0.3} fillWidth paddingBottom="24">
            <Row gap="l" wrap>
              {stats.map((s) => (
                <Column key={s.label} gap="4">
                  <Text variant="display-strong-xs" onBackground="brand-weak">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {s.label}
                  </Text>
                </Column>
              ))}
            </Row>
          </RevealFx>

          <RevealFx delay={0.45} paddingBottom="8">
            <Row gap="16" wrap>
              <Button
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                  Learn more about me
                </Row>
              </Button>
              <Button
                data-border="rounded"
                href={work.path}
                variant="secondary"
                size="m"
                weight="default"
                prefixIcon="grid"
                arrowIcon
              >
                Explore my projects
              </Button>
            </Row>
          </RevealFx>

          <RevealFx delay={0.6}>
            <Row gap="8" wrap>
              {social
                .filter((item) => item.essential && item.link)
                .map((item) => (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    variant="secondary"
                    size="l"
                  />
                ))}
            </Row>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
