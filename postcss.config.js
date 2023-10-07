module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em", // 768 px
        "mantine-breakpoint-md": "62em", // 992 px
        "mantine-breakpoint-lg": "75em", // 1200 px
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
