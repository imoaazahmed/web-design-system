import {
  Breadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import * as React from 'react';

export const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  return (
    <ChakraBreadcrumbItem
      color={props.isCurrentPage ? 'gray.800' : 'blue.600'}
      fontWeight={props.isCurrentPage ? 'bold' : 'normal'}
      fontSize="sm"
      {...props}
    />
  );
};

export { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator };
