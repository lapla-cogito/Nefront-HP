import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      background: "#fff",
      color: "black",
    },
  },
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        // textDecoration: "underline",
        fontSize: 40,
        // textUnderlineOffset: 6,
        // textDecorationColor: "#525252",
        // textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: {
      color: "#2d4fcc",
      textUnderlineOffset: 3,
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
  nefront: "#3054D6",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;