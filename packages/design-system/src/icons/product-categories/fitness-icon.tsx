import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const FitnessIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 30 20', ...props }}>
      <path
        d="M18 19.259c-.276 0-.5-.22-.5-.494 0-.272.224-.493.5-.493h1.5v-6.42H10v6.42h1.5c.276 0 .5.22.5.493a.497.497 0 01-.5.494h-7c-.276 0-.5-.22-.5-.494 0-.272.224-.493.5-.493H6v-.99l-1 .001c-.552 0-1-.441-1-.987v-1.481H3c-.552 0-1-.442-1-.988v-1.975H1c-.552 0-1-.442-1-.988V8.889a.994.994 0 011-.988h1V5.926a.994.994 0 011-.988h1V2.963a.994.994 0 011-.988l1-.001V.988A.994.994 0 017 0h2c.552 0 1 .442 1 .988v6.913h9.5V.988a.994.994 0 011-.988h2c.552 0 1 .442 1 .988v.986l1 .001c.552 0 1 .442 1 .988v1.975h1c.552 0 1 .442 1 .988v1.975H29c.552 0 1 .442 1 .988v1.975a.994.994 0 01-1 .988h-1.5v1.975a.994.994 0 01-1 .988h-1v1.481a.994.994 0 01-1 .988v-.001l-1-.001v.99H25c.276 0 .5.22.5.493a.497.497 0 01-.5.494h-7zm-15-.987c.276 0 .5.22.5.493a.497.497 0 01-.5.494h-.5c-.276 0-.5-.22-.5-.494 0-.272.224-.493.5-.493H3zm24 0c.276 0 .5.22.5.493a.497.497 0 01-.5.494h-.5c-.276 0-.5-.22-.5-.494 0-.272.224-.493.5-.493h.5zM9 .988H7v17.284h2V.988zm13.5 0h-2v17.284h2V.988zM6 2.963H5v13.333h1V2.963zm18.5 0h-1v13.333h1V2.963zM4 5.926H3v7.901h1V5.926zm22.5 0h-1v7.901h1V5.926zM2 8.889H1v1.975h1V8.889zm17.5 0H10v1.975h9.5V8.889zm9.5 0h-1.5v1.975H29V8.889z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};
