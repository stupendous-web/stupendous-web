import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGlobal } from "../../lib/context";
import Head from "next/head";
import imagesloaded from "imagesloaded";
import moment from "moment";

export default function Article() {
  const router = useRouter();
  const { setLoading, articles, photos } = useGlobal();
  const [article, setArticle] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    setArticle(articles?.find((article) => article.slug === slug));
  }, [router.isReady, articles]);

  useEffect(() => {
    if (article) {
      setPhoto(photos?.find((photo) => photo.id === article?.featured_media));
    }
  }, [article]);

  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {article?.title.rendered +
            " | Stupendous Web | If you want to build community, build a stupendous web app"}
        </title>
      </Head>

      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          {photo?.source_url && (
            <div className={"uk-height-medium uk-width-1-1 uk-cover-container"}>
              <img
                src={photo?.source_url}
                alt={article?.title.rendered}
                uk-cover={""}
              />
            </div>
          )}
          <h1>{article?.title.rendered}</h1>
          <p className={"uk-text-small uk-text-meta"}>
            Published{" "}
            <time dateTime={moment(article?.date).format("YYYY-MM-DD")}>
              {moment(article?.date).fromNow()}
            </time>
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: article?.content.rendered }}
          />
        </div>
      </div>
    </>
  );
}
