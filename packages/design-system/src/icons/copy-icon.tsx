import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const CopyIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 19 20', ...props }}>
      <path
        d="M17.279.44H6.528c-.79 0-1.432.64-1.432 1.431v3.585h-2.87c-.79 0-1.431.642-1.431 1.433V18.35a1.434 1.434 0 001.432 1.437h10.75c.381 0 .746-.151 1.015-.42.269-.27.419-.636.418-1.017v-3.58h2.869c.79 0 1.432-.641 1.432-1.432V1.85A1.432 1.432 0 0017.279.44zm-4.302 17.91H2.227V6.89h10.75v11.46zm4.302-5.012h-2.87V6.172a.716.716 0 00-.706-.716H6.528V1.851h10.75v11.487h.001z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};
