import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  AspectRatio,
  Box,
  Link,
  Container,
  Flex,
  Heading,
  Text,
  GridItem,
  Card,
  SimpleGrid,
} from "@chakra-ui/react";

import CTA from "../../../components/CTA";
import { RiArticleLine } from "react-icons/ri";

dayjs.extend(relativeTime);

export default function Articles({ articles }) {
  const router = useRouter();
  const tag = `${router.query?.tag
    ?.charAt(0)
    .toUpperCase()}${router.query?.tag?.slice(1, router.query?.tag.length)}`;

  return (
    <>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 2]}>
            <Card variant={"transparent"}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]} lineHeight={1}>
                {tag}
              </Heading>
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
                  title={articles[0]?.title + " | Stupendous Web"}
                >
                  <AspectRatio ratio={2} mb={4}>
                    <Image
                      src={articles[0]?.featured_image}
                      alt={`${articles[0]?.title} | Stupendous Web`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </AspectRatio>
                </Link>
              )}
              <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                <Box>
                  <Heading fontSize={["2rem", "4rem"]} mb={4}>
                    <Link
                      href={"/articles/" + articles[0]?.slug}
                      title={articles[0]?.title + " | Stupendous Web"}
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
          {articles
            ?.filter((article) => article?.tags[tag])
            ?.map((article) => {
              let excerpt = "";
              article?.excerpt
                .split(" ")
                .slice(0, 20)
                .map((word, index) => {
                  excerpt = excerpt + `${index ? " " : ""}${word}`;
                });
              excerpt = excerpt + "...</p>";

              return (
                <GridItem key={article.ID} colSpan={[8, 2]}>
                  <Card>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Box>
                        {article?.featured_image && (
                          <Link
                            href={"/articles/" + article?.slug}
                            title={article?.title + " | Stupendous Web"}
                          >
                            <AspectRatio maxW={"100%"} ratio={2} mb={4}>
                              <Image
                                src={article?.featured_image}
                                alt={article?.title}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </AspectRatio>
                          </Link>
                        )}
                        <Heading mb={4}>
                          <Link
                            href={"/articles/" + article?.slug}
                            title={article?.title + " | Stupendous Web"}
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
              );
            })}
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}

export async function getStaticPaths() {
  const tags = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/tags"
    )
  ).data?.tags;
  const paths = tags?.map((tag) => ({
    params: { tag: tag.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const posts = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
    )
  ).data?.posts;

  return {
    props: {
      articles: posts,
    },
    revalidate: 10,
  };
}
