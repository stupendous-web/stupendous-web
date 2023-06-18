import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiArrowRightLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import cTA from "../images/cTA.png";
import { useGlobal } from "../lib/context";
import Image from "next/image";

export default function Intro() {
  const { setIsLoading } = useGlobal();

  return (
    <Container maxW={"container.xl"} color={"white"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "600px"]}>
        <GridItem colSpan={[8, 3]}>
          <Flex
            h={"100%"}
            direction={"column"}
            justify={"space-between"}
            bg={"gray.900"}
            _hover={{ bg: "gray.800" }}
            p={4}
          >
            <Box>
              <Heading as={"p"} fontSize={["2rem", "4rem"]} mb={4}>
                Websites, Web Apps, and Phone Apps
              </Heading>
              <Text>
                I help people with something to share who want to engage with
                their community by delivering software development services that
                improve their brand awareness and authority.
              </Text>
            </Box>
            <Box>
              <Link
                as={NextLink}
                href={"https://cal.com/stupendousweb/consultation"}
              >
                <Button
                  colorScheme={"primary"}
                  size={"lg"}
                  mr={12}
                  rightIcon={<RiArrowRightLine />}
                >
                  Get yours Now
                </Button>
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <AspectRatio ratio={1}>
            <Image
              src={cTA}
              alt={"Women Working | Software Development Services"}
              fill
              style={{ objectFit: "cover" }}
              onLoadingComplete={setIsLoading(false)}
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Box bg={"gray.900"} p={4} h={"100%"} _hover={{ bg: "gray.800" }}>
            <Link
              as={NextLink}
              href={"mailto:topher@stupendousweb.com"}
              color={"primary.500"}
            >
              <Text fontWeight={"bold"} m={0}>
                topher@stupendousweb.com
              </Text>
              <Text color={"gray.500"}>Say hi!</Text>
              <RiMailLine size={32} />
            </Link>
            <Divider mt={4} mb={8} />
            <Link as={NextLink} href={"tel:7023089375"} color={"primary.500"}>
              <Text fontWeight={"bold"} m={0}>
                +1 702.308.9375
              </Text>
              <Text color={"gray.500"}>Text or Call</Text>
              <RiPhoneLine size={32} />
            </Link>
            <Divider mt={4} />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
