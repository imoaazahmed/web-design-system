import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { badge as badgeStyle } from './badge';

export type StatusBadgeProps = BoxProps & {
  /**
   * The visual variant of the badge
   *
   * @default "default"
   */
  variant?: keyof typeof badge.variants;
};

const badge = {
  baseStyle: {
    ...badgeStyle.baseStyle,
    color: 'gray.800',
    borderRadius: 'base',
  },
  variants: {
    info: { bg: 'blue.100' },
    error: { bg: 'red.100' },
    success: { bg: 'green.100' },
    warning: { bg: 'orange.100' },
    default: { bg: 'gray.100' },
  },
};

/**
 * Status Badge is used to convey the status of a specific information.
 */
export const StatusBadge = (props: StatusBadgeProps) => {
  const { variant = 'default', ...rest } = props;
  const styleProps = { ...badge.baseStyle, ...badge.variants[variant] };
  return <Box as="span" {...styleProps} {...rest} />;
};
