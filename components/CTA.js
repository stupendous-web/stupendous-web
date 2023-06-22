import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  GridItem,
  Divider,
  SimpleGrid,
  Card,
  AspectRatio,
} from "@chakra-ui/react";
import NextLink from "next/link";
import stock1 from "../images/stock/1.jpg";
import { RiMailLine, RiPhoneLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

export default function CTA() {
  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 3]}>
          <Flex
            h={"100%"}
            direction={"column"}
            justify={"space-between"}
            bg={"primary.500"}
            p={4}
          >
            <Box>
              <Heading
                as={"p"}
                color={"white"}
                fontSize={["2rem", "4rem"]}
                mb={4}
              >
                Your Audience is Waiting
              </Heading>
              <Text color={"white"}>
                Find your audience, refine your product, and create solutions
                for your customers with a web or phone app in your software
                consultation.
              </Text>
            </Box>
            <Box>
              <Link
                as={NextLink}
                href={"https://cal.com/stupendousweb/consultation"}
              >
                <Button
                  bg={"white"}
                  color={"primary.500"}
                  _hover={{ bg: "white", color: "primary.500" }}
                  mr={4}
                  rightIcon={<RiArrowRightLine />}
                >
                  <Box mr={4}>Get yours Now</Box>
                </Button>
              </Link>
              <Link as={NextLink} href={"/services/software-consultation"}>
                <Button
                  bg={"transparent"}
                  color={"white"}
                  border={"solid 1px"}
                  _hover={{ bg: "transparent" }}
                  rightIcon={<RiArrowRightLine />}
                >
                  <Box mr={4}>Learn More</Box>
                </Button>
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <AspectRatio ratio={1}>
            <Image
              src={stock1}
              alt={
                "Web Developer Giving a Consultation | Software Development Services"
              }
              fill
              style={{ objectFit: "cover" }}
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
