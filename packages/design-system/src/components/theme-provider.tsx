import React from 'react';
import { ChakraProvider, ThemeDirection, useTheme } from '@chakra-ui/react';
import theme from '../theme';
import { Global } from '@emotion/react';

interface ThemeProviderProps {
  children?: React.ReactNode;
  direction?: ThemeDirection;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, direction = 'ltr' } = props;
  // use string because extend-theme has issue with direction type
  const _theme = { ...theme, direction };
  return (
    <ChakraProvider theme={_theme}>
      <Global styles={{ '*': { wordWrap: 'break-word' } }} />
      {children}
    </ChakraProvider>
  );
}
export function useIsRTL() {
  const { direction } = useTheme<typeof theme>();
  // use string because extend-theme has issue with direction type
  return direction === 'rtl';
}
