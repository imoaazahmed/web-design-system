import { ChevronRightIcon } from '@chakra-ui/icons';
import * as React from 'react';
import { Text } from '../../index';
import { withContainer } from '../story-container';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from './breadcrumbs';

export default {
  title: 'CHAKRA/Breadcrumbs',
  decorators: [withContainer],
};

export const Breadcrumbs = () => (
  <>
    <Text fontSize="lg" mb="sm">
      Simple Breadcrumbs
    </Text>

    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Food & Beverage</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Dairy</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Text fontSize="lg" mt="xl" mb="sm">
      Custom Separator
    </Text>

    <Breadcrumb separator={<ChevronRightIcon />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Food & Beverage</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Dairy</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </>
);
