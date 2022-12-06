import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import UIkit from "uikit";
import axios from "axios";

import valuesImage from "../public/images/brief/values.jpg";
import communitiesImage from "../public/images/brief/communities.jpg";
import productImage from "../public/images/brief/product.jpg";
import actionImage from "../public/images/brief/action.jpg";
import cultureImage from "../public/images/brief/culture.jpg";
import techImage from "../public/images/brief/tech.jpg";

export default function CreativeBrief() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = useState("");
  const [communities, setCommunities] = useState("");
  const [product, setProduct] = useState("");
  const [action, setAction] = useState("");
  const [culture, setCulture] = useState("");
  const [tech, setTech] = useState("");

  const sections = [
    {
      tab: "Introduction",
      heading: "Your Creative Brief",
      description: (
        <>
          <p>
            Let’s work through the following sections together to build you a
            stupendous website. Doing this will allow me to have your mission,
            values, product, and objectives always in the back of my head as I
            tinker with the ones and zeros of your new website, web app, or
            phone app.
          </p>
        </>
      ),
      inputs: (
        <>
          <div className={"uk-margin"}>
            <label className={"uk-form-label"}>
              <em>Name</em>
            </label>
            <input
              type={"text"}
              className={"uk-input"}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className={"uk-margin"}>
            <label className={"uk-form-label"}>
              <em>Email</em>
            </label>
            <input
              type={"email"}
              className={"uk-input"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        </>
      ),
    },
    {
      tab: "Values",
      heading: "Values",
      description: (
        <>
          <p>
            You might find it surprising, but your values can show up visually
            and in the functionality of your website. Understanding these will
            help me to convey your message and voice to your customers and
            audiences.
          </p>
          <em>What are your or your organization’s top 1-3 values.</em>
        </>
      ),
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={values}
          onChange={(event) => setValues(event.target.value)}
        />
      ),
      image: valuesImage,
    },
    {
      tab: "Communities",
      heading: "Communities",
      description: (
        <>
          <p>
            Knowing how to speak the language of your audience is important when
            conveying your message. This will help me to make the design, copy,
            media, and even functionality of your website more accessible to
            everyone.
          </p>
          <em>What are the top communities that you and your product serve?</em>
        </>
      ),
      image: communitiesImage,
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={communities}
          onChange={(event) => setCommunities(event.target.value)}
        />
      ),
    },
    {
      tab: "Product",
      heading: "Product",
      description: (
        <>
          <p>
            It’s time for your elevator pitch! Every line of code on your
            website should pitch your product.
          </p>
          <em>
            Think about your values and what communities you serve and tell me
            about your product. Keep it clear and tell me about what problems it
            will solve for your customers!
          </em>
        </>
      ),
      image: productImage,
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
      ),
    },
    {
      tab: "Action",
      heading: "Action",
      description: (
        <>
          <p>
            Let’s make your website more than just something stylish on the
            internet. A call to action is any action you want a visitor to your
            website to take. It could be signing up for a newsletter or
            purchasing a new gadget. This will help me guide visitors to your
            website to do what it is you need them to.
          </p>
          <em>
            What is your number one call to action for this project and are
            there any other secondary calls to action you’d like to implement?
          </em>
        </>
      ),
      image: actionImage,
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={action}
          onChange={(event) => setAction(event.target.value)}
        />
      ),
    },
    {
      tab: "Culture",
      heading: "Culture",
      description: (
        <em>
          Tell me a bit about your company culture. Is it just you or do you
          have a team? How long have you been doing your work?
        </em>
      ),
      image: cultureImage,
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={culture}
          onChange={(event) => setCulture(event.target.value)}
        />
      ),
    },
    {
      tab: "Tech",
      heading: "Tech",
      description: (
        <em>
          Do you have a domain name? Do you lease or own a server? Do you have
          login credentials for both?
        </em>
      ),
      image: techImage,
      inputs: (
        <textarea
          className={"uk-textarea"}
          value={tech}
          onChange={(event) => setTech(event.target.value)}
        />
      ),
    },
  ];

  const handleSubmit = () => {
    if (!email) {
      UIkit.notification({
        message: "Please enter an email address in the introduction section.",
        status: "warning",
      });
    } else {
      axios
        .post("/api/send", {
          name: name,
          email: email,
          values: values,
          communities: communities,
          product: product,
          action: action,
          culture: culture,
          tech: tech,
        })
        .then(() => {
          UIkit.modal("#success-modal").show();
        });
    }
  };

  return (
    <>
      <Head>
        <title>
          Creative Brief | Web App Development Services | Stupendous Web
        </title>
      </Head>
      <div
        className={"uk-section uk-section-xlarge"}
        data-uk-height-viewport={""}
      >
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-auto@s"}>
              <ul
                className={"uk-tab-left"}
                data-uk-tab={
                  "connect: #component-tab-left; animation: uk-animation-fade"
                }
                id={"switcher"}
              >
                {sections.map((section) => (
                  <li key={section.tab}>
                    <a href={"#"}>{section.tab}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"uk-width-expand@s"}>
              <ul id={"component-tab-left"} className={"uk-switcher"}>
                {sections.map((section, key) => (
                  <li key={key}>
                    {section?.image && (
                      <div className={"uk-margin"}>
                        <div className={"uk-height-medium uk-cover-container"}>
                          <Image
                            src={section?.image}
                            alt={section?.heading}
                            style={{ objectFit: "cover" }}
                            fill
                          />
                        </div>
                      </div>
                    )}
                    <h2>{section.heading}</h2>
                    <div className={"uk-margin"}>{section.description}</div>
                    <div className={"uk-margin"}>{section.inputs}</div>
                    <a
                      className={"uk-button uk-button-primary"}
                      onClick={
                        key < sections.length - 1
                          ? () => UIkit.tab("#switcher").show(key + 1)
                          : () => handleSubmit()
                      }
                    >
                      {key < sections.length - 1 ? "Continue" : "Finish"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id={"success-modal"} data-uk-modal={""}>
        <div className={"uk-modal-dialog uk-modal-body"}>
          <h2 className={"uk-modal-title"}>Let&apos;s Go!</h2>
          <p>
            Your responses were saved. Want more? Schedule the first of your two
            FREE consultations to review your answers and receive a free PDF
            version of your creative brief.
          </p>
          <Link
            href={"https://calendly.com/stupendousweb/free-consultation"}
            legacyBehavior
          >
            <a className={"uk-button uk-button-primary uk-margin-right"}>
              Schedule Yours!
            </a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className={"uk-button uk-button-default"}>Return Home</a>
          </Link>
        </div>
      </div>
    </>
  );
}
