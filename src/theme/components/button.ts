import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  sizes: {
    md: {
      boxSize: 10,
    },
  },
  variants: {
    iconButton: {
      background: "transparent",
      _hover: {
        background: "transparent",
      },
    },
    user: {
      borderRadius: "100%",
      _light: {
        bg: "var(--accent-light)",
      },
      _dark: {
        bg: "var(--accent-dark)",
      },
    },
  },
});
