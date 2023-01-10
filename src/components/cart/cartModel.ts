import { products } from '../../data/products';
import { Product } from '../../data/products';

export type CartItem = {
  id: number;
  count: number;
  details: Product;
};
export type CartItems = Array<CartItem>;

class CartModel {
  items: Array<CartItem>;
  totalSum: number;
  totalItems: number;
  onCartChanged: undefined | ((id: number, itemCountInCart: number, totalSum: number, totalItems: number) => void);

  constructor() {
    this.items = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '') : [];
    this.totalSum = this.getCartTotalSum(this.items);
    this.totalItems = this.getCartTotalItems(this.items);
  }

  bindUpdateViewOnCartChanged(
    callback: (id: number, itemCountInCart: number, totalSum: number, totalItems: number) => void
  ) {
    this.onCartChanged = callback;
  }
  _updateView(id: number, itemCountInCart: number, totalSum: number, totalItems: number) {
    if (this.onCartChanged) this.onCartChanged(id, itemCountInCart, totalSum, totalItems);
  }

  updateCartTotal() {
    this.totalSum = this.getCartTotalSum(this.items);
    this.totalItems = this.getCartTotalItems(this.items);
    this.saveCartToLocalStorage();
  }

  getCartTotalSum(cartItems: CartItem[]) {
    return cartItems.reduce((acc, el) => {
      return el.count * el.details.price + acc;
    }, 0);
  }
  getCartTotalItems(cartItems: CartItem[]) {
    return cartItems.reduce((acc, el) => {
      return el.count + acc;
    }, 0);
  }
  newItem(itemId: number) {
    const productIndex = products.findIndex((el) => el.id == itemId);
    const product = products[productIndex];

    const index = this.items.findIndex((el) => el.id == product.id);
    if (index >= 0 && this.items[index].count > 0) return;
    else if (index >= 0 && this.items[index].count == 0) this.items[index].count++;
    else {
      const newCartItem: CartItem = {
        id: product.id,
        count: 1,
        details: product,
      };
      this.items.push(newCartItem);
    }
    this.updateCartTotal();
    this._updateView(product.id, 1, this.totalSum, this.totalItems);
  }

  removeItem(id: number) {
    const itemIndex = this.items.findIndex((el) => el.id == id);
    this.items.splice(itemIndex, 1);
    this.updateCartTotal();
    this._updateView(id, -1, this.totalSum, this.totalItems);
  }

  increaseItem(id: number) {
    const itemIndex = this.items.findIndex((el) => el.id == id);
    if (this.items[itemIndex].count < this.items[itemIndex].details.stock) {
      this.items[itemIndex].count++;
    }
    this.updateCartTotal();
    this._updateView(id, this.items[itemIndex].count, this.totalSum, this.totalItems);
  }

  decreaseItem(id: number) {
    const itemIndex = this.items.findIndex((el) => el.id == id);

    if (itemIndex >= 0) {
      if (this.items[itemIndex].count > 0) {
        this.items[itemIndex].count--;
        this.updateCartTotal();
        this._updateView(id, this.items[itemIndex].count, this.totalSum, this.totalItems);
      }
      if (this.items[itemIndex].count === 0) {
        this.removeItem(id);
      }
    }
  }

  saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }
}

export default CartModel;
