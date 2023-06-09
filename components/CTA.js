import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import ContactRow from "./ContactRow";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/send", { email, message })
      .then(() => {
        setIsSuccessful(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsInvalid(true);
        setIsLoading(false);
      });
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={"primary.500"}
      h={[null, "calc(100vh - 212px)"]}
      py={8}
    >
      <Container maxW={"container.xl"} color={"white"}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "50%"]}>
            <Heading size={["xl", "3xl"]} mb={16}>
              Your two consultations are now FREE!
            </Heading>
            <ContactRow />
            <Text>
              Find your audience, refine your product, and create solutions for
              your customers in the first of your two free consultations.
            </Text>
          </Box>
          <Box w={["100%", "50%"]}>
            <form onSubmit={(event) => handleSubmit(event)}>
              <FormControl isRequired px={[0, 24]}>
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  autoComplete={"email"}
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="What excites you about your project?"
                  value={message}
                  onChange={(event) => setMessage(event.currentTarget.value)}
                />
                {(isSuccessful || isInvalid) && (
                  <Text color={isSuccessful ? "green.300" : "red.300"}>
                    {isSuccessful
                      ? "Yahoo! I'll email you back soon. Thanks!"
                      : "Hmm. Something went wrong. Please email topher@stupendousweb.com instead."}
                  </Text>
                )}
                {!isSuccessful && !isInvalid && (
                  <Button
                    type={"submit"}
                    variant={"bonkers"}
                    size={"sm"}
                    isLoading={isLoading}
                  >
                    Send!
                  </Button>
                )}
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
