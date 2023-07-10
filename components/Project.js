import Image from "next/image";
import { Card, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Project({
  children,
  images,
  name,
  quote,
  quoteAuthor,
}) {
  function importImages(require) {
    let images = {};
    require.keys().forEach((item) => {
      images[item.replace("./", "")] = require(item);
    });

    return images;
  }
  const context = importImages(
    require.context("/images/projects", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Card h={"object-fit"} mb={4}>
      <Image
        src={context[images[0]]}
        alt={"Web and App Development Services"}
      />
      <SimpleGrid columns={5} spacing={4} mt={4}>
        {images?.slice(1, 4).map((image) => (
          <GridItem colSpan={1} key={image}>
            <Image
              src={context[image]}
              alt={"Web and App Development Services"}
            />
          </GridItem>
        ))}
      </SimpleGrid>
      <Heading my={4}>{name}</Heading>
      {children}
      {quote && (
        <Text
          as={"blockquote"}
          px={8}
          mt={4}
          borderLeft={"1px solid"}
          borderColor={"primary.500"}
        >
          {quote}
          <Text as={"footer"} mt={4}>
            <Text as={"cite"}>{quoteAuthor}</Text>
          </Text>
        </Text>
      )}
    </Card>
  );
}
