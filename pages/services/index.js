import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../../lib/context";
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
} from "@chakra-ui/react";
import {
  RiArrowRightLine,
  RiSearchLine,
  RiChat1Line,
  RiSmartphoneLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import { useEffect } from "react";

export default function Services() {
  const { setIsLoading } = useGlobal();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const strategyServices = [
    { anchor: "Research", icon: <RiSearchLine /> },
    { anchor: "Brand Messaging", icon: <RiChat1Line /> },
  ];

  const developmentServices = [
    { href: "web-app-development", anchor: "Web App Development" },
    { href: "web-site-development", anchor: "Web Site Development" },
    { href: "mvp-software-development", anchor: "MVP Software Development" },
    { anchor: "Phone Apps", icon: <RiSmartphoneLine /> },
  ];

  return (
    <>
      <Head>
        <title>Services | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Services
              </Heading>
              <Text as={"code"}>
                My software development services make it easy for you to build
                your brand and relationships with interested customers by
                building you a revolutionary project, delivering it to your
                clients, and keeping it modern and new!{" "}
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
                    Your project is more than just a pretty website. My software
                    development services are more comprehensive than that.
                    I&apos;m focused on launching a project for you that excels
                    your brand. I&apos;m going to surround myself in your
                    product, build you top-of-the-line web, iOS, and Android
                    applications that reflect your product, give it a place on
                    the web and on everybody&apos;s phone, so your community can
                    find it and connect with you, and maintain the project even
                    after it&apos;s done.
                  </Text>
                  <Heading mt={4}>1.0 Strategy</Heading>
                  <Text>
                    I enjoy offering these consultations at no charge because I
                    believe working closely together is how we build strong
                    communities. I offer two consultations alongside my software
                    development services. In the first, I&apos;ll get to know
                    you and the value your product is providing your
                    communities. In the second, we&apos;ll make a plan for
                    getting your product in the hands of those who need it most
                    via your web, iOS, and Android apps. These consultations are
                    designed for us to better deliver your product in a more
                    impactful way.
                  </Text>
                </Card>
              </GridItem>
              {strategyServices?.map((service) => (
                <GridItem
                  key={service.anchor}
                  colSpan={[5, 1]}
                  h={["100%", "200px"]}
                >
                  <Card>
                    <Flex
                      h={"100%"}
                      direction={"column"}
                      justify={"space-between"}
                    >
                      <Box>
                        {service?.href ? (
                          <Link
                            as={NextLink}
                            href={`/services/${service.href}`}
                            title={`${service.anchor} | Software Development Services | Stupendous Web`}
                          >
                            <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                              {service.anchor}
                            </Heading>
                          </Link>
                        ) : (
                          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                            {service.anchor}
                          </Heading>
                        )}
                      </Box>
                      <Box>
                        {service?.href ? (
                          <Link
                            as={NextLink}
                            href={`/services/${service.href}`}
                            title={`${service.anchor} | Software Development Services | Stupendous Web`}
                          >
                            <>
                              {service?.icon ? (
                                service?.icon
                              ) : (
                                <RiArrowRightLine size={16} />
                              )}
                            </>
                          </Link>
                        ) : (
                          <>
                            {service?.icon ? (
                              service?.icon
                            ) : (
                              <RiArrowRightLine size={16} />
                            )}
                          </>
                        )}
                      </Box>
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Heading mt={4}>2.0 Design</Heading>
                  <Text>
                    A website or even a web app is still a must-have. It is my
                    pleasure to build people with strong purpose in life
                    websites that help them meet their goals. That&apos;s why my
                    software development services include building you a website
                    or web app. A website is just the beginning, but the
                    internet is still a powerful community to share your work
                    in. Your website or web app will bring awareness and
                    authority to you, your business, and what you do.
                  </Text>
                  <Heading mt={4}>3.0 Development</Heading>
                  <Text>
                    Are you and your product tapping into all the available
                    channels these days? The web has extended well beyond
                    computer screens and into the air waves. My software
                    development services put you on the internet <em>and</em> on
                    people&apos;s smart phones. Both of these communities are
                    vital to what you do. Engage with your community, audiences,
                    and people who love and need your product the most with a
                    website and iOS/Android app.
                  </Text>
                </Card>
              </GridItem>
              {developmentServices?.map((service) => (
                <GridItem
                  key={service.anchor}
                  colSpan={[5, 1]}
                  h={["100%", "200px"]}
                >
                  <Card>
                    <Flex
                      h={"100%"}
                      direction={"column"}
                      justify={"space-between"}
                    >
                      <Box>
                        {service?.href ? (
                          <Link
                            as={NextLink}
                            href={`/services/${service.href}`}
                            title={`${service.anchor} | Software Development Services | Stupendous Web`}
                          >
                            <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                              {service.anchor}
                            </Heading>
                          </Link>
                        ) : (
                          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                            {service.anchor}
                          </Heading>
                        )}
                      </Box>
                      <Box>
                        {service?.href ? (
                          <Link
                            as={NextLink}
                            href={`/services/${service.href}`}
                            title={`${service.anchor} | Software Development Services | Stupendous Web`}
                          >
                            <>
                              {service?.icon ? (
                                service?.icon
                              ) : (
                                <RiArrowRightLine size={16} />
                              )}
                            </>
                          </Link>
                        ) : (
                          <>
                            {service?.icon ? (
                              service?.icon
                            ) : (
                              <RiArrowRightLine size={16} />
                            )}
                          </>
                        )}
                      </Box>
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Heading mt={4}>4.0 Long Term Support</Heading>
                  <Text>
                    Even well-working machines need their oil changed. Web, iOS,
                    and Android applications are just the same. They will need
                    upgrades and security updates from time to time. You may
                    even want to make minor changes occasionally. I&apos;ll keep
                    your application up-to-date with the latest technology and
                    safe against security breaches. I&apos;ll even make minor
                    updates as needed. Long term support will keep your
                    technology fresh, your data safe, and your brand unique and
                    desirable even after your software development services are
                    completed.
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
