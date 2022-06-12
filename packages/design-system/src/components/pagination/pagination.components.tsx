import React from 'react';
import { Text, TextProps } from '../typography';
import { Button, ButtonProps } from '../button';
import { Box, BoxProps } from '@chakra-ui/react';
import { FaChevronRight, FaChevronLeft } from '../../icons/react-icons/fa';
import { useIsRTL } from '../theme-provider';

export const PageLabel = ({ data: _, ...props }: TextProps & { data: any }) => (
  <Text
    size="lg"
    color="gray.700"
    userSelect="none"
    sx={{ fontVariant: 'tabular-nums' }}
    {...props}
  />
);

type NextButtonProps = ButtonProps & PaginationProps;

export const NextButton = React.forwardRef(
  (props: NextButtonProps, ref: React.Ref<any>) => {
    const isRtl = useIsRTL();
    return (
      <Button
        as="a"
        ref={ref}
        size="md"
        variant="ghost"
        minWidth="0"
        color="gray.400"
        {...props}
      >
        <Box fontSize="lg" as={isRtl ? FaChevronLeft : FaChevronRight} />
      </Button>
    );
  }
);

type PrevButtonProps = ButtonProps & PaginationProps;

export const PrevButton = React.forwardRef(
  (props: PrevButtonProps, ref: React.Ref<any>) => {
    const isRtl = useIsRTL();

    return (
      <Button
        as="a"
        ref={ref}
        size="md"
        variant="ghost"
        minWidth="0"
        color="gray.400"
        {...props}
      >
        <Box fontSize="lg" as={isRtl ? FaChevronRight : FaChevronLeft} />
      </Button>
    );
  }
);

type PageButtonProps = ButtonProps & PaginationProps;

export const PageButton = React.forwardRef(
  (props: PageButtonProps, ref: React.Ref<any>) => {
    const { isCurrent, page, variant, ...rest } = props;

    return (
      <Button
        as="a"
        ref={ref}
        size="md"
        transition="none"
        userSelect="none"
        variant={isCurrent ? 'secondary-next' : 'default'}
        borderRadius="full"
        padding="0"
        {...rest}
      />
    );
  }
);

type PaginationProps = { isCurrent?: boolean; page?: number };

type PageEllipsisProps = Omit<BoxProps, ''> & PaginationProps;

export const PageEllipsis = React.forwardRef(
  (props: PageEllipsisProps, ref: React.Ref<any>) => {
    const { isCurrent, page, ...rest } = props;
    return (
      <Box
        textAlign="center"
        userSelect="none"
        ref={ref}
        {...rest}
        cursor="default"
      />
    );
  }
);
