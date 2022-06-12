import React from 'react';
import { Heading, Text } from './typography';
import { Stack } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Typography',
};

export const Headings = () => (
  <Stack spacing="24px">
    <Heading size="lg">Display Large — 48 Inter - B</Heading>
    <Heading>Display Medium — 30 Inter - B</Heading>
    <Heading size="sm">Display Small — 22 Inter B</Heading>
  </Stack>
);

Headings.story = {
  name: 'Heading',
};

export const Texts = () => (
  <Stack spacing="24px">
    <Text size="lg">Medium Paragraph — 16 Inter B</Text>

    <Text>Paragraph — 14 Inter R</Text>
    <Text fontWeight="bold">Paragraph — 14 Inter B</Text>

    <Text size="sm">Small Paragraph — 12 Inter R</Text>
    <Text size="sm" fontWeight="bold">
      Small Paragraph — 12 Inter B
    </Text>

    <Text size="xs" fontWeight="bold">
      Caption — 10 Inter B
    </Text>
    <Text size="xs">Caption — 10 Inter B</Text>
  </Stack>
);

export const NoOfLinesBug = () => (
  <Text noOfLines={2} maxW="40px">
    dsfkslnfdsknfklsnddldsfkslnfdsknfklsnddldsfkslnf
    dsknfklsnddldsfkslnfdsknfklsnddldsfkslnfdsknfklsnddl
    dsknfklsnddldsfkslnfdsknfklsnddldsfkslnfdsknfklsnddl
  </Text>
);

Texts.story = {
  name: 'Text',
};
