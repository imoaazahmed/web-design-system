import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogProps,
  BoxProps,
  Modal as ChakraModal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import React from 'react';
import { Button } from '../button';

export type ModalProps = ChakraModalProps & {
  contentProps?: BoxProps;
  isClosable?: boolean;
};

export const Modal = (props: ModalProps) => {
  const { children, isOpen, contentProps, isClosable, ...rest } = props;

  return (
    <ChakraModal motionPreset="scale" isCentered isOpen={isOpen} {...rest}>
      <ModalOverlay />
      <ModalContent {...contentProps}>
        {isClosable && <ModalCloseButton />}
        {children}
      </ModalContent>
    </ChakraModal>
  );
};

export type ConfirmProps = Omit<
  AlertDialogProps,
  'leastDestructiveRef' | 'children'
> & {
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
  contentProps?: BoxProps;
};

export const Confirm = (props: ConfirmProps) => {
  const {
    onConfirm,
    onClose,
    isOpen,
    contentProps,
    title = 'Are you sure?',
    children = "Are you sure? You can't undo this action afterwards.",
    ...rest
  } = props;

  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      isCentered
      leastDestructiveRef={ref}
      onClose={onClose}
      {...rest}
    >
      <AlertDialogOverlay />
      <AlertDialogContent {...contentProps}>
        {title && (
          <AlertDialogHeader fontSize="xl" fontWeight="bold">
            {title}
          </AlertDialogHeader>
        )}
        <AlertDialogBody>{children}</AlertDialogBody>
        <AlertDialogFooter>
          <Button variant="outline" ref={ref} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm} marginStart={3}>
            Confirm
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export type {
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalContentProps,
  ModalOverlayProps,
  UseModalProps,
  UseModalReturn,
} from '@chakra-ui/react';

export {
  ModalContextProvider,
  useModal,
  useModalContext,
  ModalFocusScope,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
