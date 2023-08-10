import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function FrequentlyAskedQuestions({ hasHeading }) {
  const router = useRouter();

  const faqs = [
    {
      question: "What's the difference between a website and a web app?",
      answer: (
        <Text>
          Both are good for building community and getting the word out about
          how you can help your audiences do what they love. The main difference
          is capability; a website is more static and limited and a web app or
          even phone app can handle much more dynamic interaction. I start all
          projects as scalable web apps from the beginning because you and your
          business will continue to grow and have increasingly dynamic and
          interactive requirements.
        </Text>
      ),
    },
    {
      question: "Do you build mobile apps? Even Android?",
      answer: (
        <Text>
          Yes, I build both iOS and Android apps! In fact, a mobile app is a
          powerful tool for keeping close to existing and even new audiences.
          Building a website, web app, and mobile app side by side is actually
          pretty common. It&apos;s a great idea to take advantage of a mobile
          version of your project early on in the process.
        </Text>
      ),
    },
    {
      question: "How much do your services cost?",
      answer: (
        <Text>
          That depends on the scope of the project. I charge a flat hourly rate
          and no extra fees, therefore I take into consideration how many hours
          it will take to complete your goals by assessing past projects when
          creating you a project outline and quote. There is no deposit
          necessary and you will be charged every two weeks during development
          via an invoice to your email that you can pay online. I also offer
          monthly long term support to keep your project online and running
          smoothly for a monthly fee after your project is complete. First we
          need to meet! I want to understand who you are and what you&apos;re
          working on. Then, we&apos;ll discuss what you need and I can provide a
          more accurate estimate of the cost of your project. Schedule your free
          consultation to learn more about my pricing.
        </Text>
      ),
    },
    {
      question: "How long do I have to wait for my website or software?",
      answer: (
        <Text>
          I can deliver a website or app in just a few weeks, sometimes sooner.
          Obviously it may take longer for more demanding projects and we have
          to account for being thorough. Being thorough means saving time and
          expenses on reworking issues as well as creating you a more valuable
          product.
        </Text>
      ),
    },
    {
      question: "What are your qualifications?",
      answer: (
        <Text>
          I love exercising both the creative and logical sides of my brain to
          build awesome and useful products for people like you. Not only do I
          have a knack for both, but I have a degree in web application
          development from Colorado State University as well as many years of
          experience.
        </Text>
      ),
    },
    {
      question: "What's your process?",
      answer: (
        <Text>
          First we meet and plan your project in your software consultation. We
          refine your product and stratagize ways to make your project
          successful. After you approve your project plan and quote, we&apos;ll
          begin designing and development. I build using unique, beautiful,
          organized, and accessible design principles and the latest development
          best practices. You&apos;ll receive a secret link to preview your
          project anytime. You can review, make comments, and submit requests
          anytime during the process. With your approval we&apos;ll launch your
          product. After your project is launched we&apos;ll discuss a long term
          support plan that fits your needs and keeps your application running
          smoothly!
        </Text>
      ),
    },
    {
      question: "What is front-end development?",
      answer: (
        <Text>
          Front-end development refers to the development of the visual and
          interactive components of a website or application – in other words,
          what the user sees and interacts with.
        </Text>
      ),
    },
    {
      question: "What is back-end development?",
      answer: (
        <Text>
          Back-end development refers to the development of the
          behind-the-scenes components of a website or app, such as servers,
          databases, and APIs.
        </Text>
      ),
    },
    {
      question: "What is full-stack development?",
      answer: (
        <Text>
          Full-stack development refers to the development of both the front-end
          and back-end components of a website or application.
        </Text>
      ),
    },
    {
      question: "What is responsive design?",
      answer: (
        <Text>
          Your website and/or web app will be completely responsive. Responsive
          design refers to the practice of designing websites and applications
          that adapt to different devices and screen sizes, providing an optimal
          user experience across all devices.
        </Text>
      ),
    },
    {
      question: "What is user experience design?",
      answer: (
        <Text>
          UX design refers to the process of designing user-centered products
          that are easy to use, engaging, and effective.
        </Text>
      ),
    },
    {
      question: "What is a content management system?",
      answer: (
        <Text>
          If you need a CMS I&apos;ll provide it! A CMS is a software
          application that allows users to create, manage, and publish digital
          content, such as text, images, videos, and more, without needing
          technical expertise.
        </Text>
      ),
    },
    {
      question: "What is website cloud hosting?",
      answer: (
        <Text>
          Website hosting refers to the service of storing website and app files
          on a remote server that can be accessed by users via the internet.
        </Text>
      ),
    },
    {
      question: "What is long term support?",
      answer: (
        <Text>
          I offer long term support (LTS), also known as website maintenance.
          Website maintenance refers to the ongoing process of keeping a website
          or app up-to-date, secure, and functioning properly.
        </Text>
      ),
    },
    {
      question: "What is website accessibility?",
      answer: (
        <Text>
          It&apos;s very importnat that your website, web app, or mobile app be
          accessible. Website accessibility refers to the practice of designing
          websites and apps that can be used by people with disabilities,
          ensuring equal access and experience for all users.
        </Text>
      ),
    },
  ];

  return (
    <>
      {hasHeading && <Heading p={4}>FAQ&apos;s</Heading>}
      <Card variant={"transparent"}>
        <Accordion allowToggle>
          {(router.pathname === "/faqs" ? faqs : faqs.slice(0, 6)).map(
            (faq) => (
              <AccordionItem key={faq.question}>
                <AccordionButton>
                  <Heading
                    as={"h3"}
                    fontSize={"1rem"}
                    mb={0}
                    mr={"auto"}
                    textAlign={"left"}
                  >
                    {faq.question}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>{faq.answer}</AccordionPanel>
              </AccordionItem>
            )
          )}
        </Accordion>
      </Card>
    </>
  );
}
