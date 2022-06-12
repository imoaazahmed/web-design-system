import React, { useEffect, useRef, useState } from 'react';
import { useControllable, useUpdateEffect } from '../../hooks';
import { callAllHandlers, mergeRefs, PropGetter } from '../../utils';

/**
 * Standard Interaction: https://yaireo.github.io/tagify/
 */
export interface UseTagInputProps {
  value?: string[];
  defaultValue?: string[];
  onChange?(value: string[]): void;
  /**
   * The placeholder shown for the input
   */
  placeholder?: string;
  /**
   * Optional: If `true`, the input should be autofocused on mount.
   */
  autoFocus?: boolean;
  hidePlaceholderTextIfTagsPresent?: boolean;
  /**
   * Specifies which characters should terminate tags input
   */
  delimiter?: ',' | 'Enter' | 'Both';
  /**
   * This prop controls whether tags should allow duplicate.
   */
  allowDuplicates?: boolean;

  blurBehavior?: 'clear' | 'addTag';

  /**
   * Callback function that is called when the input changes.
   */
  onInputChange?(value: string): void;
  isDisabled?: boolean;
}

export function useTagInput(props: UseTagInputProps = {}) {
  const {
    onChange,
    value,
    defaultValue = [],
    placeholder = 'Type and press Enter...',
    hidePlaceholderTextIfTagsPresent = true,
    delimiter = 'Both',
    autoFocus,
    allowDuplicates = false,
    blurBehavior,
    onInputChange,
    isDisabled,
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  const [tags, setTags] = useControllable<string[]>({
    value,
    defaultValue,
    onChange,
  });

  useUpdateEffect(() => {
    onInputChange?.(inputValue);
  }, [inputValue, onInputChange]);

  const addTag = (value: string) => {
    if (!allowDuplicates && tags.includes(value)) return;
    const nextState = [...tags, value];
    setTags(nextState);
  };

  const removeTag = (value: string) => {
    const nextState = tags.filter(i => i !== value);
    setTags(nextState);
  };

  const reorderTag = (value: string, index: number, nextIndex: number) => {
    const nextState = [...tags].slice();
    nextState.splice(index, 1);
    nextState.splice(nextIndex, 0, value);
    setTags(nextState);
  };

  const clearInputValue = () => {
    setInputValue('');
  };

  const focusInput = () => {
    inputRef.current?.focus({ preventScroll: true });
  };

  const blurInput = () => {
    inputRef.current?.blur();
  };

  const clearAll = () => {
    setTags([]);
    focusInput();
  };

  useEffect(() => {
    if (autoFocus) {
      focusInput();
    }
  }, [autoFocus]);

  const getDeleteButtonProps: PropGetter<'button', { value?: string }> = (
    props = {},
    ref
  ) => {
    const { value = '', ...rest } = props;

    const handleClick = () => {
      removeTag(value);
      focusInput();
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    return {
      ...rest,
      ref,
      type: 'button',
      onClick: callAllHandlers(props.onClick, handleClick),
      onMouseDown: callAllHandlers(props.onMouseDown, handleMouseDown),
    };
  };

  const getInputProps: PropGetter<'input'> = (props = {}, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
      const inputNotEmpty = inputValue && inputValue.trim() !== '';

      const isDelimiterKey =
        delimiter !== 'Both'
          ? event.key === delimiter
          : [',', 'Enter'].includes(event.key);

      if (isDelimiterKey && inputNotEmpty) {
        event.preventDefault();
        addTag(inputValue);
        clearInputValue();
      }

      if (event.key === 'Backspace' && !inputNotEmpty && tags.length > 0) {
        event.preventDefault();
        removeTag(tags[tags.length - 1]);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (!inputValue) {
        return;
      }

      switch (blurBehavior) {
        case 'addTag':
          addTag(inputValue);
          clearInputValue();
          break;
        case 'clear':
          clearInputValue();
        default:
          return;
      }
    };

    const _placeholder =
      hidePlaceholderTextIfTagsPresent && tags.length > 0
        ? undefined
        : placeholder;

    return {
      ...props,
      placeholder: _placeholder,
      ref: mergeRefs(inputRef, ref),
      value: inputValue,
      disabled: isDisabled,
      onChange: callAllHandlers(props.onChange, handleChange),
      onKeyDown: callAllHandlers(props.onKeyDown, handleKeyDown),
      onFocus: callAllHandlers(props.onFocus, handleFocus),
      onBlur: callAllHandlers(props.onBlur, handleBlur),
    };
  };

  const getRootProps: PropGetter<'div'> = (props, ref) => {
    return {
      ...props,
      ref,
      'data-focus': isFocused ? '' : undefined,
      'data-disabled': isDisabled ? '' : undefined,
    };
  };

  return {
    // state
    inputValue,
    isFocused,
    tags,
    // actions
    addTag,
    reorderTag,
    clearInputValue,
    clearAll,
    removeTag,
    focusInput,
    blurInput,
    // prop getters
    getRootProps,
    getInputProps,
    getDeleteButtonProps,
  };
}
