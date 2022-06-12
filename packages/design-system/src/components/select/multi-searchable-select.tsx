import * as React from 'react';
import Select, {
  ActionMeta,
  Props as SelectProps,
  ValueType,
} from 'react-select';
import { multiSelectMiddleware, styles } from './select.utils';

export type MultiSearchableSelectProps = Omit<SelectProps, 'instanceId'> & {
  onChange?: (value: ValueType<any, any>, meta: ActionMeta<any>) => void;
  /** SSR: A unique instance id for this select */
  id: string;
};

export const MultiSearchableSelect = (props: MultiSearchableSelectProps) => {
  const {
    options,
    id,
    value,
    defaultValue,
    onChange,
    isSearchable = true,
    cacheOptions = true,
    closeMenuOnSelect = false,
    components,
    ...rest
  } = props;

  const { getValue, getItemValue } = multiSelectMiddleware(options as any[]);

  return (
    <Select
      {...rest}
      options={options}
      instanceId={id}
      isSearchable={isSearchable}
      isMulti
      cacheOptions={cacheOptions}
      closeMenuOnSelect={closeMenuOnSelect}
      components={{ IndicatorSeparator: null, ...components }}
      styles={styles}
      onChange={(option, meta) => {
        onChange?.(getItemValue(option), meta);
      }}
      value={getValue(value)}
      defaultValue={getValue(defaultValue)}
    />
  );
};

export default MultiSearchableSelect;
