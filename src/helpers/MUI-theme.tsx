import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#539713',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#f44336',
      dark: '#1D283A',
    },
    action: {
      disabled: 'white',
    },
  },
});
