import { createBreakpoints } from '@chakra-ui/theme-tools';

/**
 * em-to-px conversion
 * ===
 * 36em = 576px
 * 48em = 768px
 * 60em = 960px
 * 80em = 1280px
 */
export default createBreakpoints({
  sm: '36em',
  md: '48em',
  lg: '60em',
  xl: '80em',
});
