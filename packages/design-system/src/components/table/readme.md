# Table

## Import

```jsx
import { Table } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

The basic usage is Table component.
[view component](https://design-system.tradelingdev.com/?path=/story/table--basic)

```jsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>#</Table.HeaderCell>
      <Table.HeaderCell>First name</Table.HeaderCell>
      <Table.HeaderCell>Last Name</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowCell>1</Table.RowCell>
      <Table.RowCell>Ahmed</Table.RowCell>
      <Table.RowCell>Elsayed</Table.RowCell>
    </Table.Row>
  </Table.Body>
</Table>
```

## composition

Table component extends [`Box`](https://chakra-ui.com/box), this means you can
pass all `Box` props from Chakra UI.

![image](https://user-images.githubusercontent.com/9809187/82292312-bb634280-99bb-11ea-94d4-37122fceaaaa.png)

```jsx
<Table fontSize="lg" color="blue.700">
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell w="50px">#</Table.HeaderCell>
      <Table.HeaderCell>First name</Table.HeaderCell>
      <Table.HeaderCell>Last Name</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.RowCell>1</Table.RowCell>
      <Table.RowCell>Ahmed</Table.RowCell>
      <Table.RowCell>Elsayed</Table.RowCell>
    </Table.Row>
    <Table.Row bg="red.50">
      <Table.RowCell>1</Table.RowCell>
      <Table.RowCell>Ahmed</Table.RowCell>
      <Table.RowCell>Elsayed</Table.RowCell>
    </Table.Row>
  </Table.Body>
</Table>
```

![image](https://user-images.githubusercontent.com/9809187/82292967-d3879180-99bc-11ea-871d-4f70b2bdcece.png)

```jsx
<Table fontSize="lg">
  <Table.Header>
    <Table.Row color="white" fontWeight="bold">
      <Table.HeaderCell bg="gray.900" borderWidth="0" w="50px">
        #
      </Table.HeaderCell>
      <Table.HeaderCell bg="gray.900" borderWidth="0">
        First name
      </Table.HeaderCell>
      <Table.HeaderCell bg="gray.900" borderWidth="0">
        Last Name
      </Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body bg="gray.800" color="white">
    <Table.Row borderWidth="0">
      <Table.RowCell>1</Table.RowCell>
      <Table.RowCell>Segun</Table.RowCell>
      <Table.RowCell>Adebayo</Table.RowCell>
    </Table.Row>
    <Table.Row borderWidth="0" bg="gray.900">
      <Table.RowCell>2</Table.RowCell>
      <Table.RowCell>Ahmed</Table.RowCell>
      <Table.RowCell>Elsayed</Table.RowCell>
    </Table.Row>
  </Table.Body>
</Table>
```

## props

### Table

Table extends [`Box`](https://chakra-ui.com/box), so you can pass all `Box`
props from Chakra UI.

### TableRow

TableRow extends [`pseudobox`](https://chakra-ui.com/pseudobox), this means you
can pass all `PseudoBox` props from Chakra UI.

### Other

TableHeader, TableBody, TableHeaderCell and TableRowCell extends
[`Box`](https://chakra-ui.com/box), so you can pass all `Box` props from Chakra
UI.
