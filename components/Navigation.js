import NextLink from "next/link";
import { Box, Center, Link } from "@chakra-ui/react";

export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "mood", title: "Mood" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  return (
    <Box w={"100%"} position={"fixed"} top={0} left={0} p={7} hideBelow={"sm"}>
      <Center>
        {links.map((link, key) => (
          <Link
            key={link.href}
            as={NextLink}
            href={`/${link.href}`}
            title={`${link.title} | Software Development Services | Stupendous Web`}
            color={"white"}
            fontWeight={"bold"}
            mr={key < links.length - 1 ? 8 : 0}
          >
            {link.title}
          </Link>
        ))}
      </Center>
    </Box>
  );
}
