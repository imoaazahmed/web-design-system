import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const UniformsIcon = (props: BoxProps) => {
  return (
    <Box
      as="svg"
      fill="currentColor"
      size="1em"
      {...{ viewBox: '0 0 100 100', ...props }}
    >
      <path d="M78.37,16.54a5.45,5.45,0,0,0-1.56-.23v.05l-8.75-2.54a1.24,1.24,0,0,0-1.51.75l-3,7.73C60.32,24.85,55,26.49,50,26.49s-10.22-1.61-13.47-4.11l-3-7.81a1.24,1.24,0,0,0-1.51-.75l-8.75,2.54v-.05a5.39,5.39,0,0,0-1.55.23,5.49,5.49,0,0,0-3.92,5.24V80.9a5.47,5.47,0,0,0,5.47,5.46H76.81a5.47,5.47,0,0,0,5.47-5.46V21.78A5.5,5.5,0,0,0,78.37,16.54Zm-9.91,0,8,2.33L73.56,34.16l-20,20.93ZM60.15,57.09H74.26v8.38A1.55,1.55,0,0,1,72.72,67h-11a1.55,1.55,0,0,1-1.55-1.55V57.09Zm14.11-2.5H60.15v-2H74.26ZM50,29A27.29,27.29,0,0,0,62,26.19L50,57.26l-12-31A27.35,27.35,0,0,0,50,29ZM31.54,16.54,46.48,55.09l-20-20.93L23.5,18.87ZM20.22,80.9V21.78a3,3,0,0,1,.89-2.11L24.06,35a1.16,1.16,0,0,0,.32.63L48.75,61.08V83.86H23.19A3,3,0,0,1,20.22,80.9Zm59.56,0a3,3,0,0,1-3,3H51.25V61.08l6.4-6.69V65.47a4.06,4.06,0,0,0,4.05,4h11a4.05,4.05,0,0,0,4-4V51.34a1.25,1.25,0,0,0-1.25-1.25H61.77L75.62,35.62a1.16,1.16,0,0,0,.32-.63l3-15.33a3,3,0,0,1,.89,2.12Z" />
    </Box>
  );
};