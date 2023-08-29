import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Link,
} from "@chakra-ui/react";
import CTA from "../components/CTA";
import CustomLocalBusinessJsonLd from "../components/json-ld/CustomLocalBusinessJsonLd";
import CTARow from "../CTARow";
import Head from "next/head";
import Section from "../components/Section";
import NextLink from "next/link";

export default function Nextjs() {
  return (
    <>
      <Head>
        <title>
          NextJS | Web and App Development Services | Stupendous Web
        </title>
        <meta
          property={"og:title"}
          content={"NextJS | Web and App Development Services | Stupendous Web"}
        />
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
      <CustomLocalBusinessJsonLd
        description={
          "I help people with something to share who want to engage with their community by delivering web and app development services that improve their brand awareness and authority."
        }
      />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Revolutionize your Web Development with NextJS Services
              </Heading>
              <Text as={"code"}>
                I offer a transformative experience that engages your audience
                and creates a lasting impact. Let&apos;s dive into the
                irresistible benefits of NextJS Services.{" "}
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
                    Looking to take your web development game to the next level?
                    Look no further than my NextJS development services! As a
                    developer, I know the value that this cutting-edge
                    technology brings to the table. Here are just a few of the
                    benefits you can expect.
                  </Text>
                  <Heading>What is NextJS</Heading>
                  <Text>
                    NextJS is a comprehensive React framework that offers
                    development teams an intuitive and efficient way to build
                    high-performance web applications. This open-source
                    Node-based tool is designed to help developers create
                    server-side rendered React applications in record time.
                    NextJS provides a wide range of out-of-the-box features such
                    as automatic code splitting, optimized image loading, and
                    server-side rendering, eliminating the need for developers
                    to write code to implement these features individually. This
                    gives development teams the ability to focus on the bigger
                    picture and deliver an intuitive application while saving
                    time and optimizing productivity.
                  </Text>
                </Card>
              </GridItem>
              <CTARow />
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    NextJS is particularly exciting for teams working on
                    front-end-focused web applications. It allows you to build
                    powerful, dynamic web applications that deliver exceptional
                    performance with minimal coding. The ease and efficiency of
                    NextJS can promote agility, and create faster and more
                    effective iteration cycles, making it an excellent choice
                    for ambitious projects that demand a high degree of
                    flexibility and scalability. With the support of a wide
                    range of plugins and modules, NextJS is quickly gaining
                    popularity within the development community as a powerful
                    tool that can help create web applications that can scale
                    with any business.
                  </Text>
                  <Section
                    heading={"Blazing Fast Speeds"}
                    text={
                      <Text>
                        With NextJS, I can optimize your site to load
                        lightning-fast. I leverage features like server-side
                        rendering, automatic code splitting, and optimized
                        images to ensure that your users get the speedy,
                        seamless experience they crave. More speed means more
                        loyal customers and more revenue for your business. With
                        NextJS, your website will be lightning-fast, ensuring an
                        exceptional user experience. Engaging your audience with
                        remarkable performance gives your business a competitive
                        edge and enhances overall satisfaction.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Improved SEO"}
                    text={
                      <Text>
                        I understand that a beautiful site is nothing if nobody
                        can find it. That&apos;s why I use best practices for
                        SEO to ensure that your site is discoverable by search
                        engines and potential customers alike. With savvy use of
                        things like structured data and automatic page
                        prefetching, you can be sure that your site is getting
                        maximum visibility.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Flexibility and Customizability"}
                    text={
                      <Text>
                        No two businesses are alike. Why should their website
                        be? With NextJS development services, we can tailor your
                        web development experience to fit your unique needs.
                        Whether you&apos;re looking to build a simple static
                        site, a complex e-commerce platform, or something unique
                        and new, NextJS provides the tools and I provide the
                        expertise to get the job done. With NextJS services, I
                        provide highly customizable solutions tailored to your
                        vision. Whether you&apos;re building a portfolio or a
                        complex web application, I will turn your ideas into a
                        captivating reality. I create engaging user interfaces
                        that authentically represent your brand and resonate
                        with your target audience.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Cutting-Edge Technology"}
                    text={
                      <Text>
                        I pride myself on keeping up with the latest and
                        greatest in web development technology. I am constantly
                        innovating, which means I can offer you the most
                        up-to-date and effective solutions. With NextJS, you can
                        be sure that your site is built using the latest and
                        greatest techniques, giving you a competitive edge in
                        the marketplace. I embrace innovation, and NextJS
                        services stay at the forefront of web development
                        technology. I continuously update my skills, delivering
                        solutions that are future-proof. By leveraging the
                        latest advancements in NextJS, I ensure your website
                        remains adaptable in the ever-evolving digital
                        landscape.
                      </Text>
                    }
                  />
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    NextJS services aren’t just about web development; they’re
                    about engaging with a vibrant and supportive community
                    committed to creating an impact. That’s you! And, I
                    revolutionize your web development experience by offering
                    seamless performance, enhanced visibility, flexibility,
                    efficiency, and cutting-edge technology. Let NextJS services
                    take your digital presence to new heights. Together,
                    we&apos;ll create an authentic and impactful platform that
                    resonates with your audience, driving your success and
                    fostering lasting connections.
                  </Text>
                  <Heading>Get yours Now!</Heading>
                  <Text>
                    So what are you waiting for? Schedule your consultation
                    today to take your web development project to the next
                    level. With my expertise and cutting-edge technology, I can
                    help you build a beautiful, blazing-fast{" "}
                    <Link
                      as={NextLink}
                      href={"/website-development-services"}
                      title={"Website Development Services | Stupendous Web"}
                      color={"primary.500"}
                    >
                      website
                    </Link>{" "}
                    or{" "}
                    <Link
                      as={NextLink}
                      href={"/custom-web-app-development-services"}
                      title={
                        "Custom Web App Development Services | Stupendous Web"
                      }
                      color={"primary.500"}
                    >
                      web app
                    </Link>{" "}
                    that will delight your users and drive your business
                    forward.
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
