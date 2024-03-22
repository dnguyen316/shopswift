export const globalStyles = {
  body: {
    fontFamily: `var(--body-font)`,
    _light: {
      bg: `var(--body-light)`,
      color: `var(--text-light)`,
    },
    _dark: {
      bg: `var(--body-dark)`,
      color: `var(--text-dark)`,
    },
  },
  "h1, h2, h3, h4, h5, h6": {
    _light: {
      color: `var(--header-light)`,
    },
    _dark: {
      color: `var(--header-dark)`,
    },
  },
};

export default globalStyles;
