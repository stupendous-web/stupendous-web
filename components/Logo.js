import NextLink from "next/link";
import Image from "next/image";
import { Link } from "@chakra-ui/react";

import logo from "/images/logo.png";

export default function Logo() {
  return (
    <Link
      as={NextLink}
      href={"/"}
      title={
        "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
      }
      bg={"primary.500"}
      position={"fixed"}
      top={0}
      left={4}
    >
      <Image
        src={logo}
        alt={"Software Development Services"}
        style={{ width: "4rem", marginTop: ".75rem" }}
      />
    </Link>
  );
}
