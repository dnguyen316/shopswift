import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define custom sizes
const sizes = {
  sm: defineStyle({
    maxW: "45ch",
    p: "5",
  }),
  md: defineStyle({
    maxW: "container.sm",
    px: "5",
    py: "15px",
    fontSize: "lg",
  }),
  lg: defineStyle({
    maxW: "75ch",
    p: "8",
    fontSize: "xl",
  }),
};

// export the component theme
export const containerTheme = defineStyleConfig({
  sizes,
  variants: {
    shopSwift: {},
  },
  defaultProps: {
    size: "md",
    variant: "shopSwift",
  },
});
