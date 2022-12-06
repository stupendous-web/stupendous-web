import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useGlobal } from "../../lib/context";

import CTA from "../../components/CTA";

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
                <div key={article.ID}>
                  {article?.featured_image && (
                    <a
                      href={"/articles/" + article?.slug}
                      title={
                        article?.title +
                        " | Web App Development Services | Stupendous Web"
                      }
                    >
                      <div className={"uk-height-medium uk-cover-container"}>
                        <Image
                          src={article?.featured_image}
                          alt={article?.title}
                          fill
                          style={{ objectFit: "cover" }}
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
      <CTA />
    </>
  );
}
