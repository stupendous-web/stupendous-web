import Image from "next/image";
import {
  Box,
  Card,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CTA from "../components/CTA";
import me from "../images/me.png";
import Head from "next/head";
import HighlightCards from "../components/HighlightCards";
import {
  RiBriefcaseLine,
  RiServiceLine,
  RiPaintBrushLine,
} from "react-icons/ri";

export default function Mood() {
  return (
    <>
      <Head>
        <title>Mood | Stupendous Web</title>
        <meta property={"og:title"} content={"Mood | Stupendous Web"} />
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
                Mood
              </Heading>
              <Text as={"code"}>
                Do you value meaningful work, tolerance, equality, creativity,
                and authenticity? My web and app development services help
                people like you to engage with their audiences and tribes in
                creative and impactful ways.{" "}
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
                  <Box>
                    <Image
                      src={me}
                      alt={
                        "Topher excited about web and app development services"
                      }
                      style={{
                        borderRadius: "50px",
                        float: "left",
                        marginRight: "1rem",
                      }}
                      width={100}
                    />
                    <Text mt={-2}>
                      Hello, pioneers. I&apos;m Topher. People say I&apos;m INFP
                      which means, though sometimes I&apos;m introverted,
                      I&apos;m also intuitive, feeling, and prospecting.
                      I&apos;m here to help elevate your projects that support
                      meaningful work, tolerance, equality, creativity, and
                      authenticity through my custom software development
                      services. My degree in web application development from
                      CSU, award-winning projects, and years of work experience
                      are all at your disposal.
                    </Text>
                  </Box>
                </Card>
              </GridItem>
              <HighlightCards
                cards={[
                  {
                    heading: "Meaningful Authentic Work",
                    icon: <RiBriefcaseLine size={32} />,
                  },
                  {
                    heading: "Tolerance & Equality",
                    icon: <RiServiceLine size={32} />,
                  },
                  {
                    heading: "Creativity",
                    icon: <RiPaintBrushLine size={32} />,
                  },
                ]}
              />
              <GridItem colSpan={[5]}>
                <Card variant={"transparent"}>
                  <Box>
                    <Heading>Values</Heading>
                    <Text>
                      Our values come up in everything we do. I value meaningful
                      work, tolerance, equality, creativity, and authenticity.
                      Purposeful software development services solve problems
                      for my clients and their communities through these things.
                      Building meaningful websites, web apps, and iOS and
                      Android apps helps my clients create a more diverse and
                      tolerant world through inventiveness.
                    </Text>
                  </Box>
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
