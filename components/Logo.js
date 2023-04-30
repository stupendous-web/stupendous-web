import Link from "next/link";
import Image from "next/image";

import logo from "/images/logo.png";

export default function Logo() {
  return (
    <>
      <Link
        href={"/"}
        title={
          "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
        }
        className={"uk-background-primary"}
        style={{
          position: "fixed",
          top: 0,
          left: "1rem",
        }}
      >
        <Image
          src={logo}
          alt={"Software Development Services"}
          className={"uk-margin-top"}
          style={{ width: "4rem" }}
        />
      </Link>
    </>
  );
}
