import { Box, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import { withContainer, WithGrayBg } from '../story-container';
import { Text } from '../typography';
import {
  MessagingAttachment,
  MessagingAttachmentButton,
  MessagingFileAttachment,
} from './messaging-attachment';
import { MessagingContact } from './messaging-contact';
import { MessagingEnquiry } from './messaging-enquiry';
import {
  MessagingOrder,
  MessagingOrderButton,
  MessagingOrderViewMore,
} from './messaging-order';
import { MessagingProduct } from './messaging-product';
import { MessagingText } from './messaging-text';

export default {
  title: 'CHAKRA/Messaging Center',
  decorators: [withContainer],
};

export const messagingCard = () => (
  <WithGrayBg>
    <Stack align="flex-start" spacing="40px">
      <MessagingText date="17:00PM">
        This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces
      </MessagingText>

      <MessagingText
        arrowPlacement="end"
        bg="blue.50"
        marginStart="auto"
        date="17:00PM"
      >
        Anyone know how to measure
      </MessagingText>
    </Stack>
  </WithGrayBg>
);

const src =
  'https://images.unsplash.com/photo-1502234665511-5745ea0a6a29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';

export const productCard = () => (
  <WithGrayBg>
    <Stack align="flex-start" spacing="40px">
      <MessagingProduct
        image={src}
        title="Premium Grade AAA Grade, Fresh Style Citrus Oranges Premium Grade AAA
      2222"
        price="US $ 6.5 - 8.8 / Gram"
        date="17:00PM"
        arrowPlacement="end"
        marginStart="auto"
      />

      <MessagingText bg="gray.50" marginEnd="auto" date="17:02PM">
        Those tomatoes look really fresh! I'm ordering them now
      </MessagingText>
    </Stack>
  </WithGrayBg>
);

export const messageEnquiryCard = () => (
  <WithGrayBg>
    <MessagingEnquiry
      image={src}
      id="Enquiry ID 27364638645"
      imageAlt="Premium Grade AAA Grade, Fresh Style Citrus red orange"
      title={
        <Link href="www.google.com" _focus={{ boxShadow: 'outline' }}>
          Premium Grade AAA Grade, Fresh Style Citrus red orange
        </Link>
      }
      quantity="Quantity 500 Piece"
      date="17:00PM"
      price="Listed price: 100 AED / carton"
    >
      <Stack spacing="1" mt="lg" mb="sm">
        <Text fontWeight="bold">Requested quantity: 500 Piece</Text>
        <Text fontWeight="bold">Lead value: 3000 AED</Text>
      </Stack>
      <Text>
        This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces
      </Text>
    </MessagingEnquiry>
  </WithGrayBg>
);

export const messageAttachment = () => (
  <WithGrayBg>
    <MessagingAttachment
      src={src}
      title="Premium Grade AAA Grade, Fresh Style Citrus OrangesPremium Grade AAA 2222"
      date="17:00PM"
      fileSize="24K"
    >
      <MessagingAttachmentButton children="Download image" />
    </MessagingAttachment>
  </WithGrayBg>
);

export const fileAttachment = () => (
  <WithGrayBg>
    <Stack spacing="md">
      <MessagingFileAttachment
        type="pdf"
        title="How to design better product with really long title and needs to truncate.pdf"
        description="Anyone know how to measure the difference with items that are in
      different groups?"
        date="17:00pm"
        arrowPlacement="end"
        fileSize="24K"
      >
        <MessagingAttachmentButton children="Download file" />
      </MessagingFileAttachment>

      <MessagingFileAttachment
        type="xls"
        title="product_catalog.xlsx"
        date="17:00pm"
      >
        <MessagingAttachmentButton children="Download file" />
      </MessagingFileAttachment>
    </Stack>
  </WithGrayBg>
);

export const messagingContact = () => (
  <Box>
    <MessagingContact
      hasRead
      status="offline"
      name="Ifeoma Imoh"
      message="This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces-This-is-a-long-line-of-text-without-any-spaces"
      date="12/10/2020"
    />
    <MessagingContact
      isSelected
      status="online"
      name="Majd Alrawashdeh"
      message="Guys - this does not need to be rectified.  The form on homepage was a last min change"
      photo="https://ca.slack-edge.com/TP32QM08Y-USK0AM681-465984d54fe8-512"
      date="12/10/2020"
    />
    <MessagingContact
      name="Kamran Ahmed"
      message="Hey guys, I gave a talk at an IBM conference, please check it out"
      photo="https://pbs.twimg.com/profile_images/1121742565584375809/ntY8wHL6_400x400.png"
      date="12/10/2020"
    />
  </Box>
);

const products = [
  {
    title: 'Premium Grade AAA Grade, Fresh Style Citrus Oranges',
    quantity: '1000 AED / 500 Piece',
    image: src,
    imageAlt: 'Some image',
  },
  {
    title: 'Premium Grade AAA Grade, Fresh Style Citrus Oranges',
    quantity: '1000 AED / 500 Piece',
    image: src,
    imageAlt: 'Some image',
  },
];

export const messagingOrder = () => (
  <WithGrayBg>
    <Stack>
      <MessagingOrder
        date="12/10/2020"
        title="Order ID 27364638645"
        products={products}
        moreLabel={<MessagingOrderViewMore children="+ 5 products" />}
      >
        <MessagingOrderButton children="Order information" />
      </MessagingOrder>

      <MessagingOrder
        date="12/10/2020"
        title="Order ID 27364638645"
        products={products.slice(0, 1)}
      >
        <MessagingOrderButton children="Order information" />
      </MessagingOrder>
    </Stack>
  </WithGrayBg>
);
