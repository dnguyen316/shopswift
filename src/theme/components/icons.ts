import { defineStyleConfig } from "@chakra-ui/react";

const iconTheme = defineStyleConfig({
  sizes: {
    sm: {
      boxSize: 6,
    },
  },
  variants: {
    solid: {
      _light: {
        color: "var(--gray)",
      },
      _dark: {
        color: "var(--text-dark)",
      },
    },
    user: {
      _light: {
        color: "var(--widget-light)",
      },
      _dark: {
        color: "var(--widget-dark)",
      },
    },
  },
  defaultProps: {
    variant: "solid",
  },
});

export default iconTheme;
