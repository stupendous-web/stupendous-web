import { useEffect } from "react";
import Head from "next/head";
import { useGlobal } from "../lib/context";

export default function Partners() {
  const { setLoading } = useGlobal();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Partners | Web App Development Services | Stupendous Web</title>
      </Head>
      <div
        className={"uk-section uk-section-xlarge"}
        data-uk-height-viewport={"offset-bottom: true"}
      >
        <div className={"uk-container uk-container-small"}>
          <h1>Partners</h1>
          <p>
            Get a $25 virtual gift card when your friends and family sign up!
            Check back soon for the link generator.
          </p>
        </div>
      </div>
    </>
  );
}
