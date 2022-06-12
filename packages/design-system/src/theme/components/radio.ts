import { ControlBoxProps } from '@chakra-ui/react';
import { toRem } from '../../utils';

const baseStyles: ControlBoxProps = {
  width: toRem(20),
  height: toRem(20),
  borderRadius: 'md',
  border: '1px solid',
  borderColor: 'gray.300',
  bg: 'white',
  rounded: 'full',
  _hover: {
    borderColor: 'gray.400',
  },
  _focus: {
    boxShadow: 'outline',
  },
  _checked: { bg: 'blue.700', borderColor: 'blue.700' },
  _checkedAndHover: {
    bg: 'blue.800',
  },
  _disabled: {
    bg: 'gray.100',
    borderColor: 'gray.100',
    color: 'gray.400',
  },
};

const radio = {
  baseStyles,
};

export default radio;
