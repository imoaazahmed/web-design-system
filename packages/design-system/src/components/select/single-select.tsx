import * as React from 'react';
import Select, {
  ActionMeta,
  Props as SelectProps,
  ValueType,
} from 'react-select';
import {
  autoCompleteStyles,
  singleSelectMiddleware,
  styles,
} from './select.utils';

export type SingleSelectProps = Omit<SelectProps, 'instanceId'> & {
  onChange?: (value: ValueType<any, any>, meta: ActionMeta<any>) => void;
  /** SSR: A unique instance id for this select */
  id: string;
  variant?: 'autoComplete' | 'default';
};

export const SingleSelect = (props: SingleSelectProps) => {
  const {
    options,
    id,
    value,
    defaultValue,
    onChange,
    isSearchable = false,
    components,
    variant = 'default',
    ...rest
  } = props;

  const { getValue, getItemValue } = singleSelectMiddleware(options as any[]);

  const customStyles =
    variant === 'autoComplete' ? autoCompleteStyles() : styles;

  return (
    <Select
      {...rest}
      options={options}
      instanceId={id}
      isSearchable={isSearchable}
      components={{ IndicatorSeparator: null, ...components }}
      styles={customStyles}
      onChange={(option, meta) => {
        onChange?.(getItemValue(option), meta);
      }}
      value={getValue(value)}
      defaultValue={getValue(defaultValue)}
    />
  );
};

export default SingleSelect;
