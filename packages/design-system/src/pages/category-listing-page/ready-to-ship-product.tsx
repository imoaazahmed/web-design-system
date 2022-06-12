import {
  Box,
  BoxProps,
  Image,
  ImageProps,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaRegQuestionCircle } from '../../icons/react-icons/fa';
import { MdVerifiedUser } from '../../icons/react-icons/md';
import { CountryFlag } from '../../components';

export const ReadyToShipProduct = (props: BoxProps) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.100"
      bg="white"
      overflow="hidden"
      borderRadius="md"
      maxW="320px"
      fontSize="md"
      {...props}
    />
  );
};

const ProductContent = (props: BoxProps) => <Box padding="lg" {...props} />;

ReadyToShipProduct.Content = ProductContent;

export const ProductImage = (props: ImageProps) => (
  <Image
    objectFit="cover"
    width="100%"
    height="256px"
    ignoreFallback
    {...props}
  />
);

ReadyToShipProduct.Image = ProductImage;

const ProductName = (props: BoxProps) => (
  <Text fontWeight="medium" {...props} />
);

ReadyToShipProduct.Name = ProductName;

type ProductPriceProps = BoxProps & {
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
};

const ProductPrice = (props: ProductPriceProps) => {
  const { minPrice = 0, maxPrice = 0, currency = 'AED', ...boxProps } = props;

  const price = `${currency} ${minPrice} - ${currency} ${maxPrice}`;

  return (
    <Box marginTop="8px" fontWeight="bold" {...boxProps}>
      <Box as="span" textTransform="uppercase">
        {price}
      </Box>
      <Box as="span" color="gray.400" marginStart="2xs">
        / Piece
      </Box>
    </Box>
  );
};

ReadyToShipProduct.Price = ProductPrice;

function ProductUnits(props: BoxProps & { value: number }) {
  const { value, ...boxProps } = props;
  const valueWithUnit = value > 1 ? `${value} Units` : `${value} Unit`;
  return (
    <Box marginTop="8px" fontWeight="semibold" {...boxProps}>
      <Box as="span">{valueWithUnit}</Box>
      <Box as="span" color="gray.400" marginStart="2xs">
        (Min order)
      </Box>
    </Box>
  );
}

ReadyToShipProduct.Units = ProductUnits;

const ProductSupplier = (props: BoxProps) => (
  <Box fontSize="sm" marginTop="8px" {...props} />
);

ReadyToShipProduct.Supplier = ProductSupplier;

const ProductExtraInfo = (props: StackProps) => (
  <Stack direction="row" marginY="16px" align="center" {...props}>
    <CountryFlag countryCode="CN" width="20px" />
    <Box as={MdVerifiedUser} boxSize="16px" />
    <Box as={FaRegQuestionCircle} boxSize="16px" />
  </Stack>
);

ReadyToShipProduct.ExtraInfo = ProductExtraInfo;

export default ReadyToShipProduct;
