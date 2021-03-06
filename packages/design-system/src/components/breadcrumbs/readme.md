# Breadcrumbs

Breadcrumbs component can be used to render the breadcrumbs for a page.
[View Component](https://design-system.tradelingdev.com/?path=/story/breadcrumbs--breadcrumbs).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@tradeling/web-design-system';
```

Breadcrumb: This is the wrapper component for the breadcrumbs.

BreadcrumbItem: This is used to create a single item from the breadcrumbs.

BreadcrumbLink: This is used to create the link for each BreadcrumbItem.

BreadcrumbSeparator: This is used to create the separator for each
BreadcrumbItem.

## Usage

### Simple Breadcrumb

```jsx
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Food & Beverage</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Dairy</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
```

### Breadcrumb with custom separator

```jsx
<Breadcrumb separator={<Icon name="chevron-right" />}>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Food & Beverage</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Dairy</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
```

### Breadcrumb with styled custom separator

```jsx
<Breadcrumb separator={<Icon name="chevron-right" />}>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator color="tomato" />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Food & Beverage</BreadcrumbLink>
    <BreadcrumbSeparator color="firebrick">
      <Icon name="chevron-right" />
    </BreadcrumbSeparator>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Dairy</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
```

## Props

### Breadcrumb

It accepts all the props accepted by
[`<Breadcrumb />`](https://chakra-ui.com/breadcrumb) component.

### BreadcrumbItem

It accepts all the props accepted by
[`<BreadcrumbItem />`](https://chakra-ui.com/breadcrumb) component.
Additionally, following props can be passed to it:

| Name  |  Type  | Default |             Description              | Required |
| ----- | :----: | :-----: | :----------------------------------: | :------: |
| index | number |    -    | Index for iterative breadcrumb items |    -     |

### BreadcrumbLink

It accepts all the props accepted by
[`<BreadcrumbLink />`](https://chakra-ui.com/breadcrumb) component.
Additionally, following props can be passed to it:

| Name          |  Type   | Default |                              Description                               | Required |
| ------------- | :-----: | :-----: | :--------------------------------------------------------------------: | :------: |
| isCurrentPage | boolean |  false  | Whether to show the breadcrumb item as a link (true) or static (false) |    -     |

### BreadcrumbSeparator

It accepts all the props accepted by
[`<BreadcrumbSeparator />`](https://chakra-ui.com/breadcrumb) component.
