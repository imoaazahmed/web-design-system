import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { chakra, ChakraProps } from '@chakra-ui/react';

export interface CountryFlagProps extends ChakraProps {
  /**
   * The 2 letter country code
   * @example `AE`, `CN`
   */

  countryCode: string;
  /**
   * If `true`, will show the flag as `svg`, else it'll show
   * as a `png` image
   */
  svg?: boolean;
}
const Flag = chakra(ReactCountryFlag);

export const CountryFlag = (props: CountryFlagProps) => {
  const { countryCode, svg = true, ...rest } = props;
  return (
    <Flag
      countryCode={countryCode}
      svg={svg}
      height="20px !important"
      width="20px !important"
      borderRadius="100%"
      objectFit="cover"
      {...rest}
    />
  );
};
