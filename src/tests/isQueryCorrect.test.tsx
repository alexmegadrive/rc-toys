import { isQueryCorrect } from '../utils/isQueryCorrect';
import { correctQuery } from '../utils/isQueryCorrect';

const correct1 = {
    id: '',
    category: '',
    brand: '',
    color: '',
    name: '',
    priceMin: '',
    priceMax: '',
    weightMin: '',
    weightMax: '',
    sortType: '',
    cartPage: '',
    cartItemsPerPage: '',
    cartModal: '',
    catalogDisplayMode: '',
  };
const correct2 = {
    id: '',
    category: '',
    cartItemsPerPage: '',
    cartModal: '',
    catalogDisplayMode: '',
  };
const inCorrect1 = {
    id2: '',
    test: '',
    cartItemsPerPage: '',
    cartModal: '',
    catalogDisplayMode: '',
  };
const inCorrect2 = {
    test: '',
    testItems: '',
    testTarget: '',
    testModal: '',
  };

test('Query: should be true on correct query', () => {
    expect(isQueryCorrect(correct1, correctQuery)).toEqual(true);
    expect(isQueryCorrect(correct2, correctQuery)).toEqual(true);

});
test('Query: should be false on incorrect query', () => {
    expect(isQueryCorrect(inCorrect1, correctQuery)).toEqual(false);
    expect(isQueryCorrect(inCorrect2, correctQuery)).toEqual(false);

});
