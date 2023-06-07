import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
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
    { href: "/services/web-app-development", title: "Web App Development" },
    {
      href: "/services/mvp-software-development",
      title: "MVP Software Development",
    },
    { href: "https://stupendousanalytics.com", title: "Stupendous Analytics" },
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
    <Box bg={"gray.900"}>
      <Container maxW={"container.xl"} py={8}>
        <SimpleGrid columns={[1, 2]}>
          <Box mb={[8, 0]}>
            <List>
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
          </Box>
          <Box>
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
            <Text fontSize={"xs"} color={"gray.500"}>
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
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
