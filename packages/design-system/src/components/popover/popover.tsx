import React from 'react';
import { Popover as ChakraPopover, PopoverProps } from '@chakra-ui/react';
import { useIsRTL } from '../theme-provider';

export const Popover = (props: PopoverProps) => {
  const { placement = 'bottom' } = props;
  const isRtl = useIsRTL();

  return <ChakraPopover {...props} placement={placement} />;
};

export type {
  PopoverArrowProps,
  PopoverBodyProps,
  PopoverProps,
  PopoverContentProps,
  PopoverCloseButtonProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  UsePopoverProps as ChakraUsePopoverProps,
  UsePopoverReturn,
} from '@chakra-ui/react';

export {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  usePopover as ChakraPopover,
} from '@chakra-ui/react';
