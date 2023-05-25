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
  const { services } = useGlobal();
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  return (
    <Box w={"100%"} position={"fixed"} top={0} left={0} p={8} hideBelow={"sm"}>
      <Center>
        {links.map((link, key) =>
          link.title === "Services" ? (
            <Box key={link.href} mr={8}>
              <Popover trigger={"hover"}>
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
                <PopoverContent>
                  <PopoverBody>
                    <List spacing={4}>
                      {services.map((service) => (
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
                      <ListItem>
                        <Link
                          as={NextLink}
                          href={"/services/web-app-development"}
                          title={
                            "Web App Development | Software Development Services | Stupendous Web"
                          }
                          color={"white"}
                        >
                          Web Apps
                        </Link>
                      </ListItem>
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
