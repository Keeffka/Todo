import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: 'rgb(92,116,212)',
    grey: 'rgb(96,96,101)',
    white: 'rgb(244,244,244)',
  },

  textStyles: {
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      color: 'grey',
    },

    p: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      color: 'grey',
    },
  },
});
