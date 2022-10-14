import { useEffect } from "react";
import { useGlobal } from "../lib/context";
import Head from "next/head";

export default function Articles() {
  const { setLoading, articles, photos } = useGlobal();

  useEffect(() => {
    if (articles) {
      setLoading(false);
    }
  }, [articles]);

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
            {articles?.map((article) => {
              const src = photos?.find(
                (photo) => photo?.id === article.featured_media
              )?.source_url;
              return (
                <div key={article.id}>
                  {src && (
                    <a
                      href={"/articles/" + article.slug}
                      title={
                        article.title.rendered +
                        " | Web App Development Services | Stupendous Web"
                      }
                    >
                      <div className={"uk-height-medium uk-cover-container"}>
                        <img
                          src={src}
                          alt={article.title.rendered}
                          data-uk-cover={""}
                        />
                      </div>
                    </a>
                  )}
                  <h2>
                    <a
                      href={"/articles/" + article.slug}
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
                      href={"/articles/" + article.slug}
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
