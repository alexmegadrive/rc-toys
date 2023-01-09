import { CartItems } from '../components/cart/cartModel';

export function getItemCountInCart(cartItems: CartItems, id: number) {
  let itemCount = 0;
  const index = cartItems.findIndex((cartItem) => cartItem.id == id);
  if (index >= 0) itemCount = cartItems[index].count;
  return itemCount;
}

