import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const FurnitureIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 26 26', ...props }}>
      <path
        d="M13.755.867v1.48H25.85v.001l-.035 1.081h-1.5v14.968h-9.5l6.27 6.208-1.055 1.032-6.285-6.193v6.044h-1.5v-6.044L5.97 25.647l-1.055-1.042 6.235-6.208h-9.5V3.429H.15V2.347h12.105V.867h1.5zm9.555 2.562H2.67v13.892h20.64V3.429zM9.22 11.306v2.988H7.71v-2.988h1.51zm3.025 1.121v1.867h-1.51v-1.867h1.51zm3.02-2.613v4.479h-1.51V9.814h1.51zm3.025-3.358v7.837h-1.51V6.456h1.51z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};
