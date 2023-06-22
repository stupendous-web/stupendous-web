import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Questions() {
  const faqs = [
    {
      question: "What's the difference between a website and a web app?",
      answer:
        "Both are good for building community and getting the word out about how you can help your audiences do what they love. The main difference is capability; a website is more static and limited and a web app or even phone app can handle much more dynamic interaction. I start all projects as scalable web apps from the begining because you and your business will continue to grow and have increasingly dynamic and interactive requirements.",
    },
    {
      question: "Do you build iOS and Android apps?",
      answer:
        "Yes! In fact, a phone app is a powerful tool for keeping close to existing and even new audiences. Building a website, web app, and phone apps side by side is actually pretty easy to do with the tools I use. It's a great idea to take advantage of an app version of your project early on in the process.",
    },
    {
      question: "How much does software development cost?",
      answer:
        "That depends on the scope of the project. I charge a flat hourly rate and no extra fees, therefore I take into consideration how many hours it will take to complete your goals by assessing past projects and the client's time constraints when creating you a project outline and quote. I also offer monthly long term support to keep your project online and running smoothly for a monthly fee. First we need to meet! I want to understand who you are and what you're working on. Then, we'll discuss what you need and I can provide a more accurate estimate of the cost of your project.",
    },
    {
      question: "How long do I have to wait for my website or software?",
      answer:
        "I can deliver a website or web app in just a few weeks, sometimes sooner. Obviously it may take longer for more demanding projects and we have to account for being thorough. Being thoroguh means saving time and expenses on reworking issues as well as creating you a more valuable product.",
    },
  ];

  return (
    <Container maxW={"container.xl"} pt={[4, 16]}>
      <SimpleGrid columns={8} spacing={2}>
        <GridItem colSpan={[8, 6]}>
          <Card variant={"transparent"}>
            <Heading>FAQ&apos;s</Heading>
            <Accordion allowToggle>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question}>
                  <AccordionButton>
                    <Heading as={"h3"} fontSize={"1rem"} mb={0} mr={"auto"}>
                      {faq.question}
                    </Heading>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
