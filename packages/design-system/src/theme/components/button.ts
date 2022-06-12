import { BoxProps } from '@chakra-ui/react';

const sizes = {
  sm: {
    minHeight: '30px',
    fontSize: 'sm',
    px: 'sm',
  },
  md: {
    minHeight: '40px',
    fontSize: 'sm',
    px: 'md',
  },
  lg: {
    minHeight: '50px',
    fontSize: 'md',
    px: 'lg',
  },
};

export type Variant = keyof typeof variants;
export type Size = keyof typeof sizes;

const defaultVariant: BoxProps = {
  bg: 'gray.100',
  color: 'gray.800',
  _hover: { bg: 'gray.200' },
  _active: { bg: 'gray.200' },
  _disabled: { bg: 'gray.200', color: 'white', cursor: 'not-allowed' },
};

const primary: BoxProps = {
  bg: 'blue.600',
  _hover: { bg: 'blue.700' },
  _active: { bg: 'blue.600' },
  _disabled: {
    bg: 'gray.200',
    _hover: { bg: 'gray.200', cursor: 'not-allowed' },
  },
};

const primaryNext: BoxProps = {
  bg: 'orange.500',
  _hover: { bg: 'orange.600' },
  _active: { bg: 'orange.700' },
  _disabled: {
    bg: 'gray.200',
    _hover: { bg: 'gray.200', cursor: 'not-allowed' },
  },
};

const secondaryNext: BoxProps = {
  bg: 'blue.700',
  _hover: { bg: 'blue.800' },
  _active: { bg: 'blue.900' },
  _disabled: {
    bg: 'gray.200',
    _hover: { bg: 'gray.200', cursor: 'not-allowed' },
  },
};

const danger: BoxProps = {
  bg: 'red.500',
  _hover: { bg: 'red.600' },
  _active: { bg: 'red.700' },
  _disabled: {
    bg: 'gray.200',
    _hover: { bg: 'gray.200', cursor: 'not-allowed' },
  },
};

const warning: BoxProps = {
  bg: 'yellow.300',
  color: 'black',
  _hover: { bg: 'yellow.400' },
  _active: { bg: 'yellow.500' },
  _disabled: {
    bg: 'gray.200',
    color: 'white',
    _hover: { bg: 'gray.200', cursor: 'not-allowed' },
  },
};

const outline: BoxProps = {
  bg: 'white',
  color: 'blue.700',
  border: '1px solid',
  borderColor: 'blue.700',
  _hover: { bg: 'gray.100' },
  _active: { bg: 'gray.200' },
  _disabled: {
    bg: 'white',
    _hover: { bg: 'white', cursor: 'not-allowed' },
    borderColor: 'gray.200',
    color: 'gray.200',
  },
};

const ghost: BoxProps = {
  bg: 'transparent',
  color: 'blue.700',
  _hover: {
    bg: 'gray.100',
  },
  _active: {
    bg: 'gray.200',
  },
  _disabled: {
    bg: 'transparent',
    _hover: { bg: 'transparent', cursor: 'not-allowed' },
    color: 'gray.200',
  },
};

const link: BoxProps = {
  color: 'blue.700',
  fontWeight: 'bold',
  _hover: { textDecoration: 'underline', bg: 'transparent' },
  _disabled: {
    _hover: { textDecoration: 'none' },
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  _active: { color: 'blue.700' },
  px: '2px',
  minHeight: 'unset',
};

const underline: BoxProps = {
  color: 'blue.700',
  fontWeight: 'bold',
  _active: { color: 'blue.700' },
  px: 0,
  minHeight: 'unset',
  position: 'relative',
  lineHeight: 1.67,
  border: 'none',
  transition: 'border-width 0.6s linear',
  css: {
    ':hover::after': {
      right: '100%',
    },
  },
  _hover: { bg: 'transparent' },
  _after: {
    borderTop: '2px solid',
    borderColor: 'blue.700',
    content: 'close-quote',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    transition: 'right .3s ease',
  },
};

const underlineSecondary: BoxProps = {
  ...underline,
  fontWeight: '500',
  textTransform: 'capitalize',
  _hover: { bg: 'transparent' },
  _after: {
    ...(underline._after as any),
    borderTop: '1px solid',
  },
};

const baseStyles: BoxProps = {
  borderRadius: '3px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'white',
  lineHeight: 'normal',
  height: 'auto',
  _focus: { shadow: 'outline' },
};

const variants = {
  primary,
  danger,
  outline,
  ghost,
  warning,
  link,
  underline,
  'underline-secondary': underlineSecondary,
  'primary-next': primaryNext,
  'secondary-next': secondaryNext,
  default: defaultVariant,
};

export function getButtonStyles(variant: Variant, size: Size) {
  const styles = {
    ...(sizes[size] as any),
    ...baseStyles,
    ...variants[variant],
  };
  return styles;
}

export const button = {
  baseStyles,
  variants,
  sizes,
};
