import Image from "next/image";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { NextSeo, ArticleJsonLd } from "next-seo";
import axios from "axios";

dayjs.extend(calendar);

export default function Article({ article }) {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <NextSeo
        title={`${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`}
        description={
          "I help people with something to share who want to engage with their community by delivering web app development services that improve their brand awareness and authority."
        }
        openGraph={{
          url: `https://stupendousweb.com/articles/${article?.slug}`,
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
      <ArticleJsonLd
        url={`https://stupendousweb.com/articles/${article?.slug}`}
        title={article?.title}
        description={article?.excerpt}
        images={[article?.featured_image]}
        datePublished={dayjs(article?.date).toDate()}
        authorName={[
          {
            name: "Topher",
            url: "https://stupendousweb.com",
          },
        ]}
        publisherName={"Stupendous Web"}
        publisherLogo={"https://stupendousweb.com/images/logo.png"}
        isAccessibleForFree={true}
      />
      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          {article?.featured_image && (
            <div className={"uk-height-medium uk-width-1-1 uk-cover-container"}>
              <Image
                src={article?.featured_image}
                alt={article?.title}
                fill
                style={{ objectFit: "cover" }}
                priority
                onLoadingComplete={setIsLoading(false)}
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

export async function getServerSideProps({ query }) {
  const article = await axios
    .get(
      `https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts/slug:${query?.slug}`
    )
    .then((response) => response.data);

  return {
    props: {
      article: article,
    },
  };
}
