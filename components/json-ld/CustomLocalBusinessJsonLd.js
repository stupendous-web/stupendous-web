import { LocalBusinessJsonLd } from "next-seo";

export default function CustomLocalBusinessJsonLd({
  description = "I help people with something to share who want to engage with their community by delivering web and app development services that improve their brand awareness and authority.",
}) {
  return (
    <LocalBusinessJsonLd
      type={"ProfessionalService"}
      id={"https://stupendousweb.com"}
      name={"Stupendous Web"}
      description={description}
      url={"https://stupendousweb.com"}
      telephone={"+17023089375"}
      address={{
        streetAddress: "228 Park Ave S PMB",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10003",
        addressCountry: "US",
      }}
      geo={{
        latitude: "40.737560",
        longitude: "-73.988500",
      }}
      rating={{ ratingValue: 5, ratingCount: 6 }}
    />
  );
}
