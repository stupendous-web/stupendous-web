import {
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Flex,
  GridItem,
  Card,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { RiStarFill, RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { useState } from "react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { colorMode } = useColorMode();

  const testimonials = [
    {
      name: "Masumi Johnson",
      title: "Pixel Pusher",
      review:
        "Topher is a web design wizard. He was incredible to work with from start to finish and was able to build us a completely custom web site. He leverages several useful tools to facilitate the process and maintained great communication and transparency through the whole process. I highly recommend Stupendous Web if you’re in the market for a professional website!",
    },
    {
      name: "Grace Avila",
      title: "Nutritionist",
      review:
        "Working with Topher on my new site was a dream. He worked quickly, thoughtfully and was very responsive. I had a lot of questions on updating the site myself. He walked me through all of my concerns, polished out all the details and completed the site very quickly. I love the look of my new site! I would recommend Topher highly.",
    },

    {
      name: "Chidi Ononuju",
      title: "Masseur",
      review:
        "Topher has been great, and I've actually had him create a second site for me after he recreated an old one I had. Good value for money, attentive and good at brainstorming togive a better work. I'd definitely recommend.",
    },
    {
      name: "Euzibio S.",
      title: "Social Media Influencer",
      review:
        "Besides being a very communicative person, his works are excellent. Following the creation of your many sites, I could see your resilience when a problem appears, always going after solutions, in addition to a high-level design, making projects in 3D. All his sites feel and see ease in using what becomes good for me and for my customers as a result. I can always access and get in touch with him when I need, through message or call, which has been very useful in unforeseen events. Thank you very much for your services, I see a difference from you, success!",
    },
    {
      name: "Cloe Server",
      title: "Dog Trainer",
      review:
        "I absolutely loved working with Topher. My website looks exactly how I wanted. Anytime something needed to be changed it was done in a prompt and timely manner. Topher seems to have endless possibilities as far as function and the overall design. It looks just like what I requested. I say if you know what you want, Topher can get it done with quality!",
    },
  ];
  return (
    <Box
      bg={colorMode === "dark" ? "gray.800" : "gray.150"}
      py={[4, 8]}
      mt={[4, 16]}
    >
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 6]}>
            <Card variant={"transparent"}>
              <Heading>What they&apos;re saying</Heading>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"}>
              <Text m={0}>{testimonials[activeTestimonial].name}</Text>
              <Heading as={"h3"} fontSize={"1rem"}>
                {testimonials[activeTestimonial].title}
              </Heading>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <Card variant={"transparent"}>
              <Text>{testimonials[activeTestimonial].review}</Text>
              <Flex align={"center"}>
                <Text mb={0} mr={4}>
                  5.0
                </Text>
                <Icon as={RiStarFill} color={"yellow.500"} />
                <Icon as={RiStarFill} color={"yellow.500"} />
                <Icon as={RiStarFill} color={"yellow.500"} />
                <Icon as={RiStarFill} color={"yellow.500"} />
                <Icon as={RiStarFill} color={"yellow.500"} />
              </Flex>
            </Card>
          </GridItem>
          <GridItem colSpan={8}>
            <Card variant={"transparent"}>
              <Flex>
                <Box
                  mr={8}
                  cursor={"pointer"}
                  onClick={() => {
                    if (activeTestimonial > 0) {
                      setActiveTestimonial(activeTestimonial - 1);
                    } else {
                      setActiveTestimonial(testimonials.length - 1);
                    }
                  }}
                >
                  <RiArrowLeftLine size={32} />
                </Box>
                <Box
                  cursor={"pointer"}
                  onClick={() => {
                    if (activeTestimonial < testimonials.length - 1) {
                      setActiveTestimonial(activeTestimonial + 1);
                    } else {
                      setActiveTestimonial(0);
                    }
                  }}
                >
                  <RiArrowRightLine size={32} />
                </Box>
              </Flex>
            </Card>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
