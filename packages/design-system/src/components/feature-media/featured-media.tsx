import { Box, Flex, FlexProps, Text, BoxProps } from '@chakra-ui/react';
import React from 'react';

export interface FeatureMediaProps extends FlexProps {
  spacing?: FlexProps['w'];
  media?: React.ReactElement;
}

export const FeatureMediaTitle = (props: BoxProps) => (
  <Text fontSize="lg" color="black" fontWeight="bold" {...props} />
);

export const FeaturedMediaText = (props: BoxProps) => (
  <Text fontSize="md" color="dark.50" mt="xs" {...props} />
);

export const FeatureMedia = (props: FeatureMediaProps) => {
  const { children, spacing = 5, media, ...flexProps } = props;
  return (
    <Flex align="flex-start" {...flexProps}>
      {media}
      <Box flexShrink={0} w={spacing} h={spacing} />
      <Box>{children}</Box>
    </Flex>
  );
};

FeatureMedia.Title = FeatureMediaTitle;
FeatureMedia.Text = FeaturedMediaText;

export default FeatureMedia;
