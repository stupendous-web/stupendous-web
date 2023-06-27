import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  GridItem,
  Divider,
  SimpleGrid,
  Card,
  AspectRatio,
} from "@chakra-ui/react";
import NextLink from "next/link";
import stock1 from "../images/stock/1.jpg";
import { RiMailLine, RiPhoneLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import CTAModal from "./CTAModal";

export default function CTA() {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Flex
              h={"100%"}
              direction={"column"}
              justify={"space-between"}
              bg={"primary.500"}
              p={4}
            >
              <Box>
                <Heading
                  as={"p"}
                  color={"white"}
                  fontSize={["2rem", "4rem"]}
                  mb={4}
                >
                  Quick Estimate
                </Heading>
                <Text color={"white"}>
                  Your audiences are waiting. Take the first step in building
                  your website, web app, and iOS and Android apps. Click below
                  to receive your estimate in just a few hours!
                </Text>
              </Box>
              <Box>
                <Button
                  bg={"white"}
                  color={"primary.500"}
                  _hover={{ bg: "white", color: "primary.500" }}
                  mr={4}
                  mb={[4, 0]}
                  rightIcon={<RiArrowRightLine />}
                  onClick={() => setIsModalShowing(true)}
                >
                  <Box mr={4}>Request yours Now</Box>
                </Button>
                <Link
                  as={NextLink}
                  href={"/services/software-consultation"}
                  title={
                    "Software Consultation | Software Development Services | Stupendous Web"
                  }
                >
                  <Button
                    bg={"transparent"}
                    color={"white"}
                    border={"solid 1px"}
                    _hover={{ bg: "transparent" }}
                    rightIcon={<RiArrowRightLine />}
                  >
                    <Box mr={4}>Learn More</Box>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={[8, 3]}>
            <AspectRatio ratio={1}>
              <Image
                src={stock1}
                alt={
                  "Web Developer Giving a Consultation | Software Development Services"
                }
                fill
                style={{ objectFit: "cover" }}
              />
            </AspectRatio>
          </GridItem>
          <GridItem colSpan={[8, 2]}>
            <Card>
              <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                <Text fontWeight={"bold"} color={"primary.500"} m={0}>
                  topher@stupendousweb.com
                </Text>
                <Text>Say hi!</Text>
                <Box color={"primary.500"}>
                  <RiMailLine size={32} />
                </Box>
              </Link>
              <Divider mt={4} mb={8} />
              <Link as={NextLink} href={"tel:7023089375"}>
                <Text fontWeight={"bold"} color={"primary.500"} m={0}>
                  +1 702.308.9375
                </Text>
                <Text>Text or Call</Text>
                <Box color={"primary.500"}>
                  <RiPhoneLine size={32} />
                </Box>
              </Link>
              <Divider mt={4} />
            </Card>
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTAModal isOpen={isModalShowing} setIsOpen={setIsModalShowing} />
    </>
  );
}
