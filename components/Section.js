import { Divider, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Section({ heading, text }) {
  return (
    <>
      <Divider borderColor={"gray.500"} mb={4} />
      <SimpleGrid columns={5}>
        <GridItem colSpan={[5, 2]}>
          <Heading as={"h3"} fontSize={"1rem"} mb={4}>
            {heading}
          </Heading>
        </GridItem>
        <GridItem colSpan={[5, 3]}>{text}</GridItem>
      </SimpleGrid>
    </>
  );
}
