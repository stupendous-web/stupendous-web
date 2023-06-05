import NextLink from "next/link";
import { Tooltip, Link, Box, Text } from "@chakra-ui/react";

export default function Pride() {
  return (
    <Box position={"fixed"} bottom={0} left={0} p={4} hideBelow={"sm"}>
      <Tooltip
        label={
          "Tolerance, equality, creativity, and authenticity show up everywhere in my work. Let me know if it does in yours too!"
        }
      >
        <Link as={NextLink} href={"/contact"} lineHeight={1}>
          <Text m={0}>(◍•ᴗ•◍)❤</Text>
        </Link>
      </Tooltip>
    </Box>
  );
}
