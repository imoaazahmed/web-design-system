import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { PaymentMethod } from '.';
import { PaymentTypes } from './payment-method';

export default {
  title: 'CHAKRA/Payment Methods',
  decorators: [
    (story: Function) => (
      <Box maxW="400px" mx="auto" mt="40px">
        {story()}
      </Box>
    ),
  ],
};

const paymentMethods: PaymentTypes[] = ['visa', 'master', 'bank', 'escrow'];

export const PaymentMethods = () => (
  <Stack isInline flexWrap="wrap" spacing="12px">
    {paymentMethods.map(payment => (
      <PaymentMethod mb="sm" name={payment} />
    ))}
  </Stack>
);
