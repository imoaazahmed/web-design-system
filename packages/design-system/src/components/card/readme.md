# Card

Card component can be used to show card layout.
[View Component](https://design-system.tradelingdev.com/?path=/story/card--cards).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import {
  Card,
  CardTitle,
  CardContent,
  CardDivider,
} from '@tradeling/web-design-system';
```

Card: This is the wrapper component which renders card layout.

CardTitle: This can be optionally used as a child to Card component to render
the card title.

CardContent: This can be optionally used as a child to Card component to render
the card content.

CardDivider: This can be optionally used to render a divider within the card.

## Usage

### Simple Card

```jsx
<Card>
  <CardContent>This is a dummy content within the card.</CardContent>
</Card>
```

### Card with title and divider

```jsx
<Card>
  <CardTitle>Title for the card</CardTitle>
  <CardDivider />
  <CardContent>This is a dummy content within the card with title.</CardContent>
</Card>
```

## Props

### Card

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### CardTitle

It accepts all the props accepted by
[`<Text />`](https://design-system.tradelingdev.com/?path=/story/foundations--typography)
component.

### CardContent

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### CardDivider

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.
