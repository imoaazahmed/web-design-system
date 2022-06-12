import { ButtonV2 } from './Button';
import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'SASS/Button V2',
  decorators: [withKnobs],
};

export const ButtonV2Story = () => {
  return <ButtonV2 title="Test" />;
};
