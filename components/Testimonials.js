import {
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Flex,
  GridItem,
  Card,
} from "@chakra-ui/react";
import { RiStarFill } from "react-icons/ri";
import { Fragment } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Grace Avila",
      title: "Nutritionist",
      review:
        "Working with Topher on my new site was a dream. He worked quickly, thoughtfully and was very responsive. I had a lot of questions on updating the site myself. He walked me through all of my concerns, polished out all the details and completed the site very quickly. I love the look of my new site! I would recommend Topher highly.",
    },
    {
      name: "Masumi Johnson",
      title: "Pixel Pusher",
      review:
        "Topher is a web design wizard. He was incredible to work with from start to finish and was able to build us a completely custom web site. He leverages several useful tools to facilitate the process and maintained great communication and transparency through the whole process. I highly recommend Stupendous Web if you’re in the market for a professional website!",
    },
    {
      name: "Chidi Ononuju",
      title: "Masseur",
      review:
        "Topher has been great, and I've actually had him create a second site for me after he recreated an old one I had. Good value for money, attentive and good at brainstorming togive a better work. I'd definitely recommend.",
    },
    {
      name: "Cloe Server",
      title: "Dog Trainer",
      review:
        "I absolutely loved working with Topher. My website looks exactly how I wanted. Anytime something needed to be changed it was done in a prompt and timely manner. Topher seems to have endless possibilities as far as function and the overall design. It looks just like what I requested. I say if you know what you want, Topher can get it done with quality!",
    },
  ];
  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={2} hideBelow={"sm"} />
        <GridItem colSpan={[8, 6]}>
          <Card variant={"transparent"}>
            <Heading>What they&apos;re saying</Heading>
          </Card>
        </GridItem>
        {testimonials.map((testimonial) => (
          <Fragment key={testimonial.name}>
            <GridItem colSpan={2} hideBelow={"sm"} />
            <GridItem colSpan={[8, 3]}>
              <Card variant={"transparent"}>
                <Text m={0}>{testimonial.name}</Text>
                <Heading as={"h3"} fontSize={"1rem"}>
                  {testimonial.title}
                </Heading>
              </Card>
            </GridItem>
            <GridItem colSpan={[8, 3]}>
              <Card variant={"transparent"}>
                <Text>{testimonial.review}</Text>
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
          </Fragment>
        ))}
      </SimpleGrid>
    </Container>
  );
}
