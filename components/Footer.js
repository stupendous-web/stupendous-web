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
    { href: "/projects", title: "Projects" },
    { href: "/mood", title: "Mood" },
    { href: "/services", title: "Services" },
    { href: "/contact", title: "Contact" },
    { href: "/2022", title: "2022 Review" },
    { href: "/articles", title: "Articles" },
  ];

  const services = [
    { href: "/services/web-app-development", title: "Web App Development" },
    { href: "/services/web-site-development", title: "Web Site Development" },
    {
      href: "/services/mvp-software-development",
      title: "MVP Software Development",
    },
    {
      href: "/services/software-consultation",
      title: "Software Consultation",
    },
  ];

  const projects = [
    { href: "https://stupendousanalytics.com", title: "Stupendous Analytics" },
    { href: "https://devgotchas.com", title: "Dev Gotchas" },
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
                    href={link.href}
                    title={`${link.title} | Software Development Services | Stupendous Web`}
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
              {services.map((link, key) => (
                <ListItem key={key}>
                  <Link
                    as={NextLink}
                    href={link.href}
                    title={`${link.title} | Software Development Services | Stupendous Web`}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List mb={[4, 0]}>
              {projects.map((link, key) => (
                <ListItem key={key}>
                  <Link
                    as={NextLink}
                    href={link.href}
                    title={`${link.title} | Software Development Services | Stupendous Web`}
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
            <Text as={"strong"} fontSize={"lg"}>
              <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                topher@stupendousweb.com
              </Link>
            </Text>
            <Flex mt={2} mb={8}>
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
                  "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
                }
              >
                Stupendous Web
              </Link>{" "}
              2022. All rights reserved.
            </Text>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
