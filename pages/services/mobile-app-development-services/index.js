import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
  Divider,
} from "@chakra-ui/react";
import {
  RiCoinLine,
  RiStarLine,
  RiCursorLine,
  RiPaintBrushLine,
  RiSearchEyeLine,
} from "react-icons/ri";
import CTA from "../../../components/CTA";
import CustomLocalBusinessJsonLd from "../../../components/json-ld/CustomLocalBusinessJsonLd";
import CTARow from "../../../CTARow";
import Head from "next/head";

export default function WebAppDevelopment() {
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

  return (
    <>
      <Head>
        <title>
          {"Mobile App Development Services | Web and App Development Services"}
        </title>
        <meta
          property={"og:title"}
          content={
            "Mobile App Development Services | Web and App Development Services"
          }
        />
        <meta
          name={"description"}
          content={
            "Have an idea for a revolutionary new mobile app? Connect with your audience with my mobile app development services. Schedule your consultation to receive your..."
          }
        />
        <meta
          property={"og:description"}
          content={
            "Have an idea for a revolutionary new mobile app? Connect with your audience with my mobile app development services. Schedule your consultation to receive your..."
          }
        />
      </Head>
      <CustomLocalBusinessJsonLd
        description={
          "Have an idea for a revolutionary new mobile app? Connect with your audience with my mobile app development services. Schedule your consultation to receive your..."
        }
      />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Mobile App Development Services
              </Heading>
              <Text as={"code"}>
                Your idea for the next greatest mobile app keeps you up all
                night. It’s helpful, easy to use, shareable, and makes you
                money. People download apps from Apple and Android all the time.
                They’re looking for your app, but you haven’t built it yet. So,
                let’s get started on your mobile app so you can rest easy!{" "}
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
                    Your awesome idea for a new mobile app is the first step in
                    creating something popular and powerful for your customers.
                    But, you may not have the technical expertise to build your
                    product. Strategizing and creating a process for building
                    your app can be overwhelming. And getting your app published
                    to the App Store and Google Play can be confusing. That’s
                    why I’m here to eliminate the difficult parts of creating
                    your app and make the process easy, profitable, and even
                    fun!
                  </Text>
                  <Heading>Quality Mobile App Development Services</Heading>
                  <Text>
                    It’s important to focus on quality when building your app.
                    You’ll want something unique, engaging, branded, accessible,
                    shareable, and functional to be successful and even
                    profitable. Your app should stand out and be memorable,
                    making it easy to share and reflect your values. It should
                    be readily available and easy to use without any bugs or
                    difficulties. Most importantly, your product will be more
                    valuable if it makes your customers’ lives easier, solves
                    problems, and is fun, allowing you to make it more
                    profitable for you. Making sure all these boxes are checked
                    starts with creating a process that you can follow through
                    with in these mobile development services. Start with my
                    software consultation as an entry point to this and these
                    high-quality mobile app development services to make sure
                    you take all the necessary steps to creating a successful
                    app that keeps your work sustainable.
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
                    These quality-focused mobile app development services add
                    value to your work and potentially make you more money.
                    Having something with a unique branded design and user
                    experience and something that provides a service that no one
                    else has tackled makes your app and your work more memorable
                    so users return. It makes your work exciting to use. And, it
                    sets your service apart from the rest, giving you a niche
                    advantage. Keeping your users engaged gives you more time to
                    interact with them and maybe even turn them into customers.
                    Engaged customers are more likely to purchase your product
                    or service too. Accessibility is important too. You want to
                    make your app easy to download, use, and interact with by
                    anyone, increasing the reach of your work. You also don’t
                    want your users to experience any unexpected results or
                    errors, because this will actually deter people from using
                    your app. All these things make your work valuable, your app
                    frequently downloaded, and even shareable so your message or
                    your products and services reach even more people! These are
                    only some of the things I consider in these mobile
                    development services and when I work on your mobile app.
                    These are all included as part of my mobile app development
                    services, including your software consultation.
                  </Text>
                  <Heading>Full-Service Mobile App Services</Heading>
                  <Text>
                    Using mobile app development services should be simple.
                    Getting these mobile development services shouldn’t cost you
                    hardly any effort or time. That’s why I offer fully-managed
                    mobile app development solutions. Your project includes
                    design, development, app store hosting, support, payment
                    processing, content management, analytics, and more. After
                    your design is finalized and your app is built, we’ll launch
                    it to the App Store and Google Play, where everyone can
                    access it, connecting you with your audiences, users, and
                    customers. Your visitors can pay for products and services,
                    keeping your work sustainable. You’ll be able to easily
                    manage content in a way that saves you time. And you’ll be
                    able to access your visitor analytics, allowing you to
                    revise your strategy and continue to build up your network
                    as well as your profits. This and more are offered to make
                    building your app fast, easy, fun, and valuable!
                  </Text>
                  <Section
                    heading={"Share your App"}
                    text={
                      <Text>
                        Your app needs a place to live. To do this, we’ll
                        utilize cloud hosting and a listing with Apple and
                        Android as part of my mobile app development services.
                        These mobile development services will get your work on
                        people’s phones and out to the people who need to use
                        it. Now you’ll have a place to showcase your message,
                        product, and service to anyone with a smartphone, and
                        you can share your work easily.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Support"}
                    text={
                      <Text>
                        I live and breathe mobile app development services and
                        love working closely with clients. And I know you’ll
                        have questions, concerns, and work that needs to be
                        done. I’m available via email anytime, and you can
                        always schedule a 1-1 to discuss these mobile
                        development services more in-depth! You can also submit
                        tasks for me to do via a Kanban board. You shouldn’t
                        feel alone or let a robot do all the work. I’m a real
                        live person here to guide you through the whole process,
                        start to finish! We’ll work together to get a quality
                        product up and running smoothly and quickly.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Payment Processing"}
                    text={
                      <Text>
                        Let your customers pay you while you sleep. My mobile
                        app development services include payment integrations.
                        Your payment processing integrations for your products,
                        bookings, donations, or anything else will work around
                        the clock for you seven days a week. As part of my
                        mobile development services, you can accept payments
                        with the power of Stripe, Paypal, App Store, Google
                        Play, or any other payment processing integrations.
                        These are designed to make getting your visitor&apos;s
                        payment anytime and deposit them to your bank account.
                        The ability to take payment directly from your app
                        creates authority, builds trust between you and your
                        clients, and keeps the lights on for you and your
                        business.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Content Management"}
                    text={
                      <Text>
                        Take control of your app. With the power of a content
                        management system (CMS), you don’t need a developer to
                        make minor changes to the content of your app. During my
                        mobile app development services, we’ll build your app
                        with an easy-to-use dashboard where you can log in,
                        write, and publish content to your app day or night.
                        Changes you make will reflect quickly. These mobile
                        development services will save you time, headaches, and
                        money!
                      </Text>
                    }
                  />
                  <Section
                    heading={"Analytics"}
                    text={
                      <Text>
                        Grow your business with the right user analytics tools
                        as part of my mobile app development services. Analytics
                        is a powerful way to track and understand users and
                        generate new ones. As part of these mobile development
                        services, you&apos;ll receive access to a variety of
                        analytics dashboards connected to your app. They provide
                        all sorts of helpful information. As you watch it grow
                        your business, reach, and community, user analytics will
                        become your new and powerful best friend.
                      </Text>
                    }
                  />
                </Card>
              </GridItem>
              <CTARow />
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Heading>Small Business Website Design</Heading>
                  <Text>
                    You’re working on something unique. Mobile app development
                    services are the key to sharing it with interested people
                    and getting it to those who want and need it most. I love
                    helping small businesses with mobile development services
                    because I learn about them, their values, and their
                    products. Whether selling a robust new product, offering a
                    helpful service, or sharing an inspirational message, you’ll
                    need a good mobile app. A good app connects you, your work,
                    and your fans.
                  </Text>
                  <Heading>Phone Size</Heading>
                  <Text>
                    People use apps from many brands and models of smartphones
                    with various screen sizes! With many screen sizes available
                    to access your app form, it’s crucial to consider when
                    choosing mobile development services, which I think heavily
                    about. We’ll use responsive design as part of these mobile
                    app development services to ensure your mobile app is
                    accessible and looks excellent on almost any smartphone. You
                    can quickly lose your potential visitors with an app that is
                    not responsive. So, we’ll keep your app accessible and
                    responsive to ensure all your fans can find you from any
                    device.
                  </Text>
                  <Heading>Conversion Rate</Heading>
                  <Text>
                    A high conversion rate could mean selling and shipping
                    products to all your visitors, turning your visitors into
                    leads, or convincing them to purchase your product or sign
                    up for your mobile development services. Each of these
                    actions is a conversion and contributes to your conversion
                    rate. This is an essential part of good mobile app
                    development services. Getting you a high conversion rate is
                    always a priority of my app design services. Conversions
                    also contribute to your wallet and support your excellent
                    work to keep it around for years. A good app design keeps
                    your product and message sustainable and your conversion
                    rates high.
                  </Text>
                  <Heading>Process</Heading>
                  <Text>
                    The process of these mobile app development services is
                    simple and repeatable. First, in my mobile development
                    services, we strategize. Then we design, develop, and
                    repeat. With this simple process, we take time to minimize
                    the risk of your venture and attend to detail to ensure we
                    get it right. Then, we start the process over because we’re
                    constantly improving.
                  </Text>
                  <Section
                    heading={"Strategize"}
                    text={
                      <Text>
                        The thoroughness of the process will minimize the risk
                        of getting your product out to the masses through your
                        app. This is why the first of my mobile app development
                        services is to start you with a consultation. In your
                        consultation, which is part of my mobile development
                        services, we’ll discuss your brand and product. We’ll
                        talk about your values, what communities you serve, who
                        wants and needs your product the most, and how to get it
                        to them via your mobile app. You’ll receive your product
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
                        my mobile app development services is to design and
                        develop. In my mobile development services, we’ll create
                        a plan for your app, pulling all the stops. Your app
                        will be excellently branded, unique and memorable,
                        communicative of your products, services, and messaging,
                        accessible, and exciting. This builds trust, increases
                        action and sales, expands your community, and grows your
                        work. Everything we do in your consultation will help us
                        complete this work faster and more efficiently.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Repeat"}
                    text={
                      <Text>
                        Congratulations! You’ve completed almost all of my
                        mobile app development services and now have a superior
                        product. But there are still mobile development services
                        yet to check off. In a fast-changing world, you’ll want
                        to make minor changes, security updates, feature
                        updates, and just have occasional questions or concerns.
                        That’s why I also offer a long-term support plan. I’ll
                        provide additional mobile app development solutions to
                        keep your app modern, fresh, and popular. The process is
                        iterative to keep your product the best it can be and
                        exciting as the world changes. But it all starts with a
                        consultation. I’m eager to learn about you, your brand,
                        and your product and strategize a unique and powerful
                        new app for your business.
                      </Text>
                    }
                  />
                  <Heading>How does it Work?</Heading>
                  <Text>
                    I make starting my mobile app development services for
                    creating your app fast, easy, and fun! My attention to
                    detail and fully managed mobile development services give
                    you the time to focus on your product. First, let’s get you
                    a consultation! You can request a quote right here on the
                    website in just a few seconds. In your consultation, we’ll
                    discuss you and your brand, refine your product, identify
                    your target audience and their wants and needs, and
                    strategize an action plan for your product. You’ll receive
                    many documents to help you make your dreams of an app come
                    true. You’ll also receive an in-house development quote.
                    Once approved, you’ll receive a link to a personal preview
                    where you can see progress anytime. You may give feedback or
                    make requests via email, schedule a 1-1, or submit
                    requirements via your Kanban board at any point. Once you’re
                    happy with your product, we’ll publish it on the airwaves
                    for all your customers to see! You’ll receive an invoice
                    once a week during development. I also recommend my
                    long-term support plan after the project is completed. This
                    process all begins with a consultation. Take the first step
                    to connect with your community by requesting a quote today!
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
