import { useEffect } from "react";
import { useGlobal } from "../lib/context";
import imagesloaded from "imagesloaded";
import Head from "next/head";

export default function Articles() {
  const { setLoading, articles, photos } = useGlobal();

  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Articles | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          <div
            className={"uk-child-width-1-2@s"}
            data-uk-grid={"masonry: true"}
          >
            {articles &&
              articles.map((article, key) => {
                return (
                  <div key={key}>
                    {photos?.filter((photo) => photo?.post === article.id)[0]
                      ?.source_url && (
                      <a
                        href={"/article/" + article.slug}
                        title={
                          article.title.rendered +
                          " | Web App Development Services | Stupendous Web"
                        }
                      >
                        <div className={"uk-height-medium uk-cover-container"}>
                          <img
                            src={
                              photos?.filter(
                                (photo) => photo?.post === article.id
                              )[0]?.source_url
                            }
                            alt={article.title.rendered}
                            data-uk-cover={""}
                          />
                        </div>
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
