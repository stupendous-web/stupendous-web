import Link from "next/link";
import { useGlobal } from "../lib/context";

export default function Blog() {
  const { articles } = useGlobal();

  return (
    <>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <h3>
            <Link href={"/articles"} legacyBehavior>
              <a
                title={
                  "Articles | Web App Development Services | Stupendous Web"
                }
                className={"uk-link-reset"}
              >
                Articles
              </a>
            </Link>
          </h3>
          <ul className={"uk-list uk-column-1-2@s"}>
            {articles?.map((article) => {
              return (
                <li key={article?.id}>
                  <Link href={"/articles/" + article?.slug} legacyBehavior>
                    <a
                      title={
                        article?.title +
                        " | Web App Development Services | Stupendous Web"
                      }
                    >
                      {article?.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
