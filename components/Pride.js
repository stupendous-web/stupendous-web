import NextLink from "next/link";
import { Tooltip, Link, Box } from "@chakra-ui/react";

export default function Pride() {
  return (
    <Box position={"fixed"} bottom={0} left={0} p={12} hideBelow={"sm"}>
      <Link as={NextLink} href={"/contact"}>
        <Tooltip
          label={
            "Tolerance, equality, creativity, and authenticity show up everywhere in my work. Let me know if it does in yours too!"
          }
        >
          (◍•ᴗ•◍)❤
        </Tooltip>
      </Link>
    </Box>
  );
}
