# Spinner

Spinners provide a visual cue that an action is processing awaiting a course of
change or a
result.[View component](https://design-system.tradelingdev.com/?path=/story/spinner--basic)

## Import

```jsx
import { Spinner } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
<Spinner />
```

### Spinner size

Pass the size prop to change the size of spinner. size can be `xs`, `sm`, `md`,
`lg` and `xl`.
[View component](https://design-system.tradelingdev.com/?path=/story/spinner--basic)

```jsx
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
```

### Spinner color

Pass the color prop to change the color of spinner.
[View component](https://design-system.tradelingdev.com/?path=/story/spinner--basic)

```jsx
<Spinner color="blue.300" />
<Spinner color="green.100" />
```

### Spinner with empty area color

```jsx
<Spinner emptyColor="gray.200" />
```

![captured (2)](https://user-images.githubusercontent.com/9809187/82157146-ccfbfb80-9890-11ea-8a33-e676e41a1853.gif)

## Props

| Name         | Type                         | Default       | Description                                  | Required |
| ------------ | ---------------------------- | ------------- | -------------------------------------------- | :------: |
| `size`       | `xl`, `lg`, `md`, `sm`, `xs` | `md`          | The size of the spinner.                     |    -     |
| `color`      | `string`                     |               | The color of the spinner.                    |    -     |
| `emptyColor` | `string`                     | `transparent` | The color of the empty areas in the spinner. |    -     |
| `speed`      | `string`                     | `0.45s`       | The speed of the spinner.                    |    -     |
| `thickness`  | `string`                     | `2px`         | The thickness of the spinner.                |    -     |
