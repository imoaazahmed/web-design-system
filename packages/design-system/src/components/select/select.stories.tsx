import { Box, Stack, Text } from '@chakra-ui/react';
import { actions, withActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import {
  CountrySelect,
  DrawerSelect,
  MultiSelect,
  PlainSelect,
  PlainSelectContainer,
  PlainSelectLabel,
  PlainSelectWrapper,
  Select,
  SelectV2,
  SingleSelect,
  MultiSearchableSelect,
} from '.';
import Input from '../input/input';
import { withContainer } from '../story-container';
import PhoneCodeSelect from './phone-code-select';
export default {
  title: 'CHAKRA/Select',
  decorators: [withContainer, withKnobs, withActions],
};

const options = [
  {
    label: 'Cecil Abshire',
    value: 'International Group Associate',
  },
  {
    label: 'Adrain Lueilwitz',
    value: 'Senior Assurance Architect',
  },
  {
    label: 'Caden Smitham',
    value: 'Direct Optimization Engineer',
  },
  {
    label: 'Paula Kuhic',
    value: 'Future Creative Producer',
  },
  {
    label: 'Stewart Schroeder',
    value: 'Senior Group Director',
  },
  {
    label: 'Rosa Waters',
    value: 'Central Usability Liaison',
  },
  {
    label: 'Sydney Johnston Jr.',
    value: 'Legacy Tactics Assistant',
  },
  {
    label: 'Dianna Purdy',
    value: 'Principal Interactions Specialist',
  },
  {
    label: 'Aurelio Smith',
    value: 'Dynamic Division Technician',
  },
  {
    label: 'Cathy Schaefer',
    value: 'Product Optimization Engineer',
  },
  {
    label: 'Ward Turner',
    value: 'Human Mobility Executive',
  },
];

export const SelectVersion2 = () => (
  <Box>
    <SelectV2
      defaultMenuIsOpen
      id="anything"
      defaultValue="Human Mobility Executive"
      placeholder={'Select option'}
      options={options}
      onChange={console.log}
    />

    <br />
    <Input placeholder="Select..." />
    <br />
    <SingleSelect
      id="example-1"
      options={options}
      onChange={console.log}
      defaultValue="vanilla"
    />
  </Box>
);

export const singleSelect = () => (
  <Stack isInline mb="lg">
    <Input placeholder="Select..." flex="1" />
    <SingleSelect
      id="example-1"
      options={options}
      onChange={console.log}
      defaultValue="vanilla"
    />
  </Stack>
);

export const autocompleteSelect = () => (
  <Stack isInline>
    <Input placeholder="Select..." flex="1" />
    <SingleSelect id="example-1" options={options} variant="autoComplete" />
  </Stack>
);

export const htmlSelect = () => (
  <Stack isInline>
    <Input placeholder="Select..." />
    <Select placeholder="Select...">
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Select>
  </Stack>
);

export const multiSelect = () => (
  <Box>
    <Box mb="lg">
      <Text fontWeight="bold" mb="sm">
        Base Multi Select
      </Text>
      <MultiSelect
        id="example-2"
        options={options}
        onChange={console.log}
        defaultValue={['vanilla', 'chocolate']}
      />
    </Box>

    <Box mb="lg">
      <Text fontWeight="bold" mb="sm">
        Searchable Multi Select
      </Text>
      <MultiSearchableSelect
        id="example-2"
        options={options}
        onChange={console.log}
        defaultValue={['vanilla', 'chocolate']}
      />
    </Box>
    <Box mb="lg">
      <Text fontWeight="bold" mb="sm">
        Multi Select with "Select All" and custom value container (Ex. option
        one +2)
      </Text>
      <MultiSelect
        id="example-2"
        checkboxPosition="end"
        allOption={{ label: 'All', value: 'all' }}
        options={options}
        onChange={console.log}
        renderControlValue={(values, placeholder) => {
          const remainingCount = values.length - 1;

          return (
            <>
              <Text isTruncated marginEnd="xs">
                {values[0] ?? placeholder}
              </Text>
              {remainingCount > 0 && <Text>{`+${remainingCount}`}</Text>}
            </>
          );
        }}
      />
    </Box>
    <Box mb="lg">
      <Text fontWeight="bold" mb="sm">
        Multi Select with "Select All" and custom value container (Ex.
        placeholder (3))
      </Text>
      <MultiSelect
        id="example-2"
        checkboxPosition="end"
        allOption={{ label: 'All', value: 'all' }}
        options={options}
        onChange={console.log}
        placeholder="Custom Placeholder"
        renderControlValue={(values, placeholder) => {
          if (values.length > 0) {
            return values.length === 1 ? (
              <Text isTruncated>{values[0]}</Text>
            ) : (
              <>
                <Text isTruncated marginEnd="xs">
                  {placeholder}
                </Text>
                <Text>({values.length})</Text>
              </>
            );
          }

          return <Text isTruncated>{placeholder}</Text>;
        }}
      />
    </Box>
  </Box>
);

const countrySelectActions = actions('onChange');

export const countrySelect = () => (
  <CountrySelect id="example-3" {...countrySelectActions} />
);

export const phoneCodeSelect = () => (
  <Box w="150px">
    <PhoneCodeSelect id="example-3" {...countrySelectActions} />
  </Box>
);

export const BugFix = () => {
  const [supplier, setSupplier] = React.useState('');
  return (
    <>
      <SingleSelect
        id="supplier-list-1"
        isSearchable
        placeholder={'Select Supplier Company'}
        value={supplier}
        options={options}
        onChange={(opt: any) => {
          setSupplier(opt);
        }}
      />
      <button
        onClick={() => {
          setSupplier(null);
        }}
      >
        Reset
      </button>
    </>
  );
};

export const plainSelect = () => (
  <Stack isInline spacing="40px">
    <PlainSelectWrapper minW="209px">
      <PlainSelectLabel>Default:</PlainSelectLabel>
      <PlainSelectContainer>
        <PlainSelect
          id="example-3"
          options={options}
          onChange={console.log}
          defaultValue="vanilla"
        />
      </PlainSelectContainer>
    </PlainSelectWrapper>
    <PlainSelectWrapper minW="209px">
      <PlainSelectLabel marginEnd="2xs">Outline:</PlainSelectLabel>
      <PlainSelectContainer variant="outline">
        <PlainSelect
          id="example-4"
          variant="outline"
          options={options}
          onChange={console.log}
          defaultValue="vanilla"
        />
      </PlainSelectContainer>
    </PlainSelectWrapper>
  </Stack>
);

export const drawerSelect = () => (
  <Stack isInline>
    <DrawerSelect
      options={options}
      onChange={console.log}
      defaultValue="vanilla"
      heading="Select your fav candy"
    >
      <button>Drawer trigger</button>
    </DrawerSelect>
  </Stack>
);
