import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import image from "../images/stock/3.jpg";
import { useState } from "react";
import axios from "axios";
import { RiArrowRightLine } from "react-icons/ri";

export default function CTAModal({ light, size = "md" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [productBrief, setProductBrief] = useState(false);
  const [marketReport, setMarketReport] = useState(false);
  const [sEOReport, setSEOReport] = useState(false);
  const [designGuide, setDesignGuide] = useState(false);
  const [projectPlan, setProjectPlan] = useState(true);
  const [estimate, setEstimate] = useState(true);
  const [other, setOther] = useState(false);
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/send", {
        email,
        name,
        product,
        productBrief,
        marketReport,
        sEOReport,
        designGuide,
        projectPlan,
        estimate,
        other,
        note,
      })
      .then(() => {
        setStep(step + 1);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Oops! Something went wrong. Try sending an email to topher@stupendousweb.com instead."
        );
        setIsLoading(false);
      });
  };

  return (
    <>
      {" "}
      <Button
        bg={light ? "white" : "primary.500"}
        color={light ? "primary.500" : "white"}
        size={size}
        rightIcon={<RiArrowRightLine />}
        w={"fit-content"}
        mr={4}
        mb={[4, 0]}
        _hover={{
          bg: light ? "white" : "primary.500",
          color: light ? "primary.500" : "white",
        }}
        onClick={() => setIsOpen(true)}
      >
        <Box mr={4}>Request your Estimate</Box>
      </Button>
      <Modal onClose={() => setIsOpen(false)} size={"full"} isOpen={isOpen}>
        <ModalContent bg={"primary.500"} color={"white"}>
          <ModalCloseButton color={"white"} />
          <Flex align={"center"}>
            <Box
              h={"100vh"}
              w={"50%"}
              hideBelow={"sm"}
              overflow={"hidden"}
              position={"relative"}
            >
              <Image
                src={image}
                alt={
                  "Web Developer working with Clients | Software Development Services"
                }
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box w={["100%", "25%"]} p={4}>
              {step === 0 && (
                <>
                  <Heading color={"white"} mb={4}>
                    Request an Estimate
                  </Heading>
                  <Text>
                    Kickstart your project with a consultation. Use the form
                    below to request an estimate. You&apos;ll receive it right
                    to your inbox in just a few hours.
                  </Text>
                  <form onSubmit={(event) => handleSubmit(event)}>
                    <FormControl isRequired>
                      <FormLabel>What&apos;s your email address</FormLabel>
                      <Input
                        type={"email"}
                        value={email}
                        onChange={(event) =>
                          setEmail(event.currentTarget.value)
                        }
                        autoComplete={"email"}
                      />
                      <Button
                        type={"submit"}
                        bg={"white"}
                        color={"primary.500"}
                        _hover={{ bg: "white" }}
                        isLoading={isLoading}
                      >
                        Send!
                      </Button>
                    </FormControl>
                  </form>
                </>
              )}
              {step > 0 && (
                <>
                  <Heading color={"white"} mb={4}>
                    Thanks! Say More!
                  </Heading>
                  <Text>
                    I can create a more accurate estimate if you tell me just a
                    little more.
                  </Text>
                  <form onSubmit={(event) => handleSubmit(event)}>
                    <FormControl>
                      <FormLabel>What&apos;s your name?</FormLabel>
                      <Input
                        type={"text"}
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                        autoComplete={"name"}
                      />
                      <FormLabel>
                        Please, briefly describe your product.
                      </FormLabel>
                      <Textarea
                        value={product}
                        onChange={(event) =>
                          setProduct(event.currentTarget.value)
                        }
                      />
                      <FormLabel>
                        What deliverables would you like to receive?
                      </FormLabel>
                      <Box>
                        <Checkbox
                          checked={productBrief}
                          onChange={() => setProductBrief(!productBrief)}
                        >
                          Product Brief
                        </Checkbox>
                      </Box>
                      <Box>
                        <Checkbox
                          checked={marketReport}
                          onChange={() => setMarketReport(!marketReport)}
                        >
                          Market Research Report
                        </Checkbox>
                      </Box>
                      <Box>
                        <Checkbox
                          checked={sEOReport}
                          onChange={() => setSEOReport(!sEOReport)}
                        >
                          SEO Research Report
                        </Checkbox>
                      </Box>
                      <Box>
                        <Checkbox
                          checked={designGuide}
                          onChange={() => setDesignGuide(!designGuide)}
                        >
                          Design Guide
                        </Checkbox>
                      </Box>
                      <Box>
                        <Checkbox
                          checked={projectPlan}
                          onChange={() => setProjectPlan(!projectPlan)}
                          defaultChecked
                        >
                          Suggested Project Plan (FREE!)
                        </Checkbox>
                      </Box>
                      <Box>
                        <Checkbox
                          checked={estimate}
                          onChange={() => setEstimate(!estimate)}
                          defaultChecked
                        >
                          In-House Development Estimate (FREE!)
                        </Checkbox>
                      </Box>
                      <Box mb={4}>
                        <Checkbox
                          checked={other}
                          onChange={() => setOther(!other)}
                        >
                          Other
                        </Checkbox>
                      </Box>
                      <FormLabel>
                        Is there anything you&apos;d like me to know about you
                        or what you do? Or, do you have any special needs?
                      </FormLabel>
                      <Textarea
                        value={note}
                        onChange={(event) => setNote(event.currentTarget.value)}
                      />
                      <Button
                        type={"submit"}
                        bg={"white"}
                        color={"primary.500"}
                        _hover={{ bg: "white" }}
                        isLoading={isLoading}
                        isDisabled={step > 1}
                      >
                        {step > 1 ? "Thanks!" : "Send!"}
                      </Button>
                    </FormControl>
                  </form>
                </>
              )}
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
