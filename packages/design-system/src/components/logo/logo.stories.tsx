import React from 'react';
import { Logo, LogoIcon, BuyerLogo, SellerLogo } from './logo';
import { BilingualLogo } from './bilingual-logo';
import { Center } from '../shared/center';

export const coloredLogo = () => (
  <Center minH="100vh">
    <Logo width="300px" />
  </Center>
);

export const whiteLogo = () => (
  <Center minH="100vh" bg="blue.600">
    <Logo variant="white" width="300px" />
  </Center>
);

export const logoIcon = () => (
  <Center minH="100vh" bg="blue.600">
    <LogoIcon boxSize="300px" color="white" />
  </Center>
);

export const BuyerCenterLogo = () => (
  <Center minH="100vh">
    <BuyerLogo />
  </Center>
);

export const BuyerCenterWhiteLogo = () => (
  <Center minH="100vh" bg="blue.600">
    <BuyerLogo variant="white" />
  </Center>
);

export const SellerCenterLogo = () => (
  <Center minH="100vh">
    <SellerLogo />
  </Center>
);

export const SellerCenterWhiteLogo = () => (
  <Center minH="100vh" bg="blue.600">
    <SellerLogo width="500px" variant="white" />
  </Center>
);

export const LogoBilingual = () => (
  <Center minH="100vh" bg="gray.800">
    <BilingualLogo variant="black" width="300px" />
    <BilingualLogo variant="white" width="300px" />
    <BilingualLogo variant="colored" width="300px" />
    <BilingualLogo variant="colored-secondary" width="300px" />
  </Center>
);

export default {
  title: 'CHAKRA/Logo',
};
