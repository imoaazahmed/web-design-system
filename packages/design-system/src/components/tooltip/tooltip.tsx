import React, { ReactElement } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverProps,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Stack,
  PopoverCloseButton,
  PopoverContentProps,
  PopoverArrowProps,
  PopoverCloseButtonProps,
  PopoverHeaderProps,
  PopoverBodyProps,
  PopoverFooterProps,
} from '@chakra-ui/react';
import { Text, TextProps } from '../typography';

export type TooltipProps = Omit<PopoverProps, 'trigger'> & {
  header?: string;
  label: string;
  actionItem?: ReactElement;
  hasArrow?: boolean;
  hasCloseButton?: boolean;
  variant?: 'light' | 'dark';
  width?: string | number;
  contentProps?: PopoverContentProps;
  arrowProps?: PopoverArrowProps;
  closeButtonProps?: PopoverCloseButtonProps;
  headerProps?: PopoverHeaderProps;
  headingProps?: TextProps;
  bodyProps?: PopoverBodyProps;
  labelProps?: TextProps;
  footerProps?: PopoverFooterProps;
};

export const Tooltip = (props: TooltipProps) => {
  const {
    placement = 'auto',
    label,
    header,
    actionItem,
    hasArrow = true,
    hasCloseButton = false,
    children,
    variant = 'light',
    width = 267,
    contentProps,
    arrowProps,
    closeButtonProps,
    headerProps,
    headingProps,
    bodyProps,
    labelProps,
    footerProps,
    ...rest
  } = props;
  const isMobile = window.innerWidth < 992;
  const trigger = isMobile ? 'click' : 'hover';

  if (!label && !header) return <></>;

  return (
    <Popover placement={placement} trigger={trigger} {...rest}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        bgColor={variant === 'dark' ? 'gray.900' : 'white'}
        borderColor={variant === 'dark' ? 'gray.900' : 'gray.200'}
        border="1px solid"
        borderRadius="4px"
        color={variant === 'dark' ? 'white' : 'gray.800'}
        width={width}
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.05)"
        padding="md"
        _focus={{
          outline: 'none',
        }}
        {...contentProps}
      >
        {hasArrow && (
          <PopoverArrow
            bgColor={variant === 'dark' ? 'gray.900' : 'white'}
            {...arrowProps}
          />
        )}
        {hasCloseButton && <PopoverCloseButton {...closeButtonProps} />}
        <Stack spacing="xs">
          {header && (
            <PopoverHeader padding={0} border={0} {...headerProps}>
              <Text
                as="h2"
                size="md"
                fontWeight="bold"
                margin={0}
                {...headingProps}
              >
                {header}
              </Text>
            </PopoverHeader>
          )}
          <PopoverBody border={0} padding={0} {...bodyProps}>
            {label && <Text {...labelProps}>{label}</Text>}
            {actionItem && (
              <PopoverFooter p={0} border={0} {...footerProps}>
                {actionItem}
              </PopoverFooter>
            )}
          </PopoverBody>
        </Stack>
      </PopoverContent>
    </Popover>
  );
};
