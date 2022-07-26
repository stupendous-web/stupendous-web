export default function HeadData({ title }) {
  return (
    <>
      <meta
        name="image"
        content="https://stupendousweb.com/images/social.jpg"
      />
      <meta itemProp={"name"} content={title} />
      <meta
        itemProp={"image"}
        content={"https://stupendousweb.com/images/social.jpg"}
      />
      <meta name={"twitter:title"} content={title} />
      <meta name={"twitter:site"} content={"@stupendousweb"} />
      <meta name={"twitter:creator"} content={"@stupendousweb"} />
      <meta
        name={"twitter:image:src"}
        content={"https://stupendousweb.com/images/social.jpg"}
      />
      <meta name={"og:title"} content={title} />
      <meta
        name={"og:image"}
        content={"https://stupendousweb.com/images/social.jpg"}
      />
      <meta name={"og:site_name"} content={title} />
      <meta name={"og:locale"} content={"en_US"} />
      <meta name={"og:type"} content={"website"} />
    </>
  );
}
