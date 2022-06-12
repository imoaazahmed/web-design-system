import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Text, TextProps } from '../typography';

const defaultCardStyles: BoxProps = {
  padding: 'lg',
  borderRadius: '3px',
  border: 'solid 1px',
  borderColor: 'gray.200',
  backgroundColor: 'white',
};

const defaultTitleStyles: TextProps = {
  size: 'lg',
  marginBottom: 'lg',
};

const defaultDividerStyles: BoxProps = {
  height: '1px',
  backgroundColor: 'gray.100',
};

export const Card = React.forwardRef((props: BoxProps, ref: React.Ref<any>) => {
  return <Box ref={ref} {...defaultCardStyles} {...props} />;
});

export const CardTitle = (props: TextProps) => {
  const { children, ...rest } = props;
  return (
    <Text {...defaultTitleStyles} {...rest}>
      {children}
    </Text>
  );
};

export const CardContent = (props: BoxProps) => {
  const { children, ...rest } = props;
  return <Box {...rest}>{children}</Box>;
};

export const CardDivider = (props: BoxProps) => {
  return <Box {...defaultDividerStyles} {...props} />;
};
