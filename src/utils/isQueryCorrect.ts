import { IQueryParams } from './getQueryParams';

export const correctQuery = {
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

export function isQueryCorrect(requiredObj: IQueryParams, correctObj: IQueryParams) {
  for (const key in requiredObj) {
    // eslint-disable-next-line no-prototype-builtins
    if (!correctObj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
