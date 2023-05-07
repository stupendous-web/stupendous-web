import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { RiCheckFill } from "react-icons/ri";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-2.png";
import servicesImage from "../images/pages/services.png";

export default function Services() {
  const { setIsLoading, services } = useGlobal();

  return (
    <>
      <Head>
        <title>Services | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={[16, 32]} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text as={"code"}>
              My software development services make it easy for you to build
              your brand and relationships with interested customers by building
              you a revolutionary project, delivering it to your clients, and
              keeping it modern and new!
            </Text>
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[250, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"}>
            Services
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={"66.66%"}>
            <Flex mb={8}>
              {services.map((service) => {
                return (
                  <Link
                    key={service.target}
                    as={NextLink}
                    href={`#${service.target}`}
                    mr={4}
                  >
                    {service.shortTitle}
                  </Link>
                );
              })}
            </Flex>
            <Text mb={4}>
              Your project is more than just a pretty website. My software
              development services are more comprehensive than that. I&apos;m
              focused on launching a project for you that excels your brand.
              I&apos;m going to surround myself in your product, build you
              top-of-the-line web, iOS, and Android applications that reflect
              your product, give it a place on the web and on everybody&apos;s
              phone, so your community can find it and connect with you, and
              maintain the project even after it&apos;s done.
            </Text>
            <Heading id={"websites"} mb={8}>
              Web Pages and Web Apps
            </Heading>
            <Text mb={4}>
              A website or even a web app is still a must-have. It is my
              pleasure to build people with strong purpose in life websites that
              help them meet their goals. That&apos;s why my software
              development services include building you a website or web app. A
              website is just the beginning, but the internet is still a
              powerful community to share your work in. Your website or web app
              will bring awareness and authority to you, your business, and what
              you do.
            </Text>
            <List mb={4}>
              {[
                "Brand Awareness",
                "Products and Services Pages",
                "Contact Forms",
                "SEO Content",
                "Blogs",
                "CMS",
                "E-Commerce",
                "Help Desks",
                "CRM",
                "Discussion Forms",
                "Chat Rooms",
                "Image Editors",
              ].map((item) => (
                <ListItem key={item}>
                  <ListIcon as={RiCheckFill} />
                  {item}
                </ListItem>
              ))}
            </List>
            <Heading id={"ios-and-android-apps"} mb={8}>
              iOS and Android Apps
            </Heading>
            <Text mb={4}>
              Bring the hard work you do to everyone&apos;s pocket. Your
              life&apos;s work, products, services, and ideas can be accessible
              all day every day via a phone app. That&apos;s why my software
              development services also include iOS and Android app development.
              Your iOS and Android apps will be about your, your brand, and what
              you do and make them all more accessible to new and existing
              audiences. With phone apps we will easily connect you and what you
              do with more people.
            </Text>
            <List mb={4}>
              {[
                "Social Media",
                "Instant Messaging",
                "Contact Forms",
                "Photography",
                "Music and Audio",
                "Email",
                "Maps",
                "Health",
                "Dating",
                "Shopping",
                "Banking",
                "Smart Home",
                "Security",
                "Weather",
                "Astronomy",
                "File Sharing",
                "eBooks",
                "Astrology",
                "Finance",
              ].map((item) => (
                <ListItem key={item}>
                  <ListIcon as={RiCheckFill} />
                  {item}
                </ListItem>
              ))}
            </List>
            <Image
              src={servicesImage}
              alt={"Software Development Services"}
              id={"consulting"}
              style={{ marginBottom: "1rem" }}
            />
            <Heading mb={8}>Two FREE Consultations</Heading>
            <Text mb={4}>
              I enjoy offering these consultations at no charge because I
              believe working closely together is how we build strong
              communities. I offer two consultations alongside my software
              development services. In the first, I&apos;ll get to know you and
              the value your product is providing your communities. In the
              second, we&apos;ll make a plan for getting your product in the
              hands of those who need it most via your web, iOS, and Android
              apps. These consultations are designed for us to better deliver
              your product in a more impactful way.
            </Text>
            <Heading id={"software-development"} mb={8}>
              Software Development
            </Heading>
            <Text mb={4}>
              Are you and your product tapping into all the available channels
              these days? The web has extended well beyond computer screens and
              into the air waves. My software development services put you on
              the internet <em>and</em> on people&apos;s smart phones. Both of
              these communities are vital to what you do. Engage with your
              community, audiences, and people who love and need your product
              the most with a website and iOS/Android app.
            </Text>
            <Heading id={"secure-managed-domain-and-hosting"} mb={8}>
              Secure, Managed Domain and Hosting
            </Heading>
            <Text mb={4}>
              There are many things that go into getting your project online
              quickly, safely, and hassle-free. I&apos;m here to help with those
              too. I&apos;ll setup and manage your domain name, SSL
              certificates, and on-page SEO. In addition, I will get your iOS
              and Android apps listed. I&apos;m also available for support via
              text, phone, email, video chat, and more! Let me take all the
              dirty work out of launching and maintaining your web, iOS, and
              Android apps with my software development services.
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
            <Heading id={"long-term-support"} mb={8}>
              Long Term Support (LTS)
            </Heading>
            <Text mb={4}>
              Even well-working machines need their oil changed. Web, iOS, and
              Android applications are just the same. They will need upgrades
              and security updates from time to time. You may even want to make
              minor changes occasionally. I&apos;ll keep your application
              up-to-date with the latest technology and safe against security
              breaches. I&apos;ll even make minor updates as needed. Long term
              support will keep your technology fresh, your data safe, and your
              brand unique and desirable even after your software development
              services are completed.
            </Text>
            <List mb={4}>
              {[
                "Essentials to Keeping your Apps Active",
                "Access to Productivity Tools",
                "1-3 FREE Hours of Updates a Month (Minus New Features)",
              ].map((item) => (
                <ListItem key={item}>
                  <ListIcon as={RiCheckFill} />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
