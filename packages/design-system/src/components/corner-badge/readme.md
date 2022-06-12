# Corner Badge

Corner Badge component can be used to show corner left/right triangle badges.
[View Component](https://design-system.tradelingdev.com/?path=/story/corner-badge--corner-badge).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { CornerBadge, CornerBadgeLabel } from '@tradeling/web-design-system';
```

CornerBadge: Renders the angular corner badge in the UI.

CorerBadgeLabel: Used as a child of CornerBadge to show the label within the
badge.

## Usage

### Left Badge

```jsx
<CornerBadge>
  <CornerBadgeLabel>Beta</CornerBadgeLabel>
</CornerBadge>
```

### Right Badge

```jsx
<CornerBadge placement="end" size="75px" badgeColor="green.700">
  <CornerBadgeLabel size="xs">Beta</CornerBadgeLabel>
</CornerBadge>
```

## Props

### CornerBadge

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name       |    Type     |       Default        |         Description          | Required |
| ---------- | :---------: | :------------------: | :--------------------------: | :------: |
| placement  | left, right |         left         |    placement of the badge    |    -     |
| size       |   string    |        105px         |  height, width of the badge  |    -     |
| badgeColor |   string    | orange.400 (#FFA000) |    the color of the badge    |    -     |
| boxShadow  |   string    |          -           | the box shadow for the badge |    -     |
| border     |   string    |          -           |   the border for the badge   |    -     |

### CornerBadgeLabel

It accepts all the props accepted by Design system `<Heading />` component.
