import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import React from 'react';

export const ErrorIcon = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg width="18" height="18" viewBox="0 0 18 18" {...props}>
    <g stroke="currentColor" fill="none" fillRule="evenodd">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 0L6 6M6 0L0 6"
        transform="translate(6 6)"
      />
      <circle cx="9" cy="9" r="8.5" />
    </g>
  </chakra.svg>
);

export const WarningTriangleIcon = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg width="17" height="16" viewBox="0 0 17 16" {...props}>
    <g fill="none" fillRule="evenodd">
      <ellipse
        cx="8.5"
        cy="12.571"
        fill="currentColor"
        fillRule="nonzero"
        rx="1.133"
        ry="1.143"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 5.714L8.5 9.714M.567 15.429L8.5.571 16.433 15.429z"
      />
    </g>
  </chakra.svg>
);

export const SuccessIcon = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg width="18" height="18" viewBox="0 0 18 18" {...props}>
    <g
      stroke="currentColor"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 4L2.182 6 8 0" transform="translate(5 6)" />
      <circle cx="9" cy="9" r="8.5" />
    </g>
  </chakra.svg>
);

export const WarningIcon = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg height="18" width="18" viewBox="0 0 18 18" {...props}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(8 4)">
        <circle cx="1" cy="10" r="1" fill="currentColor" fillRule="nonzero" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1 0L1 7"
        />
      </g>
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
    </g>
  </chakra.svg>
);
