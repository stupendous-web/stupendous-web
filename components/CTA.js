import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  Link,
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
        h={["calc(100vh - 304px)", "calc(100vh - 176px)"]}
        py={8}
      >
        <Container maxW={"container.xl"}>
          <SimpleGrid columns={[1, 2]} spacing={4}>
            <Box>
              <Heading size={"4xl"} mb={4}>
                Your two consultations are now FREE!
              </Heading>
              <Flex align={"center"} mt={8}>
                <Box mr={4}>
                  <Link
                    as={NextLink}
                    href={"https://cal.com/stupendousweb/consultation"}
                  >
                    <Button color={"white"} variant={"outline"} size={"lg"}>
                      Get yours Now
                    </Button>
                  </Link>
                </Box>
                <Box mr={4}>
                  <Tooltip label={"Email me!"} fontSize={"md"}>
                    <Link
                      as={NextLink}
                      href={"mailto:topher@stupendousweb.com"}
                    >
                      <Icon as={RiMailFill} boxSize={8} />
                    </Link>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip label={"Call or Text Me!"} fontSize={"md"}>
                    <Link as={NextLink} href={"tel:5108906429"}>
                      <Icon as={RiPhoneFill} boxSize={8} />
                    </Link>
                  </Tooltip>
                </Box>
              </Flex>
              <Text mt={8}>
                Find your audience, refine your product, and create solutions
                for your customers in the first of your two free consultations.
              </Text>
            </Box>
            <Box hideBelow={"sm"}>
              <Image src={isometric} alt={"Software Development Services"} />
            </Box>
          </SimpleGrid>
        </Container>
      </Flex>
    );
  }
}

export default CTA;
