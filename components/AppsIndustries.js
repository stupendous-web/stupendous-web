import {
  Box,
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function AppsIndustries() {
  const { colorMode } = useColorMode();

  const apps = [
    "Project Management Systems",
    "Collaboration Software",
    "Analytics Dashboards",
    "Patient Portals",
    "CRM's",
    "Inventory and Delivery Managers",
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
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2} h={["100%", "600px"]}>
        <GridItem colSpan={[8, 3]}>
          <Card>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Box>
                <Heading>Engage with your Audience</Heading>
                <Text>
                  My software development services will excel you and your work
                  far past your competitors and their websites! With the added
                  power of a database and powerful server technologies, your web
                  and phone apps will be full of useful features. This power
                  [use it wisely] let&apos;s you engage with your audiences in
                  many fun, creative, and profitable ways:
                </Text>
              </Box>
              <Box>
                {apps.map((app) => (
                  <Tag
                    key={app}
                    bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                    mr={2}
                  >
                    {app}
                  </Tag>
                ))}
              </Box>
            </Flex>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <Card>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Box>
                <Heading>Expand your Reach</Heading>
                <Text>
                  Do what you do! Web and phone apps can be useful in any
                  industry. My software development services provide people like
                  you with the tools they need to grow their business while
                  reaching existing and new customers and increasing
                  profitability so you can continue to do what you love.
                </Text>
              </Box>
              <Box>
                {industries.map((industry) => (
                  <Tag
                    key={industry}
                    bg={colorMode === "dark" ? "gray.700" : "gray.300"}
                    mr={2}
                  >
                    {industry}
                  </Tag>
                ))}
              </Box>
            </Flex>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
