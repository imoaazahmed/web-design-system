import { Box } from '@chakra-ui/react';
import React from 'react';
import { Text, ThemeProvider } from '../packages/design-system/src';
import { StoryContext } from '@storybook/react';

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
};

const withChakra = (Story, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <Box dir={dir}>
      <Text fontFamily="mono" w="100%" textAlign="center">
        {direction}
      </Text>
      <ThemeProvider direction={dir}>
        <Story />
      </ThemeProvider>
    </Box>
  );
};

export const decorators = [withChakra];
