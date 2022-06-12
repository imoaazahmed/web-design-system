import React from 'react';
import { Box, BoxProps, Image, ImageProps } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';
import { MessagingCardTime, MessagingCardArrow } from './messaging-text';

export const MessagingProductCard = (props: BoxProps) => (
  <Box
    width="354px"
    borderRadius="8px"
    boxShadow="sm"
    position="relative"
    {...props}
  />
);

export const MessagingProductImage = (props: ImageProps) => (
  <Box px="4px" pt="4px">
    <Image
      height="277px"
      width="100%"
      objectFit="cover"
      borderRadius="6px"
      {...props}
    />
  </Box>
);

export const MessagingProductTitle = (props: TextProps) => (
  <Text as="h3" size="md" fontWeight="bold" noOfLines={2} {...props} />
);

export const MessagingProductPrice = (props: TextProps) => (
  <Text mt="4px" size="sm" color="gray.800" {...props} />
);

export const MessagingProductContent = (props: BoxProps) => (
  <Box padding="sm" {...props} />
);

interface ProductOptions {
  /**
   * The product's image `src`
   */
  image: string;
  /**
   * The product's name or title
   */
  title: string;
  /**
   * The product's price
   *
   * Note 🚨: For translation purposes, this should be the
   * full string including the currency, country and unit
   *
   * @example
   * id = "US $6.50-8.50 / Gram"
   */
  price: string;
  /**
   * The product's date stamp
   */
  date: string;
  /**
   * The arrow tip's placement
   */
  arrowPlacement?: 'start' | 'end';
}

export type MessagingProductProps = BoxProps & ProductOptions;

/**
 * Messaging Component
 *
 * Used to render an product card in the Messaging Center.
 */
export const MessagingProduct = (props: MessagingProductProps) => {
  const {
    image,
    title,
    price,
    date,
    arrowPlacement = 'start',
    bg = 'gray.100',
    ...rest
  } = props;
  return (
    <MessagingProductCard bg={bg} {...rest}>
      <MessagingProductImage
        src={image}
        alt={title}
        fallbackSrc="https://via.placeholder.com/340x277.png?text=Loading..."
      />
      <MessagingProductContent>
        <MessagingProductTitle children={title} />
        <MessagingProductPrice children={price} />
        <MessagingCardTime children={date} />
      </MessagingProductContent>
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingProductCard>
  );
};
