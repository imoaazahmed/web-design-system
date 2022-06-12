import React from 'react';
import {
  BoxProps,
  FlexProps,
  Heading,
  HeadingProps,
  Spinner as ChakraSpinner,
  SpinnerProps,
  Text,
} from '@chakra-ui/react';
import { Center } from '../shared/center';

const thickness = {
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '5px',
  xl: '7px',
};

function SpinnerBox(props: FlexProps): React.ReactElement {
  const { children, ...rest } = props;

  return (
    <Center flexDir="column" flex={1} {...rest}>
      {children}
    </Center>
  );
}

export const Spinner = (props: SpinnerProps) => {
  const { size = 'xl', color = 'gray.300' } = props;
  return (
    <ChakraSpinner
      size={size}
      thickness={thickness[size as keyof typeof thickness]}
      color={color}
      {...props}
    />
  );
};

SpinnerBox.Spinner = Spinner;

export const SpinnerHeader = (props: HeadingProps) => {
  return <Heading size="xl" mt={5} {...props} />;
};

SpinnerBox.Header = SpinnerHeader;

export const SpinnerExtra = (props: BoxProps) => {
  return <Text fontSize="md" mt={2} mb={2} {...props} />;
};

SpinnerBox.Extra = SpinnerExtra;

export type { SpinnerProps } from '@chakra-ui/react';
export default SpinnerBox;
