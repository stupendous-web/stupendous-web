import { Card, Flex, GridItem, Heading } from "@chakra-ui/react";
import {
  RiSurveyLine,
  RiPaintBrushLine,
  RiHammerLine,
  RiFlaskLine,
  RiShipLine,
} from "react-icons/ri";

export default function HighlightCards({
  cards = [
    { heading: "Research and Planning", icon: <RiSurveyLine size={32} /> },
    { heading: "UX/UI Design", icon: <RiPaintBrushLine size={32} /> },
    { heading: "Develop to be Flawless", icon: <RiHammerLine size={32} /> },
    { heading: "Quality Assurance", icon: <RiFlaskLine size={32} /> },
    { heading: "Distribution", icon: <RiShipLine size={32} /> },
  ],
}) {
  return (
    <>
      {cards.map((card) => (
        <GridItem key={card.heading} colSpan={[5, 1]} h={["100%", "200px"]}>
          <Card>
            <Flex direction={"column"} justify={"space-between"} h={"100%"}>
              <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                {card.heading}
              </Heading>
              {card.icon}
            </Flex>
          </Card>
        </GridItem>
      ))}
    </>
  );
}
