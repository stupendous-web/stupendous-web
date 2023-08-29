import { useState } from "react";
import NextLink from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Menu() {
  const [backgroundClass, setBackgroundClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const links = [
    { href: "projects", title: "Projects" },
    { href: "mood", title: "Mood" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  const showMenu = () => {
    setIsOpen(true);
    setBackgroundClass("slide-in-right");
  };

  const hideMenu = () => {
    setIsOpen(false);
    setBackgroundClass("slide-out-right");
  };

  return (
    <>
      <Center
        bg={colorMode === "dark" ? "gray.800" : "gray.100"}
        h={"100vh"}
        w={"100%"}
        position={"fixed"}
        top={0}
        left={0}
        className={backgroundClass}
        style={{
          transform: "translateX(100%)",
        }}
      >
        <List spacing={6}>
          {links.map((link, key) => {
            return (
              <ListItem key={key}>
                <Link
                  as={NextLink}
                  href={"/" + link.href}
                  title={link.title + " | Stupendous Web"}
                  onClick={() => hideMenu()}
                >
                  <Heading as={"p"} size={["2xl", "3xl"]}>
                    {link.title}
                  </Heading>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Center>
      <Box w={16} position={"fixed"} top={0} hideFrom={"sm"} ml={4}>
        <Link
          as={NextLink}
          href={"/"}
          title={
            "Stupendous Web | If you want to build community, build stupendous software"
          }
        >
          <Image
            src={logo}
            alt={"Logo for Stupendous Web's web and app development services"}
          />
        </Link>
      </Box>
      <Flex position={"fixed"} top={4} right={4} hideFrom={"sm"}>
        <Box cursor={"pointer"} pr={4} onClick={() => toggleColorMode()}>
          {colorMode === "dark" ? "🌝" : "🌚"}
        </Box>
        <Box cursor={"pointer"}>
          {isOpen ? (
            <RiCloseFill
              color={colorMode === "dark" ? "white" : "black"}
              size={32}
              onClick={hideMenu}
            />
          ) : (
            <RiMenuFill
              color={colorMode === "dark" ? "white" : "black"}
              size={32}
              onClick={showMenu}
            />
          )}
        </Box>
      </Flex>
    </>
  );
}
