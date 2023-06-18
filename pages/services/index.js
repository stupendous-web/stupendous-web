import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../../lib/context";
import {
  Container,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  GridItem,
  Card,
  SimpleGrid,
  Tag,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckFill } from "react-icons/ri";
import CTA from "../../components/CTA";
import { useEffect } from "react";

export default function Services() {
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const strategyServices = [
    "Consulting",
    "Brand Strategy",
    "Search Engine Optimization (SEO)",
  ];

  const designServices = ["Brand Awareness", "Web Design", "UX/UI Design"];

  const developmentServices = [
    { href: "web-app-development", anchor: "Web App Development" },
    { href: "web-site-development", anchor: "Web Site Development" },
    { href: "mvp-software-development", anchor: "MVP Software Development" },
  ];

  const developmentExamples = [
    "Contact Forms",
    "Blogs",
    "CMS",
    "E-Commerce",
    "Help Desks",
    "Customer Portals",
    "CRM",
    "Discussion Forms",
    "Chat Rooms",
    "Social Media",
    "Instant Messaging",
    "Photography",
    "Music and Audio",
    "Health",
    "Dating",
    "Shopping",
    "Banking",
    "Smart Home",
    "Finance",
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
                <Card>
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
                  <Text fontWeight={"bold"}>
                    🔎
                    <Text as={"span"} ml={4}>
                      Plan
                    </Text>
                  </Text>
                  <Text fontWeight={"bold"}>
                    🎨
                    <Text as={"span"} ml={4}>
                      Design
                    </Text>
                  </Text>
                  <Text fontWeight={"bold"}>
                    💻
                    <Text as={"span"} ml={4}>
                      Develop
                    </Text>
                  </Text>
                  <Text fontWeight={"bold"}>
                    🧪
                    <Text as={"span"} ml={4}>
                      Test
                    </Text>
                  </Text>
                  <Text fontWeight={"bold"}>
                    🔁
                    <Text as={"span"} ml={4}>
                      Repeat
                    </Text>
                  </Text>
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <Card>
                  <Heading>1.0 Strategy</Heading>
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
                  <Box>
                    {strategyServices?.map((service) => (
                      <Tag
                        key={service}
                        bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                        mr={2}
                      >
                        {service}
                      </Tag>
                    ))}
                  </Box>
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <Card>
                  <Heading>2.0 Design</Heading>
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
                  <Box>
                    {designServices?.map((service) => (
                      <Tag
                        key={service}
                        bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                        mr={2}
                      >
                        {service}
                      </Tag>
                    ))}
                  </Box>
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <Card>
                  <Heading>3.0 Development</Heading>
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
                  <Box>
                    {developmentExamples?.map((service) => (
                      <Tag
                        key={service}
                        bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                        mr={2}
                      >
                        {service}
                      </Tag>
                    ))}
                  </Box>
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
                        <Link
                          key={service.href}
                          as={NextLink}
                          href={`/services/${service.href}`}
                          title={`${service.anchor} | Software Development Services | Stupendous Web`}
                        >
                          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                            {service.anchor}
                          </Heading>
                        </Link>
                      </Box>
                      <Box>
                        <Link
                          key={service.href}
                          as={NextLink}
                          href={`/services/${service.href}`}
                          title={`${service.anchor} | Software Development Services | Stupendous Web`}
                        >
                          <RiArrowRightLine size={16} />
                        </Link>
                      </Box>
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card>
                  <Heading as={"h3"} size={"lg"}>
                    iOS and Android Apps
                  </Heading>
                  <Text>
                    Bring the hard work you do to everyone&apos;s pocket. Your
                    life&apos;s work, products, services, and ideas can be
                    accessible all day every day via a phone app. That&apos;s
                    why my software development services also include iOS and
                    Android app development. Your iOS and Android apps will be
                    about your, your brand, and what you do and make them all
                    more accessible to new and existing audiences. With phone
                    apps we will easily connect you and what you do with more
                    people.
                  </Text>
                  <Heading as={"h3"} size={"lg"}>
                    Secure, Managed Domain and Hosting
                  </Heading>
                  <Text>
                    There are many things that go into getting your project
                    online quickly, safely, and hassle-free. I&apos;m here to
                    help with those too. I&apos;ll setup and manage your domain
                    name, SSL certificates, and on-page SEO. In addition, I will
                    get your iOS and Android apps listed. I&apos;m also
                    available for support via text, phone, email, video chat,
                    and more! Let me take all the dirty work out of launching
                    and maintaining your web, iOS, and Android apps with my
                    software development services.
                  </Text>
                  <List mb={4}>
                    {[
                      "Domain Name",
                      "SSL Certificate",
                      "Web Hosting",
                      "Apple App Store Listing",
                      "Google Play Listing",
                      "SEO",
                      "Technical Support",
                    ].map((item) => (
                      <ListItem key={item}>
                        <ListIcon as={RiCheckFill} />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                  <Heading as={"h3"} size={"lg"}>
                    Long Term Support (LTS)
                  </Heading>
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
                  <List mb={4}>
                    {[
                      "Keep your Apps Active",
                      "Productivity Tools",
                      "1-3 FREE Hours of Updates a Month",
                    ].map((item) => (
                      <ListItem key={item}>
                        <ListIcon as={RiCheckFill} />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                  <Heading as={"h3"} size={"lg"}>
                    Website or App?
                  </Heading>
                  <Text>
                    Your customers need power and utility, and not just another
                    still, inactive, and even boring website. Engaging with your
                    customers means investing in more than just a website. My
                    software development services will bring value to your
                    product via your new web app. Not to be entirely confused
                    with apps on your phone, web apps integrate the latest web
                    technologies with your data to bring your audiences
                    something better than just a landing page. Don&apos;t leave
                    your customers in the dust; give them the latest, greatest,
                    and most value with a sparkly new web app.
                  </Text>
                  <Heading as={"h3"} size={"lg"}>
                    iOS and Android
                  </Heading>
                  <Text>
                    Keep your product at your customers&apos; finger tips. In
                    addition to building something powerful and useful, together
                    we can build something your customers can access easily
                    anywhere in the world. In addition to building for the web,
                    my software development services also include building apps
                    for phones. With the latest technologies we&apos;ll create
                    easier access to you and your brand in the form of a iOS and
                    Android apps. Keep your customer engagement high, increasing
                    your product value, by allowing your customers to take you
                    in their pockets anywhere.
                  </Text>
                  <Heading as={"h3"} size={"lg"}>
                    Strategy
                  </Heading>
                  <Text>
                    Tell me about your values, the communities your serve, your
                    mission, and your objectives! Better knowing you, your
                    brand, and your product or service creates a stronger and
                    more valuable application. My software development services
                    are focused on and centered around your mission and
                    objectives throughout the entire development process.
                    Before, during, and even after production, we&apos;ll
                    continue to fine-tune your product and pitch. I will ensure
                    your web, iOS, and Android apps embody you and your values
                    boldly and proudly.
                  </Text>
                  <Heading as={"h3"} size={"lg"}>
                    Process
                  </Heading>
                  <Text>
                    Let&apos;s get you up and running with software development
                    services in three easy steps. First, schedule the first of
                    your two FREE 1-hour consultations. After your first
                    consultation, you&apos;ll receive a creative brief and
                    project plan. Secondly, we&apos;ll build you a secret
                    website where you can preview our progress anytime. Then,
                    when the time is right, we&apos;ll launch your apps to the
                    web and app stores publicly. I&apos;m always here to answer
                    questions, maintain your software and make updates to it,
                    and be your guide to making this fast, easy, and even fun!
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
