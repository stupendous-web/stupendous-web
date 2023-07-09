import { useGlobal } from "../../lib/context";
import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Link,
  Box,
} from "@chakra-ui/react";
import {
  RiArticleLine,
  RiSurveyLine,
  RiSearchLine,
  RiPaintBrushLine,
  RiChat1Line,
  RiSlideshowLine,
  RiComputerLine,
} from "react-icons/ri";
import { useEffect } from "react";
import NextLink from "next/link";
import CTAButton from "../../components/CTAButton";
import FluidHead from "../../components/FluidHead";

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();

  const cards = [
    {
      heading: "Product Brief",
      icon: <RiArticleLine size={32} />,
    },
    { heading: "Market Report", icon: <RiSurveyLine size={32} /> },
    { heading: "SEO Report", icon: <RiSearchLine size={32} /> },
    { heading: "Design Guide", icon: <RiPaintBrushLine size={32} /> },
    { heading: "Brand Guide", icon: <RiChat1Line size={32} /> },
    { heading: "Project Plan", icon: <RiSlideshowLine size={32} /> },
    {
      heading: "In-House Development Quote",
      icon: <RiComputerLine size={32} />,
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <FluidHead title={"Software Consultation"} />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Software Consultation
              </Heading>
              <Text as={"code"}>
                Is that exciting app or website idea you have keeping you awake
                at night? Are you excited to see it grow, help others, and be
                kind to your wallet so you can keep making it better with each
                iteration?{" "}
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
                    Having a wonderful idea for a product is the first step in
                    creating something powerful and life changing. Sure, seeing
                    this through will take time, work, drive, and even money.
                    Being successful with your new idea means taking your time
                    and doing your research. And, I want to see you succeed, so
                    we’re going to do this right by starting with a
                    consultation!
                  </Text>
                  <Heading>What you&apos;ll Receive</Heading>
                  <Text>
                    A good software consultation means walking away with the
                    tools you need to succeed with your web app, website, iOS or
                    Android app, or whatever the form of your project will be.
                    In my software consulting services we’ll do a lot of getting
                    to know you and your product, refining its strengths and
                    weaknesses, documenting it, and creating a strategy for
                    executing your ideas. A few software development consulting
                    deliverables you’ll receive include the following.
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
                    It’s good to walk through your new endevour verbally with
                    someone else developing a strong software development
                    strategy. And, my clients always leave my software
                    consultation feeling inspired and energized. A consultation
                    is a good way to gather your tools for overcoming things
                    like competition and other unexpected obstacles. You’ll have
                    plenty of documents to reference during the initial phases
                    of the new work you’ll be doing. Taking this more thoughtful
                    approach will make your app or website more popular, more
                    productive, and more profitable, keeping your work
                    sustainable. I’m excited to meet you, hear what you’re
                    working on, and draw up some really strong strategies for
                    seeing you get your product out to the world!
                  </Text>
                  <Box mt={4} mb={[4, 8]}>
                    <CTAButton size={"lg"} />
                  </Box>
                  <Text>
                    Still have questions? Email{" "}
                    <Link
                      as={NextLink}
                      href={"mailto:topher@stupendousweb.com"}
                    >
                      topher@stupendousweb.com
                    </Link>{" "}
                    for more information.
                  </Text>
                </Card>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}
