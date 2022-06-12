import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { components, Props as SelectProps, ValueType } from 'react-select';
import { CountryFlag } from '../country-flag';
import { useIsRTL } from '../theme-provider';
import CountrySelect, { CountrySelectProps } from './country-select';
import { phoneNumbers as options } from './select.utils';

const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <CountryFlag marginEnd="sm" countryCode={props.data.code} />
      {props.children}
    </components.Option>
  );
};

type PhoneCodeSelectProps = CountrySelectProps;

const SingleValue = (props: any) => {
  return (
    <Flex align="center">
      <CountryFlag marginEnd="sm" countryCode={props.data.code} />
      <span dir="ltr">+{props.data.value}</span>
    </Flex>
  );
};

export const PhoneCodeSelect = (props: PhoneCodeSelectProps) => {
  const isRtl = useIsRTL();
  const lang = isRtl ? 'ar' : 'en';
  const { placeholder = 'country code', id, ...rest } = props;

  return (
    <CountrySelect
      id={id}
      placeholder={placeholder}
      options={options(lang)}
      components={{ Option, SingleValue, ...props.components }}
      {...rest}
    />
  );
};

export const phoneNumbers = options;
export default PhoneCodeSelect;
