import { Box, Flex, Stack } from '@chakra-ui/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '../button';
import { withContainer } from '../story-container';
import { Alert, AlertLink } from './alert';
import { BaseAlert } from './base-alert';

export default {
  title: 'CHAKRA/Alert',
  decorators: [withContainer, withKnobs],
};

export const WithTextLink = () => (
  <Stack spacing="24px">
    {['info', 'error', 'success', 'warning'].map((variant: any) => (
      <Alert variant={variant}>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on <AlertLink>Tradeling </AlertLink>
      </Alert>
    ))}
  </Stack>
);

export const WithNoLink = () => (
  <Stack spacing="24px">
    {['info', 'error', 'success', 'warning'].map((variant: any) => (
      <Alert variant={variant}>
        You’re account has been activated, a team member will get in touch to
        help you go live
      </Alert>
    ))}
  </Stack>
);

export const Basic = () => (
  <Stack spacing="24px">
    {['info', 'error', 'success', 'warning'].map((variant: any) => (
      <Alert
        variant={variant}
        title={text('title', 'Seller account is awaiting approval')}
        isClosable={boolean('isClosable', false)}
      >
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </Alert>
    ))}
  </Stack>
);

export const withCloseButton = () => (
  <Alert
    variant={'info'}
    title={'Seller account is awaiting approval'}
    isClosable={true}
    onClose={() => {
      console.log('close');
    }}
  >
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
    of any queries at xxxx@tradeling.com
  </Alert>
);

export const baseAlert = () => (
  <Stack spacing="20px" marginBottom="40px">
    <BaseAlert variant="solid" type="info">
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </BaseAlert>

    <BaseAlert variant="solid" type="info">
      <Flex alignItems="center" justify="space-between">
        <Box>
          <BaseAlert.Title>This is the alert title</BaseAlert.Title>
          <BaseAlert.Description>
            You’re account has been activated, a team member will get in touch
            to help you go live with your products on Tradeling. Feel free to
            reach out in case of any queries at xxxx@tradeling.com
          </BaseAlert.Description>
        </Box>
        <Box>
          <Button>Complete details</Button>
        </Box>
      </Flex>
    </BaseAlert>

    <BaseAlert variant="outline" type="info">
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </BaseAlert>

    <BaseAlert variant="outline" type="error">
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </BaseAlert>

    <BaseAlert variant="outline" type="success">
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </BaseAlert>

    <BaseAlert variant="outline" type="warning">
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </BaseAlert>
  </Stack>
);
