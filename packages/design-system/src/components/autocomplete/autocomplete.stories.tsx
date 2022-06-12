import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteOptionGroup,
  AutocompleteRecentOption,
  AutocompleteDropdown,
  AutocompleteOption,
  AutocompleteClearButton,
  AutocompleteSearchButton,
  AutocompleteSearchIcon,
  AutocompleteSpinner,
  AutocompleteAddon,
} from './autocomplete';
import { withContainer } from '../story-container';
import { Button } from '../button';

export default {
  title: 'CHAKRA/Autocomplete',
  decorators: [withContainer],
};

const recent = [
  { label: 'salad cream', value: 'salad-cream' },
  { label: 'doughnuts', value: 'doughnuts-value' },
  { label: 'chairs', value: 'chairs' },
];

const data = [
  { label: 'cream caramel', value: 'cream-caramel' },
  { label: 'desert cream', value: 'desert-caramel' },
  { label: 'spray cream, hopla, whipping cream', value: 'spray-cream' },
  { label: 'whipping cream', value: 'whipping-cream' },
  { label: 'cooking cream', value: 'cooking-cream' },
];

const LeftComponent = () => {
  return (
    <Button variant="default" roundedBottomEnd={0} roundedTopEnd={0}>
      Products
    </Button>
  );
};

const RightComponent = () => {
  return (
    <>
      <AutocompleteSpinner insetEnd="160px" />
      <AutocompleteClearButton pos="absolute" insetEnd="120px" top={'8px'} />
      <AutocompleteSearchButton>
        <AutocompleteSearchIcon marginEnd="xs" />
        Search
      </AutocompleteSearchButton>
    </>
  );
};

const Component = ({ isMobile }: any) => {
  const dropdownHash: Record<string, string> = {};

  const dropdownItems = data.concat(recent);

  dropdownItems.forEach(item => {
    // {'Cream Cheese': 'cream-cheese'}
    dropdownHash[item.label] = item.value;
  });

  const handleSelect = (label: string) => {
    console.log(dropdownHash[label]);
  };

  return (
    <Autocomplete
      isMobile={isMobile}
      onSelect={handleSelect}
      onSubmit={console.log}
    >
      <AutocompleteAddon>
        <LeftComponent />
      </AutocompleteAddon>

      <AutocompleteInput>
        <AutocompleteDropdown>
          {recent && recent.length > 0 && (
            <AutocompleteOptionGroup title="Recent Search">
              {recent.map(option => (
                <AutocompleteRecentOption
                  key={option.value}
                  value={option.label}
                />
              ))}
            </AutocompleteOptionGroup>
          )}
          {data.map(option => (
            <AutocompleteOption key={option.value} value={option.label} />
          ))}
        </AutocompleteDropdown>
      </AutocompleteInput>

      <AutocompleteAddon>
        <RightComponent />
      </AutocompleteAddon>
    </Autocomplete>
  );
};

export const Basic = () => {
  return (
    <>
      <Box>
        <Text mb="md">Desktop version</Text>
        <Component />
      </Box>

      <Box mt="40px">
        <Text mb="md">Mobile version</Text>
        <Component isMobile />
      </Box>
    </>
  );
};
