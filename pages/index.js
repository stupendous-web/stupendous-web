// import axios from "axios";
import Testimonials from "../components/Testimonials";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
// import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import AppsIndustries from "../components/AppsIndustries";
import Intro from "../components/Intro";
import CustomLocalBusinessJsonLd from "../components/json-ld/CustomLocalBusinessJsonLd";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Stupendous Web | If you want to build community, build stupendous
          software.
        </title>
        <meta
          property={"og:title"}
          content={
            "Stupendous Web | If you want to build community, build stupendous software."
          }
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
      <CustomLocalBusinessJsonLd />
      <Intro />
      <Solutions />
      <Testimonials />
      <AppsIndustries />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <FrequentlyAskedQuestions hasHeading />
      </Container>
      {/*<Blog articles={articles} />*/}
      <CTA />
    </>
  );
}

// export async function getStaticProps() {
//   const posts = (
//     await axios.get(
//       "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
//     )
//   ).data?.posts;
//
//   return {
//     props: {
//       articles: posts,
//     },
//     revalidate: 10,
//   };
// }
