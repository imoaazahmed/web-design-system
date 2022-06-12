import { InputProps } from '@chakra-ui/react';

const baseStyles: InputProps = {
  fontSize: 'md',
  lineHeight: 'default',
  letterSpacing: 'default',
  paddingStart: 'sm',
  paddingY: 'sm',
  border: '1px solid',
  borderColor: 'gray.300',
  height: '40px',
  borderRadius: '4px',
  _hover: {
    borderColor: 'gray.500',
  },
  _focus: {
    borderColor: 'gray.500',
    shadow: 'outline',
  },
  _placeholder: {
    color: 'gray.300',
  },
  _disabled: {
    bg: 'gray.50',
    borderColor: 'gray.50',
    color: 'gray.400',
    cursor: 'not-allowed',
  },
  _invalid: {
    borderColor: 'red.500',
  },
};

export const input = {
  baseStyles,
};

export default input;
