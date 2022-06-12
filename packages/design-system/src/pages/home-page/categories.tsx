import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  Flex,
  FlexProps,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { Heading, Center } from '../../components';
import React from 'react';

export const Category = (props: FlexProps) => {
  return (
    <Flex
      minH="400px"
      maxW="1200px"
      mx="auto"
      direction={{ base: 'column', lg: 'row' }}
      {...props}
    />
  );
};

export interface CategoryFeatureCardProps extends BoxProps {
  data: {
    title: string;
    image: string;
  };
}

function CategoryFeatureCard(props: CategoryFeatureCardProps) {
  const {
    children,
    data: { title, image },
    ...rest
  } = props;

  return (
    <Box
      bg="green.200"
      padding="xl"
      flex="1"
      bgSize="cover"
      bgPos="center"
      bgImage={`url(${image})`}
      minHeight={{ base: '320px', lg: '200px' }}
      {...rest}
    >
      <Heading size="sm" color="white">
        {title}
      </Heading>
      {children && <Box mt="md">{children}</Box>}
    </Box>
  );
}

Category.FeatureCard = CategoryFeatureCard;

const CategoryItemGroup = (props: BoxProps) => (
  <SimpleGrid
    flex="2"
    columns={{ base: 2, lg: 3 }}
    spacing="4px"
    width="100%"
    minHeight="320px"
    {...props}
  />
);

Category.ItemGroup = CategoryItemGroup;

const CategoryItem = (props: BoxProps) => <Center pos="relative" {...props} />;

Category.Item = CategoryItem;

type CategoryItemImageProps = ImageProps & {
  /**
   * Removes dark overlay on card
   */
  isAboveOverlay?: boolean;
};

const CategoryItemImage = (props: CategoryItemImageProps) => (
  <Image
    objectFit="cover"
    width="100%"
    height="100%"
    pos="absolute"
    top="0"
    insetStart="0"
    zIndex={props.isAboveOverlay ? 2 : 0}
    {...props}
  />
);

Category.ItemImage = CategoryItemImage;

type CategoryItemTextProps = {
  title: string;
};

const CategoryItemText = (props: CategoryItemTextProps) => {
  const { title } = props;
  return (
    <>
      <Box
        pos="absolute"
        top="0"
        insetStart="0"
        insetEnd="0"
        bottom="0"
        bg="black"
        opacity={0.3}
        zIndex={1}
      ></Box>
      <Text
        as="h2"
        color="white"
        textAlign="center"
        fontSize={['md', '22px']}
        fontWeight="bold"
        zIndex={2}
      >
        {title}
      </Text>
    </>
  );
};

Category.ItemText = CategoryItemText;
