import React from 'react';
import { Badge, StatusBadge } from '.';
import { Stack } from '@chakra-ui/react';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Badge',
  decorators: [withContainer],
};

export const badge = () => (
  <Stack direction="row">
    <Badge>Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="invert">Invert</Badge>
    <Badge variant="important">Important</Badge>
  </Stack>
);

export const statusBadge = () => (
  <Stack direction="row">
    <StatusBadge>Default</StatusBadge>
    <StatusBadge variant="error">Error</StatusBadge>
    <StatusBadge variant="info">Info</StatusBadge>
    <StatusBadge variant="success">Success</StatusBadge>
    <StatusBadge variant="warning">Warning</StatusBadge>
  </Stack>
);
