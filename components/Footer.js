import Link from "next/link";
import { useGlobal } from "../lib/context";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Footer() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
    { href: "2022", title: "2022 Review" },
    { href: "articles", title: "Articles" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/topherjamesknoll",
      icon: "ri-linkedin-fill",
    },
    { href: "https://instagram.com/stupendousweb_", icon: "ri-instagram-fill" },
    { href: "https://twitter.com/stupendousweb", icon: "ri-twitter-fill" },
    { href: "https://facebook.com/stupendousweb", icon: "ri-facebook-fill" },
    { href: "https://github.com/stupendous-web", icon: "ri-github-fill" },
    {
      href: "https://open.spotify.com/user/128910259",
      icon: "ri-spotify-fill",
    },
  ];

  const { articles } = useGlobal();

  const googleMap = useRef();
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googleMap.current, {
        center: { lat: 37.09024, lng: -95.712891 },
        zoom: 3,
        disableDefaultUI: true,
        gestureHandling: "none",
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36,
              },
              {
                color: "#000000",
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
        ],
      });
      // Grand Rapids
      new google.maps.Marker({
        position: { lat: 42.9634, lng: -85.6681 },
        map,
        icon: "https://stupendousweb.com/images/map-marker.png",
      });
      // San Francisco
      new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map,
        icon: "https://stupendousweb.com/images/map-marker.png",
      });
      // Las Vegas
      new google.maps.Marker({
        position: { lat: 36.1716, lng: -115.1391 },
        map,
        icon: "https://stupendousweb.com/images/map-marker.png",
      });
    });
  }, []);

  return (
    <>
      <div className={"uk-section uk-section-muted uk-section-xsmall"}>
        <div className={"uk-container uk-container-small uk-text-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Resources</li>
                {links.map((link, key) => {
                  return (
                    <li key={key}>
                      <Link href={"/" + link.href} legacyBehavior>
                        <a
                          title={
                            link.title +
                            " | Software Development Services | Stupendous Web"
                          }
                        >
                          {link.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Recent</li>
                {articles?.slice(0, 4).map((article) => {
                  return (
                    <li key={article?.ID}>
                      <Link href={"/articles/" + article?.slug} legacyBehavior>
                        <a
                          title={
                            article?.title +
                            " | Software Development Services | Stupendous Web"
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
            <div className={"uk-width-1-2@s uk-flex-middle"}>
              <div>
                <p>
                  <a
                    href={"mailto:topher@stupendousweb.com"}
                    style={{ fontSize: "1rem" }}
                  >
                    topher@stupendousweb.com
                  </a>
                </p>
                <p>
                  {socialLinks?.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={"_blank"}
                      className={"uk-margin-small-right"}
                    >
                      <i className={link.icon} />
                    </Link>
                  ))}
                </p>
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    Grand Rapids &middot; San Francisco &middot; Oakland
                    &middot; Las Vegas
                  </div>
                </div>
                <div id={"map"} ref={googleMap} style={{ height: 250 }} />
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    &copy; Copyright{" "}
                    <Link href={"/"} legacyBehavior>
                      <a
                        title={
                          "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
                        }
                      >
                        Stupendous Web
                      </a>
                    </Link>{" "}
                    2022. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
