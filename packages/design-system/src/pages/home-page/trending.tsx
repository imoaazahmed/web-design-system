import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  SimpleGrid,
  Text,
  SimpleGridProps,
} from '@chakra-ui/react';
import React from 'react';

export const Trending = (props: BoxProps) => {
  return (
    <Box
      padding={['0', 'lg']}
      borderRadius="md"
      borderWidth={['0', '1px']}
      borderColor="gray.200"
      {...props}
    />
  );
};

const TrendingTitle = (props: BoxProps) => (
  <Text as="h3" fontWeight="bold" fontSize="xl" px={['md', '0']} {...props} />
);

Trending.Title = TrendingTitle;

const TrendingText = (props: BoxProps) => (
  <Text
    fontSize={['sm', 'md']}
    marginTop="xs"
    color="gray.600"
    px={['md', '0']}
    {...props}
  />
);

Trending.Text = TrendingText;

const TrendingItemGroup = (props: SimpleGridProps) => (
  <SimpleGrid spacing={['1px', 6]} columns={3} mt={4} {...props} />
);

Trending.ItemGroup = TrendingItemGroup;

const TrendingItem = (props: BoxProps) => <Box textAlign="center" {...props} />;

Trending.Item = TrendingItem;

const TrendingItemImage = (props: ImageProps) => (
  <Image
    ignoreFallback
    objectFit="cover"
    height={['106px', '160px']}
    width="100%"
    {...props}
  />
);

Trending.ItemImage = TrendingItemImage;

const TrendingItemTitle = (props: BoxProps) => (
  <Text
    fontSize="md"
    mt={[3, 4]}
    fontWeight={['normal', 'medium']}
    {...props}
  />
);

Trending.ItemTitle = TrendingItemTitle;
