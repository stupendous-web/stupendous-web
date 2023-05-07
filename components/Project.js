import Image from "next/image";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

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
    <Box py={[16, 32]}>
      <Image src={context[images[0]]} alt={"Software Development Services"} />
      <SimpleGrid columns={3} spacing={4} mt={4}>
        {images?.slice(1, 4).map((image) => (
          <div key={image}>
            <Image src={context[image]} alt={"Software Development Services"} />
          </div>
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
    </Box>
  );
}
