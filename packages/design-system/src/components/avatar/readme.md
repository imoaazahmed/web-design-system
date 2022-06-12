# Avatar

Avatar component can be used to show avatar or a placeholder for the user
Avatar. It also to show show the user status: online, offline.
[View Component](https://design-system.tradelingdev.com/?path=/story/avatar--basic).

## Installation

Design System can be added as a dependency from
[here](https://github.com/tradeling/web-design-system-sdk/releases).

## Import

```jsx
import { Avatar, AvatarPresence } from '@tradeling/web-design-system';
```

Avatar: Avatar is the wrapper to the component to show the user Avatar or User
initials when image is not available.

AvatarPresence: This is optional and used as a child of Avatar to show the
online/offline status.

## Usage

### Basic Small

```jsx
<Avatar size="md" />
```

### Basic Large

```jsx
<Avatar size="lg" />
```

### With Initials

```jsx
<Avatar name="Avaneesh Tripathi" />
```

### With Image

```jsx
<Avatar src="path/to/image" name="Avaneesh Tripathi" />
```

### With Status

```jsx
<Avatar src="path/to/image" name="Avaneesh Tripathi">
  <AvatarPresence variant="online" />
</Avatar>
```

## Props

### Avatar

It accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name |  Type  | Default |     Description      | Required |
| ---- | :----: | :-----: | :------------------: | :------: |
| src  | string |    -    | path to avatar image |    -     |
| name | string |    -    |     User's Name      |    -     |
| size | md, lg |   md    |     Avatar size      |    -     |

### AvatarPresence

It also accepts all the props accepted by [`<Box />`](https://chakra-ui.com/box)
component. Additionally, following props can be passed to it:

| Name    |      Type       | Default | Description | Required |
| ------- | :-------------: | :-----: | :---------: | :------: |
| variant | online, offline |    -    | User status |   yes    |
