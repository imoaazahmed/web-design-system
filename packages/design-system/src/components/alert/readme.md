# Alert

Alert component can be used to show different alerts in a modal.
[View Component](https://design-system.tradelingdev.com/?path=/story/alert--basic).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Alert } from '@tradeling/web-design-system';
```

## Usage

### Basic alert

```jsx
<Alert>This is a dummy alert box.</Alert>
```

### Alert with close button

```jsx
<Alert
  isClosable
  onClose={() => {
    // Code to close alert box
  }}
>
  This is a dummy alert box with close button.
</Alert>
```

### Alert with title

```jsx
<Alert title="Alert title">This is a dummy alert box with title.</Alert>
```

### Info alert

```jsx
<Alert variant="info">This is a dummy alert box.</Alert>
```

### Error alert

```jsx
<Alert variant="error">This is a dummy alert box.</Alert>
```

### Success alert

```jsx
<Alert variant="success">This is a dummy alert box.</Alert>
```

### Warning alert

```jsx
<Alert variant="warning">This is a dummy alert box.</Alert>
```

## Props

### Alert

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name       |             Type              | Default |                  Description                   |         Required          |
| ---------- | :---------------------------: | :-----: | :--------------------------------------------: | :-----------------------: |
| title      |            string             |    -    |                  Alert title                   |             -             |
| variant    | error, info, success, warning |  info   |                   Alert type                   |             -             |
| isClosable |            boolean            |  false  |      Shows the close button in alert box       |             -             |
| onClose    |           function            |    -    | Function to be called on click of close button | If `isClosable` is `true` |
