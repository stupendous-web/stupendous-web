import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import {
  RiExternalLinkLine,
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
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CTAModal from "../components/CTAModal";

export default function Contact() {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  const contactLinks = [
    {
      text: "topher@stupendousweb.com",
      heading: "Email",
      href: "mailto:topher@stupendousweb.com",
      icon: <RiMailLine size={32} />,
    },
    {
      text: "+1 702.308.9375 ",
      heading: "Text or Call",
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
              <GridItem colSpan={[6, 2]} h={["100%", "394px"]}>
                <Card
                  bg={"primary.500"}
                  _hover={{ bg: "primary.500" }}
                  cursor={"pointer"}
                  onClick={() => setIsModalShowing(true)}
                >
                  <Flex
                    direction={"column"}
                    justify={"space-between"}
                    h={"100%"}
                  >
                    <Box>
                      <Heading color={"white"} mb={4}>
                        Get Started Now
                      </Heading>
                      <Text color={"white"}>
                        Request an estimate for your consultation in under two
                        minutes and receive it in under a few hours right to
                        your inbox!
                      </Text>
                    </Box>
                    <RiExternalLinkLine size={32} color={"white"} />
                  </Flex>
                </Card>
              </GridItem>
              {contactLinks.map((link) => (
                <GridItem key={link.href} colSpan={[6, 2]}>
                  <Card>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Link as={NextLink} href={link.href}>
                        <Heading mb={4}>{link.heading}</Heading>
                        <Text>{link.text}</Text>
                      </Link>
                      <Link as={NextLink} href={link.href}>
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
      <CTAModal isOpen={isModalShowing} setIsOpen={setIsModalShowing} />
    </>
  );
}
