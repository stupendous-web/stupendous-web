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
import FluidHead from "../components/FluidHead";

export default function Mood() {
  return (
    <>
      <FluidHead title={"Mood"} />
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
              <GridItem colSpan={[5, 2]} h={["100%", "400px"]}>
                <Card>
                  <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                    Meaningful Work
                  </Heading>
                  <Text>
                    I want to make an impact and help others make an impact in
                    our lives that benefits ourselves, benefits each other, and
                    make the world a little more fun!
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={[5, 2]} h={["100%", "400px"]}>
                <Card>
                  <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                    Tolerance
                  </Heading>
                  <Text>
                    Diversity is what brings the most revolutionary
                    problem-solvers to the table and I want to and support
                    others who embrace and foster it.
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={[5, 2]} h={["100%", "400px"]}>
                <Card>
                  <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                    Equality
                  </Heading>
                  <Text>
                    I&apos;ve seen so much inequality during my time and have
                    experienced it myself so I want to help create equality in
                    the world by donating a portion of my work to important
                    causes.
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={[5, 2]} h={["100%", "400px"]}>
                <Card>
                  <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                    Creativity
                  </Heading>
                  <Text>
                    I&apos;ve always enjoyed art of all kinds, especially visual
                    art, and find myself coming up with creative solutions that
                    I would like to extend to you, your work, and your
                    community.
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={[5, 2]} h={["100%", "400px"]}>
                <Card>
                  <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                    Authenticity
                  </Heading>
                  <Text>
                    Trust is important to me, so I want to be transparent about
                    myself and about my work with others and do my best to
                    deliver a truly authentic product.
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
