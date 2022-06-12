import { ChangeEvent, useEffect, useState } from 'react';

export type MultiSelectValueType = {
  label: string;
  value: string;
  count?: number;
}[];

export type UseFilterStateProps = {
  /**
   * List of all checkbox options in the filter
   */
  options: MultiSelectValueType;
  /**
   * List of selected checkbox options that inside the options list
   */
  value?: string[];
  /**
   * Function gets called when any checkbox is selected or de-selected
   */
  onChange?: (value: string[]) => void;
  /**
   * Maximum number of options
   */
  maxVisible?: number;
  /**
   * Sort unselected options alphabetically when user select any option
   * default value: true
   */
  shouldSortOptions?: boolean;
  /**
   * show count for each option
   * default value: false
   */
  showCount?: boolean;
};

const getSlicedOptions = (
  options: MultiSelectValueType,
  maxOptions: number
) => {
  const optionsExceed = options.length > maxOptions;
  return optionsExceed ? options.slice(0, maxOptions) : options;
};

type GetSortedOptions = (
  options: MultiSelectValueType,
  values: string[],
  shouldSortOptions: boolean
) => MultiSelectValueType;

const getSortedOptions: GetSortedOptions = (
  options,
  values,
  shouldSortOptions
) => {
  // sort all options
  const sortedOptions = shouldSortOptions
    ? options
        .concat()
        .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0))
    : options;

  // create set from selected options
  const valuesSet = new Set(values);

  const checkedOptions = [];
  const nonCheckedOptions = [];

  // put selected sorted options on the top of the array
  for (const item of sortedOptions) {
    if (valuesSet.has(item.value)) {
      checkedOptions.push(item);
    } else {
      nonCheckedOptions.push(item);
    }
  }

  return checkedOptions.concat(nonCheckedOptions);
};

export function useFilterState(props: UseFilterStateProps) {
  const {
    options = [],
    value = [],
    onChange,
    maxVisible = 10,
    shouldSortOptions = true,
  } = props;
  const [maxOptions, setMaxOptions] = useState(maxVisible);
  const [values, setValues] = useState<string[]>(value);
  const [finalOptions, setFinalOptions] = useState<MultiSelectValueType>(
    options
  );
  const [optionsExceed, setOptionsExceed] = useState(false);

  const changeValues = () => {
    let newOptions = options;

    if (values.length && options.length > maxVisible) {
      newOptions = getSortedOptions(options, values, shouldSortOptions);
    }

    if (options.length > maxVisible) {
      newOptions = getSlicedOptions(newOptions, maxOptions);
    }

    setFinalOptions(newOptions);

    setOptionsExceed(options.length > maxOptions);
  };

  useEffect(changeValues, [maxOptions, maxVisible, values, options, shouldSortOptions]);

  const handleViewMore = () => setMaxOptions(maxOptions + maxVisible);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const newOptions = options.filter(option =>
      option?.label?.toString().toLowerCase().includes(value.toLowerCase())
    );

    if (!value) {
      changeValues();
      return;
    }

    //remove slicing / sorting when filtering
    setFinalOptions(newOptions);
    setOptionsExceed(false);
  };

  const handleChange = (value: (string | number | undefined)[]) => {
    setValues(value as string[]);
    onChange?.(value as string[]);
  };

  return {
    data: finalOptions,
    values,
    handleViewMore,
    handleSearch,
    optionsExceed,
    handleChange,
  };
}
