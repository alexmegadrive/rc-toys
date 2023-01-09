export const modalHtml = `
  <div class="modal">
  <form class="form">
    <h2 class="form__title">Personal details</h2>
    <ul class="personal-detail form__personal-detail">
      <li class="personal-detail__item">
        <input 
          class="personal-detail__input" 
          type="text" 
          placeholder="First Name & Last Name" 
          pattern="^([A-Za-zА-Яа-яЁё]{3,}\\s?){2,}" 
          title='Format: Minimum two words. Minimal length of each = 3' 
          data-cartModal-inputField="name"
          required>
      </li>
      <li class="personal-detail__item">
        <input
          class="personal-detail__input" 
          type="text" 
          placeholder="Delivery address"
          pattern="^([A-Za-zА-Яа-яЁё]{5,}\\s?){3,}" 
          title='Format: Minimum three words. Minimal length of each = 5' 
          data-cartModal-inputField="address"
          required>
      </li>
      <li class="personal-detail__item">
        <input 
          class="personal-detail__input" 
          type="tel" 
          placeholder="Phone number" 
          pattern="\\+[0-9]{9,15}" 
          title='Format: +15551110000. Minimal length = 9' 
          data-cartModal-inputField="phone"
          required>
      </li>
      <li class="personal-detail__item">
        <input 
          class="personal-detail__input" 
          type="email" 
          placeholder="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" 
          title="example@mail.com"
          data-cartModal-inputField="email"
          required>
      </li>
    </ul>

    <h2 class="form__title">Credit card details</h2>
    <ul class="card-detail form__card-detail">
      <li class="card-detail__item"><img class="card-detail__img" src="./assets/img/no_logo.webp" data-cartModal-img="mastercard"></img>
        <input 
          class="card-detail__input" 
          type="tel" 
          pattern="[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}" 
          title='Format: Only number. Length = 16.' 
          placeholder="Card number" 
          maxlength="19" 
          data-cartModal-inputField="cardNumber"
          required>
      </li>
      <li class="card-detail__item">
        <label class="card-detail__label">VALID
         <input 
            class="card-detail__input" 
            type="text" 
            pattern="[0-9]{2}/[0-9]{2}" 
            title="Format: MM/YY, month: 1-12, year: 22-39" 
            placeholder="00/00" 
            maxlength="5"
            data-cartModal-inputField="cardDate"
            required>
          </label>
      </li>
      <li class="card-detail__item">
        <label class="card-detail__label">CVV
          <input 
            class="card-detail__input" 
            type="number" pattern="[0-9]{3}" 
            title="Format: 000" 
            placeholder="000" 
            maxlength="3" 
            data-cartModal-inputField="cardCvv"
            required>
        </label>
      </li>
    </ul>
    <input class="form__submit-btn" type="submit" value="CONFIRM">
  </form>
  </div>
`;
