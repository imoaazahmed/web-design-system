import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertTitle,
  Box,
  BoxProps,
  chakra,
  CloseButton,
  LinkProps,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import {
  ErrorIcon,
  SuccessIcon,
  WarningIcon,
  WarningTriangleIcon,
} from './alert-icons';

export type AlertProps = BoxProps & {
  title?: string;
  variant?: 'error' | 'info' | 'success' | 'warning';
  onClose?: () => void;
  isClosable?: boolean;
};

const variants = {
  error: { color: 'red.50', icon: ErrorIcon },
  info: { color: 'blue.50', icon: WarningIcon },
  success: { color: 'green.50', icon: SuccessIcon },
  warning: { color: 'yellow.50', icon: WarningTriangleIcon },
};

export const AlertLink = (props: LinkProps) => (
  <chakra.a
    cursor="pointer"
    textDecor="underline"
    _hover={{ opacity: 0.8 }}
    {...props}
  />
);

export const Alert = (props: AlertProps) => {
  const {
    title,
    children,
    variant = 'info',
    onClose,
    isClosable,
    ...rest
  } = props;
  const { color, icon } = variants[variant];
  return (
    <ChakraAlert
      padding="md"
      bg={color}
      display="block"
      borderRadius="3px"
      fontSize="md"
      {...rest}
    >
      <Stack direction="row" spacing="sm" paddingEnd="md">
        <Box as={icon} w="18px" h="18px" flexShrink={0} mt="2px" />
        <Box>
          {title && <AlertTitle mb="xs">{title}</AlertTitle>}
          <AlertDescription>{children}</AlertDescription>
        </Box>
      </Stack>
      {isClosable && (
        <CloseButton
          position="absolute"
          insetEnd="sm"
          top="sm"
          onClick={onClose}
        />
      )}
    </ChakraAlert>
  );
};

export {
  AlertIcon,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react';

export type {
  AlertDescriptionProps,
  AlertDialogProps,
  AlertIconProps,
  AlertTitleProps,
} from '@chakra-ui/react';
