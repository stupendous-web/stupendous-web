import Link from "next/link";

export default function Logo() {
  return (
    <>
      <a
        title={
          "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
        }
        className={"uk-background-primary"}
        style={{
          height: "5rem",
          width: "4rem",
          position: "fixed",
          top: 0,
          left: "1rem",
        }}
      >
        <Link href={"/"}>
          <img
            src={"/images/logo.png"}
            alt={"Web App Development Services"}
            className={"uk-margin-top"}
          />
        </Link>
      </a>
    </>
  );
}
