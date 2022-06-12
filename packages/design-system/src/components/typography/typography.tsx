import {
  chakra,
  HeadingProps as ChakraHeadingProps,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import * as React from 'react';
import { ForwardedRef, forwardRef } from 'react';
import {
  heading,
  HeadingSizes,
  text,
  TextSizes,
} from '../../theme/components/typography';

export interface HeadingProps extends ChakraHeadingProps {
  size?: HeadingSizes;
  noOfLines?: number;
}

function getNoOfLineStyles(noOfLines?: number) {
  if (!noOfLines) return null;
  return {
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: noOfLines,
    overflow: 'hidden',
  };
}

export const Heading = (props: HeadingProps) => {
  const { size = 'md', ...headingProps } = props;
  const styles = { ...heading.baseStyle, ...heading.sizes[size] };
  return <chakra.h2 {...styles} {...headingProps} />;
};

export interface TextProps extends ChakraTextProps {
  size?: TextSizes;
  noOfLines?: number;
}

export const Text = forwardRef(
  (props: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    const { size = 'md', noOfLines, ...textProps } = props;
    const styles = { ...text.baseStyle, ...text.sizes[size] };
    const lineClampStyles = getNoOfLineStyles(noOfLines) ?? {};
    return (
      <chakra.p {...styles} {...textProps} sx={lineClampStyles} ref={ref} />
    );
  }
);
