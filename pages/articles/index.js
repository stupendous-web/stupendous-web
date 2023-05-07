import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useGlobal } from "../../lib/context";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Parallax } from "react-scroll-parallax";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";

import CTA from "../../components/CTA";

import isometric from "../../images/isometrics/isometric-1-2.png";

dayjs.extend(relativeTime);

export default function Articles({ articles, tags }) {
  const { setIsLoading } = useGlobal();

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
      <Container maxW={"container.xl"} pt={[16, 32]} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            {/*<Text as={"code"}>*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque*/}
            {/*  deserunt illo nemo! Aliquam commodi cum dolore, eum iste labore*/}
            {/*  optio quam sed sunt. Corporis debitis maiores neque perferendis*/}
            {/*  quo quod.*/}
            {/*</Text>*/}
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[250, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"}>
            Articles
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Box w={["100%", "66.66%"]} mb={24}>
              {tags?.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/articles/tags/${tag.slug}`}
                  title={`${tag.name} | Software Development Services | Stupendous Web`}
                >
                  <Button colorScheme={"primary"} mr={10} mb={4}>
                    {tag.name}
                  </Button>
                </Link>
              ))}
            </Box>
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
                <Flex key={article.ID}>
                  <Box w={"66.66%"} pr={8}>
                    <Flex align={"center"} mb={4}>
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
                    <Heading className={"uk-h3 uk-margin-remove-top"}>
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
                  <Box w={"33.33%"}>
                    {article?.featured_image && (
                      <Link
                        href={"/articles/" + article?.slug}
                        title={
                          article?.title +
                          " | Software Development Services | Stupendous Web"
                        }
                      >
                        <div className={"uk-height-small uk-cover-container"}>
                          <AspectRatio maxW={"100%"} ratio={16 / 9} mb={8}>
                            <Image
                              src={article?.featured_image}
                              alt={article?.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </AspectRatio>
                        </div>
                      </Link>
                    )}
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Flex>
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
