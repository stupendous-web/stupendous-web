export default function Testimonials() {
  const testimonials = [
    {
      name: "Grace Avila",
      title: "Nutritionist",
      review:
        "Working with Topher on my new site was a dream. He worked quickly, thoughtfully and was very responsive. I had a lot of questions on updating the site myself. He walked me through all of my concerns, polished out all the details and completed the site very quickly. I love the look of my new site! I would recommend Topher highly.",
    },
    {
      name: "Masumi Johnson",
      title: "Pixel Pusher",
      review:
        "Topher is a web design wizard. He was incredible to work with from start to finish and was able to build us a completely custom web site. He leverages several useful tools to facilitate the process and maintained great communication and transparency through the whole process. I highly recommend Stupendous Web if you’re in the market for a professional website!",
    },
    {
      name: "Chidi Ononuju",
      title: "Masseur",
      review:
        "Topher has been great, and I've actually had him create a second site for me after he recreated an old one I had. Good value for money, attentive and good at brainstorming togive a better work. I'd definitely recommend.",
    },
    {
      name: "Cloe Server",
      title: "Dog Trainer",
      review:
        "I absolutely loved working with Topher. My website looks exactly how I wanted. Anytime something needed to be changed it was done in a prompt and timely manner. Topher seems to have endless possibilities as far as function and the overall design. It looks just like what I requested. I say if you know what you want, Topher can get it done with quality!",
    },
  ];
  return (
    <>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-slider={""}>
            <div className={"uk-position-relative"}>
              <div className={"uk-slider-container uk-light"}>
                <ul className={"uk-slider-items uk-child-width-1-2"}>
                  {testimonials.map((testimonial, key) => {
                    return (
                      <li key={key}>
                        <div className={"uk-inline uk-padding"}>
                          <div className={"uk-text-bold"}>
                            {testimonial.name}
                          </div>
                          <div>{testimonial.title}</div>
                          <div className={"uk-margin"}>
                            {testimonial.review}
                          </div>
                          <div className={"uk-margin"}>
                            <div className={"uk-flex-middle"} data-uk-grid={""}>
                              <div className={"uk-width-expand"}>
                                <div
                                  className={"uk-text-small"}
                                  style={{ color: "#00539a" }}
                                >
                                  <i className={"ri-star-fill"} />
                                  <i className={"ri-star-fill"} />
                                  <i className={"ri-star-fill"} />
                                  <i className={"ri-star-fill"} />
                                  <i className={"ri-star-fill"} />
                                </div>
                              </div>
                              <div className={"uk-width-auto"}>
                                <div>5.0</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={"uk-hidden@s uk-light"}>
                <a
                  className={"uk-position-center-left uk-position-small"}
                  href={"#"}
                  data-uk-slidenav-previous={""}
                  data-uk-slider-item={"previous"}
                />
                <a
                  className={"uk-position-center-right uk-position-small"}
                  href={"#"}
                  data-uk-slidenav-next={""}
                  data-uk-slider-item={"next"}
                />
              </div>
              <div className={"uk-visible@s"}>
                <a
                  className={"uk-position-center-left-out uk-position-small"}
                  href={"#"}
                  data-uk-slidenav-previous={""}
                  data-uk-slider-item={"previous"}
                />
                <a
                  className={"uk-position-center-right-out uk-position-small"}
                  href={"#"}
                  data-uk-slidenav-next={""}
                  data-uk-slider-item={"next"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
