import * as React from 'react';
import { Trending } from './trending';
import { Category } from './categories';
import { Button } from '../../components';
import { Box } from '@chakra-ui/react';

export default {
  title: 'CHAKRA/Home page',
};

const trending = {
  title: 'Food and Beverage Trends',
  description: 'Let us tell you about the latest trends in Food and Beverage',
  items: [
    {
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'The Food Movement',
    },
    {
      image:
        'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'The Kitchen Reinvented',
    },
    {
      image:
        'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Maximizing COP Cost',
    },
  ],
};

export const TrendingCard = () => (
  <Trending maxW="800px">
    <Trending.Title>{trending.title}</Trending.Title>
    <Trending.Text>{trending.description}</Trending.Text>
    <Trending.ItemGroup>
      {trending.items.map(item => (
        <Trending.Item key={item.title}>
          <Trending.ItemImage src={item.image} />
          <Trending.ItemTitle>{item.title}</Trending.ItemTitle>
        </Trending.Item>
      ))}
    </Trending.ItemGroup>
  </Trending>
);

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

export const categoryCard = () => (
  <Category>
    <Category.FeatureCard data={categoryData.category}>
      <Button minWidth="220px" size="lg" variant="outline">
        View our products
      </Button>
    </Category.FeatureCard>
    <Box size="4px" flexGrow={0} />
    <Category.ItemGroup>
      {categoryData.categories.map((data, index) => (
        <Category.Item key={index}>
          <Category.ItemImage src={data.image} isAboveOverlay={index === 5} />
          <Category.ItemText title={data.text} />
        </Category.Item>
      ))}
    </Category.ItemGroup>
  </Category>
);
