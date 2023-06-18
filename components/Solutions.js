import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CarbonGridImage from "./CarbonGridImage";
import cTA from "../images/cTA.png";

export default function Solutions() {
  const solutions = [
    {
      heading: "Hosting",
      text: "I'll handle the technical work of getting you, your brand, and your message online. I'll set you up with your managed, fast, and secure website hosting and Google Play and Apple App Store listings as part of my software development services. Sit back, relax, and continue to do the work you love.",
    },
    {
      heading: "Support",
      text: "Let's get this right! We'll work closely together to make sure your web, iOS, and Android apps are perfect as part of my software development services. I'm available via email, phone, video chat, and even in person in Las Vegas. You can email me anytime with your required updates and concerns. I'm always here.",
    },
    {
      heading: "SEO & ASO",
      text: "Search engine and app store optimization play important roles in getting your product to your audiences. So, let's keep your web, iOS, and Android apps up to date with the latest SEO and ASO. My software development services get more people to your app. Let's work some magic!",
    },
    {
      heading: "Payment Processing",
      text: "Let's keep your work sustainable. My software development services integrate with your Stripe and Paypal accounts. Let your software make you money so you can focus on your work.",
    },
    {
      heading: "Publishing",
      text: "Managing your web, iOS, and Android app text, images, and even videos is easy! My software development services include a content management system. Now you can easily add, update, and remove content at any time.",
    },
    {
      heading: "Analytics",
      text: "There are many new people out there waiting to meet you that are very interested in what you do! My software development services come with web analytics at now extra charge. Learn more about your current audience while also discovering new ones with analytics.",
    },
  ];

  return (
    <Box>
      <Container maxW={"container.xl"} pt={[0, 16]}>
        <SimpleGrid columns={8} spacing={2} h={["100%", "600px"]} mb={4}>
          <CarbonGridImage
            colSpan={[8, 5]}
            src={cTA}
            alt={"Software Solutions | Software Development Services"}
          />
          <GridItem colSpan={[8, 3]} bg={"gray.900"} p={4}>
            <Heading as={"h1"}>Software Development Services</Heading>{" "}
          </GridItem>
        </SimpleGrid>
        {solutions?.map((solution, index) => (
          <SimpleGrid columns={8} spacing={2} key={index}>
            <GridItem colSpan={[8, 2]} />
            <GridItem colSpan={[8, 3]} p={4}>
              <Heading as={"h3"} mb={0}>
                {solution.heading}
              </Heading>
            </GridItem>
            <GridItem
              colSpan={[8, 3]}
              p={4}
              borderBottom={index < solutions.length - 1 ? "solid 1px" : null}
              borderColor={"gray.300"}
            >
              <Text m={0}>{solution.text}</Text>
            </GridItem>
          </SimpleGrid>
        ))}
      </Container>
    </Box>
  );
}
