import { useEffect } from "react";
import { useGlobal } from "../lib/context";
import { NextSeo } from "next-seo";

export default function Partners() {
  const { setIsLoading } = useGlobal();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <NextSeo
        title={
          "Partners | Stupendous Web | If you want to build community, build a stupendous web app"
        }
      />
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
