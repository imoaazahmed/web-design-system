import { Box, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import Radio from './radio';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Form Elements',
  decorators: [withContainer],
};

export const radio = () => (
  <RadioGroup defaultValue="one">
    <Stack>
      <Radio value="one">Radio 1</Radio>
      <Radio value="two">Radio 2</Radio>
      <Radio value="three" isDisabled>
        Radio 3 (Disabled)
      </Radio>
    </Stack>
  </RadioGroup>
);
