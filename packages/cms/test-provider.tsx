import React from 'react';
import { ThemeProvider } from '@tradeling/web-design-system';

interface Props {
  children: React.ReactElement;
}

const ApplicationProvider = ({ children }: Props) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export { ApplicationProvider };
