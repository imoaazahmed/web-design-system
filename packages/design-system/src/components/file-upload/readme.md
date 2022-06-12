# File Upload

File Upload can be used to render an icon, title and text.
[View Component](https://design-system.tradelingdev.com/?path=/story/file-upload--upload-input).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Upload } from '@tradeling/web-design-system';
```

Upload: This is the wrapper component for file upload.

Upload.TitleGroup: This is the wrapper for the Icon and Title components.

Upload.Icon: This is a child of TitleGroup and renders the icon for file upload.

Upload.Title: This is also a child to TitleGroup and renders the title of the
file upload.

Upload.Text: This is a child to the wrapper and renders the Text for file
upload.

## Usage

```jsx
<Upload>
  <Upload.TitleGroup>
    <Upload.Icon />
    <Upload.Title>Upload or drop your files here</Upload.Title>
  </Upload.TitleGroup>
  <Upload.Text>Maximum 2MB support JPG and PNG format</Upload.Text>
</Upload>
```

## Props

### Upload

It accepts all the props accepted by
[`<PseudoBox />`](https://chakra-ui.com/pseudobox) component. Additionally,
following props can be passed to it:

| Name     |   Type   | Default |                   Description                   | Required |
| -------- | :------: | :-----: | :---------------------------------------------: | :------: |
| onChange | Function |    -    | The onChange callback for the file upload input |    -     |

### Upload.TitleGroup

It accepts all the props accepted by
[`<StackProps />`](https://chakra-ui.com/stack) component.

### Upload.Icon

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### Upload.Title

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.

### Upload.Text

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component.
