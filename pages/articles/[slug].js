import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useGlobal } from "../../lib/context";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArticleJsonLd } from "next-seo";
import axios from "axios";

import CTA from "../../components/CTA";

dayjs.extend(relativeTime);

export default function Article({ article }) {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>{`${article?.title} | Software Development Services | Stupendous Web`}</title>
        <meta
          property={"og:url"}
          content={`https://stupendousweb.com/articles/${article?.slug}`}
        />
        <meta
          property={"og:title"}
          content={`${article?.title} | Software Development Services | Stupendous Web`}
        />
        <meta property={"og:image"} content={article?.featured_image} />
        <meta property={"og:type"} content={"website"} />
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
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
          )}
          <p className={"uk-flex"}>
            <div>
              <Image
                src={article?.author?.avatar_URL}
                alt={article?.author?.name}
                height={64}
                width={64}
                className={"uk-border-circle uk-margin-small-right"}
              />
            </div>
            <div>
              <div>
                <Link href={article?.author?.URL}>{article?.author?.name}</Link>
              </div>
              <div className={"uk-text-small uk-text-meta"}>
                Published{" "}
                <time dateTime={dayjs(article?.date).format("YYYY-MM-DD")}>
                  {dayjs(article?.date).from(dayjs())}
                </time>{" "}
                &middot; {Math.round(article?.content.split(" ").length / 200)}{" "}
                min read
              </div>
            </div>
          </p>
          <h1>{article?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
        </div>
      </div>
      <CTA />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts`
  );
  const paths = data?.posts?.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts/slug:${params.slug}`
  );

  return {
    props: {
      article: data,
    },
    revalidate: 10,
  };
}
