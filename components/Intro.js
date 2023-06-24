import {
  AspectRatio,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import stock4 from "../images/stock/4.jpg";
import { useGlobal } from "../lib/context";
import Image from "next/image";

export default function Intro() {
  const { setIsLoading } = useGlobal();

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 3]}>
          <Card pt={1}>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Heading as={"p"} fontSize={["2rem", "4rem"]}>
                Websites, Web Apps, &amp; Phone Apps
              </Heading>
              <Text mb={0}>
                I help people with something to share who want to engage with
                their community by delivering software development services that
                improve their brand awareness and authority.
              </Text>
            </Flex>
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <AspectRatio ratio={1}>
            <Image
              src={stock4}
              alt={
                "Web Developer on Computer Talking | Software Development Services"
              }
              fill
              style={{ objectFit: "cover" }}
              onLoadingComplete={setIsLoading(false)}
              priority
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card>
            <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
              <Text fontWeight={"bold"} color={"primary.500"} m={0}>
                topher@stupendousweb.com
              </Text>
              <Text>Say hi!</Text>
              <Box color={"primary.500"}>
                <RiMailLine size={32} />
              </Box>
            </Link>
            <Divider mt={4} mb={8} />
            <Link as={NextLink} href={"tel:7023089375"}>
              <Text fontWeight={"bold"} color={"primary.500"} m={0}>
                +1 702.308.9375
              </Text>
              <Text>Text or Call</Text>
              <Box color={"primary.500"}>
                <RiPhoneLine size={32} />
              </Box>
            </Link>
            <Divider mt={4} />
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
