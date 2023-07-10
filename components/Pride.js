import { Box } from "@chakra-ui/react";
import Image from "next/image";
import pride from "../images/pride.png";

export default function Pride() {
  return (
    <Box position={"fixed"} bottom={0} left={0} pl={[1, 4]} pb={[1, 4]}>
      <Image
        src={pride}
        height={36}
        width={36}
        alt={
          "LGBTQ+ heart to reflect pride in these web and app development services and our community"
        }
      />
    </Box>
  );
}
