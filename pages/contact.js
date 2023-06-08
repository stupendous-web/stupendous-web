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
  AspectRatio,
} from "@chakra-ui/react";

import isometric from "../images/isometrics/isometric-2-3.png";
import contact from "../images/pages/contact.png";

export default function Contact() {
  const { setIsLoading } = useGlobal();

  const contactLinks = [
    {
      anchor: "Schedule your FREE consultations",
      href: "https://cal.com/stupendousweb/consultation",
      icon: RiVideoFill,
    },
    {
      anchor: "topher@stupendousweb.com",
      href: "mailto:topher@stupendousweb.com",
      icon: RiMailFill,
    },
    {
      anchor: "+1 510.890.6429 (Call or Text!)",
      href: "tel:5108906429",
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
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text
              as={"span"}
              fontFamily={"mono"}
              fontSize={"64px"}
              float={"left"}
              lineHeight={"60px"}
              pt={1}
              pr={2}
              mb={0}
            >
              L
            </Text>
            <Text as={"span"} fontFamily={"mono"}>
              et&apos;s talk goals. Get in touch below or schedule your 2 FREE
              consultations. You&apos;ll receive a creative brief, project plan,
              and secret website where you can preview your project. Lastly,
              we&apos;ll launch your website and app to the internet!
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
            <AspectRatio maxW={"100%"} ratio={4 / 3} mb={8}>
              <Image
                src={contact}
                alt={"Software Development Services"}
                id={"consulting"}
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>
            <List fontSize={"lg"} mb={8} __css={{ columns: 1 }}>
              {contactLinks.map((link, key) => (
                <ListItem key={key} borderBottom={"solid 1px"} py={4}>
                  <ListIcon as={link.icon} color={"primary.500"} />
                  <Link as={NextLink} href={link.href} title={link.title}>
                    {link.anchor}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Text mb={4}>Clients</Text>
            <List fontSize={"lg"} mb={8} __css={{ columns: 1 }}>
              {adminLinks.map((link, key) => (
                <ListItem key={key} borderBottom={"solid 1px"} py={4}>
                  <ListIcon as={link.icon} color={"primary.500"} />
                  <Link
                    as={NextLink}
                    href={link.href}
                    title={link.title}
                    className={"uk-flex uk-flex-middle"}
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
