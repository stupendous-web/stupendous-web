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
  RiServerLine,
  RiCustomerServiceLine,
  RiSearchLine,
  RiBankCardLine,
  RiArticleLine,
  RiLineChartLine,
  RiArrowRightLine,
} from "react-icons/ri";
import NextLink from "next/link";

export default function Solutions() {
  const solutions = [
    {
      heading: "Hosting",
      icon: <RiServerLine size={32} />,
    },
    {
      heading: "Support",
      icon: <RiCustomerServiceLine size={32} />,
    },
    {
      heading: "SEO & ASO",
      icon: <RiSearchLine size={32} />,
    },
    {
      heading: "Payment Processing",
      icon: <RiBankCardLine size={32} />,
    },
    {
      heading: "Publishing",
      icon: <RiArticleLine size={32} />,
    },
    {
      heading: "Analytics",
      icon: <RiLineChartLine size={32} />,
    },
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "400px"]} mb={2}>
        <GridItem colSpan={[8, 4]}>
          <SimpleGrid columns={4} spacing={2} h={["100%", "400px"]}>
            {solutions.map((solution) => (
              <GridItem
                key={solution.heading}
                colSpan={[2, 1]}
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
                  I love offering a comprehensive list of software development
                  services, leaving <Text as={"i"}>you</Text> more time and
                  creativity to focus on what you love.
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
