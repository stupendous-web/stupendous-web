import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <link rel={"stylesheet"} href={"https://use.typekit.net/aqk5kto.css"} />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
