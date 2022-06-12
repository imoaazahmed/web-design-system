declare module 'react-country-flag' {
  import * as React from 'react';

  export default function CountryFlag(
    props: ReactCountryFlagProps
  ): React.ReactElement;

  export interface ReactCountryFlagProps {
    countryCode: string;
    style?: React.CSSProperties;
    svg?: boolean;
  }
}
