import { Flex, Box } from '@chakra-ui/react';
import { getCodeList } from 'country-list';
import React, { useState } from 'react';
import { Text } from '../typography';
import {
  AutocompleteClearButtonV2,
  AutocompleteInputV2,
  AutocompleteMenuV2,
  AutocompleteOptionGroupV2,
  AutocompleteOptionV2,
  AutocompleteSubmitButtonV2,
  AutocompleteV2,
} from './autocomplete-v2';
import { Button } from '../button';

export default {
  title: 'CHAKRA/Autocomplete v2',
};

const options = Object.entries(getCodeList()).map(([countryCode, country]) => ({
  label: `${country} (${countryCode.toUpperCase()})`,
  value: country,
}));

export function TestImplementation() {
  const [val, setVal] = useState('');

  const [outputVal, setOutputVal] = useState('');

  const opts = options.filter(option => {
    return option.label.toLowerCase().startsWith(val.toLowerCase());
  });

  const log = (key: string) => (val: any) =>
    setOutputVal(`Output: ${key} - ${JSON.stringify(val)}`);

  return (
    <Box p={'100px'}>
      <Text mb="lg-alt">{outputVal}</Text>
      <AutocompleteV2
        autoComplete
        // autoSelect
        selectOnFocus
        openOnFocus
        onSelect={log('onSelect')}
        onSubmit={log('onSubmit')}
      >
        <Flex maxW="500px" align="center">
          <AutocompleteInputV2
            onChange={e => {
              setVal(e.target.value);
            }}
          />
          <AutocompleteClearButtonV2 />
          <AutocompleteSubmitButtonV2>Search</AutocompleteSubmitButtonV2>
        </Flex>
        <AutocompleteMenuV2>
          <Button>Test Focus</Button>
          {opts.length > 0 ? (
            <AutocompleteOptionGroupV2 title="Values">
              {opts.map(option => (
                <AutocompleteOptionV2
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </AutocompleteOptionGroupV2>
          ) : (
            <Text size="sm" padding="xs">
              No Options available
            </Text>
          )}
          <AutocompleteOptionGroupV2 title="Sellers" mt="3">
            <AutocompleteOptionV2 label="Nestle" value={{ z: '123' }} />
            <AutocompleteOptionV2 label="Kellogs" value="kellogs" />
            <AutocompleteOptionV2 label="Milo" value="milo" />
          </AutocompleteOptionGroupV2>
        </AutocompleteMenuV2>
      </AutocompleteV2>
    </Box>
  );
}
