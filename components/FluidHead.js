import Head from "next/head";

export default function FluidHead({
  title = "Software Development Services",
  description = "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority.",
}) {
  return (
    <Head>
      <title>
        {`${title} | Stupendous Web | If you want to build community, build
        stupendous software`}
      </title>
      <meta property={"og:title"} content={title} />
      <meta name={"description"} content={description} />
      <meta property={"og:description"} content={description} />
    </Head>
  );
}
