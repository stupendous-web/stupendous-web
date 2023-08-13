import { Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function HowDoesItWork() {
  return (
    <>
      <Heading>So, how does it Work?</Heading>
      <Text>
        I make this fast, easy, and fun! First, let’s get you a consultation!
        You can schedule one right here on the website in just a few seconds.
      </Text>
      <Text>
        In your consultation, we’ll discuss you and your brand, refine your
        product, identify your target audience and their wants and needs, and
        strategize an action plan for your product. You’ll receive many
        documents to help you succeed. You’ll also receive an in-house
        development quote. Once approved, you’ll receive a secret link to your
        product where you can preview progress anytime. You may give feedback or
        make requests via email, schedule a 1-1, or submit requirements via your
        kanban board at any point. Once you’re happy with your product, we’ll
        publish it to the real live world wide web for all your customers to
        see!
      </Text>
      <Text>
        You’ll receive an invoice once a week during development. I also
        recommend my long-term support plan after the project is completed.
      </Text>
      <Text>
        This process all begins with a consultation; take the first step to
        connecting with your community by scheduling one today!{" "}
        <Link
          as={NextLink}
          href={"https://cal.com/stupendousweb/consultation"}
          color={"primary.500"}
          fontWeight={"bold"}
        >
          Click here to schedule your free consultation!
        </Link>
      </Text>
    </>
  );
}
