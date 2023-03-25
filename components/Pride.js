import Link from "next/link";

export default function Pride() {
  return (
    <>
      <Link
        href={"/contact"}
        className={"uk-position-fixed uk-padding"}
        style={{ bottom: 0, left: 0 }}
      >
        <span
          data-uk-tooltip={
            "Tolerance, equality, creativity, and authenticity show up everywhere in my work. Let me know if it does in yours too!"
          }
        >
          (◍•ᴗ•◍)❤
        </span>
      </Link>
    </>
  );
}
