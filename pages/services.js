import { useEffect } from "react";
import Head from "next/head";
import imagesloaded from "imagesloaded";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions";

export default function Services() {
  const dispatch = useDispatch();
  useEffect(() => {
    imagesloaded(document, () => {
      dispatch(setLoading(false));
    });
  }, []);

  return (
    <>
      <Head>
        <title>Services | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <img
                src={"/images/isometrics/isometric-2-2.png"}
                alt={"Web App Development Services"}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                delectus doloribus id nostrum quas recusandae repellat, saepe
                voluptate! Commodi cum cumque distinctio itaque iure laboriosam
                modi nemo quas velit voluptatibus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container"}>
          <h1
            className={"uk-heading-2xlarge uk-text-right"}
            uk-parallax={"x: 0, -800"}
          >
            Services
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                delectus doloribus id nostrum quas recusandae repellat, saepe
                voluptate! Commodi cum cumque distinctio itaque iure laboriosam
                modi nemo quas velit voluptatibus!
              </p>
              <h2>Web App Development Services</h2>
              <p>
                Building a community is probably one of your highest goals. It
                can be challenging, but the internet is a good place to start. I
                can help you engage with your audiences through website and web
                app development services. We&apos;ll work together to start a
                project that helps you achieve your goals best. With the latest
                technologies, the possibilities are endless, but here are a few
                things we can build to help you build community:
              </p>
              <ul className={"uk-list uk-list-disc"}>
                <li>Websites</li>
                <li>E-Commerce</li>
                <li>Web Portals</li>
                <li>Content Management Systems (CMS)</li>
                <li>Social Media</li>
                <li>Discussion Forums</li>
                <li>Email</li>
                <li>Chat Rooms</li>
                <li>Image Editors</li>
              </ul>
              <p>$50/hr.</p>
              <h2>Secure Managed Domain and Hosting</h2>
              <p>
                There are many that goes into getting your project online
                quickly, safely, and hassle-free. I&apos;m here to help with
                those too. I&apos;ll setup and manage your domain name, SSL
                certificates, and on-page SEO. I&apos;m also available for
                support via text, phone, email, video chat, and more! When you
                sign up for my web app development services, you&apos;ll receive
                all this for a small monthly charge. Let me take all the dirty
                work out of launching and maintaining your web application.
              </p>
              <ul className={"uk-list uk-list-disc"}>
                <li>Domain Name</li>
                <li>SSL Certificate</li>
                <li>Web Hosting</li>
                <li>SEO</li>
                <li>Technical Support</li>
              </ul>
              <p>$20/mo.</p>
              <h2>Long Term Support (LTS)</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                delectus doloribus id nostrum quas recusandae repellat, saepe
                voluptate! Commodi cum cumque distinctio itaque iure laboriosam
                modi nemo quas velit voluptatibus!
              </p>
              <p>$30/hr.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
