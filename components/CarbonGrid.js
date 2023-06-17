import { Grid } from "@chakra-ui/react";

export default function CarbonGrid({ height, children }) {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(8, 1fr)"]}
      gap={"2px"}
      h={`${height * 200}px`}
    >
      {children}
    </Grid>
  );
}
