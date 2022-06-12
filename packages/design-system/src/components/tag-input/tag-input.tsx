import { Flex, FlexProps, Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import { input } from '../../theme/components';

export type TagInputProps = BoxProps & { isFocused?: boolean };

export const TagInputBox = (props: TagInputProps) => {
  const { isFocused, ...rest } = props;

  const { _focus, ...styles } = input.baseStyles;

  let focusStyles = {};

  if (isFocused) {
    focusStyles = {
      ..._focus,
    };
  }
  return (
    <Box
      padding="xs"
      height="auto"
      minH="40px"
      transition="all 0.2s"
      {...styles}
      {...focusStyles}
      {...rest}
    />
  );
};

type TagGroupProps = FlexProps & { spacing?: number };

export const TagGroup = (props: TagGroupProps) => {
  const { spacing = 8, ...rest } = props;

  return (
    <Flex
      {...rest}
      wrap="wrap"
      sx={{
        margin: -(spacing / 2),
        '> *': {
          margin: spacing / 2,
        },
      }}
    />
  );
};
