import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Card, CardTitle, CardContent, CardDivider } from '.';

export default {
  title: 'CHAKRA/Card',
  decorators: [
    (story: any) => (
      <Box maxW="400px" mx="auto" mt="40px">
        {story()}
      </Box>
    ),
  ],
};

export const Cards = () => (
  <Stack spacing="20px">
    <Card>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </CardContent>
    </Card>
    <Card>
      <CardTitle>Title for the card here</CardTitle>
      <CardDivider my="20px" />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </CardContent>
    </Card>
  </Stack>
);
