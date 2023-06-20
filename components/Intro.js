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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiArrowRightLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import stock4 from "../images/stock/4.jpg";
import { useGlobal } from "../lib/context";
import Image from "next/image";

export default function Intro() {
  const { setIsLoading } = useGlobal();

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "600px"]}>
        <GridItem colSpan={[8, 3]}>
          <Card>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Box>
                <Heading as={"p"} fontSize={["2rem", "4rem"]} mb={4}>
                  Websites, Web Apps, and Phone Apps
                </Heading>
                <Text>
                  I help people with something to share who want to engage with
                  their community by delivering software development services
                  that improve their brand awareness and authority.
                </Text>
              </Box>
              <Box>
                <Link
                  as={NextLink}
                  href={"https://cal.com/stupendousweb/consultation"}
                >
                  <Button
                    bg={"primary.500"}
                    color={"white"}
                    size={"lg"}
                    _hover={{ bg: "primary.500" }}
                    mr={12}
                    rightIcon={<RiArrowRightLine />}
                  >
                    <Box mr={4}>Get yours Now</Box>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <AspectRatio ratio={1} h={"100%"}>
            <Image
              src={stock4}
              alt={"Women Working | Software Development Services"}
              fill
              style={{ objectFit: "cover" }}
              onLoadingComplete={setIsLoading(false)}
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card>
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
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
