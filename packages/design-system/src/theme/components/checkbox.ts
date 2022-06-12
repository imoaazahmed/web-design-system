import { ControlBoxProps } from '@chakra-ui/react';
import { toRem } from '../../utils/style';

const baseStyles: ControlBoxProps = {
  width: toRem(20),
  height: toRem(20),
  border: '1px solid',
  borderColor: 'gray.200',
  transition: 'all 0.2s',
  bg: 'white',
  rounded: 'base',
  _hover: {
    borderColor: 'gray.400',
  },
  _focus: {
    boxShadow: 'outline',
  },
  _checked: { bg: 'blue.700', borderColor: 'blue.700' },
  _indeterminate: { bg: 'blue.700', borderColor: 'blue.700' },
  _checkedAndHover: {
    bg: 'blue.800',
  },
  _checkedAndDisabled: {
    bg: 'gray.100',
    borderColor: 'gray.100',
  },
  _disabled: {
    bg: 'gray.100',
    borderColor: 'gray.100',
    color: 'gray.400',
    userSelect: 'none',
  },
};

const checkbox = {
  baseStyles,
};

export default checkbox;
