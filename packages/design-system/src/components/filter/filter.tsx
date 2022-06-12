import * as React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionProps,
  Box,
  BoxProps,
  CheckboxGroup,
  CheckboxGroupProps,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Combobox } from '@reach/combobox';
import { BaseAutocompleteInput } from '../autocomplete';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { Text, TextProps } from '../typography';
import {
  MultiSelectValueType,
  useFilterState,
  UseFilterStateProps,
} from './filter.utils';
import { useIsRTL } from '../theme-provider';

const txtLocalization = {
  placeholder: {
    ar: 'ابحث عن ما تريد...',
    en: 'Search for anything...',
  },
  button: {
    ar: 'عرض المزيد',
    en: 'View more',
  },
};

export type FilterGroupProps = AccordionProps;

export const FilterGroup = (props: FilterGroupProps) => {
  return (
    <Accordion
      allowMultiple
      defaultIndex={[0]}
      maxW="300px"
      mx="auto"
      {...props}
    />
  );
};

export type FilterProps = AccordionItemProps & { title?: string };

export const FilterHeading = (props: TextProps) => {
  return <Text fontWeight="bold" flex="1" color="gray.800" {...props} />;
};

export const Filter = (props: FilterProps) => {
  const { children, title, ...rest } = props;
  return (
    <AccordionItem
      _first={{ borderTop: 0 }}
      _last={{ borderBottom: 0 }}
      py="lg"
      {...rest}
    >
      <AccordionButton padding="0" borderRadius="md" textAlign="start">
        <FilterHeading>{title}</FilterHeading>
        <AccordionIcon w="24px" h="24px" />
      </AccordionButton>
      <AccordionPanel mt="md" padding="0">
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export type FilterCheckboxGroupProps = CheckboxGroupProps & {
  options: MultiSelectValueType;
  showCount?: boolean;
};

export const FilterCheckboxGroup = (props: FilterCheckboxGroupProps) => {
  const { options, showCount = false, ...rest } = props;
  return (
    <CheckboxGroup {...rest}>
      <Stack spacing="sm">
        {options.map(option => (
          <Checkbox
            css={{
              span: { marginStart: '0.5rem', fontSize: 14, flexGrow: 0 },
              'input:checked ~ span': { fontWeight: 'bold' },
            }}
            cursor="pointer"
            value={option.value}
            key={option.value}
          >
            {option.label}
            {showCount && option.count && (
              <Text
                size="sm"
                color="gray.600"
                display="inline-block"
                marginStart="xs"
              >
                ({option.count})
              </Text>
            )}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export type FilterSearchInputProps = BoxProps;

export const FilterSearchInput = (props: FilterSearchInputProps) => {
  const { placeholder, onChange, ...rest } = props;
  return (
    <Combobox>
      <InputGroup mt="xs">
        <BaseAutocompleteInput
          paddingStart="lg-alt"
          marginBottom="md"
          onChange={onChange}
          placeholder={placeholder}
          bg="#f2f2f2"
          border="1px"
          borderColor="#f2f2f2"
          css={{
            ':focus': {
              background: 'white',
              border: '1px solid #000',
              boxShadow: 'none',
            },
          }}
        />
        <InputLeftElement pointerEvents="none">
          <Search2Icon
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            insetStart="10px"
          />
        </InputLeftElement>
      </InputGroup>
    </Combobox>
  );
};

export const FilterApplyButton = (props: any) => {
  const { children = 'Apply', onClick, isDisabled, ...rest } = props;
  return (
    <Box paddingX="lg" paddingY="md" {...rest}>
      <Button width="100%" onClick={onClick} isDisabled={isDisabled}>
        {children}
      </Button>
    </Box>
  );
};

export const FilterLinkGroup = (props: any) => {
  const { title, children, ...rest } = props;
  return (
    <Box {...rest}>
      {title && <FilterHeading>{title}</FilterHeading>}
      <Stack mt="md" align="flex-start" spacing="sm">
        {children}
      </Stack>
    </Box>
  );
};

export const FilterLink = (props: any) => {
  return (
    <Link
      fontWeight="normal"
      textAlign="start"
      minWidth="unset"
      cursor="pointer"
      _hover={{ color: 'blue.600', textDecoration: 'underline' }}
      _focus={{ color: 'blue.600', textDecoration: 'underline' }}
      fontSize="md"
      as="a"
      {...props}
    />
  );
};

export const FilterMultiSelect = (props: UseFilterStateProps) => {
  const isRtl = useIsRTL();
  const lang = isRtl ? 'ar' : 'en';

  const {
    value = [],
    options = [],
    showCount = false,
    onChange,
    maxVisible,
    shouldSortOptions,
  } = props;
  const {
    data,
    values,
    handleViewMore,
    handleSearch,
    optionsExceed,
    handleChange,
  } = useFilterState({
    options,
    value,
    onChange,
    maxVisible,
    shouldSortOptions,
  });

  return (
    <Box>
      <FilterSearchInput
        placeholder={txtLocalization.placeholder[lang]}
        onChange={handleSearch}
      />
      <FilterCheckboxGroup
        options={data}
        value={values}
        onChange={handleChange}
        showCount={showCount}
      />
      {optionsExceed && (
        <Button
          onClick={handleViewMore}
          size="md"
          variant="link"
          mt="lg"
          color="gray.800"
        >
          {txtLocalization.button[lang]}
        </Button>
      )}
    </Box>
  );
};
