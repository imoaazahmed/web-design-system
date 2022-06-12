# Icons

it's a reused component to easily render `<svg>` icons. The design system
provides basic interface icons that we used currently , to add your icons, read
the guide.

## Import

```jsx
import { FramedIcon } from '../components/index';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

and after that export `TopNavIcons` and use The design system to create the
right grid you want and for each icon unique name example `GroupIcon` ,
`MoneyIcon`, `HelpIcon` , `GlobeIcon` the icon inherits the fontSize and color
of it's parent.

[View component](https://design-system.tradelingdev.com/?path=/story/icon--top-nav-icons)

```jsx
     <GroupIcon size="40px" />
);
```

### Icons for the homepage banners.

```jsx
        <BadgeIconFrame>
          <Icon />
        </BadgeIconFrame>
      </ForwardProps>
```

[View component](https://design-system.tradelingdev.com/?path=/story/icon--home-page-banner)

- Here's the icon only implementation,
- we'll use this to review the icons in the future

```jsx
<CategoryIcon size="40px" />
```

[View component](https://design-system.tradelingdev.com/?path=/story/icon--category-icons)

- Here's a quick grid for each icon,
- I'm using the `FramedIcon` component to contain
- it in a circle. So you can simply copy the code :)

```jsx
<FramedIcon
  icon={<CategoryIcon />}
  size="64px"
  iconSize="40px"
  bg="blue.800"
  color="white"
/>
```

[View component](https://design-system.tradelingdev.com/?path=/story/icon--category-icons)

## file icons

```jsx
        <Icon />
);
```

[View component](https://design-system.tradelingdev.com/?path=/story/icon--file-icons)

## props

|   Name    |       Type        |                                     Description                                     | Required? |
| :-------: | :---------------: | :---------------------------------------------------------------------------------: | :-------: |
|   size    |      string       |                                The size of the icon.                                |     -     |
|   name    |      string       |                                The name of the icon.                                |     -     |
|   role    | presentation, img |                              he html role of the icon                               |     -     |
| focusable |      boolean      | Denotes that the icon is not an interative element, and only used for presentation. |           |
