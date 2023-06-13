import { getQueryParams } from '../utils/getQueryParams';
import qs from 'qs';
//class for common render functions
class AppView {
  updateCartItemsTotal(id: number, itemCountInCart: number, totalSum: number, totalCount: number) {
    const cartBtnContaier = document.querySelector(`[data-cartBtn-id="${id}"]`);
    const totalSumHeader = document.querySelector('#header-total-sum');
    const totalCountHeader = document.querySelector('#header-total-count');
    const totalSumCart = document.querySelector('#cart-total-sum');
    const totalProductCart = document.querySelector('#cart-total-product');

    if (totalSumHeader && totalCountHeader) {
      totalSumHeader.innerHTML = totalSum.toString();
      totalCountHeader.innerHTML = totalCount.toString();
    }
    if (totalSumCart && totalProductCart) {
      totalSumCart.innerHTML = totalSum.toString();
      totalProductCart.innerHTML = totalCount.toString();
    }
    if (itemCountInCart == -1) {
      const cartItemCard = document.querySelector(`[data-productcard-id="${id}"]`);
      cartItemCard?.remove();
      return;
    }

    if (cartBtnContaier) {
      cartBtnContaier.innerHTML = this.renderCartBtnContainer(id, itemCountInCart);
    }
  }
  renderCartBtnContainer(id: number, itemCountInCart: number) {
    const newItemBtn = `
          <button class="item__cart-addBtn" data-cart-action="new" data-product-id="${id}">Add to cart</button>`;
    const existingItemBtns = `
          <div class="item__cart-countControlBtns">
          <button class="item__buy-btn" data-cart-action="decrease" data-product-id="${id}">-</button>
          <span class="item__buy-number">${itemCountInCart}</span>
          <button class="item__buy-btn" data-cart-action="increase" data-product-id="${id}">+</button>
          </div>
        `;
    return itemCountInCart > 0 ? existingItemBtns : newItemBtn;
  }

  setURL(key: string, value: string | null) {
    if (!value) return;
    else value = value.toLowerCase();
    const url = document.location.href;
    const queryParams = getQueryParams(url);
    console.log('queryParams :', queryParams);

    if (key in queryParams && (key == 'color' || key == 'brand' || key == 'category')) {
      // if key is color or brand or category

      if (!queryParams[key].split(',').includes(value)) {
        // and  if there is no such value, add it
        const keyArr = queryParams[key].split(',');
        keyArr.push(value);
        const keyStr = keyArr.join('%2C');
        queryParams[key] = keyStr;
      } else {
        // remove value if already has such value
        const valueArr = queryParams[key].split(',');
        const index = valueArr.findIndex((el) => el == value);
        valueArr.splice(index, 1);
        const valueStr = valueArr.join('%2C');
        queryParams[key] = valueStr;
      }
    } else {
      // not category/brand/color,  rewrite exising key
      queryParams[key] = value.toString().split(' ').join('%2C');
    }

    const path = url.split('?')[0] + (Object.keys(queryParams).length > 0 ? '?' : '');
    const queryString = qs.stringify(queryParams).split('%252C').join('%2C');

    window.history.pushState('Catalog', 'Catalog | RC Toys', path + queryString);
  }
}

export default AppView;
