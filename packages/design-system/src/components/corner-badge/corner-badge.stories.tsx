import React from 'react';
import { CornerBadge, CornerBadgeLabel } from '.';
import { Stack } from '@chakra-ui/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withContainer } from '../story-container';

export default {
  title: 'CHAKRA/Corner Badge',
  decorators: [withContainer, withKnobs],
};

export const cornerBadge = () => (
  <Stack marginBottom="40px">
    <CornerBadge>
      <CornerBadgeLabel>Beta</CornerBadgeLabel>
    </CornerBadge>

    <CornerBadge
      placement="end"
      size="75px"
      badgeColor="green.700"
      boxShadow="5px 6px 8px #888888"
    >
      <CornerBadgeLabel size="sm" mb="2px">
        Beta
      </CornerBadgeLabel>
    </CornerBadge>
  </Stack>
);
