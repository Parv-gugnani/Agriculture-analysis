import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'green',
  colors: {
    green: [
      '#E9F7EF',
      '#D4EDE4',
      '#BBE5D5',
      '#97D7C2',
      '#74C9AF',
      '#52B69A',
      '#408C77',
      '#2E6354',
      '#1C3B32',
      '#0A1311',
    ],
  },
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: rem(32) },
      h2: { fontSize: rem(24) },
    },
  },
  shadows: {
    md: '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  components: {
    Paper: {
      defaultProps: {
        p: 'xl',
        radius: 'md',
        shadow: 'md',
      },
    },
    Table: {
      defaultProps: {
        striped: true,
        highlightOnHover: true,
        withTableBorder: true,
        withColumnBorders: true,
      },
      styles: {
        th: {
          backgroundColor: 'var(--mantine-color-green-0)',
          color: 'var(--mantine-color-green-9)',
          fontWeight: 600,
        },
      },
    },
  },
});