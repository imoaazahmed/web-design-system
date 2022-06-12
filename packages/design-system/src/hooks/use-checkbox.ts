import React, { useCallback, useRef, useState } from 'react';
import { callAllHandlers, mergeRefs, PropGetter } from '../utils';

export const visuallyHiddenStyle: React.CSSProperties = {
  border: '0px',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute',
};

interface UseCheckboxProps {
  /**
   * If `true`, the checkbox will be checked.
   * You'll need to pass `onChange` to update it's value (since it's now controlled)
   */
  isChecked?: boolean;
  /**
   * If `true`, the checkbox will be indeterminate.
   * This only affects the icon shown inside checkbox
   * and does not modify the isChecked property.
   */
  isIndeterminate?: boolean;
  /**
   * If `true`, the checkbox will be disabled
   */
  isDisabled?: boolean;
  /**
   * If `true` and `isDisabled` is passed, the checkbox will
   * remain tabbable but not interactive
   */
  isFocusable?: boolean;
  /**
   * If `true`, the checkbox will be readonly
   */
  isReadOnly?: boolean;
  /**
   * If `true`, the checkbox is marked as invalid.
   * Changes style of unchecked state.
   */
  isInvalid?: boolean;
  /**
   * If `true`, the checkbox input is marked as required,
   * and `required` attribute will be added
   */
  isRequired?: boolean;
  /**
   * If `true`, the checkbox will be initially checked.
   */
  defaultIsChecked?: boolean;
  /**
   * The callback invoked when the checked state of the `Checkbox` changes..
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The name of the input field in a checkbox
   * (Useful for form submission).
   */
  name?: string;
  /**
   * The value to be used in the checkbox input.
   * This is the value that will be returned on form submission.
   */
  value?: string | number;
  /**
   * id assigned to input
   */
  id?: string;
}

const useSafeLayoutEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

function useControllableProp<T>(prop: T | undefined, state: T) {
  const { current: isControlled } = React.useRef(prop !== undefined);
  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
  return [isControlled, value] as const;
}

/**
 * useCheckbox that provides all the state and focus management logic
 * for a checkbox. It is consumed by the `Checkbox` component
 *
 * @see Docs https://chakra-ui.com/components/useCheckbox
 */
export function useCheckbox(props: UseCheckboxProps = {}) {
  const {
    defaultIsChecked,
    isChecked: checkedProp,
    isFocusable,
    isDisabled,
    isReadOnly,
    isRequired,
    onChange,
    isIndeterminate,
    isInvalid,
    name,
    value,
    id,
    ...htmlProps
  } = props;

  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const [checkedState, setCheckedState] = useState(!!defaultIsChecked);

  const [isControlled, isChecked] = useControllableProp(
    checkedProp,
    checkedState
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }

      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.target.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.target.checked);
        }
      }

      onChange?.(event);
    },
    [isReadOnly, isDisabled, isChecked, isControlled, isIndeterminate, onChange]
  );

  useSafeLayoutEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);

  const trulyDisabled = isDisabled && !isFocusable;

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === ' ') {
        setActive(true);
      }
    },
    [setActive]
  );

  const onKeyUp = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === ' ') {
        setActive(false);
      }
    },
    [setActive]
  );

  const getCheckboxProps: PropGetter<'div'> = (
    props = {},
    forwardedRef = null
  ) => {
    const onPressDown = (event: React.MouseEvent) => {
      // On mousedown, the input blurs and returns focus to the `body`,
      // we need to prevent this. Native checkboxes keeps focus on `input`
      event.preventDefault();
      setActive(true);
    };

    return {
      ...props,
      ref: forwardedRef,
      'data-active': isActive,
      'data-hover': isHovered,
      'data-checked': isChecked,
      'data-focus': isFocused,
      'data-indeterminate': isIndeterminate,
      'data-disabled': isDisabled,
      'data-invalid': isInvalid,
      'data-readonly': isReadOnly,
      'aria-hidden': true,
      onMouseDown: callAllHandlers(props.onMouseDown, onPressDown),
      onMouseUp: callAllHandlers(props.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: callAllHandlers(props.onMouseLeave, () =>
        setHovered(false)
      ),
    };
  };

  const getInputProps: PropGetter<'input'> = (
    props = {},
    forwardedRef = null
  ) => ({
    ...props,
    ref: mergeRefs(ref, forwardedRef),
    type: 'checkbox',
    name,
    value,
    id,
    onChange: callAllHandlers(props.onChange, handleChange),
    onBlur: callAllHandlers(props.onBlur, () => setFocused(false)),
    onFocus: callAllHandlers(props.onFocus, () => setFocused(true)),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
    onKeyUp: callAllHandlers(props.onKeyUp, onKeyUp),
    required: isRequired,
    checked: isChecked,
    disabled: trulyDisabled,
    readOnly: isReadOnly,
    'aria-invalid': isInvalid,
    'aria-disabled': isDisabled,
    style: visuallyHiddenStyle,
  });

  const getLabelProps: PropGetter<'label'> = (
    props = {},
    forwardedRef = null
  ) => {
    return {
      ...props,
      ref: forwardedRef,
      onMouseDown: callAllHandlers(props.onMouseDown, stopEvent),
      onTouchStart: callAllHandlers(props.onTouchStart, stopEvent),
      'data-disabled': isDisabled,
      'data-checked': isChecked,
      'data-invalid': isInvalid,
    };
  };

  return {
    state: {
      isInvalid,
      isFocused,
      isChecked,
      isActive,
      isHovered,
      isIndeterminate,
      isDisabled,
      isReadOnly,
      isRequired,
    },
    getCheckboxProps,
    getInputProps,
    getLabelProps,
    htmlProps,
  };
}

/**
 * Prevent `onBlur` being fired when the checkbox label is touched
 */
function stopEvent(event: React.SyntheticEvent) {
  event.preventDefault();
  event.stopPropagation();
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;
