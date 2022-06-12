import React from 'react';
import {
  RadioCard,
  RadioCardGroup,
  RadioCardLabel,
  RadioCardContent,
} from './radio-card';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/RadioCard',
  decorators: [withContainer],
};

export const radioCard = () => (
  <RadioCardGroup defaultValue="one" onChange={console.log}>
    <RadioCard value="one">
      <RadioCardLabel>Label one</RadioCardLabel>
      <RadioCardContent paddingY="lg">Some component</RadioCardContent>
    </RadioCard>

    <RadioCard value="two">
      <RadioCardLabel>Label two</RadioCardLabel>
      <RadioCardContent>Some component</RadioCardContent>
    </RadioCard>

    <RadioCard value="three">
      <RadioCardLabel>Label two</RadioCardLabel>
      <RadioCardContent>Some component</RadioCardContent>
    </RadioCard>
  </RadioCardGroup>
);
