import { Stack } from '@chakra-ui/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { withContainer } from '../story-container';
import { Steps } from './steps';

export default {
  title: 'CHAKRA/Progress Steps',
  decorators: [withContainer, withKnobs],
};

export const step = () => (
  <Stack spacing="40px">
    <Steps.Step index={1} variant="circle" status="complete">
      Business type
    </Steps.Step>
    <Steps.Step labelAlign="center" index={1} variant="circle">
      Business type
    </Steps.Step>
    <Steps.Step isLast labelAlign="end" index={1} variant="circle">
      Business type
    </Steps.Step>
  </Stack>
);

export const steps = () => (
  <Steps current={number('current', 1)}>
    <Steps.Step>Business type</Steps.Step>
    <Steps.Step>Business information</Steps.Step>
    <Steps.Step>Identity verification</Steps.Step>
    <Steps.Step>Business documents</Steps.Step>
  </Steps>
);

export const simpleSteps = () => (
  <Stack spacing="40px">
    <Steps labelPlacement="top" variant="circle" current={number('current', 1)}>
      <Steps.Step>Shopping</Steps.Step>
      <Steps.Step>Payment</Steps.Step>
      <Steps.Step>Review & Pay</Steps.Step>
    </Steps>
    <Steps
      dividerBg="#000"
      dividerActiveBg="green.500"
      labelPlacement="top"
      variant="circle"
      current={number('current', 1)}
    >
      <Steps.Step>Shopping</Steps.Step>
      <Steps.Step>Payment</Steps.Step>
      <Steps.Step>Review & Pay</Steps.Step>
    </Steps>
  </Stack>
);
