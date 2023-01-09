import './templates/404.html';
import './index.scss';

import CatalogView from './components/catalog/catalogView';
import CatalogModel from './components/catalog/catalogModel';
import CartView from './components/cart/cartView';
import CartModel from './components/cart/cartModel';
import ProductView from './components/product/productView';
import appView from './components/appView';
import { products } from './data/products';
import { Controller } from './controller/controller';
import { locationHandler } from './components/router';
import { IQueryParams } from './utils/getQueryParams';

const app = new Controller(
  new CatalogModel(products),
  new CatalogView(),
  new CartModel(),
  new CartView(),
  new ProductView(),
  new appView()
);

export function renderCatalog(queryParams: IQueryParams) {
  // apply filters in catalogModel by query parameters
  app.catalogModel.setFiltersFromQuery(queryParams);
  app.catalogView.renderUI(
    app.catalogModel.products,
    app.catalogModel.filteredProducts,
    app.cartModel.items,
    app.catalogModel.filters
  );
  app.appView.updateCartItemsTotal(0, 0, app.cartModel.totalSum, app.cartModel.totalItems);
  app.catalogView.setRangeFiltersState(app.catalogModel.getMinMaxRangeInputValues(true), queryParams, true);
  app.catalogView.setCategoryCountersState(app.catalogModel.filteredProducts);
  app.catalogView.bindSortProductsListeners((type: string) => app.catalogModel.sortFilteredProducts(type, true));
  app.catalogView.bindCartActionListeners(
    (itemId: number) => app.cartModel.newItem(itemId),
    (itemId: number) => app.cartModel.increaseItem(itemId),
    (itemId: number) => app.cartModel.decreaseItem(itemId)
  );
  app.catalogView.bindFilterByTextListener((name: string) => app.catalogModel.filterByName(name));
  app.catalogView.bindFilterControlActionListeners(() => app.catalogModel.resetFilters());
}

export function renderProduct(queryParams: IQueryParams) {
  const id = Number(queryParams.id);
  const index = app.catalogModel.products.findIndex((el) => el.id == id);
  if (index == -1) {
    window.location.href = './404.html';
    return;
  }
  const product = app.catalogModel.products[index];
  app.productView.renderUI(product, app.cartModel.items);
  app.appView.updateCartItemsTotal(0, 0, app.cartModel.totalSum, app.cartModel.totalItems);
  app.productView.bindCartAction(
    (itemId) => app.cartModel.newItem(itemId),
    (itemId) => app.cartModel.increaseItem(itemId),
    (itemId) => app.cartModel.decreaseItem(itemId)
  );
}
export function renderCart(queryParams: IQueryParams) {
  app.cartView.renderUI(app.cartModel.items, queryParams);
  app.appView.updateCartItemsTotal(0, 0, app.cartModel.totalSum, app.cartModel.totalItems);
  app.cartView.bindCartAction(
    (itemId: number) => app.cartModel.newItem(itemId),
    (itemId: number) => app.cartModel.increaseItem(itemId),
    (itemId: number) => app.cartModel.decreaseItem(itemId),
    (itemId: number) => app.cartModel.removeItem(itemId),
    app.cartModel.items
  );
}
window.addEventListener('hashchange', locationHandler);
if (!document.title.includes('404')) {
  locationHandler();
}
