import { Stack } from '@chakra-ui/react';
import { Button } from './button';
import * as React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'CHAKRA/Button',
  decorators: [withKnobs],
};

export const WithVariants = () => (
  <Stack spacing="20px" align="center" mt="40px">
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="primary"
    >
      Primary button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="outline"
    >
      Outline Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="ghost"
    >
      Ghost Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="danger"
    >
      Danger Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="warning"
    >
      Warning Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="link"
    >
      Link Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="underline"
    >
      Underline Button
    </Button>

    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="underline-secondary"
    >
      Underline Button
    </Button>

    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="primary-next"
    >
      Primary Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="secondary-next"
    >
      Secondary Button
    </Button>
    <Button
      size={select('size', ['sm', 'md', 'lg'], 'md')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
      variant="default"
    >
      Default Button
    </Button>
  </Stack>
);

export const WithSizes = () => (
  <Stack spacing="20px" align="center" mt="40px">
    {['sm', 'md', 'lg'].map((size: any) => (
      <Button size={size} variant="outline">
        button ({size})
      </Button>
    ))}
  </Stack>
);
