import { useGlobal } from "../lib/context";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Box, Text, Flex } from "@chakra-ui/react";

export default function Loading() {
  const { isLoading } = useGlobal();
  const { text } = useTypewriter({
    words: ["Hang in there..."],
    typeSpeed: 30,
  });

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      className={isLoading ? undefined : "slide-out-left"}
      style={{
        animationDelay: ".5s",
      }}
    >
      <Flex align={"center"} justify={"center"} bg={"primary.500"} h={"100vh"}>
        <Text as={"code"}>
          {text}
          <Cursor cursorStyle={"█"} />
        </Text>
      </Flex>
    </Box>
  );
}
