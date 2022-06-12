import React from 'react';
import { ThemeProvider } from '@tradeling/web-design-system';
import '../../assets/styles.css';
import { MDXProvider } from '@mdx-js/react';
import components from '../components/mdx-components';

export default function MyApp(props: any) {
  const { Component } = props;

  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <Component {...props} />
      </MDXProvider>
    </ThemeProvider>
  );
}
