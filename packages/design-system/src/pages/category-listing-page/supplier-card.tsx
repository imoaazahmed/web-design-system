import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { ReactCountryFlagProps } from 'react-country-flag';
import { Center, CountryFlag } from '../../components';

export const SupplierCard = (props: BoxProps) => {
  return (
    <Box
      maxW="400px"
      boxShadow="sm"
      overflow="hidden"
      borderRadius="md"
      {...props}
    />
  );
};

export type CircleLogoProps = BoxProps & { src?: string; alt?: string };

function SupplierLogo(props: CircleLogoProps) {
  const { src, alt, ...rest } = props;
  return (
    <Center
      display="inline-flex"
      shadow="0 0 20px 0 rgba(0, 0, 0, 0.1)"
      bg="white"
      boxSize="100px"
      borderRadius="full"
      overflow="hidden"
      marginTop="-50px"
      {...rest}
    >
      <Image maxWidth="80px" src={src} alt={alt} />
    </Center>
  );
}

SupplierCard.Logo = SupplierLogo;

function SupplierCardName(props: BoxProps) {
  return (
    <Text
      fontSize="14px"
      textAlign="center"
      marginTop={5}
      fontWeight="bold"
      {...props}
    />
  );
}

SupplierCard.Name = SupplierCardName;

function SupplierCardImage(props: ImageProps) {
  return (
    <Image
      objectFit="cover"
      width="100%"
      height="300px"
      ignoreFallback
      {...props}
    />
  );
}

SupplierCard.Image = SupplierCardImage;

export const SupplierCardContent = (props: BoxProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      paddingX={5}
      paddingBottom={5}
      {...props}
    />
  );
};

SupplierCard.Content = SupplierCardContent;

export type SupplierCountryProps = StackProps & {
  countryCode: ReactCountryFlagProps['countryCode'];
  country?: string;
};

function SupplierCountry(props: SupplierCountryProps) {
  const { countryCode, country, ...rest } = props;
  return (
    <Stack isInline align="center" {...rest}>
      <CountryFlag
        width="24px"
        countryCode={countryCode}
        aria-label={country}
      />
      <Text textTransform="uppercase" fontWeight="semibold">
        {country}
      </Text>
    </Stack>
  );
}

SupplierCard.Country = SupplierCountry;

function Separator(props: BoxProps) {
  return (
    <Divider
      height="auto"
      width="2px"
      alignSelf="stretch"
      orientation="vertical"
      {...props}
    />
  );
}

export type SupplierHighlightsProps = FlexProps & {
  country?: ReactCountryFlagProps['countryCode'];
  years?: string;
  price?: string;
};

function SupplierHighlights(props: SupplierHighlightsProps) {
  const { country, years, price, ...rest } = props;
  return (
    <Flex
      w="100%"
      maxW="256px"
      my={4}
      align="center"
      fontWeight="bold"
      justifyContent="space-between"
      textTransform="uppercase"
      color="gray.600"
      fontSize="sm"
      pb={1}
      {...rest}
    >
      {country && <SupplierCountry countryCode={country} country={country} />}
      <Separator />
      <Text children={years} />
      <Separator />
      <Text children={price} />
    </Flex>
  );
}

SupplierCard.Highlights = SupplierHighlights;
