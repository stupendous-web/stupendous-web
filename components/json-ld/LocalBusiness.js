import { LocalBusinessJsonLd } from "next-seo";

export default function LocalBusiness({
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
        streetAddress: "5150 Spyglass Hill Dr.",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89142",
        addressCountry: "US",
      }}
      geo={{
        latitude: "36.140720",
        longitude: "-115.061710",
      }}
      rating={{ ratingValue: 5, ratingCount: 5 }}
    />
  );
}
