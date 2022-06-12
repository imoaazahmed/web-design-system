import React from 'react';
import { CountryFlag } from '.';
import { SimpleGrid } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/CountryFlag',
};

const data = ['CN', 'NG', 'AE', 'US', 'JP', 'SA'];

/**
 * The country flag component takes `countryCode` props
 * and all chakra `Box` props
 */
export const basic = () => (
  <SimpleGrid
    spacing="xl"
    columns={3}
    bg="gray.100"
    padding="lg"
    justifyItems="center"
  >
    {data.map(code => (
      <CountryFlag
        countryCode={code}
        height="30px !important"
        width="30px !important"
      />
    ))}
    {data.map(code => (
      <CountryFlag countryCode={code} />
    ))}
  </SimpleGrid>
);
