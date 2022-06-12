import React from 'react';
import SpinnerBox from './spinner';
import { Box, Stack } from '@chakra-ui/react';
import { withContainer } from '../story-container';

const { Spinner, Header, Extra } = SpinnerBox;

export default {
  title: 'CHAKRA/Spinner',
  decorators: [withContainer],
};

export const basic = () => (
  <Box maxWidth="500px" padding="lg">
    <Stack isInline spacing="lg" mb="5px">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </Stack>
    <Stack isInline spacing="lg">
      <Spinner color="green.300" />
      <Spinner />
      <Spinner color="blue.300" />
    </Stack>
  </Box>
);

export const withHeader = () => (
  <SpinnerBox>
    <Spinner />
    <Header>Loading ...</Header>
  </SpinnerBox>
);

export const withHeaderAndExtra = () => (
  <SpinnerBox>
    <Spinner />
    <Header>Loading ...</Header>
    <Extra>This is an extra content</Extra>
  </SpinnerBox>
);
