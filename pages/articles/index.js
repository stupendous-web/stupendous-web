import { Fragment, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useGlobal } from "../../lib/context";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  SimpleGrid,
  GridItem,
  Card,
  Tag,
  useColorMode,
} from "@chakra-ui/react";
import CTA from "../../components/CTA";
import {
  RiPaintLine,
  RiPencilRulerLine,
  RiBankLine,
  RiHospitalLine,
  RiAuctionLine,
  RiSunLine,
  RiArticleLine,
} from "react-icons/all";

dayjs.extend(relativeTime);

export default function Articles({ articles, tags }) {
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!!articles?.length && !!tags?.length) {
      setIsLoading(false);
    }
  }, [articles, tags]);

  const tagIcon = (tag) => {
    switch (tag) {
      case "art":
        return <RiPaintLine />;
      case "design":
        return <RiPencilRulerLine />;
      case "finance":
        return <RiBankLine />;
      case "healthcare":
        return <RiHospitalLine />;
      case "law":
        return <RiAuctionLine />;
      case "sustainability":
        return <RiSunLine />;
      default:
        return <RiArticleLine />;
    }
  };

  return (
    <>
      <Head>
        <title>Articles | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 2]}>
            <Card variant={"transparent"} h={"fit-content"} pt={0}>
              <Box>
                <Heading as={"h2"} lineHeight={1}>
                  Topics
                </Heading>
                {tags?.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/articles/tags/${tag.slug}`}
                    title={`${tag.name} | Software Development Services | Stupendous Web`}
                  >
                    <Box>
                      <Tag
                        bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                        mr={2}
                      >
                        {tag.name}
                      </Tag>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 6]}>
            <Card>
              <Flex align={"center"} mb={4}>
                <Box mr={4}>
                  <RiArticleLine />
                </Box>
                <Text mb={0}>Featured</Text>
              </Flex>
              {articles[0]?.featured_image && (
                <Link
                  href={"/articles/" + articles[0]?.slug}
                  title={
                    articles[0]?.title +
                    " | Software Development Services | Stupendous Web"
                  }
                >
                  <AspectRatio ratio={2} mb={4}>
                    <Image
                      src={articles[0]?.featured_image}
                      alt={`${articles[0]?.title} | Software Development Services | Stupendous Web`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </AspectRatio>
                </Link>
              )}
              <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                <Box>
                  <Heading fontSize={["2rem", "4rem"]}>
                    <Link
                      href={"/articles/" + articles[0]?.slug}
                      title={
                        articles[0]?.title +
                        " | Software Development Services | Stupendous Web"
                      }
                    >
                      {articles[0]?.title}
                    </Link>
                  </Heading>
                </Box>
                <Text fontSize={"sm"} mb={0}>
                  <Link
                    as={NextLink}
                    href={
                      articles[0]?.author?.URL || "https://stupendousweb.com"
                    }
                  >
                    {articles[0]?.author?.name}
                  </Link>{" "}
                  &middot;{" "}
                  <Text
                    as={"time"}
                    dateTime={dayjs(articles[0]?.date).format("YYYY-MM-DD")}
                  >
                    {dayjs(articles[0]?.date).from(dayjs())}
                  </Text>{" "}
                  &middot;{" "}
                  {Math.round(articles[0]?.content.split(" ").length / 200)} min
                  read
                </Text>
              </Flex>
            </Card>
          </GridItem>
          {articles?.slice(1, articles.length)?.map((article) => {
            let excerpt = "";
            article?.excerpt
              .split(" ")
              .slice(0, 20)
              .map((word, index) => {
                excerpt = excerpt + `${index ? " " : ""}${word}`;
              });
            excerpt = excerpt + "...</p>";
            const tag = Object.keys(article.tags)[0]?.toLowerCase();

            return (
              <Fragment key={article.ID}>
                <GridItem colSpan={[8, 2]}>
                  <Card>
                    <Link as={NextLink} href={`/articles/tags/${tag}`}>
                      <Flex align={"center"} mb={4}>
                        <Box mr={4}>{tagIcon(tag)}</Box>
                        <Text mb={0}>
                          {tag
                            ? `${tag?.charAt(0)?.toUpperCase()}${tag?.slice(
                                1,
                                tag.length
                              )}`
                            : "Article"}
                        </Text>
                      </Flex>
                    </Link>
                    {article?.featured_image && (
                      <Link
                        href={"/articles/" + article?.slug}
                        title={
                          article?.title +
                          " | Software Development Services | Stupendous Web"
                        }
                      >
                        <AspectRatio ratio={2} mb={4}>
                          <Image
                            src={article?.featured_image}
                            alt={`${article?.title} | Software Development Services | Stupendous Web`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </AspectRatio>
                      </Link>
                    )}
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Box>
                        <Heading>
                          <Link
                            href={"/articles/" + article?.slug}
                            title={
                              article?.title +
                              " | Software Development Services | Stupendous Web"
                            }
                          >
                            {article?.title}
                          </Link>
                        </Heading>
                        <Box
                          mb={4}
                          dangerouslySetInnerHTML={{
                            __html: excerpt,
                          }}
                        />
                      </Box>
                      <Text fontSize={"sm"} mb={0}>
                        <Link
                          as={NextLink}
                          href={
                            article?.author?.URL || "https://stupendousweb.com"
                          }
                        >
                          {article?.author?.name}
                        </Link>{" "}
                        &middot;{" "}
                        <Text
                          as={"time"}
                          dateTime={dayjs(article?.date).format("YYYY-MM-DD")}
                        >
                          {dayjs(article?.date).from(dayjs())}
                        </Text>{" "}
                        &middot;{" "}
                        {Math.round(article?.content.split(" ").length / 200)}{" "}
                        min read
                      </Text>
                    </Flex>
                  </Card>
                </GridItem>
              </Fragment>
            );
          })}
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const posts = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
    )
  ).data?.posts;

  const tags = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/tags"
    )
  ).data?.tags;

  return {
    props: {
      articles: posts,
      tags: tags,
    },
    revalidate: 10,
  };
}
