# Logo

Display Tradeling Logo as `SVG`.
[View component](https://design-system.tradelingdev.com/?path=/story/logo--colored-logo)

## Import

```jsx
import { Logo } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

Display the colored version of Tradeling logo.
[check the storybook](https://design-system.tradelingdev.com/?path=/story/logo--colored-logo)

```jsx
<Logo width="300px />
```

### Logo Variants

Pass the variant prop to customize the color of the Logo, variant can be
`colored` or `white`.
[Check component](https://design-system.tradelingdev.com/?path=/story/logo--white-logo)

```jsx
<Logo width="300px variant="white" />
```

## Props

The Logo component composes [Box component](https://chakra-ui.com/box) so you
can pass props for `Box`.

| Name      | Type               | Default   | Description           | Required |
| --------- | ------------------ | --------- | --------------------- | :------: |
| `variant` | `colored`, `white` | `colored` | The color of the logo |    -     |

# Logo Icon

Display Tradeling Logo icon (without tradeling word) as `SVG`.
[View component](https://design-system.tradelingdev.com/?path=/story/logo--logo-icon)

## Import

```jsx
import { LogoIcon } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
<LogoIcon width="100px" />
```

### Logo Color

Pass the `color` prop to customize the color of the icon.

![image](https://user-images.githubusercontent.com/9809187/82155937-4f80bd00-9889-11ea-97dd-fbcc9974125a.png)

```jsx
<LogoIcon size="100px" color="white" />
<LogoIcon size="100px" color="gray.500" />
<LogoIcon size="100px" color="red.500" />
```

## Props

The LogoIcon component composes [Box component](https://chakra-ui.com/box) so
you can pass props for `Box`.
