import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Tooltip,
  Link,
  IconButton,
} from "@chakra-ui/react";

import isometric from "/images/isometrics/isometric-1-3-white.png";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";

class CTA extends React.Component {
  render() {
    return (
      <Flex
        align={"center"}
        justify={"center"}
        bg={"primary.500"}
        h={[null, "calc(100vh - 212px)"]}
        py={8}
      >
        <Container maxW={"container.xl"} color={"white"}>
          <Flex direction={["column", "row"]} align={"center"}>
            <Box>
              <Heading size={["xl", "3xl"]} mb={16}>
                Your two consultations are now FREE!
              </Heading>
              <Flex align={"center"} mb={8}>
                <Link
                  as={NextLink}
                  href={"https://cal.com/stupendousweb/consultation"}
                >
                  <Button variant={"bonkers"} size={"lg"} mr={8}>
                    Get yours Now
                  </Button>
                </Link>
                <Tooltip label={"Email me!"} fontSize={"md"}>
                  <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                    <IconButton
                      color={"white"}
                      variant={"link"}
                      aria-label={"Email me!"}
                      size={"lg"}
                      icon={<RiMailFill />}
                    />
                  </Link>
                </Tooltip>
                <Tooltip label={"Call or Text Me!"} fontSize={"md"}>
                  <Link as={NextLink} href={"tel:5108906429"}>
                    <IconButton
                      color={"white"}
                      variant={"link"}
                      aria-label={"Email me!"}
                      size={"lg"}
                      icon={<RiPhoneFill />}
                    />
                  </Link>
                </Tooltip>
              </Flex>
              <Text>
                Find your audience, refine your product, and create solutions
                for your customers in the first of your two free consultations.
              </Text>
            </Box>
            <Box hideBelow={"sm"}>
              <Image
                src={isometric}
                alt={
                  "Your two consultations are now FREE! | Software Development Services"
                }
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
    );
  }
}

export default CTA;
