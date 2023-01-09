import { renderCatalog, renderCart, renderProduct } from '../index';
import { getQueryParams } from '../utils/getQueryParams';
import { IQueryParams } from '../utils/getQueryParams';
import { isQueryCorrect, correctQuery } from '../utils/isQueryCorrect';

type Route = {
  handler: (queryParams: IQueryParams) => void;
  title: string;
  description: string;
};
type Routes = { [key: string]: Route };

export const locationHandler = async () => {
  const url = document.location.href;
  const queryParams = getQueryParams(url);
  const pageTitle = 'RC Toys';
  const routes: Routes = {
    '404': {
      handler: () => (window.location.href = './404.html'),
      title: '404 | ' + pageTitle,
      description: 'Page not found',
    },
    '/': {
      handler: renderCatalog,
      title: 'Catalog | ' + pageTitle,
      description: 'Catalog page',
    },
    cart: {
      handler: renderCart,
      title: 'Cart | ' + pageTitle,
      description: 'Cart page',
    },
    product: {
      handler: renderProduct,
      title: 'Product details | ' + pageTitle,
      description: 'Product page',
    },
  };

  //get location hash without query params
  let location = window.location.hash.replace('#', '').split('?')[0];
  if (location.length == 0) {
    location = '/';
  }

  //get route from routes map
  let route: Route;
  if (!isQueryCorrect(queryParams, correctQuery)) {
    route = routes['404'];
  } else {
    route = routes[location] || routes['404'];
  }

  document.title = route.title;
  route.handler(queryParams);
};
