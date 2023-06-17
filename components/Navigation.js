import NextLink from "next/link";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "mood", title: "Mood" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      borderBottom={"solid 1px white"}
      hideBelow={"sm"}
    >
      <Container maxW={"container.xl"}>
        <Flex>
          <Box w={16}>
            <Link
              as={NextLink}
              href={"/"}
              title={
                "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
              }
            >
              <Image
                src={logo}
                alt={"Navigation Logo | Software Development Services"}
              />
            </Link>
          </Box>
          {links.map((link, key) => (
            <Flex
              key={key}
              align={"center"}
              p={4}
              borderRight={"solid 1px white"}
            >
              <Link
                key={link.href}
                as={NextLink}
                href={`/${link.href}`}
                title={`${link.title} | Software Development Services | Stupendous Web`}
                color={"white"}
                fontWeight={"bold"}
              >
                <Text lineHeight={1} m={0} px={4}>
                  {link.title}
                </Text>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
