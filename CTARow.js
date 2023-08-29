import {
  AspectRatio,
  Box,
  Button,
  Card,
  Flex,
  GridItem,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import stock0 from "./images/stock/0.jpg";
import CTAButton from "./components/CTAButton";
import NextLink from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export default function CTARow({
  alt = "People gathered around computer talking about web application development services",
}) {
  const { colorMode } = useColorMode();

  return (
    <>
      <GridItem colSpan={[5, 2]}>
        <AspectRatio
          ratio={1}
          shadow={"md"}
          transition={"all .66s"}
          borderRadius={"md"}
          overflow={"hidden"}
          _hover={{ shadow: "hover" }}
        >
          <Image
            src={stock0}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </AspectRatio>
      </GridItem>
      <GridItem colSpan={[5, 3]}>
        <Card>
          <Flex h={"100%"} direction={"column"} justify={"space-between"}>
            <Box>
              <Heading as={"p"} mb={4}>
                Start your Project Now
              </Heading>
              <Text>
                Scheduling your free consultation takes as little as seconds.
                Click below to start building something your audiences will
                love.
              </Text>
            </Box>
            <Box>
              <CTAButton />
              <Link
                as={NextLink}
                href={"/services/software-consultation"}
                title={"Software Consultation | Stupendous Web"}
              >
                <Button
                  rightIcon={<RiArrowRightLine />}
                  bg={colorMode === "dark" ? "white" : "black"}
                  color={colorMode === "dark" ? "black" : "white"}
                  border={"solid 1px"}
                  _hover={{
                    bg: colorMode === "dark" ? "white" : "black",
                  }}
                >
                  <Box mr={4}>Learn More</Box>
                </Button>
              </Link>
            </Box>
          </Flex>
        </Card>
      </GridItem>
    </>
  );
}
