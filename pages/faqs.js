import Head from "next/head";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

export default function FAQs() {
  return (
    <>
      <Head>
        <title>
          FAQ&apos;s | Web and App Development Services | Stupendous Web
        </title>
        <meta
          property={"og:title"}
          content={"FAQ's | Web and App Development Services | Stupendous Web"}
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
      <FrequentlyAskedQuestions />
    </>
  );
}
