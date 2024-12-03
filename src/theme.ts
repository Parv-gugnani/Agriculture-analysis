import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Arial, sans-serif",
  headings: {
    fontFamily: "Roboto, sans-serif",
  },
  spacing: {
    md: "16px", // Change from number to string
  },
};
