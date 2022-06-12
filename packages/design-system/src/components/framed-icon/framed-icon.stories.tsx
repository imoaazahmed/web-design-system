import React from 'react';
import FramedIcon from './framed-icon';
import { FaArrowRight } from 'react-icons/fa';
import { Stack } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Framed Icon',
};

export const framedIcon = () => (
  <Stack>
    <FramedIcon icon={<FaArrowRight />} name="copy" />
    <FramedIcon icon={<FaArrowRight />} bg="blue.50" color="blue.700" />
  </Stack>
);
