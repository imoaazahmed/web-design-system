import React from 'react';
import { BoxProps, chakra } from '@chakra-ui/react';

export const Table = (props: BoxProps) => {
  return (
    <chakra.table
      minW="100%"
      overflow="hidden"
      fontSize="md"
      {...props}
      sx={{ borderCollapse: 'collapse', ...props.sx }}
    />
  );
};

export const TableHeader = chakra.thead;

Table.Header = TableHeader;

export const TableBody = chakra.tbody;

Table.Body = TableBody;

export const TableHeaderCell = (props: BoxProps) => {
  return (
    <chakra.th
      borderEnd="1px"
      borderEndColor="white"
      textTransform="capitalize"
      textAlign="start"
      fontWeight="normal"
      px="lg"
      py="md"
      bg="gray.100"
      {...props}
    />
  );
};

Table.HeaderCell = TableHeaderCell;

export const TableRow = (props: BoxProps) => {
  return <chakra.tr borderBottom="1px" borderColor="gray.100" {...props} />;
};

Table.Row = TableRow;

export const TableRowCell = (props: BoxProps) => {
  return <chakra.td px="lg" py="md" whiteSpace="nowrap" {...props} />;
};

Table.RowCell = TableRowCell;

export type {
  TableColumnHeaderProps,
  TableBodyProps,
  TableCaptionProps,
  TableFooterProps,
  TableProps,
  TableHeadProps,
  TableRowProps,
  TableCellProps,
} from '@chakra-ui/table';
export {
  Table as ChakraTable,
  Thead as ChakraTableHead,
  Tbody as ChakraTableBody,
  Tfoot as ChakraTableFooter,
  Tr as ChakraTableRow,
  Th as ChakraTableHeaderCell,
  Td as ChakraTableRowCell,
  TableCaption,
} from '@chakra-ui/table';
