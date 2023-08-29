import NextLink from "next/link";
import {
  Container,
  Heading,
  Text,
  Link,
  GridItem,
  Card,
  SimpleGrid,
  Box,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import {
  RiPagesLine,
  RiWindowLine,
  RiSmartphoneLine,
  RiArrowRightLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import CTAButton from "../../components/CTAButton";
import Head from "next/head";

export default function Services() {
  const { colorMode } = useColorMode();

  const services = [
    {
      href: "custom-web-app-development-services",
      anchor: "Web Apps",
      icon: <RiWindowLine size={32} />,
    },
    {
      href: "website-development-services",
      anchor: "Websites",
      icon: <RiPagesLine size={32} />,
    },
    {
      href: "mobile-app-design-service",
      anchor: "Mobile Apps",
      icon: <RiSmartphoneLine size={32} />,
    },
  ];

  return (
    <>
      <Head>
        <title>Services | Stupendous Web</title>
        <meta property={"og:title"} content={"Services | Stupendous Web"} />
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
                Services
              </Heading>
              <Text as={"code"}>
                These software development services are designed around you,
                your product and how it helps your community, and your goals. We
                start the process with a consultation to ensure your website,
                web app, and iOS and Android apps will be built to connect you,
                your brand, and what you do and love to your audiences even long
                after the project is finished.{" "}
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
                    Throughout these software development services I keep in
                    mind that new projects are an investment and a can be risky.
                    Design and development need to be functional and create
                    action. And time is money, so doing this right the first
                    time is important! My approach is thoughtful, thorough, and
                    less risky than many others’ because of this and more.
                  </Text>
                  <Text>
                    We’ll get a strong head start on your project by thoroughly
                    assessing your product, how to better enable it to help the
                    people it serves, and how to get it to them. Next in these
                    software development services we’ll create a unique,
                    memorable, branded, accessible, and communicative design for
                    your website, web app, or iOS and Android apps that conveys
                    the benefits of your product. Next we’ll begin building!
                    Your project will be fully managed with all the essential
                    services provided during development from start to finish,
                    so you can continue to focus on your work. Lastly you’ll
                    optionally have access to long term support keeping your
                    project up-to-date, secure, and fresh with minor updates.
                  </Text>
                  <Heading mt={4}>1.0 Strategy</Heading>
                  <Text>
                    You, your brand, and your values show up everywhere in your
                    work. It’s important for the success of your website, web
                    app, and/or phone apps for me to fully understand these
                    things. In your software consultation I’ll get the pleasure
                    to meet you and learn about your mission. We’ll assess your
                    product, the market, and your design needs. We’ll strategize
                    your brand communication, project, design, and development.
                    You’ll receive your product brief afterward as well as
                    optionally a market report, a search engine optimization
                    (SEO) report, design guide, brand guide, project plan, and
                    in-house development quote. These software development
                    services will minimize risk and help you and your project to
                    succeed.
                  </Text>
                  <Box my={8}>
                    <CTAButton size={"lg"} />
                    <Link
                      as={NextLink}
                      href={"/services/software-consultation"}
                      title={"Software Consultation | Stupendous Web"}
                    >
                      <Button
                        size={"lg"}
                        rightIcon={<RiArrowRightLine />}
                        bg={colorMode === "dark" ? "white" : "black"}
                        color={colorMode === "dark" ? "black" : "white"}
                        border={"solid 1px"}
                        _hover={{
                          bg: colorMode === "dark" ? "white" : "black",
                        }}
                      >
                        <Box mr={4}>Learn More</Box>
                      </Button>
                    </Link>
                  </Box>
                  <Heading mt={4}>2.0 Design</Heading>
                  <Text>
                    A good design is more than making something flashy; it’s
                    about adding value. My skills, education, and background as
                    a designer ensure that your website, web app, or iOS and
                    Android apps will be outstanding, memorable, unique,
                    reflective of you and your brand, accessible, targeted, and
                    easy to understand as part of my software development
                    services. This all is to add more credibility to your
                    product increasing its value.
                  </Text>
                  <Heading mt={4}>3.0 Development</Heading>
                  <Text>
                    Websites and apps are powerful tools that can be accessed
                    from just about any screen. My software development services
                    utilize my outstanding skills, education in web application
                    development from Colorado State University, and extensive
                    experience in development to put you on the internet and on
                    people&apos;s smartphones. Making your brand, message,
                    product, or service available across technologies makes them
                    easier to access and more likely for them to sell keeping
                    your work sustainable.
                  </Text>
                </Card>
              </GridItem>
              {services?.map((service) => (
                <GridItem
                  key={service.anchor}
                  colSpan={[5, 1]}
                  h={["100%", "200px"]}
                >
                  <Link
                    as={NextLink}
                    href={`/${service.href}`}
                    title={`${service.anchor} | Stupendous Web`}
                  >
                    <Card>
                      <Flex
                        h={"100%"}
                        direction={"column"}
                        justify={"space-between"}
                      >
                        <Box>
                          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                            {service.anchor}
                          </Heading>
                        </Box>
                        <Box>{service?.icon}</Box>
                      </Flex>
                    </Card>
                  </Link>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    With my software development services, you can establish a
                    robust online presence and increase accessibility across
                    various platforms. My skills, education, and experience make
                    me the ideal partner to create websites and apps that
                    captivate your audience and drive success. Don&apos;t miss
                    out on the opportunity to take your product, service, or
                    message to new heights in the digital world.
                  </Text>
                  <Heading mt={4}>4.0 Support</Heading>
                  <Text>
                    It’s important to change the oil in your website or app
                    frequently and keep the filters clean. They will need
                    upgrades and security updates from time to time. You may
                    even want to make minor changes occasionally. I&apos;ll keep
                    your application up-to-date with the latest technology and
                    safe against security breaches. I&apos;ll even make minor
                    updates as needed. Good quality assurance and long-term
                    support will keep your technology fresh, your data safe, and
                    your brand unique and desirable even after your software
                    development services are completed.
                  </Text>
                  <Text>
                    Schedule your consultation today to learn more about how I
                    can help you establish a strong online presence and unlock
                    the full potential of your work. Let&apos;s embark on this
                    journey together and pave the way to your online success.
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
