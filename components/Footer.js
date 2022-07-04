import React, { useEffect, useState } from "react";
import CTA from "../components/CTA";
import axios from "axios";

export default function Footer() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return (
    <>
      <CTA />
      <div className={"uk-section uk-section-secondary uk-section-xsmall"}>
        <div className={"uk-container uk-container-small uk-text-small"}>
          <div className={"uk-grid-match"} uk-grid={""}>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li>
                  <a
                    href={"/projects"}
                    title={
                      "Projects | Web App Development Services | Stupendous Web"
                    }
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href={"/about"}
                    title={
                      "About | Web App Development Services | Stupendous Web"
                    }
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={"/contact"}
                    title={
                      "Contact | Web App Development Services | Stupendous Web"
                    }
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={"/2022"}
                    title={
                      "2022 | Web App Development Services | Stupendous Web"
                    }
                  >
                    2022
                  </a>
                </li>
                <li>
                  <a
                    href={"/partners"}
                    title={
                      "Partners | Web App Development Services | Stupendous Web"
                    }
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default uk-margin-bottom"}>
                {posts &&
                  posts.map((post, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={"/article/" + post.slug}
                          title={
                            post.title.rendered +
                            " | Web App Development Services | Stupendous Web"
                          }
                        >
                          {post.title.rendered}
                        </a>
                      </li>
                    );
                  })}
              </ul>
              <ul className={"uk-nav uk-nav-default"}>
                <li>
                  <a
                    href={"https://trade.stupendousweb.com"}
                    title={
                      "Trade by Stupendous Web | Web App Development Services | Stupendous Web"
                    }
                  >
                    Trade
                  </a>
                </li>
              </ul>
            </div>
            <div className={"uk-width-1-2@s uk-flex-middle"}>
              <div>
                <a
                  href={"mailto:topher@stupendousweb.com"}
                  style={{ fontSize: "1rem" }}
                >
                  topher@stupendousweb.com
                </a>
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    &copy; Copyright{" "}
                    <a
                      href={"/"}
                      title={
                        "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
                      }
                    >
                      Stupendous Web Marketing LLC
                    </a>{" "}
                    2022.
                  </div>
                  <div>All rights reserved. Made in Oakland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
