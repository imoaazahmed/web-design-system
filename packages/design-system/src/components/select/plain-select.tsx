import { Flex, FlexProps } from '@chakra-ui/react';
import * as React from 'react';
import Select, { Props as SelectProps, ValueType } from 'react-select';
import { useControllable } from '../../hooks';
import { Text, TextProps } from '../typography';
import { noBorderStyles, singleSelectMiddleware } from './select.utils';

const defaultStyles = {
  align: 'center',
  minH: '30px',
  px: 'sm',
};

const styles = {
  default: defaultStyles,
  outline: {
    ...defaultStyles,
    borderWidth: '1px',
    borderColor: 'gray.200',
    borderRadius: '3px',
  },
};

export const PlainSelectWrapper = (props: FlexProps) => {
  return (
    <Flex pos="relative" align="center" justify="space-between" {...props} />
  );
};

export const PlainSelectLabel = (props: TextProps) => {
  return <Text fontWeight="bold" textAlign="end" flex="1" {...props} />;
};

export type ContainerProps = FlexProps & { variant?: 'outline' | 'default' };

export const PlainSelectContainer = (props: ContainerProps) => {
  const { variant = 'default', ...rest } = props;
  const customStyles = styles[variant];

  return <Flex {...customStyles} {...rest} />;
};

export type PlainSelectProps = Omit<SelectProps, 'instanceId'> & {
  onChange?: (value: ValueType<any, any>) => void;
  /** SSR: A unique instance id for this select */
  id: string;
};

export const PlainSelect = (props: PlainSelectProps) => {
  const {
    options,
    id,
    value: valueProp,
    defaultValue,
    onChange,
    isSearchable,
    components,
    label,
    ...rest
  } = props;

  const [value, setValue] = useControllable({
    value: valueProp,
    defaultValue,
    onChange,
  });

  const { getValue, getItemValue } = singleSelectMiddleware(options as any[]);

  return (
    <Select
      {...rest}
      options={options}
      instanceId={id}
      isSearchable={!!isSearchable}
      components={{ IndicatorSeparator: null, ...components }}
      styles={noBorderStyles}
      onChange={option => {
        setValue?.(getItemValue(option));
      }}
      value={getValue(value)}
      defaultValue={getValue(defaultValue)}
    />
  );
};
