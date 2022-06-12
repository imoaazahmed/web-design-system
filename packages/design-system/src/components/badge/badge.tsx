import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export type BadgeProps = BoxProps & {
  /**
   * The visual variant of the badge
   *
   * @default "default"
   */
  variant?: 'important' | 'primary' | 'invert' | 'default';
};

export const badge = {
  baseStyle: {
    paddingX: 'sm',
    paddingY: '2px',
    fontSize: 'sm',
    letterSpacing: 'default',
    lineHeight: 'default',
    display: 'inline-block',
    borderRadius: 'full',
  },
  variants: {
    invert: {
      bg: 'gray.100',
      color: 'gray.800',
    },
    default: {
      bg: 'gray.800',
      color: 'gray.100',
    },
    primary: {
      bg: 'blue.600',
      color: 'white',
    },
    important: {
      bg: 'red.600',
      color: 'white',
    },
  },
};

/**
 * Informative Badge is used to convey the nature of a specific information.
 */
export const Badge = (props: BadgeProps) => {
  const { variant = 'default', ...rest } = props;
  const styleProps = { ...badge.baseStyle, ...badge.variants[variant] };
  return <Box as="span" {...styleProps} {...rest} />;
};
