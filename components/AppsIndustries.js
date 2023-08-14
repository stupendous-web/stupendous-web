import {
  Box,
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
import { Fragment } from "react";

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

  const industries = [
    { href: "healthcare-web-development", anchor: "Healthcare" },
    { href: "finance-web-development", anchor: "Finance" },
    { href: "real-estate-page-design", anchor: "Real Estate" },
    { anchor: "Insurance" },
    { anchor: "Manufacturing" },
    { anchor: "Retail" },
    { anchor: "Telecommunication" },
    { anchor: "Law" },
    { anchor: "Art and Design" },
    { anchor: "Crypto and NFT's" },
    { anchor: "Sustainability" },
    { anchor: "Marketing and Advertising" },
    { anchor: "Professional Services" },
    { anchor: "Logistics" },
    { anchor: "Many More" },
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
              {industries.map((industry) => (
                <Fragment key={industry.anchor}>
                  {industry.href ? (
                    <Link as={NextLink} href={`/${industry.href}`}>
                      <Tag
                        bg={colorMode === "dark" ? "gray.800" : "gray.150"}
                        mr={2}
                      >
                        {industry.anchor}
                      </Tag>
                    </Link>
                  ) : (
                    <Tag
                      bg={colorMode === "dark" ? "gray.800" : "gray.150"}
                      mr={2}
                    >
                      {industry.anchor}
                    </Tag>
                  )}
                </Fragment>
              ))}
            </Box>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
