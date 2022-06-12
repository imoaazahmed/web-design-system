# Base Alert

Base Alert component can be used to show different alerts. There are two
variants of alerts:

- Solid
- Outline

And alerts have following types:

- Info
- Error
- Success
- Warning

[View Component](https://design-system.tradelingdev.com/?path=/story/alert--base-alert).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { BaseAlert } from '@tradeling/web-design-system';
```

BaseAlert: The wrapper component for the alert.

BaseAlert.Title: This is used as a child to BaseAlert component to render the
title within the alert box.

BaseAlert.Description: This component is used as a child to BaseAlert component
to render the description section within the alert box.

## Usage

### Outline Info Alert

```jsx
<BaseAlert>
  <BaseAlert.Title>This is the alert title</BaseAlert.Title>
  <BaseAlert.Description>
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
    of any queries at xxxx@tradeling.com
  </BaseAlert.Description>
</BaseAlert>
```

### Solid Info Alert

```jsx
<BaseAlert variant="solid">
  <BaseAlert.Title>This is the alert title</BaseAlert.Title>
  <BaseAlert.Description>
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
  </BaseAlert.Description>
</BaseAlert>
```

### Outline Error Alert

```jsx
<BaseAlert variant="outline" type="error">
  <BaseAlert.Title>This is the alert title</BaseAlert.Title>
  <BaseAlert.Description>
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
    of any queries at xxxx@tradeling.com
  </BaseAlert.Description>
</BaseAlert>
```

### Outline Warning Alert

```jsx
<BaseAlert variant="outline" type="warning">
  <BaseAlert.Title>This is the alert title</BaseAlert.Title>
  <BaseAlert.Description>
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
    of any queries at xxxx@tradeling.com
  </BaseAlert.Description>
</BaseAlert>
```

### Outline Success Alert

```jsx
<BaseAlert variant="outline" type="success">
  <BaseAlert.Title>This is the alert title</BaseAlert.Title>
  <BaseAlert.Description>
    You’re account has been activated, a team member will get in touch to help
    you go live with your products on Tradeling. Feel free to reach out in case
    of any queries at xxxx@tradeling.com
  </BaseAlert.Description>
</BaseAlert>
```

### Custom Alert With Button

```jsx
<BaseAlert variant="solid" type="info">
  <Flex alignItems="center" justify="space-between">
    <Box>
      <BaseAlert.Title>This is the alert title</BaseAlert.Title>
      <BaseAlert.Description>
        You’re account has been activated, a team member will get in touch to
        help you go live with your products on Tradeling. Feel free to reach out
        in case of any queries at xxxx@tradeling.com
      </BaseAlert.Description>
    </Box>
    <Box>
      <Button>Complete details</Button>
    </Box>
  </Flex>
</BaseAlert>
```

## Props

### BaseAlert

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name       |             Type              |        Default        |                  Description                   |         Required          |
| ---------- | :---------------------------: | :-------------------: | :--------------------------------------------: | :-----------------------: |
| variant    |        solid, outline         |        outline        |         Variant of the alert component         |             -             |
| type       | error, info, success, warning |         info          |          Type of the alert component           |             -             |
| isClosable |            boolean            |         false         |      Shows the close button in alert box       |             -             |
| onClose    |           function            |           -           | Function to be called on click of close button | If `isClosable` is `true` |
| iconSize   |            string             |         1rem          |             Size of the alert icon             |             -             |
| iconColor  |            string             | As per the alert type |            Color of the alert icon             |             -             |

### BaseAlert.Title

It accepts all the props accepted by Deign System `<Text />` component.

### BaseAlert.Description

It accepts all the props accepted by Deign System `<Text />` component.
