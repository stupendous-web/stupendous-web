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
} from "@chakra-ui/react";
import { Fragment } from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export default function Blog({ articles }) {
  return (
    <Container maxW={"container.xl"} pt={[0, 16]}>
      <Heading>
        <Link
          as={NextLink}
          href={"/articles"}
          title={"Articles | Software Development Services | Stupendous Web"}
        >
          What&apos;s Good
        </Link>
      </Heading>
      <SimpleGrid columns={8} spacing={2} h={"200px"}>
        {articles?.slice(0, 4)?.map((article) => (
          <Fragment key={article?.ID}>
            <GridItem colSpan={1}>
              <Box h={"100%"} position={"relative"} overflow={"hidden"}>
                <Image
                  src={article?.featured_image}
                  alt={`${article?.title} | Software Development Services | Stupendous Web`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Flex
                h={"100%"}
                direction={"column"}
                justify={"space-between"}
                bg={"gray.900"}
                _hover={{ bg: "gray.800" }}
                p={4}
              >
                <Box>
                  <Link
                    as={NextLink}
                    href={`/articles/${article?.slug}`}
                    title={`${article?.title} | Software Development Services | Stupendous Web`}
                  >
                    <Text lineHeight={1.5}>{article?.title}</Text>
                  </Link>
                </Box>
                <Link
                  as={NextLink}
                  href={`/articles/${article?.slug}`}
                  title={`${article?.title} | Software Development Services | Stupendous Web`}
                >
                  <RiArrowRightLine size={16} />
                </Link>
              </Flex>
            </GridItem>
          </Fragment>
        ))}
      </SimpleGrid>
    </Container>
  );
}
