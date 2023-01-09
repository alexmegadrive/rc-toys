export const cartHtml = `
<main class="main main_cart">
    <div class="cart">
      <h2 class="cart__title">Shopping cart</h2>
      <div class="cart__items-wrapper">
        <ul class="content cart__content" id="cart">
        </ul>

        <div class="cart__page-controls">
        <div class="pagination" id="pagination"></div>
        <div class="cart__itemsPerPage-select">
          <span class="select__title">Items per page:</span>
          <select class="select__input" name="cartItems-per-page" id="cartItems-per-page-selector" value="">
            <option class="select__item" value="3">3</option>
            <option class="select__item" value="5">5</option>
            <option class="select__item" value="10">10</option>
          </select>
        </div>
         </div>

      </div>
      <div class="detail cart__detail">
        <h3 class="detail__title">Order summary</h3>
       

        <div class="promocode detail__promocode">
          <div class="promocode__input-wrapper">
            <input class="search-input promocode__input" type="text" id="promocode-input" placeholder="Add promocode">
            <button class="promocode__input-btn">Add</button>
          </div>
          <i class="promocode__test">Test promocode: "10FIRST" "SALE23" "REF5"</i>
          <ul class="promocode__list">

          </ul>
        </div>

        <div class="detail__total">
        <span class="detail__text">Products: <span class="total__number" id="cart-total-product"></span></span>
        <span class="detail__text">Delivery: <span>Free</span></span>
      </div>

        <div class="total-price detail__total-price">
          <div class="total-price__wrapper" id="cart-total-text">
            <span class="total-price__text">Total:</span><span class="total-price__number" id="cart-total-sum"></span>
          </div>
        </div>

        <button class="detail__btn-order">Complete Order</button>
      </div>


     </div>
  
  </main>
`;
