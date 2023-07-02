import Head from "next/head";
import axios from "axios";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import AppsIndustries from "../components/AppsIndustries";
import Intro from "../components/Intro";
import ProfessionalService from "../components/json-ld/ProfessionalService";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Software Development Services | Stupendous Web | If you want to build
          community, build stupendous software
        </title>
        <meta
          property={"og:title"}
          content={
            "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
          }
        />
        <meta
          name={"description"}
          content={
            "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
          }
        />
        <meta
          property={"og:description"}
          content={
            "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
          }
        />
      </Head>
      <ProfessionalService />
      <Intro />
      <Solutions />
      <Testimonials />
      <AppsIndustries />
      <Questions />
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
