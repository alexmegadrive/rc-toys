import CatalogModel from '../components/catalog/catalogModel';
import CatalogView from '../components/catalog/catalogView';
import CartModel from '../components/cart/cartModel';
import CartView from '../components/cart/cartView';
import ProductView from '../components/product/productView';
import AppView from '../components/appView';
import { Products } from '../data/products';
import { MinMaxObj } from '../components/catalog/catalogModel';

export class Controller {
  public catalogModel: CatalogModel;
  public catalogView: CatalogView;
  public cartModel: CartModel;
  public cartView: CartView;
  public productView: ProductView;
  public appView: AppView;

  constructor(
    catalogModel: CatalogModel,
    catalogView: CatalogView,
    cartModel: CartModel,
    cartView: CartView,
    productView: ProductView,
    appView: AppView
  ) {
    this.catalogModel = catalogModel;
    this.catalogView = catalogView;
    this.cartModel = cartModel;
    this.cartView = cartView;
    this.productView = productView;
    this.appView = appView;

    //callbacks for  linking View  and Model
    this.catalogView.bindGetSuggestedProducts((value: string) => {
      return this.catalogModel.getSuggestedFilteredProducts(value);
    });

    this.catalogModel.bindFilterChanged((filteredArr: Products, minMaxRangeValues: MinMaxObj) => {
      this.catalogView.renderProducts(filteredArr, this.cartModel.items);
      this.catalogView.setRangeFiltersState(minMaxRangeValues, {}, false);
      this.catalogView.setCategoryCountersState(filteredArr);
    });

    this.catalogView.bindRangeHandlerFunc((key: string, value: string) => this.catalogModel.filterByRange(key, value));
    this.cartModel.bindUpdateViewOnCartChanged(
      (id: number, itemCountInCart: number, totalSum: number, totalItems: number) => {
        this.appView.updateCartItemsTotal(id, itemCountInCart, totalSum, totalItems);
      }
    );
    this.catalogView.bindFilterByCategoryListeners((key: string | null, value: string | null) =>
      this.catalogModel.filterBy(key, value)
    );
  }
}
