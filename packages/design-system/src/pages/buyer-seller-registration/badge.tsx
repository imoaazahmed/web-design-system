import * as React from 'react';
import { BoxProps, Box } from '@chakra-ui/react';

type SVGProps = React.SVGAttributes<SVGSVGElement>;

const CompanyIcon = (props: SVGProps) => (
  <svg viewBox="0 0 80 80" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M80 40c0 22.091-17.909 40-40 40C17.908 80 0 62.091 0 40S17.908 0 40 0c22.091 0 40 17.909 40 40"
        fill="#4164A5"
      />
      <path
        d="M77.367 40.033H71.44c0-17.427-14.178-31.605-31.605-31.605V2.502c20.694 0 37.53 16.837 37.53 37.53"
        fill="#7C9FDC"
      />
      <path
        d="M39.836 77.564v-5.926c17.427 0 31.605-14.178 31.605-31.605h5.926c0 20.694-16.837 37.53-37.531 37.53"
        fill="#34528A"
      />
      <path
        d="M39.836 77.564c-20.695 0-37.531-16.837-37.531-37.531H8.23c0 17.427 14.178 31.605 31.605 31.605v5.926z"
        fill="#7C9FDC"
      />
      <path
        d="M8.23 40.033H2.306c0-20.694 16.836-37.531 37.53-37.531v5.926c-17.426 0-31.604 14.178-31.604 31.605"
        fill="#34528A"
      />
      <g stroke="#fff">
        <path
          d="M36.47 39.059V24m6.589 0v15.059"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M29.882 33.412h19.765-19.765zm0 7.53h19.765-19.765zM49.647 24v32H29.882V24h19.765z"
          strokeWidth="2.5"
        />
        <path
          d="M25 56h11.421v-4.21a3.369 3.369 0 016.737 0V56H55 25z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

const DocIcon = (props: SVGProps) => (
  <svg viewBox="0 0 80 80" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M80 40c0 22.091-17.909 40-40 40C17.908 80 0 62.091 0 40S17.908 0 40 0c22.091 0 40 17.909 40 40"
        fill="#4164A5"
      />
      <path
        d="M77.367 40.033H71.44c0-17.427-14.178-31.605-31.605-31.605V2.502c20.694 0 37.53 16.837 37.53 37.53"
        fill="#7C9FDC"
      />
      <path
        d="M39.836 77.564v-5.926c17.427 0 31.605-14.178 31.605-31.605h5.926c0 20.694-16.837 37.53-37.531 37.53"
        fill="#34528A"
      />
      <path
        d="M39.836 77.564c-20.695 0-37.531-16.837-37.531-37.531H8.23c0 17.427 14.178 31.605 31.605 31.605v5.926z"
        fill="#7C9FDC"
      />
      <path
        d="M8.23 40.033H2.306c0-20.694 16.836-37.531 37.53-37.531v5.926c-17.426 0-31.604 14.178-31.604 31.605"
        fill="#34528A"
      />
      <g fill="#FFF">
        <path
          d="M31.25 22h12.975L54 31.775V51.75c.194 4.278-.778 5.25-5.25 5.25h-17.5c-4.278 0-5.25-.972-5.25-5.25v-24.5c0-3.306.972-5.25 5.25-5.25zm12.574 3.672l-.772-.755H30.78c-1.029 0-1.863.816-1.863 1.823v25.52c0 1.007.834 1.823 1.863 1.823h18.634c1.03 0 1.864-.816 1.864-1.823V32.963l-.772-.755h-4.818c-1.03 0-1.864-.816-1.864-1.823v-4.713zM34.75 45.528h7a1.75 1.75 0 010 3.5h-7a1.75 1.75 0 010-3.5zm0-7h10.5a1.75 1.75 0 010 3.5h-10.5a1.75 1.75 0 010-3.5zm0-7h1.75a1.75 1.75 0 010 3.5h-1.75a1.75 1.75 0 010-3.5z"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);

export const TradeIcon = (props: SVGProps) => (
  <svg viewBox="0 0 80 80" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M80 40c0 22.091-17.909 40-40 40C17.908 80 0 62.091 0 40S17.908 0 40 0c22.091 0 40 17.909 40 40"
        fill="#4164A5"
      />
      <path
        d="M77.367 40.033H71.44c0-17.427-14.178-31.605-31.605-31.605V2.502c20.694 0 37.53 16.837 37.53 37.53"
        fill="#7C9FDC"
      />
      <path
        d="M39.836 77.564v-5.926c17.427 0 31.605-14.178 31.605-31.605h5.926c0 20.694-16.837 37.53-37.531 37.53"
        fill="#34528A"
      />
      <path
        d="M39.836 77.564c-20.695 0-37.531-16.837-37.531-37.531H8.23c0 17.427 14.178 31.605 31.605 31.605v5.926z"
        fill="#7C9FDC"
      />
      <path
        d="M8.23 40.033H2.306c0-20.694 16.836-37.531 37.53-37.531v5.926c-17.426 0-31.604 14.178-31.604 31.605"
        fill="#34528A"
      />
      <path
        d="M51 29.889v-3.111a.778.778 0 00-.778-.778H28.444a.778.778 0 00-.777.778v11.666c-.603.211-1.188.471-1.748.778h-7.141a.778.778 0 000 1.556h6.555v11.666h-6.555a.778.778 0 000 1.556h26.694c.705 0 1.396-.192 2-.555l13.37-8.02a3.757 3.757 0 00-1.933-6.98h-.164c-.616 0-1.224.152-1.768.441L51 42.074V29.89zm-13.222-2.333h3.11v3.11h-3.11v-3.11zm-8.556 0h7v3.888c0 .43.348.778.778.778h4.667c.43 0 .777-.348.777-.778v-3.888h7v15.347l-1.274.68a3.5 3.5 0 00-3.392-4.36h-7.575a11.803 11.803 0 00-7.98-1.208v-10.46zM57.71 40.259c.32-.17.675-.259 1.036-.259h.164a2.202 2.202 0 011.133 4.09l-13.37 8.022a2.333 2.333 0 01-1.2.332H26.889V40.467a10.243 10.243 0 019.722.212c.119.067.253.1.389.099h7.778a1.944 1.944 0 110 3.889h-7a.778.778 0 100 1.555h8.555a.778.778 0 00.367-.09l11.01-5.873z"
        stroke="#FFF"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export const CompanyBadge = (props: BoxProps) => (
  <Box as={CompanyIcon} boxSize="80px" {...props} />
);

export const DocumentBadge = (props: BoxProps) => (
  <Box as={DocIcon} boxSize="80px" {...props} />
);

export const TradeBadge = (props: BoxProps) => (
  <Box as={TradeIcon} boxSize="80px" {...props} />
);
