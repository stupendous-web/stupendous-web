import Link from "next/link";
import { useGlobal } from "../lib/context";

export default function Blog() {
  const { articles, examples } = useGlobal();

  return (
    <>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-child-width-1-2@s"} data-uk-grid={""}>
            <div>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>
                  <Link href={"/articles"}>
                    <a
                      title={
                        "Articles | Web App Development Services | Stupendous Web"
                      }
                      className={"uk-link-reset"}
                    >
                      Articles
                    </a>
                  </Link>
                </li>
                {articles?.slice(0, 8).map((article, key) => {
                  return (
                    <li key={key}>
                      <Link href={"/articles/" + article.slug}>
                        <a
                          title={
                            article.title.rendered +
                            " | Web App Development Services | Stupendous Web"
                          }
                        >
                          {article.title.rendered}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Code Examples</li>
                {examples &&
                  examples.map((example, key) => {
                    return (
                      <li key={key}>
                        <Link href={"/articles/" + example.slug}>
                          <a
                            title={
                              example.title.rendered +
                              " | Web App Development Services | Stupendous Web"
                            }
                          >
                            {example.title.rendered}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
