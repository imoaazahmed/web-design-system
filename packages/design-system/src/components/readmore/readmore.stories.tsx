import React from 'react';
import { Readmore } from './readmore';
import { Stack } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Readmore',
};

export const BasicReadmore = () => (
  <Stack margin="40px auto 0px auto" maxW="150px">
    <Readmore isCollapsed={true} noOfLines={2}>
      <Readmore.Text>
        long long long long long long long long long long long long long long
        long long long long long long long long long long long long long long
        long long long long long long long long text
      </Readmore.Text>
      <Readmore.Button moreText="Read more" lessText="Read less" />
    </Readmore>

    <Readmore noOfLines={2}>
      <Readmore.Text>long long long long long long text</Readmore.Text>
      <Readmore.Button moreText="Read more" lessText="Read less" />
    </Readmore>
  </Stack>
);
