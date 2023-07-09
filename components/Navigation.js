import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    { href: "projects", title: "Projects" },
    { href: "mood", title: "Mood" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  return (
    <Box
      bg={colorMode === "dark" ? "black" : "white"}
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      borderBottom={"solid 1px"}
      borderColor={colorMode === "dark" ? "white" : "gray.100"}
      hideBelow={"sm"}
    >
      <Container maxW={"container.xl"}>
        <Flex>
          <Box w={16} mr={4}>
            <Link
              as={NextLink}
              href={"/"}
              title={
                "Web and App Development Services | Stupendous Web | If you want to build community, build stupendous software"
              }
            >
              <Image
                src={logo}
                alt={
                  "The Logo for Stupendous Web's web and app development services"
                }
              />
            </Link>
          </Box>
          {links.map((link, key) => (
            <Flex
              key={key}
              align={"center"}
              p={4}
              borderColor={colorMode === "dark" ? "white" : "black"}
            >
              <Link
                key={link.href}
                as={NextLink}
                href={`/${link.href}`}
                title={`${link.title} | Web and App Development Services | Stupendous Web`}
                fontWeight={"bold"}
              >
                <Text lineHeight={1} m={0} px={4}>
                  {link.title}
                </Text>
              </Link>
            </Flex>
          ))}
          <Flex
            align={"center"}
            ml={"auto"}
            pl={4}
            cursor={"pointer"}
            onClick={() => toggleColorMode()}
          >
            {colorMode === "dark" ? "🌝" : "🌚"}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
