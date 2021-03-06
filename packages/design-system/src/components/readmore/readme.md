# Readmore

Readmore is used to render a truncated paragaph with the option to expand it
using `Read more` button. It extends `Text` component and you can pass
`TextProps`.

[View component](https://design-system.tradelingdev.com/?path=/story/readmore--basic-readmore)

## Import

```jsx
import { Readmore } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

```jsx
<Readmore>
  <Readmore.Text>
    Long long long long long long long long long long long text
  </Readmore.Text>
  <Readmore.Button moreText="Read more" lessText="Read less">
</Readmore>
```

Expand it by default

```jsx
<Readmore isCollapsed={false}>
  <Readmore.Text>
    Long long long long long long long long long long long text
  </Readmore.Text>
  <Readmore.Button moreText="Read more" lessText="Read less">
</Readmore>
```

Set number of lines

```jsx
<Readmore  noOfLines={1}>
  <Readmore.Text>
    Long long long long long long long long long long long text
  </Readmore.Text>
  <Readmore.Button moreText="Read more" lessText="Read less">
</Readmore>
```

## Props

`Readmore`

| Name        |  Type   | Default |               Description               | Required |
| ----------- | :-----: | :-----: | :-------------------------------------: | :------: |
| isCollapsed | boolean |  true   |    If text is collapsed or expandes     |    -     |
| noOfLines   | number  |    2    | Number of text lines when its collapsed |    -     |

`Readmore.Button`

| Name     |  Type  |  Default  |                Description                 | Required |
| -------- | :----: | :-------: | :----------------------------------------: | :------: |
| moreText | string | Show more | Text of button when paragraph is collapsed |    -     |
| lessText | string | Show less | Text of button when paragraph is expanded  |    -     |
