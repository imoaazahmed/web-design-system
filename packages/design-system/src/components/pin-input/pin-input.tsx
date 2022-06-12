import React from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import { usePinInput, UsePinInputProps } from './use-pin-input';
import { Input, InputProps } from '../input';

export type PinInputProps = Omit<StackProps, keyof UsePinInputProps> &
  UsePinInputProps & {
    noOfFields?: number;
    inputProps?: InputProps;
  };

export const PinInput = (props: PinInputProps) => {
  const { getInputProps, htmlProps } = usePinInput(props);

  const { noOfFields = 4, inputProps, ...rest } = htmlProps as any;
  const fieldsArr = new Array(noOfFields).fill(null);

  return (
    <Stack justify="center" direction="row" spacing="12px" {...rest}>
      {fieldsArr.map((_, index) => (
        <Input
          key={index}
          textAlign="center"
          type="text"
          width="50px"
          height="50px"
          paddingStart="0"
          paddingY="md !important"
          {...getInputProps({ index, ...inputProps })}
        />
      ))}
    </Stack>
  );
};
