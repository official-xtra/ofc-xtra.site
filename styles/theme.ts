// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors: {
    yellow: {
      300: "#FCF24A",
    },
    gray: {
      400: "#9F9F9F",
      800: "#191D1E",
      900: "#121617",
    },
  },
  config,
});

export default theme;
