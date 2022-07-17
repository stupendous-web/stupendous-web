import { useEffect } from "react";
import { useLoading } from "../lib/context";
import imagesloaded from "imagesloaded";
import Head from "next/head";

export default function Review() {
  const { setLoading } = useLoading();
  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          2022 Review | Web App Development Services | Stupendous Web
        </title>
      </Head>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          <h1>2022 Review</h1>
          <p>
            I want to make a positive impact just like you. I help elevate
            communities with website design and digital marketing. In addition
            to that, every year I assess and try to understand my core values
            using them to decide where and how to leave a lasting impact. In
            2022 I&apos;ll be focusing on compassion, tolerance, equality,
            meaningful work, and authenticity. That&apos;s why every month I
            will donate 0.1% of my income to The Alameda County Food Bank to
            help feed those who need food and Out in Tech to help center LGBTQ+
            voices. Plus I&apos;ll do my part to maintain a sustainable Earth.
            We&apos;re in this together.
          </p>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-expand"}>
          <p
            className={"uk-h2 uk-text-uppercase uk-text-center"}
            uk-parallax={"x: 800, -1600"}
          >
            Compassion &middot; Tolerance &middot; Equality &middot; Meaningful
            Work &middot; Authenticity
          </p>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <p>
            I&apos;ve given away <span className={"uk-text-bold"}>1</span>{" "}
            community impact scholarships this year
          </p>
          <p>
            I&apos;ve helped <span className={"uk-text-bold"}>4</span> awesome
            clients reach their goals this year.
          </p>
          <p className={"uk-margin-remove-top"}>
            So far, $14.39 was donated to the Alameda County Food Bank which has
            helped feed about <span className={"uk-text-bold"}>28</span> people.
          </p>
          <p className={"uk-margin-remove-top"}>
            So far, <span className={"uk-text-bold"}>$14.39</span> was donated
            to the Out in Tech to help encourage diversity and inclusion in the
            workplace.
          </p>
          <p className={"uk-margin-remove-top"}>
            Green Geeks has also helped offset{" "}
            <span className={"uk-text-bold"}>300%</span> of my server&apos;s
            carbon emissions with clean renewable energy, helping to fight
            climate change.
          </p>
        </div>
      </div>
    </>
  );
}
