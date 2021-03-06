# Filter

Filter is a component which can be used in PLP to render product filters based
on category, type etc. It uses multiple components to render the normal filters,
checkboxes and multi select checkboxes.
[View Component](https://design-system.tradelingdev.com/?path=/story/filter--basic).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import {
  Filter,
  FilterGroup,
  FilterCheckboxGroup,
  FilterSearchInput,
  FilterApplyButton,
  FilterLinkGroup,
  FilterLink,
  FilterHeading,
} from '@tradeling/web-design-system';
```

FilterGroup: The parent wrapper for the filters.

FilterLinkGroup: The wrapper for link type filters to navigate to a route.
FilterLink: This is used as a child of FilterLinkGroup and renders a single
link.

Filter: This is a wrapper for the filters which require user input such as
checkboxes or input. FilterSearchInput: The search box to search within a filter
group. FilterCheckboxGroup: Renders list of checkboxes for filters.
FilterApplyButton: This renders a button to explicitly submit a filter such as
price filters.

FilterHeading: This can be used to render a heading for a filter group.

## Usage

```jsx
const links = ['Baby food & Non food', 'Bakery & Pastry', 'Beverages'];

const checkboxes = ['Coffee', 'Black Tea', 'Green Tea'];

<FilterGroup mt="50px">
  <FilterLinkGroup title="Filter by categories">
    {links.map(option => (
      <FilterLink>{option}</FilterLink>
    ))}
  </FilterLinkGroup>
  <Filter title="Filter by product type">
    <FilterSearchInput placeholder="Search for anything..." />
    <FilterCheckboxGroup options={checkboxes} />
  </Filter>

  <Filter title="Filter by product">This is a collapsible filter</Filter>
  <Filter title="Filter by farm type">This is a collapsible filter</Filter>
  <FilterApplyButton />
</FilterGroup>;
```

## Props

### FilterGroup

It accepts all the props accepted by
[`<Accordion />`](https://chakra-ui.com/accordion) component.

### FilterLinkGroup

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name  |  Type  | Default |         Description          | Required |
| ----- | :----: | :-----: | :--------------------------: | :------: |
| title | string |    -    | The title for a filter group |    -     |

### FilterLink

It accepts all the props accepted by [`<Link />`](https://chakra-ui.com/link)
component.

### Filter

It accepts all the props accepted by
[`<AccordionItem />`](https://chakra-ui.com/accordion) component. Additionally,
following props can be passed to it:

| Name  |  Type  | Default |           Description           | Required |
| ----- | :----: | :-----: | :-----------------------------: | :------: |
| title | string |    -    | The title for the single filter |    -     |

### FilterSearchInput

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### FilterCheckboxGroup

It accepts all the props accepted by
[`<CheckboxGroup />`](https://chakra-ui.com/checkbox) component. Additionally,
following props can be passed to it:

| Name    |   Type   | Default |           Description            | Required |
| ------- | :------: | :-----: | :------------------------------: | :------: |
| options | string[] |    -    | The options array for checkboxes |   yes    |

### FilterApplyButton

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name       |   Type   | Default |             Description              | Required |
| ---------- | :------: | :-----: | :----------------------------------: | :------: |
| onClick    | Function |    -    | The onClick event handler for button |    -     |
| isDisabled | boolean  |  false  |      Flag to disable the button      |    -     |

### FilterHeading

It accepts all the props accepted by
[`<Text />`](https://design-system.tradelingdev.com/?path=/story/foundations--typography)
component.
