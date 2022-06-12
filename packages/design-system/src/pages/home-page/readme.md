# Trending

Trending is used to display a section with title and list of items. used on
tradeling.com to display the trend categories.
[View Component](https://design-system.tradelingdev.com/?path=/story/home-page--trending-card)

## Import

```jsx
import { Trending } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
<Trending>
  <Trending.Title>Section title</Trending.Title>
  <Trending.Text>Section descriptop</Trending.Text>

  <Trending.ItemGroup>
    <Trending.Item>
      <Trending.ItemImage src="imageLink.jpg" />
      <Trending.ItemTitle>Item title 1</Trending.ItemTitle>
    </Trending.Item>

    <Trending.Item>
      <Trending.ItemImage src="imageLink.jpg" />
      <Trending.ItemTitle>Item title 2</Trending.ItemTitle>
    </Trending.Item>

    <Trending.Item>
      <Trending.ItemImage src="imageLink.jpg" />
      <Trending.ItemTitle>Item title 3</Trending.ItemTitle>
    </Trending.Item>
  </Trending.ItemGroup>
</Trending>
```

### Composition

Trending extends `Box` component, and Trending.ItemGroup extends `SimpleGrid`
component, so you can compose new UI with this.

```jsx
<Trending maxW="800px" bg="red.50">
  <Trending.Title>Food and Beverage Trends</Trending.Title>
  <Trending.Text>
    Let us tell you about the latest trends in Food and Beverage
  </Trending.Text>
  <Trending.ItemGroup columns={2}>
    <Link href="https://tradeling.com/">
      <Trending.Item>
        <Trending.ItemImage src={item.image} />
        <Trending.ItemTitle>The Food Movement</Trending.ItemTitle>
      </Trending.Item>
    </Link>
    <Link href="https://tradeling.com/">
      <Trending.Item>
        <Trending.ItemImage src={item.image} />
        <Trending.ItemTitle>The Kitchen Reinvented</Trending.ItemTitle>
      </Trending.Item>
    </Link>
  </Trending.ItemGroup>
</Trending>
```

![image](https://user-images.githubusercontent.com/9809187/82197929-a4194c00-990c-11ea-842f-603a6be12f2e.png)

## Props

### Trending

Trending extends [`Box`](https://chakra-ui.com/box) from Chakra UI, so you can
pass all `BoxProps`

### Trending ItemGroup

Trending ItemGroup extends [`SimpleGrid`](https://chakra-ui.com/simplegrid) from
Chakra UI, so you can pass all `SimpleGrid`

### Trending ItemImage

Trending ItemImage extends [`ImageProps`](https://chakra-ui.com/image) from
Chakra UI, so you can pass all `ImageProps`

# Categories

Categories is used to display a section with featured card and list of items.
[View Component](https://design-system.tradelingdev.com/?path=/story/home-page--category-card)

## Import

```jsx
import { Category } from '@tradeling/web-design-system';
```

> Make sure that [design system](https://github.com/tradeling/web-design-system)
> is installed in your application.

## Usage

### Basic usage

```jsx
function Categories() {
  const categoryData = {
    category: {
      title: 'All Food and Beverages',
      image: 'http://tradeling.com/assets/img/food-banner.jpg',
    },
    categories: [
      {
        image: 'http://tradeling.com/assets/img/beef-poultry.jpg',
        text: 'Beef & Poutry',
      },
      {
        image: 'http://tradeling.com/assets/img/dairy.jpg',
        text: 'Dairy',
      },
      {
        image: 'http://tradeling.com/assets/img/beverages.jpg',
        text: 'Beverage',
      },
      {
        image: 'http://tradeling.com/assets/img/dry-groceries.jpg',
        text: 'Dry Groceries',
      },
      {
        image: 'http://tradeling.com/assets/img/fresh-food.jpg',
        text: 'Fresh Food',
      },
      {
        image: 'http://tradeling.com/assets/img/frozen-food.jpg',
        text: 'Frozen Food',
      },
    ],
  };
  return (
    <Category>
      <Category.FeatureCard data={categoryData.category}></Category.FeatureCard>
      <Box size="4px" flexGrow={0} />
      <Category.ItemGroup>
        {categoryData.categories.map((data, index) => (
          <Category.Item key={index}>
            <Category.ItemImage src={data.image} />
            <Category.ItemText title={data.text} />
          </Category.Item>
        ))}
      </Category.ItemGroup>
    </Category>
  );
}
```

## Props

### Category

Category extends [`Flex`](https://chakra-ui.com/flex) from Chakra UI, so you can
pass all `FlexProps`.

### Category FeatureCard

Category.FeatureCard extends [`Box`](https://chakra-ui.com/box) from Chakra UI,
so you can pass all `BoxProps`.

### Category ItemImage

Category.ItemImage extends [`Image`](https://chakra-ui.com/image) from Chakra
UI, so you can pass all `ImageProps`.
