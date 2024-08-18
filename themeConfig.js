'use client'
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#15143c'
    },
    secondary: {
      main: '#e8e7ec',
    },
    text: {
      primary: '#15143c',
      orange: '#ed695a'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          textTransform: 'none',
          padding: '1rem 3rem',
          fontFamily: 'Sora, sans-serif'
        },
      },
    }
  }
  });