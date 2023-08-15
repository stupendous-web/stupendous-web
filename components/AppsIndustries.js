import {
  Box,
  Button,
  Card,
  Container,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function AppsIndustries() {
  const { colorMode } = useColorMode();

  const apps = [
    "Project Management Systems",
    "Collaboration Software",
    "Analytics Dashboards",
    "Patient Portals",
    "CRM's",
    "Tax Filing Systems",
    "Ecommerce Apps",
    "Partner Portals",
    "Learning Management Systems",
    "Financial Systems",
    "Discussion Forums",
    "Social Media Platforms",
    "Bookings and Events Calendars",
    "Chat Rooms",
    "Email, SMS, and Notifications",
    "Online Review Apps",
  ];

  const industryArticles = [
    {
      href: "healthcare-web-development",
      anchor: "Healthcare",
      title: "Healthcare Web Development",
    },
    {
      href: "finance-web-development",
      anchor: "Finance",
      title: "Finance Web Development",
    },
    {
      href: "real-estate-page-design",
      anchor: "Real Estate",
      title: "Real Estate Page Design",
    },
  ];

  const industries = [
    "Insurance",
    "Manufacturing",
    "Retail",
    "Telecommunication",
    "Law",
    "Art and Design",
    "Crypto and NFT's",
    "Sustainability",
    "Marketing and Advertising",
    "Professional Services",
    "Logistics",
    "Many More",
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 4]}>
          <Card variant={"transparent"}>
            <Heading>Engage with your Audience</Heading>
            <Text>
              My web and app development services will excel you and your work
              far past others and their websites! With the power of cloud
              computing technology, your web and mobile apps will be full of
              useful features. This power [use it wisely] let&apos;s you engage
              with your audiences in many fun, creative, and profitable ways:
            </Text>
            <Box>
              {apps.map((app, index) => (
                <Tag
                  key={index}
                  bg={colorMode === "dark" ? "gray.800" : "gray.150"}
                  mr={2}
                >
                  {app}
                </Tag>
              ))}
            </Box>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 4]}>
          <Card variant={"transparent"}>
            <Heading>Expand your Reach</Heading>
            <Text>
              Websites, web apps, and mobile apps are useful in any industry. My
              web and app development services provide people like you with the
              tools they need to grow their business. You&apos;ll reach existing
              and new customers and increase profitability so you can continue
              to do what you love.
            </Text>
            <Box>
              {industryArticles.map((industry) => (
                <Link
                  key={industry.href}
                  as={NextLink}
                  href={`/${industry.href}`}
                  title={`${industry.title} | Web and App Development Services | Stupendous Web`}
                >
                  <Button
                    bg={colorMode === "dark" ? "gray.800" : "gray.150"}
                    mr={2}
                    mb={2}
                  >
                    {industry.anchor}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box>
              {industries.map((industry) => (
                <Tag
                  key={industry}
                  bg={colorMode === "dark" ? "gray.800" : "gray.150"}
                  mr={2}
                >
                  {industry}
                </Tag>
              ))}
            </Box>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
