import { Product, Products } from '../../data/products';
import { IQueryParams } from '../../utils/getQueryParams';

export interface IFilters {
  text: string;
  brand: Array<string>;
  category: Array<string>;
  color: Array<string>;
  size: Array<string>;
  priceMin: number;
  priceMax: number;
  weightMin: number;
  weightMax: number;
  sortType: string;
  catalogDisplayMode: string;
}

export interface ICategoryFilters {
  brand: Array<string>;
  category: Array<string>;
  color: Array<string>;
  size: Array<string>;
}

type CategoryFiltersKeyType = keyof ICategoryFilters;

export interface IRangeFilters {
  priceMin: number;
  priceMax: number;
  weightMin: number;
  weightMax: number;
}

type RangeFiltersKeyType = keyof IRangeFilters;

export type MinMaxObj = {
  minWeight: number;
  maxWeight: number;
  minPrice: number;
  maxPrice: number;
  needUpdate: boolean;
};

class CatalogModel {
  public readonly products: Products;
  public filteredProducts: Products;
  public filters: IFilters;
  private readonly filtersDefault: IFilters;
  onFilterChanged: (filteredArr: Products, minMaxRangeValues: MinMaxObj) => void;

  constructor(products: Products) {
    this.products = [...products];
    this.filteredProducts = [...products];
    this.filtersDefault = {
      text: '',
      brand: [],
      category: [],
      color: [],
      size: [],
      priceMin: 0,
      priceMax: 0,
      weightMin: 0,
      weightMax: 0,
      sortType: 'name-increase',
      catalogDisplayMode: 'grid',
    };
    this.filters = { ...this.filtersDefault };
    this.onFilterChanged = () => {
      return;
    };
  }

  bindFilterChanged(callback: (filteredArr: Products, minMaxRangeValues: MinMaxObj) => void) {
    this.onFilterChanged = callback;
  }

  //binded function of updating filtered products view
  _updateProductsView() {
    const minMaxRangeValues = this.getMinMaxRangeInputValues(true);
    this.onFilterChanged(this.filteredProducts, minMaxRangeValues);
  }

  setFiltersFromQuery(queryParams: IQueryParams) {
    this.filters.text = 'name' in queryParams ? queryParams.name : '';
    this.filters.brand = 'brand' in queryParams ? queryParams.brand.split(',') : [];
    this.filters.color = 'color' in queryParams ? queryParams.color.split(',') : [];
    this.filters.category = 'category' in queryParams ? queryParams.category.split(',') : [];
    this.filters.sortType = 'sortType' in queryParams ? queryParams.sortType : 'name-increase';
    this.filters.priceMin = 'priceMin' in queryParams ? +queryParams.priceMin : 0;
    this.filters.priceMax = 'priceMax' in queryParams ? +queryParams.priceMax : Infinity;
    this.filters.weightMin = 'weightMin' in queryParams ? +queryParams.weightMin : 0;
    this.filters.weightMax = 'weightMax' in queryParams ? +queryParams.weightMax : Infinity;
    this.filters.catalogDisplayMode =
      'catalogDisplayMode' in queryParams &&
      (queryParams.catalogDisplayMode === 'grid' || queryParams.catalogDisplayMode === 'list')
        ? queryParams.catalogDisplayMode
        : 'grid';
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.getFilteredProducts();
    this.sortFilteredProducts(this.filters.sortType, false);
  }

  getFilteredProducts() {
    const searchString = this.filters.text.toLowerCase();

    return this.products.filter((element) => {
      return (
        (element.name.toLowerCase().includes(searchString) ||
          element.class.toLowerCase().includes(searchString) ||
          element.color.toLowerCase().includes(searchString) ||
          element.size.toLowerCase().includes(searchString) ||
          element.engine.toLowerCase().includes(searchString) ||
          element.protection.toLowerCase().includes(searchString) ||
          element.description.toLowerCase().includes(searchString) ||
          element.remote.toLowerCase().includes(searchString) ||
          element.radius.toLowerCase().includes(searchString) ||
          element.headless.toLowerCase().includes(searchString) ||
          element.remoteBattery.toLowerCase().includes(searchString) ||
          element.fpv.toLowerCase().includes(searchString) ||
          element.camera.toLowerCase().includes(searchString) ||
          element.weight.toString() == searchString ||
          element.price.toString() == searchString ||
          element.year.toString() == searchString ||
          element.stock.toString() == searchString) &&
        element.price >= this.filters.priceMin &&
        (!this.filters.priceMax || element.price <= this.filters.priceMax) &&
        element.weight >= this.filters.weightMin &&
        (!this.filters.weightMax || element.weight <= this.filters.weightMax) &&
        (!this.filters.brand.length || this.filters.brand.includes(element.brand.toLowerCase())) &&
        (!this.filters.color.length || this.filters.color.includes(element.color.toLowerCase())) &&
        (!this.filters.category.length || this.filters.category.includes(element.class.toLowerCase())) &&
        (!this.filters.size.length || this.filters.size.includes(element.size))
      );
    });
  }

  getSuggestedFilteredProducts(value: string) {
    console.log('value :', value);
    // const value = this.filters.text.toLowerCase();

    return this.products.filter((element) => {
      return (
        element.name.toLowerCase().includes(value) ||
        element.class.toLowerCase().includes(value) ||
        element.color.toLowerCase().includes(value) ||
        element.size.toLowerCase().includes(value) ||
        element.engine.toLowerCase().includes(value) ||
        element.protection.toLowerCase().includes(value) ||
        element.description.toLowerCase().includes(value)
      );
    });
  }

  getFilteredProductsAlt() {
    const searchString = this.filters.text.toLowerCase();
    let result: Products = [];

    const filterInit = async () => {
      return this.products;
    };

    function filter(list: Products, predicate: (element: Product) => boolean) {
      const result: Products = [];
      list.forEach((element: Product) => {
        if (predicate(element)) {
          result.push(element);
        }
      });
      return result;
    }

    filterInit()
      .then((p) => filter(p, (el) => el.name.toLowerCase().includes(searchString)))
      .then((p) => filter(p, (el) => el.price >= this.filters.priceMin))
      .then((p) => filter(p, (el) => !this.filters.priceMax || el.price <= this.filters.priceMax))
      .then((p) => filter(p, (el) => !this.filters.brand.length || this.filters.brand.includes(el.brand.toLowerCase())))
      .then((p) => filter(p, (el) => !this.filters.color.length || this.filters.color.includes(el.color.toLowerCase())))
      .then((p) =>
        filter(p, (el) => !this.filters.category.length || this.filters.category.includes(el.class.toLowerCase()))
      )
      .then((filteredList) => {
        result = filteredList;
      });
    return result;
  }

  filterBy(key: string | null, value: string | null) {
    const categoryKey = key as CategoryFiltersKeyType;
    //check if key is a category/color/brand key

    if (key && value) {
      value = value.toLowerCase();
      if (!this.filters[categoryKey].includes(value)) {
        this.filters[categoryKey].push(value);
      } else {
        const index = this.filters[categoryKey].indexOf(value);
        this.filters[categoryKey].splice(index, 1);
      }
      this.applyFilters();
      this._updateProductsView();
    }
  }

  filterByName(name: string) {
    this.filters.text = name;
    this.applyFilters();
    this._updateProductsView();
  }

  filterByRange(type: string, value: string) {
    const minMaxRangeValues = this.getMinMaxRangeInputValues(false);
    const rangeType = type as RangeFiltersKeyType;
    //check if key is a category/color/brand key

    this.filters[rangeType] = Number(value);
    this.applyFilters();
    this.onFilterChanged(this.filteredProducts, minMaxRangeValues);
  }

  getMinMaxRangeInputValues(update: boolean | undefined) {
    const preFilteredProducts: Products = [];
    const searchString = this.filters.text.toLowerCase();
    this.products.forEach((element) => {
      if (
        (element.name.toLowerCase().includes(searchString) ||
          element.class.toLowerCase().includes(searchString) ||
          element.color.toLowerCase().includes(searchString) ||
          element.size.toLowerCase().includes(searchString) ||
          element.engine.toLowerCase().includes(searchString) ||
          element.protection.toLowerCase().includes(searchString) ||
          element.description.toLowerCase().includes(searchString) ||
          element.remote.toLowerCase().includes(searchString) ||
          element.radius.toLowerCase().includes(searchString) ||
          element.headless.toLowerCase().includes(searchString) ||
          element.remoteBattery.toLowerCase().includes(searchString) ||
          element.fpv.toLowerCase().includes(searchString) ||
          element.camera.toLowerCase().includes(searchString) ||
          element.weight.toString() == searchString ||
          element.price.toString() == searchString ||
          element.year.toString() == searchString ||
          element.stock.toString() == searchString) &&
        (this.filters.brand.length == 0 || this.filters.brand.includes(element.brand.toLowerCase())) &&
        (this.filters.category.length == 0 || this.filters.category.includes(element.class.toLowerCase())) &&
        (this.filters.color.length == 0 || this.filters.color.includes(element.color.toLowerCase()))
      ) {
        preFilteredProducts.push(element);
      }
    });
    const result: MinMaxObj = {
      minWeight: Math.min(...preFilteredProducts.map((item) => item.weight)),
      maxWeight: Math.max(...preFilteredProducts.map((item) => item.weight)),
      minPrice: Math.min(...preFilteredProducts.map((item) => item.price)),
      maxPrice: Math.max(...preFilteredProducts.map((item) => item.price)),
      needUpdate: update ? true : false,
    };
    return result;
  }

  sortFilteredProducts(type: string, render: boolean) {
    this.filters.sortType = type;
    this.filteredProducts = this.filteredProducts.sort((a, b) => {
      switch (type) {
        case 'name-increase':
          return a.name.localeCompare(b.name);
        case 'name-decrease':
          return b.name.localeCompare(a.name);
        case 'price-increase':
          return a.price - b.price;
        case 'price-decrease':
          return b.price - a.price;
        default:
          return 0;
      }
    });
    if (render) this._updateProductsView();
  }

  resetFilters() {
    this.filters = { ...this.filtersDefault };
    this.filters.brand = [];
    this.filters.color = [];
    this.filters.category = [];
    this.applyFilters();
    this._updateProductsView();
  }
}

export default CatalogModel;
