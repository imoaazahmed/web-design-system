import { extendTheme } from '@chakra-ui/react';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import space from './foundations/spacing';
import typography from './foundations/typography';

export const theme = extendTheme({
  breakpoints,
  ...typography,
  colors,
  space,
  shadows: {
    outline: '0 0 1px 2px #9ab6e8',
    100: '0 0 14px 0 rgba(0, 0, 0, 0.05)',
  },
});

export default theme;
