import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import {
  RiVideoFill,
  RiMailFill,
  RiPhoneFill,
  RiToolsFill,
  RiPieChartFill,
  RiFileTextFill,
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
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Contact() {
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  const contactLinks = [
    {
      anchor: "FREE consultation",
      href: "https://cal.com/stupendousweb/consultation",
      icon: RiVideoFill,
    },
    {
      anchor: "topher@stupendousweb.com",
      href: "mailto:topher@stupendousweb.com",
      icon: RiMailFill,
    },
    {
      anchor: "+1 702.308.9375",
      href: "tel:7023089375",
      icon: RiPhoneFill,
    },
  ];

  const adminLinks = [
    {
      anchor: "1-1",
      href: "https://cal.com/stupendousweb/client-1-1",
      icon: RiVideoFill,
    },
    {
      anchor: "Feature Requests",
      href: "https://stupendousweb.atlassian.net/jira/projects",
      icon: RiToolsFill,
    },
    {
      anchor: "Analytics",
      title: "NextJS Website Analytics Dashboard",
      href: "https://stupendousanalytics.com",
      icon: RiPieChartFill,
    },
    {
      anchor: "Content Management",
      href: "https://wordpress.com",
      icon: RiFileTextFill,
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Contact | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Contact
              </Heading>
              <Text as={"code"}>
                Let&apos;s talk goals. Get in touch below or schedule your 2
                FREE consultations. You&apos;ll receive a creative brief,
                project plan, and secret website where you can preview your
                project. Lastly, we&apos;ll launch your website and app to the
                internet!{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <SimpleGrid columns={5} spacing={2}>
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <List fontSize={"lg"} mb={8} __css={{ columns: 1 }}>
                    {contactLinks.map((link, index) => (
                      <ListItem
                        key={link.href}
                        borderBottom={
                          index < contactLinks.length - 1 ? "solid 1px" : "none"
                        }
                        borderColor={
                          colorMode === "dark" ? "gray.700" : "gray.200"
                        }
                        display={"flex"}
                        py={4}
                      >
                        <ListIcon as={link.icon} color={"primary.500"} mr={4} />
                        <Link
                          as={NextLink}
                          href={link.href}
                          title={link.title}
                          lineHeight={1}
                          color={"primary.500"}
                        >
                          {link.anchor}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                  <Heading as={"h2"} size={"lg"} mb={4}>
                    Clients
                  </Heading>
                  <List fontSize={"lg"} mb={8} __css={{ columns: 1 }}>
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
                        <ListIcon as={link.icon} color={"primary.500"} mr={4} />
                        <Link
                          as={NextLink}
                          href={link.href}
                          title={link.title}
                          lineHeight={1}
                          color={"primary.500"}
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
