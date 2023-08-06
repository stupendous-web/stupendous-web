import {
  Card,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CTA from "../components/CTA";
import Head from "next/head";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

export default function FAQs() {
  return (
    <>
      <Head>
        <title>
          Web and App Development FAQ&apos;s | Web and App Development Services
          | Stupendous Web
        </title>
        <meta
          property={"og:title"}
          content={
            "Web and App Development FAQ's | Web and App Development Services | Stupendous Web"
          }
        />
        <meta
          name={"description"}
          content={
            "I help people with something to share who want to engage with their community by delivering web and app development services that improve their brand awareness and authority."
          }
        />
        <meta
          property={"og:description"}
          content={
            "I help people with something to share who want to engage with their community by delivering web and app development services that improve their brand awareness and authority."
          }
        />
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Web and App Development FAQ&apos;s
              </Heading>
              <Text as={"code"}>
                Hey there, fellow dreamers and innovators! Here is a list of
                frequently asked questions. I’m here to empower you with a
                platform for engagement and impact. So, let&apos;s dive in and
                explore the world of web and app development together!{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <FrequentlyAskedQuestions />
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}
