import { ArticleJsonLd } from "next-seo";

export default function CustomArticleJsonLd({
  url,
  title,
  description,
  image,
  date,
}) {
  return (
    <ArticleJsonLd
      url={url}
      title={title}
      description={description}
      images={[image]}
      datePublished={date}
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
  );
}
