import NextLink from "next/link";
import {
  RiCursorLine,
  RiMailLine,
  RiPhoneLine,
  RiVideoLine,
  RiToolsLine,
  RiPieChartLine,
  RiFileTextLine,
} from "react-icons/ri";
import {
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Link,
  GridItem,
  Card,
  SimpleGrid,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import FluidHead from "../components/FluidHead";

export default function Contact() {
  const { colorMode } = useColorMode();

  const contactLinks = [
    {
      heading: "Get Started Now!",
      text: "Request an estimate for your consultation in under two minutes and receive it in under a few hours right to your inbox!",
      href: "/services/software-consultation",
      title:
        "Software Consultation | Web and App Development Services | Stupendous Web",
      icon: <RiCursorLine size={32} />,
    },
    {
      heading: "Email",
      text: "topher@stupendousweb.com",
      href: "mailto:topher@stupendousweb.com",
      icon: <RiMailLine size={32} />,
    },
    {
      heading: "Text or Call",
      text: "+1 702.308.9375 ",
      href: "tel:7023089375",
      icon: <RiPhoneLine size={32} />,
    },
  ];

  const adminLinks = [
    {
      anchor: "1-1",
      href: "https://cal.com/stupendousweb/client-1-1",
      icon: RiVideoLine,
    },
    {
      anchor: "Feature Requests",
      href: "https://stupendousweb.atlassian.net/jira/projects",
      icon: RiToolsLine,
    },
    {
      anchor: "Analytics",
      title: "NextJS Website Analytics Dashboard",
      href: "https://stupendousanalytics.com",
      icon: RiPieChartLine,
    },
    {
      anchor: "Content Management",
      href: "https://wordpress.com",
      icon: RiFileTextLine,
    },
  ];

  return (
    <>
      <FluidHead title={"Contact"} />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 2]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Contact
              </Heading>
              <Text as={"code"}>
                After your consultation, you&apos;ll receive a product brief,
                design guide, project plan, quote, and many other resources.
                Once you approve your quote, you&apos;ll receive a secret
                website where you can preview progress at any time. And, when
                you&apos;re ready, we&apos;ll launch your project to the web!{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 6]}>
            <SimpleGrid columns={6} spacing={2}>
              {contactLinks.map((link, index) => (
                <GridItem
                  key={link.href}
                  colSpan={[6, 2]}
                  h={["100%", "394px"]}
                >
                  <Card
                    bg={index === 0 ? "primary.500" : undefined}
                    _hover={{ bg: index === 0 ? "primary.500" : undefined }}
                  >
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Link as={NextLink} href={link.href} title={link.title}>
                        <Heading
                          color={index === 0 ? "white" : undefined}
                          mb={4}
                        >
                          {link.heading}
                        </Heading>
                        <Text color={index === 0 ? "white" : undefined}>
                          {link.text}
                        </Text>
                      </Link>
                      <Link
                        as={NextLink}
                        href={link.href}
                        title={link.title}
                        color={index === 0 ? "white" : undefined}
                      >
                        {link.icon}
                      </Link>
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={[8, 6]}>
                <Card variant={"transparent"} mt={[4, 16]}>
                  <Heading>Clients</Heading>
                  <List fontSize={"lg"} mb={8}>
                    {adminLinks.map((link, index) => (
                      <ListItem
                        key={link.href}
                        borderBottom={
                          index < adminLinks.length - 1 ? "solid 1px" : "none"
                        }
                        borderColor={
                          colorMode === "dark" ? "gray.700" : "gray.200"
                        }
                        display={"flex"}
                        py={4}
                      >
                        <ListIcon as={link.icon} mr={4} />
                        <Link
                          as={NextLink}
                          href={link.href}
                          title={link.title}
                          lineHeight={1}
                        >
                          {link.anchor}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}
