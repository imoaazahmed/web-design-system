import React from 'react';
import { Stack } from '@chakra-ui/react';
import { withContainer } from '../story-container';
import { Description, DescriptionLabel, DescriptionValue } from './description';

export default {
  title: 'CHAKRA/Description',
  decorators: [withContainer],
};
export const DescriptionBox = () => {
  return (
    <Stack spacing={'24px'}>
      <Description variant={'sm'}>
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
      <Description>
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
      <Description variant={'lg'}>
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
    </Stack>
  );
};

export const InlineDescriptionBox = () => {
  return (
    <Stack spacing={'24px'}>
      <Description isInline variant="sm">
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
      <Description isInline>
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
      <Description isInline variant="lg">
        <DescriptionLabel>First name</DescriptionLabel>
        <DescriptionValue>Mahmoud</DescriptionValue>
      </Description>
    </Stack>
  );
};
