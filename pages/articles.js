import { useEffect } from "react";
import Head from "next/head";
import { useGlobal } from "../lib/context";

export default function Articles() {
  const { setLoading, articles } = useGlobal();

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
              return (
                <div key={article.id}>
                  {article?.featured_image && (
                    <a
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
                        " | Web App Development Services | Stupendous Web"
                      }
                    >
                      <div className={"uk-height-medium uk-cover-container"}>
                        <img
                          src={article?.featured_image}
                          alt={article?.title}
                        />
                      </div>
                    </a>
                  )}
                  <h2>
                    <a
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
                        " | Web App Development Services | Stupendous Web"
                      }
                    >
                      {article?.title}
                    </a>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article?.excerpt,
                    }}
                  />
                  <p>
                    <a
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
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
