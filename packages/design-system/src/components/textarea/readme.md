# Textarea

Textarea component is used to get user input in a text area. It is usually used
together with a FormControl to provide an accessible label, validation messages,
etc.[View Component](https://design-system.tradelingdev.com/?path=/story/textarea--basic)

## Import

```jsx
import { Textarea } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

Basic usage of the Textarea component.
[view component](https://design-system.tradelingdev.com/?path=/story/textarea--basic)

```jsx
<Textarea placeholder="Basic usage" />
```

### Invalid Textarea

Use `IsInvalid` prop to indicate an error. This sets `aria-invalid=true` and you
can style this state by passing `_invalid` prop (this will overwrite the default
styles of invalid state)
[view component](https://design-system.tradelingdev.com/?path=/story/textarea--invalid-textarea)

![image](https://user-images.githubusercontent.com/23707834/84891279-ac4fdd00-b0ac-11ea-8dfe-9ab3ccb70336.png)

```jsx
<Textarea placeholder="Invalid input" isInvalid  />
<Textarea placeholder="Invalid input" isInvalid _invalid={{ bg: 'red.50' }} />
```

### Disabled Textarea

Use `isDisabled` prop to make.
[view component](https://design-system.tradelingdev.com/?path=/story/textarea--disabled)

![image](https://user-images.githubusercontent.com/23707834/84891735-62b3c200-b0ad-11ea-98e3-821e42afd987.png)

```jsx
<Textarea placeholder="Disabled input" isDisabled />
<Textarea placeholder="Disabled input" isDisabled _disabled={{ bg: 'gray.700' }} />
```

### Controlled Textarea

To programmatically control the Textarea, pass the `value` and `onChange` props
to the Textarea.
[view component](https://design-system.tradelingdev.com/?path=/story/textarea--controlled-input)

```jsx
export const ControlledInput = () => {
  const [value, setValue] = useState('First Name');
  return (
    <Stack spacing="24px">
      <Textarea value={value} onChange={e => setValue(e.target.value)} />
    </Stack>
  );
};
```

## props

The Textarea component composes
[`Input`](https://design-system.tradelingdev.com/?path=/story/input--basic) so you
can pass all `Input` props, and `React.InputHTMLAttributes`

| Name               | Type                | Default | Description                                                                                                                         | Required |
| ------------------ | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `as`               | `React.ElementType` | `input` | The component to use in place of `input`.                                                                                           |    -     |
| `aria-label`       | `string`            |         | Accessibility label to use, in scenarios where the input has no visible label, It's usefull for screen readers.                     |    -     |
| `aria-describedby` | `string`            |         | Accessibility label to use, in scenarios where the input has no visible label, It's usefult for screen readers.                     |    -     |
| `isDisabled`       | `boolean`           | `false` | If `true`, the input will be disabled. This sets `aria-disabled=true` and you can style this state by passing `_disabled` prop.     |    -     |
| `isInvalid`        | `boolean`           | `false` | If `true`, the input will indicate an error. This sets `aria-invalid=true` and you can style this state by passing `_invalid` prop. |    -     |
| `value`            | `string`            |         | set the value of the input.                                                                                                         |    -     |
