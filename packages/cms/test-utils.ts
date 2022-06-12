import { render, RenderOptions } from '@testing-library/react';
import { ApplicationProvider } from './test-provider';

const appRenderer = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ApplicationProvider, ...options });

export * from '@testing-library/react';
export { appRenderer as render };
