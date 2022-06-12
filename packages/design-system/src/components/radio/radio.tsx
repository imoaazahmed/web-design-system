import {
  Box,
  ControlBox,
  RadioProps,
  useRadioGroupContext,
  VisuallyHidden,
  chakra,
} from '@chakra-ui/react';
import radio from '../../theme/components/radio';
import React from 'react';

export const Radio = (props: RadioProps) => {
  const group = useRadioGroupContext();

  const {
    children,
    name,
    value,
    id,
    onChange,
    isDisabled,
    isChecked,
    defaultChecked,
    ...rest
  } = props;

  const checked = value && group?.value ? group.value == value : !!isChecked;
  const _onChange = group?.onChange || onChange;

  const radioStyles = radio.baseStyles;

  return (
    <Box as="label" display="flex" alignItems="center" {...rest}>
      <VisuallyHidden
        {...{
          type: 'radio',
          disabled: isDisabled,
          checked,
          defaultChecked,
          value,
          id,
          name,
          onChange: _onChange as any,
        }}
        as="input"
      />
      <ControlBox type="radio" {...radioStyles}>
        <Box
          border="2px solid"
          borderColor="white"
          w="1rem"
          h="1rem"
          bg="transparent"
          rounded="full"
        />
      </ControlBox>
      {children && (
        <chakra.span
          marginStart="xs"
          verticalAlign="center"
          userSelect="none"
          opacity={isDisabled ? 0.4 : 1}
        >
          {children}
        </chakra.span>
      )}
    </Box>
  );
};

export type {
  UseRadioGroupReturn,
  UseRadioProps,
  UseRadioReturn,
  RadioGroupContext,
  RadioGroupProps,
  UseRadioGroupProps,
} from '@chakra-ui/react';

export {
  useRadio,
  RadioGroup,
  useRadioGroup,
  useRadioGroupContext,
} from '@chakra-ui/react';

export type { RadioProps };
export default Radio;
