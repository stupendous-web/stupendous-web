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
import Image from "next/image";
import CTAButton from "./CTAButton";
import { useEffect, useState } from "react";

export default function Intro() {
  const [productIndex, setProductIndex] = useState(0);
  const [className, setClassName] = useState(undefined);
  const { colorMode } = useColorMode();

  const products = ["websites", "web apps", "mobile apps"];
  const backgrounds = [
    "linear-gradient(90deg, var(--chakra-colors-green-600), var(--chakra-colors-green-200))",
    "linear-gradient(90deg, var(--chakra-colors-blue-600), var(--chakra-colors-blue-200))",
    "linear-gradient(90deg, var(--chakra-colors-orange-600), var(--chakra-colors-orange-200))",
  ];

  useEffect(() => {
    setTimeout(() => {
      setClassName("fade-in");
      setProductIndex(
        productIndex < products.length - 1 ? productIndex + 1 : 0
      );
      setTimeout(() => {
        setClassName(undefined);
      }, 1000);
    }, 2500);
  }, [productIndex]);

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 3]}>
          <Card pt={3}>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Box>
                <Heading as={"p"} fontSize={["2rem", "3rem"]} mb={[8, 4]}>
                  Build engaging
                  <br />
                  <Text
                    as={"span"}
                    className={className}
                    fontSize={["3rem", "4rem"]}
                    style={{
                      backgroundImage: backgrounds[productIndex],
                      "-webkit-background-clip": "text",
                      backgroundClip: "text",
                      "-webkit-text-fill-color": "transparent",
                    }}
                  >
                    {products[productIndex]}
                  </Text>
                  <br />
                  for your community.
                </Heading>
              </Box>
              <Box>
                <Text>
                  Got something to share? Engage with your community and improve
                  your brand and credibility with my web and app development
                  services.
                </Text>
                <CTAButton />
                <Link
                  as={NextLink}
                  href={"/services"}
                  title={"Services | Stupendous Web"}
                >
                  <Button
                    rightIcon={<RiArrowRightLine />}
                    bg={colorMode === "dark" ? "white" : "black"}
                    color={colorMode === "dark" ? "black" : "white"}
                    border={"solid 1px"}
                    mb={[0, 4, 4, 4, 4, 0]}
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
                "Web developer on computer talking about web and app development services"
              }
              fill
              style={{ objectFit: "cover" }}
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
  );
}
