import React, { forwardRef } from 'react';
import {
  chakra,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';
import inputStyles from '../../theme/components/input';

type BaseInputProps = Omit<
  ChakraInputProps,
  'variant' | 'colorScheme' | 'size'
>;

const BaseInput = forwardRef(
  (props: BaseInputProps, ref: React.Ref<HTMLInputElement>) => {
    const styles = inputStyles.baseStyles;
    return <ChakraInput ref={ref} {...styles} {...props} />;
  }
);

//@ts-ignore This is needed for the new `InputGroup` to work
BaseInput.id = 'Input';

export interface InputProps extends BaseInputProps {
  /**
   * The addon on the left of the input.
   * it can be string or reactElement
   * @example 'http://', {<Icon name="phone" />}
   */
  leftAddon?: string | React.ReactElement;
  /**
   * The addon on the right of the input.
   * it can be string or reactElement
   * @example '.com', {<Icon name="phone" />}
   */
  rightAddon?: string | React.ReactElement;
  /**
   * The visual variant of the addons
   * if you will pass string to the addon just use "styled", and "unstyled" with something like icons
   *
   * @default "unstyled"
   */
  addonType?: 'styled' | 'unstyled';
}

const StyledAddon = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { leftAddon, rightAddon, ...rest } = props;

    return (
      <InputGroup size="md">
        {leftAddon && (
          <InputLeftAddon
            children={leftAddon}
            borderColor={props.isDisabled ? 'transparent' : 'gray.300'}
          />
        )}
        <BaseInput ref={ref} {...rest} />
        {rightAddon && (
          <InputRightAddon
            children={rightAddon}
            borderColor={props.isDisabled ? 'transparent' : 'gray.300'}
          />
        )}
      </InputGroup>
    );
  }
);

const UnstyledAddon = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { leftAddon, rightAddon, ...rest } = props;

    return (
      <InputGroup>
        {leftAddon && <InputLeftElement children={leftAddon} />}
        <BaseInput ref={ref} {...rest} />
        {rightAddon && <InputRightElement children={rightAddon} />}
      </InputGroup>
    );
  }
);

const InputWithAddon = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { addonType = 'unstyled', ...rest } = props;

    return addonType === 'styled' ? (
      <StyledAddon ref={ref} {...rest} />
    ) : (
      <UnstyledAddon ref={ref} {...rest} />
    );
  }
);

//todo: see if we can deprecate addons after new Chakra InputAddOn
export const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { leftAddon, rightAddon, ...rest } = props;

    return leftAddon || rightAddon ? (
      <InputWithAddon ref={ref} {...props} />
    ) : (
      <BaseInput ref={ref} {...rest} />
    );
  }
);

type InputControlProps = FormControlProps & {
  isInvalid?: boolean;
  errorMessage?: string;
};

export const InputControl = (props: InputControlProps) => {
  const { isInvalid = false, errorMessage = '', children, ...rest } = props;
  return (
    <FormControl isInvalid={isInvalid} {...rest}>
      {children}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

type InputLabelProps = Omit<FormLabelProps, 'children'> & {
  label: string;
  required?: boolean;
};

export const InputLabel = (props: InputLabelProps) => {
  const { label, required, ...rest } = props;
  return (
    <FormLabel
      fontSize="sm"
      fontWeight="normal"
      mb="xs"
      textAlign="start"
      {...rest}
    >
      {label}
      {required && <chakra.span marginStart="2px">*</chakra.span>}
    </FormLabel>
  );
};

export type {
  InputAddonProps,
  InputGroupProps,
  InputElementProps,
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputStepperProps,
  UseNumberInputProps,
  UseNumberInputReturn,
} from '@chakra-ui/react';

export {
  InputAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useNumberInput,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

export default Input;
