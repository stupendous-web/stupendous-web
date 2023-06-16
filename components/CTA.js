import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import cTA from "../images/cTA.png";
import Image from "next/image";
import { RiMailLine, RiPhoneLine, RiArrowRightLine } from "react-icons/ri";

export default function CTA() {
  return (
    <Container maxW={"container.xl"} color={"white"}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(8, 1fr)"]}
        gap={"2px"}
        h={"600px"}
      >
        <GridItem colSpan={3}>
          <Flex
            h={"100%"}
            direction={"column"}
            justify={"space-between"}
            bg={"primary.500"}
            _hover={{ bg: "primary.400" }}
            p={4}
          >
            <Box>
              <Heading as={"p"} fontSize={"4rem"} mb={4}>
                Your two consultations are now FREE!
              </Heading>
              <Text>
                Find your audience, refine your product, and create solutions
                for your customers in the first of your two free consultations.
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
                  size={"lg"}
                  _hover={{ bg: "white", color: "primary.500" }}
                  mr={12}
                  rightIcon={<RiArrowRightLine />}
                >
                  Get yours Now
                </Button>
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Box h={"100%"} position={"relative"} overflow={"hidden"}>
            <Image
              src={cTA}
              alt={"Women Talking"}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box bg={"gray.900"} p={4} h={"100%"} _hover={{ bg: "gray.800" }}>
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
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
