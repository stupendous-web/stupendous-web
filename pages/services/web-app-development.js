import {
  Container,
  Heading,
  Text,
  GridItem,
  Card,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import {
  RiFileSettingsLine,
  RiShoppingCartLine,
  RiQuestionnaireLine,
  RiCustomerServiceLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import FluidHead from "../../components/FluidHead";

export default function WebAppDevelopment() {
  const cards = [
    { heading: "CMS", icon: <RiFileSettingsLine size={32} /> },
    { heading: "E-Commerce", icon: <RiShoppingCartLine size={32} /> },
    { heading: "Help Desks", icon: <RiQuestionnaireLine size={32} /> },
    { heading: "CRM", icon: <RiCustomerServiceLine size={32} /> },
  ];

  return (
    <>
      <FluidHead title={"Web App Development"} />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Web App Development
              </Heading>
              <Text as={"code"}>
                Are you doing powerful and impactful work that you love and care
                about? Do you want to have more time to put towards the work you
                truly love and enjoy doing?{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <SimpleGrid columns={5} spacing={2}>
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    Running a business of any size often includes a lot of
                    tedious requirements and boring processes that you have to
                    do every day. Busy work can be necessary, but it doesn’t
                    leave you with much time or energy to focus on what’s
                    important or to do it well.
                  </Text>
                  <Heading>What is Web App Development?</Heading>
                  <Text>
                    Web app development allows you to run these processes while
                    you sleep. Your backend web development will acquire and
                    manage customers for you. You will be able to sell
                    merchandise and allow people to book your time with my
                    e-commerce website development services. You can even
                    interact with your existing customers via these web app
                    development services while you slumber.
                  </Text>
                </Card>
              </GridItem>
              {cards.map((card) => (
                <GridItem
                  key={card.heading}
                  colSpan={[5, 1]}
                  h={["100%", "200px"]}
                >
                  <Card>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                        {card.heading}
                      </Heading>
                      {card.icon}
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    Now you can spend your waking hours doing the awesome work
                    that you actually set out to do. This web app development
                    company will handle making you money to support your
                    business. It will get the word out to existing and new
                    customers about the awesome work you are continuing to do.
                    And, of course, you’ll build community, attract new
                    audiences, and inspire great reviews and repeat customers.
                  </Text>
                </Card>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}
