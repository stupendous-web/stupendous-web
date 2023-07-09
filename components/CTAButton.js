import { Box, Button, Link } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import NextLink from "next/link";

export default function CTAButton({ light, size = "md" }) {
  return (
    <Link as={NextLink} href={"https://cal.com/stupendousweb/consultation"}>
      <Button
        bg={light ? "white" : "primary.500"}
        color={light ? "primary.500" : "white"}
        size={size}
        rightIcon={<RiArrowRightLine />}
        w={"fit-content"}
        mr={4}
        mb={[4, 0]}
        _hover={{
          bg: light ? "white" : "primary.500",
          color: light ? "primary.500" : "white",
        }}
      >
        <Box mr={4}>Get yours Now</Box>
      </Button>
    </Link>
  );
}
