import { createTheme } from '@mui/material/styles';

import { Typography, TextField, Button, Box } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#539713',
      //   dark: '#1D283A',

      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  //   components: {
  //     TextField: {
  //       styleOverrides: {
  //         root: {
  //           '&:hover': {
  //             backgroundColor: 'blue',
  //             '.MuiOutlinedInput-notchedOutline': {
  //               borderColor: 'red',
  //               borderWidth: '8px',
  //             },
  //           },
  //           '.MuiOutlinedInput-notchedOutline': {
  //             borderColor: 'green',
  //             borderWidth: '4px',
  //           },
  //         },
  //       },
  //     },
  //   },
});
