import { Box, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function CarbonGridImage({
  colSpan,
  src = "",
  alt = "",
  onLoadingComplete = () => {},
}) {
  return (
    <GridItem colSpan={colSpan}>
      <Box h={"100%"} position={"relative"} overflow={"hidden"}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          onLoadingComplete={onLoadingComplete}
        />
      </Box>
    </GridItem>
  );
}
