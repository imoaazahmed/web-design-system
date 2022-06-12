import React from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { Avatar, AvatarPresence, AvatarProps } from '../avatar';
import { TextProps, Text } from '../typography';

export const MessagingContactCard = (props: BoxProps) => (
  <Box
    as="button"
    maxWidth="402px"
    minWidth="213px"
    paddingTop="lg"
    paddingBottom="md"
    paddingStart="lg"
    paddingEnd="lg-alt"
    transition="all 0.2s"
    userSelect="none"
    cursor="pointer"
    outline="0"
    display="block"
    {...props}
  />
);

export type MessagingContactAvatarProps = AvatarProps &
  Pick<MessagingContactProps, 'status'>;

export const MessagingContactAvatar = (props: MessagingContactAvatarProps) => {
  const { status, ...rest } = props;
  return (
    <Avatar size="lg" flexShrink={0} {...rest}>
      {status && <AvatarPresence variant={status} />}
    </Avatar>
  );
};

const MessagingContactName = (props: TextProps) => (
  <Text noOfLines={1} {...props} />
);

export const MessagingContactText = (props: TextProps) => (
  <Text size="sm" noOfLines={2} {...props} />
);

export const MessagingContactDate = (props: TextProps) => (
  <Text size="sm" color="gray.800" textAlign="end" {...props} />
);

export interface MessagingContactProps extends BoxProps {
  /**
   * The contact's name
   */
  name?: string;
  /**
   * The contact's photo url
   */
  photo?: string;
  /**
   * The recent message snipper to show
   */
  message: string;
  /**
   * Whether the message has been read
   */
  hasRead?: boolean;
  /**
   * Wheter this message is the currently viewed message
   */
  isSelected?: boolean;
  /**
   * The message's date
   */
  date: string;
  /**
   * The status of the user
   */
  status?: 'online' | 'offline';
}

export const MessagingContact = (props: MessagingContactProps) => {
  const {
    name,
    photo,
    message,
    hasRead,
    date,
    isSelected,
    status,
    ...rest
  } = props;

  const isBold = !isSelected && !hasRead;

  return (
    <MessagingContactCard
      bg={isSelected ? 'gray.100' : 'white'}
      _hover={{ bg: 'gray.100' }}
      _active={{ bg: 'gray.200' }}
      _focus={{ bg: 'gray.100' }}
      {...rest}
    >
      <Flex align="center" mb="2xs">
        <MessagingContactAvatar
          marginEnd="md"
          src={photo}
          name={name}
          status={status}
        />
        <Box marginEnd="lg" textAlign="start" flex={1}>
          <Flex justifyContent="space-between" alignItems="center">
            <MessagingContactName
              fontWeight={isBold ? 'bold' : 'normal'}
              children={name}
            />
            <MessagingContactDate
              marginStart="2xs"
              marginTop="1px"
              fontWeight={isBold ? 'bold' : 'normal'}
              children={date}
              alignSelf="flex-start"
            />
          </Flex>
          <MessagingContactText
            mt="xs"
            color={isBold ? 'blue.700' : 'gray.800'}
            fontWeight={isBold ? 'bold' : 'normal'}
            children={message}
          />
        </Box>
        <Box
          height="12px"
          w="12px"
          flexShrink={0}
          borderRadius="50%"
          bg={isBold ? 'green.500' : 'transparent'}
        />
      </Flex>
    </MessagingContactCard>
  );
};
