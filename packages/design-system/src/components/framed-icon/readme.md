# Framed icon

Framed icons are used to frame icons by adding a colored circle frame.
[View component](https://design-system.tradelingdev.com/?path=/story/framed-icon--framed-icon)

## Import

```jsx
import { FramedIcon } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

Use a FramedIcon by passing the `icon` prop. This `icon` must be a valid react
element. You can use custom icon or icon from a popular icon library like
[react-icons](https://react-icons.netlify.com/).

```jsx
<FramedIcon icon={<FoodIcon />} />
```

### Use with Chakra UI's icon

Use a `FramedIcon` by passing the `name` prop. This name must match an icon key
[here](https://chakra-ui.com/icon#all-icons).

```jsx
<FramedIcon name="copy" />
```

> You can't use icon with name, you have to choose one of them, and if you used
> both of them the component will display icon prop and ignore name.

### Icon size

Use `iconSize` prop to change the size of the icon.

![image](https://user-images.githubusercontent.com/9809187/82142762-b1243580-984f-11ea-9d45-47c7140f1bdc.png)

```jsx
<FramedIcon icon={<FaArrowRight />} />
<FramedIcon icon={<FaArrowRight />} iconSize="1.5em" />
```

### Frame color

You can change frame background by pass `bg` prop.

![image](https://user-images.githubusercontent.com/9809187/82142358-ca77b280-984c-11ea-9397-9560ba6d85a1.png)

```jsx
<FramedIcon icon={<FaArrowRight />} bg="gray.200" />
<FramedIcon icon={<FaArrowRight />} bg="red.50" />
```

### Frame size

You can change frame size by pass `size` prop.

![image](https://user-images.githubusercontent.com/9809187/82142868-a8802f00-9850-11ea-8c16-22c479d94539.png)

```jsx
<FramedIcon icon={<FaArrowRight />} size="100px" />
```

## Props

The FramedIcon component composes [Flex component](https://chakra-ui.com/flex)
so you can pass props for `Flex`.

| Name       | Type                 | Default     | Description                                                                           | Required |
| ---------- | -------------------- | ----------- | ------------------------------------------------------------------------------------- | :------: |
| `icon`     | `React.ReactElement` | `undefined` | The custom icon to be used                                                            |    -     |
| `name`     | `string`             | `undefined` | The name of Chakra icon to be used. [see icons](https://chakra-ui.com/icon#all-icons) |    -     |
| `iconSize` | `string`             | `40%`       | The size of the icon.                                                                 |    -     |
| `size`     | `string`             | `40px`      | The size of the frame.                                                                |    -     |
