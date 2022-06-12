import React from 'react';
import {
  Filter,
  FilterGroup,
  FilterCheckboxGroup,
  FilterSearchInput,
  FilterApplyButton,
  FilterLinkGroup,
  FilterLink,
  FilterMultiSelect,
} from './filter';

export default {
  title: 'CHAKRA/Filter',
};

const links = [
  'Baby food & Non food',
  'Bakery & Pastry',
  'Beverages',
  'Confectionery',
  'Dairy',
  'Dry grocery',
  'Fresh food',
  'Frozen grocery',
  'Healthy & Organic food',
  'Meat & Poultry',
  'Non Food',
  'Seafood',
];

const checkboxes = [
  { label: 'Friends', value: 'friends', count: 12 },
  { label: 'Rick and Morty', value: 'rick-and-morty', count: 12 },
  { label: 'Silicon Valley', value: 'silicon-valley', count: 12 },
  { label: 'The Office', value: 'the-office', count: 12 },
  { label: 'Final Space', value: 'final-space', count: 12 },
  { label: 'Community', value: 'community' },
];

export const Basic = () => (
  <FilterGroup mt="50px" maxW="200px">
    <Filter title="Filter by categories">
      <FilterLinkGroup>
        {links.map(option => (
          <FilterLink key={option}>{option}</FilterLink>
        ))}
      </FilterLinkGroup>
    </Filter>

    <Filter title="Filter by best shows">
      <FilterMultiSelect options={checkboxes} maxVisible={4} showCount />
    </Filter>

    <Filter title="Filter by product type">
      <FilterSearchInput placeholder="Search for anything..." />
      <FilterCheckboxGroup options={checkboxes} showCount />
    </Filter>

    <Filter title="Filter by product">This is a collapsible filter</Filter>
    <Filter title="Filter by farm type">This is a collapsible filter</Filter>
    <FilterApplyButton />
  </FilterGroup>
);
