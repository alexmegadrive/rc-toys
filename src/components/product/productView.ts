import { headerHtml } from '../../templates/header';
import { footerHtml } from '../../templates/footer';
import { getItemCountInCart } from '../../utils/getItemCountInCart';
import appView from '../appView';
import { Product } from '../../data/products';
import { CartItem } from '../cart/cartModel';

class ProductView {
  app: HTMLElement | null;
  main: HTMLElement | null;
  appView: appView;
  constructor() {
    this.app = document.querySelector('#app') as HTMLElement;
    this.main = document.querySelector('#main') as HTMLElement;
    this.appView = new appView();
  }

  renderUI(product: Product, cart: Array<CartItem>) {
    if (this.app) {
      this.app.innerHTML = '';
      const productHtml = `
      <main class="main" id="main">
      </main>`;
      this.app.insertAdjacentHTML('afterbegin', headerHtml);
      this.app.insertAdjacentHTML('beforeend', productHtml);
      this.app.insertAdjacentHTML('beforeend', footerHtml);
    }
    this.renderCard(product, cart);
    this.addChangeProductImgListeneres();
  }

  renderCard(product: Product, cart: Array<CartItem>) {
    const itemCountInCart = getItemCountInCart(cart, product.id);
    const cardHtml = `
    <main class="main main_product">
      <div class="breadcrumbs">
        <a class="breadcrumbs__link" href="./">Store</a>
        <span class="breadcrumbs__separator"> >> </span>
        <a class="breadcrumbs__link" href="./?category=${product.class.toLocaleLowerCase()}">${product.class}</a>
        <span class="breadcrumbs__separator"> >> </span>
        <a class="breadcrumbs__link" href="./?brand=${product.brand.toLocaleLowerCase()}">${product.brand}</a>
        <span class="breadcrumbs__separator"> >> </span>
        <a class="breadcrumbs__link">${product.model}</a>
      </div>
      <div class="product">
        <h2 class="product__title">${product.name}</h2>
        <div class="slider product__slider">
          <div class="slider__wrapper-main">
            <img class="product__img-main" src="${product.photo[0]}"></img>
          </div>
          <div class="slider__wrapper-additional">
            <img class="product__img-additional product__img-additional--active" src=${product.photo[0]}></img>
            <img class="product__img-additional" src=${product.photo[1]}></img>
            <img class="product__img-additional" src=${product.photo[2]}></img>
          </div>
          <div class="order">
            <div class="order__price"><span class="order__text">Price:</span>
               <span class="order__number">${product.price}</span>
              <span class="order__currency">$</span>
            </div>
            <div class="item__cart-container" data-cartBtn-id="${product.id}">
            ${this.appView.renderCartBtnContainer(product.id, itemCountInCart)}
            </div>
            <div>
              <button class="item__cart-order"
              data-cart-action="order"
              data-product-id="${product.id}">
              Order now
              </button>
            </div>
            <div class="product__stock-amount">Stock: ${product.stock}</div>
          </div>
        </div>
        <div class="info-block product__info-block">
        <div class="description info-block__description">
          <h3 class="description__title">Description</h3>
          <p class="description__text">${product.description}</p>
        </div>
        <div class="product__characteristic-wrapper">
          <ul class="characteristic">
            <li class="item-char characteristic__item">
              <h4 class="item-char__title">Classification</h4>
              <ul class="properties item-char__prop">
                <li class="properties__item">
                  <span class="properties__title">Class</span>
                  <span class="properties__value">${product.class}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Model</span>
                  <span class="properties__value">${product.model}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Brand</span>
                  <span class="properties__value">${product.brand}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Color</span>
                  <span class="properties__value">${product.color}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Size</span>
                  <span class="properties__value">${product.size}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Weight</span>
                  <span class="properties__value">${product.weight}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Engine</span>
                  <span class="properties__value">${product.engine}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Moisture protection</span>
                  <span class="properties__value">${product.protection}</span>
                </li>
                <li class="properties__item">
                <span class="properties__title">Production year</span>
                <span class="properties__value">${product.year}</span>
              </li>
              </ul>
            </li>
            <li class="item-char characteristic__item">
              <h4 class="item-char__title">Remote control</h4>
              <ul class="properties item-char__prop">
                <li class="properties__item">
                  <span class="properties__title">Remote control included</span>
                  <span class="properties__value">${product.remote}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Radius of action</span>
                  <span class="properties__value">${product.radius}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Headless Mode</span>
                  <span class="properties__value">${product.headless}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Remote Control Batteries</span>
                  <span class="properties__value">${product.remoteBattery}</span>
                </li>
              </ul>
            </li>
            <li class="item-char characteristic__item">
              <h4 class="item-char__title">Camera</h4>
              <ul class="properties item-char__prop">
                <li class="properties__item">
                  <span class="properties__title">First Person View (FPV)</span>
                  <span class="properties__value">${product.fpv}</span>
                </li>
                <li class="properties__item">
                  <span class="properties__title">Camera included</span>
                  <span class="properties__value">${product.camera}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
    `;
    this.main = document.querySelector('#main') as HTMLElement;
    if (this.main) {
      this.main.innerHTML = cardHtml;
    }
  }

  bindCartAction(
    handleAddNew: (id: number) => void,
    handleIncrease: (id: number) => void,
    handleDecrease: (id: number) => void
  ) {
    const productsContainer = document.querySelector('#main') as HTMLElement;
    productsContainer.addEventListener('click', (e) => {
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
          case 'order':
            handleAddNew(itemId);
            window.location.href = './#cart?cartModal=true';
            break;
          default:
            break;
        }
      }
    });
  }

  addChangeProductImgListeneres() {
    const additionalsImg = document.querySelectorAll('.product__img-additional');
    const mainImg = document.querySelector('.product__img-main') as HTMLImageElement;
    additionalsImg.forEach((img) => {
      img.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLImageElement;
        additionalsImg.forEach((element) => {
          element.classList.remove('product__img-additional--active');
        });
        target.classList.add('product__img-additional--active');
        mainImg.src = target.src;
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.style.opacity = '1';
          mainImg.style.transition = 'all 0.20s ease-in';
        }, 100);
        setTimeout(() => {
          mainImg.style.transition = 'all 0.0s ease-in';
        }, 350);
      });
    });
  }
}

export default ProductView;
