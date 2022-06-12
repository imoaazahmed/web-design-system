import React from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerContent as ChakraDrawerContent,
  DrawerProps,
  DrawerContentProps,
} from '@chakra-ui/react';
import { useIsRTL } from '../theme-provider';

const getNewPlacement = (
  placement: DrawerProps['placement'],
  isRtl: boolean
) => {
  if (!isRtl) return placement;
  if (placement === 'right') return 'left';
  if (placement === 'left') return 'right';

  return placement;
};

export const DrawerContent = (props: DrawerContentProps) => {
  const isRtl = useIsRTL();

  return <ChakraDrawerContent {...props} dir={isRtl ? 'rtl' : 'ltr'} />;
};

export const Drawer = (props: DrawerProps) => {
  const { placement = 'right' } = props;
  const isRtl = useIsRTL();
  const newPlacement = getNewPlacement(placement, isRtl);

  return <ChakraDrawer {...props} placement={newPlacement} />;
};

export type { DrawerProps, DrawerContentProps } from '@chakra-ui/react';
export {
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
