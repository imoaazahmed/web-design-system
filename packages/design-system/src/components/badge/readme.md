# Badge

Badges are used to highlight an item for quick recognition.
[View Component](https://design-system.tradelingdev.com/?path=/story/badge--badge)

## Import

```jsx
import { Badge } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
<Badge>Default</Badge>
```

### Badge Variants

Pass the variant prop to customize the color and background of the Badge.
variant can be `primary`,`invert` or `important`.
[check the storybook](https://design-system.tradelingdev.com/?path=/story/badge--badge)

```jsx
<Badge variant="primary">Primary</Badge>
<Badge variant="invert">Invert</Badge>
<Badge variant="important">Important</Badge>
```

## Composition

```jsx
<Flex mt="lg">
  <Avatar size="lg" />
  <Box>
    <Heading size="sm">
      Ahmed Elsayed
      <Badge variant="primary" marginStart="md">
        New
      </Badge>
    </Heading>
    <Text size="sm">Frontend Engineer</Text>
  </Box>
</Flex>
```

![image](https://user-images.githubusercontent.com/9809187/82138489-defa8180-9831-11ea-8f6e-d40d71709620.png)

You can change the size of the badge by passing `fontSize` prop.

![image](https://user-images.githubusercontent.com/9809187/82138655-2af9f600-9833-11ea-95f9-1fe6d3d1192e.png)

```jsx
<Heading size="sm">
  Ahmed Elsayed
  <Badge fontSize="xl" variant="primary" marginStart="md">
    New
  </Badge>
</Heading>
```

## Props

The Badge component composes [Box component](https://chakra-ui.com/box) so you
can pass props for `Box`.

| Name      | Type                                        | Default   | Description            | Required |
| --------- | ------------------------------------------- | --------- | ---------------------- | -------- |
| `variant` | `default`, `invert`, `primary`, `important` | `default` | The style of the badge | -        |

# Status badge

Status Badge are used to highlight status of an item (error, success, ...etc ).
[View Component](https://design-system.tradelingdev.com/?path=/story/badge--status-badge)

## Import

```jsx
import { StatusBadge } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
<StatusBadge>Default</StatusBadge>
```

### Badge Variants

Pass the variant prop to customize the status. variant can be `error`,`info`,
`success` or `warning`.
[check the storybook](https://design-system.tradelingdev.com/?path=/story/badge--status-badge)

```jsx
<StatusBadge variant="error">Error</StatusBadge>
<StatusBadge variant="info">Info</StatusBadge>
<StatusBadge variant="success">Success</StatusBadge>
<StatusBadge variant="warning">Warning</StatusBadge>
```

## Composition

```jsx
<Text>
  The selected item is
  <StatusBadge variant="success">successfully</StatusBadge> added to your cart.
</Text>
```

![image](https://user-images.githubusercontent.com/9809187/82139263-a9589700-9837-11ea-94ce-b565b26144c4.png)

You can change the size of the badge by passing fontSize prop.

![image](https://user-images.githubusercontent.com/9809187/82139212-5aaafd00-9837-11ea-87c9-89c7151950a2.png)

```jsx
<Text>
  The selected item is
  <StatusBadge fontSize="lg" variant="success">
    successfully
  </StatusBadge>
  added to your cart.
</Text>
```

## Props

The StatusBadge component composes [Box component](https://chakra-ui.com/box) so
you can pass props for `Box`.

| Name      | Type                                             | Default   | Description            | Required |
| --------- | ------------------------------------------------ | --------- | ---------------------- | -------- |
| `variant` | `default`, `error`, `info`, `success`, `warning` | `default` | The style of the badge | -        |
