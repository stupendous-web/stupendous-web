import NextLink from "next/link";
import {
  Container,
  Heading,
  Link,
  GridItem,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Card,
} from "@chakra-ui/react";
import { Fragment } from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export default function Blog({ articles }) {
  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <Link
        as={NextLink}
        href={"/articles"}
        title={"Articles | Web and App Development Services | Stupendous Web"}
      >
        <Heading p={4}>What&apos;s Good</Heading>
      </Link>
      <SimpleGrid columns={8} spacing={2} h={["100%", "200px"]}>
        {articles?.slice(0, 4)?.map((article) => (
          <Fragment key={article?.ID}>
            <GridItem colSpan={[8, 1]}>
              <Link
                as={NextLink}
                href={`/articles/${article?.slug}`}
                title={`${article?.title} | Web and App Development Services | Stupendous Web`}
              >
                <Box
                  h={"100%"}
                  position={"relative"}
                  shadow={"md"}
                  transition={"all .66s"}
                  borderRadius={"md"}
                  overflow={"hidden"}
                  _hover={{ shadow: "hover" }}
                >
                  <Image
                    src={article?.featured_image}
                    alt={`${article?.title} | Web and App Development Services | Stupendous Web`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Link>
            </GridItem>
            <GridItem colSpan={[8, 1]}>
              <Card>
                <Flex h={"100%"} direction={"column"} justify={"space-between"}>
                  <Box>
                    <Link
                      as={NextLink}
                      href={`/articles/${article?.slug}`}
                      title={`${article?.title} | Web and App Development Services | Stupendous Web`}
                    >
                      <Text lineHeight={1.5}>{article?.title}</Text>
                    </Link>
                  </Box>
                  <Link
                    as={NextLink}
                    href={`/articles/${article?.slug}`}
                    title={`${article?.title} | Web and App Development Services | Stupendous Web`}
                  >
                    <RiArrowRightLine size={16} />
                  </Link>
                </Flex>
              </Card>
            </GridItem>
          </Fragment>
        ))}
      </SimpleGrid>
    </Container>
  );
}
