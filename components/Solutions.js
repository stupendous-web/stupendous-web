import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  RiPagesLine,
  RiWindowLine,
  RiSmartphoneLine,
  RiArrowRightLine,
} from "react-icons/ri";
import NextLink from "next/link";

export default function Solutions() {
  const solutions = [
    {
      heading: "Websites",
      icon: <RiPagesLine size={32} />,
    },
    {
      heading: "Web Apps",
      icon: <RiWindowLine size={32} />,
    },
    {
      heading: "iOS and Android Apps",
      icon: <RiSmartphoneLine size={32} />,
    },
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "400px"]} mb={2}>
        <GridItem colSpan={[8, 3]}>
          <SimpleGrid columns={3} spacing={2} h={["100%", "400px"]}>
            {solutions.map((solution) => (
              <GridItem
                key={solution.heading}
                colSpan={[3, 1]}
                h={["100%", "200px"]}
              >
                <Card>
                  <Flex
                    direction={"column"}
                    justify={"space-between"}
                    h={"100%"}
                  >
                    <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                      {solution.heading}
                    </Heading>
                    {solution?.icon}
                  </Flex>
                </Card>
              </GridItem>
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card variant={"transparent"} pt={2} pl={4}>
            <Flex direction={"column"} justify={"space-between"} h={"100%"}>
              <Box>
                <Heading as={"h1"}>Software Development Services</Heading>
                <Text>
                  All my software development services include hosting, support,
                  search engine optimization (SEO), app store optimization
                  (ASO), payment processing, publishing, analytics, and more.
                </Text>
              </Box>
              <Link as={NextLink} href={"/services"}>
                <Button
                  bg={"transparent"}
                  border={"solid 1px"}
                  _hover={{ bg: "transparent" }}
                  rightIcon={<RiArrowRightLine />}
                  mb={[0, -2]}
                >
                  <Box mr={4}>Discover More</Box>
                </Button>
              </Link>
            </Flex>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
