import {
  AspectRatio,
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
              alt={"Women Working | Software Development Services"}
              fill
              style={{ objectFit: "cover" }}
              onLoadingComplete={setIsLoading(false)}
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={[8, 2]}>
          <Card>
            <Link
              as={NextLink}
              href={"mailto:topher@stupendousweb.com"}
              color={"primary.500"}
            >
              <Text fontWeight={"bold"} m={0}>
                topher@stupendousweb.com
              </Text>
              <Text color={"gray.500"}>Say hi!</Text>
              <RiMailLine size={32} />
            </Link>
            <Divider mt={4} mb={8} />
            <Link as={NextLink} href={"tel:7023089375"} color={"primary.500"}>
              <Text fontWeight={"bold"} m={0}>
                +1 702.308.9375
              </Text>
              <Text color={"gray.500"}>Text or Call</Text>
              <RiPhoneLine size={32} />
            </Link>
            <Divider mt={4} />
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
