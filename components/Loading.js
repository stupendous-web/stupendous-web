import { useGlobal } from "../lib/context";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { useState } from "react";

export default function Loading() {
  const [isTyping, setIsTyping] = useState(true);
  const { isLoading } = useGlobal();

  return (
    <Box
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      className={isLoading || isTyping ? undefined : "slide-out-left"}
      style={{
        animationDelay: ".5s",
      }}
    >
      <Flex align={"center"} bg={"primary.500"} h={"100vh"}>
        <Container maxW={"container.sm"}>
          <Text as={"code"} color={"white"}>
            [topher@stupendous ~]$&nbsp;
            <Typewriter
              words={[
                "If you want to build community, build stupendous software.",
              ]}
              typeSpeed={25}
              onLoopDone={() => {
                setTimeout(() => setIsTyping(false), 2500);
              }}
            />
            <Cursor cursorStyle={"█"} />
          </Text>
        </Container>
      </Flex>
    </Box>
  );
}
