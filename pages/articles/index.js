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
dayjs.extend(relativeTime);

export default function Articles({ articles, tags }) {
  const { setIsLoading } = useGlobal();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!!articles?.length && !!tags?.length) {
      setIsLoading(false);
    }
  }, [articles, tags]);

  return (
    <>
      <Head>
        <title>Articles | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={6}>
            <SimpleGrid columns={6} spacing={2}>
              {articles?.map((article) => {
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
                    <GridItem colSpan={4}>
                      <Card>
                        <Flex
                          direction={"column"}
                          justify={"space-between"}
                          h={"100%"}
                        >
                          <Box>
                            <Heading size={"lg"} mb={4}>
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
                            <Text fontSize={"sm"} color={"gray.300"}>
                              <Text
                                as={"time"}
                                dateTime={dayjs(article?.date).format(
                                  "YYYY-MM-DD"
                                )}
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
                              {Math.round(
                                article?.content.split(" ").length / 200
                              )}{" "}
                              min read
                            </Text>
                          </Box>
                          <Flex align={"center"}>
                            <Image
                              src={article?.author?.avatar_URL}
                              alt={article?.author?.name}
                              height={32}
                              width={32}
                              style={{
                                borderRadius: "16px",
                                marginRight: "1rem",
                              }}
                            />
                            <Link as={NextLink} href={article?.author?.URL}>
                              {article?.author?.name}
                            </Link>
                          </Flex>
                        </Flex>
                      </Card>
                    </GridItem>
                    <GridItem colSpan={2}>
                      {article?.featured_image && (
                        <Link
                          href={"/articles/" + article?.slug}
                          title={
                            article?.title +
                            " | Software Development Services | Stupendous Web"
                          }
                        >
                          <AspectRatio ratio={1}>
                            <Image
                              src={article?.featured_image}
                              alt={`${article?.title} | Software Development Services | Stupendous Web`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </AspectRatio>
                        </Link>
                      )}
                    </GridItem>
                  </Fragment>
                );
              })}
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={2}>
            <Card variant={"transparent"} h={"fit-content"} pt={0}>
              <Box>
                <Heading as={"h2"} lineHeight={1}>
                  Discover More
                </Heading>
                {tags?.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/articles/tags/${tag.slug}`}
                    title={`${tag.name} | Software Development Services | Stupendous Web`}
                  >
                    <Tag
                      bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                      mr={2}
                    >
                      {tag.name}
                    </Tag>
                  </Link>
                ))}
              </Box>
            </Card>
          </GridItem>
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
