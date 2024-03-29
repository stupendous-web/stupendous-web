import {
  Box,
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
  RiPaintBrushLine,
} from "react-icons/ri";
import NextLink from "next/link";
import Image from "next/image";
import nextJS from "../images/technologies/nextjs.svg";
import expo from "../images/technologies/expo.svg";

export default function Solutions() {
  const solutions = [
    {
      href: "custom-web-app-development-services",
      anchor: "Web Apps",
      icon: <RiWindowLine size={32} />,
    },
    {
      href: "website-development-services",
      anchor: "Websites",
      icon: <RiPagesLine size={32} />,
    },
    {
      href: "mobile-app-design-service",
      anchor: "Mobile Apps",
      icon: <RiSmartphoneLine size={32} />,
    },
    {
      href: "logo-design-services",
      anchor: "Branding",
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
                  href={`/${solution.href}`}
                  title={`${solution.anchor} | Stupendous Web`}
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
            <Flex>
              <Box mr={4}>
                <Link
                  as={NextLink}
                  href={"/nextjs"}
                  title={"NextJS | Stupendous Web"}
                >
                  <Image src={nextJS} alt={"Nextjs"} height={54} width={54} />
                </Link>
              </Box>
              <Link
                as={NextLink}
                href={"/expo"}
                title={"Expo | Stupendous Web"}
              >
                <Image src={expo} alt={"Expo"} height={54} width={54} />
              </Link>
            </Flex>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
