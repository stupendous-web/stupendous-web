import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Link,
  Button,
} from "@chakra-ui/react";
import CTA from "../../../components/CTA";
import CustomLocalBusinessJsonLd from "../../../components/json-ld/CustomLocalBusinessJsonLd";
import NextLink from "next/link";
import Head from "next/head";

export default function FullServiceWebsiteDesignAndManagement() {
  return (
    <>
      <Head>
        <title>
          {
            "Full Service Website Design and Management | Web and App Development Services"
          }
        </title>
        <meta
          property={"og:title"}
          content={
            "Full Service Website Design and Management | Web and App Development Services"
          }
        />
      </Head>
      <CustomLocalBusinessJsonLd />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Full Service Website Design and Management
              </Heading>
              <Text as={"code"}>
                Empower your digital presence and unleash the potential of
                full-service website design and management.{" "}
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
                    I believe in the transformative power of technology and its
                    ability to create meaningful connections and drive positive
                    change. That&apos;s why I’m thrilled to introduce my
                    full-service Website Design and Management - a comprehensive
                    solution that not only builds remarkable websites but also
                    nurtures your online presence, unlocking endless
                    possibilities for engagement and impact. Let&apos;s explore
                    the irresistible benefits of embracing my full-service
                    approach.
                  </Text>
                  <Heading>Tailored Design and Unleashed Creativity</Heading>
                  <Text>
                    No cookie-cutter templates here – my full-service website
                    design offers a customized experience that reflects your
                    unique brand identity and captivates your audience. I will
                    collaborate closely with you to understand your vision,
                    values, and objectives, ensuring that every aspect of your
                    website is a reflection of your authentic self. Embracing
                    creativity and pushing the boundaries of design, I create
                    visually striking websites that leave a lasting impression
                    and draw your tribe in.
                  </Text>
                  <Heading>
                    Seamless Functionality and Maximized Efficiency
                  </Heading>
                  <Text>
                    Building a website is the first step, but ensuring it
                    functions seamlessly is just as crucial. My full-service
                    website management ensures that your website runs smoothly,
                    providing an optimized user experience that keeps your
                    visitors engaged. From regular updates and security
                    enhancements to performance optimization and compatibility
                    checks, I take care of the technical details so you can
                    focus on what truly matters – growing your impact.
                  </Text>
                  <Heading>Unparalleled Support with Empowered Growth</Heading>
                  <Text>
                    My full-service website design and management comes with
                    ongoing support and assistance, ensuring that you&apos;re
                    never alone on your digital journey. From prompt technical
                    assistance and regular website maintenance to strategic
                    advice and growth strategies, I’m here to empower you at
                    every step. Together, I’ll create a thriving online presence
                    that unlocks limitless opportunities for your tribe.
                  </Text>
                  <Text>
                    Embrace the power of{" "}
                    <Link
                      as={NextLink}
                      href={"/services/website-design-services"}
                      title={"Website Design Services"}
                      color={"primary.500"}
                    >
                      full-service website design and management
                    </Link>{" "}
                    to elevate your digital presence and drive authentic
                    engagement and impact. Join dreamers, innovators, and
                    change-makers, that believe in the value of meaningful work
                    and equality. Let&apos;s unleash your creativity, maximize
                    efficiency, and amplify your reach – all while creating a
                    captivating online experience for your tribe. Contact me
                    today and step into the realm of full-service empowerment.
                    Together, we’ll reshape the digital landscape, one
                    remarkable website at a time.
                  </Text>
                  <Link
                    as={NextLink}
                    href={"/services/website-design-services"}
                    title={"Website Design Services"}
                  >
                    <Button colorScheme={"primary"}>Learn More</Button>
                  </Link>
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
