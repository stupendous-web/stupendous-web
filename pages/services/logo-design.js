import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Divider,
  Link,
} from "@chakra-ui/react";
import { RiStarLine, RiCursorLine, RiPaintBrushLine } from "react-icons/ri";
import CTA from "../../components/CTA";
import CustomLocalBusinessJsonLd from "../../components/json-ld/CustomLocalBusinessJsonLd";
import CTARow from "../../CTARow";
import Head from "next/head";
import NextLink from "next/link";

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
        <meta
          name={"description"}
          content={
            "Looking to create or refine your brand? Share what you do with your audiences. Schedule a consultation to receive a logo design as part of my development services."
          }
        />
        <meta
          property={"og:description"}
          content={
            "Looking to create or refine your brand? Share what you do with your audiences. Schedule a consultation to receive a logo design as part of my development services."
          }
        />
      </Head>
      <CustomLocalBusinessJsonLd
        description={
          "Looking to create or refine your brand? Share what you do with your audiences. Schedule a consultation to receive a logo design as part of my development services."
        }
      />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Logo Design
              </Heading>
              <Text as={"code"}>
                A logo design by Amanda Boesen will unleash the power of your
                brand. Consider adding a logo to your web and mobile app.{" "}
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
                        makes a lasting impact on your audience&apos;s minds.
                        Your logo will provoke their curiosity, start
                        conversations, and strengthen brand awareness, paving
                        the way for better customer engagement and loyalty.
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
                    makes a lasting impact on your audience&apos;s minds. Your
                    logo will provoke their curiosity, start conversations, and
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
                    We&apos;ll make this fast, easy, and even fun! Our attention
                    to detail, fully managed services give you the time to focus
                    on your product. First, let’s get you a consultation! You
                    can schedule a free consultation on the website in just a
                    few seconds. In your consultation with Amanda and myself,
                    we’ll discuss you and your brand, refine your product,
                    identify your target audience and their wants and needs, and
                    strategize an action plan for your product. You&apos;ll
                    receive many documents and, by the time the project is done,
                    a logo to help you make your dreams of a web app come true.
                    You’ll also receive an in-house development quote. Once
                    approved, you’ll receive a link to a beta website or
                    application to preview progress anytime. You may give
                    feedback or make requests via email, schedule a 1-1, or
                    submit requirements via your Kanban board at any point. Once
                    you’re happy with your website or app, we’ll publish it to
                    the real live world wide web and airwaves for all your
                    customers to see! You’ll receive an invoice once a week
                    during development. I also recommend my long-term support
                    plan after the project is completed. This process all begins
                    with a consultation. Take the first step to connecting with
                    your community by scheduling a quote now. And, if you’re
                    only looking for an impeccably branded logo design without a
                    website or app, contact{" "}
                    <Link
                      as={NextLink}
                      href={"https://www.amandaboesen.com/"}
                      color={"primary.500"}
                    >
                      Amanda Boesen
                    </Link>{" "}
                    now!
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
