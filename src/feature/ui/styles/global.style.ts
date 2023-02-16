import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
      '#root': {
        height: '100%',
      },
    },
  },
});
