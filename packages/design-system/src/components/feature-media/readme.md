# Feature Media

Feature Media can be used to render an icon, title and text.
[View Component](https://design-system.tradelingdev.com/?path=/story/feature-media--feature-media).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { FeatureMedia } from '@tradeling/web-design-system';
```

FeatureMedia: This is the wrapper component for featured media.

FeatureMedia.Title: This is a child to wrapper and renders the title of featured
media.

FeatureMedia.Text: This is also a child to the wrapper renders the text for
featured media.

## Usage

### Default Feature Media

```jsx
<FeatureMedia media={<SomeImageElement />}>
  <FeatureMedia.Title>Feature media title here</FeatureMedia.Title>
  <FeatureMedia.Text>Feature media text goes on here here</FeatureMedia.Text>
</FeatureMedia>
```

## Props

### FeatureMedia

It accepts all the props accepted by [`<Flex />`](https://chakra-ui.com/flex)
component. Additionally, following props can be passed to it:

| Name    |       Type        | Default |                Description                | Required |
| ------- | :---------------: | :-----: | :---------------------------------------: | :------: |
| spacing | FlexProps['size'] |    5    |      Gap between media and the text       |    -     |
| media   |    JSX Element    |    -    | The JSX Element for media (Icon or Image) |    -     |

### FeatureMedia.Title

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### FeatureMedia.Text

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.
