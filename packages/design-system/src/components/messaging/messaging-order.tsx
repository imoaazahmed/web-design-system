import { Box, BoxProps, Image, Stack, StackProps } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';
import { Button, ButtonProps } from '../button';
import React from 'react';
import { MessagingCardArrow, MessagingCardTime } from './messaging-text';

export const MessagingOrderCard = (props: BoxProps) => (
  <Box
    padding="2xs"
    paddingBottom="sm"
    borderRadius="lg"
    position="relative"
    boxShadow="sm"
    maxWidth="506px"
    minWidth="300px"
    {...props}
  />
);

export const MessagingOrderContent = (props: BoxProps) => (
  <Box padding="sm" borderRadius="6px" bg="white" {...props} />
);

export const MessagingOrderTitle = (props: TextProps) => (
  <Text fontWeight="bold" mb="md" {...props} />
);

export const MessagingOrderProductList = (props: BoxProps) => (
  <Stack role="group" align="start" spacing="md" mt="sm" mb="2px" {...props} />
);

export const MessagingOrderButton = (props: ButtonProps) => (
  <Button
    variant="link"
    mt="md"
    marginStart="sm"
    textAlign="start"
    fontWeight="bold"
    {...props}
  />
);

export const MessagingOrderViewMore = (props: ButtonProps) => (
  <Button
    variant="link"
    size="sm"
    fontWeight="normal"
    textAlign="start"
    mt="sm"
    {...props}
  />
);

interface OrderProductOptions {
  /**
   * The product's image `src`
   */
  image: string;
  /**
   * The product's title
   */
  title: string;
  /**
   * ♿️ Accessibility: The product image's alt description
   */
  imageAlt: string;
  quantity?: string;
}

export type MessagingOrderProductProps = OrderProductOptions & StackProps;

export const MessagingOrderProduct = (props: MessagingOrderProductProps) => {
  const { image, imageAlt, title, quantity, ...rest } = props;
  return (
    <Stack direction="row" spacing="sm" {...rest}>
      <Image
        boxSize="40px"
        bg="gray.100"
        border="0"
        sx={{ borderImageWidth: 0 }}
        flexShrink={0}
        fallbackSrc="https://via.placeholder.com/40x40.png?text=Loading..."
        objectFit="cover"
        borderRadius="md"
        src={image}
        alt={imageAlt}
      />
      <Box>
        <Text noOfLines={1} mb="2xs" maxWidth="73ch" children={title} />
        <Text fontWeight="bold" size="sm" children={quantity} />
      </Box>
    </Stack>
  );
};

interface OrderOptions {
  action?: React.ReactElement;
  children?: React.ReactNode;
  date: string;
  arrowPlacement?: 'start' | 'end';
  products: OrderProductOptions[];
  moreLabel?: React.ReactElement;
}

export type MessagingEnquiryProps = BoxProps & OrderOptions;

/**
 * Messaging Component
 *
 * Used to render a message order card in the Messaging Center.
 */
export const MessagingOrder = (props: MessagingEnquiryProps) => {
  const {
    id,
    title,
    date,
    products,
    arrowPlacement = 'start',
    children,
    moreLabel,
    bg = 'gray.100',
    ...rest
  } = props;

  return (
    <MessagingOrderCard bg={bg} {...rest}>
      <MessagingOrderContent>
        <MessagingOrderTitle>{title}</MessagingOrderTitle>
        {products && (
          <MessagingOrderProductList>
            {products.map(product => (
              <MessagingOrderProduct {...product} />
            ))}
          </MessagingOrderProductList>
        )}
        {moreLabel}
      </MessagingOrderContent>
      {children}
      <MessagingCardTime marginEnd="sm" children={date} />
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingOrderCard>
  );
};
