import * as React from 'react';

export interface UseControllableProps<T> {
  /**
   * The controlled value
   */
  value?: T;
  /**
   * The default value in uncontrolled mode
   */
  defaultValue?: T | (() => T);
  /**
   * Callback that's fired when value changes
   */
  onChange?: (next: T) => void;
}

/**
 * useControllable is used to manage controlled and uncontrolled states of a component.
 */
export function useControllable<T>(props: UseControllableProps<T>) {
  const { value, defaultValue, onChange } = props;

  const { current: isControlled } = React.useRef(value !== undefined);
  const [valueState, setValue] = React.useState(defaultValue);
  const finalValue = isControlled ? value : valueState;

  const update = React.useCallback(
    (next: T) => {
      if (!isControlled) setValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return [finalValue, update] as [T, (next: T) => void];
}
