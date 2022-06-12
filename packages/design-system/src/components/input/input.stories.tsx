import React, { useState } from 'react';
import { Input, InputControl, InputLabel } from './input';
import { AutoResizeInput } from './autosize-input';
import { Box, FormControl, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Input',
  decorators: [withContainer],
};

export const basic = () => <Input placeholder="First name" />;

export const FormElements = () => (
  <Stack spacing="24px">
    <Input placeholder="Last name" />
    <Input placeholder="First name" isInvalid />
    <Input placeholder="First name" isDisabled />
  </Stack>
);

export const inputControl = () => (
  <Stack spacing="24px">
    <FormControl>
      <InputLabel label="First name" required />
      <Input placeholder="First name" />
    </FormControl>
    <InputControl isInvalid errorMessage="Invalid Message">
      <InputLabel label="First name" required />
      <Input placeholder="Invalid Input" />
    </InputControl>
  </Stack>
);

export const InputAddons = () => (
  <Stack spacing="24px">
    <Box>
      <Input
        placeholder="Website"
        leftAddon="https://"
        rightAddon=".com"
        addonType="styled"
      />
    </Box>
    <Box>
      <Input
        placeholder="Phone number"
        leftAddon={<PhoneIcon color="gray.300" />}
      />
    </Box>
  </Stack>
);

export const ControlledInput = () => {
  const [value, setValue] = useState('First name');
  const handleChange = event => setValue(event.target.value);

  return <Input value={value} onChange={handleChange} />;
};

export const WithAutoResize = () => {
  return <AutoResizeInput defaultValue="dsjfksdbfsdjbfk" />;
};
