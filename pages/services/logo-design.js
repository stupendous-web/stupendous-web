import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Divider,
} from "@chakra-ui/react";
import { RiStarLine, RiCursorLine, RiPaintBrushLine } from "react-icons/ri";
import CTA from "../../components/CTA";
import CustomLocalBusinessJsonLd from "../../components/json-ld/CustomLocalBusinessJsonLd";
import CTARow from "../../CTARow";
import Head from "next/head";

export default function LogoDesign() {
  const cards = [
    { heading: "Unique", icon: <RiStarLine size={32} /> },
    { heading: "Engaging", icon: <RiCursorLine size={32} /> },
    { heading: "Branded", icon: <RiPaintBrushLine size={32} /> },
  ];

  const Section = ({ heading, text }) => (
    <>
      <Divider borderColor={"gray.500"} mb={4} />
      <SimpleGrid columns={5}>
        <GridItem colSpan={[5, 2]}>
          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
            {heading}
          </Heading>
        </GridItem>
        <GridItem colSpan={[5, 3]}>{text}</GridItem>
      </SimpleGrid>
    </>
  );

  return (
    <>
      <Head>
        <title>{"Logo Design | Web and App Development Services"}</title>
        <meta
          property={"og:title"}
          content={"Logo Design | Web and App Development Services"}
        />
        {/*<meta*/}
        {/*  name={"description"}*/}
        {/*  content={*/}
        {/*    "Have an idea for a revolutionary new mobile app? Connect with your audience with my mobile app development services. Schedule your consultation to receive your..."*/}
        {/*  }*/}
        {/*/>*/}
        {/*<meta*/}
        {/*  property={"og:description"}*/}
        {/*  content={*/}
        {/*    "Have an idea for a revolutionary new mobile app? Connect with your audience with my mobile app development services. Schedule your consultation to receive your..."*/}
        {/*  }*/}
        {/*/>*/}
      </Head>
      {/*<CustomLocalBusinessJsonLd*/}
      {/*  description={*/}
      {/*    "Need a new website that does more than the rest? Discover web design services that help you achieve your goals. Schedule your FREE consultation to receive your..."*/}
      {/*  }*/}
      {/*/>*/}
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Logo Design
              </Heading>
              <Text as={"code"}>
                Unleash the power of your brand with impactful web and app
                design and logo design by Amanda Boesen.{" "}
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
                    Are you ready to take your brand to the next level? Look no
                    further than our logo design services. Work with us to
                    create a branded website and/or mobile app together with an
                    impactful logo design. We will work with you to create a
                    custom logo that embodies everything your brand stands for.
                    We’ll help you create a logo that is uniquely yours and will
                    make your brand stand out from the crowd. We are ready to
                    work with you on creating a logo that will leave an
                    impactful first (and lasting) impression.
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
                    The first thing people see when they look at your logo is
                    the impact it has on them. A well-designed logo can help
                    your brand stand out and make a lasting impression on
                    potential customers. We are ready to work with you on
                    creating a custom logo that will give off the right vibe and
                    make your brand stand out from the crowd.
                  </Text>
                  <Section
                    heading={"Stand out from the Crowd"}
                    text={
                      <Text>
                        A well-designed logo catches the eye of potential
                        customers, making your brand instantly recognizable and
                        memorable. We create unique logos that represent the
                        authenticity of your business - helping you stand out in
                        a crowded market. Looking for a unique logo? We create
                        custom logos that are 100% original and guaranteed to
                        stand out. We take the time to get to know your brand
                        and then use this information to create a design that is
                        both memorable and representative of your business.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Connect with your Tribe"}
                    text={
                      <Text>
                        By working with us, you&apos;ll create a visual
                        representation that captures your audience&apos;s
                        attention and translates your brand&apos;s message. We
                        create logos with authenticity to create an emotional
                        connection between your brand and your customer’s
                        hearts. A logo is the face of your brand. It&apos;s a
                        visual representation of who you are and what you stand
                        for. Your logo should be memorable, distinct, and
                        timeless — a symbol that represents your company and
                        connects with potential customers.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Consistency is the Key"}
                    text={
                      <Text>
                        Branding is all about consistency, and a logo is a
                        critical element of brand recognition. Our professional
                        designers will ensure they use your brand guidelines to
                        create a logo that is consistent with your brand&apos;s
                        key messaging, engaging with customers. Logos are one of
                        the most important elements of your brand. They can help
                        you stand out in a crowded marketplace and drive sales.
                        A great logo will be simple, memorable, and unique. It
                        will speak to your target audience and reflect their
                        values.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Impactful"}
                    text={
                      <Text>
                        A great logo communicates the essence of your brand and
                        makes a lasting impact on your audience's minds. Your
                        logo will provoke their curiosity, start conversations,
                        and strengthen brand awareness, paving the way for
                        better customer engagement and loyalty.
                      </Text>
                    }
                  />
                </Card>
              </GridItem>
              <CTARow />
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Heading>Impactful Logo Design</Heading>
                  <Text>
                    A great logo communicates the essence of your brand and
                    makes a lasting impact on your audience's minds. Your logo
                    will provoke their curiosity, start conversations, and
                    strengthen brand awareness, paving the way for better
                    customer engagement and loyalty.
                  </Text>
                  <Text>
                    Choose us, and unlock the power of your brand, leaving an
                    impactful impression with every interaction. We create a
                    community of change-makers, providing the best quality of
                    creating logos with authenticity. Stand out from the crowd,
                    create a connection while staying consistent, and make an
                    undeniable impact on your audience.
                  </Text>
                  <Heading>How does it Work?</Heading>
                  <Text>
                    It all starts with a consultation, so schedule yours today!
                    And, if you’re only looking for an impeccably branded logo
                    design without a website or app, contact Amanda Boesen now!
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
