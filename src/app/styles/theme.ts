"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', 
    background: {
      default: '#000',
    },
    common: {
      white: '#fff',
    },
    primary: {
      main: '#e50914',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Netflix Sans',
      'Helvetica Neue',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
