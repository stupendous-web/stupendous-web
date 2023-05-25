import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff0f7",
      100: "#ffd6e8",
      200: "#ffafd2",
      300: "#ff7eb6",
      400: "#ee5396",
      500: "#d02670",
      600: "#9f1853",
      700: "#740937",
      800: "#510224",
      900: "#2a0a18",
    },
    cyan: {
      50: "#e5f6ff",
      100: "#bae6ff",
      200: "#82cfff",
      300: "#33b1ff",
      400: "#1192e8",
      500: "#0072c3",
      600: "#00539a",
      700: "#393939",
      800: "#003a6d",
      900: "#061727",
    },
    gray: {
      50: "#f4f4f4",
      100: "#e0e0e0",
      200: "#c6c6c6",
      300: "#a8a8a8",
      400: "#8d8d8d",
      500: "#6f6f6f",
      600: "#525252",
      700: "#393939",
      800: "#262626",
      900: "#161616",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "gray.200",
        overflowX: "hidden",
        lineHeight: 2,
      },
    },
  },
  fonts: {
    heading: "transducer, sans-serif",
    body: "transducer, sans-serif",
    mono: "anonymous-pro, monospace",
  },
  fontSizes: {
    xl: "2rem", // Heading size={"lg"}
    "4xl": "3rem", // Heading
    "5xl": "4rem", // Heading size={"2xl"}
    "7xl": "6rem", // Heading size={"4xl"}
  },
  fontWeights: {
    bold: 900,
  },
  radii: {
    none: 0,
    sm: 0,
    base: 0,
    md: 0,
    lg: 0,
    xl: 0,
    "2xl": 0,
    "3xl": 0,
    full: 0,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white",
        fontWeight: "bold",
        mb: 8,
      },
    },
    Text: {
      baseStyle: {
        mb: 4,
      },
    },
    Button: {
      baseStyle: {
        textTransform: "uppercase",
      },
      variants: {
        bonkers: {
          color: "white",
          border: "1px solid white",
          boxShadow: "white .5rem .5rem 0 0, white .5rem .5rem 0 1px",
          _hover: {
            background: "primary.500",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: "primary.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Popover: {
      baseStyle: {
        body: {
          bg: "gray.900",
        },
        content: {
          border: "none",
        },
      },
    },
    List: {
      baseStyle: {
        container: {
          columns: 2,
        },
      },
    },
  },
});

export default theme;
