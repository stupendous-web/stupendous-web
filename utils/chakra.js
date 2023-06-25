import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { initialColorMode: "dark" },
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
    gray: {
      50: "#f8f8f8",
      100: "#ebebeb",
      150: "#dddddd",
      200: "#d0d0d0",
      250: "#c3c3c3",
      300: "#b5b5b5",
      350: "#a8a8a8",
      400: "#9a9a9a",
      450: "#8d8d8d",
      500: "#808080",
      550: "#727272",
      600: "#656565",
      650: "#575757",
      700: "#4a4a4a",
      750: "#3c3c3c",
      800: "#2f2f2f",
      850: "#222222",
      900: "#141414",
      950: "#070707",
    },
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("white", "black")(props),
        color: mode("gray.800", "gray.200")(props),
        fontSize: 18,
        overflowX: "hidden",
        lineHeight: 2,
      },
      body: {
        mt: "6rem",
      },
    }),
  },
  fonts: {
    heading: "transducer, sans-serif",
    body: "transducer, sans-serif",
    mono: "anonymous-pro, monospace",
  },
  fontSizes: {
    xl: "2rem", // Heading size={"lg"}
    "4xl": "2rem", // Heading
    "5xl": "4rem", // Heading size={"2xl"}
    "7xl": "6rem", // Heading size={"4xl"}
  },
  fontWeights: {
    bold: 900,
  },
  sizes: {
    container: {
      xl: "102rem",
    },
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
  shadows: {
    base: "none",
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode("black", "white")(props),
        fontWeight: "bold",
        mb: 8,
      }),
    },
    Text: {
      baseStyle: {
        mb: 4,
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode("black", "white")(props),
        _hover: {
          textDecoration: "none",
        },
      }),
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: mode("gray.50", "gray.900")(props),
          h: "100%",
          p: 4,
          transition: "all .66s",
          _hover: { bg: mode("gray.100", "gray.850")(props) },
        },
      }),
      variants: {
        transparent: {
          container: {
            bg: "transparent",
            _hover: { bg: "transparent" },
          },
        },
      },
    },
    Accordion: {
      baseStyle: {
        button: {
          px: 0,
          py: 4,
          _hover: {
            bg: "transparent",
          },
        },
        panel: {
          p: 0,
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          fontFamily: "anonymous-pro, monospace",
          mb: 4,
          _focus: {
            boxShadow: "none !important",
            borderColor: "white !important",
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        fontFamily: "anonymous-pro, monospace",
        mb: 4,
        _focus: {
          boxShadow: "none !important",
          borderColor: "white !important",
        },
        _placeholder: {
          color: "gray.100",
        },
      },
    },
  },
});

export default theme;
