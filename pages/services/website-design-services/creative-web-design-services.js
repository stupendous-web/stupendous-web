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

export default function CreativeWebDesignServices() {
  return (
    <>
      <Head>
        <title>
          {"Creative Web Design Services | Web and App Development Services"}
        </title>
        <meta
          property={"og:title"}
          content={
            "Creative Web Design Services | Web and App Development Services"
          }
        />
      </Head>
      <CustomLocalBusinessJsonLd />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Creative Web Design Services
              </Heading>
              <Text as={"code"}>
                Empowering your online presence by unleashing your creativity
                with my web design services.{" "}
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
                    Welcome to our community of dreamers, innovators, and
                    change-makers. I believe that creativity has the power to
                    inspire, connect, and drive meaningful change. That&apos;s
                    why I’m excited to introduce my web design services – more
                    than just aesthetics, I offer a platform for engagement and
                    impact. Let&apos;s explore the irresistible benefits of
                    embracing my creative web design services.
                  </Text>
                  <Heading>Unleash Your Authentic Creativity</Heading>
                  <Text>
                    Your website is a canvas for your authentic creativity - an
                    opportunity to showcase your unique brand identity and
                    values. With my web design services, I celebrate your
                    creativity, infusing it with captivating visuals, seamless
                    functionality, and intuitive user experience. Engage and
                    Connect
                  </Text>
                  <Text>
                    Engagement is the driving force behind your digital
                    presence, and my web design services are designed to help
                    you foster deeper connections with your tribe. Through
                    compelling design, strategic placement, and impactful
                    visuals, I create an immersive experience that inspires your
                    audience to actively engage with your content. Let&apos;s
                    build a thriving community around your shared vision,
                    co-creating a space where your tribe feels heard, seen, and
                    valued.
                  </Text>
                  <Heading>Impactful First Impressions</Heading>
                  <Text>
                    In today&apos;s crowded digital landscape, making a lasting
                    impact is crucial. With my web design services, you&apos;ll
                    make a powerful first impression that captures the hearts
                    and minds of your visitors. We combine striking visuals,
                    clear messaging, and seamless navigation to create a website
                    that not only stands out but also sparks curiosity and
                    drives meaningful action. Together, we&apos;ll create a
                    digital space that resonates with your tribe and leaves a
                    lasting impression.
                  </Text>
                  <Heading>Responsive Design, Empowering Reach</Heading>
                  <Text>
                    Your audience is constantly on the go, and your website
                    needs to be accessible anytime, anywhere. My web design
                    services prioritize responsive design, ensuring that your
                    website adapts seamlessly to any device, from smartphones to
                    tablets. Stay connected with your audience, engage from
                    anywhere, and amplify your impact. Embrace the power of
                    responsiveness and broaden your reach like never before.
                  </Text>
                  <Heading>Lifelong Transformation, Community Support</Heading>
                  <Text>
                    I believe in lifelong growth and evolution. My{" "}
                    <Link
                      as={NextLink}
                      href={"/services/website-design-services"}
                      title={"Website Design Services"}
                      color={"primary.500"}
                    >
                      web design services
                    </Link>{" "}
                    offer not just exceptional design but also ongoing support.
                    I’m here to provide technical assistance, regular updates,
                    and guidance, ensuring that your website stays at the
                    forefront of creativity and innovation. Together, let&apos;s
                    create an ever-evolving digital presence that resonates with
                    your tribe and helps you drive positive change.
                  </Text>
                  <Text>
                    Let&apos;s unleash your authentic creativity, connect with
                    your tribe, and inspire meaningful action. Through expert
                    design, strategic placement, and ongoing support, I’ll help
                    you achieve your digital goals and amplify your impact.
                    Contact me today and let&apos;s revolutionize your online
                    journey. Together, we&apos;ll co-create a digital space that
                    resonates with your tribe, empowers your creativity, and
                    drives positive change.
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
