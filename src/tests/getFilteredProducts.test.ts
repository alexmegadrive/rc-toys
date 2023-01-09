import CatalogModel from '../components/catalog/catalogModel';
import { products } from '../data/products';
const f = new CatalogModel(products);

test('Filters: Test category truck, should be 4 items', () => {
  f.filters = {
    text: '',
    brand: [],
    category: ['truck'],
    color: [],
    size: [],
    priceMin: 0,
    priceMax: Infinity,
    weightMin: 0,
    weightMax: Infinity,
    sortType: 'name-increase',
    catalogDisplayMode: 'grid',
  };
  expect(f.getFilteredProducts()).toHaveLength(4);
});

test('Filters: test category red, should be 5 items', () => {
  f.filters = {
    text: '',
    brand: [],
    category: [],
    color: ['red'],
    size: [],
    priceMin: 0,
    priceMax: 0,
    weightMin: 0,
    weightMax: 0,
    sortType: 'name-increase',
    catalogDisplayMode: 'grid',
  };

  expect(f.getFilteredProducts()).toHaveLength(5);
});
test('Filters: Test brand Himoto, should be 2 items', () => {
  f.filters = {
    text: '',
    brand: ['himoto'],
    category: [],
    color: [],
    size: [],
    priceMin: 0,
    priceMax: Infinity,
    weightMin: 0,
    weightMax: Infinity,
    sortType: 'name-increase',
    catalogDisplayMode: 'grid',
  };

  expect(f.getFilteredProducts()).toHaveLength(2);
});
