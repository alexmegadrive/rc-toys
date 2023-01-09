import { cartHtml } from './templateCart';
import { headerHtml } from '../../templates/header';
import { footerHtml } from '../../templates/footer';
import { modalHtml } from '../../templates/modal';
import { getItemCountInCart } from '../../utils/getItemCountInCart';
import appView from '../appView';
import { CartItem } from './cartModel';
import { validateFuncs } from '../../utils/validateInputs';
import { IQueryParams } from '../../utils/getQueryParams';
import { IPromoCode, promocodes } from '../../data/promocodes';

class CartView {
  app: HTMLElement | null;
  appView: appView;
  productsPerPage: number;
  currentPage: number;
  appliedPromoCodes: IPromoCode[];

  constructor() {
    this.app = document.querySelector('#app') as HTMLElement;
    this.appView = new appView();
    this.productsPerPage = 3;
    this.currentPage = 1;
    this.appliedPromoCodes = [];
  }

  renderUI(cartItems: Array<CartItem>, queryParams: IQueryParams) {
    if (this.app) {
      this.app.innerHTML = '';
      this.app.insertAdjacentHTML('afterbegin', modalHtml);
      this.app.insertAdjacentHTML('afterbegin', headerHtml);
      this.app.insertAdjacentHTML('beforeend', cartHtml);
      this.app.insertAdjacentHTML('beforeend', footerHtml);
    }

    this.setPageViewProperties(queryParams);
    this.renderCartItems(cartItems);
    this.addChangeProductsPerPageListeners(cartItems);
    this.addValidationListeners();
    this.addChangeModalListeners();
    this.addPromocodeListeners();
  }

  renderCartItems(cartItems: Array<CartItem>) {
    const maxPage = Math.ceil(cartItems.length / this.productsPerPage) || 1;
    const cartContainer = document.querySelector('#cart') as HTMLElement;
    const paginationContainer = document.querySelector('#pagination');

    if (this.currentPage > maxPage) {
      this.currentPage = maxPage;
      this.appView.setURL('cartPage', maxPage.toString());
    }

    const start = this.productsPerPage * (this.currentPage - 1);
    const end = this.productsPerPage * this.currentPage;

    cartContainer.innerHTML = '';
    if (cartItems.length > 0) {
      cartItems.slice(start, end).forEach((element) => {
        const productCard = document.createElement('li');
        productCard.classList.add('item-cart', 'content__item');
        productCard.setAttribute('data-productcard-id', `${element.id}`);
        const itemCountInCart = getItemCountInCart(cartItems, element.id);
        productCard.innerHTML = `
        <h3 class="item-cart__title">
          <a class="link" href="./#product?id=${element.id}">${element.details.name}</a>
        </h3>
        <div class="item-cart__number">${1 + cartItems.findIndex((el) => el.id === element.id)}</div>
        <a class="link" href="./#product?id=${element.id}">
          <img class=item-cart__img src="${element.details.photo[0]}" alt=""></a>
        <div class="item__cart-container item__cart-container_transparent" data-cartBtn-id="${element.id}">
      ${this.appView.renderCartBtnContainer(element.id, itemCountInCart)}
      </div>
      <div class="product__stock-amount">Stock: ${element.details.stock}</div>

        <div class="item-cart__amount">
          <div class="item-cart__price">
            <span class="item-cart__price-number">${
              element.details.price
            }</span> <span class="item-cart__price-number"> $</span>
          </div>
          <button class="item-cart__btn-delete" data-product-id="${element.id}" data-cart-action="remove"></button>
        </div>
      `;
        cartContainer.append(productCard);
      });
    } else {
      const main = document.querySelector('.main');
      if (main) main.innerHTML = `<h2 class="cart__title">No products in cart</h2>`;
    }
    if (paginationContainer) paginationContainer.innerHTML = '';
    if (cartItems.length >= this.productsPerPage) {
      const count = Math.ceil(cartItems.length / this.productsPerPage);
      this.renderPaginationBtns(cartItems, count);
    }
    const currentPage = document.querySelector(`[data-cartPagination="${this.currentPage}"`);
    currentPage?.classList.add('pagination__button--active');
  }

  renderPaginationBtns(cartItems: Array<CartItem>, count: number) {
    const paginationContainer = document.querySelector('#pagination');
    if (paginationContainer) paginationContainer.innerHTML = '';
    if (count > 1) {
      if (paginationContainer) paginationContainer.innerHTML = 'Page: ';
      for (let i = 1; i <= count; i++) {
        const pagBtn = document.createElement('button');
        pagBtn.classList.add('pagination__button');
        pagBtn.setAttribute('data-cartPagination', i.toString());
        pagBtn.innerText = i.toString();
        pagBtn.onclick = () => {
          this.appView.setURL('cartPage', i.toString());
          this.currentPage = i;
          this.renderCartItems(cartItems);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
    }
  }

  addChangeProductsPerPageListeners(cartItems: Array<CartItem>) {
    const itemsPerPageSelector = document.querySelector('#cartItems-per-page-selector') as HTMLSelectElement;
    itemsPerPageSelector.value = String(this.productsPerPage);
    if (itemsPerPageSelector) {
      itemsPerPageSelector.addEventListener('change', (e) => {
        const value = (e.target as HTMLSelectElement).value;
        const productsPerPage = Number(value);
        this.productsPerPage = productsPerPage;
        this.appView.setURL('cartItemsPerPage', value);
        this.renderCartItems(cartItems);
        this.currentPage = 1;
      });
    }
  }
  bindCartAction(
    handleAddNew: (id: number) => void,
    handleIncrease: (id: number) => void,
    handleDecrease: (id: number) => void,
    handleRemove: (id: number) => void,
    cartItems: Array<CartItem>
  ) {
    const cartContainer = document.querySelector('#cart') as HTMLElement;
    if (cartContainer) {
      cartContainer.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        if (target.hasAttribute('data-cart-action')) {
          const action = target.dataset.cartAction;
          const itemId = Number(target.dataset.productId);
          switch (action) {
            case 'new':
              handleAddNew(itemId);
              break;
            case 'increase':
              handleIncrease(itemId);
              break;
            case 'decrease':
              handleDecrease(itemId);
              break;
            case 'remove':
              handleRemove(itemId);
              break;
            default:
              break;
          }
          this.renderCartItems(cartItems);
        }
      });
    }
  }

  setPageViewProperties(queryParams: IQueryParams) {
    if ('cartItemsPerPage' in queryParams && !isNaN(Number(queryParams.cartItemsPerPage))) {
      if (
        queryParams.cartItemsPerPage === '3' ||
        queryParams.cartItemsPerPage === '5' ||
        queryParams.cartItemsPerPage === '10'
      ) {
        const itemsPerPageSelector = document.querySelector('#cartItems-per-page-selector') as HTMLSelectElement;
        if (itemsPerPageSelector) itemsPerPageSelector.value = queryParams.cartItemsPerPage;
        this.productsPerPage = Number(queryParams.cartItemsPerPage);
      }
    }
    if ('cartPage' in queryParams && !isNaN(Number(queryParams.cartPage))) {
      this.currentPage = Number(queryParams.cartPage);
    }
    if ('cartModal' in queryParams && queryParams.cartModal === 'true') {
      this.showCartModal();
    }
  }

  addChangeModalListeners() {
    const modal = document.querySelector('.modal') as HTMLElement;
    const orderBtn = document.querySelector('.detail__btn-order') as HTMLElement;
    if (orderBtn) {
      orderBtn.onclick = () => {
        this.showCartModal();
      };
    }
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.hideCartModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.hideCartModal();
      }
    });
  }

  showCartModal() {
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
  }

  hideCartModal() {
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';
  }

  addValidationListeners() {
    const confirmBtn = document.querySelector('.form__submit-btn') as HTMLElement;
    const modalInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[data-cartmodal-inputfield]');
    const cardNumberInput: HTMLInputElement | null = document.querySelector('[data-cartmodal-inputfield="cardNumber"]');
    const cardImg: HTMLImageElement | null = document.querySelector('[data-cartModal-img]');
    const cardCvvInput: HTMLInputElement | null = document.querySelector('[data-cartmodal-inputfield="cardCvv"]');
    const cardDateInput: HTMLInputElement | null = document.querySelector('[data-cartmodal-inputfield="cardDate"]');
    const telInput: HTMLInputElement | null = document.querySelector('[data-cartmodal-inputfield="phone"]');

    if (cardNumberInput) {
      this.addMaxLengthControlListener(cardNumberInput);
    }
    if (cardCvvInput) {
      this.addMaxLengthControlListener(cardCvvInput);
    }

    telInput?.addEventListener('keydown', (event) => {
      if (event.target instanceof HTMLInputElement) {
        if (event.key !== '+' && event.key !== 'Backspace' && isNaN(Number(event.key))) {
          event.preventDefault();
        }
      }
    });

    cardNumberInput?.addEventListener('input', () => {
      if (cardNumberInput.value[0] === '1') {
        if (cardImg) {
          cardImg.src = './assets/img/mastercard.svg';
        }
      } else if (cardNumberInput.value[0] === '2') {
        if (cardImg) {
          cardImg.src = './assets/img/visa.svg';
        }
      } else if (cardNumberInput.value[0] === '3') {
        if (cardImg) {
          cardImg.src = './assets/img/american_express.webp';
        }
      } else {
        if (cardImg) {
          cardImg.src = './assets/img/no_logo.webp';
        }
      }
    });
    cardNumberInput?.addEventListener('keydown', (event) => {
      if (event.target instanceof HTMLInputElement) {
        if (event.key !== 'Backspace' && isNaN(Number(event.key))) {
          event.preventDefault();
        }
        const value = cardNumberInput.value.split(' ').join('');
        const valueAfter = value.match(/.{1,4}/g);
        if (valueAfter) cardNumberInput.value = valueAfter.join(' ');
      }
    });
    cardDateInput?.addEventListener('keydown', (event) => {
      if (event.target instanceof HTMLInputElement) {
        if (event.key !== 'Backspace' && isNaN(Number(event.key))) {
          event.preventDefault();
        }
        if (event.key !== 'Backspace' && event.target.value.length === 2) {
          event.target.value += '/';
        }
      }
    });

    const performInputValidation = (input: HTMLInputElement) => {
      const parent = input.parentElement;
      const field = input.dataset.cartmodalInputfield;
      const value = input.value;

      if (field !== undefined && field in validateFuncs && validateFuncs[field](value)) {
        return true;
      } else {
        parent?.classList.add('personal-detail__input--error');
        return false;
      }
    };

    modalInputs.forEach((input) => {
      const parent = input.parentElement;
      input.oninput = () => {
        parent?.classList.remove('personal-detail__input--error');
        input.onblur = () => {
          performInputValidation(input);
        };
      };
    });

    confirmBtn.onclick = (e) => {
      let isFormValid = true;
      e.preventDefault();
      modalInputs.forEach((input) => {
        input.classList.remove('personal-detail__input--error');
        isFormValid = performInputValidation(input) && isFormValid;
      });
      if (isFormValid) {
        this.onSuccessOrder();
      }
    };
  }

  addMaxLengthControlListener(input: HTMLInputElement) {
    input?.addEventListener('input', (event) => {
      if (event.target instanceof HTMLInputElement) {
        const target: HTMLInputElement = event.target;
        if (target.value.length > target.maxLength) target.value = target.value.slice(0, target.maxLength);
      }
    });
  }

  onSuccessOrder() {
    const form = document.querySelector('.form');
    if (form) {
      form.innerHTML = `
  <h2 class="form__title form__title--success">Thank you!
  Your order has been placed.
  You will be redirected in a few seconds.</h2>
  <a href="./" class="modal__success-order-image"></a>`;
      localStorage.clear();
    }
    setTimeout(() => {
      window.location.href = './';
    }, 3000);
  }

  addPromocodeListeners() {
    const promocodeInput: HTMLInputElement | null = document.querySelector('#promocode-input');
    const promocodesContainer = document.querySelector('.promocode__list');
    const promocodeBtn = document.querySelector('.promocode__input-btn') as HTMLButtonElement;

    function renderPromocode(promocodeObj: IPromoCode) {
      const promocodeHTML = `
      <label class="checkbox promocode__checkbox-container">
      <input class="checkbox__real" type="checkbox" name="${promocodeObj.code}" data-promocode-id="${promocodeObj.id}">
      <span class="checkbox__fake"></span>
      <span class="checkbox__title">
        ${promocodeObj.title}
      </span>
    </label>
      `;
      promocodesContainer?.insertAdjacentHTML('beforeend', promocodeHTML);
    }

    function addPromocodeItem() {
      if (promocodeInput) {
        const promocodeElem = promocodes.find((el) => el.code.toLowerCase() === promocodeInput.value.toLowerCase());
        const isAdded = document.querySelector(`[data-promocode-id="${promocodeElem?.id}"]`);

        promocodeInput.value = '';

        if (promocodeElem && !isAdded) {
          renderPromocode(promocodeElem);
        }

        if (!promocodeElem) {
          const tempPlaceholder = promocodeInput.placeholder;

          promocodeInput.placeholder = 'Sorry, promocode not found!';
          setTimeout(() => {
            promocodeInput.placeholder = tempPlaceholder;
          }, 1500);
        }
      }
    }

    promocodeBtn?.addEventListener('click', addPromocodeItem);

    if (promocodeInput) {
      promocodeInput.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') addPromocodeItem();
      });
    }

    promocodesContainer?.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.hasAttribute('data-promocode-id')) {
        const id = Number(event.target.getAttribute('data-promocode-id'));
        const promocodeElem = promocodes.find((el) => el.id === id);
        if (promocodeElem) this.applyPromocode(promocodeElem);
      }
    });
  }

  applyPromocode(promocodeElem: IPromoCode) {
    const index = this.appliedPromoCodes.findIndex((el) => el.id == promocodeElem.id);

    if (index !== -1) {
      this.appliedPromoCodes.splice(index, 1);
    } else {
      this.appliedPromoCodes.push(promocodeElem);
    }
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    const newTotalPrice = this.getNewTotalPrice();
    const detailContainer = document.querySelector('.total-price');
    const isAdded = document.querySelector('#cart-total-sum-new') as HTMLElement;
    const totalPriceBlock = document.querySelector('#cart-total-text') as HTMLElement;
    const totalPriceBlockNew = document.querySelector('#cart-total-text-new') as HTMLElement;

    const newPrice = `
    <div class="total-price__wrapper total-price__wrapper--new" id="cart-total-text-new">
        <span class="total-price__text">Total:</span><span class="total-price__number" id="cart-total-sum-new">${newTotalPrice}</span>
    </div>
    `;
    totalPriceBlock.classList.add('total-price__wrapper--old');
    if (!isAdded) {
      detailContainer?.insertAdjacentHTML('beforeend', newPrice);
    } else {
      isAdded.textContent = `${String(newTotalPrice)}`;
    }

    if (this.appliedPromoCodes.length === 0) {
      totalPriceBlock.classList.remove('total-price__wrapper--old');
      totalPriceBlockNew.remove();
    }
  }

  getNewTotalPrice() {
    const discount = this.appliedPromoCodes.reduce((acc: number, cur: IPromoCode) => acc + cur.discount, 0);
    const oldPrice = Number(document.querySelector('#cart-total-sum')?.textContent);
    return Math.floor((oldPrice / 100) * (100 - discount));
  }
}

export default CartView;
