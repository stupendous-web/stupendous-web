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
import CTAButton from "./CTAButton";

export default function CTA() {
  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 3]}>
          <Card bg={"primary.500"}>
            <Flex h={"100%"} direction={"column"} justify={"space-between"}>
              <Box>
                <Heading
                  as={"p"}
                  color={"white"}
                  fontSize={["2rem", "3rem"]}
                  mb={4}
                >
                  Your Consultation is now FREE!
                </Heading>
                <Text color={"white"}>
                  Click below to schedule your consultation. Your audience is
                  waiting. Take the first step to connecting with them.
                </Text>
              </Box>
              <Box>
                <CTAButton light />
                <Link
                  as={NextLink}
                  href={"/services/software-consultation"}
                  title={
                    "Software Consultation | Web and App Development Services | Stupendous Web"
                  }
                >
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
          </Card>
        </GridItem>
        <GridItem colSpan={[8, 3]}>
          <AspectRatio
            ratio={1}
            shadow={"md"}
            transition={"all .66s"}
            borderRadius={"md"}
            overflow={"hidden"}
            _hover={{ shadow: "hover" }}
          >
            <Image
              src={stock1}
              alt={
                "A professional developer giving a consultation as part of his web and app development services"
              }
              fill
              style={{ objectFit: "cover" }}
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
