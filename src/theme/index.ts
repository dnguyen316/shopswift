import { extendTheme } from "@chakra-ui/react";
import { containerTheme } from "./foundations/container";
import iconTheme from "./components/icons";
import { buttonTheme } from "./components/button";
import globalStyles from "./styles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const shopSwiftTheme = extendTheme({
  config,
  fonts: {
    heading: `'Archivo SemiExpanded', sans-serif`,
    body: `'Archivo', sans-serif`,
  },
  components: {
    Container: containerTheme,
    Icon: iconTheme,
    Button: buttonTheme,
  },
  styles: {
    global: {
      ...globalStyles,
    },
  },
});

export default shopSwiftTheme;
