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
} from "@chakra-ui/react";
import {
  RiEyeLine,
  RiShoppingCartLine,
  RiArticleLine,
  RiSearchLine,
} from "react-icons/ri";
import CTA from "../components/CTA";
import { useEffect } from "react";
import ProfessionalService from "../components/json-ld/ProfessionalService";

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();

  const cards = [
    { heading: "Brand Awareness", icon: <RiEyeLine size={32} /> },
    { heading: "E-Commerce", icon: <RiShoppingCartLine size={32} /> },
    { heading: "Publishing", icon: <RiArticleLine size={32} /> },
    { heading: "Search Engine Optimization", icon: <RiSearchLine size={32} /> },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          Web Design Services | Software Development Services | Stupendous Web
        </title>
      </Head>
      <ProfessionalService />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Web Design Services
              </Heading>
              <Text as={"code"}>
                You’ve got something to say whether it be about your products
                and services or some other important message you want to
                broadcast across the web and across the world. Your audience is
                ready to hear it! They’re interested in your work, what you do,
                and the value of your product.{" "}
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
                    Being seen and heard in the wake of all the noise is
                    complex. Getting your message to those who need to hear it
                    most can be difficult.
                  </Text>
                  <Heading>The Value of Quality Web Design Services</Heading>
                  <Text>
                    It’s important to understand what web design is and how it
                    is a powerful tool in getting your message, your product,
                    and your service out to the masses. Powerful web design is
                    content that is helpful, outstanding, engaging, branded, and
                    accessible. Helpful content is educational, and informative,
                    and can even solve your visitors’ problems. An outstanding
                    website is something your visitors have never seen in the
                    thousands of sites they’ve seen before. Engaging websites
                    have interesting animations, visual interests, dynamic
                    forms, and other interactive elements. Branded websites
                    share who you are and what you’re working on visually
                    through design elements and through written content, images,
                    videos, and more. And of course, we want to make the content
                    of your website accessible to everyone and organized in an
                    easily consumable way. It’s important to make sure your
                    website design is addressing these topics.
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
                    I’m excited to help you utilize everything a good web design
                    has to offer to make your brand a valuable one. Creating
                    valuable content keeps your website sharable, exposing it to
                    friends of friends and family members beyond your initial
                    reach. And, if it’s unique visually, they’ll remember it for
                    a long time, keeping your work sustainable longer. Websites
                    that are engaging, keep people interacting with your product
                    longer, making them more likely to take action. And, it will
                    give you more opportunities to collect information about
                    your visitors and generate leads. If your website is
                    branded, it will give your business the trustworthiness and
                    credibility it deserves, making people more encouraged to
                    work with and buy from you. And, keeping your work
                    available, accessible, and easy to understand is important
                    for expanding your reach and getting your message, product,
                    and service across to your audiences. A good web design is
                    not just a pretty wall of text; it’s a gateway to generating
                    fans that will keep your work profitable and sustainable.
                  </Text>
                  <Heading>Process</Heading>
                  <Text>
                    The process is simple. First, we strategize. Then we design,
                    develop, and repeat.
                  </Text>
                  <Text>
                    The thoroughness of the process will minimize the risk of
                    getting your product out to the masses through your website.
                    This is why we start you off with a consultation. In your
                    consultation, we’ll talk about your brand and your product.
                    We’ll talk about your values, what communities you serve,
                    who wants and needs your product the most, and how to get it
                    to them via your website. You’ll receive your product brief,
                    and optionally a market report, design guide, brand guide,
                    suggested project plan, in-house development quote, and much
                    more. This is sometimes the most enriching part of the
                    process. Clients almost always walk away from these
                    consultations feeling inspired and eager to build something
                    revolutionary.
                  </Text>
                  <Text>
                    Let’s put this hard work to good use! The next part of the
                    process is design and development. We’ll create a design for
                    your website, pulling all the stops. Your website will be
                    excellently branded, unique and memorable, communicative of
                    your products, services, and messaging, accessible, and
                    exciting. This all is to build trust within your community,
                    increase action and sales, expand your community, and grow
                    your work. Everything we do in your consultation will help
                    us complete this work faster and more efficiently.
                  </Text>
                  <Text>
                    Congratulations! Now you’ve got a superior product. But
                    there’s still work to be done. In a fast-changing world,
                    you’ll want to make minor changes, security updates, feature
                    updates, and just have occasional questions or concerns.
                    That’s why I also offer a long-term support plan. I’ll
                    provide additional services to keep your website modern,
                    fresh, and popular. The process is iterative to keep your
                    product the best it can be and very exciting as the world
                    changes around it. But it all starts with a consultation.
                    I’m eager to learn about you, your brand, and your product,
                    and strategize a unique and powerful new website for your
                    business.
                  </Text>
                  <Heading>How does it Work?</Heading>
                  <Text>
                    I make getting started with your website fast, easy, and
                    even fun! My attention to detail and fully managed services
                    give you the time to focus on your product. First, let’s get
                    you a consultation! You can request a quote right here on
                    the website. In your consultation, we’ll discuss you and
                    your brand, refine your product, identify your target
                    audience and their wants and needs, and strategize an action
                    plan for your product. You’ll receive many documents to help
                    you on your journey to making your dreams of a website come
                    true. You’ll also receive an in-house development quote.
                    Once approved, you’ll receive a link to a secret website
                    where you can preview progress anytime. You may give
                    feedback via email or schedule a 1-1 at any point too. Once
                    you’re happy with your product, we’ll publish it to the real
                    live world wide web for all your customers to see! You’ll
                    receive an invoice once a week during development and I also
                    recommend my long-term support plan for after the project is
                    completed. This process all begins with a consultation. Take
                    the first step to connect with your community by requesting
                    a quote today!
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
