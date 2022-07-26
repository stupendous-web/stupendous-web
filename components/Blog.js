import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [articles, setArticles] = useState();
  const [examples, setExamples] = useState();

  useEffect(() => {
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?categories=1")
      .then((response) => {
        setArticles(response.data);
      });
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?categories=8")
      .then((response) => {
        setExamples(response.data);
      });
  }, []);

  return (
    <>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-child-width-1-2@s"} data-uk-grid={""}>
            <div>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Articles</li>
                {articles &&
                  articles.map((article, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={"/article/" + article.slug}
                          title={
                            article.title.rendered +
                            " | Web App Development Services | Stupendous Web"
                          }
                        >
                          {article.title.rendered}
                        </a>
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
                        <a
                          href={"/article/" + example.slug}
                          title={
                            example.title.rendered +
                            " | Web App Development Services | Stupendous Web"
                          }
                        >
                          {example.title.rendered}
                        </a>
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
