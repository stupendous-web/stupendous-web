import Head from "next/head";
import { useGlobal } from "../../lib/context";
import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
} from "@chakra-ui/react";
import { RiHandCoinLine, RiHandHeartLine, RiGroupLine } from "react-icons/ri";
import CTA from "../../components/CTA";
import { useEffect } from "react";

export default function MVPSoftwareDevelopment() {
  const { setIsLoading } = useGlobal();

  const cards = [
    { heading: "Find Investors", icon: <RiHandCoinLine size={32} /> },
    { heading: "Attract Donors", icon: <RiHandHeartLine size={32} /> },
    { heading: "Build your Network", icon: <RiGroupLine size={32} /> },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          MVP Software Development | Software Development Services | Stupendous
          Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                MVP Software Development
              </Heading>
              <Text as={"code"}>
                Do you have great ideas on how to improve our lives? Do you have
                an idea for an app or website that can help you help others
                accomplish this?{" "}
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
                    You need an MVP (minimum viable product) to jumpstart your
                    journey into changing the world. You need an MVP to start
                    your fundraising and marketing campaigns. Most of all, you
                    need an MVP to get your work into the hands of those who
                    need it most.
                  </Text>
                  <Heading>What is an MVP?</Heading>
                  <Text>
                    My MVP software development services are backed by education
                    in web application development, years of experience, and
                    good reviews. Software including websites, web apps, and iOS
                    and Android apps are the link to turning your ideas into
                    worldwide action. Take advantage of this opportunity to
                    build a reputable MVP product that you can pitch to
                    investors and donors and publish powerful problem-solving
                    software via my web and software development services.
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
                    Not only will working together, building an MVP that is sure
                    to impress, help you get your ideas and work into the world,
                    but my MVP product development and software development
                    services will yield an impressive product to demo to more
                    people that also want to work together with you. These
                    people can contribute their skills, networks, and even
                    dollars to help you with your work. I’ll build you a strong
                    MVP to help you start a sustainable career doing what you
                    love and care about.
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
