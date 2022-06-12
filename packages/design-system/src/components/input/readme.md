# Input

Input component is used to get user input in a text field. It is usually used
together with a FormControl to provide an accessible label, validation messages,
etc.[View Component](https://design-system.tradelingdev.com/?path=/story/input--basic)

## Import

```jsx
import { Input } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

Basic usage of the Input component.
[view component](https://design-system.tradelingdev.com/?path=/story/input--basic)

```jsx
<Input placeholder="Basic usage" />
```

### Invalid Input

Use `IsInvalid` prop to indicate an error. This sets `aria-invalid=true` and you
can style this state by passing `_invalid` prop
[view component](https://design-system.tradelingdev.com/?path=/story/input--invalid)

![image](https://user-images.githubusercontent.com/9809187/82203427-5accfa80-9914-11ea-876f-e12cdbd55496.png)

```jsx
<Input placeholder="Invalid input" isInvalid  />
<Input placeholder="Invalid input" isInvalid _invalid={{ bg: 'red.50' }} />
```

### Disabled Input

Use `isDisabled` prop to make.
[view component](https://design-system.tradelingdev.com/?path=/story/input--form-elements)

![image](https://user-images.githubusercontent.com/9809187/82203669-a7183a80-9914-11ea-8b0e-5d2689ae9d29.png)

```jsx
<Input placeholder="Disabled input" isDisabled />
<Input placeholder="Disabled input" isDisabled _disabled={{ bg: 'gray.50' }} />
```

### Controlled Input

To programmatically control the Input, pass the `value` and `onChange` props to
the Input.
[view component](https://design-system.tradelingdev.com/?path=/story/input--controlled-input)

```jsx
export const ControlledInput = () => {
  const [value, setValue] = useState('First Name');
  return (
    <Stack spacing="24px">
      <Input value={value} onChange={e => setValue(e.target.value)} />
    </Stack>
  );
};
```

## Composition

### Left and Right Addons

You can add addons to the left and right of the input component. Chakra UI
exports `InputGroup`, `InputLeftAddon`, `InputRightAddon` to help with this use
case

![image](https://user-images.githubusercontent.com/9809187/82206037-8f42b580-9918-11ea-910c-029263c10dcd.png)

```jsx
<Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children="+234" />
    <Input type="tel" roundedStart="0" placeholder="phone number" />
  </InputGroup>

  <InputGroup>
    <InputLeftAddon children="https://" />
    <Input rounded="0" placeholder="mysite" />
    <InputRightAddon children=".com" />
  </InputGroup>
</Stack>
```

### Add elements inside input

In some scenarios, you might need to add an icon or button inside the input
component. Chakra UI exports `InputLeftElement`, and `InputRightElement` to help
with this use case.

![image](https://user-images.githubusercontent.com/9809187/82206230-ea74a800-9918-11ea-872f-91113aae7038.png)

```jsx
<Stack spacing={4}>
  <InputGroup>
    <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
    <Input type="phone" placeholder="Phone number" paddingStart="xl" />
  </InputGroup>

  <InputGroup>
    <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
    <Input placeholder="Enter amount" paddingStart="xl" paddingEnd="lg" />
    <InputRightElement children={<Icon name="check" color="green.500" />} />
  </InputGroup>
</Stack>
```

## props

The Input component composes [`PseudoBox`](https://chakra-ui.com/pseudobox) so
you can pass all `PseudoBox` props, and `React.InputHTMLAttributes`

| Name               | Type                | Default | Description                                                                                                                         | Required |
| ------------------ | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `as`               | `React.ElementType` | `input` | The component to use in place of `input`.                                                                                           |    -     |
| `aria-label`       | `string`            |         | Accessibility label to use, in scenarios where the input has no visible label, It's usefull for screen readers.                     |    -     |
| `aria-describedby` | `string`            |         | Accessibility label to use, in scenarios where the input has no visible label, It's usefult for screen readers.                     |    -     |
| `isDisabled`       | `boolean`           | `false` | If `true`, the input will be disabled. This sets `aria-disabled=true` and you can style this state by passing `_disabled` prop.     |    -     |
| `isInvalid`        | `boolean`           | `false` | If `true`, the input will indicate an error. This sets `aria-invalid=true` and you can style this state by passing `_invalid` prop. |    -     |
| `value`            | `string`            |         | set the value of the input.                                                                                                         |    -     |
