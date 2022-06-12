import React, { forwardRef } from 'react';
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';
import inputStyles from '../../theme/components/input';

export type SelectProps = Omit<
  ChakraSelectProps,
  'variant' | 'colorScheme' | 'size'
>;

export const Select = forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
    const styles = inputStyles.baseStyles as any;
    return <ChakraSelect ref={ref} {...styles} py="0" {...props} />;
  }
);
