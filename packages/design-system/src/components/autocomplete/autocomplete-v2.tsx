import {
  Box,
  BoxProps,
  chakra,
  IconButton,
  IconButtonProps,
  InputProps,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Input } from '../input';
import { Text, TextProps } from '../typography';
import {
  useAutocomplete,
  UseAutocompleteProps,
  UseAutocompleteReturn,
} from './use-autocomplete';
import { Button, ButtonProps } from '../../index';

const AutocompleteContext = React.createContext({} as UseAutocompleteReturn);
AutocompleteContext.displayName = 'AutocompleteContext';

export const useAutocompleteContextV2 = () => {
  return React.useContext(AutocompleteContext);
};

export const AutocompleteV2 = (props: UseAutocompleteProps) => {
  const context = useAutocomplete(props);
  const { getRootProps } = context;
  return (
    <AutocompleteContext.Provider value={context}>
      <Box {...getRootProps()}>{props.children}</Box>
    </AutocompleteContext.Provider>
  );
};

AutocompleteV2.displayName = 'AutocompleteV2';

export const AutocompleteMenuV2 = (props: BoxProps) => {
  const { getMenuProps } = useAutocompleteContextV2();

  return (
    <chakra.ul
      boxShadow="0 2px 65px 0 rgba(0, 0, 0, 0.17)"
      padding="sm"
      overflow="auto"
      bg="white"
      rounded="md"
      listStyleType="none"
      maxHeight="300px"
      {...getMenuProps(props as any)}
    />
  );
};

AutocompleteMenuV2.displayName = 'AutocompleteMenuV2';

export const AutocompleteInputV2 = React.forwardRef(
  function AutocompleteInputV2(
    props: Omit<InputProps, 'onChange'> & {
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
    },
    ref: React.Ref<any>
  ) {
    const {
      placeholder = 'Enter value...',
      'aria-label': ariaLabel = placeholder,
    } = props;
    const { getInputProps } = useAutocompleteContextV2();
    return (
      <Input
        name="input"
        id="main-search-input"
        {...getInputProps(props as any, ref)}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    );
  }
);

AutocompleteInputV2.displayName = 'AutocompleteInputV2';

interface AutocompleteOptionV2Props extends BoxProps {
  label?: string;
  value?: any;
}

export const AutocompleteOptionV2 = React.forwardRef(
  function AutocompleteOptionV2(
    props: AutocompleteOptionV2Props,
    ref: React.Ref<any>
  ) {
    //@ts-expect-error
    // This is an internal API detail we don't want to expose to prop types
    const { index } = props;
    const { getOptionProps, focusedIndex } = useAutocompleteContextV2();

    const isFocused = focusedIndex === index;

    return (
      <chakra.li
        fontSize="md"
        letterSpacing="-0.2px"
        bg={isFocused ? 'gray.100' : 'white'}
        px="sm"
        py="xs"
        listStyleType="none"
        {...getOptionProps(props as any, ref)}
      />
    );
  }
);

AutocompleteOptionV2.displayName = 'AutocompleteOptionV2';
//@ts-ignore
AutocompleteOptionV2.id = 'AutocompleteOption';

interface AutocompleteOptionGroupV2Props extends BoxProps {
  titleProps?: TextProps;
}

export const AutocompleteOptionGroupV2 = (
  props: AutocompleteOptionGroupV2Props
) => {
  const { title, children, titleProps, ...rest } = props;

  const isMobile = false;

  const deviceStyle = isMobile
    ? { paddingStart: 'xs' }
    : { marginBottom: 'md', paddingStart: 'xs' };

  return (
    <Box {...rest}>
      {title && (
        <Text
          {...deviceStyle}
          size="sm"
          fontWeight="bold"
          color="blue.800"
          marginBottom={['2xs', null]}
          {...titleProps}
        >
          {title}
        </Text>
      )}
      {children}
    </Box>
  );
};

AutocompleteOptionGroupV2.displayName = 'AutocompleteOptionGroupV2';

export const AutocompleteClearButtonV2 = (
  props: Omit<IconButtonProps, 'aria-label'>
) => {
  const { getClearButtonProps } = useAutocompleteContextV2();
  return (
    <IconButton
      aria-label="clear"
      flexShrink={0}
      icon={<SmallCloseIcon />}
      isRound
      padding="xs"
      h="unset"
      minW="unset"
      {...getClearButtonProps(props as any)}
    />
  );
};

AutocompleteClearButtonV2.displayName = 'AutocompleteClearButtonV2';

export const AutocompleteSubmitButtonV2 = (props: ButtonProps) => {
  const { getSubmitButtonProps } = useAutocompleteContextV2();
  const buttonProps = getSubmitButtonProps(props as any);
  return <Button {...buttonProps} />;
};

AutocompleteClearButtonV2.displayName = 'AutocompleteSubmitButtonV2';
