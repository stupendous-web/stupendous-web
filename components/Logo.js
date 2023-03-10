import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"} legacyBehavior>
        <a
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
          <img
            src={"/images/logo.png"}
            alt={"Software Development Services"}
            className={"uk-margin-top"}
            style={{ width: "4rem" }}
          />
        </a>
      </Link>
    </>
  );
}
