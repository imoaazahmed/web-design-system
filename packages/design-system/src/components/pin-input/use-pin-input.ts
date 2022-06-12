import { useId } from '@reach/auto-id';
import React from 'react';
import MultiRef from 'react-multi-ref';
import { useControllable } from '../../hooks';
import { callAllHandlers, mergeRefs } from '../../utils';

const NUMERIC_REGEX = /^[0-9]+$/;
const ALPHA_NUMERIC_REGEX = /^[a-z0-9]+$/i;

type InputAttrs = React.InputHTMLAttributes<HTMLInputElement>;

export interface UsePinInputProps {
  /**
   * If `true`, the pin input receives focus on mount
   */
  autoFocus?: boolean;
  /**
   * The value of the the pin input. This is the value
   * that will be returned when the pin input is filled
   */
  value?: string;
  /**
   * The default value of the pin input
   */
  defaultValue?: string;
  /**
   * Function called on input change
   */
  onChange?: (value: string) => void;
  /**
   * Function called when all inputs have valid values
   */
  onComplete?: (value: string) => void;
  /**
   * The placeholder for the pin input
   */
  placeholder?: string;
  /**
   * If `true`, the pin input component is put in the disabled state
   */
  isDisabled?: boolean;
  /**
   * The top-level `id` to use
   */
  id?: string;
  /**
   * The type of values the pin-input should allow
   */
  type?: string | number;
  /**
   * The input mode passed to the `<input/>`
   *
   * By default, we use the `type` to determine the mode
   */
  inputMode?: InputAttrs['inputMode'];
}

const toArray = (value?: string) =>
  typeof value === 'string' ? value.split('') : undefined;

export function usePinInput(props: UsePinInputProps) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    placeholder = '○',
    isDisabled,
    autoFocus,
    id: idProp,
    onComplete,
    type = 'string',
    inputMode: inputModeProp,
    ...htmlProps
  } = props;

  const id = useId(idProp);

  const inputMode: UsePinInputProps['inputMode'] =
    inputModeProp || type === 'string' ? 'text' : 'numeric';

  const [inputRefs] = React.useState(
    () => new MultiRef<number, HTMLInputElement>()
  );

  const [moveFocus, setMoveFocus] = React.useState(true);

  const [values, setValues] = useControllable<string[]>({
    defaultValue: toArray(defaultValue) || [],
    value: toArray(valueProp),
    onChange: values => onChange?.(values.join('')),
  });

  React.useEffect(() => {
    if (autoFocus) {
      inputRefs.map.get(0)?.focus();
    }
  }, [autoFocus, inputRefs.map]);

  const focusNext = React.useCallback(
    (index: number) => {
      if (!moveFocus) return;

      const nextInput = inputRefs.map.get(index + 1);
      nextInput?.focus();
    },
    [inputRefs.map, moveFocus]
  );

  const setValue = React.useCallback(
    (value: string, index: number) => {
      const nextValues = [...values];
      nextValues[index] = value;
      setValues(nextValues);

      // if we're at the last input, call onComplete (no need to move focus)
      if (index === inputRefs.map.size - 1) {
        onComplete?.(nextValues.join(''));
      } else {
        focusNext(index);
      }
    },
    [values, setValues, inputRefs.map.size, onComplete, focusNext]
  );

  const clear = React.useCallback(() => {
    const values: string[] = Array(inputRefs.map.size).fill('');
    setValues(values);
    const firstInput = inputRefs.map.get(0);
    firstInput?.focus();
  }, [inputRefs.map, setValues]);

  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  const getInputProps = (props: any = {}, forwardedRef: any = null) => {
    const { index, ...rest } = props;

    const onFocus = () => {
      setFocusedIndex(index);
    };

    const onBlur = () => {
      setFocusedIndex(-1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        if ((event.target as HTMLInputElement).value === '') {
          const prevInput = inputRefs.map.get(index - 1);
          if (prevInput) {
            setValue('', index - 1);
            prevInput?.focus();
            setMoveFocus(true);
          }
        } else {
          setMoveFocus(false);
        }
      }
    };

    const hasFocus = focusedIndex === index;

    const getNextValue = (currentValue: string, eventValue: string) => {
      let nextValue = eventValue;
      if (currentValue && currentValue.length > 0) {
        if (currentValue[0] === eventValue[0]) {
          nextValue = eventValue[1];
        } else if (currentValue[0] === eventValue[1]) {
          nextValue = eventValue[0];
        }
      }
      return nextValue;
    };

    function shouldAllow(val: any) {
      return val.match(type === 'string' ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const eventValue = event.target.value;
      const currentValue = values[index];
      const nextValue = getNextValue(currentValue, eventValue);

      // if the value was removed using backspace
      if (nextValue === '') {
        setValue('', index);
        return;
      }

      // in the case of an autocomplete or copy and paste
      if (eventValue.length > 2) {
        // see if we can use the string to fill out our values
        if (shouldAllow(eventValue)) {
          const length = inputRefs.map.size;
          // ensure the value matches the number of inputs
          const nextValue = eventValue.split('').filter((_, i) => i < length);
          setValues(nextValue);

          // if pasting fills the entire input fields, trigger `onComplete`
          if (nextValue.length === inputRefs.map.size) {
            onComplete?.(nextValue.join(''));
          }
        }
        return;
      }

      // only set if the new value is a number
      if (shouldAllow(nextValue)) {
        setValue(nextValue, index);
      }

      setMoveFocus(true);
    };

    return {
      'aria-label': 'Please enter your pin code',
      ...rest,
      ref: mergeRefs(inputRefs.ref(index)),
      id: `${id}-${index}`,
      disabled: isDisabled,
      onChange: callAllHandlers(props.onChange, onChange),
      onBlur: callAllHandlers(props.onBlur, onBlur),
      onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props.onFocus, onFocus),
      value: values[index] || '',
      inputMode,
      autoComplete: 'not-allowed',
      placeholder: hasFocus ? '' : placeholder,
    };
  };

  return {
    htmlProps,
    clear,
    setValue,
    focusNext,
    values,
    setValues,
    getInputProps,
  };
}
