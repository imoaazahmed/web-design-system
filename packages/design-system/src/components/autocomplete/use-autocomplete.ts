import { useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { useId } from '@reach/auto-id';
import React, { cloneElement, useRef, useState } from 'react';
import MultiRef from 'react-multi-ref';
import { usePopper } from 'react-popper';
import scrollIntoView from 'scroll-into-view-if-needed';
import { useUpdateEffect } from '../../hooks';
import { callAllHandlers, mergeRefs, PropGetter } from '../../utils';
import { getModifiers } from '../../utils/popper-modifiers';
import { deepMap } from '../../utils/react-children';

export interface UseAutocompleteProps {
  /**
   * Initial input value
   */
  defaultInputValue?: string;
  /**
   * The children, usually AutoCompleteOption or AutoCompleteOptionGroup
   */
  children?: React.ReactNode;
  /**
   * Called with the selection value when the user makes a selection from the list.
   */
  onSelect?: (selectedValue: any) => void;
  /**
   * Called with the selection value when the user presses enter key
   * without navigating to any options or clicking on the search button.
   * onSubmit is best used with the autocomplete prop.
   */
  onSubmit?: (inputValue: string) => void;
  /**
   * Determines if the value in the input changes or not as the user navigates with the keyboard
   */
  autoComplete?: boolean;
  /**
   * If `true`, the first option will be highlighted when the user
   * types in something and receives results.
   */
  autoSelect?: boolean;
  /**
   * If `true`, the input's value will be selected when the input is focused.
   *
   * This is useful when the user is likely to replace all values in the input
   * with their desired values (e.g. Browser URL)
   */
  selectOnFocus?: boolean;
  /**
   * If `true`, the menu will be opened when the input is focused.
   */
  openOnFocus?: boolean;
  /**
   * If `true`, the input's value will be cleared when `Esc` key is pressed
   */
  clearOnEsc?: boolean;
  /**
   * If `true`, the menu will close when an option is selected using the
   * keyboard or mouse click.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * The top-level `id` to use for the autocomplete
   */
  id?: string;
}

export function useAutocomplete(props: UseAutocompleteProps) {
  const {
    defaultInputValue = '',
    onSelect,
    onSubmit,
    autoComplete,
    autoSelect,
    closeOnSelect = true,
    selectOnFocus,
    openOnFocus,
    id: idProp,
  } = props;

  if (autoComplete && autoSelect) {
    throw new Error(
      'You cannot pass both `autoComplete` and `autoSelect` prop. It will lead to weird behaviors'
    );
  }

  // state to track the input's value
  const [inputValue, setInputValue] = useState(defaultInputValue);

  // track open and close state of the menu
  const { isOpen, onOpen, onClose } = useDisclosure();

  // fallback state used to track input's value that the user typed before navigating
  const [fallbackInputValue, setFallbackInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>();
  const menuRef = useRef<HTMLDivElement>();

  useOutsideClick({
    ref: menuRef as any,
    handler: event => {
      if (
        isOpen &&
        !inputRef.current?.contains(event.target as HTMLElement) &&
        !menuRef.current?.contains(event.target as HTMLElement)
      ) {
        onClose();
      }
    },
  });

  const shouldSelectRef = useRef(false);

  const fallbackId = `combobox-${useId()}`;
  const id = idProp ?? fallbackId;

  const rootId = `${id}-root`;
  const inputId = `${id}-input`;
  const menuId = `${id}-menu`;
  const labelId = `${id}-label`;
  const toggleButtonId = `${id}-toggle-button`;
  const submitButtonId = `${id}-submit-button`;

  /**
   * Keep track of all options regardless of their nesting level
   */
  const [optionsRef] = useState(
    () =>
      new MultiRef<
        string | number,
        { label: string; value: string | number; id: string }
      >()
  );

  /**
   * Keep track of all first options within the option group.
   * This is useful for multicolumn layouts
   */
  const [firstOptionsRef] = useState(
    () =>
      new MultiRef<string | number, { label: string; value: string | number }>()
  );

  /**
   * Keep track of the DOM references to all options regardless
   * of their nesting level
   */
  const [nodesRef] = useState(() => new MultiRef<number, HTMLElement>());

  /**
   * Focus index used to track the currently focused options
   */
  const [focusedIndex, setFocusedIndex] = useState(-1);

  /**
   * Compute the focused value based on the `focusedIndex`
   */
  const focusedValue = Array.from(optionsRef.map.keys())?.[focusedIndex] ?? '';

  /**
   * Keep track of the event that changes the focused index. The focused/selected
   * option can changed by either a mouse or keyboard (down key)
   */
  type EventSource = 'keyboard' | 'mouse' | null;

  const [eventSource, setEventSource] = useState<EventSource>(null);

  /**
   * Scroll into view once we navigate using the keyboard down/up keys
   */
  useUpdateEffect(() => {
    // get all nodes stored in the nodesRef, for the focused index.
    const nodes = Array.from(nodesRef.map.values());
    const node = nodes[focusedIndex];

    // only scroll if event source is keyboard
    const shouldScroll = node && eventSource === 'keyboard';

    if (shouldScroll) {
      // the actual scroll into view logic
      scrollIntoView(node, {
        scrollMode: 'if-needed',
        block: 'end',
      });
    }
  }, [focusedIndex, nodesRef.map, eventSource]);

  /**
   * Effect to auto-select the first option when the input's value
   */
  useUpdateEffect(() => {
    if (autoSelect && optionsRef.map.size > 0) {
      setFocusedIndex(0);
    }
  }, [inputValue, autoSelect, optionsRef.map]);

  useUpdateEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  /**
   * Effect that updates the input's value when focused/selected
   * value changes based on keyboard up/down navigation.
   */
  useUpdateEffect(() => {
    // get all option values  stored in optionsRef
    const values = Array.from(optionsRef.map.keys());

    // only update input's value if event source is keyboard and `autocomplete` is `true`
    const isUsingKeyboard = eventSource === 'keyboard';

    if (focusedIndex >= 0 && autoComplete && isUsingKeyboard) {
      const _value = values[focusedIndex];
      const option = optionsRef.map.get(_value);
      if (option) setInputValue(option.label);
    }

    if (focusedIndex < 0 && isUsingKeyboard) {
      setInputValue('');
    }
  }, [focusedIndex, autoComplete, eventSource, optionsRef.map]);

  const [inputEl, setInputEl] = useState<HTMLInputElement | null>(null);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(inputEl, menuEl, {
    placement: 'bottom-start',
    strategy: 'fixed',
    modifiers: getModifiers({ matchWidth: true }),
  });

  const getMenuProps: PropGetter<'ul'> = (props = {}, ref) => {
    const { children } = props;

    const getChildren = () => {
      if (optionsRef.map.size > 0) {
        optionsRef.map.clear();
      }

      if (firstOptionsRef.map.size > 0) {
        firstOptionsRef.map.clear();
      }

      return deepMap(children, (child: any, index) => {
        if (child?.type?.id === 'AutocompleteOption') {
          /**
           * Add index to the saved options ref
           */
          const childIndex = optionsRef.map.size;
          const childProps = {
            ...child.props,
            index: childIndex,
            id: `${id}-option-${childIndex}`,
          };

          if (index === 0) {
            firstOptionsRef.map.set(child.props.value, childProps);
          }
          optionsRef.map.set(child.props.value, childProps);

          return cloneElement(child, {
            index: childIndex,
            ref: nodesRef.ref(childIndex),
          });
        }

        return child;
      });
    };

    return {
      ...props,
      ...attributes.popper,
      style: { ...props.style, ...styles.popper },
      'aria-labelledby': labelId,
      role: 'listbox',
      hidden: !isOpen,
      id: menuId,
      ref: mergeRefs(ref, menuRef, setMenuEl),
      children: getChildren(),
    };
  };

  const getInputProps: PropGetter<'input'> = (props = {}, ref) => {
    const onKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          setEventSource('keyboard');
          e.preventDefault();

          let nextFocusedIndex;

          if (focusedIndex === -1) {
            nextFocusedIndex = 0;
          } else {
            nextFocusedIndex = focusedIndex + 1;
            if (nextFocusedIndex > optionsRef.map.size - 1) {
              nextFocusedIndex = -1;
            }
          }

          setFocusedIndex(nextFocusedIndex);
          break;

        case 'ArrowUp':
          setEventSource('keyboard');
          e.preventDefault();

          let prevFocusedIndex;

          if (focusedIndex === 0) {
            prevFocusedIndex = -1;
          } else {
            prevFocusedIndex = focusedIndex - 1;
            if (prevFocusedIndex < 0) {
              prevFocusedIndex = optionsRef.map.size - 1;
            }
          }

          setFocusedIndex(prevFocusedIndex);
          break;

        case 'Enter':
          if (focusedValue) {
            const option = optionsRef.map.get(focusedValue);
            if (option) {
              setInputValue(option.label);
              setFallbackInputValue(option.label);
            }
            onSelect?.(focusedValue);
          } else if (inputValue) {
            onSubmit?.(inputValue);
          }

          if (closeOnSelect) {
            onClose();
          }

          break;

        case 'Escape':
          e.preventDefault();
          setFocusedIndex(-1);
          onClose();
          break;
        default:
          break;
      }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextInputValue = e.target.value;

      // open menu once user starts typing
      if (nextInputValue === '' && isOpen) onClose();
      if (nextInputValue !== '') onOpen();

      setInputValue(nextInputValue);
      setFallbackInputValue(nextInputValue);
    };

    const onFocus = () => {
      if (selectOnFocus) {
        if (shouldSelectRef.current) {
          inputRef.current?.select();
        }
        shouldSelectRef.current = false;
      }

      if (openOnFocus) {
        onOpen();
      }
    };

    const onBlur = () => {
      if (selectOnFocus) {
        shouldSelectRef.current = true;
      }
    };

    const option = optionsRef.map.get(focusedValue);
    const optionId = focusedValue ? option?.['id'] : undefined;

    return {
      ...props,
      'aria-autocomplete': autoSelect ? 'both' : 'list',
      'aria-controls': menuId,
      'aria-labelledby': labelId,
      'aria-activedescendant': optionId,
      autoCapitalize: 'none',
      autoComplete: 'off',
      id: inputId,
      ref: mergeRefs(ref, inputRef, setInputEl),
      value: inputValue || fallbackInputValue,
      onFocus: callAllHandlers(props.onFocus, onFocus),
      onBlur: callAllHandlers(props.onBlur, onBlur),
      onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
      onChange: callAllHandlers(props.onChange, onChange),
    };
  };

  type OptionProps = {
    label?: string;
    value?: string | number;
    index?: number;
  };

  const getOptionProps: PropGetter<'li', OptionProps> = (props = {}, ref) => {
    const { label = '', value, children, index, id, ...rest } = props;

    const isFocused = focusedIndex === index;

    const onMouseEnter = () => {
      setEventSource('mouse');
      if (index != null) {
        setFocusedIndex(index);
      }
    };

    const onMouseLeave = () => {
      setEventSource('mouse');
      setFocusedIndex(-1);
    };

    const onMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    const onClick = (e: React.MouseEvent) => {
      e.preventDefault();

      if (value) {
        setInputValue(label);
        setFallbackInputValue(label);
        onSelect?.(value);

        if (closeOnSelect) {
          onClose();
        }
      }

      requestAnimationFrame(() => {
        inputRef.current?.focus({ preventScroll: true });
      });
    };

    return {
      ...rest,
      ref,
      id,
      role: 'option',
      tabIndex: -1,
      children: children || label,
      'aria-selected': isFocused ? true : undefined,
      onMouseEnter: callAllHandlers(props.onMouseEnter, onMouseEnter),
      onMouseLeave: callAllHandlers(props.onMouseLeave, onMouseLeave),
      onMouseDown: callAllHandlers(props.onMouseDown, onMouseDown),
      onClick: callAllHandlers(props.onClick, onClick),
    };
  };

  const getRootProps: PropGetter<'div'> = (props = {}, ref) => {
    return {
      ...props,
      ref,
      role: 'combobox',
      'aria-expanded': isOpen,
      'aria-owns': menuId,
      'aria-haspopup': 'listbox',
      id: rootId,
    };
  };

  const getLabelProps: PropGetter<'label'> = (props = {}, ref) => {
    return {
      ...props,
      htmlFor: inputId,
      ref,
      id: labelId,
    };
  };

  const getClearButtonProps: PropGetter<'button'> = (props = {}, ref) => {
    const onClick = () => {
      setInputValue('');
      setFallbackInputValue('');
      setFocusedIndex(-1);
      inputRef.current?.focus({ preventScroll: true });
    };

    const onMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    return {
      'aria-label': 'Clear field value',
      ...props,
      ref,
      type: 'button',
      onMouseDown: callAllHandlers(props.onMouseDown, onMouseDown),
      onClick: callAllHandlers(props.onClick, onClick),
    };
  };

  const getToggleProps: PropGetter<'button'> = (props = {}, ref) => {
    return {
      'aria-label': 'toggle menu',
      ...props,
      ref,
      type: 'button',
      tabIndex: -1,
      id: toggleButtonId,
    };
  };

  const getSubmitButtonProps: PropGetter<'button'> = (props = {}, ref) => {
    const onClick = () => {
      if (inputValue) onSubmit?.(inputValue);
    };
    return {
      'aria-label': 'submit',
      ...props,
      onClick: callAllHandlers(props.onClick, onClick),
      ref,
      type: 'button',
      tabIndex: -1,
      id: submitButtonId,
    };
  };

  return {
    // state
    isOpen,
    inputValue,
    focusedValue,
    fallbackInputValue,
    focusedIndex,
    // state setter
    setFocusedIndex,
    setInputValue,
    // prop getter
    getLabelProps,
    getRootProps,
    getOptionProps,
    getMenuProps,
    getInputProps,
    getClearButtonProps,
    getToggleProps,
    getSubmitButtonProps,
  };
}

export type UseAutocompleteReturn = ReturnType<typeof useAutocomplete>;
