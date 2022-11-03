import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

export default function Article() {
  const router = useRouter();
  const { setLoading, articles } = useGlobal();
  const [article, setArticle] = useState();

  useEffect(() => {
    if (!router.isReady && !articles) return;
    const { slug } = router.query;
    setArticle(articles?.find((article) => article.slug === slug));
  }, [router.isReady, articles]);

  useEffect(() => {
    if (article) {
      setLoading(false);
    }
  }, [article]);

  dayjs.extend(calendar);

  return (
    <>
      <Head>
        <title>
          {article?.title +
            " | Stupendous Web | If you want to build community, build a stupendous web app"}
        </title>
      </Head>

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
              {dayjs().calendar(dayjs(article?.date))}
            </time>
          </p>
          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
        </div>
      </div>
    </>
  );
}
