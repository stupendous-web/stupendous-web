import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CTA from "../../components/CTA";

import isometric from "../../images/isometrics/isometric-1-2.png";

dayjs.extend(relativeTime);

export default function Articles() {
  const { articles, tags, setIsLoading } = useGlobal();

  useEffect(() => {
    if (!!articles?.length && !!tags?.length) {
      setIsLoading(false);
    }
  }, [articles, tags]);

  return (
    <>
      <Head>
        <title>Articles | Software Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Software Development Services"}
                priority
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            {/*<div className={"uk-width-2-3@s"}>*/}
            {/*  <p className={"uk-text-justify uk-dropcap monospace"}>*/}
            {/*    Do you value meaningful work, tolerance, equality, creativity,*/}
            {/*    and authenticity? My software development services help people*/}
            {/*    like you to engage with their audiences and tribes in creative*/}
            {/*    and impactful ways.*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container"}>
          <h1
            className={"uk-heading-2xlarge uk-text-right"}
            data-uk-parallax={"x: 0, -800"}
          >
            Articles
          </h1>
        </div>
      </div>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-margin-large-bottom"}>
            {tags?.map((tag) => (
              <Link
                key={tag.slug}
                href={`/articles/tags/${tag.slug}`}
                className={
                  "uk-button uk-button-secondary uk-button-small uk-margin-small-right"
                }
              >
                {tag.name}
              </Link>
            ))}
          </div>
          {articles?.map((article) => {
            let excerpt = "";
            article?.excerpt
              .split(" ")
              .slice(0, 20)
              .map((word, index) => {
                excerpt = excerpt + `${index ? " " : ""}${word}`;
              });
            excerpt = excerpt + "...</p>";

            return (
              <div key={article.ID} data-uk-grid={""}>
                <div className={"uk-width-2-3@s"}>
                  <div className={"uk-flex"}>
                    <div>
                      <Image
                        src={article?.author?.avatar_URL}
                        alt={article?.author?.name}
                        height={32}
                        width={32}
                        className={"uk-border-circle uk-margin-small-right"}
                      />
                    </div>
                    <div>
                      <Link href={article?.author?.URL}>
                        {article?.author?.name}
                      </Link>
                    </div>
                  </div>
                  <h2 className={"uk-h3 uk-margin-remove-top"}>
                    <Link
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
                        " | Software Development Services | Stupendous Web"
                      }
                    >
                      {article?.title}
                    </Link>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: excerpt,
                    }}
                  />
                  <p className={"uk-text-small uk-text-meta"}>
                    <time dateTime={dayjs(article?.date).format("YYYY-MM-DD")}>
                      {dayjs(article?.date).from(dayjs())}
                    </time>{" "}
                    &middot;{" "}
                    {Math.round(article?.content.split(" ").length / 200)} min
                    read
                  </p>
                </div>
                <div className={"uk-width-1-3@s"}>
                  {article?.featured_image && (
                    <Link
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
                        " | Software Development Services | Stupendous Web"
                      }
                    >
                      <div className={"uk-height-small uk-cover-container"}>
                        <Image
                          src={article?.featured_image}
                          alt={article?.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CTA />
    </>
  );
}
