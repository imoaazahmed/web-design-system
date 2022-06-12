import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  chakra,
  FormLabel,
  HTMLChakraProps,
  Icon,
  Portal,
} from '@chakra-ui/react';
import * as PopperJS from '@popperjs/core';
import { useSelect, UseSelectProps, UseSelectStateChange } from 'downshift';
import React, { forwardRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { useUpdateEffect } from '../../hooks';
import input from '../../theme/components/input';
import { GetModifierOptions, getModifiers } from '../../utils/popper-modifiers';
import { singleSelectMiddleware } from './select.utils';

const Menu = forwardRef((props: BoxProps, ref: React.Ref<any>) => {
  return <Box w="100%" outline="0" ref={ref} zIndex={2} {...props} />;
});

const MenuList = forwardRef((props: BoxProps, ref: React.Ref<any>) => {
  return (
    <Box
      ref={ref}
      paddingY="2"
      rounded="md"
      boxShadow=" rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px"
      overflow="auto"
      {...props}
    />
  );
});

interface MenuOptionProps extends BoxProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  isFocused?: boolean;
}

const MenuOption = forwardRef((props: MenuOptionProps, ref: React.Ref<any>) => {
  const { isDisabled, isSelected, isFocused, ...rest } = props;

  const bg = isSelected || isFocused ? 'gray.100' : 'white';
  const color = isDisabled ? 'gray.400' : 'gray.700';

  return (
    <Box
      ref={ref}
      bg={bg}
      color={color}
      py="xs"
      px="sm"
      cursor="pointer"
      display="flex"
      alignItems="center"
      fontSize="14px"
      width="100%"
      userSelect="none"
      css={{
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
      _active={{
        bg: 'gray.200',
      }}
      {...rest}
    />
  );
});

const Button = forwardRef(
  (props: HTMLChakraProps<'button'>, ref: React.Ref<any>) => {
    return (
      <chakra.button
        ref={ref}
        outline="0"
        transition="all 0.2s"
        display="flex"
        w="100%"
        textAlign="start"
        justifyContent="space-between"
        alignItems="center"
        {...(input.baseStyles as any)}
        paddingEnd="xs"
        {...props}
      />
    );
  }
);

interface Option<T> {
  label: string;
  value: T;
}

interface SelectOptions<T> {
  /**
   * The select options. Should consist of `label` and `value`
   */
  options?: Option<T>[];
  /**
   * The select's internal id
   */
  id?: string;
  /**
   * The select's value  in controlled mode
   */
  value?: Option<T>['value'];
  /**
   * The initial select's value  in un-controlled mode
   */
  defaultValue?: Option<T>['value'];
  /**
   * Function called once an option is selected
   */
  onChange?: (value: Option<T>['value'] | null | undefined) => void;
  /**
   * Function to determine which option t be disabled
   */
  isOptionDisabled?: (option: Option<T>) => boolean;
  /**
   * The menu's maximum height
   */
  maxMenuHeight?: string | number;
  /**
   * The menu's maximum width when `popperProps.matchWidth` is `false`
   */
  maxMenuWidth?: string | number;
  /**
   * The menu's z-index value
   */
  menuZIndex?: number;
  /**
   * The placeholder shown in the select's button when
   * value or default value is empty or undefined
   */
  placeholder?: string;
  /**
   * If `true`, the select's button will be disabled
   */
  isDisabled?: boolean;
  /**
   * If `true`, the select's button will be invalid
   */
  isInvalid?: boolean;
  /**
   * If `true`, the select will be open
   */
  menuIsOpen?: boolean;
  /**
   * If `true`, the select will initially be open
   */
  defaultMenuIsOpen?: boolean;
  /**
   * If `true`, the select's menu button will be auto-focused
   */
  autoFocus?: boolean;
  /**
   * Function called when the menu opens
   */
  onMenuOpen?: () => void;
  /**
   * Function called when the menu closes
   */
  onMenuClose?: () => void;
  /**
   * The label to use within the select
   */
  label?: string;
  /**
   * Escapte hatch to force popper-js to update
   * select menu's positioning.
   * @default false
   */
  forceUpdate?: boolean;
}

/**
 * Downshift's control props `selectedItem` and `defaultSelectedItem` doesn't
 * work well when selectedItem prop is `undefined` and `defaultSelectedItem` is passed.
 *
 * So we'll use this filter function to remove an undefined values in useSelect's props
 */
function filterUndefined<T extends Record<string, any>>(obj: T) {
  (Object.keys(obj) as Array<keyof typeof obj>).forEach(key =>
    obj[key] === undefined ? delete obj[key] : {}
  );
}

export interface SelectV2Props<T>
  extends SelectOptions<T>,
    Omit<BoxProps, 'onChange' | 'value' | 'defaultValue'> {
  popperProps?: Partial<Pick<PopperJS.Options, 'placement' | 'strategy'>> &
    GetModifierOptions;
}

export function SelectV2<T>(props: SelectV2Props<T>) {
  const {
    options = [],
    maxMenuHeight = '312px',
    maxMenuWidth = '312px',
    menuZIndex,
    placeholder = 'Select...',
    onChange,
    isDisabled,
    isInvalid,
    defaultMenuIsOpen,
    menuIsOpen,
    autoFocus,
    value,
    defaultValue,
    onMenuOpen,
    onMenuClose,
    id,
    label,
    isOptionDisabled,
    popperProps,
    forceUpdate,
    ...rest
  } = props;

  const itemToString = (item: Option<T> | null) => item?.label || '';

  const onSelectOption = (params: UseSelectStateChange<Option<T>>) => {
    const { selectedItem } = params;

    onChange?.(selectedItem?.value);
  };

  const { getValue } = singleSelectMiddleware(options);

  const hookProps: UseSelectProps<Option<T>> = {
    items: options,
    itemToString,
    onSelectedItemChange: onSelectOption,
    defaultIsOpen: defaultMenuIsOpen,
    isOpen: menuIsOpen,
    id,
    defaultSelectedItem: getValue(defaultValue),
    selectedItem: getValue(value),
    onIsOpenChange: ({ isOpen }) => {
      const action = isOpen ? onMenuOpen : onMenuClose;
      action?.();
    },
  };

  filterUndefined(hookProps);

  const {
    closeMenu,
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect(hookProps);

  /**
   * This is a temporary fix for useSelect hook because it doesn't work as expected.
   *
   * When `defaultIsOpen` is `true`, we'd expect the select menu to open initially but
   * close when we select an item.
   *
   * This doesn't happen as the menu always remains open, and you'll need to click outside
   * for the menu to close.
   *
   * This effect ensures we close the menu once an item is selected and `defaultIsOpen` is set
   */
  useUpdateEffect(() => {
    if (defaultMenuIsOpen) {
      closeMenu();
    }
  }, [selectedItem, defaultMenuIsOpen, closeMenu]);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(
    null
  );

  const matchWidth = popperProps?.matchWidth || true;

  const { styles, attributes, update } = usePopper(
    buttonElement,
    popperElement,
    {
      placement: popperProps?.placement || 'bottom-start',
      strategy: popperProps?.strategy || 'fixed',
      modifiers: getModifiers({
        matchWidth,
        offset: popperProps?.offset,
        gutter: popperProps?.gutter,
      }),
    }
  );

  React.useEffect(() => {
    if (forceUpdate) {
      update?.();
    }
  }, [forceUpdate, update]);

  /**
   * To mimic react-select, we'll add a 'fake' focus style to the
   * select button when it's open.
   *
   * This doesn't mean focus in on the menu button, downshift moves
   * focus to the menu dropdown when the list is open.
   */
  const focusStyle: BoxProps = isOpen
    ? {
        boxShadow: 'outline',
        borderColor: 'gray.500',
      }
    : {};

  const invalidStyle: BoxProps = isInvalid
    ? {
        borderColor: 'red.500',
      }
    : {};

  return (
    <Box {...rest}>
      {label && <FormLabel {...getLabelProps()}>{label}</FormLabel>}
      <Button
        {...focusStyle}
        {...invalidStyle}
        {...getToggleButtonProps({
          ref: setButtonElement,
          disabled: isDisabled,
          'aria-invalid': isInvalid,
          type: 'button',
          autoFocus,
        })}
      >
        <Box flex="1" isTruncated>
          {selectedItem ? itemToString(selectedItem) : placeholder}
        </Box>
        {isOpen ? (
          <ChevronUpIcon boxSize="24px" />
        ) : (
          <ChevronDownIcon boxSize="24px" />
        )}
      </Button>

      <Portal>
        <Menu
          backgroundColor="white"
          maxW={matchWidth ? 'unset' : maxMenuWidth}
          zIndex={menuZIndex}
          {...getMenuProps(
            {
              refKey: 'ref',
              ref: setPopperElement,
              style: styles.popper,
              ...attributes.popper,
            },
            { suppressRefError: true }
          )}
        >
          {isOpen && (
            <MenuList maxH={maxMenuHeight}>
              {options.map((option, index) => {
                return (
                  <MenuOption
                    isDisabled={isOptionDisabled?.(option)}
                    isSelected={selectedItem?.value === option.value}
                    isFocused={index === highlightedIndex}
                    key={option.value}
                    {...getItemProps({
                      item: option,
                      index,
                    })}
                  >
                    <Box>{option.label}</Box>
                  </MenuOption>
                );
              })}
            </MenuList>
          )}
        </Menu>
      </Portal>
    </Box>
  );
}
