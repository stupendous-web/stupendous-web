import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  RiMenuFill,
  RiCloseFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookFill,
  RiGithubFill,
  RiSpotifyFill,
} from "react-icons/ri";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

import isometric11 from "../images/isometrics/isometric-1-1-white.png";
import isometric12 from "../images/isometrics/isometric-1-2-white.png";
import isometric21 from "../images/isometrics/isometric-2-1-white.png";
import isometric22 from "../images/isometrics/isometric-2-2-white.png";
import isometric23 from "../images/isometrics/isometric-2-3-white.png";
import contact from "../images/pages/contact.png";

export default function Menu() {
  const [backgroundClass, setBackgroundClass] = useState("");
  const [isometricStyles, setIsometricStyles] = useState([1, 0, 0, 0, 0]);
  const [menuClass, setMenuClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
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

  const showMenu = () => {
    setIsOpen(true);
    setBackgroundClass("slide-in-right");
    setMenuClass("slide-in-right");
  };

  const hideMenu = () => {
    setIsOpen(false);
    setBackgroundClass("slide-out-right");
    setMenuClass("slide-out-right");
  };

  const changeIsometric = (isometric) => {
    if (isometric === 0) {
      setIsometricStyles([1, 0, 0, 0, 0]);
    }
    if (isometric === 1) {
      setIsometricStyles([0, 1, 0, 0, 0]);
    }
    if (isometric === 2) {
      setIsometricStyles([0, 0, 1, 0, 0]);
    }
    if (isometric === 3) {
      setIsometricStyles([0, 0, 0, 1, 0]);
    }
    if (isometric === 4) {
      setIsometricStyles([0, 0, 0, 0, 1]);
    }
  };

  return (
    <>
      <Box
        bg={"gray.800"}
        w={"100%"}
        position={"fixed"}
        top={0}
        left={0}
        className={backgroundClass}
        style={{
          transform: "translateX(100%)",
        }}
      >
        <Flex align={"center"} h={"100vh"} w={"66.66%"} ml={4}>
          <Flex w={"100%"}>
            <Box w={"25%"}>
              <List spacing={4} mt={1} style={{ columns: 1 }}>
                {socialLinks?.map((link) => (
                  <ListItem key={link.href}>
                    <NextLink
                      href={link.href}
                      title={`Find me on ${link.title}!`}
                      target={"_blank"}
                    >
                      <ListIcon as={link.icon} />
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box w={"75%"}>
              <List spacing={8} style={{ columns: 1 }}>
                {links.map((link, key) => {
                  return (
                    <ListItem
                      key={key}
                      onMouseEnter={() => changeIsometric(key + 1)}
                      onMouseLeave={() => changeIsometric(0)}
                      w={"fit-content"}
                    >
                      <Link
                        as={NextLink}
                        href={"/" + link.href}
                        title={
                          link.title +
                          " | Software Development Services | Stupendous Web"
                        }
                        onClick={() => hideMenu()}
                      >
                        <Heading size={"3xl"}>{link.title}</Heading>
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Flex>
        </Flex>
        <Flex
          align={"center"}
          bg={"primary.500"}
          h={"100%"}
          w={"33.33%"}
          position={"fixed"}
          top={0}
          right={0}
          hideBelow={"sm"}
          className={menuClass}
          style={{
            transform: "translateX(100%)",
          }}
        >
          <Flex
            align={"center"}
            justify={"center"}
            h={"100%"}
            w={"100%"}
            position={"relative"}
            m={40}
          >
            <Image
              src={isometric11}
              alt={"Software Development Services"}
              style={{ position: "absolute", opacity: isometricStyles[0] }}
            />
            <Image
              src={isometric12}
              alt={"Software Development Services"}
              style={{ position: "absolute", opacity: isometricStyles[1] }}
            />
            <Image
              src={isometric21}
              alt={"Software Development Services"}
              style={{ position: "absolute", opacity: isometricStyles[2] }}
            />
            <Image
              src={isometric22}
              alt={"Software Development Services"}
              style={{ position: "absolute", opacity: isometricStyles[3] }}
            />
            <Image
              src={isometric23}
              alt={"Software Development Services"}
              style={{ position: "absolute", opacity: isometricStyles[4] }}
            />
          </Flex>
        </Flex>
      </Box>
      <Box position={"fixed"} top={7} right={4} cursor={"pointer"}>
        {isOpen ? (
          <Box onClick={hideMenu}>
            <Icon as={RiCloseFill} color={"white"} boxSize={8} />
          </Box>
        ) : (
          <Box onClick={showMenu}>
            <Icon as={RiMenuFill} color={"white"} boxSize={8} />
          </Box>
        )}
      </Box>
    </>
  );
}
