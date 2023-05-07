import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import business from "/images/domains/business.jpg";
import pictures from "/images/domains/pictures.jpg";
import org from "/images/domains/org.jpg";
import fans from "/images/domains/fans.jpg";

export default function Slide({ image, heading, text }) {
  const images = [business, pictures, org, fans];
  return (
    <Flex
      align={"center"}
      justify={"center"}
      h={"400px"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Image
        src={images[image]}
        alt={"Software Development Services"}
        style={{ position: "absolute" }}
      />
      <Box position={"absolute"}>
        <Heading as={"center"}>{heading}</Heading>
        <Text as={"center"}>{text}</Text>
      </Box>
    </Flex>
  );
}
