import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

export const Center = (props: FlexProps) => {
  return <Flex align="center" justify="center" {...props} />;
};
