import React, { forwardRef } from 'react';
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react';
import inputStyles from '../../theme/components/input';

export type TextareaProps = Omit<
  ChakraTextareaProps,
  'variant' | 'colorScheme'
>;

export const Textarea = forwardRef(
  (props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    const styles = inputStyles.baseStyles as TextareaProps;
    return <ChakraTextarea ref={ref} {...styles} {...props} />;
  }
);
