import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { NextSeo } from "next-seo";

dayjs.extend(calendar);

export default function Article() {
  const router = useRouter();
  const { setLoading, articles } = useGlobal();
  const [article, setArticle] = useState();

  useEffect(() => {
    if (router.isReady) {
      setArticle(
        articles?.find((article) => article.slug === router.query?.slug)
      );
      article && setLoading(false);
    }
  }, [articles, router]);

  return (
    <>
      <NextSeo
        title={`${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`}
        description={
          "I help people with something to share who want to engage with their community by delivering web app development services that improve their brand awareness and authority."
        }
        openGraph={{
          title: `${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`,
          description:
            "If you want to build community, build a stupendous web app.",
          images: [
            {
              url: article?.featured_image,
              alt: article?.title,
              type: "image/jpeg",
            },
          ],
          siteName: `${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`,
        }}
      />
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          {article?.featured_image && (
            <div className={"uk-height-medium uk-width-1-1 uk-cover-container"}>
              <img
                src={article?.featured_image}
                alt={article?.title}
                data-uk-cover={""}
              />
            </div>
          )}
          <h1>{article?.title}</h1>
          <p className={"uk-text-small uk-text-meta"}>
            Published{" "}
            <time dateTime={dayjs(article?.date).format("YYYY-MM-DD")}>
              {dayjs(article?.date).calendar()}
            </time>
          </p>
          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
        </div>
      </div>
    </>
  );
}
