import FluidHead from "../components/FluidHead";
// import axios from "axios";
import Testimonials from "../components/Testimonials";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
// import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import AppsIndustries from "../components/AppsIndustries";
import Intro from "../components/Intro";
import CustomLocalBusinessJsonLd from "../components/json-ld/CustomLocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <FluidHead />
      <CustomLocalBusinessJsonLd />
      <Intro />
      <Solutions />
      <Testimonials />
      <AppsIndustries />
      <FrequentlyAskedQuestions />
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
