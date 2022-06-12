import { Flex } from '@chakra-ui/layout';
import { TableProps, Table as ChakraTable } from '@chakra-ui/table';
import React, { useState } from 'react';
import { Button } from '../button';
import { withContainer } from '../story-container';
import {
  Table,
  TableCaption,
  ChakraTableBody,
  ChakraTableRowCell,
  ChakraTableFooter,
  ChakraTableHeaderCell,
  ChakraTableHead,
  ChakraTableRow,
} from './table';

export default {
  title: 'CHAKRA/Table',
  decorators: [withContainer],
};

const data = [
  {
    name: 'Bernard Lane',
    title: 'Director, Human Resources',
    email: 'bernardlane@example.com',
    role: 'Owner',
  },
  {
    name: 'Bernard Lane',
    title: 'Director, Human Resources',
    email: 'bernardlane@example.com',
    role: 'Owner',
  },
  {
    name: 'Bernard Lane',
    title: 'Director, Human Resources',
    email: 'bernardlane@example.com',
    role: 'Owner',
  },
];

export const Basic = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map((item, index) => (
        <Table.Row key={index}>
          <Table.RowCell>{item.name}</Table.RowCell>
          <Table.RowCell>{item.title}</Table.RowCell>
          <Table.RowCell>{item.email}</Table.RowCell>
          <Table.RowCell>{item.role}</Table.RowCell>
          <Table.RowCell textAlign="end">
            <Button variant="link">Edit</Button>
          </Table.RowCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
const colorSchemes = [
  'blue',
  'cyan',
  'gray',
  'green',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
  'whiteAlpha',
  'blackAlpha',
  'linkedin',
  'facebook',
  'messenger',
  'whatsapp',
  'twitter',
  'telegram',
];
export const ChakraUITable = () => {
  const [variant, setVariant] = useState<TableProps['variant']>('simple');
  const [size, setSize] = useState<TableProps['size']>('md');
  const [colorScheme, setColorScheme] =
    useState<TableProps['colorScheme']>('gray');
  return (
    <>
      <Flex alignItems="center" fontWeight="bold">
        Variants:{' '}
        <Button variant="link" mx="lg" onClick={() => setVariant('unstyled')}>
          unstyled
        </Button>
        <Button
          variant="link"
          marginEnd="lg"
          onClick={() => setVariant('simple')}
        >
          simple (default)
        </Button>
        <Button variant="link" onClick={() => setVariant('striped')}>
          striped
        </Button>
      </Flex>
      <Flex alignItems="center" my="lg" fontWeight="bold">
        Sizes:
        <Button variant="link" mx="lg" onClick={() => setSize('sm')}>
          sm
        </Button>
        <Button variant="link" marginEnd="lg" onClick={() => setSize('md')}>
          md (default)
        </Button>
        <Button variant="link" onClick={() => setSize('lg')}>
          lg
        </Button>
      </Flex>
      <Flex alignItems="center" fontWeight="bold">
        <span>ColorSchemes:</span>
        <Flex maxW="700px" direction="row" flexWrap="wrap" marginStart="md">
          {colorSchemes.map(color => (
            <Button
              minW="15%"
              onClick={() => setColorScheme(color)}
              marginStart="md"
              mt="md"
              variant="link"
            >
              {color}
              {color === 'gray' && 'default'}
            </Button>
          ))}
        </Flex>
      </Flex>

      <ChakraTable
        variant={variant}
        size={size}
        colorScheme={colorScheme}
        mt="lg"
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <ChakraTableHead>
          <ChakraTableRow>
            <ChakraTableHeaderCell>To convert</ChakraTableHeaderCell>
            <ChakraTableHeaderCell>into</ChakraTableHeaderCell>
            <ChakraTableHeaderCell isNumeric>multiply by</ChakraTableHeaderCell>
          </ChakraTableRow>
        </ChakraTableHead>
        <ChakraTableBody>
          <ChakraTableRow>
            <ChakraTableRowCell>inches</ChakraTableRowCell>
            <ChakraTableRowCell>millimetres (mm)</ChakraTableRowCell>
            <ChakraTableRowCell isNumeric>25.4</ChakraTableRowCell>
          </ChakraTableRow>
          <ChakraTableRow>
            <ChakraTableRowCell>feet</ChakraTableRowCell>
            <ChakraTableRowCell>centimetres (cm)</ChakraTableRowCell>
            <ChakraTableRowCell isNumeric>30.48</ChakraTableRowCell>
          </ChakraTableRow>
          <ChakraTableRow>
            <ChakraTableRowCell>yards</ChakraTableRowCell>
            <ChakraTableRowCell>metres (m)</ChakraTableRowCell>
            <ChakraTableRowCell isNumeric>0.91444</ChakraTableRowCell>
          </ChakraTableRow>
        </ChakraTableBody>
        <ChakraTableFooter>
          <ChakraTableRow>
            <ChakraTableHeaderCell>To convert</ChakraTableHeaderCell>
            <ChakraTableHeaderCell>into</ChakraTableHeaderCell>
            <ChakraTableHeaderCell isNumeric>multiply by</ChakraTableHeaderCell>
          </ChakraTableRow>
        </ChakraTableFooter>
      </ChakraTable>
    </>
  );
};
