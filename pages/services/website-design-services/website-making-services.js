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

export default function WebsiteMakingServices() {
  return (
    <>
      <Head>
        <title>
          {"Website Making Services | Web and App Development Services"}
        </title>
        <meta
          property={"og:title"}
          content={"Website Making Services | Web and App Development Services"}
        />
      </Head>
      <CustomLocalBusinessJsonLd />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Website Making Services
              </Heading>
              <Text as={"code"}>
                Ignite your online presence and unleash the power of
                website-making services.{" "}
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
                    ability to ignite meaningful connections and drive positive
                    change. That&apos;s why we&apos;re thrilled to introduce my
                    Website Making Services – not just your ordinary web
                    development, but a platform that empowers you to engage and
                    make a lasting impact. Let&apos;s explore the irresistible
                    benefits of embracing my website-making services.
                  </Text>
                  <Heading>Authenticity, Unleashed</Heading>
                  <Text>
                    Your website is more than just a collection of pages;
                    it&apos;s a digital reflection of your authentic self. With
                    my website-making services, we celebrate your unique brand
                    identity and values, ensuring that every pixel resonates
                    with your tribe. We weave your story into every line of
                    code, crafting a visually stunning and emotionally engaging
                    website that captivates visitors and creates meaningful
                    connections.
                  </Text>
                  <Heading>
                    Seamless Functionality, Effortless Experience
                  </Heading>
                  <Text>
                    Building a website should be a breeze, and that&apos;s
                    exactly what my website-making services offer. Leave the
                    technical complexities to me. From intuitive navigation and
                    responsive design to fast loading speeds and optimized
                    performance, we ensure that every click feels effortless for
                    your tribe, maximizing their time spent on your website.
                  </Text>
                  <Heading>Impactful Engagement, Amplified Reach</Heading>
                  <Text>
                    Engagement is the heartbeat of your online presence, and my
                    website-making services are designed with exactly that in
                    mind. We incorporate strategic features such as social media
                    integration, blog platforms, and interactive elements to
                    encourage your tribe to actively engage with your website.
                    With a strong call-to-action and user-friendly interfaces,
                    we transform passive viewers into active participants,
                    amplifying your reach and impact.
                  </Text>
                  <Heading>Mobile-First Approach, Always Connected</Heading>
                  <Text>
                    In today&apos;s fast-paced world, staying connected on the
                    go is essential. That&apos;s why my website-making services
                    embrace a mobile-first approach. We create responsive
                    websites that adapt seamlessly to any device, ensuring that
                    your tribe can access your content anytime, anywhere. By
                    optimizing the mobile experience, we empower you to engage
                    with your audience wherever they are, expanding your reach
                    and deepening connections.
                  </Text>
                  <Heading>Ongoing Support, Constant Growth</Heading>
                  <Text>
                    We understand that your journey doesn&apos;t end with
                    website creation. That&apos;s why my website-making services
                    come with ongoing support and maintenance, ensuring that
                    you&apos;re never alone on your digital voyage. We&apos;re
                    here to provide prompt technical assistance, regular
                    updates, and guidance to help you navigate the ever-evolving
                    digital landscape. Together, we&apos;ll fuel constant growth
                    and keep your website at the forefront of engagement and
                    impact.
                  </Text>
                  <Text>
                    Embrace the power of{" "}
                    <Link
                      as={NextLink}
                      href={"/services/website-design-services"}
                      title={"Website Design Services"}
                      color={"primary.500"}
                    >
                      website-making services
                    </Link>{" "}
                    to ignite your online presence and create an authentic,
                    engaging platform for impact. Let&apos;s unleash the
                    potential of your brand, building a visually stunning and
                    emotionally resonant website that captivates your tribe.
                    With seamless functionality, amplified engagement, and
                    ongoing support, we&apos;ll fuel your constant growth and
                    propel you toward lasting success. Together, let&apos;s
                    ignite your online journey and make an impact that resonates
                    far beyond the digital realm.
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
