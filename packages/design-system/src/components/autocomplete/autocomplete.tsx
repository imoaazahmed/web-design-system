import {
  Box,
  BoxProps,
  chakra,
  ChakraProps,
  CloseButton,
  HTMLChakraProps,
  IconButton,
  IconButtonProps,
  IconProps,
  Spinner,
  SpinnerProps,
  Stack,
  StackProps,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Combobox,
  ComboboxInput,
  ComboboxInputProps,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionProps,
  ComboboxOptionText,
  ComboboxPopover,
  ComboboxProps,
} from '@reach/combobox';
import * as React from 'react';
import { Button, ButtonProps } from '../button';
import { Input, InputProps } from '../input';
import { useIsRTL } from '../theme-provider';
import { Text, TextProps } from '../typography';

type BaseAutocompleteInputProps = ComboboxInputProps &
  Omit<InputProps, 'onSubmit'>;
/**
 * The base autocomplete for all scenarios
 */
const ComboBoxInput = chakra(ComboboxInput);
export const BaseAutocompleteInput = React.forwardRef(
  (props: BaseAutocompleteInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { placeholder, ...rest } = props;
    const { value } = useAutocompleteContext();
    return (
      // @ts-ignore
      <ComboboxInput
        as={Input}
        ref={ref}
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        name="input"
        autoComplete="off"
        {...rest}
      />
    );
  }
);

/**
 * AutocompleteArrow
 *
 * Renders an arrow tip on top of the dropdown.
 * Mostly used in desktop views.
 */
const AutocompleteArrow = (props: BoxProps) => {
  const { borderColor } = props;
  return (
    <React.Fragment>
      <Box
        pos="absolute"
        bottom="100%"
        insetStart="125px"
        border="solid transparent"
        w="0"
        h="0"
        borderColor="rgba(151, 151, 151, 0)"
        borderBottomColor={borderColor}
        borderWidth="9px"
        marginStart="-xs"
      />
      <Box
        pos="absolute"
        bottom="100%"
        insetStart="125px"
        border="solid transparent"
        w="0"
        h="0"
        borderColor="rgba(255, 255, 255, 0)"
        borderBottomColor="#fff"
        borderWidth="7px"
        marginStart="-xs"
      />
    </React.Fragment>
  );
};

/**
 * AutocompleteSpinner
 *
 * Used to render a spinner in the autocomplete input
 * while a fetch operation is still happening
 */
export const AutocompleteSpinner = (props: SpinnerProps) => {
  return (
    <Spinner
      size="sm"
      position="absolute"
      insetEnd="sm"
      top="30%"
      color="blue.600"
      transform="translateY(-50%)"
      emptyColor="gray.200"
      {...props}
    />
  );
};

/**
 * AutocompleteOption
 *
 * Renders a single option in the autocomplete dropdown.
 * It also includes interactive styles out of the box
 */
const Option = chakra(ComboboxOption);

export const AutocompleteOption = (props: ComboboxOptionProps) => {
  const { isMobile } = useAutocompleteContext();

  return (
    <Option
      sx={{
        '&[aria-selected=true], &:hover': {
          background: 'gray.50',
          textDecoration: 'underline',
        },
        '[data-suggested-value]': {
          fontWeight: 'normal',
        },
        '[data-user-value]': {
          fontWeight: 'bold',
        },
      }}
      flex={1}
      fontSize="14px"
      paddingX="xs"
      paddingY={isMobile ? 'xs' : '2xs'}
      cursor="pointer"
      margin={0}
      {...props}
    />
  );
};

interface AutocompleteContextType {
  isMobile: boolean;
  openIfEmpty: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  value: string;
  langDirection?: string;
  setValue: (value: string) => void;
}

/**
 * We use this context to broadcast this prop down
 * to all components
 */
const AutocompleteContext = React.createContext<AutocompleteContextType>({
  isMobile: false,
  openIfEmpty: false,
} as AutocompleteContextType);

export const useAutocompleteContext = () =>
  React.useContext(AutocompleteContext);

export interface AutocompleteProps extends ComboboxProps {
  isMobile?: boolean;
  openIfEmpty?: boolean;
  style?: React.CSSProperties;
  langDirection?: 'rtl' | 'ltr';
  onSubmit?: (val: string) => void;
}

/**
 * Autocomplete
 *
 * Serves as the overall wrapper that providers logic to
 * the entire autocomplete
 */
const Container = chakra(Combobox);
export const Autocomplete = (props: AutocompleteProps) => {
  const {
    isMobile = false,
    openIfEmpty = true,
    onSelect,
    onSubmit,
    children,
    langDirection,
    ...rest
  } = props;

  /*
   * This value state is used to override the internal state of reach-ui
   * Reach-ui does not allow control over its internal state so we override it with our state management system here
   * This is primarily used for the clear button functionality, but other functionalities can be implemented
   */
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const context = React.useMemo(
    () => ({ isMobile, openIfEmpty, inputRef, value, langDirection, setValue }),
    [isMobile, openIfEmpty, langDirection, value]
  );

  const handleSelect = (selectedValue: string) => {
    onSelect?.(selectedValue);
    setValue(selectedValue);
  };

  return (
    <AutocompleteContext.Provider value={context}>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit?.(value);
        }}
      >
        <Container
          openOnFocus
          display="flex"
          position="relative"
          borderRadius="0.25rem"
          borderWidth="1px"
          onSelect={handleSelect}
          {...rest}
        >
          {children}
        </Container>
      </form>
    </AutocompleteContext.Provider>
  );
};

export const AutocompleteAddon = (props: BoxProps) => {
  return <Box {...props} />;
};

/**
 * AutocompleteSearchIcon
 *
 * The search icon inside the input component
 */
export const AutocompleteSearchIcon = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      w="1rem"
      h="1rem"
      name="search"
      color="white"
      zIndex={2}
      {...{ viewBox: '0 0 21 20', ...props }}
    >
      <path
        fill="currentColor"
        d="M19.7652633,18.1081081 L16.3253944,14.5454545 C19.0113194,10.958231 18.7285905,5.84766585 15.6421328,2.62899263 C14.0164413,0.933660934 11.8488527,0 9.53989961,0 C7.23094653,0 5.06335792,0.933660934 3.43766646,2.62899263 C1.81197501,4.32432432 0.916666667,6.58476658 0.916666667,8.99262899 C0.916666667,11.4004914 1.81197501,13.6609337 3.43766646,15.3562654 C5.06335792,17.0515971 7.23094653,17.985258 9.53989961,17.985258 C11.44832,17.985258 13.3331797,17.3218673 14.8410674,16.0687961 L18.2573755,19.6805897 C18.4694222,19.9017199 18.7285905,20 19.0113194,20 C19.2940484,20 19.5532166,19.8771499 19.7652633,19.6805897 C20.1893567,19.2628993 20.1893567,18.5503686 19.7652633,18.1081081 Z M16.25,9 C16.25,10.8768116 15.5451389,12.6268116 14.28125,13.9456522 C13.0173611,15.2644928 11.3159722,16 9.54166667,16 C7.76736111,16 6.06597222,15.2644928 4.80208333,13.9456522 C3.53819444,12.6268116 2.83333333,10.8514493 2.83333333,9 C2.83333333,7.12318841 3.53819444,5.37318841 4.80208333,4.05434783 C6.06597222,2.73550725 7.76736111,2 9.54166667,2 C11.3402778,2 13.0173611,2.73550725 14.28125,4.05434783 C15.5451389,5.37318841 16.25,7.12318841 16.25,9 Z"
        id="path-1"
      />
    </chakra.svg>
  );
};

export interface AutocompleteInputProps {
  onSubmit?: (query: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  defaultValue?: string;
  id?: string;
  buttonId?: string;
  buttonProps?: ButtonProps;
  iconProps?: IconProps;
  children?: React.ReactNode;
  inputContainerProps?: BoxProps;
}

/**
 * AutocompleteInput
 *
 * The input element used for the search
 */
export const AutocompleteInput = (props: AutocompleteInputProps) => {
  const {
    onChange,
    defaultValue,
    placeholder,
    id = 'main-search-input',
    buttonId = 'main-search-cta',
    buttonProps,
    iconProps,
    children,
    ...rest
  } = props;

  const { openIfEmpty, inputRef, setValue } = useAutocompleteContext();

  /**
   * @todo refine or rewrite combobox
   *
   * This is a hacky solution and we might need to write
   * our own Combobox component
   */
  const reFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.blur();
    requestAnimationFrame(() => {
      target.focus();
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' && openIfEmpty) {
      reFocus(event);
    }
    onChange?.(event);
    setValue(event?.target?.value);
  };

  /**
   * @todo open an issue in reach/combobox
   *
   * this is a hack to enable the consumers
   * change the input's value after search
   */
  React.useEffect(() => {
    requestAnimationFrame(() => {
      if (inputRef.current && defaultValue) {
        inputRef.current.value = defaultValue;
      }
    });
  }, [defaultValue, inputRef]);

  return (
    <Box w="100%">
      <Box flex="1" position="relative">
        <BaseAutocompleteInput
          height="100%"
          paddingY="sm"
          paddingX="md"
          border="none"
          ref={inputRef}
          onChange={handleChange}
          placeholder={placeholder}
          id={id}
          _focus={{ boxShadow: 'none', border: 'none' }}
          {...rest}
        />
      </Box>
      {children}
    </Box>
  );
};

export const AutocompleteClearButton = (
  props: Omit<IconButtonProps, 'aria-label'>
) => {
  const { onClick, ...rest } = props;
  const { inputRef, setValue } = useAutocompleteContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (!inputRef?.current) return;
    setValue('');
    inputRef?.current?.focus();
  };

  return (
    <IconButton
      aria-label="clear"
      icon={<SmallCloseIcon />}
      isRound
      padding="xs"
      h="unset"
      minW="unset"
      onClick={handleClick}
      {...rest}
    />
  );
};

export const AutocompleteSearchButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      minWidth="110px"
      roundedStart="0"
      variant="primary-next"
      {...props}
    />
  );
};

export interface AutocompleteDropdownProps {
  children?: React.ReactNode;
  /**
   * Pass raw styles to the popover container
   */
  style?: React.CSSProperties;
  /**
   * An accessible label for the autocomplete
   * @example "Product Search"
   */
  'aria-label'?: string;
  /**
   * Pass styles to the autocomplete list
   * It is forwarded to the `ComboboxList` component
   * from @reach/combobox
   */
  className?: string;
  /**
   * set to `false` to not render the `Dropdown` inside the portal of `AutoComplete`
   */
  portal?: boolean;

  /**
   *  ComboboxList Props
   */
  listProps?: ChakraProps;
}

/**
 * AutocompleteDropdown
 *
 * The dropdown or popover that shows the list of options.
 * It serves as the overall container for the option
 */

const List = chakra(ComboboxList);
const Popover = chakra(ComboboxPopover);
export const AutocompleteDropdown = (props: AutocompleteDropdownProps) => {
  const {
    children,
    'aria-label': ariaLabel,
    className,
    portal = true,
    listProps = {},
    ...rest
  } = props;

  const { isMobile, langDirection } = useAutocompleteContext();
  const rtlHook = useIsRTL();
  const isRtl = langDirection ? langDirection === 'rtl' : rtlHook;

  return (
    <Popover
      portal={portal}
      boxShadow="0 2px 65px 0 rgba(0, 0, 0, 0.17)"
      border="none"
      marginTop="sm"
      zIndex={9}
      fontSize="85%"
      backgroundColor="white"
      {...rest}
    >
      {!isMobile && <AutocompleteArrow borderColor="#fff" />}
      <List
        aria-label={ariaLabel}
        padding="lg"
        overflow="auto"
        listStyleImage="initial"
        listStylePosition="initial"
        listStyleType="none"
        margin={0}
        userSelect="none"
        className={className}
        dir={isRtl ? 'rtl' : 'ltr'}
        {...listProps}
      >
        {children}
      </List>
    </Popover>
  );
};

export type AutocompleteOptionGroupProps = BoxProps & {
  titleProps?: TextProps;
};

/**
 * AutocompleteOptionGroup
 *
 * Used to group related options (for example, recently searched items)
 */
export const AutocompleteOptionGroup = (
  props: AutocompleteOptionGroupProps
) => {
  const { title, children, titleProps, ...rest } = props;

  return (
    <Box {...rest}>
      {title && (
        <Text
          paddingStart="xs"
          size="lg"
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

export interface AutocompleteRecentOptionProps extends StackProps {
  onDelete?: () => void;
  value: string;
}

/**
 * AutocompleteRecentOption
 *
 * Used to render the recently searched items
 */
const OptionText = chakra(ComboboxOptionText);
export const AutocompleteRecentOption = (
  props: AutocompleteRecentOptionProps
) => {
  const { onDelete, value, ...rest } = props;
  return (
    <AutocompleteOption value={value}>
      <Stack direction="row" spacing="lg" {...rest}>
        <CloseButton
          width="auto"
          height="auto"
          flexShrink={0}
          onClick={event => {
            event.stopPropagation();
            onDelete?.();
          }}
          alignSelf="center"
        />
        <OptionText />
      </Stack>
    </AutocompleteOption>
  );
};
