import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useGlobal } from "../../../lib/context";
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
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

import CTA from "../../../components/CTA";

import isometric from "../../../images/isometrics/isometric-1-2.png";

dayjs.extend(relativeTime);

export default function Articles({ articles }) {
  const { setIsLoading } = useGlobal();
  const router = useRouter();
  const tag = `${router.query?.tag
    ?.charAt(0)
    .toUpperCase()}${router.query?.tag?.slice(1, router.query?.tag.length)}`;

  useEffect(() => {
    if (!!articles?.length) {
      setIsLoading(false);
    }
  }, [articles]);

  return (
    <>
      <Head>
        <title>{`${tag} | Software Development Services | Stupendous Web`}</title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
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
            <Text as={"code"}>
              Inspiration for getting you, your work, and your service to the
              people that need it most. Email{" "}
              <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                topher@stupendousweb.com
              </Link>{" "}
              to contribute your story!
            </Text>
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[250, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"}>
            {tag}
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
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
                  <Flex key={article.ID}>
                    <Box w={"66.66%"} pr={8} mb={4}>
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
                          dateTime={dayjs(article?.date).format("YYYY-MM-DD")}
                        >
                          {dayjs(article?.date).from(dayjs())}
                        </Text>{" "}
                        &middot;{" "}
                        {Math.round(article?.content.split(" ").length / 200)}{" "}
                        min read
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
