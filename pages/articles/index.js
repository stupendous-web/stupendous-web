import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import CTA from "../../components/CTA";

dayjs.extend(relativeTime);

export default function Articles() {
  const { articles, setIsLoading } = useGlobal();

  useEffect(() => {
    if (!!articles?.length) {
      setIsLoading(false);
    }
  }, [articles]);

  return (
    <>
      <Head>
        <title>Articles | Software Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
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
                      <Link href={article?.author?.URL} rel={"nofollow"}>
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
