import Link from "next/link";
import { useGlobal } from "../lib/context";

export default function Blog() {
  const { articles } = useGlobal();

  return (
    <>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <h3>
            <Link
              href={"/articles"}
              title={
                "Articles | Software Development Services | Stupendous Web"
              }
              className={"uk-link-reset"}
            >
              Articles
            </Link>
          </h3>
          <ul className={"uk-list uk-column-1-2@s"}>
            {articles?.map((article) => (
              <li key={article?.ID}>
                <Link
                  href={"/articles/" + article?.slug}
                  title={
                    article?.title +
                    " | Software Development Services | Stupendous Web"
                  }
                >
                  {article?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
