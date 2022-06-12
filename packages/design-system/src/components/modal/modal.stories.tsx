import React from 'react';
import { Modal, Confirm, ModalBody } from './modal';
import { Heading, Text } from '..';
import {
  ButtonGroup,
  Flex,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '../button';

export default {
  title: 'CHAKRA/Modal',
};

export const basicModal = () => (
  <Modal isOpen onClose={() => {}} size="xl" contentProps={{ padding: 'lg' }}>
    <ModalBody>
      <Flex direction="column" align="center" textAlign="center">
        <Heading marginBottom="md" size="sm">
          Thank you for registration
        </Heading>
        <Text marginBottom="lg">
          Your account is awaiting approval. We will help you go live with your
          products on Tradeling and be in touch maximum by <b>2 working days</b>
          . Feel free to reach out in case of any queries.
        </Text>
        <ButtonGroup spacing="16px">
          <Button variant="outline">Contact us</Button>
          <Button>Back to homepage</Button>
        </ButtonGroup>
      </Flex>
    </ModalBody>
  </Modal>
);

export const WithCloseButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal isClosable isOpen={isOpen} onClose={onClose} size="xl">
        <ModalHeader>Thank you for registration</ModalHeader>

        <ModalBody alignItems="center" textAlign="center">
          <Text marginBottom="lg">
            Your account is awaiting approval. We will help you go live with
            your products on Tradeling and be in touch maximum by{' '}
            <b>2 working days</b>. Feel free to reach out in case of any
            queries.
          </Text>
          <ButtonGroup spacing="16px">
            <Button variant="outline">Contact us</Button>
            <Button>Back to homepage</Button>
          </ButtonGroup>
        </ModalBody>
      </Modal>
    </>
  );
};

export const WithButtonTrigger = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalBody alignItems="center" textAlign="center">
          <Heading marginBottom="md" size="sm">
            Thank you for registration
          </Heading>
          <Text marginBottom="lg">
            Your account is awaiting approval. We will help you go live with
            your products on Tradeling and be in touch maximum by{' '}
            <b>2 working days</b>. Feel free to reach out in case of any
            queries.
          </Text>
          <ButtonGroup spacing="16px">
            <Button variant="outline">Contact us</Button>
            <Button>Back to homepage</Button>
          </ButtonGroup>
        </ModalBody>
      </Modal>
    </>
  );
};

export const confirmModal = () => (
  <Confirm title="Are you sure?" isOpen onClose={() => {}}>
    This product will no longer be visible to buyers once delete
  </Confirm>
);

export const scrollBehaviorFix = () => (
  <Modal
    isOpen
    onClose={() => {}}
    contentProps={{ rounded: 'md', py: 3, maxHeight: '100%', height: 'auto' }}
    scrollBehavior={'inside'}
  >
    <ModalBody>dsfknsflsdnflkn gfkfgdbgdfjkgbdfjkgbfdkjgfbdj</ModalBody>
  </Modal>
);
