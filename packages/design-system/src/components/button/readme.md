# Button

Button component can be used to render various buttons from the design system.
[View Component](https://design-system.tradelingdev.com/?path=/story/button--variants).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Button } from '@tradeling/web-design-system';
```

## Usage

### Primary Button

```jsx
<Button>Primary button</Button>
```

### Danger Button

```jsx
<Button variant="danger">Danger button</Button>
```

### Ghost Button

```jsx
<Button variant="ghost">Ghost button</Button>
```

### Warning Button

```jsx
<Button variant="warning">Warning button</Button>
```

### Link Button

```jsx
<Button variant="link">Link button</Button>
```

## Props

It accepts all the props accepted by
[`<Button />`](https://chakra-ui.com/button) component. Additionally, following
props can be passed to it:

| Name    |                          Type                           | Default |    Description     | Required |
| ------- | :-----------------------------------------------------: | :-----: | :----------------: | :------: |
| variant | primary, danger, outline, ghost, warning, link, default | primary |   Button variant   |    -     |
| size    |                       sm, lg, md                        |   md    | Size of the button |    -     |
