import React, { useState } from 'react';
import { withContainer } from '../story-container';
import { withKnobs } from '@storybook/addon-knobs';
import { StarGroup, Rate, StarSize } from './star-group';
import { Card, CardTitle, CardContent } from '../card';
import { Box, SpaceProps } from '@chakra-ui/react';
import { Heading } from '../typography';

export default {
  title: 'CHAKRA/StarsGroup',
  decorators: [withContainer, withKnobs],
};

type StarGroupComponentType = {
  size?: StarSize;
  isDisabled?: boolean;
  rate: Rate;
  description: string;
  spacing?: SpaceProps['marginEnd'];
  onClick?: (r: Rate) => void;
};

const StarGroupComponent = ({
  size = 'md',
  isDisabled = false,
  rate,
  description,
  spacing = 'xs',
  onClick,
}: StarGroupComponentType) => {
  return (
    <Card mb={'md'}>
      <CardTitle>{description}</CardTitle>
      <CardContent>
        <StarGroup
          onClick={onClick}
          rate={rate}
          isDisabled={isDisabled}
          size={size}
          spacing={spacing}
        />
      </CardContent>
    </Card>
  );
};

export const Sizes = () => {
  const [selectedRate, setSelectedRate] = useState<Rate>(2);
  return (
    <Box>
      <Heading mb={'xs'}>Size</Heading>
      <StarGroupComponent size={'sm'} rate={3} description={"size={'sm'}"} />
      <StarGroupComponent rate={3} description={"size={'md'}"} />
      <Heading mb={'xs'}>Spacing</Heading>
      <StarGroupComponent
        rate={4}
        spacing={'sm'}
        description={"spacing={'xs'}"}
      />
      <StarGroupComponent
        rate={4}
        spacing={'md'}
        description={"spacing={'md'}"}
      />
      <StarGroupComponent
        rate={4}
        spacing={'lg'}
        description={"spacing={'lg'}"}
      />
      <StarGroupComponent
        rate={4}
        spacing={'xl'}
        description={"spacing={'xl'}"}
      />
      <Heading mb={'xs'}>Disabled</Heading>
      <StarGroupComponent
        rate={2}
        isDisabled
        description={'isDisabled={true}'}
      />
      <Heading mb={'xs'}>Initial Data</Heading>
      <StarGroupComponent rate={1} description={'rate={1}'} />
      <Heading mb={'xs'}>Get rate value</Heading>
      <StarGroupComponent
        rate={selectedRate}
        description={`Rate: ${selectedRate}`}
        onClick={rate => setSelectedRate(rate)}
      />
    </Box>
  );
};
