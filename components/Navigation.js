import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import {
  Box,
  Center,
  Link,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

export default function Navigation() {
  const { services: legacyServices } = useGlobal();
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];
  const services = [
    { href: "web-app-development", anchor: "Web App Development" },
    { href: "mvp-software-development", anchor: "MVP Software Development" },
  ];

  return (
    <Box w={"100%"} position={"fixed"} top={0} left={0} p={8} hideBelow={"sm"}>
      <Center>
        {links.map((link, key) =>
          link.title === "Services" ? (
            <Box key={link.href} mr={8}>
              <Popover trigger={"hover"} gutter={32}>
                <PopoverTrigger>
                  <Link
                    as={NextLink}
                    href={`/${link.href}`}
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    {link.title}
                  </Link>
                </PopoverTrigger>
                <PopoverContent minW={"600px"}>
                  <PopoverBody>
                    <List spacing={4}>
                      {legacyServices.map((service) => (
                        <ListItem key={service.target}>
                          <Link
                            as={NextLink}
                            href={`/services#${service.target}`}
                            title={`${service.longTitle} | Software Development Services | Stupendous Web`}
                            color={"white"}
                          >
                            {service.shortTitle}
                          </Link>
                        </ListItem>
                      ))}
                      {services?.map((service) => (
                        <ListItem key={service.anchor}>
                          <Link
                            as={NextLink}
                            href={`/services/${service.href}`}
                            title={`${service.anchor} | Software Development Services | Stupendous Web`}
                            color={"white"}
                          >
                            {service.anchor}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          ) : (
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
          )
        )}
      </Center>
    </Box>
  );
}
