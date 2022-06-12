import React from 'react';
import { BoxProps, Box, Image, ImageProps, Stack } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';
import { MessagingCardTime, MessagingCardArrow } from './messaging-text';

export const MessagingEnquiryCard = (props: BoxProps) => (
  <Box
    padding="2xs"
    paddingBottom="sm"
    borderRadius="lg"
    position="relative"
    boxShadow="sm"
    maxWidth="520px"
    minWidth="300px"
    {...props}
  />
);

export const MessagingEnquiryContent = (props: BoxProps) => (
  <Box padding="sm" borderRadius="6px" bg="white" {...props} />
);

export const MessagingEnquirySummary = (props: BoxProps) => (
  <Stack
    role="group"
    direction="row"
    spacing="sm"
    marginBottom="sm"
    {...props}
  />
);

export const MessagingEnquiryImage = (props: ImageProps) => (
  <Image
    boxSize="60px"
    bg="blue.50"
    border="0"
    sx={{ borderImageWidth: 0 }}
    flexShrink={0}
    objectFit="cover"
    borderRadius="md"
    {...props}
  />
);

export const MessageEnquiryId = (props: TextProps) => (
  <Text size="md" fontWeight="bold" {...props} />
);

export const MessageEnquiryTitle = (props: TextProps) => (
  <Text
    color="blue.600"
    noOfLines={1}
    marginY="3px"
    maxWidth="73ch"
    {...props}
  />
);

export const MessageEnquiryQty = (props: TextProps) => (
  <Text size="sm" color="gray.800" lineHeight="tall" {...props} />
);

export const MessagingEnquiryText = (props: TextProps) => <Text {...props} />;

export const MessageEnquiryDetails = (props: BoxProps) => (
  <Box role="group" {...props} />
);

interface EnquiryOptions {
  /**
   * The product's image `src`
   */
  image: string;
  /**
   * The enquiry id.
   *
   * Note 🚨: For translation purposes, this should be the
   * full string including the word "Enquiry ID"
   *
   * @example
   * id = "Enquiry ID 27364638645"
   */
  id: string;
  /**
   * The enquiry title
   */
  title: React.ReactElement;
  /**
   * ♿️ Accessibility: The product image's alt description
   */
  imageAlt: string;
  /**
   * The enquiry quanity
   *
   * Note 🚨: For translation purposes, this should be the
   * full string including the word "Quantity"
   *
   * @example
   * id = "Quantity 500 Piece"
   */
  quantity?: string;
  /**
   * The enquiry message sent by customer
   */
  message?: string;
  /**
   * The date of enquiry
   */
  date: string;
  /**
   * The arrow tip placement
   */
  arrowPlacement?: 'start' | 'end';
  /**
   * The list price for the product
   */
  price?: string;
  /**
   * To render custom items below the enquiry title
   */
  details?: React.ReactNode;
  children?: React.ReactNode;
}

export type MessagingEnquiryProps = Omit<BoxProps, 'title'> & EnquiryOptions;

/**
 * Messaging Component
 *
 * Used to render an enquiry card in the Messaging Center.
 */
export const MessagingEnquiry = (props: MessagingEnquiryProps) => {
  const {
    image,
    id,
    title,
    imageAlt,
    quantity,
    message,
    date,
    arrowPlacement = 'start',
    children,
    price,
    details,
    bg = 'gray.100',
    ...rest
  } = props;

  return (
    <MessagingEnquiryCard bg={bg} {...rest}>
      <MessagingEnquiryContent>
        <MessagingEnquirySummary alignItems="center">
          <MessagingEnquiryImage
            src={image}
            alt={imageAlt}
            fallbackSrc="https://via.placeholder.com/60x60.png?text=Loading..."
          />
          <MessageEnquiryDetails>
            <MessageEnquiryId children={id} />
            <MessageEnquiryTitle children={title} />
            {details}
            {price && <MessageEnquiryQty children={price} />}
            {quantity && <MessageEnquiryQty children={quantity} />}
          </MessageEnquiryDetails>
        </MessagingEnquirySummary>
        {children}
        {message && <MessagingEnquiryText children={message} />}
      </MessagingEnquiryContent>
      <MessagingCardTime marginEnd="sm" mt="2" children={date} />
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingEnquiryCard>
  );
};
