import React from 'react';
import { ReadyToShipProduct } from './ready-to-ship-product';
import { SupplierCard } from './supplier-card';
import { Button } from '../../components';

export default {
  title: 'CHAKRA/Category Listing Page',
};

const product = {
  image: 'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
  name: 'Shredded Chicken with Salad',
  minPrice: 26.0,
  maxPrice: 96.0,
  units: 19,
  supplier: 'Hangzhou Aiyomi Food Co., Ltd.',
};

export const readyToShipProducts = () => (
  <ReadyToShipProduct>
    <ReadyToShipProduct.Image src={product.image} alt={product.name} />
    <ReadyToShipProduct.Content>
      <ReadyToShipProduct.Name>{product.name}</ReadyToShipProduct.Name>
      <ReadyToShipProduct.Price
        minPrice={product.minPrice}
        maxPrice={product.maxPrice}
        currency="AED"
      />
      <ReadyToShipProduct.Units value={product.units} />
      <ReadyToShipProduct.Supplier>
        {product.supplier}.
      </ReadyToShipProduct.Supplier>
      <ReadyToShipProduct.ExtraInfo />
      <Button isFullWidth variant="outline">
        Contact Supplier
      </Button>
    </ReadyToShipProduct.Content>
  </ReadyToShipProduct>
);

//////////////////////////////////////////////////////////////////////////

const supplier = {
  featuredImage:
    'https://pinchofyum.com/wp-content/uploads/Chicken-Meal-Prep-with-Spices-and-Sauce.jpg',
  name: 'Fujian Stockpapa Import & Export Co., Ltd.',
  logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/Official_Bounty_Fresh_Logo.jpg',
  country: {
    name: 'China',
    code: 'ch',
  },
};

export const selectedSupplier = () => (
  <SupplierCard>
    <SupplierCard.Image src={supplier.featuredImage} alt={supplier.name} />
    <SupplierCard.Content>
      <SupplierCard.Logo src={supplier.logo} />
      <SupplierCard.Name>{supplier.name}</SupplierCard.Name>
      <SupplierCard.Highlights country="US" years="2 Yrs." price="$510,000+" />
      <Button size="lg" variant="primary" isFullWidth>
        Contact supplier
      </Button>
    </SupplierCard.Content>
  </SupplierCard>
);
