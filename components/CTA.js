import { useState } from "react";
import NextLink from "next/link";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Tooltip,
  Link,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { RiMailFill, RiPhoneFill } from "react-icons/ri";

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
            <Flex align={"center"} mb={8}>
              <Link
                as={NextLink}
                href={"https://cal.com/stupendousweb/consultation"}
              >
                <Button variant={"bonkers"} size={"lg"} mr={8}>
                  Get yours Now
                </Button>
              </Link>
              <Tooltip label={"Email me!"} fontSize={"md"}>
                <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                  <IconButton
                    color={"white"}
                    variant={"link"}
                    aria-label={"Email me!"}
                    size={"lg"}
                    icon={<RiMailFill />}
                  />
                </Link>
              </Tooltip>
              <Tooltip label={"Call or Text Me!"} fontSize={"md"}>
                <Link as={NextLink} href={"tel:5108906429"}>
                  <IconButton
                    color={"white"}
                    variant={"link"}
                    aria-label={"Email me!"}
                    size={"lg"}
                    icon={<RiPhoneFill />}
                  />
                </Link>
              </Tooltip>
            </Flex>
            <Text>
              Find your audience, refine your product, and create solutions for
              your customers in the first of your two free consultations.
            </Text>
          </Box>
          <Box w={["100%", "50%"]}>
            <form onSubmit={(event) => handleSubmit(event)}>
              <FormControl isRequired px={24}>
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
