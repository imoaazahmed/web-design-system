import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const StationeryIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 19 26', ...props }}>
      <path
        d="M3.865.857A1.995 1.995 0 001.96 2.264H.69a.584.584 0 00-.5.563v7.901c.02.293.258.526.555.543.3 0 .575-.271.105-.573V2.935h1v8.336a.563.563 0 00.285.494v13.333c.01.307.26.553.57.563h2.85c.318 0 .58-.249.59-.563V11.765a.577.577 0 00.29-.494V2.827a1.988 1.988 0 00-2-1.976l-.57.005v.001zm5.9 0a.572.572 0 00-.425.325l-1.715 3.67a.588.588 0 00-.05.241v20.005c.01.307.26.553.57.563h3.42c.31-.01.56-.256.57-.563V5.084a.59.59 0 00-.05-.242l-1.715-3.66a.59.59 0 00-.605-.325zm4.085 0a.586.586 0 00-.57.562v23.68c.02.298.267.533.57.543h4c.3-.015.54-.248.56-.544V1.419a.118.118 0 000-.059.588.588 0 00-.57-.494L13.85.857zm-9.7.676c1.12 0 1.385.094 1.605.73v8.89H2.54v-8.89c.16-.612 1.05-.76 1.61-.73zm9.87 0h3.715V24.97h-3.78v-2.143h1.605c.315 0 .57-.252.57-.563a.566.566 0 00-.57-.563h-1.605v-2.529h1.605c.315 0 .57-.252.57-.563a.566.566 0 00-.57-.562h-1.605v-2.544h1.605c.315 0 .57-.252.57-.563a.567.567 0 00-.57-.563h-1.605v-2.538h1.605c.315 0 .57-.252.57-.563a.567.567 0 00-.57-.563h-1.605V8.18h1.605c.315 0 .57-.252.57-.563a.566.566 0 00-.57-.563h-1.605V4.521h1.605a.578.578 0 00.542-.267.561.561 0 000-.598.577.577 0 00-.542-.266H14l.02-1.857zm-4.165.252l1.405 3.022H8.38l1.475-3.022zm-1.6 3.689h3.205V24.97H8.255V5.474zM2.83 11.809h2.64v13.156H2.83V11.809z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};
