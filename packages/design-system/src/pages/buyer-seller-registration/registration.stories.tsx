import { ButtonGroup, Flex, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Text, Heading, Button, Modal } from '../../components';
import { CompanyBadge, DocumentBadge, TradeBadge } from './badge';

export default {
  title: 'CHAKRA/Buyer Seller Registration',
};

export const badgeOnly = () => (
  <Stack direction="row" spacing="80px">
    <CompanyBadge />
    <DocumentBadge />
    <TradeBadge />
  </Stack>
);

const Feature = ({ badge: Badge, children, ...rest }) => (
  <Flex align="center" direction="column" maxW="120px" {...rest}>
    <Badge />
    <Text marginTop="md" textAlign="center">
      {children}
    </Text>
  </Flex>
);

export const badgeWithText = () => (
  <Stack direction="row" spacing="80px">
    <Feature badge={CompanyBadge}> Business contact and address</Feature>
    <Feature badge={DocumentBadge}> Buyer identity verification</Feature>
    <Feature badge={TradeBadge}> Trade license, and VAT certficate</Feature>
  </Stack>
);

export const confirmationModal = () => (
  <Modal isOpen onClose={() => {}} size="xl" contentProps={{ padding: 'lg' }}>
    <Flex direction="column" align="center" textAlign="center">
      <Heading marginBottom="md" size="sm">
        Thank you for registration
      </Heading>
      <Text marginBottom="lg">
        Your account is awaiting approval. We will help you go live with your
        products on Tradeling and be in touch maximum by <b>2 working days</b>.
        Feel free to reach out in case of any queries.
      </Text>
      <ButtonGroup spacing="16px">
        <Button variant="outline">Contact us</Button>
        <Button>Back to homepage</Button>
      </ButtonGroup>
    </Flex>
  </Modal>
);
