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
      href: "website-design-services",
      anchor: "Websites",
      title: "Website Design Services",
      icon: <RiPagesLine size={32} />,
    },
    {
      href: "web-application-development-services",
      anchor: "Web Apps",
      title: "Web Application Development",
      icon: <RiWindowLine size={32} />,
    },
    {
      href: "iphone-app-development-services",
      anchor: "Mobile Apps",
      title: "iPhone App Development Services",
      icon: <RiSmartphoneLine size={32} />,
    },
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} mb={2}>
        <GridItem colSpan={[8, 3]}>
          <SimpleGrid columns={3} spacing={2}>
            {solutions.map((solution) => (
              <GridItem
                key={solution.anchor}
                colSpan={[3, 1]}
                h={["100%", "200px"]}
              >
                <Link
                  as={NextLink}
                  href={`/services/${solution.href}`}
                  title={`${solution.title} | Web and App Development Services | Stupendous Web`}
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
        <GridItem colSpan={[8, 3]}>
          <Card variant={"transparent"} pt={2} pl={4}>
            <Heading as={"h1"}>Web and App Development Services</Heading>
            <Text>
              Do your thing. All of my web and app development services include
              hosting, support, a payment processor, a CMS, analytics, and more
              so you can focus on creating your product.
            </Text>
            <Link
              as={NextLink}
              href={"/services"}
              title={
                "Services | Web and App Development Services | Stupendous Web"
              }
            >
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
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
