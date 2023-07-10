import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  GridItem,
  Card,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import CTA from "../../components/CTA";
import CustomArticleJsonLd from "../../components/json-ld/CustomArticleJsonLd";
dayjs.extend(relativeTime);

export default function Article({ article }) {
  const { colorMode } = useColorMode();
  const tag = Object.keys(article.tags)[0]?.toLowerCase();

  return (
    <>
      <Head>
        <title>{`${article?.title} | Web and App Development Services | Stupendous Web`}</title>
        <meta
          name={"description"}
          content={article?.excerpt
            ?.replace("[&hellip;]", "")
            ?.replace(/(<([^>]+)>)/gi, "")}
        />
        <meta
          property={"og:url"}
          content={`https://stupendousweb.com/articles/${article?.slug}`}
        />
        <meta
          property={"og:title"}
          content={`${article?.title} | Web and App Development Services | Stupendous Web`}
        />
        <meta property={"og:image"} content={article?.featured_image} />
        <meta property={"og:type"} content={"website"} />
      </Head>
      <CustomArticleJsonLd
        url={`https://stupendousweb.com/articles/${article?.slug}`}
        title={article?.title}
        description={article?.excerpt}
        image={article?.featured_image}
        datePublished={dayjs(article?.date).toDate()}
      />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]} mb={4}>
                {article?.title}
              </Heading>
              <Flex align={"center"} mb={4}>
                <Image
                  src={article?.author?.avatar_URL}
                  alt={article?.author?.name}
                  height={64}
                  width={64}
                  style={{ borderRadius: 32, marginRight: "1rem" }}
                />
                <Box>
                  <Link as={NextLink} href={article?.author?.URL}>
                    {article?.author?.name}
                  </Link>
                  <Text fontSize={"sm"} color={"gray.300"} mb={0}>
                    published{" "}
                    <Text
                      as={"time"}
                      dateTime={dayjs(article?.date).format("YYYY-MM-DD")}
                    >
                      {dayjs(article?.date).from(dayjs())}
                    </Text>{" "}
                    {tag && (
                      <span>
                        &middot;{" "}
                        <Link
                          as={NextLink}
                          href={`/articles/tags/${tag}`}
                          color={"gray.300"}
                        >
                          {tag}
                        </Link>{" "}
                      </span>
                    )}
                    &middot;{" "}
                    {Math.round(article?.content.split(" ").length / 200)} min
                    read
                  </Text>
                </Box>
              </Flex>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 3]}>
            {article?.featured_image && (
              <AspectRatio
                ratio={1}
                shadow={"md"}
                transition={"all .66s"}
                borderRadius={"md"}
                overflow={"hidden"}
                _hover={{ shadow: "hover" }}
              >
                <Image
                  src={article?.featured_image}
                  alt={article?.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </AspectRatio>
            )}
          </GridItem>
          <GridItem colSpan={3} />
          <GridItem colSpan={[8, 5]}>
            <Card variant={"transparent"}>
              <Box
                dangerouslySetInnerHTML={{ __html: article?.content }}
                sx={{
                  "& p": {
                    mb: 4,
                  },
                  "& h2": {
                    color: colorMode === "dark" ? "white" : "gray.900",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    mb: 8,
                  },
                }}
              />
            </Card>
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}

export async function getStaticPaths() {
  const posts = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
    )
  ).data?.posts;
  const paths = posts?.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = (
    await axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts/slug:${params.slug}`
    )
  ).data;

  return {
    props: {
      article: post,
    },
    revalidate: 10,
  };
}
