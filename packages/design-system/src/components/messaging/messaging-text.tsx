import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';

type MessagingCardArrowProps = BoxProps & { placement?: 'start' | 'end' };

export const MessagingCardArrow = (props: MessagingCardArrowProps) => {
  const { placement = 'start', bg, ...rest } = props;

  const placementStyles: BoxProps =
    placement === 'end'
      ? {
          insetEnd: '-8px',
          borderEndWidth: '16px',
          borderEndColor: 'transparent',
          roundedBottomEnd: '3px',
        }
      : {
          insetStart: '-8px',
          borderStartWidth: '16px',
          borderStartColor: 'transparent',
          roundedBottomStart: '3px',
        };

  return (
    <Box
      position="absolute"
      w={0}
      h={0}
      bottom={0}
      borderBottomWidth="32px"
      borderBottomColor={bg as string}
      boxShadow="0px 2px 0px 0 rgba(0,0,0,0.04)"
      {...placementStyles}
      {...rest}
    />
  );
};

export const MessagingCard = (props: BoxProps) => (
  <Box
    maxWidth="520px"
    minWidth="286px"
    paddingStart="lg"
    paddingTop="lg"
    paddingBottom="sm"
    paddingEnd="sm"
    borderRadius="8px"
    boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.08)"
    position="relative"
    {...props}
  />
);

export const MessagingCardTime = (props: TextProps) => (
  <Text
    size="xs"
    textAlign="end"
    color="gray.800"
    textTransform="uppercase"
    {...props}
  />
);

export const MessagingCardText = (props: TextProps) => (
  <Text size="md" minWidth="218px" marginEnd="30px" {...props} />
);

interface TextOptions {
  /**
   * The message's date/time stamp
   */
  date: string;
  /**
   * The arrow tip's placement
   */
  arrowPlacement?: 'start' | 'end';
}

export type MessagingCardTextProps = TextOptions & BoxProps;

/**
 * Messaging Component
 *
 * Used to render an message text card in the Messaging Center.
 */
export const MessagingText = (props: MessagingCardTextProps) => {
  const {
    arrowPlacement = 'start',
    children,
    bg = 'white',
    date,
    ...rest
  } = props;
  return (
    <MessagingCard bg={bg} {...rest}>
      <MessagingCardText children={children} />
      <MessagingCardTime children={date} />
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingCard>
  );
};
