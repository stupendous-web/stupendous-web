import NextLink from "next/link";
import { Container, Heading, List, ListItem, Link } from "@chakra-ui/react";

export default function Blog({ articles }) {
  return (
    <Container maxW={"container.lg"} py={[16, 32]}>
      <Heading mb={8}>
        <Link
          as={NextLink}
          href={"/articles"}
          title={"Articles | Software Development Services | Stupendous Web"}
          color={"white"}
        >
          Articles
        </Link>
      </Heading>
      <List spacing={4}>
        {articles?.map((article) => (
          <ListItem key={article?.ID}>
            <Link
              as={NextLink}
              href={`/articles/${article?.slug}`}
              title={`${article?.title} | Software Development Services | Stupendous Web`}
            >
              {article?.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
