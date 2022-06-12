# Payment Method

Payment Method component can be used to render different payment methods.
[View Component](https://design-system.tradelingdev.com/?path=/story/payment-methods--payment-methods).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { PaymentMethod } from '@tradeling/web-design-system';
```

## Usage

### Visa

```jsx
<PaymentMethod name="visa" />
```

### Master Card

```jsx
<PaymentMethod name="master" />
```

### Bank Transfer

```jsx
<PaymentMethod name="bank" />
```

### Tradeling Escrow Service

```jsx
<PaymentMethod name="escrow" />
```

## Props

It accepts all the props accepted by [`<Flex />`](https://chakra-ui.com/flex)
component. Additionally, following props can be passed to it:

| Name       |            Type            | Default |        Description         | Required |
| ---------- | :------------------------: | :-----: | :------------------------: | :------: |
| name       | visa, master, bank, escrow |    -    | Name of the payment method |   yes    |
| labelProps |         TextProps          |    -    |  Props to style the label  |    -     |
