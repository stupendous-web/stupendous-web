import { useGlobal } from "../lib/context";
import { Box, Text, Flex, Spinner, Center } from "@chakra-ui/react";

export default function Loading() {
  const { isLoading } = useGlobal();

  return (
    <Center
      bg={"primary.500"}
      h={"100vh"}
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      className={isLoading ? undefined : "fade-out"}
    >
      <Box>
        <Flex justify={"center"}>
          <Spinner color={"white"} size={"xl"} mb={8} />
        </Flex>
        <Text color={"white"}>Hang in there.</Text>
      </Box>
    </Center>
  );
}
