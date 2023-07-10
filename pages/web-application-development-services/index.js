import FluidHead from "../../components/FluidHead";
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
  AspectRatio,
} from "@chakra-ui/react";
import {
  RiChat1Line,
  RiPaintBrushLine,
  RiHammerLine,
  RiRocket2Line,
  RiArrowRightLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import CustomLocalBusinessJsonLd from "../../components/json-ld/CustomLocalBusinessJsonLd";
import CTAButton from "../../components/CTAButton";
import NextLink from "next/link";
import Image from "next/image";
import stock0 from "../../images/stock/0.jpg";

export default function WebAppDevelopment() {
  const { colorMode } = useColorMode();

  const cards = [
    { heading: "Listen to your Customers", icon: <RiChat1Line size={32} /> },
    { heading: "Plan and Design", icon: <RiPaintBrushLine size={32} /> },
    { heading: "Build to be Flawless", icon: <RiHammerLine size={32} /> },
    { heading: "Launch and Market", icon: <RiRocket2Line size={32} /> },
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
      <FluidHead
        title={"Web Application Development Services"}
        description={
          "Need a new website that does more than the rest? Discover web design services that help you achieve your goals. Schedule your FREE consultation to receive your..."
        }
      />
      <CustomLocalBusinessJsonLd
        description={
          "Need a new website that does more than the rest? Discover web design services that help you achieve your goals. Schedule your FREE consultation to receive your..."
        }
      />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Web Application Development Services
              </Heading>
              <Text as={"code"}>
                Are you looking for creative new ways to engage with your
                customers? Do you feel so many of the tasks you and your
                customers undertake daily could be made easier online? But,
                maybe you’re unsure of how to start this project. Or, maybe you
                need the technical skills to see it through to a polished and
                functional product. Just don’t wait! There are customers out
                there waiting on you to build it!{" "}
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
                    We use websites, online software, and mobile apps all the
                    time, to make things faster, easier, and more fun. Yours can
                    do the same. But, it takes planning, a qualified developer,
                    and a dash of marketing to get your web app designed, built,
                    and online. My web application development services are here
                    to help you accomplish that.
                  </Text>
                  <Heading>
                    Your Web Application Development Services Toolkit
                  </Heading>
                  <Text>
                    An app-building toolbox better be filled with powerful web
                    application services to help you design, build, and share
                    your web application. Powerful web applications must be
                    carefully planned to solve problems for your customers,
                    beautifully designed, built flawlessly, and marketed to the
                    people who want and need it most. Listen to your audiences!
                    Build what they want and not what you think they want and
                    you’ll be successful. This is the research and strategizing
                    portion of my web application development services. Building
                    something somebody wants, needs, finds useful, and solves
                    problems will generate fans and add value to your work. My
                    web application designing services should create something
                    easy to understand. The functionality should be developed
                    carefully to not break and disrupt the user experience. And,
                    of course, your problem-solving machine won’t do any good
                    until we get it out to the people who need it. My web
                    application development services ensure your software is
                    built and marketed well, so you can profit and continue your
                    work. These steps will ensure that your software is
                    successful.
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
                    You’ve got the tools and web application services, now here
                    are the instructions. My web application development
                    services follow a proven step-by-step process to ensure your
                    software is successful. Research, plan, design, build to
                    perfection, test, and launch. You’ll be sure to get your
                    powerful new solution online and in the hands of your
                    community in no time, letting you make money. Now you can
                    grow and create more solutions for more people. They’re
                    ready for you!
                  </Text>
                  <Heading>
                    Full-Service Design, Development, and Support
                  </Heading>
                  <Text>
                    Web application development services should be simple.
                    Getting web application development services shouldn’t cost
                    you much effort or time. That’s why I offer a fully-managed
                    web application development process and web application
                    services. Your project includes web application designing
                    services, development, hosting, support, payment processing,
                    content management, analytics, and more. After my web
                    application designing services, your web application we’ll
                    begging to be built, we’ll launch it to the cloud, where
                    everyone can access it, allowing you to engage with your
                    audiences and for your audiences to achieve their goals.
                    Visitors to your online software can signup and pay for your
                    tools, keeping your work sustainable. You’ll be able to
                    easily manage content in a way that saves you time. And
                    you’ll be able to access your user analytics, allowing you
                    to revise your strategy and continue to build new iterations
                    of your tool that customers love, adding value that your
                    network will love. This and more are offered to make
                    building your software fast, easy, fun, and valuable!
                  </Text>
                  <Section
                    heading={"Hosting"}
                    text={
                      <Text>
                        Your software needs a place to live online and an
                        address so people can visit. To do this, we’ll utilize
                        cloud hosting and a domain name as part of my web
                        application development services. These web application
                        services include hosting and a domain name. This will
                        get your work on the web and out to the people who need
                        to use it. You’ll have the chance to brand your domain
                        name, too. Now you’ll have a place to share your app
                        with anyone with an internet connection, and you can
                        share your web app easily with others online and even in
                        person.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Support"}
                    text={
                      <Text>
                        I live and breathe online software and love working
                        closely with clients. And I know you’ll have questions,
                        concerns, and work that needs to be done. I’m available
                        via email anytime, and you can always schedule a 1-1 to
                        discuss these web app development services more
                        in-depth! You can also submit tasks for me to do via a
                        Kanban board. You shouldn’t feel alone or let a robot
                        handle these web application services that are this
                        custom. I’m a real live boy here to guide you through
                        the whole process, start to finish! We’ll work together
                        to get a quality product up and running smoothly and
                        quickly.
                      </Text>
                    }
                  />
                  <Section
                    heading={"Payment Processing"}
                    text={
                      <Text>
                        Let your customers pay you while you sleep. My web
                        application development services include payment
                        integrations. Your payment processing integrations for
                        your registrations or other in-app purchases work around
                        the clock for you seven days a week. As part of my web
                        app development services, you can accept payments with
                        the power of Stripe, Paypal, or any other payment
                        processing integrations. These web application services
                        are designed around getting your visitor&apos;s payment
                        anytime and depositing them to your bank account. The
                        ability to take payment directly from your software
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
                        Take control of your software. With the power of a
                        content management system (CMS), you don’t need a
                        developer to go in and make minor changes to the content
                        of your website. In my web application development
                        services, we’ll build your web app with an easy-to-use
                        dashboard where you can log in and write and publish
                        content to your web app day or night. Changes you make
                        will reflect almost immediately. These web application
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
                        as part of my web application development services.
                        Analytics is a powerful way to track and understand
                        potential users and generate new visitors. As part of
                        these web app development services, you&apos;ll receive
                        access to various analytics dashboards connected to your
                        software. They provide all sorts of helpful information.
                        As you watch it grow your business, reach, and
                        community, user analytics will become your new and
                        powerful best friend.
                      </Text>
                    }
                  />
                </Card>
              </GridItem>
              <GridItem colSpan={[5, 2]}>
                <AspectRatio
                  ratio={1}
                  shadow={"md"}
                  transition={"all .66s"}
                  borderRadius={"md"}
                  overflow={"hidden"}
                  _hover={{ shadow: "hover" }}
                >
                  <Image
                    src={stock0}
                    alt={
                      "People gathered around computer talking about web application development services"
                    }
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </AspectRatio>
              </GridItem>
              <GridItem colSpan={[5, 3]}>
                <Card>
                  <Flex
                    h={"100%"}
                    direction={"column"}
                    justify={"space-between"}
                  >
                    <Box>
                      <Heading as={"p"} mb={4}>
                        Start your Project Now
                      </Heading>
                      <Text>
                        Scheduling your free consultation takes as little as
                        seconds. Click below to start building something your
                        audiences will love.
                      </Text>
                    </Box>
                    <Box>
                      <CTAButton />
                      <Link
                        as={NextLink}
                        href={"/services/software-consultation"}
                        title={
                          "Software Consultation | Web and App Development Services | Stupendous Web"
                        }
                      >
                        <Button
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
                  </Flex>
                </Card>
              </GridItem>
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Heading>Small Business Web Applications</Heading>
                  <Text>
                    You’re working on something unique. Web application
                    development services are the key to sharing it with
                    interested people and getting it to those who want and need
                    it most. I love helping small businesses with web
                    application services to build web software because I learn
                    about them, their values, and their products. Whether you’re
                    building a tool to help people cook their vegetables or help
                    get visually impaired people to the doctor, you’ll need a
                    qualified software developer like me. A good web app solves
                    problems, makes life more fun, and makes you money to keep
                    building.
                  </Text>
                  <Heading>Screen Size</Heading>
                  <Text>
                    People will access your software from their computers,
                    phones, and even watches! With many screen sizes available
                    to access your web app, it’s crucial to consider when
                    choosing web application development services, which I think
                    heavily about. We’ll use my responsive web application
                    designing services and best practices as part of these web
                    app development services to ensure your web app is
                    accessible and looks excellent on almost any device. This is
                    one of the most important web application services. You can
                    quickly lose your potential users with a web app that is not
                    responsive. So, we’ll keep your web application accessible
                    and responsive to ensure all your fans can find you from any
                    device.
                  </Text>
                  <Heading>Process</Heading>
                  <Text>
                    The process of these web application development services is
                    simple and repeatable. First, in my web application
                    development services, we strategize. Then we design,
                    develop, and repeat. With these simple web application
                    services, we take time to minimize the risk of your venture
                    and attend to detail to ensure we get it right. Then, we
                    start the process over because we’re constantly improving.
                  </Text>
                  <Section
                    heading={"Strategize"}
                    text={
                      <Text>
                        The thoroughness of the process will minimize the risk
                        of getting your product out to the masses through your
                        landing page. This is why the first of my web
                        application development services is to start you with a
                        consultation. In your consultation, part of my web app
                        development services, we’ll discuss your brand and
                        product. We’ll talk about your values, what communities
                        you serve, who wants and needs your product the most,
                        and how to get it to them. Optionally you’ll receive
                        your product brief, a market report, a design guide, and
                        a brand guide. You’ll also receive a suggested project
                        plan and an in-house development quote. This is
                        sometimes the most enriching part of these web
                        application services. Clients almost always leave these
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
                        my web app services is web application designing
                        services and development. In my web app development
                        services, we’ll create a plan for your software, pulling
                        all the stops. Your web app will be excellently branded,
                        unique, memorable, accessible, and exciting. These
                        detailed web application services build trust, increase
                        registration and sales, and expand your community.
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
                        app services and now have a superior product. But there
                        are still web app development services yet to check off.
                        In a fast-changing world, you’ll want to make minor
                        changes, security updates, feature updates, and just
                        have occasional questions or concerns. That’s why I also
                        offer an optional long-term support plan. I’ll provide
                        additional services to keep your web software modern,
                        fresh, and popular. The process is iterative to keep
                        your product the best it can be and exciting as the
                        world changes. But it all starts with a consultation.
                        I’m eager to learn about you, your brand, and your ideas
                        and strategize a unique and powerful new online software
                        for your business.
                      </Text>
                    }
                  />
                  <Heading>How does it Work?</Heading>
                  <Text>
                    I make starting my web application development services for
                    creating your software fast, easy, and fun! My attention to
                    detail and fully managed web app development services give
                    you the time to focus on your product. First, let’s get you
                    a consultation! You can schedule a free consultation on the
                    website in just a few seconds. In your consultation, we’ll
                    discuss you and your brand, refine your product, identify
                    your target audience and their wants and needs, and
                    strategize an action plan for your product. My web
                    application services include many documents to help you make
                    your dreams of a web app come true. You’ll also receive an
                    in-house development quote. Once approved, you’ll receive a
                    link to a beta web application to preview progress anytime.
                    You may give feedback or make requests via email, schedule a
                    1-1, or submit requirements via your Kanban board at any
                    point. Once you’re happy with your product, we’ll publish it
                    to the real live world wide web for all your customers to
                    see! You’ll receive an invoice once a week during
                    development. I also recommend my long-term support plan
                    after the project is completed. This process all begins with
                    a consultation. Take the first step to connecting with your
                    community by scheduling a quote now.
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
