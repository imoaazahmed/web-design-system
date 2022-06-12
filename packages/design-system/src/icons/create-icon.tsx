import React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';

type CreateIconOptions = {
  viewBox: string;
  path?: React.ReactElement;
  d?: string;
  name?: string;
};

function createIcon(options: CreateIconOptions) {
  const { viewBox, d: pathDefinition, path, name } = options;

  const Icon = (props: BoxProps & { size?: any }) => {
    const { size = '1em', ...rest } = props;
    return (
      <Box as="svg" boxSize={size} {...{ viewBox, ...rest }}>
        {path ?? <path fill="currentColor" d={pathDefinition} />}
      </Box>
    );
  };

  Icon.displayName = name;

  return Icon;
}

export default createIcon;
