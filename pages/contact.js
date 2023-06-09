import Image from "next/image";
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
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";

import isometric from "../images/isometrics/isometric-2-3.png";

export default function Contact() {
  const { setIsLoading } = useGlobal();

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

  return (
    <>
      <Head>
        <title>Contact | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={[8, 0]}>
            <Image
              src={isometric}
              alt={"Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text as={"code"} color={"white"}>
              Let&apos;s talk goals. Get in touch below or schedule your 2 FREE
              consultations. You&apos;ll receive a creative brief, project plan,
              and secret website where you can preview your project. Lastly,
              we&apos;ll launch your website and app to the internet!{" "}
              <Text as={"span"} className={"flash"}>
                ▌
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} py={8}>
        <Heading as={"h1"} fontSize={["4rem", "12rem"]}>
          Contact
        </Heading>
      </Container>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <List fontSize={"lg"} mb={8} __css={{ columns: 1 }}>
              {contactLinks.map((link, index) => (
                <ListItem
                  key={link.href}
                  borderBottom={
                    index < contactLinks.length - 1 ? "solid 1px" : "none"
                  }
                  borderColor={"primary.500"}
                  display={"flex"}
                  py={4}
                >
                  <ListIcon as={link.icon} color={"primary.500"} mr={4} />
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
                  borderColor={"primary.500"}
                  display={"flex"}
                  py={4}
                >
                  <ListIcon as={link.icon} color={"primary.500"} mr={4} />
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
          </Box>
        </Flex>
      </Container>
    </>
  );
}
