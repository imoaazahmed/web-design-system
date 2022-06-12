import { CheckIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Flex, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';
import Select, {
  ActionMeta,
  components,
  Props as SelectProps,
} from 'react-select';
import { multiSelectMiddleware, styles } from './select.utils';

const srOnlyStyle = {
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

function Checkbox(
  props: BoxProps & { isChecked?: boolean; optionId: string; value: string }
) {
  const { isChecked, optionId, value, ...rest } = props;

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w="20px"
      h="20px"
      border="1px"
      bg={isChecked ? 'blue.600' : 'white'}
      borderColor={isChecked ? 'blue.600' : 'gray.300'}
      rounded="base"
      flexShrink={0}
      {...rest}
    >
      <chakra.input
        id={optionId}
        sx={srOnlyStyle}
        type="checkbox"
        aria-checked={isChecked}
        value={value}
      />
      <CheckIcon size="14px" color="white" />
    </Box>
  );
}

const positionStyles = {
  end: {
    box: {
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
    checkbox: {
      marginStart: 'sm',
    },
  },
  start: {
    box: {},
    checkbox: {
      marginEnd: 'sm',
    },
  },
};

function Option(props: any) {
  const { children, innerProps, isSelected, isFocused, selectProps, value } =
    props;
  const checkboxPosition =
    selectProps?.checkboxPosition === 'end' ? 'end' : 'start';

  return (
    <Box
      display="flex"
      paddingX="sm"
      minHeight="34px"
      alignItems="center"
      bg={isFocused ? 'gray.50' : 'white'}
      cursor="pointer"
      wordBreak="break-word"
      {...positionStyles[checkboxPosition].box}
      _active={{
        bg: 'gray.100',
      }}
      {...innerProps}
    >
      <Checkbox
        optionId={`${innerProps.id}-input`}
        value={value}
        isChecked={isSelected}
        {...positionStyles[checkboxPosition].checkbox}
      />
      {children}
    </Box>
  );
}

function MultiValue(props: any) {
  const { index, children } = props;
  return (
    <Box>
      {index > 0 && ', '}
      {children}
    </Box>
  );
}

function ValueContainer(props: any) {
  const { children, ...rest } = props;
  const filteredValues = rest.selectProps.allOption
    ? rest
        .getValue()
        .filter(
          (option: any) => option.value !== rest.selectProps.allOption.value
        )
    : rest.getValue();

  /* used internally to maintain focus and keyboard nav */
  const inputFromReactSelect = children?.[1];

  /**
   * Customize the value container from outside using renderControlValue(values, placeholder)
   */
  if (rest.selectProps.renderControlValue) {
    const valueArray = filteredValues.map((value: any) => value.label);

    return (
      <components.ValueContainer {...rest}>
        <Flex w="100%">
          {rest.selectProps.renderControlValue(
            valueArray,
            rest.selectProps.placeholder
          )}
          {inputFromReactSelect}
        </Flex>
      </components.ValueContainer>
    );
  }

  /**
   * Render the default value container. Show all the values comma separated
   */
  return (
    <components.ValueContainer {...rest}>
      <Flex w="100%">
        <Text>
          {filteredValues.length
            ? filteredValues.map((value: any, index: number) => {
                return `${index > 0 ? ', ' : ''}${value.label}`;
              })
            : rest.selectProps.placeholder}
        </Text>
        {inputFromReactSelect}
      </Flex>
    </components.ValueContainer>
  );
}

type SingleOption = {
  label: string;
  value: string;
};

interface MultiSelectProps
  extends Omit<SelectProps, 'defaultValue' | 'value' | 'onChange'> {
  defaultValue?: string[];
  value?: string[];
  onChange?: (values: string[], meta: ActionMeta<any>) => void;
  /** SSR: A unique instance id for this select */
  id: string;
  /** Position of the checkbox for single option. Default: start */
  checkboxPosition?: 'start' | 'end';

  /** Show the "All" option to select/deselect all the options */
  allOption?: SingleOption;
  /** Render custom values inside the value container */
  renderControlValue?: (
    values: string[],
    placeholder: string
  ) => React.ReactNode;
}

export const MultiSelect = (props: MultiSelectProps) => {
  const { options, id, allOption, value, defaultValue } = props;
  const { getItemValue, getValue } = multiSelectMiddleware(options);
  const mergedOptions = allOption ? [allOption, ...options] : options;

  const getSelectedOptions = (values?: string[]) =>
    allOption && values?.length === options.length
      ? mergedOptions
      : getValue(values);

  const [selectedOptions, setSelectedOptions] = React.useState(
    getSelectedOptions(value)
  );

  React.useEffect(() => {
    setSelectedOptions(getSelectedOptions(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Select
      {...props}
      options={mergedOptions}
      instanceId={id}
      isSearchable={!!props.isSearchable}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      blurInputOnSelect={false}
      tabSelectsValue={false}
      defaultValue={getSelectedOptions(defaultValue)}
      value={selectedOptions}
      onChange={(values, meta) => {
        const _values = values as any[];
        if (allOption) {
          let newSelectedOptions: any[] = [];
          if (meta.option.value === allOption.value) {
            /**
             * Check if allOption is selected:
             * 1. If checked: Select all the options
             * 2. If unchecked: Deselect all the options
             */
            newSelectedOptions =
              meta?.action === 'select-option' ? mergedOptions : [];
          } else if (_values.length === options.length) {
            /**
             * Check if options count is equal to count of selected values:
             * 1. If due to checked option: Select all the options
             * 2. If due to unchecked option: Deselect allOption as well
             */
            newSelectedOptions =
              meta.action === 'select-option'
                ? mergedOptions
                : _values.filter(
                    (option: SingleOption) => option.value !== allOption.value
                  );
          } else {
            newSelectedOptions = _values;
          }
          /* Filter the options to remove allOption before sending to onChange prop */
          /* Local state contains everything, only the onChange receives the valid options */
          const filteredOptions = newSelectedOptions.filter(
            (option: SingleOption) => option.value !== allOption.value
          );
          setSelectedOptions(newSelectedOptions);
          props.onChange?.(getItemValue(filteredOptions), meta);
          return;
        }

        setSelectedOptions(values);
        props.onChange?.(getItemValue(_values), meta);
      }}
      components={{
        Option,
        MultiValue,
        ClearIndicator: null,
        IndicatorSeparator: null,
        ValueContainer,
      }}
      delimiter=","
      styles={styles}
      isMulti
    />
  );
};
