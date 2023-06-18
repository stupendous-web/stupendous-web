import Head from "next/head";
import axios from "axios";
import { LocalBusinessJsonLd } from "next-seo";
import { DiReact } from "react-icons/di";
import { Container, Icon, Text } from "@chakra-ui/react";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import AppsIndustries from "../components/AppsIndustries";
import Intro from "../components/Intro";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Software Development Services | Stupendous Web | If you want to build
          community, build stupendous software
        </title>
        <meta
          name={"description"}
          content={
            "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
          }
        />
      </Head>
      <LocalBusinessJsonLd
        type={"ProfessionalService"}
        id={"https://stupendousweb.com"}
        name={"Stupendous Software Development Services"}
        description={
          "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
        }
        url={"https://stupendousweb.com"}
        telephone={"+15108906429"}
        address={{
          streetAddress: "5150 Spyglass Hill Dr.",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89142",
          addressCountry: "US",
        }}
        geo={{
          latitude: "36.140720",
          longitude: "-115.061710",
        }}
      />
      <Intro />
      <Solutions />
      <Container maxW={"container.xl"} pt={[0, 16]}>
        <Text>
          I&apos;m a certified web developer and have many years of experience
          offering intentional and powerful software development services. I can
          create your tools with a combination of HTML, CSS, Less, UI Kit,
          Bootstrap, Material UI, Tailwind, Javascript, React, Next.js, jQuery,
          PHP, Laravel, MySQL, MongoDB, and many other tools.
        </Text>
        <Icon as={DiReact} boxSize={16} />
      </Container>
      <Testimonials />
      <Questions />
      <AppsIndustries />
      <Blog articles={articles} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const posts = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
    )
  ).data?.posts;

  return {
    props: {
      articles: posts,
    },
    revalidate: 10,
  };
}
