import React, { createContext, useContext } from 'react';
import {
  Alert as ChakraAlert,
  Box,
  BoxProps,
  CloseButton,
  Stack,
} from '@chakra-ui/react';
import {
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
  IoMdInformationCircle,
} from '../../icons/react-icons/io';
import { Text, TextProps } from '../typography';

type VariantTypes = 'outline' | 'solid';

type SolidAlertTypes = 'info';
type OutlineAlertTypes = 'error' | 'info' | 'success' | 'warning';
type AlertTypes = SolidAlertTypes | OutlineAlertTypes;

// Solid variant only has info alert type for now.
export type AlertVariantTypeProps =
  | {
      variant?: 'solid';
      type?: SolidAlertTypes;
    }
  | {
      variant?: 'outline';
      type?: OutlineAlertTypes;
    };

export type BaseAlertProps = BoxProps &
  AlertVariantTypeProps & {
    iconColor?: string;
    iconSize?: string;
    onClose?: () => void;
    isClosable?: boolean;
  };

type SingleVariantAlertType = {
  [key in AlertTypes]: {
    color: string;
    icon: any;
    bgColor?: string;
    textColor?: string;
  };
};

type VariantAlertTypes = {
  [key in VariantTypes]: SingleVariantAlertType;
};

const variants: VariantAlertTypes = {
  outline: {
    error: { color: 'red.500', icon: IoMdCloseCircle },
    info: { color: 'blue.500', icon: IoMdInformationCircle },
    success: { color: 'green.500', icon: IoMdCheckmarkCircle },
    warning: { color: 'orange.500', icon: IoMdInformationCircle },
  },
  // Add more solid variants here as they become available from the design team
  solid: {
    info: {
      color: 'yellow.300',
      icon: IoMdInformationCircle,
      bgColor: 'blue.700',
      textColor: 'white',
    },
  } as SingleVariantAlertType,
};

// Defaults to Alert > Outline > Info
const defaultContextValue = {
  color: 'blue.500',
  textColor: 'black',
};

const AlertContext = createContext(defaultContextValue);
const useAlertContext = () => {
  return useContext(AlertContext);
};

const BaseAlert = (props: BaseAlertProps) => {
  const {
    children,
    type = 'info',
    variant = 'outline',
    iconColor: iconColorProp,
    iconSize = '1rem',
    onClose,
    isClosable,
    ...rest
  } = props;

  const { color, icon, bgColor = 'white', textColor = 'black' } = variants[
    variant
  ][type];

  const iconColor = iconColorProp || color;
  const borderStyle =
    variant === 'outline' ? { border: '1px', borderColor: color } : {};

  return (
    <AlertContext.Provider value={{ color, textColor }}>
      <ChakraAlert
        padding="md"
        display="block"
        borderRadius="3px"
        bg={bgColor}
        {...borderStyle}
        {...rest}
      >
        <Stack direction="row" spacing="sm">
          <Box
            as={icon}
            flexShrink={0}
            w={iconSize}
            h={iconSize}
            color={iconColor}
            mt="2px"
          />
          <Box>{children}</Box>
        </Stack>
        {isClosable && (
          <CloseButton
            position="absolute"
            insetEnd="sm"
            top="sm"
            onClick={onClose}
          />
        )}
      </ChakraAlert>
    </AlertContext.Provider>
  );
};

const BaseAlertTitle = (props: TextProps) => {
  const { children, ...rest } = props;
  const { color } = useAlertContext();

  return (
    <Text mb="md" fontWeight="bold" color={color} {...rest}>
      {children}
    </Text>
  );
};

const BaseAlertDescription = (props: TextProps) => {
  const { children, ...rest } = props;
  const { textColor } = useAlertContext();

  return (
    <Text color={textColor} {...rest}>
      {children}
    </Text>
  );
};

BaseAlert.Title = BaseAlertTitle;
BaseAlert.Description = BaseAlertDescription;

export { BaseAlert };
