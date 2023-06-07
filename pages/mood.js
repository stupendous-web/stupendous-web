import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";
import me from "../images/me.png";

export default function Mood() {
  const [openPanel, setOpenPanel] = useState(undefined);
  const { setIsLoading } = useGlobal();

  const values = [
    {
      button: "1.0 Meaningful Work",
      panel:
        "I want to make an impact and help others make an impact in our lives that benefits ourselves, benefits each other, and make the world a little more fun!",
    },
    {
      button: "2.0 Tolerance",
      panel:
        "Diversity is what brings the most revolutionary problem-solvers to the table and I want to and support others who embrace and foster it.",
    },
    {
      button: "3.0 Equality",
      panel:
        "I've seen so much inequality during my time and have experienced it myself so I want to help create equality in the world by donating a portion of my work to important causes.",
    },
    {
      button: "4.0 Creativity",
      panel:
        "I've always enjoyed art of all kinds, especially visual art, and find myself coming up with creative solutions that I would like to extend to you, your work, and your community.",
    },
    {
      button: "5.0 Authenticity",
      panel:
        "Trust is important to me, so I want to be transparent about myself and about my work with others and do my best to deliver a truly authentic product.",
    },
  ];

  return (
    <>
      <Head>
        <title>Mood | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Mood | Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text as={"code"} color={"white"}>
              Do you value meaningful work, tolerance, equality, creativity, and
              authenticity? My software development services help people like
              you to engage with their audiences and tribes in creative and
              impactful ways.{" "}
              <Text as={"span"} className={"flash"}>
                ▌
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} py={8}>
        <Heading as={"h1"} fontSize={["4rem", "12rem"]}>
          Mood
        </Heading>
      </Container>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Image
              src={me}
              alt={"It's me dears! | Software Development Services"}
              style={{
                borderRadius: "50px",
                float: "left",
                marginRight: "1rem",
              }}
              width={100}
            />
            <Text>
              Hello, pioneers. I&apos;m Topher. People say I&apos;m INFP which
              means, though sometimes I&apos;m introverted, I&apos;m also
              intuitive, feeling, and prospecting. I&apos;m here to help elevate
              your projects that support meaningful work, tolerance, equality,
              creativity, and authenticity through my custom software
              development services. My degree in web application development
              from CSU, award-winning projects, and years of work experience are
              all at your disposal.
            </Text>
            <Heading>Values</Heading>
            <Text>
              Our values come up in everything we do. I value meaningful work,
              tolerance, equality, creativity, and authenticity. Purposeful
              software development services solve problems for my clients and
              their communities through these things. Building meaningful
              websites, web apps, and iOS and Android apps helps my clients
              create a more diverse and tolerant world through inventiveness.
            </Text>
            <Accordion index={openPanel} my={8}>
              {values.map((value, index) => (
                <AccordionItem key={value.button}>
                  <AccordionButton onMouseOver={() => setOpenPanel(index)}>
                    <Heading as={"h3"} size={"lg"} m={0}>
                      {value.button}
                    </Heading>
                  </AccordionButton>
                  <AccordionPanel pb={4}>{value.panel}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <Text>
              If you identify with these values or have other impactful things
              that are important to you, drop me a line!
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
