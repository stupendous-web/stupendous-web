import Head from "next/head";
import { useGlobal } from "../lib/context";
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
  Button,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import {
  RiCoinLine,
  RiStarLine,
  RiCursorLine,
  RiPaintBrushLine,
  RiSearchEyeLine,
  RiArrowRightLine,
} from "react-icons/ri";
import CTA from "../components/CTA";
import { useEffect } from "react";
import ProfessionalService from "../components/json-ld/ProfessionalService";
import CTAModal from "../components/CTAModal";
import NextLink from "next/link";

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  const cards = [
    { heading: "Valuable", icon: <RiCoinLine size={32} /> },
    { heading: "Unique", icon: <RiStarLine size={32} /> },
    { heading: "Engaging", icon: <RiCursorLine size={32} /> },
    { heading: "Branded", icon: <RiPaintBrushLine size={32} /> },
    { heading: "Accessible", icon: <RiSearchEyeLine size={32} /> },
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          Website Design Services | Software Development Services | Stupendous
          Web
        </title>
      </Head>
      <ProfessionalService />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Website Design Services
              </Heading>
              <Text as={"code"}>
                You have something to say about your products and services or
                some other critical message you want to broadcast across the web
                and the world. Your audience is ready to hear it! They’re
                interested in your work, what you do, and the value of your
                product.{" "}
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
                    Getting your product, your services, or any message, for
                    that matter, seen and heard by your audience can be complex
                    with so many competitors. You need to engage your audience
                    in three seconds before they find the next ad, blog, news
                    article, or social media post. A website, used wisely, can
                    help.
                  </Text>
                  <Heading>
                    The Value of Convincing Website Design Services
                  </Heading>
                  <Text>
                    It’s essential to understand web design services and how
                    they are powerful in getting your message, product, and
                    service out to the masses. Your content must be helpful,
                    outstanding, engaging, branded, and accessible. We’ll do
                    this with my website design services. Valuable educational
                    and informative content can even solve visitors’ problems.
                    An exceptional website is something your visitors have never
                    seen in the thousands of sites they’ve seen before. Engaging
                    websites have exciting animations, visual interests, dynamic
                    forms, and other interactive elements. Branded websites
                    share who you are and what you’re working on visually
                    through design elements and written content, images, videos,
                    and more. And, of course, we want to make the content of
                    your website accessible to everyone and organized in an
                    easily consumable way. These are just a few essential
                    elements of web design.
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
                    As part of my website design services, I’ll help you utilize
                    everything a good web design offers to make your brand
                    valuable. Creating valuable content keeps your website
                    sharable, exposing it to friends of friends and family
                    members beyond your initial reach. And, if it’s unique
                    visually, they’ll remember it for a long time, keeping your
                    work sustainable longer. Engaging websites keep people
                    interacting with your product longer, making them more
                    likely to take action. And it will give you more
                    opportunities to collect information about your visitors and
                    generate leads. If your website is branded, it will give
                    your business the trustworthiness and credibility it
                    deserves, making people more encouraged to work with and buy
                    from you. And keeping your work available, accessible, and
                    easy to understand is essential for expanding your reach and
                    getting your message, product, and service across to your
                    audiences. Good web design services aren’t just a pretty
                    wall of text; they’re a gateway to generating fans that will
                    keep your work profitable and sustainable.
                  </Text>
                  <Heading>Full-Service Web Design</Heading>
                  <Text>
                    Web design services should be simple. Getting website design
                    services shouldn’t cost you hardly any effort or time.
                    That’s why I offer a fully-managed website design and
                    development process. Your project includes design,
                    development, hosting, support, payment processing, content
                    management, analytics, and more. After your design is
                    finalized and your website is built, we’ll launch it to the
                    cloud, where everyone can access it, connecting you with
                    your audiences. Your visitors can pay for products and
                    services, keeping your work sustainable. You’ll be able to
                    easily manage content in a way that saves you time. And
                    you’ll be able to access your visitor analytics, allowing
                    you to revise your strategy and continue to build up your
                    network. This and more are offered to make building your
                    website fast, easy, fun, and valuable!
                  </Text>
                  <Section
                    heading={"Hosting"}
                    text={
                      <Text>
                        Your website needs a place to live and an address so
                        people can visit. To do this, we’ll utilize cloud
                        hosting and a domain name as part of my web design
                        services. These website design services include website
                        hosting and a domain name. This will get your work on
                        the web and out to the people who need to see it. You’ll
                        have the chance to brand your domain name, too. Now
                        you’ll have a place to showcase your work to anyone with
                        an internet connection, and you can share your work
                        easily with others online and even in person.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Support"}
                    text={
                      <Text>
                        I live and breathe web design services and love working
                        closely with clients. And I know you’ll have questions,
                        concerns, and work that needs to be done. I’m available
                        via email anytime, and you can always schedule a 1-1 to
                        discuss these website design services more in-depth! You
                        can also submit tasks for me to do via a Kanban board.
                        You shouldn’t feel alone or let a robot do all the work.
                        I’m a real live boy here to guide you through the whole
                        process, start to finish! We’ll work together to get a
                        quality product up and running smoothly and quickly.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Payment Processing"}
                    text={
                      <Text>
                        Let your customers pay you while you sleep. My website
                        design services include payment integrations. Your
                        payment processing integrations for your products,
                        bookings, donations, or anything else will work around
                        the clock for you seven days a week. As part of my web
                        design services, you can accept payments with the power
                        of Stripe, Paypal, or any other payment processing
                        integrations. These are designed to make getting your
                        visitor&apos;s payment anytime and deposit them to your
                        bank account. The ability to take payment directly from
                        your website creates authority, builds trust between you
                        and your clients, and keeps the lights on for you and
                        your business.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Content Management"}
                    text={
                      <Text>
                        Take control of your website. With the power of a
                        content management system (CMS), you don’t need a
                        developer to go in and make minor changes to the content
                        of your website. In my web design services, we’ll build
                        your website with an easy-to-use dashboard where you can
                        log in and write and publish content to your website day
                        or night. Changes you make will reflect almost
                        immediately. These website design services will save you
                        time, headaches, and money!
                      </Text>
                    }
                  />
                  <Section
                    heading={"Analytics"}
                    text={
                      <Text>
                        Grow your business with the right web analytics tools as
                        part of my website design services. Analytics is a
                        powerful way to track and understand visitors and
                        generate new ones. As part of these web design services,
                        you&apos;ll receive access to a variety of analytics
                        dashboards connected to your website. They provide all
                        sorts of helpful information. As you watch it grow your
                        business, reach, and community, website analytics will
                        become your new and powerful best friend.
                      </Text>
                    }
                  />
                  <Box my={8}>
                    <CTAModal size={"lg"} />
                    <Link
                      as={NextLink}
                      href={"/services/software-consultation"}
                      title={
                        "Software Consultation | Software Development Services | Stupendous Web"
                      }
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
                  <Heading>Small Business Website Design</Heading>
                  <Text>
                    You’re working on something unique. Web design services are
                    the key to sharing it with interested people and getting it
                    to those who want and need it most. I love helping small
                    businesses with website design services because I learn
                    about them, their values, and their products. Whether
                    selling a robust new product, offering a helpful service, or
                    sharing an inspirational message, you’ll need a good web
                    design. A good web design connects you, your work, and your
                    fans.
                  </Text>
                  <Heading>Screen Size</Heading>
                  <Text>
                    People surf the web from their computers, phones, and even
                    watches! With many screen sizes available to access your
                    website form, it’s crucial to consider when choosing website
                    design services, which I think heavily about. We’ll use
                    responsive web design as part of these web design services
                    to ensure your website is accessible and looks excellent on
                    almost any device. You can quickly lose your potential
                    visitors with a web design that is not responsive. So, we’ll
                    keep your website accessible and responsive to ensure all
                    your fans can find you from any device.
                  </Text>
                  <Heading>Conversion Rate</Heading>
                  <Text>
                    A high conversion rate could mean selling and shipping
                    products to all your visitors, turning your visitors into
                    leads, or convincing them to download your book or listen to
                    your podcast. Each of these actions is a conversion and
                    contributes to your conversion rate. This is an essential
                    part of website design services. Getting you a high
                    conversion rate is always a priority of my web design
                    services. Conversions also contribute to your wallet and
                    support your excellent work to keep it around for years. A
                    good web design keeps your product and message sustainable
                    and your conversion rates high.
                  </Text>
                  <Heading>Process</Heading>
                  <Text>
                    The process of these web design services is simple and
                    repeatable. First, in my website design services, we
                    strategize. Then we design, develop, and repeat. With this
                    simple process, we take time to minimize the risk of your
                    venture and attend to detail to ensure we get it right.
                    Then, we start the process over because we’re constantly
                    improving.
                  </Text>
                  <Section
                    heading={"Strategize"}
                    text={
                      <Text>
                        The thoroughness of the process will minimize the risk
                        of getting your product out to the masses through your
                        website. This is why the first of my web design services
                        is to start you with a consultation. In your
                        consultation, which is part of my website design
                        services, we’ll discuss your brand and product. We’ll
                        talk about your values, what communities you serve, who
                        wants and needs your product the most, and how to get it
                        to them via your website. You’ll receive your product
                        brief, a market report, a design guide, a brand guide, a
                        suggested project plan, an in-house development quote,
                        and more. This is sometimes the most enriching part of
                        the process. Clients almost always leave these
                        consultations feeling inspired and eager to build
                        something revolutionary.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Design & Develop"}
                    text={
                      <Text>
                        Let’s put this hard work to good use! The next part of
                        my web design services is to design and develop. In my
                        website design services, we’ll create a plan for your
                        website, pulling all the stops. Your website will be
                        excellently branded, unique and memorable, communicative
                        of your products, services, and messaging, accessible,
                        and exciting. This builds trust, increases action and
                        sales, expands your community, and grows your work.
                        Everything we do in your consultation will help us
                        complete this work faster and more efficiently.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Repeat"}
                    text={
                      <Text>
                        Congratulations! You’ve completed almost all of my web
                        design services and now have a superior product. But
                        there are still website design services yet to check
                        off. In a fast-changing world, you’ll want to make minor
                        changes, security updates, feature updates, and just
                        have occasional questions or concerns. That’s why I also
                        offer a long-term support plan. I’ll provide additional
                        services to keep your website modern, fresh, and
                        popular. The process is iterative to keep your product
                        the best it can be and exciting as the world changes.
                        But it all starts with a consultation. I’m eager to
                        learn about you, your brand, and your product and
                        strategize a unique and powerful new website for your
                        business.
                      </Text>
                    }
                  />
                  <Heading>How does it Work?</Heading>
                  <Text>
                    I make starting my web design services for creating your
                    website fast, easy, and fun! My attention to detail and
                    fully managed website design services give you the time to
                    focus on your product. First, let’s get you a consultation!
                    You can request a quote right here on the website in just a
                    few seconds. In your consultation, we’ll discuss you and
                    your brand, refine your product, identify your target
                    audience and their wants and needs, and strategize an action
                    plan for your product. You’ll receive many documents to help
                    you make your dreams of a website come true. You’ll also
                    receive an in-house development quote. Once approved, you’ll
                    receive a link to a personal website where you can preview
                    progress anytime. You may give feedback or make requests via
                    email, schedule a 1-1, or submit requirements via your
                    Kanban board at any point. Once you’re happy with your
                    product, we’ll publish it to the real live world wide web
                    for all your customers to see! You’ll receive an invoice
                    once a week during development. I also recommend my
                    long-term support plan after the project is completed. This
                    process all begins with a consultation. Take the first step
                    to connecting with your community by requesting a quote
                    today!
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
