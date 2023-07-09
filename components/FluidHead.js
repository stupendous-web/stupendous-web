import Head from "next/head";
import { useRouter } from "next/router";

export default function FluidHead({
  title = "Web and App Development Services",
  description = "I help people with something to share who want to engage with their community by delivering web and app development services that improve their brand awareness and authority.",
}) {
  const router = useRouter();

  return (
    <Head>
      <title>
        {`${title} | ${
          router.pathname === "/"
            ? "Stupendous Web"
            : "Web and App Development Services"
        } | ${
          router.pathname === "/"
            ? "If you want to build community, build stupendous software."
            : "Stupendous Web"
        }`}
      </title>
      <meta property={"og:title"} content={title} />
      <meta name={"description"} content={description} />
      <meta property={"og:description"} content={description} />
    </Head>
  );
}
