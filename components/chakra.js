import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Chakra({ cookies, children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
