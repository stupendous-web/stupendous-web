import { Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";

export default function ContactRow() {
  return (
    <Flex align={"center"} mb={8}>
      <Link as={NextLink} href={"https://cal.com/stupendousweb/consultation"}>
        <Button variant={"bonkers"} size={"lg"} mr={12}>
          Get yours Now
        </Button>
      </Link>
      <Tooltip label={"topher@stupendousweb.com"} fontSize={"md"}>
        <Link as={NextLink} href={"mailto:topher@stupendousweb.com"} mr={8}>
          <RiMailFill color={"white"} size={48} />
        </Link>
      </Tooltip>
      <Tooltip label={"+1 702.308.9375 (Call or Text!)"} fontSize={"md"}>
        <Link as={NextLink} href={"tel:7023089375"}>
          <RiPhoneFill color={"white"} size={48} />
        </Link>
      </Tooltip>
    </Flex>
  );
}
