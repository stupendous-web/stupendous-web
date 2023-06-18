import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import CarbonGrid from "./CarbonGrid";

export default function AppsIndustries() {
  const apps = [
    "CRM, Customer Relationship Managers",
    "Project Management Systems",
    "Collaboration Software Apps",
    "Data and Analytics Dashboards",
    "Patient Portals and CRM’s",
    "Inventory and Delivery Managers",
    "Maps",
    "Language Support Apps",
    "Support Ticket Managers",
    "Tax Filing Systems",
    "Ecommerce Web Apps",
    "Partner Portal Apps",
    "LMS, Learning Management Systems",
    "Financial and Tax Systems",
    "Client and Customer Logins",
    "Online Submission Forms",
    "Discussion Forum Apps",
    "Social Media Platforms",
    "Bookings and Events Calendars",
    "Direct Messaging and Chat Rooms",
    "Email, SMS, and Browser Notifications",
    "Media Upload and Management System",
    "File Scanning and Conversion",
    "Online Review Apps",
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Telecommunication",
    "Insurance",
    "Law",
    "Art and Design",
    "Crypto and NFT's",
    "Sustainability",
    "Marketing and Advertising",
    "Professional Services",
    "Logistics",
    "Much More",
  ];

  return (
    <Container maxW={"container.xl"} py={"200px"}>
      <CarbonGrid height={4}>
        <GridItem colSpan={4}>
          <Flex
            h={"100%"}
            direction={"column"}
            justify={"space-between"}
            bg={"gray.900"}
            p={4}
          >
            <Box>
              <Heading>Engage with your Audience</Heading>
              <Text>
                My software development services will excel you and your work
                far past your competitors and their websites! With the added
                power of a database and powerful server technologies, your web
                and phone apps will be full of useful features. This power [use
                it wisely] let&apos;s you engage with your audiences in many
                fun, creative, and profitable ways:
              </Text>
            </Box>
            <Box>
              {apps.map((app) => (
                <Tag key={app} mr={2}>
                  {app}
                </Tag>
              ))}
            </Box>
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Flex
            h={"100%"}
            direction={"column"}
            justify={"space-between"}
            bg={"gray.900"}
            p={4}
          >
            <Box>
              <Heading>Expand your Reach</Heading>
              <Text>
                Do what you do! Web and phone apps can be useful in any
                industry. My software development services provide people like
                you with the tools they need to grow their business while
                reaching existing and new customers and increasing profitability
                so you can continue to do what you love.
              </Text>
            </Box>
            <Box>
              {industries.map((industry) => (
                <Tag key={industry} mr={2}>
                  {industry}
                </Tag>
              ))}
            </Box>
          </Flex>
        </GridItem>
      </CarbonGrid>
    </Container>
  );
}
