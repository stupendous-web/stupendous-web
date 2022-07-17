import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoading } from "../../lib/context";
import Head from "next/head";
import axios from "axios";
import imagesloaded from "imagesloaded";
import moment from "moment";

export default function Article() {
  const router = useRouter();
  const [post, setPost] = useState();
  const [media, setMedia] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    axios
      .get("https://cms.stupendousweb.com/wp-json/wp/v2/posts?slug=" + slug)
      .then((response) => {
        setPost(response.data[0]);
      });
  }, [router.isReady]);

  useEffect(() => {
    if (post) {
      axios
        .get(
          "https://cms.stupendousweb.com/wp-json/wp/v2/media/" +
            post?.featured_media
        )
        .then((response) => {
          setMedia(response.data);
        });
    }
  }, [post]);

  const { setLoading } = useLoading();
  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {post?.title.rendered +
            " | Stupendous Web | If you want to build community, build a stupendous web app"}
        </title>
      </Head>

      <div className={"uk-section uk-section-xlarge"}>
        <div className={"uk-container uk-container-small"}>
          {media?.source_url && (
            <div className={"uk-height-medium uk-width-1-1 uk-cover-container"}>
              <img
                src={media?.source_url}
                alt={post?.title.rendered}
                uk-cover={""}
              />
            </div>
          )}
          <h1>{post?.title.rendered}</h1>
          <p className={"uk-text-small uk-text-meta"}>
            Published{" "}
            <time dateTime={moment(post?.date).format("YYYY-MM-DD")}>
              {moment(post?.date).fromNow()}
            </time>
          </p>
          <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} />
        </div>
      </div>
    </>
  );
}
