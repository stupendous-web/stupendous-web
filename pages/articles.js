import { useEffect, useState } from "react";
import { useLoading } from "../lib/context";
import imagesloaded from "imagesloaded";
import axios from "axios";
import Head from "next/head";

export default function Articles() {
  const { setLoading } = useLoading();

  const [articles, setArticles] = useState();
  const [media, setMedia] = useState();

  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?categories=1")
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  useEffect(() => {
    if (articles) {
      axios
        .get("https://cms.stupendousweb.com/wp-json/wp/v2/media/")
        .then((response) => {
          setMedia(response.data);
        });
    }
  }, [articles]);

  return (
    <>
      <Head>
        <title>Articles | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          <h1>Articles</h1>
          <div
            className={"uk-child-width-1-2@s"}
            data-uk-grid={"masonry: true"}
          >
            {articles &&
              articles.map((article, key) => {
                return (
                  <div key={key}>
                    {media?.filter((image) => image?.post === article.id)[0]
                      ?.source_url && (
                      <a
                        href={"/article/" + article.slug}
                        title={
                          article.title.rendered +
                          " | Web App Development Services | Stupendous Web"
                        }
                      >
                        <img
                          src={
                            media?.filter(
                              (image) => image?.post === article.id
                            )[0]?.source_url
                          }
                          alt={article.title.rendered}
                        />
                      </a>
                    )}
                    <h2>
                      <a
                        href={"/article/" + article.slug}
                        title={
                          article.title.rendered +
                          " | Web App Development Services | Stupendous Web"
                        }
                      >
                        {article.title.rendered}
                      </a>
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: article.excerpt.rendered,
                      }}
                    />
                    <p>
                      <a
                        href={"/article/" + article.slug}
                        title={
                          article.title.rendered +
                          " | Web App Development Services | Stupendous Web"
                        }
                      >
                        Read more.
                      </a>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
