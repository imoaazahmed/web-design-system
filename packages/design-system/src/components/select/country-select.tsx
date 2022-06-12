import { getCodeList } from 'country-list';
import * as React from 'react';
import Select, {
  components,
  createFilter,
  Props as SelectProps,
  ValueType,
} from 'react-select';
import { CountryFlag } from '../country-flag';
import { singleSelectMiddleware, styles } from './select.utils';

export const countryList = getCodeList();

export type CountrySelectProps<T = {}> = Omit<
  SelectProps,
  'instanceId' | 'options'
> & {
  options?: Array<T>;
  onChange?: (value: ValueType<any, any>) => void;
  /** SSR: A unique instance id for this select */
  id: string;
};

const defaultOptions = Object.entries(countryList).map(
  ([countryCode, country]) => ({
    label: country,
    value: countryCode?.toUpperCase(),
  })
);

const Option = (props: any) => {
  const { value, children, ...rest } = props;
  return (
    <components.Option {...rest}>
      <CountryFlag marginEnd="md" countryCode={value} />
      {children}
    </components.Option>
  );
};

export function CountrySelect<T = string>(props: CountrySelectProps<T>) {
  const { id, onChange, placeholder = 'Select country', components } = props;
  const options = props.options || (defaultOptions as any[]);
  const { getItemValue, getValue } = singleSelectMiddleware(options);

  return (
    <Select
      {...props}
      isSearchable
      placeholder={placeholder}
      options={options}
      instanceId={id}
      filterOption={createFilter({ ignoreAccents: false })}
      components={{ IndicatorSeparator: null, Option, ...components }}
      styles={styles}
      onChange={option => {
        onChange?.(getItemValue(option));
      }}
      value={getValue(props.value)}
      defaultValue={getValue(props.defaultValue)}
    />
  );
}

export default CountrySelect;
