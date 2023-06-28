import {
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiArrowRightLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import stock4 from "../images/stock/4.jpg";
import { useGlobal } from "../lib/context";
import Image from "next/image";
import CTAModal from "./CTAModal";
import { useState } from "react";

export default function Intro() {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { colorMode } = useColorMode();
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card pt={1}>
              <Flex h={"100%"} direction={"column"} justify={"space-between"}>
                <Box>
                  <Heading as={"p"} fontSize={["2rem", "4rem"]}>
                    Websites, Web Apps, &amp; Phone Apps
                  </Heading>
                  <Text mb={[4, 0]}>
                    I help people with something to share who want to engage
                    with their community by delivering software development
                    services that improve their brand awareness and authority.
                  </Text>
                </Box>
                <Box>
                  <Button
                    rightIcon={<RiArrowRightLine />}
                    bg={"primary.500"}
                    color={"white"}
                    mr={4}
                    mb={[4, 0]}
                    _hover={{ bg: "primary.500" }}
                    onClick={() => setIsModalShowing(true)}
                  >
                    <Box mr={4}>Request an Estimate</Box>
                  </Button>
                  <Link
                    as={NextLink}
                    href={"/services/software-consultation"}
                    title={
                      "Software Consultation | Software Development Services | Stupendous Web"
                    }
                  >
                    <Button
                      rightIcon={<RiArrowRightLine />}
                      bg={colorMode === "dark" ? "white" : "black"}
                      color={colorMode === "dark" ? "black" : "white"}
                      border={"solid 1px"}
                      _hover={{ bg: colorMode === "dark" ? "white" : "black" }}
                    >
                      <Box mr={4}>Learn More</Box>
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 3]}>
            <AspectRatio
              ratio={1}
              shadow={"md"}
              transition={"all .66s"}
              borderRadius={"md"}
              overflow={"hidden"}
              _hover={{ shadow: "hover" }}
            >
              <Image
                src={stock4}
                alt={
                  "Web Developer on Computer Talking | Software Development Services"
                }
                fill
                style={{ objectFit: "cover" }}
                onLoadingComplete={setIsLoading(false)}
                priority
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
