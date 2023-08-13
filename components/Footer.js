import NextLink from "next/link";
import {
  Card,
  Container,
  Flex,
  GridItem,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiSpotifyFill,
} from "react-icons/ri";

export default function Footer() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "mood", title: "Mood" },
    { href: "services", title: "Services" },
    { href: "faqs", title: "FAQ's" },
    { href: "contact", title: "Contact" },
    { href: "2022", title: "2022 Review" },
  ];

  const services = [
    {
      href: "web-application-development-services",
      title: "Web Application Development Services",
    },
    { href: "website-design-services", title: "Website Design Services" },
    {
      href: "mobile-app-development-services",
      title: "Mobile App Development Services",
    },
    {
      href: "logo-design",
      title: "Logo Design",
    },
  ];

  const socialLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/topherjamesknoll",
      icon: RiLinkedinFill,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/stupendousweb_",
      icon: RiInstagramFill,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/stupendousweb",
      icon: RiTwitterFill,
    },
    {
      title: "Facebook",
      href: "https://facebook.com/stupendousweb",
      icon: RiFacebookFill,
    },
    {
      title: "GitHub",
      href: "https://github.com/stupendous-web",
      icon: RiGithubFill,
    },
    {
      title: "Spotify",
      href: "https://open.spotify.com/user/128910259",
      icon: RiSpotifyFill,
    },
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]} mb={[4, 32]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "200px"]}>
        <GridItem colSpan={[8, 2]}>
          <Card variant={"transparent"} pb={[0, 4]}>
            <List mb={[4, 0]}>
              {links.map((link, key) => (
                <ListItem key={key}>
                  <Link
                    as={NextLink}
                    href={`/${link.href}`}
                    title={`${link.title} | Web and App Development Services | Stupendous Web`}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card variant={"transparent"} pt={[0, 4]}>
            <List mb={4}>
              <ListItem>
                <Link
                  as={NextLink}
                  href={"/custom-web-app-development-services"}
                  title={
                    "Custom Web App Development Services | Web and App Development Services | Stupendous Web"
                  }
                >
                  Custom Web App Development Services
                </Link>
              </ListItem>
              {services.map((link, key) => (
                <ListItem key={key}>
                  <Link
                    as={NextLink}
                    href={`/services/${link.href}`}
                    title={`${link.title} | Web and App Development Services | Stupendous Web`}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 4]}>
          <Card variant={"transparent"}>
            <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
              <Text fontWeight={"bold"}>topher@stupendousweb.com</Text>
            </Link>
            <Flex>
              {socialLinks?.map((link) => (
                <Link
                  as={NextLink}
                  key={link.href}
                  href={link.href}
                  title={`Find me on ${link.title}!`}
                  target={"_blank"}
                  mr={4}
                >
                  <Icon as={link.icon} />
                </Link>
              ))}
            </Flex>
            <Text fontSize={"xs"}>
              &copy; Copyright{" "}
              <Link
                as={NextLink}
                href={"/"}
                title={
                  "Web and App Development Services | Stupendous Web | If you want to build community, build stupendous software"
                }
              >
                Stupendous Web
              </Link>{" "}
              2021 - 2023. All rights reserved.
            </Text>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
