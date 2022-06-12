# Pagination

pagination is used to indicate a series of related content exists across
multiple
pages.[View component](https://design-system.tradelingdev.com/?path=/story/pagination--pagination-hook)

## Import

```jsx
import { Pagination, MobilePagination } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

`Pagination` and `MobilePagination` take the same prop and have the same
callbacks, the only difference is the way they displayed.

![image](https://user-images.githubusercontent.com/9809187/82189342-454dd580-9900-11ea-8d31-2806a37c1111.png)

MobilePagination doesn't have buttons for each page, just next and previous
buttons.
[view pagination component](https://design-system.tradelingdev.com/?path=/story/pagination--mobile-pagination),
[view mobile pagination component](https://design-system.tradelingdev.com/?path=/story/pagination--mobile-pagination)

## Usage

### Basic usage

Pagination requires `total` prop which is the total number of items.

```jsx
<Pagination total={100} />
```

### Setting the default page size

Use `defaultPageSize` prop to change number of item will be displayed in each
page.

```jsx
<Pagination total={100} defaultPageSize={20} />
```

![image](https://user-images.githubusercontent.com/9809187/82185461-4aa82180-98fa-11ea-9421-caafbe402a09.png)

### Setting the default page

Use `defaultPage` prop to select the initial active page.

```jsx
<Pagination total={100} defaultPage={3} />
```

![image](https://user-images.githubusercontent.com/9809187/82186271-a1622b00-98fb-11ea-9451-09fd5ec8b7ec.png)

### Creating a small size pagination

Use `size` prop to set the pagination size with `noOfSiblings` to `1` for
smaller screen sizes.

```jsx
<Pagination size="small" total={1248} pageSize={100} noOfSiblings={1} />
```

### Controlling the pagination

To programmatically control the selected page in pagination, pass the `page` and
`onPageChange` props to the pagination.
[view component](https://design-system.tradelingdev.com/?path=/story/pagination--controlled-pagination-component)

```jsx
function controlled() {
  const [page, setPage] = useState(3);
  return (
    <Box margin="2xl">
      <Pagination
        total={1248}
        pageSize={100}
        page={page}
        onPageChange={nextPage => setPage(nextPage)}
      />
    </Box>
  );
}
```

## Props

| Name               | Type                           | Default | Description                                                                        | Required |
| ------------------ | ------------------------------ | ------- | ---------------------------------------------------------------------------------- | :------: |
| `total`            | `number`                       |         | The total items count                                                              | required |
| `pageSize`         | `number`                       | 10      | The items per page in controlled mode                                              |    -     |
| `defaultPageSize`  | `nuber`                        | 10      | The default items per page                                                         |    -     |
| `onPageSizeChange` | `(nextPageSize: number): void` |         | Callback fired when page changes                                                   |    -     |
| `noOfSiblings`     | `number`                       | 1       | The number of page buttons to display to the left and right of current page button |    -     |
| `defaultPage`      | `number`                       | 1       | The initial page in uncontrolled mode                                              |    -     |
| `page`             | `number`                       | 1       | The current page in controlled mode                                                |    -     |
| `onPageChange`     | `(nextPage: number): void`     |         | Callback fired when page changes                                                   |    -     |
| `size`             | `large, small`                 | large   | Variant of the pagination                                                          |    -     |
