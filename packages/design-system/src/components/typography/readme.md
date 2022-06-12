# Typography

Typography is the used to render text and paragraphs within an interface.
result.[View component](https://design-system.tradelingdev.com/?path=/story/typography--headings)

## Import

```jsx
import { Heading, Text } from '@tradeling/web-design-system/Typography';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

```jsx
<Heading>Display Medium — 30 Inter - B</Heading>
<Text>Paragraph — 14 Inter B</Text>
```

### Heading

- use size prop to change the font size of Heading.
- Size can be `sm` , `md` , `lg`.
- The default is `md`

```jsx
 <Heading size="lg">Display Large — 48 Inter - B</Heading>
 <Heading>Display Medium — 30 Inter - B</Heading>
 <Heading size="sm">Display Small — 22 Inter B</Heading>
```

[View component](https://design-system.tradelingdev.com/?path=/story/typography--headings)

### Text usage

- use size prop to change the font size of Text.
- Sizes can be `xs` , `sm`,`md`, `lg`.
- The default is `md`

```jsx
    <Text size="lg">Medium Paragraph — 16 Inter B</Text>
    <Text>Paragraph — 14 Inter R</Text>
    <Text fontWeight="bold">Paragraph — 14 Inter B</Text>
    <Text size="sm">Small Paragraph — 12 Inter R</Text>
    <Text size="sm" fontWeight="bold">
      Small Paragraph — 12 Inter B
    </Text>
    <Text size="xs" fontWeight="bold">
      Caption — 10 Inter B
    </Text>
    <Text size="xs">Caption — 10 Inter B</Text>
```

[View component](https://design-system.tradelingdev.com/?path=/story/typography--texts)
