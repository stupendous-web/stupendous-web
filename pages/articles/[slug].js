import Image from "next/image";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { ArticleJsonLd } from "next-seo";
import axios from "axios";
import Head from "next/head";

dayjs.extend(calendar);

export default function Article({ article }) {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>{`${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`}</title>
        <description>
          I help people with something to share who want to engage with their
          community by delivering web app development services that improve
          their brand awareness and authority.
        </description>
        <meta
          property={"og:url"}
          content={`https://stupendousweb.com/articles/${article?.slug}`}
        />
        <meta
          property={"og:title"}
          content={`${article?.title} | Stupendous Web | If you want to build community, build a stupendous web app`}
        />
        <meta property={"og:image"} content={article?.featured_image} />
        <meta property={"og:type"} content={"website"} />
        <meta name={"twitter:card"} content={"summary_large_image"} />
        <meta name={"twitter:site"} content={"@stupendousweb"} />
        <meta name={"twitter:creator"} content={"@stupendousweb"} />
        <meta name={"twitter:title"} content={article?.title} />
        <meta name={"twitter:image"} content={article?.featured_image} />
      </Head>
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
