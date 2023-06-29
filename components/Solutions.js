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
      href: "web-site-development",
      anchor: "Websites",
      title: "Web Site Development",
      icon: <RiPagesLine size={32} />,
    },
    {
      href: "web-app-development",
      anchor: "Web Apps",
      title: "Web App Development",
      icon: <RiWindowLine size={32} />,
    },
    {
      href: "iphone-app-development-services",
      anchor: "iPhone and Android Apps",
      title: "iPhone App Development Services",
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
                <Link
                  as={NextLink}
                  href={`/services/${solution.href}`}
                  title={`${solution.title} | Software Development Services | Stupendous Web`}
                >
                  <Card>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                        {solution.anchor}
                      </Heading>
                      {solution?.icon}
                    </Flex>
                  </Card>
                </Link>
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
