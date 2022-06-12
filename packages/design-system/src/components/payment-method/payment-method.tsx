import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';
import { Visa, MasterCard, Escrow, BankTransfer } from '../../icons';

export type PaymentTypes = 'visa' | 'master' | 'bank' | 'escrow';

const paymentTypes = {
  visa: 'Visa',
  master: 'Master Card',
  bank: 'Bank Transfer',
  escrow: 'Tradeling Escrow Services',
};

type PaymentMethodProps = FlexProps & {
  name: PaymentTypes;
  labelProps?: TextProps;
};

const defaultFlexStyles: FlexProps = {
  padding: 'xs',
  height: '30px',
  borderRadius: '3px',
  border: 'solid 1px',
  borderColor: 'gray.200',
  backgroundColor: 'white',
  justify: 'center',
  align: 'center',
};

const getPaymentIcon = (name: string) => {
  switch (name) {
    case 'visa':
      return <Visa />;
    case 'master':
      return <MasterCard />;
    case 'bank':
      return <BankTransfer />;
    case 'escrow':
      return <Escrow />;
  }
};

const paymentWithLabel = ['escrow', 'bank'];

export const PaymentMethod = (props: PaymentMethodProps) => {
  const { name, labelProps = {}, ...rest } = props;
  const showLabel = paymentWithLabel.includes(name);

  return (
    <Flex {...defaultFlexStyles} {...rest}>
      <Flex h="100%" align="center" justify="center">
        {getPaymentIcon(name)}
      </Flex>
      {showLabel && (
        <Text size="sm" fontWeight="bold" marginStart="xs" {...labelProps}>
          {paymentTypes[name]}
        </Text>
      )}
    </Flex>
  );
};
