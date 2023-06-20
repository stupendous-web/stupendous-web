import {
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
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
} from "react-icons/ri";

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
    <Container maxW={"container.xl"} pt={[0, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "400px"]} mb={2}>
        <GridItem colSpan={[8, 4]}>
          <SimpleGrid columns={4} spacing={2} h={["100%", "400px"]}>
            {solutions.map((solution) => (
              <GridItem
                key={solution.heading}
                colSpan={1}
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
          <Card variant={"transparent"} pt={3} pl={4}>
            <Heading as={"h1"}>Software Development Services</Heading>
            <Text>
              I love offering a comprehensive list of software development
              services, leaving <Text as={"i"}>you</Text> more time and
              creativity to focus on what you love.
            </Text>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
