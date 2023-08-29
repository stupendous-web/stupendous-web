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
      href: "custom-web-app-development-services",
      title: "Custom Web App Development Services",
    },
    {
      href: "website-development-services",
      title: "Website Development Services",
    },
    {
      href: "mobile-app-design-service",
      title: "Mobile App Design Services",
    },
    {
      href: "logo-design-services",
      title: "Logo Design Services",
    },
  ];

  const industries = [
    {
      href: "healthcare-web-development",
      title: "Healthcare Web Development",
    },
    {
      href: "finance-web-development",
      title: "Finance Web Development",
    },
    {
      href: "real-estate-page-design",
      title: "Real Estate Page Design",
    },
    {
      href: "insurance-web-development-services",
      title: "Insurance Web Development Services",
    },
  ];

  const technologies = [
    {
      href: "nextjs",
      title: "NextJS",
    },
    {
      href: "expo",
      title: "Expo",
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
            <List mb={4}>
              {links.map((link) => (
                <ListItem key={link.href}>
                  <Link
                    as={NextLink}
                    href={`/${link.href}`}
                    title={`${link.title} | Stupendous Web`}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Text fontSize={".75rem"} fontWeight={"bold"} mb={0}>
              Blogs
            </Text>
            <List mb={4}>
              <ListItem>
                <Link
                  as={NextLink}
                  href={"https://hellostupendous.com"}
                  title={"The Stupendous Web Blog"}
                  target={"_blank"}
                >
                  Hello Stupendous
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  as={NextLink}
                  href={"https://devgotchas.com"}
                  title={
                    "Dev Gotchas | Stupendous Web | If you want to build community, build stupendous software"
                  }
                  target={"_blank"}
                >
                  Dev Gotchas
                </Link>
              </ListItem>
            </List>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card variant={"transparent"} pt={[0, 4]}>
            <List mb={4}>
              {services.map((service) => (
                <ListItem key={service.href}>
                  <Link
                    as={NextLink}
                    href={`/${service.href}`}
                    title={`${service.title} | Stupendous Web`}
                  >
                    {service.title}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Text fontSize={".75rem"} fontWeight={"bold"} mb={0}>
              Some Industries
            </Text>
            <List mb={4}>
              {industries.map((industry) => (
                <ListItem key={industry.href}>
                  <Link
                    as={NextLink}
                    href={`/${industry.href}`}
                    title={`${industry.title} | Stupendous Web`}
                  >
                    {industry.title}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Text fontSize={".75rem"} fontWeight={"bold"} mb={0}>
              Some Technologies
            </Text>
            <List mb={4}>
              {technologies.map((technology) => (
                <ListItem key={technology.href}>
                  <Link
                    as={NextLink}
                    href={`/${technology.href}`}
                    title={`${technology.title} | Stupendous Web`}
                  >
                    {technology.title}
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
                  "Stupendous Web | If you want to build community, build stupendous software"
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
