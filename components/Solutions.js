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
  RiPaintBrushLine,
} from "react-icons/ri";
import NextLink from "next/link";
import Image from "next/image";
import nextJS from "../images/technologies/nextjs.svg";
import expo from "../images/technologies/expo.svg";

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
      href: "mobile-app-development-services",
      anchor: "Mobile Apps",
      title: "Mobile App Development Services",
      icon: <RiSmartphoneLine size={32} />,
    },
    {
      href: "logo-design",
      anchor: "Branding",
      title: "Logo Design",
      icon: <RiPaintBrushLine size={32} />,
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
            <Flex mb={8}>
              <Box mr={4}>
                <Link
                  as={NextLink}
                  href={"/services/nextjs"}
                  title={
                    "NextJS | Web and App Development Services | Stupendous Web"
                  }
                >
                  <Image src={nextJS} alt={"Nextjs"} height={54} width={54} />
                </Link>
              </Box>
              <Link
                as={NextLink}
                href={"/services/expo"}
                title={
                  "Expo | Web and App Development Services | Stupendous Web"
                }
              >
                <Image src={expo} alt={"Expo"} height={54} width={54} />
              </Link>
            </Flex>
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
