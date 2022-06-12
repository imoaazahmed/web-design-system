import React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const StoryContainer = (props: BoxProps) => (
  <Box maxW="800px" mx="auto" padding="xl" minH="90vh" {...props} />
);

export const withContainer = (story: Function) => (
  <StoryContainer>{story()}</StoryContainer>
);

export const GrayBg = () => (
  <Global
    styles={(theme: any) => ({
      body: {
        background: theme.colors.gray['50'],
      },
    })}
  />
);

export const WithGrayBg: React.FC = ({ children }) => (
  <>
    <GrayBg />
    {children}
  </>
);
