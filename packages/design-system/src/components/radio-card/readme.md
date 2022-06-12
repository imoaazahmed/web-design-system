# RadioCard

RadioCard component is the card version of the `Radio` component. It's used to
create more visual interest and add some more content around the radio card when
it is checked.

[View Component](https://design-system.tradelingdev.com/?path=/story/radiocard--radio-card)

> This component is intended to be used within forms.

## Import

```jsx
import {
  RadioCardGroup,
  RadioCard,
  RadioCardLabel,
  RadioCardContent,
} from '@tradeling/web-design-system';
```

> To use these component, ensure you have `@tradeling/web-design-system`
> installed in your project.

- `RadioCardGroup`: This provides context, value and onChange props.
- `RadioCard`: The wrapper for a single radio, and renders a `radio` ui by
  default within the card.
- `RadioCardLabel`: The accessible label for the Radio.
- `RadioCardContent`: This houses extra content for the radio. **It only shows
  when the radio is checked** and has a nice collapse animation.

## Usage

### Basic usage

By default, the radio card group is uncontrolled, which means you can toggle the
selected radio button.

```jsx
function Basic() {
  return (
    <RadioCardGroup>
      <RadioCard value="one">
        <RadioCardLabel>Label one</RadioCardLabel>
        <RadioCardContent paddingY="lg">Some content</RadioCardContent>
      </RadioCard>

      <RadioCard value="two">
        <RadioCardLabel>Label two</RadioCardLabel>
        <RadioCardContent>Some content</RadioCardContent>
      </RadioCard>
    </RadioCardGroup>
  );
}
```

### Controlling the Radio group

To programmatically control the selected radio card, simply pass the `value` and
`onChange` props to `RadioCardGroup`

```jsx
function Controlled() {
  const [selected, setSelected] = React.useState('one');
  return (
    <RadioCardGroup
      value={selected}
      onChange={selectedOpt => setSelected(selectedOpt)}
    >
      <RadioCard value="one">
        <RadioCardLabel>Label one</RadioCardLabel>
        <RadioCardContent paddingY="lg">Some content</RadioCardContent>
      </RadioCard>

      <RadioCard value="two">
        <RadioCardLabel>Label two</RadioCardLabel>
        <RadioCardContent>Some content</RadioCardContent>
      </RadioCard>
    </RadioCardGroup>
  );
}
```

### Composition

The RadioCard gives you the ability to render any UI within `RadioCardLabel` and
`RadioCardContent` prop, so you can compose new UI with this.

```jsx
function Custom() {
  return (
    <RadioCardGroup>
      <RadioCard value="one">
        <RadioCardLabel>Credit/Debit card</RadioCardLabel>
        <RadioCardContent paddingY="lg">
          <CreditCardForm />
        </RadioCardContent>
      </RadioCard>

      <RadioCard value="two">
        <RadioCardLabel>Cash on deliver</RadioCardLabel>
        <RadioCardContent>
          <Text>
            If you are choosing to pay Cash on Delivery, please ensure you have
            agreed this with the Seller and have Cash ready to pay upon
            delivery.
          </Text>
          <Button>Submit order</Button>
        </RadioCardContent>
      </RadioCard>
    </RadioCardGroup>
  );
}
```

## Props

### RadioCard

RadioCard extends [`PseudoBox`](https://chakra-ui.com/pseudobox) , this means
you can pass all `PseudoBox` props from Chakra UI.

| Name         | Type      | Description                                         | Required? |
| ------------ | --------- | --------------------------------------------------- | --------- |
| `value`      | `string`  | the controlled value of the radio                   | Required  |
| `isDisabled` | `boolean` | If `true`, the radio card will be disabled          | -         |
| `isReadOnly` | `boolean` | If `true`, the radio card will be in read-only mode | -         |

### RadioCardGroup

RadioCardGroup extends [`Box`](https://chakra-ui.com/box) component. So you can
pass all `BoxProps` in addition to these props:

| Name           | Type                        | Description                                         | Required? |
| -------------- | --------------------------- | --------------------------------------------------- | --------- |
| `defaultValue` | `string`                    | the initial value of the radio in uncontrolled mode | -         |
| `value`        | `string`                    | the controlled value of the radio                   | -         |
| `onChange`     | `(selection: string): void` | the callback fired when a radio is checked          | -         |

### RadioCardLabel

RadioCardLabel extends [`Box`](https://chakra-ui.com/box) from Chakra UI, so you
can pass all `BoxProps`

### RadioCardContent

RadioCardContent extends [`Collapse`](https://chakra-ui.com/collapse) from
Chakra UI, so you can pass all `CollapseProps`
